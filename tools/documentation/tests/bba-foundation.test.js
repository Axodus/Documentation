import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const foundationRoot = resolve(root, '.rag/bba-platform')

const read = (path) => readFile(resolve(root, path), 'utf8')

const requiredFiles = [
  '.rag/bba-platform/FOUNDATION-MANIFEST.yaml',
  '.rag/bba-platform/DOCUMENTATION-MAP.yaml',
  '.rag/bba-platform/EXECUTION-BACKLOG.yaml',
  '.rag/bba-platform/dependency-graph.yaml',
  '.rag/bba-platform/BBA-DOC-SPRINT-00-FOUNDATION-PLAN.md',
  '.rag/bba-platform/BBA-DOC-DOCUMENTATION-STRATEGY.md',
  '.rag/bba-platform/BBA-DOC-DOCUMENTATION-ROADMAP.md',
  '.rag/bba-platform/BBA-DOC-CONCEPT-MAP.md',
  '.rag/bba-platform/BBA-DOC-UBIQUITOUS-LANGUAGE.md',
  '.rag/bba-platform/BBA-DOC-MASTER-BACKLOG.md',
  '.rag/bba-platform/BBA-DOC-DECISION-TRACEABILITY.md',
  '.rag/bba-platform/BBA-DOC-PUBLIC-PRIVATE-BOUNDARY.md',
  '.rag/bba-platform/BBA-DOC-QUALITY-STANDARDS.md',
  '.rag/bba-platform/BBA-DOC-MIGRATION-REGISTER.md',
  '.rag/bba-platform/adr/BBA-ADR-0001-DOCUMENTATION-AS-SOURCE-OF-TRUTH.md',
  '.rag/bba-platform/adr/BBA-ADR-0002-MISSION-AS-CORE-DOMAIN-ENTITY.md',
  '.rag/bba-platform/adr/BBA-ADR-0003-TENANT-NEUTRAL-CORE.md',
  '.rag/bba-platform/adr/BBA-ADR-0004-DOMAIN-BEFORE-ARCHITECTURE.md',
]

test('BBA Foundation required files exist', async () => {
  await Promise.all(requiredFiles.map((path) => access(resolve(root, path))))
})

test('BBA documentation map has six layers and 43 areas', async () => {
  const source = await read('.rag/bba-platform/DOCUMENTATION-MAP.yaml')
  assert.equal((source.match(/  - id: "LAYER-/g) ?? []).length, 6)
  assert.equal((source.match(/  - id: "AREA-/g) ?? []).length, 43)
  assert.doesNotMatch(source, /EPIC-/)
  assert.match(source, /name: "Architecture"/)
  assert.match(source, /name: "Development"/)
})

test('BBA execution backlog has Program, six Epics, and all planned REQs', async () => {
  const source = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  assert.match(source, /id: "PROGRAM-BBA-DOC"/)
  assert.equal((source.match(/    - id: "EPIC-/g) ?? []).length, 6)
  assert.match(source, /id: "SPRINT-00"/)
  const requests = source.match(/            - id: "REQ-[^"]+"/g) ?? []
  assert.equal(requests.length, 106)
  assert.equal(new Set(requests).size, requests.length)
  assert.doesNotMatch(source, /requirements:/)
  assert.match(source, /acceptance:/)
})

test('BBA execution dependency graph separates execution from knowledge nodes', async () => {
  const source = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(source, /type: "CONTAINS"/)
  assert.match(source, /type: "DEPENDS_ON"/)
  assert.match(source, /from: "PROGRAM-BBA-DOC"/)
  assert.match(source, /to: "SPRINT-00"/)
  assert.doesNotMatch(source, /AREA-0/)
})

test('BBA Foundation manifest covers its governed files and required documents', async () => {
  const source = await read('.rag/bba-platform/FOUNDATION-MANIFEST.yaml')
  const paths = [...source.matchAll(/  - path: "([^"]+)"/g)].map((match) => match[1])
  const required = [...source.matchAll(/  - "(BBA-[^"]+)"/g)].map((match) => match[1])
  assert.equal(paths.length, 17)
  assert.equal(new Set(paths).size, paths.length)
  assert.equal(required.length, 14)
  assert.match(source, /checksum_algorithm: "SHA-256\(sorted relative path \+ NUL \+ file content\)"/)
  assert.match(source, /checksum_scope: "governed_documents"/)
  for (const path of paths) await access(resolve(root, path))
})

test('BBA Foundation checksum is deterministic over governed files', async () => {
  const manifest = await read('.rag/bba-platform/FOUNDATION-MANIFEST.yaml')
  const paths = [...manifest.matchAll(/  - path: "([^"]+)"/g)].map((match) => match[1]).sort()
  const digest = createHash('sha256')
  for (const path of paths) {
    digest.update(path)
    digest.update('\0')
    digest.update((await read(path)).replaceAll('\r\n', '\n'))
  }
  const declared = manifest.match(/^checksum: "([a-f0-9]{64})"$/m)?.[1]
  assert.equal(declared, digest.digest('hex'))
})

test('BBA canonical vocabulary includes required fields and terms', async () => {
  const source = await read('.rag/bba-platform/BBA-DOC-UBIQUITOUS-LANGUAGE.md')
  for (const term of [
    'Mission',
    'Institutional Asset',
    'AI Workforce',
    'Human Governance',
    'Steward',
    'Connector',
    'Capability',
    'Solution',
  ]) assert.match(source, new RegExp(`\\| ${term} \\|`))
  for (const field of ['Canonical Name', 'Definition', 'Motivation', 'Forbidden Synonyms', 'Aliases', 'Related Concepts', 'Lifecycle', 'Examples', 'Non Examples']) {
    assert.match(source, new RegExp(field))
  }
})

test('BBA ADR set records the four foundation decisions', async () => {
  const expected = [
    ['BBA-ADR-0001', 'Documentation as Source of Truth'],
    ['BBA-ADR-0002', 'Mission as Core Domain Entity'],
    ['BBA-ADR-0003', 'Tenant-Neutral Core'],
    ['BBA-ADR-0004', 'Domain Before Architecture'],
  ]
  for (const [id, title] of expected) {
    const path = requiredFiles.find((item) => item.includes(id))
    const source = await read(path)
    assert.match(source, new RegExp(`document_id: "${id}"`))
    assert.match(source, new RegExp(`# ${id} — ${title}`))
    assert.match(source, /publication_status: "DRAFT"/)
    assert.match(source, /## Status\n\nPROPOSED/)
  }
})

test('BBA migration register preserves current Axodus source boundaries', async () => {
  const source = await read('.rag/bba-platform/BBA-DOC-MIGRATION-REGISTER.md')
  for (const field of ['Origin', 'Destination', 'Migration Strategy', 'Confidence', 'Blocking Issues', 'Replacement Document', 'Publication Candidate', 'Migration Phase']) {
    assert.match(source, new RegExp(`\\| ${field} \\|`))
  }
  assert.match(source, /`docs\/bba-agency\//)
  assert.match(source, /`.knowledge\/bba\//)
  assert.match(source, /No migration is authorized/)
})

test('BBA Foundation files are located in the private governed directory', async () => {
  assert.equal(foundationRoot.endsWith('/.rag/bba-platform'), true)
  for (const path of requiredFiles) assert.equal(path.startsWith('.rag/bba-platform/'), true)
})
