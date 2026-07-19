import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Logical Interfaces activates with six semantic REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  const glossary = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-006-ARCHITECTURE-GLOSSARY-AND-TAXONOMY.md')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "LOGICAL_INTERFACE_MODEL_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-003-02"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "LOGICAL_INTERFACE_MODEL_ACTIVE"/)
  for (const id of ['REQ-003-02-001', 'REQ-003-02-002', 'REQ-003-02-003', 'REQ-003-02-004', 'REQ-003-02-005', 'REQ-003-02-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  for (const term of ['Provider', 'Consumer', 'Information Owner', 'Institutional Authority', 'Steward']) assert.match(glossary, new RegExp(term))
  assert.match(glossary, /Interface Role Vocabulary/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-006-ARCHITECTURE-GLOSSARY-AND-TAXONOMY.md'))
  const matrix = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-008-CROSS-CONTEXT-INTERACTION-MATRIX.md')
  assert.match(backlog, /id: "REQ-003-02-002"[\s\S]*status: "DONE"/)
  assert.match(matrix, /document_id: "BBAPLT-ARCH-008"/)
  for (const context of ['Mission Context', 'Institutional Asset Context', 'AI Workforce Context', 'Human Governance Context', 'Workflow Coordination Context', 'Connector Boundary Context']) assert.match(matrix, new RegExp(context))
  for (const heading of ['Published', 'Consumed', 'Consulted', 'Institutional Authority']) assert.match(matrix, new RegExp(heading))
  assert.match(matrix, /does not define[\s\S]*(API|protocol|transport|runtime|deployment)/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-008-CROSS-CONTEXT-INTERACTION-MATRIX.md'))
  const responsibility = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-009-INTERFACE-RESPONSIBILITY-MODEL.md')
  assert.match(backlog, /id: "REQ-003-02-003"[\s\S]*status: "DONE"/)
  assert.match(responsibility, /document_id: "BBAPLT-ARCH-009"/)
  for (const field of ['Provider', 'Consumer', 'Information Owner', 'Institutional Authority', 'Steward', 'Constraints', 'Expected Outcomes']) assert.match(responsibility, new RegExp(field))
  assert.match(responsibility, /Prohibited Responsibilities/)
  assert.match(responsibility, /authority that can never be transferred/i)
  assert.match(responsibility, /does not define[\s\S]*(API|protocol|runtime|deployment)/i)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-009-INTERFACE-RESPONSIBILITY-MODEL.md'))
})
