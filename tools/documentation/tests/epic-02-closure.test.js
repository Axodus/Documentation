import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')
const closureDocuments = [
  ['.rag/DOCUMENTATION-EPIC-02-FINAL-VALIDATION-REPORT.md', 'DOC-RPT-033'],
  ['.rag/DOCUMENTATION-EPIC-02-CLOSURE-AUDIT.md', 'DOC-RPT-034'],
  ['.rag/DOCUMENTATION-EPIC-02-COMPLETION-REPORT.md', 'DOC-RPT-035'],
  ['.rag/DOCUMENTATION-EPIC-02-FINAL-EVIDENCE-SUMMARY.md', 'DOC-RPT-036'],
  ['.rag/DOCUMENTATION-POST-EPIC-02-BACKLOG.md', 'DOC-ROAD-008'],
  ['.rag/DOCUMENTATION-EPIC-03-RECOMMENDATION.md', 'DOC-ROAD-009'],
]
const reservationRecords = [
  '.rag/DOCUMENTATION-BATCH-01-ID-RESERVATION-RECORD.md',
  '.rag/DOCUMENTATION-BATCH-02-ID-RESERVATION-RECORD.md',
  '.rag/DOCUMENTATION-BATCH-03-ID-RESERVATION-RECORD.md',
]

test('REQ-10 closure artifacts are canonical and related', async () => {
  for (const [path, id] of closureDocuments) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('EPIC-02 closure records PASS_CLOSED and all quantitative targets', async () => {
  const report = await read('.rag/DOCUMENTATION-EPIC-02-FINAL-VALIDATION-REPORT.md')
  assert.match(report, /Result: PASS_CLOSED/)
  assert.match(report, /Canonical documents \| 150 >= 100 PASS/)
  assert.match(report, /Legacy documents \| 573 <= 573 PASS/)
  assert.match(report, /Metadata coverage \| 22\.25% >= 15% PASS/)
  assert.match(report, /Migrations \| 60 >= 60 PASS/)
  assert.match(report, /Batches \| 3\/3 PASS/)
})

test('all three migration batches are accepted by the closure audit', async () => {
  const audit = await read('.rag/DOCUMENTATION-EPIC-02-CLOSURE-AUDIT.md')
  assert.match(audit, /Batch 01.*ACCEPTED/)
  assert.match(audit, /Batch 02.*ACCEPTED/)
  assert.match(audit, /Batch 03.*ACCEPTED/)
})

test('baseline and exception registries remain synchronized after Batch 04', async () => {
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  const baselinePaths = baseline.entries.map((entry) => entry.path).sort()
  const exceptionPaths = exceptions.exceptions.map((entry) => entry.document_path).sort()
  assert.equal(baselinePaths.length, 563)
  assert.equal(exceptionPaths.length, 563)
  assert.deepEqual(baselinePaths, exceptionPaths)
})

test('60 published migration IDs are unique and reconciled with the manifest', async () => {
  const records = await Promise.all(reservationRecords.map(read))
  const reservations = records.flatMap((record) =>
    [...record.matchAll(/^- `([A-Z]+-[A-Z]+-\d{3})` → `([^`]+)`$/gm)]
      .map((match) => ({ id: match[1], path: match[2] })),
  )
  const manifest = JSON.parse(await read('documentation.manifest.json'))
  const manifestById = new Map(manifest.documents.map((document) => [document.document_id, document]))
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  const baselinePaths = new Set(baseline.entries.map((entry) => entry.path))
  const exceptionPaths = new Set(exceptions.exceptions.map((entry) => entry.document_path))

  assert.equal(reservations.length, 60)
  assert.equal(new Set(reservations.map(({ id }) => id)).size, 60)
  assert.equal(new Set(reservations.map(({ path }) => path)).size, 60)
  for (const { id, path } of reservations) {
    assert.equal(manifestById.get(id)?.source_path, path)
    assert.equal(baselinePaths.has(path), false)
    assert.equal(exceptionPaths.has(path), false)
  }
})

test('all public cores remain ADOPTED_PARTIAL and CORE remains reserved', async () => {
  const matrix = await read('.rag/DOCUMENTATION-CORE-ADOPTION-MATRIX.md')
  assert.equal(
    matrix.split('\n').filter((line) => line.startsWith(' | ') && line.includes('`ADOPTED_PARTIAL`')).length,
    16,
  )
  assert.match(matrix, /`CORE` remains `GOVERNANCE_RESERVED`/)
  assert.doesNotMatch(matrix, /\|\s*`ADOPTED_TARGET`\s*\|/)
})

test('post-EPIC backlog tracks mandatory residual work', async () => {
  const backlog = await read('.rag/DOCUMENTATION-POST-EPIC-02-BACKLOG.md')
  for (const expected of [
    '2026-10-01',
    'default-overview-only',
    'Visual inspection',
    'GitHub Actions by immutable SHA',
    'Filesystem-safe snapshot IDs',
    'Workflow parallelization',
    'ADOPTED_TARGET',
  ]) {
    assert.match(backlog, new RegExp(expected, 'i'))
  }
})
