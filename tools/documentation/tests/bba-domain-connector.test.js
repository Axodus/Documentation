import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Connector Sprint activates with thirteen ordered REQs and a Workflow dependency', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-06"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /status_reason: "CONNECTOR_DOMAIN_ACTIVE"/)
  for (const id of ['REQ-002-06-001', 'REQ-002-06-002', 'REQ-002-06-003', 'REQ-002-06-004', 'REQ-002-06-005', 'REQ-002-06-006', 'REQ-002-06-007', 'REQ-002-06-008', 'REQ-002-06-009', 'REQ-002-06-010', 'REQ-002-06-011', 'REQ-002-06-012', 'REQ-002-06-013']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-06"\n    to: "SPRINT-002-05"\n    type: "DEPENDS_ON"/)
  await access(resolve(root, '.rag/bba-platform/domain/BBAPLT-GDE-064-CONNECTOR-DOMAIN-OVERVIEW.md'))
})

test('Connector Overview defines a semantic boundary without technical integration leakage', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-064-CONNECTOR-DOMAIN-OVERVIEW.md')
  assert.match(source, /document_id: "BBAPLT-GDE-064"/)
  assert.match(source, /A Connector is a boundary concept/)
  for (const concept of ['Mission', 'Institutional Asset', 'AI Workforce', 'Workflow', 'Human Governance', 'Tenant']) assert.match(source, new RegExp(`\\| ${concept} \\|`))
  assert.match(source, /Connector is not an API,[\s\S]*protocol,[\s\S]*webhook,[\s\S]*queue/)
  assert.match(source, /preserving Asset identity,[\s\S]*lineage,[\s\S]*version meaning,[\s\S]*authority/)
  assert.match(source, /never creates[\s\S]*institutional Authority,[\s\S]*changes Rules,[\s\S]*alters Accountability/)
  assert.match(source, /does not define APIs,[\s\S]*protocols,[\s\S]*authentication,[\s\S]*runtime/)
})

test('Connector identity and classifications remain semantic and technology-independent', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-065-CONNECTOR-IDENTITY-AND-CLASSIFICATION.md')
  assert.match(source, /document_id: "BBAPLT-GDE-065"/)
  assert.match(source, /stable semantic relationship and boundary role/)
  for (const classification of ['Inbound', 'Outbound', 'Bidirectional', 'Human-mediated', 'Automated', 'Institutional']) assert.match(source, new RegExp(`\\| ${classification} \\|`))
  assert.match(source, /does not depend on an external vendor,[\s\S]*URL,[\s\S]*endpoint,[\s\S]*protocol/)
  assert.match(source, /Classifications describe semantic roles/)
  assert.match(source, /not[\s\S]*protocols,[\s\S]*deployment modes,[\s\S]*trust scores/)
  assert.match(source, /A Connector retains its canonical identity across representations,[\s\S]*executors/)
  assert.match(source, /Classification cannot enlarge the Connector's responsibility,[\s\S]*authority,[\s\S]*Mission scope/)
  assert.match(source, /does not define identifiers,[\s\S]*schemas,[\s\S]*endpoints,[\s\S]*API contracts/)
})

test('Connector responsibilities preserve authority, identity, accountability, and boundary scope', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-066-CONNECTOR-RESPONSIBILITIES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-066"/)
  for (const responsibility of ['Receive external requests', 'Deliver institutional results', 'Forward information', 'Preserve context', 'Translate meaning', 'Surface exceptions']) assert.match(source, new RegExp(`\\| ${responsibility} \\|`))
  assert.match(source, /do not execute[\s\S]*institutional decision[\s\S]*represented by the exchange/)
  assert.match(source, /Connector never:/)
  assert.match(source, /changes a domain Rule/)
  assert.match(source, /creates institutional Authority/)
  assert.match(source, /creates, closes, cancels/)
  assert.match(source, /changes Institutional Asset identity,[\s\S]*Ownership,[\s\S]*lineage,[\s\S]*publication authority/)
  assert.match(source, /changes Workflow semantics,[\s\S]*bypasses a Guard,[\s\S]*removes a human gate/)
  assert.match(source, /institutional Accountability remains with the competent human role/)
  assert.match(source, /does not define request handlers,[\s\S]*message delivery,[\s\S]*APIs,[\s\S]*protocols/)
})

