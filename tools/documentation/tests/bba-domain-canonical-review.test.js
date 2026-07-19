import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Domain canonical review activates with eight audit-only REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  const report = await read('.rag/bba-platform/domain/BBAPLT-RPT-011-DOMAIN-ROLLOUT-CANONICAL-REVIEW.md')
  assert.match(backlog, /id: "SPRINT-002-07"[\s\S]*status: "PASS_CLOSED"/)
  assert.match(backlog, /status_reason: "DOMAIN_CANONICAL_REVIEW_PASS"/)
  assert.match(backlog, /id: "REQ-002-07-002"[\s\S]*status: "DONE"/)
  for (const id of ['REQ-002-07-001', 'REQ-002-07-002', 'REQ-002-07-003', 'REQ-002-07-004', 'REQ-002-07-005', 'REQ-002-07-006', 'REQ-002-07-007', 'REQ-002-07-008']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-07"\n    to: "SPRINT-002-06"\n    type: "DEPENDS_ON"/)
  assert.match(report, /document_id: "BBAPLT-RPT-011"/)
  assert.match(report, /PASS — Domain Rollout is coherent and ready for Architecture Layer documentation/)
  assert.match(report, /This report is audit-only/)
  assert.match(report, /## Cross-Domain Consistency Audit/)
  assert.match(report, /mutually referential but non-substitutive/)
  assert.match(backlog, /id: "REQ-002-07-003"[\s\S]*status: "DONE"/)
  assert.match(report, /## Ubiquitous Language Audit/)
  assert.match(report, /no replacement vocabulary was introduced/)
  assert.match(backlog, /id: "REQ-002-07-004"[\s\S]*status: "DONE"/)
  assert.match(report, /## Duplication and Conflict Audit/)
  assert.match(report, /No competing owner identified/)
  assert.match(backlog, /id: "REQ-002-07-005"[\s\S]*status: "DONE"/)
  assert.match(report, /## Product-to-Domain Traceability Audit/)
  assert.match(report, /without treating Axodus as a Core dependency/)
  assert.match(backlog, /id: "REQ-002-07-006"[\s\S]*status: "DONE"/)
  assert.match(report, /## Architecture Boundary Audit/)
  assert.match(report, /Architecture decisions remain reserved for EPIC-003/)
  assert.match(backlog, /id: "REQ-002-07-007"[\s\S]*status: "DONE"/)
  assert.match(report, /## Readiness and Open Gaps/)
  assert.match(report, /ready to serve as the source for Architecture Layer\s+documentation/)
  assert.match(backlog, /id: "EPIC-002"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "DOMAIN_CANONICAL_REVIEW_PASS"/)
  assert.match(report, /## Final Canonical Decision/)
  assert.match(report, /## Handoff Decision/)
  assert.match(report, /SPRINT-001-03.*PLANNED \/ WAITING_DOMAIN_VALIDATION/)
  assert.match(report, /EPIC-003.*PLANNED/)
  assert.match(backlog, /id: "REQ-002-07-008"[\s\S]*status: "DONE"/)
  await access(resolve(root, '.rag/bba-platform/domain/BBAPLT-RPT-011-DOMAIN-ROLLOUT-CANONICAL-REVIEW.md'))
})
