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
})
