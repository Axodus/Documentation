import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => import('node:fs/promises').then(({ readFile }) => readFile(resolve(root, path), 'utf8'))

test('Human Governance Sprint closes with twelve ordered REQs and a prior-domain dependency', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-04"[\s\S]*status: "PASS_CLOSED"/)
  assert.match(backlog, /status_reason: "HUMAN_GOVERNANCE_CANONICAL_REVIEW_PASS"/)
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

test('Delegation preserves scope, gates, traceability, and residual accountability', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-046-DELEGATION-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-046"/)
  for (const field of ['original Mission and Tenant context', 'delegator role and source Authority', 'Delegate role and competence', 'responsibility or decision scope', 'required evidence, Review, and Approval gates', 'revocation conditions', 'residual Accountability and escalation path']) assert.match(source, new RegExp(field))
  assert.match(source, /never increases the Authority/)
  assert.match(source, /never removes the delegator's residual Accountability/)
  assert.match(source, /always preserves Mission, scope, provenance, and decision traceability/)
  assert.match(source, /Revocation stops new use[\s\S]*grant[\s\S]*does not erase actions/)
  assert.match(source, /Each step preserves the original Mission, Tenant,[\s\S]*residual Accountability/)
  assert.match(source, /does not define token delegation, access-control grants/)
})

test('Escalation addresses conflict, impasse, refusal, risk, evidence, and boundary breaches', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-047-ESCALATION-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-047"/)
  for (const trigger of ['Conflict', 'Impasse', 'Refusal', 'Elevated Risk', 'Authority gap', 'Evidence gap', 'Boundary breach']) assert.match(source, new RegExp(`\\| ${trigger} \\|`))
  assert.match(source, /An Escalation preserves the original Mission, Tenant, scope/)
  assert.match(source, /does not erase prior actions or accountability/)
  assert.match(source, /Mandatory gates remain[\s\S]*in[\s\S]*force/)
  assert.match(source, /An Agent may surface a conflict, refusal, evidence gap, or risk/)
  assert.match(source, /It cannot decide the escalation outcome/)
  assert.match(source, /does not define incident management, routing services, alerts/)
})

test('Governance lifecycle preserves review, change, retirement, history, and human authority', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-048-GOVERNANCE-LIFECYCLE.md')
  assert.match(source, /document_id: "BBAPLT-GDE-048"/)
  for (const state of ['Proposed', 'Active', 'Under Review', 'Updated', 'Retired']) assert.match(source, new RegExp(`\\| ${state} \\|`))
  assert.match(source, /Every transition has an identifiable human Authority/)
  assert.match(source, /An Agent may prepare evidence or recommend a transition[\s\S]*cannot activate/)
  assert.match(source, /An Updated arrangement preserves lineage to the prior meaning/)
  assert.match(source, /Retired for new use while residual obligations continue/)
  assert.match(source, /Suspension is a protective condition,[\s\S]*not an additional permanent[\s\S]*lifecycle state/)
  assert.match(source, /does not define state machines, persistence, event sourcing/)
})

test('Governance Rules make accountability, Stewardship, human authority, gates, and Tenant boundaries invariant', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-049-GOVERNANCE-RULES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-049"/)
  assert.match(source, /immutable domain Rules/)
  for (const phrase of ['Human accountability', 'Mission Steward', 'Authority identification', 'Agent boundary', 'Concept separation', 'Review integrity', 'Critical review', 'Delegation boundedness', 'Escalation safety', 'Tenant boundary', 'Asset accountability', 'Policy subordination']) assert.match(source, new RegExp(`\\*\\*${phrase}:?\\*\\*`))
  assert.match(source, /every Mission has a Steward/)
  assert.match(source, /an Agent never possesses final institutional Authority/)
  assert.match(source, /no Policy, exception, delegation, or local practice[\s\S]*Core Rules/)
  assert.match(source, /blocked,[\s\S]*deferred,[\s\S]*rejected,[\s\S]*cancelled,[\s\S]*or escalated/)
  assert.match(source, /does not define rule engines, authorization logic,[\s\S]*policy[\s\S]*languages/)
})

test('Governance Policies remain mutable while subordinate to Rules and bounded exceptions', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-050-GOVERNANCE-POLICIES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-050"/)
  for (const area of ['Review', 'Approval', 'Publication', 'Delegation', 'Conflict', 'Exception', 'Stewardship', 'Policy change']) assert.match(source, new RegExp(`\\| ${area} \\|`))
  assert.match(source, /Policies may refine thresholds,[\s\S]*cannot weaken,[\s\S]*Core Rules/)
  assert.match(source, /A lower-level Policy cannot weaken a Core Rule/)
  assert.match(source, /An exception is itself a governed decision/)
  assert.match(source, /Exceptions cannot[\s\S]*final[\s\S]*institutional[\s\S]*authority/)
  assert.match(source, /A draft or recommendation is not active[\s\S]*policy/)
  assert.match(source, /An Agent[\s\S]*may summarize or recommend policy application[\s\S]*cannot create, alter, approve/)
  assert.match(source, /does not define policy engines, configuration stores,[\s\S]*RBAC/)
})

test('Governance Constraints protect Tenant, authority, risk, compliance, accountability, and function separation', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-051-GOVERNANCE-CONSTRAINTS.md')
  assert.match(source, /document_id: "BBAPLT-GDE-051"/)
  for (const category of ['Tenant boundary', 'Authority', 'Risk', 'Compliance', 'Accountability', 'Separation of functions', 'Evidence', 'Asset integrity', 'Mission integrity', 'Agent boundary']) assert.match(source, new RegExp(`\\| ${category} \\|`))
  assert.match(source, /When a constraint would be violated, the affected action is blocked/)
  assert.match(source, /External systems, Connectors, or shared participants do not dissolve[\s\S]*Tenant[\s\S]*boundaries/)
  assert.match(source, /Unknown or disputed[\s\S]*risk is itself a reason to pause or escalate/)
  assert.match(source, /A role must disclose and manage conflicts of interest,[\s\S]*recuse itself/)
  assert.match(source, /does not define authorization enforcement, compliance engines,[\s\S]*identity systems/)
})

test('Human Governance closes with PASS and preserves the Workflow Domain handoff', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const review = await read('.rag/bba-platform/domain/BBAPLT-RPT-008-HUMAN-GOVERNANCE-DOMAIN-REVIEW.md')
  assert.match(backlog, /id: "SPRINT-002-04"[\s\S]*status: "PASS_CLOSED"/)
  assert.match(backlog, /status_reason: "HUMAN_GOVERNANCE_CANONICAL_REVIEW_PASS"/)
  for (const id of ['REQ-002-04-001', 'REQ-002-04-002', 'REQ-002-04-003', 'REQ-002-04-004', 'REQ-002-04-005', 'REQ-002-04-006', 'REQ-002-04-007', 'REQ-002-04-008', 'REQ-002-04-009', 'REQ-002-04-010', 'REQ-002-04-011', 'REQ-002-04-012']) assert.match(backlog, new RegExp(`id: "${id}"[\\s\\S]*status: "DONE"`))
  assert.match(backlog, /id: "EPIC-002"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "DOMAIN_ROLLOUT_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-002-05"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "WORKFLOW_DOMAIN_ACTIVE"/)
  assert.match(review, /document_id: "BBAPLT-RPT-008"/)
  assert.match(review, /PASS — Human Governance Domain is coherent/)
  assert.match(review, /Cross-Domain Consistency/)
  assert.match(review, /Explicit Gaps/)
  assert.match(review, /SPRINT-002-05 — Workflow Domain/)
})
