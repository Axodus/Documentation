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
