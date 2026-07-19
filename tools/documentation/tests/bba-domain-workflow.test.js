import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Workflow Sprint activates with thirteen ordered REQs and a Human Governance dependency', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-05"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /status_reason: "WORKFLOW_DOMAIN_ACTIVE"/)
  for (const id of ['REQ-002-05-001', 'REQ-002-05-002', 'REQ-002-05-003', 'REQ-002-05-004', 'REQ-002-05-005', 'REQ-002-05-006', 'REQ-002-05-007', 'REQ-002-05-008', 'REQ-002-05-009', 'REQ-002-05-010', 'REQ-002-05-011', 'REQ-002-05-012', 'REQ-002-05-013']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-05"\n    to: "SPRINT-002-04"\n    type: "DEPENDS_ON"/)
  assert.match(graph, /from: "SPRINT-002-05"\n    to: "REQ-002-05-001"\n    type: "CONTAINS"/)
  assert.match(backlog, /id: "REQ-002-05-001"[\s\S]*status: "DONE"/)
  await access(resolve(root, '.rag/bba-platform/domain/BBAPLT-GDE-052-WORKFLOW-DOMAIN-OVERVIEW.md'))
})

test('Workflow Overview coordinates semantic work without redefining domain authority', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-052-WORKFLOW-DOMAIN-OVERVIEW.md')
  assert.match(source, /document_id: "BBAPLT-GDE-052"/)
  assert.match(source, /semantic coordination of work within a Mission/)
  for (const concept of ['Workflow', 'Workflow Definition', 'Workflow Stage', 'Work Item', 'Assignment Binding', 'Transition', 'Guard', 'Decision Point', 'Exception Path', 'Completion Criteria']) assert.match(source, new RegExp(`\\| ${concept} \\|`))
  assert.match(source, /Workflow does not[\s\S]*grant authority,[\s\S]*create an Agent,[\s\S]*replace a Steward/)
  assert.match(source, /Mission owns purpose and scope/)
  assert.match(source, /Human Governance owns[\s\S]*institutional decisions,[\s\S]*approvals,[\s\S]*escalation,[\s\S]*accountability/)
  assert.match(source, /coordinates these concepts/)
  assert.match(source, /does not define workflow engines, orchestrators, queues, event[\s\S]*buses/)
})

test('Workflow Definition composes purpose, scope, stages, criteria, decisions, exceptions, and completion', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-053-WORKFLOW-DEFINITION.md')
  assert.match(source, /document_id: "BBAPLT-GDE-053"/)
  for (const element of ['Purpose', 'Scope', 'Participants', 'Stages', 'Work Items', 'Criteria', 'Transitions', 'Decision Points', 'Exception Paths', 'Completion']) assert.match(source, new RegExp(`\\| ${element} \\|`))
  assert.match(source, /always interpreted in a Tenant and Mission context/)
  assert.match(source, /Reuse never silently transfers authority/)
  assert.match(source, /active Workflow for a Mission may be composed or adapted/)
  assert.match(source, /does not rewrite prior Work Items,[\s\S]*Decisions,[\s\S]*Assignments/)
  assert.match(source, /Workflow Definition[\s\S]*cannot appoint an Agent,[\s\S]*approve a publication/)
  assert.match(source, /does not define workflow schemas, engines, orchestration, queues/)
})

test('Workflow Stage defines bounded purpose, work, criteria, gates, outputs, and exceptions', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-054-WORKFLOW-STAGES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-054"/)
  for (const element of ['Purpose', 'Scope', 'Entry Criteria', 'Work Items', 'Participants', 'Outputs', 'Quality Gates', 'Exit Criteria', 'Exception Paths']) assert.match(source, new RegExp(`\\| ${element} \\|`))
  assert.match(source, /A Stage may be sequential, parallel, conditional, iterative, or optional/)
  assert.match(source, /Parallel Stages do not imply independent authority/)
  assert.match(source, /optional Stage cannot silently remove a mandatory gate/)
  assert.match(source, /A Stage[\s\S]*cannot change Mission purpose,[\s\S]*create an Agent,[\s\S]*assign institutional[\s\S]*Authority/)
  assert.match(source, /Rework[\s\S]*return work to a prior[\s\S]*Stage/)
  assert.match(source, /does not define pipeline steps, queue partitions, workers/)
})

test('Work Items bind existing Mission Assignments without expanding authority or Asset meaning', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-055-WORK-ITEMS-AND-ASSIGNMENT-BINDING.md')
  assert.match(source, /document_id: "BBAPLT-GDE-055"/)
  for (const element of ['Mission and Tenant', 'Workflow and Stage', 'Purpose and scope', 'Assignment Binding', 'Inputs', 'Expected Outputs', 'Criteria and gates', 'Exception Path', 'Accountability reference']) assert.match(source, new RegExp(`\\| ${element} \\|`))
  assert.match(source, /Assignment Binding does not create a second Assignment/)
  assert.match(source, /existing Mission, Tenant, Agent, Role, Responsibility, Capabilities/)
  assert.match(source, /A Work Item cannot widen Assignment scope, replace the human supervisor/)
  assert.match(source, /A Deliverable[\s\S]*formal[\s\S]*only[\s\S]*expected by the bound[\s\S]*Assignment/)
  assert.match(source, /does not decide[\s\S]*Asset[\s\S]*identity[\s\S]*version[\s\S]*semantics/)
  assert.match(source, /does not define task records, tickets, messages, queues, workers/)
})

test('Entry and Exit Criteria make readiness, evidence, quality, review, approval, and completion explicit', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-056-ENTRY-AND-EXIT-CRITERIA.md')
  assert.match(source, /document_id: "BBAPLT-GDE-056"/)
  for (const criterion of ['Entry Criteria', 'Readiness Criteria', 'Quality Criteria', 'Review Criteria', 'Approval Criteria', 'Exit Criteria', 'Completion Criteria']) assert.match(source, new RegExp(`\\| ${criterion} \\|`))
  assert.match(source, /Each material criterion identifies its scope, expected condition, evidence/)
  assert.match(source, /An unsatisfied Entry Criterion prevents responsible start/)
  assert.match(source, /Material[\s\S]*assumptions, uncertainty, limitations, unresolved questions/)
  assert.match(source, /low-risk path only when Policy defines the waiver/)
  assert.match(source, /They do not define Asset[\s\S]*identity[\s\S]*version[\s\S]*semantics[\s\S]*publication[\s\S]*authority/)
  assert.match(source, /does not define assertions, test frameworks, scores, automated[\s\S]*quality gates/)
})

test('Transitions and Guards define permitted movement, preconditions, postconditions, blocking, and governance', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-057-TRANSITIONS-AND-GUARDS.md')
  assert.match(source, /document_id: "BBAPLT-GDE-057"/)
  for (const element of ['Source', 'Triggering outcome', 'Guard', 'Postcondition', 'Consequence', 'Responsible role', 'Exception path']) assert.match(source, new RegExp(`\\| ${element} \\|`))
  assert.match(source, /A Guard must be understandable in its Mission[\s\S]*Tenant context/)
  assert.match(source, /A Precondition describes what must already be true/)
  assert.match(source, /When a Guard fails, the Transition is blocked/)
  assert.match(source, /does not[\s\S]*silently skip[\s\S]*Guard/)
  assert.match(source, /It[\s\S]*cannot grant Authority,[\s\S]*remove a mandatory gate,[\s\S]*enlarge a Mission/)
  assert.match(source, /does not define state machines, event handlers, queues, workflow[\s\S]*engines/)
})
