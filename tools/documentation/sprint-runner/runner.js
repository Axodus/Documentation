import { mkdtemp, readFile, readdir, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { basename, join, resolve } from 'node:path'
import { spawn } from 'node:child_process'
import { normalizeReasoningEffort } from './manifest.js'

export class SprintRunnerError extends Error {
  constructor(code, message) {
    super(message)
    this.name = 'SprintRunnerError'
    this.code = code
  }
}

export function defaultProcessRunner(command, args, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env ?? process.env,
      stdio: ['pipe', 'pipe', 'pipe'],
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk) => {
      stdout += chunk
      if (options.stream) process.stdout.write(chunk)
    })
    child.stderr.on('data', (chunk) => {
      stderr += chunk
      if (options.stream) process.stderr.write(chunk)
    })
    child.on('error', reject)
    child.on('close', (exitCode) => resolvePromise({ exitCode, stdout, stderr }))
    if (options.input) child.stdin.write(options.input)
    child.stdin.end()
  })
}

export async function runSprint(manifest, options = {}) {
  const root = resolve(options.root ?? process.cwd())
  const run = options.run ?? defaultProcessRunner
  const log = options.log ?? ((message) => process.stdout.write(`${message}\n`))
  const resultSchema = resolve(root, options.resultSchema ?? 'tools/documentation/sprint-runner/result.schema.json')
  const state = { sprint_id: manifest.sprint_id, requests: [], commits: [] }

  await assertCleanWorktree(run, root)
  await assertRequiredAncestor(run, root, manifest.required_ancestor)
  await runCommands(manifest.preflight_commands ?? [], run, root, log)

  const selectedProfiles = await selectProfiles(manifest, run, root)
  await probeProfiles(selectedProfiles, run, root, log)

  for (const request of manifest.requests) {
    const profile = selectedProfiles.get(request.id)
    const requestResult = await executeRequest({
      request,
      profile,
      manifest,
      root,
      run,
      log,
      resultSchema,
    })
    state.requests.push(requestResult)
    state.commits.push(requestResult.commit)
  }

  await runCommands(manifest.final_validation_commands, run, root, log)
  await assertBoundary(manifest, root)
  await assertCleanWorktree(run, root)
  return state
}

export async function selectProfiles(manifest, run, root) {
  const profiles = new Map()
  for (const request of manifest.requests) {
    let model = request.model
    let reasoningEffort = request.reasoning_effort
    if (request.escalation?.when_paths_changed_since) {
      const changed = await changedPathsSince(
        run,
        root,
        request.escalation.when_paths_changed_since,
        request.escalation.watch_paths ?? [],
      )
      if (changed.length > 0) {
        model = request.escalation.model
        reasoningEffort = normalizeReasoningEffort(request.escalation.reasoning_effort)
      }
    }
    profiles.set(request.id, { model, reasoningEffort })
  }
  return profiles
}

async function executeRequest(context) {
  const { request, manifest, root, run, log, resultSchema } = context
  let profile = context.profile
  log(`[${request.id}] starting with ${profile.model}/${profile.reasoningEffort}`)
  await assertCleanWorktree(run, root)
  const headBefore = await gitOutput(run, root, ['rev-parse', 'HEAD'])
  let workerResult = await runWorker({ request, profile, root, run, log, resultSchema })

  if (workerResult.outcome === 'ESCALATION_REQUIRED' && request.escalation) {
    await assertCleanWorktree(run, root)
    profile = {
      model: request.escalation.model,
      reasoningEffort: normalizeReasoningEffort(request.escalation.reasoning_effort),
    }
    log(`[${request.id}] escalating to ${profile.model}/${profile.reasoningEffort}`)
    await probeProfile(profile, run, root)
    workerResult = await runWorker({ request, profile, root, run, log, resultSchema })
  }

  if (workerResult.outcome !== 'READY_TO_COMMIT') {
    throw new SprintRunnerError(
      workerResult.outcome === 'FAIL' ? 'REQUEST_FAILED' : 'REQUEST_BLOCKED',
      `${request.id} returned ${workerResult.outcome}: ${workerResult.summary}`,
    )
  }

  const headAfterWorker = await gitOutput(run, root, ['rev-parse', 'HEAD'])
  if (headAfterWorker !== headBefore) {
    throw new SprintRunnerError('UNAUTHORIZED_COMMIT', `${request.id} changed HEAD during worker execution.`)
  }

  const changedPaths = await worktreePaths(run, root)
  assertAllowedPaths(request, changedPaths)
  await assertExpectedDocuments(request, root)
  await assertExpectedContent(request, root)
  await runCommands(request.validation_commands, run, root, log)
  await assertBoundary(manifest, root)

  await git(run, root, ['add', '--', ...request.allowed_paths])
  const stagedPaths = lines(await gitOutput(run, root, ['diff', '--cached', '--name-only']))
  assertAllowedPaths(request, stagedPaths)
  if (stagedPaths.length === 0) {
    throw new SprintRunnerError('EMPTY_COMMIT', `${request.id} produced no staged changes.`)
  }
  await git(run, root, ['commit', '-m', request.commit_message], { stream: true })
  const commit = await gitOutput(run, root, ['rev-parse', '--short=12', 'HEAD'])
  await assertCleanWorktree(run, root)
  log(`[${request.id}] committed ${commit}`)
  return {
    id: request.id,
    model: profile.model,
    reasoning_effort: profile.reasoningEffort,
    decision: workerResult.decision,
    commit,
    changed_paths: stagedPaths,
  }
}

