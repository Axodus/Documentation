import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Architecture Foundation activates with six logical REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  const source = await read('.rag/bba-platform/architecture/BBAPLT-ARCH-001-ARCHITECTURE-CONSTITUTION.md')
  assert.match(backlog, /id: "EPIC-003"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "ARCHITECTURE_ROLLOUT_ACTIVE"/)
  assert.match(backlog, /id: "SPRINT-003-01"[\s\S]*status: "IN_PROGRESS"[\s\S]*status_reason: "ARCHITECTURE_ROLLOUT_ACTIVE"/)
  for (const id of ['REQ-003-01-001', 'REQ-003-01-002', 'REQ-003-01-003', 'REQ-003-01-004', 'REQ-003-01-005', 'REQ-003-01-006']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(backlog, /id: "REQ-003-01-001"[\s\S]*status: "DONE"/)
  assert.match(source, /document_id: "BBAPLT-ARCH-001"/)
  assert.match(source, /Architecture derives from Domain/)
  assert.match(source, /Domain derives from Product/)
  assert.match(source, /AI Workforce participates in bounded work and never owns final institutional authority/)
  assert.match(source, /does not select microservices,[\s\S]*monoliths,[\s\S]*event-driven[\s\S]*execution/)
  await access(resolve(root, '.rag/bba-platform/architecture/BBAPLT-ARCH-001-ARCHITECTURE-CONSTITUTION.md'))
})
