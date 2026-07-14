import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')
const readJson = async (path) => JSON.parse(await read(path))
const migrated = [
  ['docs/runtime/accountability-records.md', 'RUNTIME-GDE-005'],
  ['docs/runtime/acs-integration.md', 'RUNTIME-GDE-006'],
  ['docs/runtime/architecture.md', 'RUNTIME-GDE-007'],
  ['docs/runtime/communication-cadence.md', 'RUNTIME-GDE-008'],
  ['docs/runtime/delays-and-blockers.md', 'RUNTIME-GDE-009'],
  ['docs/runtime/execution-handoff.md', 'RUNTIME-GDE-010'],
  ['docs/runtime/milestones.md', 'RUNTIME-GDE-011'],
  ['docs/runtime/request-lifecycle.md', 'RUNTIME-GDE-012'],
  ['docs/runtime/status-model.md', 'RUNTIME-GDE-013'],
  ['docs/runtime/validation-and-confirmation.md', 'RUNTIME-GDE-014'],
]

test('Batch 04 promotes exactly the ten frozen Runtime primaries', async () => {
  for (const [path, id] of migrated) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.authority_scope, 'RUNTIME')
    assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
    assert.equal(document.metadata.relationships.length, 2)
  }
})

test('Batch 04 retires matching active registry entries atomically', async () => {
  const baseline = await readJson('documentation.baseline.json')
  const exceptions = await readJson('documentation.exceptions.json')
  const dispositions = await readJson('documentation.exception-dispositions.json')
  const paths = new Set(migrated.map(([path]) => path))
  assert.equal(baseline.entries.length, 563)
  assert.equal(exceptions.exceptions.length, 563)
  assert.equal(dispositions.entries.length, 563)
  assert.equal(dispositions.entries.filter((entry) => entry.primary_disposition === 'MIGRATE').length, 177)
  assert.equal(baseline.entries.some((entry) => paths.has(entry.path)), false)
  assert.equal(exceptions.exceptions.some((entry) => paths.has(entry.document_path)), false)
  assert.equal(dispositions.entries.some((entry) => paths.has(entry.document_path)), false)
})

test('Batch 04 execution evidence uses monotonic canonical IDs and no report edges', async () => {
  for (const [path, id] of [
    ['documentation/EPIC-03-BATCH-04-EXECUTION-REPORT.md', 'DOC-RPT-060'],
    ['documentation/EPIC-03-BATCH-04-SEMANTIC-DIFF.md', 'DOC-RPT-061'],
    ['documentation/EPIC-03-BATCH-04-MIGRATION-EVIDENCE-REGISTER.md', 'DOC-RPT-062'],
    ['documentation/EPIC-03-BATCH-04-SECURITY-AND-BOUNDARY-REVIEW.md', 'DOC-RPT-063'],
  ]) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
  }
})

test('Batch 04 candidate register reconciles primaries and unused alternates', async () => {
  const register = await read('documentation/EPIC-03-BATCH-04-CANDIDATE-REGISTER.md')
  assert.equal((register.match(/\| Primary \| `MIGRATED` \|/g) ?? []).length, 10)
  assert.equal((register.match(/\| Alternate \| Not activated \|/g) ?? []).length, 5)
  assert.match(register, /MIGRATED: 10/)
  assert.match(register, /UNUSED ALTERNATES: 5/)
})
