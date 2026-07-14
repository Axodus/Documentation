import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { validateRepository } from '../index.js'
import { main } from '../cli/index.js'
import { parseArguments } from '../cli/parsers/arguments.js'

test('valid check command returns success', async () => {
  const result = await run('check', '--summary')
  assert.equal(result.status, 0)
  assert.match(result.stdout, /Status: SUCCESS/)
})

test('invalid command returns exit code 3', async () => {
  const result = await run('unknown')
  assert.equal(result.status, 3)
  assert.match(result.stderr, /Unknown command/)
})

test('invalid argument combination returns exit code 3', async () => {
  const result = await run('check', '--pretty')
  assert.equal(result.status, 3)
  assert.match(result.stderr, /requires --json/)
})

test('JSON output is valid and versioned', async () => {
  const result = await run('check', '--json')
  const payload = JSON.parse(result.stdout)
  assert.equal(payload.cli_version, '1.0.0')
  assert.equal(payload.validation_version, '1.1.0')
  assert.equal(payload.command, 'check')
})

test('pretty JSON output is indented', async () => {
  const result = await run('check', '--json', '--pretty')
  assert.equal(result.status, 0)
  assert.match(result.stdout, /\n  "cli_version"/)
})

test('summary output suppresses diagnostic details', async () => {
  const result = await run('check', '--summary')
  assert.equal(result.status, 0)
  assert.doesNotMatch(result.stdout, /\n\nDiagnostics:\n/)
})

test('baseline command reports baseline statistics', async () => {
  const payload = await json('baseline')
  const baseline = JSON.parse(await readFile('documentation.baseline.json', 'utf8'))
  assert.equal(payload.statistics.baseline_entries, baseline.entries.length)
  assert.equal(
    payload.statistics.known_legacy +
      payload.statistics.changed_legacy +
      payload.statistics.removed_legacy,
    baseline.entries.length,
  )
})

test('exception command reports exception statistics', async () => {
  const payload = await json('exceptions', '--reference-date', '2026-07-01T00:00:00Z')
  const exceptions = JSON.parse(await readFile('documentation.exceptions.json', 'utf8'))
  assert.equal(payload.statistics.exception_entries, exceptions.exceptions.length)
  assert.equal(payload.statistics.active_exceptions, exceptions.exceptions.length)
})

test('dispositions command reports compact registry statistics', async () => {
  const payload = await json('dispositions')
  const dispositions = JSON.parse(await readFile('documentation.exception-dispositions.json', 'utf8'))
  assert.equal(payload.statistics.disposition_entries, dispositions.entries.length)
  assert.equal(payload.statistics.dispositions_decided, dispositions.entries.length)
})

test('dispositions dry run previews application without registry mutation', async () => {
  const payload = await json('dispositions-dry-run')
  assert.equal(payload.status, 'PASS')
  assert.equal(payload.statistics.disposition_entries, 563)
  assert.equal(payload.statistics.would_apply_dispositions, 563)
  assert.equal(payload.statistics.baseline_entries_removed, 0)
  assert.equal(payload.statistics.exception_entries_removed, 0)
  assert.equal(payload.statistics.exception_registry_entries_mutated, 0)
})

test('schema command excludes relationship diagnostics', async () => {
  const payload = await json('schema')
  assert.ok(payload.diagnostics.every((item) =>
    ['DOC-RULE-001', 'DOC-RULE-002', 'DOC-RULE-003', 'DOC-RULE-004', 'DOC-RULE-024'].includes(item.rule_id)))
})

test('relationship command selects only relationship rules', async () => {
  const payload = await json('relationships')
  assert.ok(payload.diagnostics.every((item) => {
    const number = Number(item.rule_id.slice(-3))
    return (number >= 14 && number <= 21) || number === 26
  }))
})

test('JSON output is byte-identical across repeated executions', async () => {
  const first = await run('check', '--json')
  const second = await run('check', '--json')
  assert.equal(first.stdout, second.stdout)
})

test('exit code 4 identifies missing configured input', async () => {
  const result = await run('baseline', '--baseline', 'missing-baseline.json')
  assert.equal(result.status, 4)
})

test('argument parser supports every documented option', () => {
  const parsed = parseArguments([
    'check', '--json', '--pretty', '--summary', '--fail-on-warning',
    '--scope', 'DOCUMENTATION', '--path', 'governance', '--document-id', 'DOC-SPEC-001',
    '--type', 'SPECIFICATION', '--baseline', 'documentation.baseline.json',
    '--exceptions', 'documentation.exceptions.json', '--dispositions', 'documentation.exception-dispositions.json',
    '--output', '/tmp/output.json',
    '--reference-date', '2026-07-01T00:00:00Z',
  ])
  assert.equal(parsed.options.documentId, 'DOC-SPEC-001')
  assert.equal(parsed.options.failOnWarning, true)
})

test('argument parser requires one generator mode', () => {
  assert.equal(parseArguments(['generate', '--write']).options.write, true)
  assert.equal(parseArguments(['generate', '--check', '--', '--json']).options.json, true)
  assert.throws(() => parseArguments(['generate']), /exactly one/)
  assert.throws(() => parseArguments(['generate', '--write', '--check']), /exactly one/)
})

test('argument parser requires both snapshot comparison identifiers', () => {
  const parsed = parseArguments([
    'snapshot-compare',
    '--snapshot', '2026-07-01T000000Z',
    '--reference', '2026-06-30T000000Z',
  ])
  assert.equal(parsed.options.snapshot, '2026-07-01T000000Z')
  assert.throws(
    () => parseArguments(['snapshot-compare', '--snapshot', '2026-07-01T000000Z']),
    /requires --snapshot and --reference/,
  )
})

test('docs:check diagnostics preserve public API parity', async () => {
  const api = await validateRepository()
  const payload = await json('check')
  assert.deepEqual(payload.diagnostics, api.diagnostics)
  assert.equal(payload.statistics.errors, api.statistics.errors)
  assert.equal(payload.statistics.warnings, api.statistics.warnings)
  assert.equal(payload.statistics.info, api.statistics.info)
})

async function json(...args) {
  const result = await run(...args, '--json')
  assert.equal(result.status, 0, result.stderr)
  return JSON.parse(result.stdout)
}

async function run(...args) {
  let stdout = ''
  let stderr = ''
  const status = await main(args, {
    stdout: (content) => { stdout += content },
    stderr: (content) => { stderr += content },
  })
  return { status, stdout, stderr }
}
