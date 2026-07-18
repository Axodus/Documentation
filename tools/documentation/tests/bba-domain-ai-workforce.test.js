import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('AI Workforce Sprint is active with thirteen ordered REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-03"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /status_reason: "AI_WORKFORCE_DOMAIN_ACTIVE"/)
  for (const id of ['REQ-002-03-001', 'REQ-002-03-002', 'REQ-002-03-003', 'REQ-002-03-004', 'REQ-002-03-005', 'REQ-002-03-006', 'REQ-002-03-007', 'REQ-002-03-008', 'REQ-002-03-009', 'REQ-002-03-010', 'REQ-002-03-011', 'REQ-002-03-012', 'REQ-002-03-013']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-03"\n    to: "REQ-002-03-001"\n    type: "CONTAINS"/)
})

test('AI Workforce Domain Overview preserves functional identity and human authority', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-029-AI-WORKFORCE-DOMAIN-OVERVIEW.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-029"/)
  assert.match(source, /dynamic composition of specialized Agents/)
  assert.match(source, /functional and institutional identity/)
  assert.match(source, /A Capability describes aptitude;[\s\S]*does[\s\S]*not grant permission/)
  assert.match(source, /Material outputs must expose relevant evidence/)
  assert.match(source, /Agents cannot approve final institutional publication/)
  assert.match(source, /does not define models, providers, prompts, endpoints/)
})

test('Agent identity is independent from technical executors and role semantics', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-030-AGENT-IDENTITY-AND-CLASSIFICATION.md')
  assert.match(source, /document_id: "BBAPLT-GDE-030"/)
  assert.match(source, /stable functional and institutional identity/)
  for (const term of ['model or model version', 'provider, endpoint, API, or credential', 'prompt, container, process, or runtime', 'deployment, session, worker, or temporary execution instance']) assert.match(source, new RegExp(term))
  for (const concept of ['Agent', 'Role', 'Capability', 'Responsibility', 'Permission', 'Assignment']) assert.match(source, new RegExp(`\\| ${concept} \\|`))
  assert.match(source, /Capability into authority/)
  assert.match(source, /does not define model[\s\S]*registries,[\s\S]*provider adapters,[\s\S]*prompt[\s\S]*stores/)
})

test('Capability is aptitude with evidence and limits, not permission', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-031-CAPABILITY-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-031"/)
  assert.match(source, /declared aptitude to perform a class of activity/)
  for (const field of ['expected inputs and context', 'expected quality characteristics', 'evidence or demonstrated basis', 'known limitations and uncertainty']) assert.match(source, new RegExp(field))
  assert.match(source, /does not by itself authorize the Agent to act/)
  assert.match(source, /Capability mismatch must block or escalate/)
  assert.match(source, /does not define model benchmarks, provider metadata/)
})

test('Assignment is Mission-bound and carries responsibility, scope, deliverables, and gates', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-032-RESPONSIBILITY-AND-ASSIGNMENT-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-032"/)
  assert.match(source, /contextual domain link that binds an Agent[\s\S]*responsibility within a Mission/)
  for (const field of ['Tenant and Mission context', 'Agent identity and assumed Role', 'responsibility and scope of work', 'required Capabilities', 'expected Deliverables', 'allowed actions and authority limits', 'applicable quality and review gates', 'human supervisor']) assert.match(source, new RegExp(field))
  assert.match(source, /Agent self-report[\s\S]*does not constitute institutional acceptance/)
  assert.match(source, /does not define IDs, payloads, schemas, dispatch protocols/)
})

test('Outputs are distinct from verifiable Deliverables and preserve uncertainty', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-033-INPUTS-OUTPUTS-AND-DELIVERABLES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-033"/)
  assert.match(source, /An Output is any result produced,[\s\S]*recommended,[\s\S]*recorded/)
  assert.match(source, /A Deliverable is an Output that the Assignment explicitly expects/)
  assert.match(source, /Not every Output is a Deliverable/)
  for (const term of ['evidence', 'assumptions', 'uncertainty', 'known limitations', 'unresolved questions']) assert.match(source, new RegExp(term))
  assert.match(source, /Agent completion of work is not human acceptance/)
  assert.match(source, /does not define message formats, payload schemas/)
})

