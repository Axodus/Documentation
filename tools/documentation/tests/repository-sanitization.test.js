import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('repository sanitization audit is a connected canonical report', async () => {
  const document = await loadDocument(resolve(root, 'documentation/DOCUMENTATION-REPOSITORY-SANITIZATION-AUDIT.md'), { root })
  assert.equal(document.profile, 'CANONICAL')
  assert.equal(document.metadata.document_id, 'DOC-RPT-045')
  assert.equal(document.metadata.publication_status, 'DRAFT')
  assert.equal(document.metadata.maturity_level, 'D2')
  assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  assert.ok(document.metadata.relationships.length > 0)
})

test('gitignore covers local dependency, build, secret, log, and temporary artifacts', async () => {
  const ignore = await read('.gitignore')
  for (const expected of [
    'node_modules/',
    'docs/.vitepress/dist/',
    'docs/.vitepress/cache/',
    '.env',
    '.env.*',
    '!.env.example',
    '*.pem',
    '*.key',
    '*.log',
    '*.tmp',
    '*.bak',
    '*.orig',
    '*.swp',
    '.DS_Store',
    'Thumbs.db',
    '.cache/',
    '.vite/',
    'coverage/',
  ]) {
    assert.equal(ignore.includes(expected), true, expected)
  }
})

test('repository sanitization report records false-positive triage and closed gates', async () => {
  const report = await read('documentation/DOCUMENTATION-REPOSITORY-SANITIZATION-AUDIT.md')
  assert.match(report, /No high-confidence live credential found/)
  assert.match(report, /Synthetic fixture strings/)
  assert.match(report, /Private Tracks B\/C remain internal/)
  assert.match(report, /did not authorize public disclosure/)
  assert.match(report, /operational\s+gate\s+opening/)
})
