import {
  mkdir,
  readFile,
  rename,
  rm,
} from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import {
  dirname,
  resolve,
} from 'node:path'
import {
  atomicWrite,
} from '../generator/writers/atomic.js'
import {
  normalizeText,
  serializeJson,
  sha256,
} from '../generator/serialization/canonical.js'
import { captureSource } from './snapshot/discovery.js'
import {
  buildRegistry,
  readSnapshotMetadata,
  registryPath,
  scanSnapshots,
} from './snapshot/registry.js'
import { redactText } from './metadata/redaction.js'
import {
  DEFAULT_CREATED_BY,
  DEFAULT_SOURCE_PATH,
  EVIDENCE_SCHEMA_VERSION,
  EVIDENCE_VERSION,
  FRAMEWORK_VERSIONS,
  REGISTRY_FILE,
  SNAPSHOT_METADATA_FILE,
} from './shared/constants.js'

export async function createInstructionsSnapshot(options = {}) {
  const paths = resolvePaths(options)
  const capture = await captureSource(options.sourcePath ?? DEFAULT_SOURCE_PATH)
  await mkdir(paths.evidenceRoot, { recursive: true })
  const existing = (await scanSnapshots(paths)).find((snapshot) => snapshot.source_hash === capture.sourceHash)
  if (existing) {
    await persistIndexes(existing, await scanSnapshots(paths), paths)
    return snapshotResult(existing, false)
  }

  const createdAt = canonicalTimestamp(options.createdAt ?? new Date().toISOString())
  const snapshotId = snapshotIdFromTimestamp(createdAt)
  const finalPath = resolve(paths.evidenceRoot, snapshotId)
  const stagingPath = `${finalPath}.tmp-${process.pid}-${randomUUID()}`
  const metadata = buildMetadata({
    capture,
    createdAt,
    snapshotId,
    sourcePath: options.sourcePath ?? DEFAULT_SOURCE_PATH,
    createdBy: options.createdBy ?? DEFAULT_CREATED_BY,
  })

  try {
    await mkdir(stagingPath, { recursive: false })
    for (const file of capture.files) {
      const target = resolve(stagingPath, file.evidence_path)
      await mkdir(dirname(target), { recursive: true })
      await atomicWrite(target, file.content)
    }
    await atomicWrite(
      resolve(stagingPath, SNAPSHOT_METADATA_FILE),
      serializeJson(metadata),
    )
    await options.beforeSnapshotRename?.({ stagingPath, finalPath })
    await rename(stagingPath, finalPath)
  } catch (error) {
    await rm(stagingPath, { recursive: true, force: true }).catch(() => {})
    throw error
  }

  const snapshots = await scanSnapshots(paths)
  await persistIndexes(metadata, snapshots, paths)
  return snapshotResult(metadata, true)
}

export async function loadInstructionsSnapshot(snapshotId, options = {}) {
  const paths = resolvePaths(options)
  if (snapshotId) return readSnapshotMetadata(snapshotId, paths)
  return JSON.parse(await readFile(paths.latestMetadataPath, 'utf8'))
}

export async function validateInstructionsSnapshot(snapshotOrId, options = {}) {
  const paths = resolvePaths(options)
  const metadata = typeof snapshotOrId === 'string' || snapshotOrId === undefined
    ? await loadInstructionsSnapshot(snapshotOrId, options)
    : snapshotOrId
  const diagnostics = []
  const actualRecords = []

  for (const file of metadata.files ?? []) {
    let content
    try {
      content = await readFile(resolve(paths.root, metadata.snapshot_path, file.evidence_path), 'utf8')
    } catch (error) {
      diagnostics.push(integrityDiagnostic('EVIDENCE_FILE_MISSING', file.path))
      continue
    }
    const actualHash = sha256(content)
    if (actualHash !== file.snapshot_sha256) {
      diagnostics.push(integrityDiagnostic('EVIDENCE_HASH_MISMATCH', file.path))
    }
    if (redactText(content).content !== normalizeText(content)) {
      diagnostics.push(integrityDiagnostic('EVIDENCE_REDACTION_INCOMPLETE', file.path))
    }
    actualRecords.push({ path: file.path, snapshot_sha256: actualHash })
  }

  const actualSnapshotHash = treeHash(actualRecords, 'snapshot_sha256')
  if (actualSnapshotHash !== metadata.snapshot_hash) {
    diagnostics.push(integrityDiagnostic('EVIDENCE_SNAPSHOT_HASH_MISMATCH', null))
  }
  for (const field of requiredMetadataFields()) {
    if (metadata[field] === undefined || metadata[field] === null) {
      diagnostics.push(integrityDiagnostic('EVIDENCE_METADATA_INCOMPLETE', field))
    }
  }
  return {
    valid: diagnostics.length === 0,
    snapshot_id: metadata.snapshot_id,
    files_checked: metadata.files?.length ?? 0,
    diagnostics,
  }
}

export async function listSnapshots(options = {}) {
  const paths = resolvePaths(options)
  return buildRegistry(await scanSnapshots(paths))
}

