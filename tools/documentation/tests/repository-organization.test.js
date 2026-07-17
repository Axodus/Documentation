import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const rootDocumentationPattern = /^DOCUMENTATION-.*\.md$/

const readJson = async (path) => JSON.parse(await readFile(resolve(root, path), 'utf8'))

test('DOCUMENTATION markdown artifacts live under the governed RAG directory', async () => {
  const rootEntries = await readdir(root)
  const ragEntries = await readdir(resolve(root, '.rag'))
  assert.deepEqual(rootEntries.filter((entry) => rootDocumentationPattern.test(entry)).sort(), [])
  assert.equal(ragEntries.filter((entry) => rootDocumentationPattern.test(entry)).length, 95)
})

test('generated DOCUMENTATION markdown artifacts use governed RAG paths', async () => {
  const generated = [
    '.rag/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md',
    '.rag/DOCUMENTATION-MASTER-INDEX.md',
    '.rag/DOCUMENTATION-METADATA-COVERAGE.md',
    '.rag/DOCUMENTATION-RELATIONSHIP-REPORT.md',
  ]
  const manifest = await readJson('documentation.manifest.json')
  const sourcePaths = new Set(manifest.documents.map((document) => document.source_path))
  for (const path of generated) {
    assert.equal(sourcePaths.has(path), false, `${path} must remain generated, not source-discovered`)
  }
})

test('legacy ADR index registry paths follow governed RAG directory migration', async () => {
  const baseline = await readJson('documentation.baseline.json')
  const exceptions = await readJson('documentation.exceptions.json')
  const dispositions = await readJson('documentation.exception-dispositions.json')
  assert.equal(baseline.entries.some((entry) => entry.path === 'DOCUMENTATION-ADR-INDEX.md'), false)
  assert.equal(exceptions.exceptions.some((entry) => entry.document_path === 'DOCUMENTATION-ADR-INDEX.md'), false)
  assert.equal(dispositions.entries.some((entry) => entry.document_path === 'DOCUMENTATION-ADR-INDEX.md'), false)
  assert.equal(baseline.entries.some((entry) => entry.path === '.rag/DOCUMENTATION-ADR-INDEX.md'), true)
  assert.equal(exceptions.exceptions.some((entry) => entry.document_path === '.rag/DOCUMENTATION-ADR-INDEX.md'), true)
  assert.equal(dispositions.entries.some((entry) => entry.document_path === '.rag/DOCUMENTATION-ADR-INDEX.md'), true)
})
