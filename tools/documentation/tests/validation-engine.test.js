import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import matter from 'gray-matter'
import {
  parseDocument,
  validateDocument,
  validateRepository,
} from '../index.js'
import { validateDocumentSet } from '../repository/repository-validator.js'

const ROOT = resolve(import.meta.dirname, '../../..')

test('valid canonical document passes', () => {
  const result = validateDocument(source())
  assert.equal(result.valid, true)
  assert.equal(result.statistics.errors, 0)
})

test('invalid schema and missing required field fail canonical validation', () => {
  const metadata = validMetadata()
  delete metadata.owner
  const result = validateDocument(source(metadata))
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-004'))
})

test('invalid SemVer is reported', () => {
  const result = validateDocument(source({ ...validMetadata(), version: 'v1' }))
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-005'))
})

test('invalid date ordering is reported', () => {
  const result = validateDocument(source({
    ...validMetadata(),
    created_date: '2026-07-02',
    last_updated: '2026-07-01',
  }))
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-006'))
})

test('review cycle maximum interval is enforced', () => {
  const result = validateDocument(source({
    ...validMetadata(),
    next_review: '2027-02-01',
  }))
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-012'))
})

test('invalid enums are rejected by schema', () => {
  const result = validateDocument(source({
    ...validMetadata(),
    authority_level: 'UNLIMITED',
  }))
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-004'))
})

test('invalid and reserved identifiers are reported', () => {
  const invalid = validateDocument(source({ ...validMetadata(), document_id: 'bad-id' }))
  assert.ok(codes(invalid).has('DOC-VAL-007'))
  const reserved = validateDocument(source({ ...validMetadata(), document_id: 'TST-SPEC-000' }))
  assert.ok(codes(reserved).has('DOC-VAL-008'))
})

test('duplicate IDs fail repository validation', () => {
  const documents = [
    parsed('a.md', validMetadata()),
    parsed('b.md', validMetadata()),
  ]
  const result = validateDocumentSet(documents)
  assert.equal(result.valid, false)
  assert.equal(result.diagnostics.filter((item) => item.error_code === 'DOC-VAL-015').length, 2)
})

test('duplicate aliases fail repository validation', () => {
  const documents = [
    parsed('a.md', { ...validMetadata(), document_id: 'TST-SPEC-001', aliases: ['OLD-ID'] }),
    parsed('b.md', { ...validMetadata(), document_id: 'TST-SPEC-002', aliases: ['OLD-ID'] }),
  ]
  const result = validateDocumentSet(documents)
  assert.equal(result.valid, false)
  assert.equal(result.diagnostics.filter((item) => item.error_code === 'DOC-VAL-016').length, 2)
})

test('broken relationship is reported', () => {
  const metadata = {
    ...validMetadata(),
    relationships: [{ type: 'DEPENDS_ON', target: 'TST-SPEC-999' }],
  }
  const result = validateDocumentSet([parsed('a.md', metadata)])
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-018'))
})

test('forbidden dependency cycle fails', () => {
  const documents = [
    parsed('a.md', {
      ...validMetadata(),
      document_id: 'TST-SPEC-001',
      relationships: [{ type: 'DEPENDS_ON', target: 'TST-SPEC-002' }],
    }),
    parsed('b.md', {
      ...validMetadata(),
      document_id: 'TST-SPEC-002',
      relationships: [{ type: 'DEPENDS_ON', target: 'TST-SPEC-001' }],
    }),
  ]
  const result = validateDocumentSet(documents)
  assert.equal(result.valid, false)
  assert.ok(codes(result).has('DOC-VAL-020'))
})

test('RELATES_TO cycle is informational and allowed', () => {
  const documents = [
    parsed('a.md', {
      ...validMetadata(),
      document_id: 'TST-SPEC-001',
      relationships: [{ type: 'RELATES_TO', target: 'TST-SPEC-002' }],
    }),
    parsed('b.md', {
      ...validMetadata(),
      document_id: 'TST-SPEC-002',
      relationships: [{ type: 'RELATES_TO', target: 'TST-SPEC-001' }],
    }),
  ]
  const result = validateDocumentSet(documents)
  assert.equal(result.valid, true)
  assert.ok(codes(result).has('DOC-VAL-021'))
})

test('template profile accepts placeholders without canonical failure', async () => {
  const template = await readFile(resolve(ROOT, 'templates/ADR-TEMPLATE.md'), 'utf8')
  const result = validateDocument(template, { sourcePath: 'templates/ADR-TEMPLATE.md' })
  assert.equal(result.valid, true)
  assert.equal(result.statistics.templates, 1)
  assert.equal(result.statistics.errors, 0)
})

test('legacy profile is informational', () => {
  const result = validateDocument('# Legacy Document\n')
  assert.equal(result.valid, true)
  assert.equal(result.statistics.legacy, 1)
  assert.deepEqual([...codes(result)], ['DOC-VAL-001'])
})

test('repository API validates the real repository deterministically', async () => {
  const first = await validateRepository({ root: ROOT })
  const second = await validateRepository({ root: ROOT })
  assert.equal(first.valid, true)
  assert.deepEqual(first.statistics, second.statistics)
  assert.deepEqual(first.diagnostics, second.diagnostics)
  assert.equal(first.statistics.errors, 0)
})

function validMetadata() {
  return {
    schema_version: '1.0.0',
    document_id: 'TST-SPEC-001',
    aliases: [],
    document_type: 'SPECIFICATION',
    title: 'Test Specification',
    summary: 'Defines a canonical test specification for validation.',
    version: '1.0.0',
    publication_status: 'DRAFT',
    document_state: 'CURRENT',
    maturity_level: 'D1',
    authority_scope: 'TEST',
    authority_level: 'PROJECT',
    author: 'Test Author',
    owner: 'Test Owner',
    maintainer: 'Test Maintainer',
    technical_reviewers: ['Test Reviewer'],
    business_reviewers: [],
    security_reviewers: [],
    approver: null,
    created_date: '2026-07-01',
    last_updated: '2026-07-01',
    last_reviewed: null,
    review_cycle: 'SEMIANNUAL',
    next_review: '2027-01-01',
    supersedes: [],
    relationships: [],
    related_epics: [],
    related_requirements: [],
    related_adrs: [],
    related_cores: [],
    implementation_refs: [],
    production_gate_impact: 'NONE',
  }
}

function source(metadata = validMetadata()) {
  return matter.stringify(`# ${metadata.title ?? 'Test Specification'}\n`, metadata)
}

function parsed(path, metadata) {
  return parseDocument(source(metadata), { sourcePath: path })
}

function codes(result) {
  return new Set(result.diagnostics.map((diagnostic) => diagnostic.error_code))
}
