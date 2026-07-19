import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

const framingDocuments = [
  ['.rag/bba-platform/product/BBAPLT-GDE-005-PERSONAS-AND-GOVERNANCE-ROLES.md', 'BBAPLT-GDE-005'],
  ['.rag/bba-platform/product/BBAPLT-GDE-006-TENANT-AND-CONSUMER-MODEL.md', 'BBAPLT-GDE-006'],
  ['.rag/bba-platform/product/BBAPLT-GDE-007-MISSION-CENTRIC-VALUE-MODEL.md', 'BBAPLT-GDE-007'],
  ['.rag/bba-platform/product/BBAPLT-GDE-008-SOLUTIONS-AND-USE-CASES.md', 'BBAPLT-GDE-008'],
  ['.rag/bba-platform/product/BBAPLT-GDE-009-INSTITUTIONAL-ASSET-PORTFOLIO.md', 'BBAPLT-GDE-009'],
  ['.rag/bba-platform/product/BBAPLT-GDE-010-PRODUCT-LIFECYCLE-AND-SUCCESS.md', 'BBAPLT-GDE-010'],
]

test('Product Sprint 02 is closed and Epic 001 remains in progress', async () => {
  const source = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  assert.match(source, /id: "EPIC-001"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "PRODUCT_LAYER_CERTIFIED"/)
  assert.match(source, /id: "SPRINT-02"[\s\S]*status: "PASS_CLOSED"/)
  for (const id of ['REQ-001-02-001', 'REQ-001-02-002', 'REQ-001-02-003', 'REQ-001-02-004', 'REQ-001-02-005', 'REQ-001-02-006', 'REQ-001-02-007']) {
    const request = source.match(new RegExp(`id: "${id}"[\\s\\S]*?status: "([A-Z_]+)"`))
    assert.equal(request?.[1], 'DONE', `${id} must be DONE`)
  }
})

test('Product Sprint 02 documents remain private draft and use product authority', async () => {
  for (const [path, id] of framingDocuments) {
    const source = await read(path)
    await access(resolve(root, path))
    assert.match(source, new RegExp(`document_id: "${id}"`))
    assert.match(source, /publication_status: "DRAFT"/)
    assert.match(source, /authority_scope: "BBA\.PLATFORM\.PRODUCT"/)
    assert.match(source, /related_epics: \["EPIC-001"\]/)
    assert.match(source, /technical|Architecture|implementation/i)
  }
})

test('Product Domain Framing review records consistency, gaps, and handoff', async () => {
  const source = await read('.rag/bba-platform/product/BBAPLT-RPT-002-PRODUCT-DOMAIN-FRAMING-REVIEW.md')
  assert.match(source, /document_id: "BBAPLT-RPT-002"/)
  assert.match(source, /PASS — Product Domain Framing is canonically coherent/)
  for (const [, id] of framingDocuments) assert.match(source, new RegExp(`target: "${id}"`))
  assert.match(source, /Explicit Gaps for Domain Documentation/)
  assert.match(source, /APPROVED FOR DOMAIN DOCUMENTATION ROLLOUT/)
  assert.match(source, /No decision is made here about databases, APIs, event buses, queues/)
})
