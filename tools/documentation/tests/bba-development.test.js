import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Development rollout is activated with the full execution backlog', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-004"[\s\S]*status: "(?:IN_PROGRESS|PASS_CLOSED)"[\s\S]*status_reason: "(?:DEVELOPMENT_ROLLOUT_ACTIVE|DEVELOPMENT_LAYER_CERTIFIED)"/)
  assert.match(backlog, /id: "SPRINT-004-01"[\s\S]*status: "(?:IN_PROGRESS|PASS_CLOSED)"[\s\S]*status_reason: "(?:DEVELOPMENT_CONSTITUTION_ACTIVE|DEVELOPMENT_FOUNDATION_PASS)"/)
  assert.equal((backlog.match(/            - id: "REQ-004-/g) ?? []).length, 36)
  for (const sprint of ['SPRINT-004-01', 'SPRINT-004-02', 'SPRINT-004-03', 'SPRINT-004-04', 'SPRINT-004-05', 'SPRINT-004-06']) assert.match(graph, new RegExp(`"${sprint}"`))
  for (const id of ['REQ-004-01-001', 'REQ-004-01-002', 'REQ-004-01-003', 'REQ-004-01-004', 'REQ-004-01-005', 'REQ-004-01-006', 'REQ-004-06-006']) assert.match(graph, new RegExp(`"${id}"`))

  const constitution = await read('.rag/bba-platform/development/BBAPLT-DEV-001-DEVELOPMENT-CONSTITUTION.md')
  assert.match(constitution, /document_id: "BBAPLT-GDE-076"/)
  for (const term of ['Certified sources govern implementation', 'Domain meaning is preserved', 'Human Governance remains authoritative', 'Tenant isolation is invariant', 'Institutional Assets retain canonical identity', 'Mandatory Development Evidence']) assert.match(constitution, new RegExp(term))
  assert.match(constitution, /does not select a programming language, framework, database/i)
  await access(resolve(root, '.rag/bba-platform/development/BBAPLT-DEV-001-DEVELOPMENT-CONSTITUTION.md'))

  const review = await read('.rag/bba-platform/development/BBAPLT-RPT-019-DEVELOPMENT-FOUNDATION-REVIEW.md')
  assert.match(review, /document_id: "BBAPLT-RPT-019"/)
  assert.match(review, /Review Result[\s\S]*PASS/)
  assert.match(review, /No `MINOR`, `MAJOR`, or `CRITICAL` finding blocks closure/)

  const backendReview = await read('.rag/bba-platform/development/BBAPLT-RPT-020-BACKEND-ARCHITECTURE-REVIEW.md')
  assert.match(backendReview, /document_id: "BBAPLT-RPT-020"/)
  assert.match(backendReview, /Review Result[\s\S]*PASS/)

  const frontendReview = await read('.rag/bba-platform/development/BBAPLT-RPT-021-FRONTEND-ARCHITECTURE-REVIEW.md')
  assert.match(frontendReview, /document_id: "BBAPLT-RPT-021"/)
  assert.match(frontendReview, /Review Result[\s\S]*PASS/)

  assert.match(backlog, /id: "SPRINT-004-06"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "DEVELOPMENT_CANONICAL_REVIEW_PASS"/)
  assert.match(backlog, /id: "EPIC-004"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "DEVELOPMENT_LAYER_CERTIFIED"/)

  const canonicalReview = await read('.rag/bba-platform/development/BBAPLT-RPT-024-DEVELOPMENT-CANONICAL-REVIEW.md')
  assert.match(canonicalReview, /document_id: "BBAPLT-RPT-024"/)
  assert.match(canonicalReview, /Review Result[\s\S]*PASS/)
})
