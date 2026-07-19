import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Information Architecture Sprint closes with six semantic REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "(?:IN_PROGRESS|PASS_CLOSED)"[\s\S]*status_reason: "(?:ARCHITECTURE_ROLLOUT_ACTIVE|ARCHITECTURE_LAYER_CERTIFIED)"/)
  assert.match(backlog, /id: "SPRINT-003-04"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "INFORMATION_ARCHITECTURE_PASS"/)
  for (const id of ['REQ-003-04-001', 'REQ-003-04-002', 'REQ-003-04-003', 'REQ-003-04-004', 'REQ-003-04-005', 'REQ-003-04-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(backlog, new RegExp(`id: "${id}"[\\s\\S]*status: "DONE"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }

  const model = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-018-CANONICAL-INFORMATION-MODEL.md')
  assert.match(model, /document_id: "BBAPLT-ARCH-018"/)
  for (const term of ['Mission Context', 'Institutional Asset', 'Assignment', 'Deliverable', 'Governance Decision', 'Workflow Progress', 'Connector Context', 'canonical identity', 'Tenant Boundary']) assert.match(model, new RegExp(term, 'i'))
  assert.match(model, /does not prescribe[\s\S]*(storage|schema|serialization)/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-018-CANONICAL-INFORMATION-MODEL.md'))

  const ownership = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-019-INFORMATION-OWNERSHIP-MODEL.md')
  assert.match(ownership, /document_id: "BBAPLT-ARCH-019"/)
  for (const term of ['Information Owner', 'Steward', 'Institutional Authority', 'Accountability', 'Responsibility', 'Delegation', 'Publication']) assert.match(ownership, new RegExp(term))
  assert.match(ownership, /Agent cannot become final Information Owner or Institutional Authority/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-019-INFORMATION-OWNERSHIP-MODEL.md'))

  const lifecycle = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-020-INFORMATION-LIFECYCLE.md')
  assert.match(lifecycle, /document_id: "BBAPLT-ARCH-020"/)
  for (const state of ['Proposed', 'Active', 'Under Review', 'Approved', 'Published', 'Superseded', 'Archived', 'Withdrawn']) assert.match(lifecycle, new RegExp(state))
  for (const term of ['Entry Criteria', 'Exit Criteria', 'Transition Contract', 'Reversal']) assert.match(lifecycle, new RegExp(term))
  assert.match(lifecycle, /Approval is not inferred from Active, Published, or consumed status/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-020-INFORMATION-LIFECYCLE.md'))

  const classification = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-021-INFORMATION-CLASSIFICATION.md')
  assert.match(classification, /document_id: "BBAPLT-ARCH-021"/)
  for (const kind of ['Institutional', 'Operational', 'Knowledge', 'Governance', 'Analytical', 'External', 'Derived']) assert.match(classification, new RegExp(`\\| ${kind} \\|`))
  for (const dimension of ['Provenance', 'Audience scope', 'Sensitivity', 'Temporal relevance', 'Evidence quality']) assert.match(classification, new RegExp(dimension))
  assert.match(classification, /Classification is not ownership/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-021-INFORMATION-CLASSIFICATION.md'))

  const lineage = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-022-INFORMATION-INTEGRITY-AND-LINEAGE.md')
  assert.match(lineage, /document_id: "BBAPLT-ARCH-022"/)
  for (const term of ['Identity integrity', 'Meaning integrity', 'Provenance integrity', 'Evidence integrity', 'Lineage Relationship Types', 'Derived from', 'Translates', 'Supersedes', 'Uncertainty', 'Conflict']) assert.match(lineage, new RegExp(term))
  assert.match(lineage, /No transformation erases the source relationship/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-022-INFORMATION-INTEGRITY-AND-LINEAGE.md'))

  const review = await read('.rag/bba-platform/architecture/BBAPLT-RPT-016-INFORMATION-ARCHITECTURE-REVIEW.md')
  assert.match(review, /document_id: "BBAPLT-RPT-016"/)
  assert.match(review, /Review Result[\s\S]*PASS/)
  for (const criterion of ['Canonical Information Coverage', 'Ownership and Authority Audit', 'Lifecycle Audit', 'Classification Audit', 'Integrity and Lineage Audit', 'Product and Domain Traceability', 'Technology Neutrality Audit']) assert.match(review, new RegExp(criterion))
  assert.match(review, /No CRITICAL or MAJOR findings/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-RPT-016-INFORMATION-ARCHITECTURE-REVIEW.md'))
})
