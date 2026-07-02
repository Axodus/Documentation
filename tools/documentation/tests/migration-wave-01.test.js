import assert from 'node:assert/strict'
import {
  access,
  readFile,
} from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const targets = [
  { path: 'README.md', id: 'DOC-GDE-005' },
  { path: 'docs/index.md', id: 'DOC-GDE-006' },
]

test('Wave 01 entry points conform to Schema 1.0.0', async () => {
  for (const target of targets) {
    const document = await loadDocument(resolve(root, target.path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.schema_version, '1.0.0')
    assert.equal(document.metadata.document_id, target.id)
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('Wave 01 targets no longer exist in baseline or exception registry', async () => {
  const baseline = JSON.parse(await readFile(resolve(root, 'documentation.baseline.json'), 'utf8'))
  const exceptions = JSON.parse(await readFile(resolve(root, 'documentation.exceptions.json'), 'utf8'))
  const paths = new Set(targets.map((target) => target.path))
  assert.equal(baseline.entries.some((entry) => paths.has(entry.path)), false)
  assert.equal(exceptions.exceptions.some((entry) => paths.has(entry.document_path)), false)
  assert.equal(baseline.entries.length, 593)
  assert.equal(exceptions.exceptions.length, 593)
})

test('Wave 01 documents are connected and resolve in the generated graph', async () => {
  const graph = JSON.parse(await readFile(resolve(root, 'documentation.graph.json'), 'utf8'))
  const nodeIds = new Set(graph.nodes.map((node) => node.document_id))
  for (const target of targets) {
    assert.ok(nodeIds.has(target.id))
    assert.equal(graph.orphan_documents.includes(target.path), false)
  }
  assert.equal(graph.unresolved_references.length, 0)
})

test('optional docs overview target remains absent', async () => {
  await assert.rejects(access(resolve(root, 'docs/overview.md')), { code: 'ENOENT' })
})
