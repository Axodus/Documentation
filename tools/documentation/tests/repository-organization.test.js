import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const rootDocumentationPattern = /^DOCUMENTATION-.*\.md$/

const readJson = async (path) => JSON.parse(await readFile(resolve(root, path), 'utf8'))

test('DOCUMENTATION markdown artifacts live under documentation directory', async () => {
  const rootEntries = await readdir(root)
  const documentationEntries = await readdir(resolve(root, 'documentation'))
  assert.deepEqual(rootEntries.filter((entry) => rootDocumentationPattern.test(entry)).sort(), [])
  assert.equal(documentationEntries.filter((entry) => rootDocumentationPattern.test(entry)).length, 95)
})

test('generated DOCUMENTATION markdown artifacts use documentation paths', async () => {
  const generated = [
    'documentation/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md',
    'documentation/DOCUMENTATION-MASTER-INDEX.md',
    'documentation/DOCUMENTATION-METADATA-COVERAGE.md',
    'documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md',
  ]
  const manifest = await readJson('documentation.manifest.json')
  const sourcePaths = new Set(manifest.documents.map((document) => document.source_path))
  for (const path of generated) {
    assert.equal(sourcePaths.has(path), false, `${path} must remain generated, not source-discovered`)
  }
})

test('legacy ADR index registry paths follow documentation directory migration', async () => {
  const baseline = await readJson('documentation.baseline.json')
  const exceptions = await readJson('documentation.exceptions.json')
  const dispositions = await readJson('documentation.exception-dispositions.json')
  assert.equal(baseline.entries.some((entry) => entry.path === 'DOCUMENTATION-ADR-INDEX.md'), false)
  assert.equal(exceptions.exceptions.some((entry) => entry.document_path === 'DOCUMENTATION-ADR-INDEX.md'), false)
  assert.equal(dispositions.entries.some((entry) => entry.document_path === 'DOCUMENTATION-ADR-INDEX.md'), false)
  assert.equal(baseline.entries.some((entry) => entry.path === 'documentation/DOCUMENTATION-ADR-INDEX.md'), true)
  assert.equal(exceptions.exceptions.some((entry) => entry.document_path === 'documentation/DOCUMENTATION-ADR-INDEX.md'), true)
  assert.equal(dispositions.entries.some((entry) => entry.document_path === 'documentation/DOCUMENTATION-ADR-INDEX.md'), true)
})