test('Connector Boundary Model preserves Domain, External, Trust, and Tenant boundaries', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-067-BOUNDARY-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-067"/)
  for (const boundary of ['Domain Boundary', 'External Boundary', 'Trust Boundary', 'Tenant Boundary']) assert.match(source, new RegExp(`\\| ${boundary} \\|`))
  assert.match(source, /does not erase a boundary when it exchanges context/)
  assert.match(source, /preserves the source, destination,[\s\S]*Tenant,[\s\S]*Mission,[\s\S]*Asset,[\s\S]*authority,[\s\S]*uncertainty/)
  assert.match(source, /cannot decide that a boundary is irrelevant,[\s\S]*transfer Authority by implication/)
  assert.match(source, /one Tenant's Authority,[\s\S]*Assets,[\s\S]*Mission[\s\S]*purpose,[\s\S]*Accountability cannot be transferred/)
  assert.match(source, /ambiguous origin,[\s\S]*missing Tenant,[\s\S]*unrecognized authority,[\s\S]*boundary bypass blocks or escalates/)
  assert.match(source, /does not define network zones,[\s\S]*firewalls,[\s\S]*encryption,[\s\S]*identity[\s\S]*providers/)
})

test('Connector Context and Translation preserve canonical meaning and disclose semantic loss', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-068-CONTEXT-AND-TRANSLATION-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-068"/)
  for (const element of ['Source context', 'Target context', 'Canonical representation', 'Transformation', 'Semantic loss', 'Consequence']) assert.match(source, new RegExp(`\\| ${element} \\|`))
  assert.match(source, /cannot[\s\S]*silently change institutional purpose,[\s\S]*Asset identity,[\s\S]*lineage,[\s\S]*Authority,[\s\S]*Mission scope/)
  assert.match(source, /Canonical representation is a domain meaning,[\s\S]*not a file format,[\s\S]*schema,[\s\S]*API[\s\S]*payload/)
  assert.match(source, /Semantic loss is any material meaning that is omitted,[\s\S]*ambiguous,[\s\S]*weakened/)
  assert.match(source, /must be disclosed and may[\s\S]*block a Decision Point,[\s\S]*require human Review,[\s\S]*Escalation/)
  assert.match(source, /preserves Asset identity and lineage[\s\S]*Mission[\s\S]*context,[\s\S]*Tenant boundary,[\s\S]*Accountability/)
  assert.match(source, /does not define schemas,[\s\S]*field mappings,[\s\S]*serializers,[\s\S]*APIs,[\s\S]*protocols/)
})

test('Connector lifecycle preserves governance, history, and boundary meaning', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-069-CONNECTOR-LIFECYCLE.md')
  assert.match(source, /document_id: "BBAPLT-GDE-069"/)
  for (const state of ['Proposed', 'Active', 'Restricted', 'Suspended', 'Retired']) assert.match(source, new RegExp(`\\| ${state} \\|`))
  assert.match(source, /not a process status,[\s\S]*health signal,[\s\S]*deployment state,[\s\S]*runtime condition/)
  assert.match(source, /Every lifecycle decision identifies the Connector identity,[\s\S]*Tenant,[\s\S]*external relationship,[\s\S]*Accountability/)
  assert.match(source, /Activation[\s\S]*requires a defined boundary/)
  assert.match(source, /accountable human[\s\S]*role/)
  assert.match(source, /canonical[\s\S]*context, applicable Rules/)
  assert.match(source, /Retirement prevents new exchanges but preserves lineage,[\s\S]*decisions,[\s\S]*accountability/)
  assert.match(source, /An Agent, Workflow,[\s\S]*cannot activate,[\s\S]*restrict,[\s\S]*suspend, or retire/)
  assert.match(source, /does not define service health,[\s\S]*deployment,[\s\S]*connection state,[\s\S]*monitoring/)
})

