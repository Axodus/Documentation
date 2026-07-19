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
