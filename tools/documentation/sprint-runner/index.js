#!/usr/bin/env node
import { pathToFileURL } from 'node:url'
import { loadSprintManifest } from './manifest.js'
import { runSprint, SprintRunnerError } from './runner.js'

export async function main(argv = process.argv.slice(2)) {
  try {
    const manifestPath = parseManifestPath(argv)
    const manifest = await loadSprintManifest(manifestPath)
    const result = await runSprint(manifest)
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
    return 0
  } catch (error) {
    const code = error instanceof SprintRunnerError ? error.code : 'INTERNAL_ERROR'
    process.stderr.write(`${code}: ${error.message}\n`)
    return 1
  }
}

export function parseManifestPath(argv) {
  const tokens = argv[0] === '--' ? argv.slice(1) : argv
  if (tokens.length !== 2 || tokens[0] !== '--manifest' || !tokens[1]) {
    throw new TypeError('Usage: sprint-runner --manifest <path>')
  }
  return tokens[1]
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = await main()
}
