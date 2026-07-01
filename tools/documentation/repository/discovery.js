import { readdir, readFile } from 'node:fs/promises'
import { relative, resolve } from 'node:path'
import {
  EXCLUDED_DIRECTORIES,
  GENERATED_PATHS,
} from '../shared/constants.js'
import { normalizeRelativePath } from '../shared/canonical.js'
import { parseDocument } from '../parser/front-matter.js'

export async function discoverDocuments(root) {
  const absoluteRoot = resolve(root)
  const paths = []
  await walk(absoluteRoot, absoluteRoot, paths)
  paths.sort((left, right) => left.localeCompare(right))
  return Promise.all(paths.map((path) => loadDocument(path, { root: absoluteRoot })))
}

export async function loadDocument(path, options = {}) {
  const absolutePath = resolve(path)
  const root = resolve(options.root ?? process.cwd())
  const source = await readFile(absolutePath, 'utf8')
  return parseDocument(source, {
    sourcePath: normalizeRelativePath(relative(root, absolutePath)),
  })
}

async function walk(root, directory, paths) {
  const entries = await readdir(directory, { withFileTypes: true })
  entries.sort((left, right) => left.name.localeCompare(right.name))
  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDED_DIRECTORIES.has(entry.name)) continue
    const path = resolve(directory, entry.name)
    const relativePath = normalizeRelativePath(relative(root, path))
    if (entry.isDirectory()) {
      if (relativePath === 'docs/.vitepress/dist' || relativePath === 'docs/.vitepress/cache') continue
      await walk(root, path, paths)
    } else if (entry.isFile() && entry.name.endsWith('.md') && !GENERATED_PATHS.has(relativePath)) {
      paths.push(path)
    }
  }
}
