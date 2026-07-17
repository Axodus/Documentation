import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

const req01Reports = [
  ['.rag/EPIC-08-CROSS-CORE-INTEGRATION-MATRIX.md', 'DOC-RPT-190'],
  ['.rag/EPIC-08-DEPENDENCY-REGISTER.md', 'DOC-RPT-191'],
  ['.rag/EPIC-08-INTEGRATION-CONTRADICTION-REGISTER.md', 'DOC-RPT-192'],
  ['.rag/EPIC-08-REQ-01-FREEZE-REPORT.md', 'DOC-RPT-193'],
]

const req02Reports = [
  ['.rag/EPIC-08-CLAIM-TRACEABILITY-REGISTER.md', 'DOC-RPT-194'],
  ['.rag/EPIC-08-STATUS-EVIDENCE-MATRIX.md', 'DOC-RPT-195'],
  ['.rag/EPIC-08-UNSUPPORTED-CLAIM-REGISTER.md', 'DOC-RPT-196'],
  ['.rag/EPIC-08-REQ-02-FREEZE-REPORT.md', 'DOC-RPT-197'],
]

const req03Reports = [
  ['.rag/EPIC-08-AUTHORITY-TRACEABILITY-MATRIX.md', 'DOC-RPT-198'],
  ['.rag/EPIC-08-DECISION-TO-EXECUTION-REGISTER.md', 'DOC-RPT-199'],
  ['.rag/EPIC-08-AUTHORITY-CONFLICT-REGISTER.md', 'DOC-RPT-200'],
  ['.rag/EPIC-08-REQ-03-FREEZE-REPORT.md', 'DOC-RPT-201'],
]

const req04Reports = [
  ['.rag/EPIC-08-FLOW-INTERFACE-TRACEABILITY-MATRIX.md', 'DOC-RPT-202'],
  ['.rag/EPIC-08-RESIDUAL-FLOW-GAP-REGISTER.md', 'DOC-RPT-203'],
  ['.rag/EPIC-08-FLOW-CLOSURE-ELIGIBILITY-REGISTER.md', 'DOC-RPT-204'],
  ['.rag/EPIC-08-TRACEABILITY-REMEDIATION-MANIFEST.md', 'DOC-RPT-205'],
  ['.rag/EPIC-08-REQ-04-FREEZE-REPORT.md', 'DOC-RPT-206'],
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

test('EPIC-08 REQ-04 freezes eleven flows, six gaps, and existing-page-only manifest', async () => {
  for (const [path, id] of req04Reports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
  }

  const matrix = await read(req04Reports[0][0])
  const flowIds = [...matrix.matchAll(/`(FLOW-EP8-\d{4})`/g)].map((match) => match[1])
  assert.equal(new Set(flowIds).size, 11)
  const stepIds = [...matrix.matchAll(/^\| `FLOW-EP8-\d{4}` \| `(FLOW-EP8-\d{4}-S\d{2})` \|/gm)].map((match) => match[1])
  assert.equal(stepIds.length, 44)
  assert.equal(new Set(stepIds).size, 44)

  const gaps = await read(req04Reports[1][0])
  const gapIds = [...gaps.matchAll(/^\| `(GAP-EP8-\d{4})` \|/gm)].map((match) => match[1])
  assert.equal(gapIds.length, 6)

  const manifest = await read(req04Reports[3][0])
  const rows = [...manifest.matchAll(/^\| `(REM-EP8-\d{4})` \| `(docs\/[^`]+)` \|/gm)]
  assert.equal(rows.length, 19)
  assert.equal(new Set(rows.map((row) => row[1])).size, 19)
  assert.equal(new Set(rows.map((row) => row[2])).size, 19)
  assert.doesNotMatch(manifest, /\| `CREATE` \|/)
  for (const row of rows) await access(resolve(root, row[2]))
})

test('EPIC-08 REQ-05 public pages implement the exact frozen traceability manifest', async () => {
  const report = await loadDocument(resolve(root, '.rag/EPIC-08-REQ-05-EXECUTION-REPORT.md'), { root })
  assert.equal(report.metadata.document_id, 'DOC-RPT-207')

  const manifest = await read('.rag/EPIC-08-TRACEABILITY-REMEDIATION-MANIFEST.md')
  const paths = [...manifest.matchAll(/^\| `REM-EP8-\d{4}` \| `(docs\/[^`]+)` \|/gm)].map((match) => match[1])
  assert.equal(paths.length, 19)
  for (const path of paths) {
    const content = await read(path)
    assert.match(content, /## Canonical Traceability/)
  }

  const acsBusiness = await loadDocument(resolve(root, 'docs/acs/business-integration.md'), { root })
  assert.equal(acsBusiness.metadata.document_id, 'ACS-GDE-003')
  assert.equal(acsBusiness.metadata.production_gate_impact, 'PRESERVES_CLOSED')
})

test('EPIC-08 REQ-06 closes with dimensional maturity and governed gaps', async () => {
  const reports = [
    ['.rag/EPIC-08-MATURITY-AND-TRACEABILITY-SCORECARD.md', 'DOC-RPT-208'],
    ['.rag/EPIC-08-CROSS-CORE-COHERENCE-AUDIT.md', 'DOC-RPT-209'],
    ['.rag/EPIC-08-RESIDUAL-BACKLOG-REGISTER.md', 'DOC-RPT-210'],
    ['.rag/EPIC-08-CLOSURE-REPORT.md', 'DOC-RPT-211'],
  ]
  for (const [path, id] of reports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
  }

  const scorecard = await read(reports[0][0])
  for (const dimension of [
    'Concept', 'Architecture', 'Governance', 'Execution', 'Status', 'Boundary',
    'Integration', 'Traceability', 'Evidence',
  ]) assert.match(scorecard, new RegExp(dimension))
  assert.match(scorecard, /`T4`/)
  assert.doesNotMatch(scorecard, /single global maturity: `M[0-5]`/)

  const backlog = await read(reports[2][0])
  const backlogIds = [...backlog.matchAll(/^\| `(BACK-EP8-\d{4})` \|/gm)]
  assert.equal(backlogIds.length, 14)

  const closure = await read(reports[3][0])
  assert.match(closure, /PASS_CLOSED_WITH_GOVERNED_TRACEABILITY_AND_MATURITY_GAPS/)
  assert.match(closure, /REQ-06 public `docs\/` changes: `0`/)
})