async function runWorker({ request, profile, root, run, log, resultSchema }) {
  const temporaryDirectory = await mkdtemp(join(tmpdir(), 'axodus-sprint-runner-'))
  const outputPath = join(temporaryDirectory, `${safeName(request.id)}.json`)
  try {
    const prompt = await buildPrompt(request, root)
    const args = codexArgs(profile, root, [
      '--output-schema', resultSchema,
      '--output-last-message', outputPath,
      '-',
    ])
    const result = await run('codex', args, { cwd: root, input: prompt, stream: true })
    if (result.exitCode !== 0) {
      throw new SprintRunnerError('MODEL_EXECUTION_FAILED', `${request.id} Codex execution failed with exit ${result.exitCode}.`)
    }
    const raw = await readFile(outputPath, 'utf8')
    const parsed = JSON.parse(raw)
    log(`[${request.id}] worker outcome ${parsed.outcome}`)
    return parsed
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true })
  }
}

async function buildPrompt(request, root) {
  const requestBody = await readFile(resolve(root, request.prompt_path), 'utf8')
  return `${requestBody}\n\n## Runner execution contract\n\n` +
    `- Work only on request ${request.id}.\n` +
    `- Modify only these paths: ${request.allowed_paths.join(', ')}.\n` +
    '- Do not run git commit, git push, git add, git reset, git checkout, or git restore.\n' +
    '- Do not modify public documentation or generated public artifacts.\n' +
    '- Complete repository-backed analysis before writing the authorized artifact.\n' +
    '- If blocked, do not invent a decision. Return BLOCKED.\n' +
    '- If this request requires escalation because the relevant corpus changed, make no edits and return ESCALATION_REQUIRED.\n' +
    '- Your final response must match the provided JSON output schema.\n'
}

function codexArgs(profile, root, extra = [], sandbox = 'workspace-write') {
  return [
    'exec',
    '--ephemeral',
    '-C', root,
    '--model', profile.model,
    '--sandbox', sandbox,
    '--config', `model_reasoning_effort="${profile.reasoningEffort}"`,
    '--config', 'approval_policy="never"',
    '--config', 'sandbox_workspace_write.network_access=false',
    ...extra,
  ]
}

async function probeProfiles(profiles, run, root, log) {
  const unique = new Map()
  for (const profile of profiles.values()) unique.set(`${profile.model}:${profile.reasoningEffort}`, profile)
  for (const profile of unique.values()) {
    log(`[preflight] probing ${profile.model}/${profile.reasoningEffort}`)
    await probeProfile(profile, run, root)
  }
}

async function probeProfile(profile, run, root) {
  const result = await run('codex', codexArgs(profile, root, ['-'], 'read-only'), {
    cwd: root,
    input: 'Return exactly MODEL_PROFILE_OK and do not call tools.',
  })
  if (result.exitCode !== 0 || !`${result.stdout}\n${result.stderr}`.includes('MODEL_PROFILE_OK')) {
    throw new SprintRunnerError(
      'BLOCKED_MODEL_UNAVAILABLE',
      `Model profile ${profile.model}/${profile.reasoningEffort} is unavailable.`,
    )
  }
}

async function changedPathsSince(run, root, commit, paths) {
  if (paths.length === 0) return []
  const output = await gitOutput(run, root, ['diff', '--name-only', `${commit}..HEAD`, '--', ...paths])
  return lines(output)
}

