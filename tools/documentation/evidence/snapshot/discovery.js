import {
  readFile,
  readlink,
  readdir,
} from 'node:fs/promises'
import { relative, resolve } from 'node:path'
import { redactBuffer } from '../metadata/redaction.js'
import { sha256 } from '../../generator/serialization/canonical.js'

export async function captureSource(sourcePath) {
  const root = resolve(sourcePath)
  const files = []
  const directories = []
  await walk(root, root, files, directories)
  files.sort((left, right) => left.path.localeCompare(right.path))
  directories.sort()
  const sourceHash = treeHash(files, 'source_sha256')
  const snapshotHash = treeHash(files, 'snapshot_sha256')
  const categories = countCategories(files)
  const affectedFiles = files.filter((file) => file.redactions > 0).map((file) => file.path)
  return {
    files,
    directories,
    sourceHash,
    snapshotHash,
    redactedEntries: {
      count: files.reduce((total, file) => total + file.redactions, 0),
      affected_files: affectedFiles,
      categories,
    },
    snapshotSize: files.reduce((total, file) => total + Buffer.byteLength(file.content, 'utf8'), 0),
  }
}

async function walk(root, directory, files, directories) {
  const entries = await readdir(directory, { withFileTypes: true })
  entries.sort((left, right) => left.name.localeCompare(right.name))
  for (const entry of entries) {
    const absolutePath = resolve(directory, entry.name)
    const path = relative(root, absolutePath).replaceAll('\\', '/')
    if (entry.isDirectory()) {
      directories.push(path)
      await walk(root, absolutePath, files, directories)
      continue
    }
    if (entry.isSymbolicLink()) {
      const target = Buffer.from(await readlink(absolutePath), 'utf8')
      files.push(fileRecord(path, target, {
        content: '<REDACTED>\n',
        count: 1,
        categories: ['SYMBOLIC_LINK'],
      }))
      continue
    }
    if (!entry.isFile()) continue
    const source = await readFile(absolutePath)
    files.push(fileRecord(path, source, redactBuffer(source)))
  }
}

function fileRecord(path, source, redacted) {
  return {
    path,
    evidence_path: `payload/${path}.evidence`,
    source_sha256: sha256(source),
    snapshot_sha256: sha256(redacted.content),
    source_size: source.length,
    snapshot_size: Buffer.byteLength(redacted.content, 'utf8'),
    redactions: redacted.count,
    redaction_categories: redacted.categories,
    content: redacted.content,
  }
}

function treeHash(files, field) {
  return sha256(files.map((file) => `${file.path}\0${file[field]}\n`).join(''))
}

function countCategories(files) {
  const result = {}
  for (const file of files) {
    for (const category of file.redaction_categories) {
      result[category] = (result[category] ?? 0) + 1
    }
  }
  return Object.fromEntries(Object.entries(result).sort(([left], [right]) => left.localeCompare(right)))
}
