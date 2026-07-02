import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const planningDocuments = [
  ['DOCUMENTATION-EPIC-02-PLAN.md', 'DOC-ROAD-001'],
  ['DOCUMENTATION-MIGRATION-PLAYBOOK.md', 'DOC-PLAY-001'],
  ['DOCUMENTATION-MIGRATION-CRITERIA.md', 'DOC-STD-002'],
  ['DOCUMENTATION-DEBT-CLASSIFICATION.md', 'DOC-STD-003'],
  ['DOCUMENTATION-ADOPTION-METRICS.md', 'DOC-SPEC-005'],
]
const proposedAdrs = [
  ['adr/DOC-ADR-018-CONTROLLED-BATCH-MIGRATION-GOVERNANCE.md', 'DOC-ADR-018'],
  ['adr/DOC-ADR-019-CANONICAL-PROMOTION-THRESHOLD.md', 'DOC-ADR-019'],
  ['adr/DOC-ADR-020-LEGACY-ARCHIVAL-POLICY.md', 'DOC-ADR-020'],
]

test('EPIC-02 planning contracts conform to Schema 1.0.0', async () => {
  for (const [path, id] of planningDocuments) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'DRAFT')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('ADRs 018 through 020 remain proposals pending REQ-02', async () => {
  const approvedIndex = await readFile(resolve(root, 'DOCUMENTATION-ADR-INDEX.md'), 'utf8')
  for (const [path, id] of proposedAdrs) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'DRAFT')
    assert.match(document.body, /## Status\n\nPROPOSED\./)
    assert.equal(approvedIndex.includes(id), false)
  }
})

test('REQ-01 planning does not alter legacy baseline or exceptions', async () => {
  const baseline = JSON.parse(await readFile(resolve(root, 'documentation.baseline.json'), 'utf8'))
  const exceptions = JSON.parse(await readFile(resolve(root, 'documentation.exceptions.json'), 'utf8'))
  assert.equal(baseline.entries.length, 633)
  assert.equal(exceptions.exceptions.length, 633)
})

test('EPIC-02 planning nodes are connected in the generated graph', async () => {
  const graph = JSON.parse(await readFile(resolve(root, 'documentation.graph.json'), 'utf8'))
  const ids = new Set([...planningDocuments, ...proposedAdrs].map(([, id]) => id))
  const nodes = new Set(graph.nodes.map((node) => node.document_id))
  for (const id of ids) assert.ok(nodes.has(id))
  const orphanPaths = new Set(graph.orphan_documents)
  for (const [path] of [...planningDocuments, ...proposedAdrs]) {
    assert.equal(orphanPaths.has(path), false)
  }
})
