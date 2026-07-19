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
