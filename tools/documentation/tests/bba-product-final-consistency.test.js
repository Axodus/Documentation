import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Product final consistency review activates with eight audit REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  const report = await read('.rag/bba-platform/product/BBAPLT-RPT-012-PRODUCT-FINAL-CONSISTENCY-REVIEW.md')
  assert.match(backlog, /id: "EPIC-001"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "PRODUCT_FINAL_CONSISTENCY_REVIEW_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-001-03"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "PRODUCT_FINAL_CONSISTENCY_REVIEW_ACTIVE"/)
  for (const id of ['REQ-001-03-001', 'REQ-001-03-002', 'REQ-001-03-003', 'REQ-001-03-004', 'REQ-001-03-005', 'REQ-001-03-006', 'REQ-001-03-007', 'REQ-001-03-008']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-001-03"\n    to: "REQ-001-03-008"\n    type: "CONTAINS"/)
  assert.match(report, /document_id: "BBAPLT-RPT-012"/)
  assert.match(report, /DRAFT — Product final consistency evidence is being accumulated/)
  assert.match(report, /This review is audit-only/)
  assert.match(report, /13 existing documents/)
  assert.match(backlog, /id: "REQ-001-03-002"[\s\S]*status: "DONE"/)
  assert.match(report, /## Product ↔ Domain Alignment Matrix/)
  assert.match(report, /no orphaned strategic Product concept/)
  assert.match(backlog, /id: "REQ-001-03-003"[\s\S]*status: "DONE"/)
  assert.match(report, /## Strategic Scope Audit/)
  assert.match(report, /No Product document was found to introduce an operational state model/)
  assert.match(backlog, /id: "REQ-001-03-004"[\s\S]*status: "DONE"/)
  assert.match(report, /## Redundancy Assessment/)
  assert.match(report, /No `MAJOR` or `CRITICAL` responsibility conflict was found/)
  await access(resolve(root, '.rag/bba-platform/product/BBAPLT-RPT-012-PRODUCT-FINAL-CONSISTENCY-REVIEW.md'))
})
