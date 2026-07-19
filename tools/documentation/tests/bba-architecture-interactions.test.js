import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Interaction Architecture activates with six semantic REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "INTERACTION_ARCHITECTURE_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-003-03"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "INTERACTION_ARCHITECTURE_ACTIVE"/)
  for (const id of ['REQ-003-03-001', 'REQ-003-03-002', 'REQ-003-03-003', 'REQ-003-03-004', 'REQ-003-03-005', 'REQ-003-03-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  const interaction = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-012-INTERACTION-MODEL.md')
  assert.match(interaction, /document_id: "BBAPLT-ARCH-012"/)
  for (const term of ['Interaction', 'causal', 'entry point', 'exit point', 'Provider', 'Consumer', 'Steward']) assert.match(interaction, new RegExp(term, 'i'))
  assert.match(interaction, /does not define[\s\S]*(event|message|queue|API|runtime|deployment)/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-012-INTERACTION-MODEL.md'))
  const catalog = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-013-INTERACTION-CATALOG.md')
  const flows = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-014-CAPABILITY-INTERACTION-FLOWS.md')
  assert.match(backlog, /id: "REQ-003-03-002"[\s\S]*status: "DONE"/)
  assert.match(catalog, /document_id: "BBAPLT-ARCH-013"/)
  assert.match(flows, /document_id: "BBAPLT-ARCH-014"/)
  for (let index = 1; index <= 11; index++) assert.match(catalog, new RegExp(`INT-003-${String(index).padStart(3, '0')}`))
  for (const capability of ['Mission Orchestration', 'Institutional Knowledge', 'AI Workforce', 'Brand and Identity', 'Editorial Production', 'Review and Quality', 'Publishing', 'Distribution', 'Analytics and Learning', 'Human Governance', 'Connector Coordination']) {
    assert.match(catalog, new RegExp(capability))
    assert.match(flows, new RegExp(capability))
  }
  for (const field of ['Interaction ID', 'Context of Origin', 'Context of Destination', 'Semantic Trigger', 'Expected Outcome', 'Postconditions']) assert.match(catalog, new RegExp(field))
  assert.match(flows, /does not define[\s\S]*(event|message|queue|API|runtime|deployment)/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-013-INTERACTION-CATALOG.md'))
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-014-CAPABILITY-INTERACTION-FLOWS.md'))
})