async function runCommands(commands, run, root, log) {
  for (const command of commands) {
    const [executable, ...rawArgs] = command
    const args = await expandGlobs(rawArgs, root)
    log(`[validation] ${[executable, ...args].join(' ')}`)
    const result = await run(executable, args, { cwd: root, stream: true })
    if (result.exitCode !== 0) {
      throw new SprintRunnerError('VALIDATION_FAILED', `Command failed: ${command.join(' ')}`)
    }
  }
}

async function expandGlobs(args, root) {
  const expanded = []
  for (const argument of args) {
    if (!argument.includes('*')) {
      expanded.push(argument)
      continue
    }
    const slash = argument.lastIndexOf('/')
    const directory = slash === -1 ? '.' : argument.slice(0, slash)
    const pattern = slash === -1 ? argument : argument.slice(slash + 1)
    const expression = new RegExp(`^${pattern.split('*').map(escapeRegex).join('.*')}$`)
    const entries = await readdir(resolve(root, directory), { withFileTypes: true })
    const matches = entries
      .filter((entry) => entry.isFile() && expression.test(entry.name))
      .map((entry) => directory === '.' ? entry.name : `${directory}/${entry.name}`)
      .sort()
    if (matches.length === 0) {
      throw new SprintRunnerError('VALIDATION_CONFIGURATION_ERROR', `Glob '${argument}' matched no files.`)
    }
    expanded.push(...matches)
  }
  return expanded
}

async function assertBoundary(manifest, root) {
  for (const path of manifest.boundary_scan_paths) {
    const content = await readFile(resolve(root, path), 'utf8')
    for (const term of manifest.boundary_forbidden_terms) {
      if (content.includes(term)) {
        throw new SprintRunnerError('BOUNDARY_BLOCKER', `${path} contains forbidden term '${term}'.`)
      }
    }
  }
}

async function assertExpectedDocuments(request, root) {
  for (const expected of request.expected_document_ids) {
    const content = await readFile(resolve(root, expected.path), 'utf8')
    if (!content.includes(`document_id: "${expected.id}"`)) {
      throw new SprintRunnerError('DOCUMENT_ID_MISMATCH', `${expected.path} does not declare ${expected.id}.`)
    }
  }
}

async function assertExpectedContent(request, root) {
  for (const expectation of request.expected_content ?? []) {
    const content = await readFile(resolve(root, expectation.path), 'utf8')
    for (const required of expectation.includes ?? []) {
      if (!content.includes(required)) {
        throw new SprintRunnerError(
          'EXPECTED_CONTENT_MISSING',
          `${expectation.path} does not contain '${required}'.`,
        )
      }
    }
  }
}

function assertAllowedPaths(request, paths) {
  const allowed = new Set(request.allowed_paths)
  const unexpected = paths.filter((path) => !allowed.has(path))
  if (unexpected.length > 0) {
    throw new SprintRunnerError(
      'UNAUTHORIZED_PATH_CHANGE',
      `${request.id} changed unauthorized paths: ${unexpected.join(', ')}`,
    )
  }
}

async function assertCleanWorktree(run, root) {
  const paths = await worktreePaths(run, root)
  if (paths.length > 0) {
    throw new SprintRunnerError('DIRTY_WORKTREE', `Worktree is not clean: ${paths.join(', ')}`)
  }
}

async function assertRequiredAncestor(run, root, commit) {
  const result = await run('git', ['merge-base', '--is-ancestor', commit, 'HEAD'], { cwd: root })
  if (result.exitCode !== 0) {
    throw new SprintRunnerError('BASELINE_MISMATCH', `Required ancestor ${commit} is not in HEAD.`)
  }
}

async function worktreePaths(run, root) {
  const result = await git(run, root, ['status', '--porcelain=v1', '--untracked-files=all'])
  return result.stdout
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => line.slice(3).replace(/^"|"$/g, ''))
}

async function git(run, root, args, options = {}) {
  const result = await run('git', args, { cwd: root, ...options })
  if (result.exitCode !== 0) {
    throw new SprintRunnerError('GIT_FAILED', `git ${args.join(' ')} failed: ${result.stderr.trim()}`)
  }
  return result
}

async function gitOutput(run, root, args) {
  return (await git(run, root, args)).stdout.trim()
}

function lines(value) {
  return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
}

function safeName(value) {
  return basename(value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))
}

function escapeRegex(value) {
  return value.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
}
