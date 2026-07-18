import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('EPIC-002 Mission Domain foundation is active with namespaced execution IDs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-001"[\s\S]*status_reason: "WAITING_DOMAIN_VALIDATION"/)
  assert.match(backlog, /id: "EPIC-002"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /id: "SPRINT-002-01"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /id: "SPRINT-001-03"[\s\S]*status: "PLANNED"/)
  for (const id of ['SPRINT-002-01', 'SPRINT-002-02', 'SPRINT-002-03', 'SPRINT-002-04', 'SPRINT-002-05', 'SPRINT-002-06']) {
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "EPIC-002"\n    to: "SPRINT-002-01"\n    type: "CONTAINS"/)
})

test('Mission Domain Overview is private draft and defers implementation', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-011-MISSION-DOMAIN-OVERVIEW.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-011"/)
  assert.match(source, /authority_scope: "BBA\.PLATFORM\.DOMAIN"/)
  assert.match(source, /publication_status: "DRAFT"/)
  assert.match(source, /related_epics: \["EPIC-002"\]/)
  assert.match(source, /Technical Boundary/)
  assert.match(source, /does not define aggregates, repositories, tables, APIs, events/)
})
