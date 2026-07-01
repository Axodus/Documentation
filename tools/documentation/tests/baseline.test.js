import assert from 'node:assert/strict'
import test from 'node:test'
import { parseDocument } from '../index.js'
import {
  buildBaseline,
  buildExceptionRegistry,
  serializeBaselineArtifact,
  validateBaseline,
  validateExceptions,
} from '../repository/baseline.js'

test('valid baseline recognizes known legacy', () => {
  const documents = [legacy('legacy.md', '# Legacy\n')]
  const baseline = buildBaseline(documents)
  const result = validateBaseline(baseline, { documents })
  assert.equal(result.valid, true)
  assert.equal(result.statistics.known_legacy, 1)
  assert.equal(result.statistics.changed_legacy, 0)
})

test('invalid baseline envelope is informational but structurally invalid', () => {
  const result = validateBaseline({ baseline_version: '9.0.0', entries: [] }, { documents: [] })
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-034'))
})

test('duplicate baseline entries are detected', () => {
  const documents = [legacy('legacy.md', '# Legacy\n')]
  const baseline = buildBaseline(documents)
  baseline.entries.push(structuredClone(baseline.entries[0]))
  const result = validateBaseline(baseline, { documents })
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-035'))
})

test('hash mismatch identifies changed legacy', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Original\n')])
  const result = validateBaseline(baseline, {
    documents: [legacy('legacy.md', '# Changed\n')],
  })
  assert.equal(result.statistics.changed_legacy, 1)
  assert.ok(codes(result).has('DOC-VAL-028'))
})

test('removed legacy is detected', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Legacy\n')])
  const result = validateBaseline(baseline, { documents: [] })
  assert.equal(result.statistics.removed_legacy, 1)
  assert.ok(codes(result).has('DOC-VAL-030'))
})

test('new unbaselined legacy is detected', () => {
  const baseline = buildBaseline([])
  const result = validateBaseline(baseline, {
    documents: [legacy('new.md', '# New Legacy\n')],
  })
  assert.equal(result.statistics.unbaselined_legacy, 1)
  assert.ok(codes(result).has('DOC-VAL-029'))
})

test('valid exception registry passes', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Legacy\n')])
  const registry = buildExceptionRegistry(baseline)
  const result = validateExceptions(registry, {
    baseline,
    currentDate: baseline.created_at,
  })
  assert.equal(result.valid, true)
  assert.equal(result.statistics.active_exceptions, 1)
})

test('expired exception is informational', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Legacy\n')])
  const registry = buildExceptionRegistry(baseline)
  const result = validateExceptions(registry, {
    baseline,
    currentDate: '2026-10-02T00:00:00Z',
  })
  assert.equal(result.statistics.expired_exceptions, 1)
  assert.ok(codes(result).has('DOC-VAL-031'))
})

test('revoked exception is informational', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Legacy\n')])
  const registry = buildExceptionRegistry(baseline)
  registry.exceptions[0].status = 'REVOKED'
  const result = validateExceptions(registry, { baseline })
  assert.equal(result.statistics.revoked_exceptions, 1)
  assert.ok(codes(result).has('DOC-VAL-033'))
})

test('invalid exception schema is reported', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Legacy\n')])
  const registry = buildExceptionRegistry(baseline)
  delete registry.exceptions[0].owner
  const result = validateExceptions(registry, { baseline })
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-032'))
})

test('unknown exception rule is invalid', () => {
  const baseline = buildBaseline([legacy('legacy.md', '# Legacy\n')])
  const registry = buildExceptionRegistry(baseline)
  registry.exceptions[0].affected_rules = ['DOC-RULE-999']
  const result = validateExceptions(registry, { baseline })
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-032'))
})

test('baseline and exception generation is deterministic', () => {
  const documents = [
    legacy('b.md', '# B\n'),
    legacy('a.md', '# A\n'),
  ]
  const firstBaseline = buildBaseline(documents)
  const secondBaseline = buildBaseline([...documents].reverse())
  assert.equal(serializeBaselineArtifact(firstBaseline), serializeBaselineArtifact(secondBaseline))
  assert.equal(
    serializeBaselineArtifact(buildExceptionRegistry(firstBaseline)),
    serializeBaselineArtifact(buildExceptionRegistry(secondBaseline)),
  )
})

function legacy(path, source) {
  return parseDocument(source, { sourcePath: path })
}

function codes(result) {
  return new Set(result.diagnostics.map((diagnostic) => diagnostic.error_code))
}
