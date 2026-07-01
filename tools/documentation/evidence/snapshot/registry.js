import {
  readdir,
  readFile,
} from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  EVIDENCE_VERSION,
  REGISTRY_FILE,
  REGISTRY_VERSION,
  SNAPSHOT_METADATA_FILE,
} from '../shared/constants.js'

export async function readSnapshotMetadata(snapshotId, options) {
  const path = resolve(options.evidenceRoot, snapshotId, SNAPSHOT_METADATA_FILE)
  return JSON.parse(await readFile(path, 'utf8'))
}

export async function scanSnapshots(options) {
  let entries
  try {
    entries = await readdir(options.evidenceRoot, { withFileTypes: true })
  } catch (error) {
    if (error?.code === 'ENOENT') return []
    throw error
  }
  const snapshots = []
  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    if (!entry.isDirectory() || entry.name.includes('.tmp-')) continue
    try {
      snapshots.push(await readSnapshotMetadata(entry.name, options))
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error
    }
  }
  return snapshots.sort((left, right) => left.snapshot_id.localeCompare(right.snapshot_id))
}

export function buildRegistry(snapshots) {
  return {
    registry_version: REGISTRY_VERSION,
    evidence_version: EVIDENCE_VERSION,
    snapshots: snapshots.map((snapshot) => ({
      snapshot_id: snapshot.snapshot_id,
      created_at: snapshot.created_at,
      source_hash: snapshot.source_hash,
      snapshot_hash: snapshot.snapshot_hash,
      snapshot_path: snapshot.snapshot_path,
      status: 'ACTIVE',
      snapshot_size: snapshot.snapshot_size,
      evidence_version: snapshot.evidence_version,
      files: snapshot.files.length,
      directories: snapshot.directories.length,
      redactions: snapshot.redacted_entries.count,
    })),
  }
}

export function registryPath(root) {
  return resolve(root, REGISTRY_FILE)
}
