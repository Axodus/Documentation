import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Institutional Asset Sprint is active with twelve ordered REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-02"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /status_reason: "ASSET_DOMAIN_FOUNDATION_ACTIVE"/)
  for (const id of ['REQ-002-02-001', 'REQ-002-02-002', 'REQ-002-02-003', 'REQ-002-02-004', 'REQ-002-02-005', 'REQ-002-02-006', 'REQ-002-02-007', 'REQ-002-02-008', 'REQ-002-02-009', 'REQ-002-02-010', 'REQ-002-02-011', 'REQ-002-02-012']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-02"\n    to: "REQ-002-02-001"\n    type: "CONTAINS"/)
})

test('Asset Domain Overview establishes Asset as non-file Aggregate Root', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-018-ASSET-DOMAIN-OVERVIEW.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-018"/)
  assert.match(source, /authority_scope: "BBA\.PLATFORM\.DOMAIN"/)
  assert.match(source, /publication_status: "DRAFT"/)
  assert.match(source, /canonical domain Aggregate Root/)
  assert.match(source, /Asset Is Not a File/)
  assert.match(source, /stable domain identity[\s\S]*Tenant context[\s\S]*authority relationships[\s\S]*lineage/)
  assert.match(source, /does not define database entities, object storage, filesystem[\s\S]*paths, APIs/)
})

test('Asset Identity preserves domain continuity across versions and representations', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-019-ASSET-IDENTITY.md')
  assert.match(source, /document_id: "BBAPLT-GDE-019"/)
  assert.match(source, /one stable identity within its owning Tenant context/)
  assert.match(source, /Identity Continuity/)
  assert.match(source, /multiple versions, representations, publications/)
  assert.match(source, /different institutional purpose[\s\S]*authority subject[\s\S]*identity, or meaning/)
  assert.match(source, /does not prescribe database keys, URL schemes, API resources/)
})
