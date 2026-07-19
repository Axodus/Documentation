import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Architecture Canonical Review certifies the Architecture Layer for Development', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "ARCHITECTURE_LAYER_CERTIFIED"/)
  assert.match(backlog, /id: "SPRINT-003-06"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "ARCHITECTURE_CANONICAL_REVIEW_PASS"/)
  for (const id of ['REQ-003-06-001', 'REQ-003-06-002', 'REQ-003-06-003', 'REQ-003-06-004', 'REQ-003-06-005', 'REQ-003-06-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }

  const report = await read('.rag/bba-platform/architecture/BBAPLT-RPT-018-ARCHITECTURE-CANONICAL-REVIEW.md')
  assert.match(report, /document_id: "BBAPLT-RPT-018"/)
  assert.match(report, /publication_status: "DRAFT"/)
  assert.match(report, /audit-only/i)
  assert.match(report, /BBAPLT-ARCH-001` through[\s\S]*BBAPLT-ARCH-027/)
  for (const capability of ['Mission Orchestration', 'Institutional Knowledge', 'AI Workforce', 'Publishing', 'Human Governance', 'Connector Coordination']) assert.match(report, new RegExp(capability))
  assert.match(report, /Product → Domain → Architecture Derivation Audit/)
  assert.match(report, /no orphaned capability/i)
  assert.match(report, /Product Capability Coverage/)
  assert.match(report, /Bounded Context Coverage/)
  for (const context of ['Mission and Intent', 'Institutional Asset', 'AI Workforce', 'Human Governance', 'Workflow Coordination', 'Connector Boundary']) assert.match(report, new RegExp(context))
  assert.match(report, /Glossary, ADR, and Technology Neutrality Audit/)
  assert.match(report, /Every Architecture document from `BBAPLT-ARCH-001` through/)
  assert.match(report, /No document makes REST, GraphQL, gRPC/i)
  assert.match(report, /Architecture Readiness Assessment/)
  assert.match(report, /Classification: `COMPLETE`/)
  assert.match(report, /Readiness for Development Layer.*PASS/)
  assert.match(report, /No `MINOR`, `MAJOR`, or `CRITICAL` finding blocks certification/)
  assert.match(report, /Entry Criteria for EPIC-004/)
  assert.match(report, /Final Certification Decision[\s\S]*PASS_CLOSED/)
  assert.match(report, /EPIC-003 is closed with[\s\S]*`ARCHITECTURE_LAYER_CERTIFIED`/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-RPT-018-ARCHITECTURE-CANONICAL-REVIEW.md'))
})
