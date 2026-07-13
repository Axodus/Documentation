import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const REASONING_ALIASES = new Map([
  ['extra high', 'xhigh'],
  ['extra_high', 'xhigh'],
  ['max', 'xhigh'],
])

const REASONING_LEVELS = new Set(['minimal', 'low', 'medium', 'high', 'xhigh'])

export async function loadSprintManifest(path, root = process.cwd()) {
  const absolutePath = resolve(root, path)
  const manifest = JSON.parse(await readFile(absolutePath, 'utf8'))
  return validateSprintManifest(manifest)
}

export function normalizeReasoningEffort(value) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new TypeError('reasoning_effort must be a non-empty string.')
  }
  const normalized = value.trim().toLowerCase()
  const resolved = REASONING_ALIASES.get(normalized) ?? normalized
  if (!REASONING_LEVELS.has(resolved)) {
    throw new TypeError(`Unsupported reasoning_effort '${value}'.`)
  }
  return resolved
}

export function validateSprintManifest(manifest) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new TypeError('Sprint manifest must be a JSON object.')
  }
  for (const key of ['sprint_id', 'required_ancestor', 'requests']) {
    if (!(key in manifest)) throw new TypeError(`Sprint manifest is missing '${key}'.`)
  }
  if (!Array.isArray(manifest.requests) || manifest.requests.length === 0) {
    throw new TypeError('Sprint manifest requests must be a non-empty array.')
  }

  const ids = new Set()
  const normalizedRequests = manifest.requests.map((request, index) => {
    for (const key of ['id', 'prompt_path', 'model', 'reasoning_effort', 'allowed_paths', 'commit_message']) {
      if (!(key in request)) throw new TypeError(`Request ${index + 1} is missing '${key}'.`)
    }
    if (ids.has(request.id)) throw new TypeError(`Duplicate request id '${request.id}'.`)
    ids.add(request.id)
    if (!Array.isArray(request.allowed_paths) || request.allowed_paths.length === 0) {
      throw new TypeError(`Request '${request.id}' must declare allowed_paths.`)
    }
    return {
      ...request,
      reasoning_effort: normalizeReasoningEffort(request.reasoning_effort),
      expected_document_ids: request.expected_document_ids ?? [],
      expected_content: request.expected_content ?? [],
      validation_commands: request.validation_commands ?? manifest.request_validation_commands ?? [],
    }
  })

  return {
    ...manifest,
    requests: normalizedRequests,
    final_validation_commands: manifest.final_validation_commands ?? [],
    boundary_scan_paths: manifest.boundary_scan_paths ?? [],
    boundary_forbidden_terms: manifest.boundary_forbidden_terms ?? [],
  }
}
