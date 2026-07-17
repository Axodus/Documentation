import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('SPRINT-REQ-09 closure audit is a connected canonical report', async () => {
  const document = await loadDocument(resolve(root, '.rag/DOCUMENTATION-SPRINT-CLOSURE-AUDIT.md'), { root })
  assert.equal(document.profile, 'CANONICAL')
  assert.equal(document.metadata.document_id, 'DOC-RPT-044')
  assert.equal(document.metadata.publication_status, 'DRAFT')
  assert.equal(document.metadata.maturity_level, 'D2')
  assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  assert.equal(document.metadata.related_requirements.includes('SPRINT-REQ-09'), true)
})

test('SPRINT-REQ-09 records accepted sprint requests and commit evidence', async () => {
  const report = await read('.rag/DOCUMENTATION-SPRINT-CLOSURE-AUDIT.md')
  for (const commit of ['d077d0f', 'f191874', '6acd912', '6b427a4', 'a391be4', 'f3dca50']) {
    assert.match(report, new RegExp(commit))
  }
  assert.match(report, /SPRINT-REQ-02` \| `ACCEPTED_NO_COMMIT`/)
  assert.match(report, /SPRINT-REQ-04` \| `ACCEPTED_NO_COMMIT`/)
  assert.match(report, /SPRINT-REQ-09` \| `ACCEPTED`/)
})

test('SPRINT-REQ-09 preserves migration and public-disclosure gates', async () => {
  const report = await read('.rag/DOCUMENTATION-SPRINT-CLOSURE-AUDIT.md')
  assert.match(report, /EPIC-03 is ready for migration planning, not migration execution/)
  assert.match(report, /External use, public disclosure, fundraising use, investor use, and legal approval remain prohibited/)
  assert.match(report, /It did not authorize public disclosure/)
  assert.match(report, /migration execution/)
  assert.match(report, /operational gate opening/)
})
