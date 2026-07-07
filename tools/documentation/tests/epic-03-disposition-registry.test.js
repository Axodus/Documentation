import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import {
  dryRunDispositionApplication,
  validateDispositionRegistry,
} from '../repository/dispositions.js'
import { loadDocument } from '../index.js'

const root = process.cwd()
const readJson = async (path) => JSON.parse(await readFile(resolve(root, path), 'utf8'))

test('REQ-04 compact disposition registry represents all 573 proposed dispositions', async () => {
  const registry = await readJson('documentation.exception-dispositions.json')
  assert.equal(registry.registry_version, '1.0.0')
  assert.equal(registry.schema_version, '1.0.0')
  assert.equal(registry.source_inventory_id, 'DOC-REF-010')
  assert.equal(registry.entries.length, 573)
  assert.equal(new Set(registry.entries.map((entry) => entry.exception_id)).size, 573)
  assert.equal(new Set(registry.entries.map((entry) => entry.document_path)).size, 573)
  assert.equal(registry.entries.every((entry) => entry.disposition_state === 'GOVERNED'), true)
  assert.equal(registry.entries.every((entry) => entry.decided_at === '2026-07-07T00:00:00Z'), true)
})

test('REQ-04 compact disposition registry remains synchronized with baseline and exceptions', async () => {
  const baseline = await readJson('documentation.baseline.json')
  const exceptions = await readJson('documentation.exceptions.json')
  const registry = await readJson('documentation.exception-dispositions.json')
  const result = validateDispositionRegistry(registry, { baseline, exceptions })
  assert.equal(result.valid, true)
  assert.equal(result.diagnostics.length, 0)
  assert.equal(result.statistics.disposition_entries, 573)
  assert.equal(result.statistics.governed_dispositions, 573)
  assert.equal(result.statistics.undecided_dispositions, 0)
  assert.equal(result.statistics.temporary_extension_candidates, 386)
  assert.equal(result.statistics.migrate_dispositions, 187)
  assert.equal(result.statistics.security_review_dispositions, 59)
  assert.equal(result.statistics.authority_review_dispositions, 285)
  assert.equal(result.statistics.defer_with_risk_dispositions, 42)
})

test('REQ-04 dry run applies no operational registry mutations', async () => {
  const baseline = await readJson('documentation.baseline.json')
  const exceptions = await readJson('documentation.exceptions.json')
  const registry = await readJson('documentation.exception-dispositions.json')
  const dryRun = dryRunDispositionApplication(registry, { baseline, exceptions })
  assert.equal(dryRun.status, 'PASS')
  assert.equal(dryRun.statistics.would_apply_dispositions, 573)
  assert.equal(dryRun.statistics.governed_dispositions, 573)
  assert.equal(dryRun.statistics.undecided_dispositions, 0)
  assert.equal(dryRun.statistics.temporary_extension_candidates, 386)
  assert.equal(dryRun.statistics.baseline_entries_removed, 0)
  assert.equal(dryRun.statistics.exception_entries_removed, 0)
  assert.equal(dryRun.statistics.exception_registry_entries_mutated, 0)
  assert.deepEqual(dryRun.diff_preview.baseline.removed_paths, [])
  assert.deepEqual(dryRun.diff_preview.exceptions.removed_exception_ids, [])
  assert.deepEqual(dryRun.diff_preview.exceptions.mutated_exception_ids, [])
})

test('REQ-05 application gate report records governed extension application only', async () => {
  const document = await loadDocument(resolve(root, 'DOCUMENTATION-EXCEPTION-DISPOSITION-APPLICATION-GATE.md'), { root })
  const report = await readFile(resolve(root, 'DOCUMENTATION-EXCEPTION-DISPOSITION-APPLICATION-GATE.md'), 'utf8')
  assert.equal(document.metadata.document_id, 'DOC-RPT-042')
  assert.equal(document.metadata.publication_status, 'DRAFT')
  assert.match(report, /Governed disposition states \| 573/)
  assert.match(report, /Undecided disposition states \| 0/)
  assert.match(report, /removes 0 baseline entries|Baseline entries removed \\| 0/)
  assert.match(report, /operational exception registry entries/)
  assert.match(report, /does not authorize Batch 04|authorize Batch 04/)
})