test('Agent lifecycle separates domain availability from technical execution', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-034-AGENT-LIFECYCLE.md')
  assert.match(source, /document_id: "BBAPLT-GDE-034"/)
  for (const stage of ['Proposed', 'Active', 'Suspended', 'Retired']) assert.match(source, new RegExp(`\\| ${stage} \\|`))
  assert.match(source, /Retirement is a domain decision[\s\S]*stop[\s\S]*new use/)
  assert.match(source, /independent of model deployment, provider availability/)
  assert.match(source, /does not define deployment lifecycle, process supervision/)
})

test('Agent and Assignment state models distinguish availability, review, refusal, and failure', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-035-AGENT-STATE-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-035"/)
  for (const state of ['Unassigned', 'Assigned', 'Active', 'Blocked', 'Awaiting Review', 'Completed', 'Rejected', 'Cancelled', 'Failed']) assert.match(source, new RegExp(`\\| ${state} \\|`))
  assert.match(source, /ACCEPTED` is a Deliverable outcome/)
  assert.match(source, /Refusal is a governed domain outcome/)
  assert.match(source, /does not define state storage, event sourcing, commands/)
})

test('Coordination and delegation preserve Mission, authority, scope, and traceability', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-036-COORDINATION-AND-DELEGATION.md')
  assert.match(source, /document_id: "BBAPLT-GDE-036"/)
  for (const field of ['original Mission and Tenant context', 'originating responsibility and authority', 'delegator and delegate identity', 'delegated scope and limits', 'expected Deliverables and acceptance criteria', 'applicable quality gates']) assert.match(source, new RegExp(field))
  assert.match(source, /cannot increase authority, remove a mandatory gate/)
  assert.match(source, /Every step records the chain back to the original[\s\S]*delegator/)
  assert.match(source, /Agents must surface conflicts rather than choose a[\s\S]*side silently/)
  assert.match(source, /does not define orchestrators, queues, task dispatch/)
})

test('Quality gates bind human review to concrete consequence and risk', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-037-QUALITY-GATES-AND-REVIEW-OBLIGATIONS.md')
  assert.match(source, /document_id: "BBAPLT-GDE-037"/)
  for (const gate of ['Deliverable Acceptance', 'Institutional Approval', 'Publication', 'Regulated Content Change', 'Mission Completion', 'Conflict Resolution', 'Elevated Risk']) assert.match(source, new RegExp(`\\| ${gate} \\|`))
  assert.match(source, /An individual human review may be omitted for low-risk activity[\s\S]*explicit policy/)
  assert.match(source, /waiver[\s\S]*publication[\s\S]*regulated[\s\S]*change[\s\S]*elevated[\s\S]*risk/)
  assert.match(source, /Preparation is[\s\S]*not approval/)
  assert.match(source, /does not define test frameworks, scoring algorithms/)
})

test('AI Workforce rules preserve human authority, bounded assignments, evidence, and provenance', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-038-AI-WORKFORCE-RULES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-038"/)
  assert.match(source, /Agent identity is functional and institutional/)
  assert.match(source, /Every Assignment is bound to one Mission and Tenant context/)
  assert.match(source, /Material Outputs and Deliverables disclose evidence/)
  assert.match(source, /Agents cannot approve final institutional publication/)
  assert.match(source, /Delegation in chain cannot increase authority/)
  assert.match(source, /preserve[\s\S]*provenance,[\s\S]*lineage,[\s\S]*version meaning,[\s\S]*limitations/)
})

test('AI Workforce policies govern composition, autonomy exceptions, delegation, review, and Tenant boundaries', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-039-AI-WORKFORCE-POLICIES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-039"/)
  for (const policy of ['Workforce Composition', 'Assignment', 'Delegation', 'Evidence and Uncertainty', 'Review and Quality', 'Low-Risk Waiver', 'Conflict and Refusal', 'Tenant Boundary']) assert.match(source, new RegExp(`\\| ${policy} \\|`))
  assert.match(source, /lower-level policy cannot weaken a Core rule/)
  assert.match(source, /Any autonomy exception must define scope, risk, eligible activity/)
  assert.match(source, /Chain delegation requires explicit permission[\s\S]*original authority/)
})
