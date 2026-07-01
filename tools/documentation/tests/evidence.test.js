import assert from 'node:assert/strict'
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  unlink,
  writeFile,
} from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import {
  after,
  before,
  test,
} from 'node:test'
import { main } from '../cli/index.js'
import {
  compareSnapshots,
  createInstructionsSnapshot,
  listSnapshots,
  loadInstructionsSnapshot,
  validateInstructionsSnapshot,
} from '../evidence/index.js'

let root
let source
let first
let repeated
let second
const sensitiveFixture = ['test', 'sensitive', 'value'].join('-')

before(async () => {
  root = await mkdtemp(join(tmpdir(), 'documentation-evidence-'))
  source = join(root, 'source')
  await mkdir(join(source, 'nested'), { recursive: true })
  await writeFile(join(source, 'a.md'), `# A\napi_key: ${sensitiveFixture}\n`, 'utf8')
  await writeFile(join(source, 'nested/b.md'), '# B\nsafe: true\n', 'utf8')
  first = await createInstructionsSnapshot({
    root,
    sourcePath: source,
    createdAt: '2026-07-01T00:00:00Z',
  })
  repeated = await createInstructionsSnapshot({
    root,
    sourcePath: source,
    createdAt: '2026-07-02T00:00:00Z',
  })

  await writeFile(join(source, 'a.md'), `# A changed\npassword=${sensitiveFixture}\n`, 'utf8')
  await unlink(join(source, 'nested/b.md'))
  await writeFile(join(source, 'c.md'), '# C\nsafe: true\n', 'utf8')
  second = await createInstructionsSnapshot({
    root,
    sourcePath: source,
    createdAt: '2026-07-03T00:00:00Z',
  })
})

after(async () => {
  await rm(root, { recursive: true, force: true })
})

test('snapshot creation persists immutable metadata and redacted payload', async () => {
  assert.equal(first.created, true)
  assert.equal(first.snapshot_id, '2026-07-01T000000Z')
  const metadata = await loadInstructionsSnapshot(first.snapshot_id, { root })
  assert.equal(metadata.evidence_version, '1.0.0')
  assert.equal(metadata.files.length, 2)
  const payload = await readFile(
    join(root, metadata.snapshot_path, metadata.files.find((file) => file.path === 'a.md').evidence_path),
    'utf8',
  )
  assert.equal(payload.includes(sensitiveFixture), false)
  assert.equal(payload.includes('<REDACTED>'), true)
})

test('identical source reuses the immutable snapshot deterministically', () => {
  assert.equal(repeated.created, false)
  assert.equal(repeated.snapshot_id, first.snapshot_id)
  assert.equal(repeated.source_hash, first.source_hash)
  assert.equal(repeated.snapshot_hash, first.snapshot_hash)
  assert.deepEqual(repeated.metadata, first.metadata)
})

test('snapshot metadata and registry never contain captured values', async () => {
  const metadataText = await readFile(join(root, 'documentation.instructions.snapshot.json'), 'utf8')
  const registryText = await readFile(join(root, 'documentation.instructions.registry.json'), 'utf8')
  assert.equal(metadataText.includes(sensitiveFixture), false)
  assert.equal(registryText.includes(sensitiveFixture), false)
})

test('registry generation is deterministic and ordered', async () => {
  const registry = await listSnapshots({ root })
  assert.equal(registry.registry_version, '1.0.0')
  assert.equal(registry.snapshots.length, 2)
  assert.deepEqual(
    registry.snapshots.map((snapshot) => snapshot.snapshot_id),
    ['2026-07-01T000000Z', '2026-07-03T000000Z'],
  )
})

test('snapshot loading and integrity validation use no source contents', async () => {
  const metadata = await loadInstructionsSnapshot(second.snapshot_id, { root })
  const validation = await validateInstructionsSnapshot(metadata, { root })
  assert.equal(validation.valid, true)
  assert.equal(validation.diagnostics.length, 0)
  assert.equal(validation.files_checked, 2)
})

test('snapshot comparison reports paths and hash changes only', async () => {
  const comparison = await compareSnapshots(second.snapshot_id, first.snapshot_id, { root })
  assert.equal(comparison.equal, false)
  assert.deepEqual(comparison.added_files, ['c.md'])
  assert.deepEqual(comparison.removed_files, ['nested/b.md'])
  assert.deepEqual(comparison.modified_files, ['a.md'])
  assert.equal(JSON.stringify(comparison).includes(sensitiveFixture), false)
})

test('redaction statistics contain categories without values', () => {
  assert.ok(first.redacted_entries.count > 0)
  assert.ok(first.redacted_entries.affected_files.includes('a.md'))
  assert.ok(Object.hasOwn(first.redacted_entries.categories, 'SENSITIVE_ASSIGNMENT'))
  assert.equal(JSON.stringify(first.redacted_entries).includes(sensitiveFixture), false)
})

test('interrupted snapshot write leaves no snapshot or temporary payload', async () => {
  const interruptedRoot = await mkdtemp(join(tmpdir(), 'documentation-evidence-interrupted-'))
  const interruptedSource = join(interruptedRoot, 'source')
  await mkdir(interruptedSource)
  await writeFile(join(interruptedSource, 'safe.md'), '# Safe\n', 'utf8')
  try {
    await assert.rejects(
      createInstructionsSnapshot({
        root: interruptedRoot,
        sourcePath: interruptedSource,
        createdAt: '2026-07-01T00:00:00Z',
        beforeSnapshotRename: () => {
          throw new Error('simulated evidence interruption')
        },
      }),
      /simulated evidence interruption/,
    )
    const entries = await readdir(join(interruptedRoot, 'evidence/instructions'))
    assert.deepEqual(entries, [])
  } finally {
    await rm(interruptedRoot, { recursive: true, force: true })
  }
})

test('CLI snapshot list consumes the public Snapshot API', async () => {
  let stdout = ''
  const status = await main(['snapshot-list', '--json'], {
    stdout: (content) => { stdout += content },
    stderr: () => {},
  })
  assert.equal(status, 0)
  const payload = JSON.parse(stdout)
  assert.equal(payload.command, 'snapshot-list')
  assert.ok(payload.statistics.snapshots >= 0)
})
