import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')
const readJson = async (path) => JSON.parse(await read(path))

const finalReports = [
  ['documentation/EPIC-03-FINAL-RECONCILIATION-REPORT.md', 'DOC-RPT-067'],
  ['documentation/EPIC-03-FINAL-CLOSURE-AUDIT.md', 'DOC-RPT-068'],
  ['documentation/EPIC-03-RESIDUAL-BACKLOG-REGISTER.md', 'DOC-RPT-069'],
  ['documentation/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md', 'DOC-RPT-070'],
  ['documentation/EPIC-03-SUCCESSOR-WORKSTREAM-PLAN.md', 'DOC-RPT-071'],
]

test('EPIC-03 final closure reports use monotonic IDs and no authored relationships', async () => {
  for (const [path, id] of finalReports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
    assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  }
})

test('EPIC-03 final closure preserves registry reconciliation and residual backlog counts', async () => {
  const baseline = await readJson('documentation.baseline.json')
  const exceptions = await readJson('documentation.exceptions.json')
  const dispositions = await readJson('documentation.exception-dispositions.json')
  assert.equal(baseline.entries.length, 563)
  assert.equal(exceptions.exceptions.length, 563)
  assert.equal(dispositions.entries.length, 563)
  assert.equal(dispositions.entries.filter((entry) => entry.primary_disposition === 'MIGRATE').length, 177)
  assert.equal(dispositions.entries.filter((entry) => entry.primary_disposition === 'AUTHORITY_REVIEW').length, 285)
  assert.equal(dispositions.entries.filter((entry) => entry.primary_disposition === 'SECURITY_REVIEW').length, 59)
  assert.equal(dispositions.entries.filter((entry) => entry.primary_disposition === 'DEFER_WITH_RISK').length, 42)
  assert.equal(dispositions.entries.filter((entry) => entry.primary_disposition === 'UNDECIDED').length, 0)
})

test('EPIC-03 final closure records residual-governed closure without maturity promotion', async () => {
  const audit = await read('documentation/EPIC-03-FINAL-CLOSURE-AUDIT.md')
  const maturity = await read('documentation/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md')
  const backlog = await read('documentation/EPIC-03-RESIDUAL-BACKLOG-REGISTER.md')

  assert.match(audit, /CLOSED_WITH_RESIDUAL_GOVERNED_BACKLOG/)
  assert.match(audit, /PASS_CLOSED_WITH_RESIDUAL_GOVERNED_BACKLOG/)
  assert.match(maturity, /Framework\/Governance: L4_CANDIDATE \/ D3/)
  assert.match(maturity, /Repository Corpus: L4_CANDIDATE \/ D2_PLUS_TRANSITIONING_TO_D3/)
  assert.match(maturity, /L4 Final Promotion: NOT_GRANTED/)
  assert.match(maturity, /D4 Readiness: NOT_ACHIEVED/)
  assert.match(backlog, /177 \+ 285 \+ 59 \+ 42 = 563/)
})
