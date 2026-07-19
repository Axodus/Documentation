import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Architecture Canonical Review is activated with an audit-only draft', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "ARCHITECTURE_ROLLOUT_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-003-06"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "ARCHITECTURE_CANONICAL_REVIEW_ACTIVE"/)
  for (const id of ['REQ-003-06-001', 'REQ-003-06-002', 'REQ-003-06-003', 'REQ-003-06-004', 'REQ-003-06-005', 'REQ-003-06-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }

  const report = await read('.rag/bba-platform/architecture/BBAPLT-RPT-018-ARCHITECTURE-CANONICAL-REVIEW.md')
  assert.match(report, /document_id: "BBAPLT-RPT-018"/)
  assert.match(report, /publication_status: "DRAFT"/)
  assert.match(report, /audit-only certification gate/i)
  assert.match(report, /BBAPLT-ARCH-001.*BBAPLT-ARCH-027/)
  for (const capability of ['Mission Orchestration', 'Institutional Knowledge', 'AI Workforce', 'Publishing', 'Human Governance', 'Connector Coordination']) assert.match(report, new RegExp(capability))
  assert.match(report, /Product → Domain → Architecture Derivation Audit/)
  assert.match(report, /no orphaned capability/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-RPT-018-ARCHITECTURE-CANONICAL-REVIEW.md'))
})
