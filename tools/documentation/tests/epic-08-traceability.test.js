import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

const req01Reports = [
  ['documentation/EPIC-08-CROSS-CORE-INTEGRATION-MATRIX.md', 'DOC-RPT-190'],
  ['documentation/EPIC-08-DEPENDENCY-REGISTER.md', 'DOC-RPT-191'],
  ['documentation/EPIC-08-INTEGRATION-CONTRADICTION-REGISTER.md', 'DOC-RPT-192'],
  ['documentation/EPIC-08-REQ-01-FREEZE-REPORT.md', 'DOC-RPT-193'],
]

const req02Reports = [
  ['documentation/EPIC-08-CLAIM-TRACEABILITY-REGISTER.md', 'DOC-RPT-194'],
  ['documentation/EPIC-08-STATUS-EVIDENCE-MATRIX.md', 'DOC-RPT-195'],
  ['documentation/EPIC-08-UNSUPPORTED-CLAIM-REGISTER.md', 'DOC-RPT-196'],
  ['documentation/EPIC-08-REQ-02-FREEZE-REPORT.md', 'DOC-RPT-197'],
]

const req03Reports = [
  ['documentation/EPIC-08-AUTHORITY-TRACEABILITY-MATRIX.md', 'DOC-RPT-198'],
  ['documentation/EPIC-08-DECISION-TO-EXECUTION-REGISTER.md', 'DOC-RPT-199'],
  ['documentation/EPIC-08-AUTHORITY-CONFLICT-REGISTER.md', 'DOC-RPT-200'],
  ['documentation/EPIC-08-REQ-03-FREEZE-REPORT.md', 'DOC-RPT-201'],
]

test('EPIC-08 REQ-01 reports are canonical and monotonically identified', async () => {
  for (const [path, id] of req01Reports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
    assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  }
})

test('EPIC-08 integration IDs are unique and canonical paths exist', async () => {
  const matrix = await read(req01Reports[0][0])
  const rows = [...matrix.matchAll(/^\| `(INTG-EP8-\d{4})` \|.*$/gm)]
  assert.equal(rows.length, 36)
  assert.equal(new Set(rows.map((row) => row[1])).size, 36)

  for (const row of rows) {
    const paths = [...row[0].matchAll(/`(docs\/[^`]+\.md)`/g)].map((match) => match[1])
    assert.equal(paths.length, 2)
    for (const path of paths) await access(resolve(root, path))
  }
})

test('EPIC-08 private evidence ledger is marked and excluded from public outputs', async () => {
  const ledger = await read('institutional-disclosure/epic-08-evidence-ledger.md')
  for (const marker of [
    'PRIVATE_ONLY',
    'EXCLUDED_FROM_PUBLICATION',
    'EXCLUDED_FROM_VITEPRESS',
    'EXCLUDED_FROM_PUBLIC_REGISTRIES',
    'EXCLUDED_FROM_PUBLIC_GENERATED_OUTPUTS',
  ]) assert.match(ledger, new RegExp(marker))

  const manifest = await read('documentation.manifest.json')
  const graph = await read('documentation.graph.json')
  assert.doesNotMatch(manifest, /epic-08-evidence-ledger/)
  assert.doesNotMatch(graph, /epic-08-evidence-ledger/)
})

test('EPIC-08 REQ-02 claim and status objects are complete and unique', async () => {
  for (const [path, id] of req02Reports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
  }

  const claims = await read(req02Reports[0][0])
  const claimIds = [...claims.matchAll(/^\| `(CLAIM-EP8-\d{4})` \|/gm)].map((match) => match[1])
  assert.equal(claimIds.length, 32)
  assert.equal(new Set(claimIds).size, 32)
  for (const category of [
    'IDENTITY', 'PRODUCT', 'ARCHITECTURE', 'GOVERNANCE', 'AUTHORITY',
    'EXECUTION', 'RUNTIME', 'TOKENOMICS', 'TREASURY', 'FINANCIAL',
    'SECURITY', 'COMPLIANCE', 'PRODUCTION', 'ACTIVATION',
  ]) assert.match(claims, new RegExp('\\| `' + category + '` \\|'))

  const statuses = await read(req02Reports[1][0])
  const statusIds = [...statuses.matchAll(/^\| `(STAT-EP8-\d{4})` \|/gm)].map((match) => match[1])
  assert.equal(statusIds.length, 14)
  assert.equal(new Set(statusIds).size, 14)
})

test('EPIC-08 REQ-03 authority objects cover every required action class', async () => {
  for (const [path, id] of req03Reports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
  }

  const matrix = await read(req03Reports[0][0])
  const authorityIds = [...matrix.matchAll(/^\| `(AUTH-EP8-\d{4})` \|/gm)].map((match) => match[1])
  assert.equal(authorityIds.length, 14)
  assert.equal(new Set(authorityIds).size, 14)
  for (const state of [
    'FORMALLY_GRANTED_NOT_ACTIVATED', 'IMPLEMENTED_WITHOUT_AUTHORITY',
    'OWNER_DEFINED_PENDING_DECISION', 'OBSERVATIONAL_ONLY',
    'UNRESOLVED_AUTHORITY',
  ]) assert.match(matrix, new RegExp(state))
  assert.match(matrix, /CONSULTATIVE_ONLY/)
})
