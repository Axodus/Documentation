import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import {
  normalizeReasoningEffort,
  validateSprintManifest,
} from '../sprint-runner/manifest.js'
import {
  runSprint,
  selectProfiles,
  SprintRunnerError,
} from '../sprint-runner/runner.js'
import { parseManifestPath } from '../sprint-runner/index.js'

test('sprint runner normalizes request reasoning labels', () => {
  assert.equal(normalizeReasoningEffort('Max'), 'xhigh')
  assert.equal(normalizeReasoningEffort('Extra high'), 'xhigh')
  assert.equal(normalizeReasoningEffort('high'), 'high')
  assert.throws(() => normalizeReasoningEffort('ultra'), /Unsupported/)
})

test('runner CLI accepts the pnpm argument separator', async () => {
  assert.equal(
    parseManifestPath(['--', '--manifest', 'requests/sprint.json']),
    'requests/sprint.json',
  )
})

test('worker output schema uses the supported structured-output subset', async () => {
  const schema = JSON.parse(await readFile('tools/documentation/sprint-runner/result.schema.json', 'utf8'))
  assert.equal(schema.additionalProperties, false)
  assert.equal('uniqueItems' in schema.properties.files_changed, false)
})

test('sprint manifest requires unique requests and explicit allowlists', () => {
  const request = fixtureRequest()
  const manifest = validateSprintManifest({
    sprint_id: 'SPRINT',
    required_ancestor: 'base',
    requests: [request],
  })
  assert.equal(manifest.requests[0].reasoning_effort, 'xhigh')
  assert.throws(
    () => validateSprintManifest({
      sprint_id: 'SPRINT',
      required_ancestor: 'base',
      requests: [request, request],
    }),
    /Duplicate request id/,
  )
  assert.throws(
    () => validateSprintManifest({
      sprint_id: 'SPRINT',
      required_ancestor: 'base',
      requests: [{ ...request, allowed_paths: [] }],
    }),
    /must declare allowed_paths/,
  )
})

test('ACS profile escalates when watched public paths changed', async () => {
  const request = {
    ...fixtureRequest(),
    id: 'ACS',
    model: 'terra',
    reasoning_effort: 'high',
    escalation: {
      when_paths_changed_since: 'audit',
      watch_paths: ['docs/acs'],
      model: 'sol',
      reasoning_effort: 'extra high',
    },
  }
  const profiles = await selectProfiles({ requests: [request] }, async (command, args) => {
    assert.equal(command, 'git')
    assert.deepEqual(args, ['diff', '--name-only', 'audit..HEAD', '--', 'docs/acs'])
    return { exitCode: 0, stdout: 'docs/acs/runtime.md\n', stderr: '' }
  }, process.cwd())
  assert.deepEqual(profiles.get('ACS'), { model: 'sol', reasoningEffort: 'xhigh' })
})

test('runner owns the commit after validating an allowlisted worker change', async () => {
  await withFixture(async (root) => {
    const fake = fakeProcess(root)
    const result = await runSprint(fixtureManifest(), { root, run: fake.run, log: () => {} })
    assert.equal(result.requests[0].commit, 'abc123def456')
    assert.equal(fake.commits.length, 1)
    assert.deepEqual(fake.commits[0], ['commit', '-m', 'docs(private): decide fixture'])
    assert.match(await readFile(join(root, 'decision.md'), 'utf8'), /document_id: "PRIV-RPT-999"/)
  })
})

test('runner blocks unauthorized worker paths before commit', async () => {
  await withFixture(async (root) => {
    const fake = fakeProcess(root, { unauthorized: true })
    await assert.rejects(
      () => runSprint(fixtureManifest(), { root, run: fake.run, log: () => {} }),
      (error) => error instanceof SprintRunnerError && error.code === 'UNAUTHORIZED_PATH_CHANGE',
    )
    assert.equal(fake.commits.length, 0)
  })
})

function fixtureRequest() {
  return {
    id: 'REQ-01',
    prompt_path: 'prompt.md',
    model: 'sol',
    reasoning_effort: 'max',
    allowed_paths: ['decision.md'],
    expected_document_ids: [{ path: 'decision.md', id: 'PRIV-RPT-999' }],
    commit_message: 'docs(private): decide fixture',
  }
}

function fixtureManifest() {
  return validateSprintManifest({
    sprint_id: 'SPRINT',
    required_ancestor: 'base',
    requests: [fixtureRequest()],
    boundary_scan_paths: [],
    boundary_forbidden_terms: [],
  })
}

async function withFixture(callback) {
  const root = await mkdtemp(join(tmpdir(), 'sprint-runner-test-'))
  try {
    await writeFile(join(root, 'prompt.md'), '# Fixture request\n', 'utf8')
    await callback(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

function fakeProcess(root, options = {}) {
  let head = 'base'
  let dirty = []
  let staged = []
  const commits = []

  return {
    commits,
    run: async (command, args) => {
      if (command === 'codex') {
        const outputIndex = args.indexOf('--output-last-message')
        if (outputIndex === -1) {
          return { exitCode: 0, stdout: 'MODEL_PROFILE_OK\n', stderr: '' }
        }
        await writeFile(join(root, 'decision.md'), 'document_id: "PRIV-RPT-999"\n', 'utf8')
        dirty = ['decision.md']
        if (options.unauthorized) {
          await writeFile(join(root, 'public.md'), 'unauthorized\n', 'utf8')
          dirty.push('public.md')
        }
        await writeFile(args[outputIndex + 1], JSON.stringify({
          request_id: 'REQ-01',
          outcome: 'READY_TO_COMMIT',
          decision: 'GO_SCOPED',
          corpus_changed: false,
          files_changed: [...dirty],
          summary: 'fixture complete',
        }), 'utf8')
        return { exitCode: 0, stdout: '', stderr: '' }
      }
      assert.equal(command, 'git')
      if (args[0] === 'merge-base') return success()
      if (args[0] === 'status') {
        return success(dirty.map((path) => `?? ${path}`).join('\n'))
      }
      if (args[0] === 'rev-parse' && args.includes('--short=12')) return success('abc123def456\n')
      if (args[0] === 'rev-parse') return success(`${head}\n`)
      if (args[0] === 'add') {
        staged = args.slice(args.indexOf('--') + 1)
        return success()
      }
      if (args[0] === 'diff' && args.includes('--cached')) return success(`${staged.join('\n')}\n`)
      if (args[0] === 'commit') {
        commits.push(args)
        head = 'abc123def456'
        dirty = []
        staged = []
        return success()
      }
      throw new Error(`Unexpected git command: ${args.join(' ')}`)
    },
  }
}

function success(stdout = '') {
  return { exitCode: 0, stdout, stderr: '' }
}
