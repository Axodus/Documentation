import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('REQ-06 traceability-depth baseline is a connected canonical report', async () => {
  const document = await loadDocument(resolve(root, 'documentation/DOCUMENTATION-TRACEABILITY-DEPTH-BASELINE.md'), { root })
  assert.equal(document.profile, 'CANONICAL')
  assert.equal(document.metadata.document_id, 'DOC-RPT-043')
  assert.equal(document.metadata.publication_status, 'DRAFT')
  assert.equal(document.metadata.maturity_level, 'D2')
  assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  assert.ok(document.metadata.relationships.length > 0)
})

test('REQ-06 records the accepted default-overview-only cohort without mutations', async () => {
  const report = await read('documentation/DOCUMENTATION-TRACEABILITY-DEPTH-BASELINE.md')
  assert.match(report, /EPIC-03 enrichment cohort \| 40/)
  assert.match(report, /CORE transversal observations outside cohort \| 2/)
  assert.match(report, /Relationships added by this request \| 0/)
  assert.match(report, /Documents migrated by this request \| 0/)
  assert.match(report, /Owner, lifecycle, authority, maturity, and gate metadata/)
})

test('REQ-06 candidate table contains exactly 40 enrichment candidates', async () => {
  const report = await read('documentation/DOCUMENTATION-TRACEABILITY-DEPTH-BASELINE.md')
  const candidateSection = report
    .split('## Candidate Enrichment Targets\n')[1]
    .split('\n## CORE Transversal Observations')[0]
  const candidateRows = candidateSection
    .split('\n')
    .filter((line) => /^\| `(?:ACCOUNT|DEX|GOV|LOTTERY|MARKET|MINING|RUNTIME|SEC|TREASURY)-GDE-\d+`/.test(line))
  assert.equal(candidateRows.length, 40)
  assert.equal(candidateRows.every((line) => line.includes('Candidate additional targets')), false)
})

test('REQ-06 progress report advances to sprint closure without authorizing migration', async () => {
  const progress = await read('documentation/DOCUMENTATION-EPIC-03-PROGRESS-REPORT.md')
  assert.match(progress, /AXODUS-DOCUMENTATION-EPIC-03-REQ-06: TRACEABILITY_DEPTH_BASELINED/)
  assert.match(progress, /REQ-06 adds 0 relationship edges/)
  assert.match(progress, /EPIC-03 migration planning request/)
  assert.match(progress, /must not execute migrations/)
  assert.match(progress, /did not migrate legacy documents/)
})