test('Connector State Model defines guarded semantic movement and terminal retirement', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-070-CONNECTOR-STATE-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-070"/)
  for (const state of ['Unassessed', 'Ready', 'Operating', 'Degraded', 'Blocked', 'Awaiting Decision', 'Retired']) assert.match(source, new RegExp(`\\| ${state} \\|`))
  for (const transition of ['Unassessed → Ready', 'Ready → Operating', 'Operating → Degraded', 'Operating → Blocked', 'Degraded → Awaiting Decision', 'Blocked → Ready', 'Any non-terminal → Retired']) assert.match(source, new RegExp(`\\| ${transition} \\|`))
  assert.match(source, /State describes the current semantic condition[\s\S]*does not describe process health,[\s\S]*technical availability/)
  assert.match(source, /Retired is terminal for new Connector exchanges/)
  assert.match(source, /Reactivation is not an[\s\S]*implicit reversal;[\s\S]*requires a new assessment/)
  assert.match(source, /technical availability/)
  assert.match(source, /Agent recommendation/)
  assert.match(source, /Workflow[\s\S]*readiness[\s\S]*cannot satisfy a semantic Guard/)
  assert.match(source, /does not define state machines,[\s\S]*events,[\s\S]*status[\s\S]*codes,[\s\S]*health[\s\S]*checks/)
})

test('Connector Interaction Model references established domains without controlling them', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-071-INTERACTION-MODEL.md')
  assert.match(source, /document_id: "BBAPLT-GDE-071"/)
  for (const domain of ['Mission', 'Institutional Asset', 'AI Workforce', 'Workflow', 'Human Governance']) assert.match(source, new RegExp(`\\| ${domain} \\|`))
  assert.match(source, /participates in a domain interaction by carrying bounded context/)
  assert.match(source, /Every interaction preserves:/)
  for (const concept of ['Connector identity', 'Tenant and Mission context', 'Asset identity', 'Authority', 'evidence', 'applicable Rule']) assert.match(source, new RegExp(concept))
  assert.match(source, /does not transfer ownership[\s\S]*interaction's purpose,[\s\S]*authority,[\s\S]*accountability/)
  assert.match(source, /never makes an external party an Agent,[\s\S]*Steward,[\s\S]*Approver,[\s\S]*Authority/)
  assert.match(source, /does not define interaction protocols,[\s\S]*message[\s\S]*contracts,[\s\S]*API[\s\S]*operations,[\s\S]*event choreography/)
})

test('Connector Rules preserve identity, lineage, authority, accountability, Tenant, and Mission boundaries', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-072-CONNECTOR-RULES.md')
  assert.match(source, /document_id: "BBAPLT-GDE-072"/)
  assert.match(source, /Connector identity remains distinct from external systems,[\s\S]*Assets,[\s\S]*Missions,[\s\S]*Agents/)
  assert.match(source, /preserves Institutional Asset[\s\S]*identity,[\s\S]*lineage,[\s\S]*immutable version[\s\S]*meaning/)
  assert.match(source, /preserves Mission purpose,[\s\S]*scope,[\s\S]*lifecycle,[\s\S]*accountability/)
  assert.match(source, /never creates,[\s\S]*transfers/)
  assert.match(source, /institutional[\s\S]*Authority/)
  assert.match(source, /preserves Tenant Boundary[\s\S]*cannot share one Tenant's context/)
  assert.match(source, /cannot bypass Workflow Guards,[\s\S]*human gates,[\s\S]*Reviews,[\s\S]*Approvals/)
  assert.match(source, /discloses semantic loss,[\s\S]*uncertainty,[\s\S]*conflict,[\s\S]*risk/)
  assert.match(source, /does not define rule engines,[\s\S]*authorization,[\s\S]*access control,[\s\S]*APIs,[\s\S]*protocols/)
})
