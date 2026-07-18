import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => import('node:fs/promises').then(({ readFile }) => readFile(resolve(root, path), 'utf8'))

test('Human Governance Sprint activates with twelve ordered REQs and a prior-domain dependency', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-04"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /status_reason: "HUMAN_GOVERNANCE_DOMAIN_ACTIVE"/)
  for (const id of ['REQ-002-04-001', 'REQ-002-04-002', 'REQ-002-04-003', 'REQ-002-04-004', 'REQ-002-04-005', 'REQ-002-04-006', 'REQ-002-04-007', 'REQ-002-04-008', 'REQ-002-04-009', 'REQ-002-04-010', 'REQ-002-04-011', 'REQ-002-04-012']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-04"\n    to: "SPRINT-002-03"\n    type: "DEPENDS_ON"/)
  assert.match(graph, /from: "SPRINT-002-04"\n    to: "REQ-002-04-001"\n    type: "CONTAINS"/)
  assert.match(backlog, /id: "REQ-002-04-001"[\s\S]*status: "DONE"/)
  await access(resolve(root, '.rag/bba-platform/domain/BBAPLT-GDE-041-HUMAN-GOVERNANCE-DOMAIN-OVERVIEW.md'))
})

test('Human Governance Overview preserves institutional authority and domain boundaries', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-041-HUMAN-GOVERNANCE-DOMAIN-OVERVIEW.md')
  assert.match(source, /document_id: "BBAPLT-GDE-041"/)
  assert.match(source, /institutional authority over[\s\S]*Missions, Institutional Assets, AI Workforce assignments/)
  for (const concept of ['Authority', 'Responsibility', 'Accountability', 'Stewardship', 'Ownership', 'Review', 'Approval', 'Delegation', 'Escalation']) assert.match(source, new RegExp(`\| ${concept} \|`))
  assert.match(source, /Accountability remains human/)
  assert.match(source, /An Agent never possesses final institutional authority/)
  assert.match(source, /Every Mission has a Steward/)
  assert.match(source, /every Institutional Asset has defined accountability/)
  assert.match(source, /does not define authentication, authorization, RBAC, ABAC, users/)
})

test('Governance roles separate review, approval, publication, stewardship, ownership, and delegation', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-042-GOVERNANCE-ROLES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-042"/)
  for (const role of ['Steward', 'Reviewer', 'Approver', 'Publisher', 'Domain Owner', 'Governance Board', 'Delegate']) assert.match(source, new RegExp(`\| ${role} \|`))
  assert.match(source, /Reviewer assesses but does not become an Approver/)
  assert.match(source, /Publisher releases an approved Asset but does not create the approval/)
  assert.match(source, /Delegate acts within a bounded grant and cannot enlarge the grant/)
  assert.match(source, /Every Mission has a Steward/)
  assert.match(source, /Agents may prepare evidence,[\s\S]*but they do not occupy a human governance role/)
  assert.match(source, /does not define users, groups, identities, authentication/)
})

test('Authority remains distinct from Responsibility, Permission, Capability, and Accountability', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-043-AUTHORITY-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-043"/)
  for (const concept of ['Authority', 'Responsibility', 'Permission', 'Capability', 'Accountability']) assert.match(source, new RegExp(`\| ${concept} \|`))
  assert.match(source, /scope, purpose, and accountable human role/)
  assert.match(source, /Operational authority may be delegated/)
  assert.match(source, /Final institutional accountability,[\s\S]*cannot be delegated away/)
  assert.match(source, /No Agent can acquire Authority through Capability/)
  assert.match(source, /No Delegate can enlarge a grant/)
  assert.match(source, /does not define authentication, authorization systems, RBAC/)
})

test('Stewardship preserves Mission, Asset, Workforce, ownership, and accountability continuity', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-044-STEWARDSHIP-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-044"/)
  for (const concept of ['Steward', 'Stewardship', 'Ownership', 'Accountability']) assert.match(source, new RegExp(`\| ${concept} \|`))
  assert.match(source, /Every Mission has a Steward before consequential work begins/)
  assert.match(source, /An Institutional Asset has an accountable ownership context/)
  assert.match(source, /Human Stewardship governs the composition and assignment of the AI Workforce/)
  assert.match(source, /replacement cannot erase history[\s\S]*unresolved obligations/)
  assert.match(source, /Authorship, custody, ownership,[\s\S]*held by different roles/)
  assert.match(source, /does not define users, teams, access controls, authentication/)
})

test('Decision and Approval model distinguishes Review, recommendation, consensus, dissent, and final authority', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-045-DECISION-AND-APPROVAL-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-045"/)
  for (const term of ['Direction', 'Acceptance', 'Institutional approval', 'Publication', 'Exception', 'Completion', 'Retirement']) assert.match(source, new RegExp(`\\| ${term} \\|`))
  for (const term of ['Review', 'Recommendation', 'Consultation', 'Approval', 'Publication']) assert.match(source, new RegExp(`\\*\\*${term}\\*\\*`))
  assert.match(source, /Consensus means the required decision participants/)
  assert.match(source, /Dissent is a recorded material disagreement/)
  assert.match(source, /Agent preparation, automated assessment,[\s\S]*is not[\s\S]*institutional Approval/)
  assert.match(source, /An Approval cannot retroactively conceal a missing mandatory Review/)
  assert.match(source, /does not define workflow engines, queues, approval APIs/)
})
