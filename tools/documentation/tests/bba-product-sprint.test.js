import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

const productDocuments = [
  ['.rag/bba-platform/product/BBAPLT-GDE-001-PRODUCT-VISION.md', 'BBAPLT-GDE-001'],
  ['.rag/bba-platform/product/BBAPLT-GDE-002-PRODUCT-POSITIONING.md', 'BBAPLT-GDE-002'],
  ['.rag/bba-platform/product/BBAPLT-GDE-003-CAPABILITIES.md', 'BBAPLT-GDE-003'],
  ['.rag/bba-platform/product/BBAPLT-GDE-004-OPERATING-MODEL.md', 'BBAPLT-GDE-004'],
  ['.rag/bba-platform/product/BBAPLT-POL-001-PRODUCT-BOUNDARIES.md', 'BBAPLT-POL-001'],
]

test('Product Sprint 01 is complete in the execution backlog', async () => {
  const source = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  assert.match(source, /id: "EPIC-001"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(source, /id: "SPRINT-01"[\s\S]*status: "PASS_CLOSED"/)
  for (const id of ['REQ-001-01-001', 'REQ-001-01-002', 'REQ-001-01-003', 'REQ-001-01-004', 'REQ-001-01-005', 'REQ-001-01-006']) {
    const request = source.match(new RegExp(`id: "${id}"[\\s\\S]*?status: "([A-Z_]+)"`))
    assert.equal(request?.[1], 'DONE', `${id} must be DONE`)
  }
})

test('Product Sprint 02 is closed in the execution backlog', async () => {
  const source = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  assert.match(source, /id: "SPRINT-02"[\s\S]*status: "PASS_CLOSED"/)
  for (const id of ['REQ-001-02-001', 'REQ-001-02-002', 'REQ-001-02-003', 'REQ-001-02-004', 'REQ-001-02-005', 'REQ-001-02-006', 'REQ-001-02-007']) {
    const request = source.match(new RegExp(`id: "${id}"[\\s\\S]*?status: "([A-Z_]+)"`))
    assert.equal(request?.[1], 'DONE', `${id} must be DONE`)
  }
})

test('Product Sprint 01 documents exist and remain draft', async () => {
  for (const [path, id] of productDocuments) {
    const source = await read(path)
    await access(resolve(root, path))
    assert.match(source, new RegExp(`document_id: "${id}"`))
    assert.match(source, /publication_status: "DRAFT"/)
    assert.match(source, /authority_scope: "BBA\.PLATFORM\.PRODUCT"/)
    assert.match(source, /related_epics: \["EPIC-001"\]/)
  }
})

test('Product baseline review validates every Product Sprint document', async () => {
  const source = await read('.rag/bba-platform/product/BBAPLT-RPT-001-PRODUCT-BASELINE-REVIEW.md')
  assert.match(source, /document_id: "BBAPLT-RPT-001"/)
  assert.match(source, /PASS — Product baseline coherent/)
  for (const [, id] of productDocuments) assert.match(source, new RegExp(`target: "${id}"`))
  assert.match(source, /Publication remains unapproved/)
  assert.match(source, /EPIC-002 — Domain Documentation\s+Rollout/)
})

test('Product documents explicitly defer technical architecture', async () => {
  for (const [path] of productDocuments) {
    const source = await read(path)
    assert.match(source, /technical|Architecture|implementation/i)
  }
  const vision = await read(productDocuments[0][0])
  assert.match(vision, /does not decide databases, APIs, event buses, queues/)
})