export async function compareSnapshots(snapshotId, referenceId, options = {}) {
  const left = await loadInstructionsSnapshot(snapshotId, options)
  const right = await loadInstructionsSnapshot(referenceId, options)
  const leftFiles = new Map(left.files.map((file) => [file.path, file]))
  const rightFiles = new Map(right.files.map((file) => [file.path, file]))
  const added = [...leftFiles.keys()].filter((path) => !rightFiles.has(path)).sort()
  const removed = [...rightFiles.keys()].filter((path) => !leftFiles.has(path)).sort()
  const modified = [...leftFiles.keys()]
    .filter((path) => rightFiles.has(path) && leftFiles.get(path).source_sha256 !== rightFiles.get(path).source_sha256)
    .sort()
  return {
    snapshot_id: left.snapshot_id,
    reference_id: right.snapshot_id,
    equal: left.source_hash === right.source_hash,
    added_files: added,
    removed_files: removed,
    modified_files: modified,
    hash_changes: modified.map((path) => ({
      path,
      snapshot_changed: leftFiles.get(path).snapshot_sha256 !== rightFiles.get(path).snapshot_sha256,
      source_changed: true,
    })),
    metadata_changes: metadataChanges(left, right),
  }
}

function buildMetadata({ capture, createdAt, snapshotId, sourcePath, createdBy }) {
  return {
    snapshot_id: snapshotId,
    schema_version: EVIDENCE_SCHEMA_VERSION,
    evidence_version: EVIDENCE_VERSION,
    source_path: sourcePath,
    snapshot_path: `evidence/instructions/${snapshotId}`,
    created_at: createdAt,
    created_by: createdBy,
    source_hash: capture.sourceHash,
    snapshot_hash: capture.snapshotHash,
    files: capture.files.map(({ content: _content, ...file }) => file),
    directories: capture.directories,
    redacted_entries: capture.redactedEntries,
    snapshot_size: capture.snapshotSize,
    ...FRAMEWORK_VERSIONS,
  }
}

async function persistIndexes(latest, snapshots, paths) {
  await atomicWrite(paths.latestMetadataPath, serializeJson(latest))
  await atomicWrite(registryPath(paths.root), serializeJson(buildRegistry(snapshots)))
}

function resolvePaths(options) {
  const root = resolve(options.root ?? process.cwd())
  return {
    root,
    evidenceRoot: resolve(options.evidenceRoot ?? resolve(root, 'evidence/instructions')),
    latestMetadataPath: resolve(root, SNAPSHOT_METADATA_FILE),
    registryPath: resolve(root, REGISTRY_FILE),
  }
}

function snapshotResult(metadata, created) {
  return {
    created,
    snapshot_id: metadata.snapshot_id,
    source_hash: metadata.source_hash,
    snapshot_hash: metadata.snapshot_hash,
    files: metadata.files.length,
    directories: metadata.directories.length,
    snapshot_size: metadata.snapshot_size,
    redacted_entries: metadata.redacted_entries,
    metadata,
  }
}

function snapshotIdFromTimestamp(value) {
  return value
    .replaceAll(':', '')
    .replace('.000Z', 'Z')
}

function canonicalTimestamp(value) {
  const date = new Date(value)
  if (Number.isNaN(date.valueOf())) throw new TypeError('Snapshot created_at must be an RFC3339 timestamp.')
  return date.toISOString()
}

function treeHash(files, field) {
  return sha256(files
    .sort((left, right) => left.path.localeCompare(right.path))
    .map((file) => `${file.path}\0${file[field]}\n`)
    .join(''))
}

function integrityDiagnostic(code, path) {
  return {
    code,
    severity: 'ERROR',
    path,
    message: safeMessage(code),
  }
}

function safeMessage(code) {
  return {
    EVIDENCE_FILE_MISSING: 'Expected evidence payload file is missing.',
    EVIDENCE_HASH_MISMATCH: 'Evidence payload hash does not match metadata.',
    EVIDENCE_REDACTION_INCOMPLETE: 'Evidence payload does not satisfy the redaction pass.',
    EVIDENCE_SNAPSHOT_HASH_MISMATCH: 'Aggregate snapshot hash does not match payload metadata.',
    EVIDENCE_METADATA_INCOMPLETE: 'Required snapshot metadata is absent.',
  }[code]
}

function requiredMetadataFields() {
  return [
    'snapshot_id',
    'schema_version',
    'evidence_version',
    'source_path',
    'snapshot_path',
    'created_at',
    'created_by',
    'source_hash',
    'snapshot_hash',
    'files',
    'directories',
    'redacted_entries',
    'generator_version',
    'validation_version',
    'baseline_version',
    'manifest_version',
    'graph_version',
  ]
}

function metadataChanges(left, right) {
  const fields = [
    'schema_version',
    'evidence_version',
    'created_by',
    'generator_version',
    'validation_version',
    'baseline_version',
    'manifest_version',
    'graph_version',
  ]
  return fields
    .filter((field) => left[field] !== right[field])
    .map((field) => ({ field, changed: true }))
}
