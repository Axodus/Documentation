import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Quality Attributes Sprint closes with six cross-cutting REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "ARCHITECTURE_ROLLOUT_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-003-05"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "QUALITY_ATTRIBUTES_ARCHITECTURE_PASS"/)
  for (const id of ['REQ-003-05-001', 'REQ-003-05-002', 'REQ-003-05-003', 'REQ-003-05-004', 'REQ-003-05-005', 'REQ-003-05-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(backlog, new RegExp(`id: "${id}"[\\s\\S]*status: "DONE"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }

  const framework = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-023-QUALITY-ATTRIBUTES-FRAMEWORK.md')
  assert.match(framework, /document_id: "BBAPLT-ARCH-023"/)
  for (const attribute of ['Semantic Consistency', 'Tenant Isolation', 'Auditability', 'Traceability', 'Observability', 'Security', 'Resilience', 'Scalability', 'Governability', 'Interoperability']) assert.match(framework, new RegExp(attribute))
  for (const term of ['scenario', 'measure', 'threshold', 'trade-off', 'Quality Gates']) assert.match(framework, new RegExp(term, 'i'))
  assert.match(framework, /does not select a technology|does not define benchmarks/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-023-QUALITY-ATTRIBUTES-FRAMEWORK.md'))

  const consistency = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-024-SEMANTIC-CONSISTENCY-AND-TENANT-ISOLATION.md')
  assert.match(consistency, /document_id: "BBAPLT-ARCH-024"/)
  for (const term of ['Semantic Consistency', 'Tenant Boundary', 'Conflict Resolution', 'Cross-Tenant Collaboration Contract', 'fail semantically closed', 'shared Capability']) assert.match(consistency, new RegExp(term, 'i'))
  assert.match(consistency, /No technical convenience can override Tenant Boundary/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-024-SEMANTIC-CONSISTENCY-AND-TENANT-ISOLATION.md'))

  const audit = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-025-AUDITABILITY-AND-TRACEABILITY.md')
  assert.match(audit, /document_id: "BBAPLT-ARCH-025"/)
  for (const term of ['Auditability', 'Traceability', 'Traceability Chain', 'Trace Record Contract', 'Decision Reconstruction', 'Lineage Reconstruction', 'Tenant Boundary Reconstruction']) assert.match(audit, new RegExp(term))
  assert.match(audit, /Traceability is bidirectional across Product, Domain, Architecture/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-025-AUDITABILITY-AND-TRACEABILITY.md'))

  const observability = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-026-CONCEPTUAL-OBSERVABILITY-AND-SECURITY.md')
  assert.match(observability, /document_id: "BBAPLT-ARCH-026"/)
  for (const term of ['Observability versus Auditability', 'Semantic Signals', 'Confidentiality', 'Integrity', 'Authority Authenticity', 'Trust Boundary Integrity', 'Risk and Escalation']) assert.match(observability, new RegExp(term))
  assert.match(observability, /A signal without ownership is an accountability gap/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-026-CONCEPTUAL-OBSERVABILITY-AND-SECURITY.md'))

  const resilience = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-027-RESILIENCE-SCALABILITY-AND-GOVERNANCE.md')
  assert.match(resilience, /document_id: "BBAPLT-ARCH-027"/)
  for (const term of ['Failure containment', 'Graceful degradation', 'Recovery clarity', 'Scalability Dimensions', 'Tenant Growth', 'Mission Complexity', 'Transversal Governance', 'Recovery and Change Contract']) assert.match(resilience, new RegExp(term))
  assert.match(resilience, /Resilience never bypasses Human Governance/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-027-RESILIENCE-SCALABILITY-AND-GOVERNANCE.md'))

  const review = await read('.rag/bba-platform/architecture/BBAPLT-RPT-017-QUALITY-ATTRIBUTES-ARCHITECTURE-REVIEW.md')
  assert.match(review, /document_id: "BBAPLT-RPT-017"/)
  assert.match(review, /Review Result[\s\S]*PASS/)
  for (const criterion of ['Quality Attribute Coverage', 'Cross-Context Coverage', 'Product and Domain Derivation Audit', 'Architecture Constitution Alignment', 'Scenario and Measurability Audit', 'Technology Neutrality Audit']) assert.match(review, new RegExp(criterion))
  assert.match(review, /No CRITICAL or MAJOR findings/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-RPT-017-QUALITY-ATTRIBUTES-ARCHITECTURE-REVIEW.md'))
})
