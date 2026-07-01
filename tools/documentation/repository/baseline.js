import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  PROFILES,
  VALIDATION_VERSION,
} from '../shared/constants.js'
import { RULES } from '../rules/catalog.js'
import {
  createDiagnostic,
  sortDiagnostics,
} from '../shared/diagnostics.js'
import {
  isRfc3339Timestamp,
  stableJson,
  stableTimestamp,
} from '../shared/canonical.js'
import { validateExceptionSchema } from '../schema/exception-schema.js'

export const BASELINE_VERSION = '1.0.0'
export const EXCEPTION_REGISTRY_VERSION = '1.0.0'
export const INITIAL_EXCEPTION_EXPIRY = '2026-10-01T00:00:00Z'

export async function loadBaseline(path = 'documentation.baseline.json', options = {}) {
  const root = resolve(options.root ?? process.cwd())
  return JSON.parse(await readFile(resolve(root, path), 'utf8'))
}

export async function loadExceptions(path = 'documentation.exceptions.json', options = {}) {
  const root = resolve(options.root ?? process.cwd())
  return JSON.parse(await readFile(resolve(root, path), 'utf8'))
}

export function buildBaseline(documents) {
  const createdAt = stableTimestamp(documents)
  const entries = documents
    .filter((document) => document.profile === PROFILES.LEGACY)
    .map((document) => ({
      path: document.sourcePath,
      sha256: document.sha256,
      document_classification: 'LEGACY',
      detected_schema_version: document.metadata.schema_version ?? null,
      missing_rules: ['DOC-RULE-001'],
      baseline_version: BASELINE_VERSION,
      created_at: createdAt,
      source_inventory_version: `DOCUMENTATION-VALIDATION-${VALIDATION_VERSION}`,
    }))
    .sort((left, right) => left.path.localeCompare(right.path))

  return {
    baseline_version: BASELINE_VERSION,
    created_at: createdAt,
    source_inventory_version: `DOCUMENTATION-VALIDATION-${VALIDATION_VERSION}`,
    entries,
  }
}

export function buildExceptionRegistry(baseline) {
  const exceptions = baseline.entries.map((entry, index) => ({
    exception_id: `DOC-EXC-${String(index + 1).padStart(3, '0')}`,
    document_path: entry.path,
    document_id: null,
    owner: 'Axodus Documentation Core',
    approver: 'Documentation Coordinator',
    justification: 'Known legacy documentation accepted temporarily under the migrate-on-change governance policy.',
    scope: 'DOCUMENTATION.LEGACY',
    affected_rules: [...entry.missing_rules],
    severity: 'INFO',
    disposition: 'MIGRATE_ON_CHANGE',
    created_at: baseline.created_at,
    expires_at: INITIAL_EXCEPTION_EXPIRY,
    status: 'ACTIVE',
  }))
  return {
    registry_version: EXCEPTION_REGISTRY_VERSION,
    schema_version: '1.0.0',
    created_at: baseline.created_at,
    exceptions,
  }
}

export function validateBaseline(baseline, options = {}) {
  const diagnostics = []
  const entries = Array.isArray(baseline?.entries) ? baseline.entries : []
  let structuralValid = isBaselineEnvelopeValid(baseline)
  if (!structuralValid) {
    diagnostics.push(info(RULES.BASELINE_INVALID, {
      message: 'Baseline envelope is invalid or incomplete.',
    }))
  }

  const byPath = new Map()
  const validRuleIds = new Set(Object.values(RULES).map(([ruleId]) => ruleId))
  for (const entry of entries) {
    if (!isBaselineEntryValid(entry, baseline, validRuleIds)) {
      structuralValid = false
      diagnostics.push(info(RULES.BASELINE_INVALID, {
        sourcePath: entry?.path,
        field: 'entries',
        message: 'Baseline entry is invalid or inconsistent with its envelope.',
      }))
      continue
    }
    const values = byPath.get(entry.path) ?? []
    values.push(entry)
    byPath.set(entry.path, values)
  }

  const sortedPaths = entries.map((entry) => entry?.path)
  if (sortedPaths.some((path, index) => index > 0 && String(sortedPaths[index - 1]).localeCompare(String(path)) > 0)) {
    structuralValid = false
    diagnostics.push(info(RULES.BASELINE_INVALID, {
      field: 'entries',
      message: 'Baseline entries must be sorted by normalized POSIX path.',
    }))
  }

  for (const [path, values] of byPath) {
    if (values.length < 2) continue
    structuralValid = false
    diagnostics.push(info(RULES.DUPLICATE_BASELINE_ENTRY, {
      sourcePath: path,
      field: 'path',
      message: 'Baseline contains duplicate entries for one path.',
    }))
  }

  const comparison = compareBaseline(entries, options.documents ?? [])
  diagnostics.push(...comparison.diagnostics)
  return {
    valid: structuralValid,
    diagnostics: sortDiagnostics(diagnostics),
    statistics: {
      baseline_entries: entries.length,
      known_legacy: comparison.known.length,
      changed_legacy: comparison.changed.length,
      unbaselined_legacy: comparison.unbaselined.length,
      removed_legacy: comparison.removed.length,
    },
    states: comparison,
  }
}

export function validateExceptions(registry, options = {}) {
  const diagnostics = []
  const schemaResult = validateExceptionSchema(registry)
  let structuralValid = schemaResult.valid
  for (const error of schemaResult.errors) {
    diagnostics.push(info(RULES.EXCEPTION_INVALID, {
      field: error.instancePath.replace(/^\//, '').replaceAll('/', '.') || error.params?.missingProperty || null,
      message: `Exception registry schema violation: ${error.message}.`,
    }))
  }

  const exceptions = Array.isArray(registry?.exceptions) ? registry.exceptions : []
  const baselinePaths = new Set(options.baseline?.entries?.map((entry) => entry.path) ?? [])
  const validRuleIds = new Set(Object.values(RULES).map(([ruleId]) => ruleId))
  const seenIds = new Set()
  const seenPaths = new Set()
  const currentDate = options.currentDate ?? registry?.created_at ?? '1970-01-01T00:00:00Z'
  let expired = 0
  let revoked = 0
  let invalid = schemaResult.errors.length

  for (const exception of exceptions) {
    const base = {
      sourcePath: exception?.document_path,
      documentId: exception?.document_id,
    }
    let entryInvalid = false
    if (seenIds.has(exception.exception_id) || seenPaths.has(exception.document_path)) entryInvalid = true
    seenIds.add(exception.exception_id)
    seenPaths.add(exception.document_path)
    if (baselinePaths.size && !baselinePaths.has(exception.document_path)) entryInvalid = true
    if (!exception.affected_rules?.every((ruleId) => validRuleIds.has(ruleId))) entryInvalid = true
    if (exception.expires_at && exception.expires_at < exception.created_at) entryInvalid = true

    if (entryInvalid) {
      structuralValid = false
      invalid += 1
      diagnostics.push(info(RULES.EXCEPTION_INVALID, {
        ...base,
        field: 'exceptions',
        message: 'Exception has duplicate identity/path, unknown rules, invalid dates, or no baseline entry.',
      }))
    }
    if (exception.status === 'REVOKED') {
      revoked += 1
      diagnostics.push(info(RULES.EXCEPTION_REVOKED, {
        ...base,
        field: 'status',
        message: 'Exception is revoked and provides no active tolerance.',
      }))
    } else if (exception.status === 'EXPIRED' || (exception.status === 'ACTIVE' && exception.expires_at && exception.expires_at <= currentDate)) {
      expired += 1
      diagnostics.push(info(RULES.EXCEPTION_EXPIRED, {
        ...base,
        field: 'expires_at',
        message: 'Exception is expired at the validation reference time.',
      }))
    }
  }

  return {
    valid: structuralValid,
    diagnostics: sortDiagnostics(diagnostics),
    statistics: {
      exception_entries: exceptions.length,
      active_exceptions: exceptions.length - expired - revoked,
      expired_exceptions: expired,
      revoked_exceptions: revoked,
      invalid_exceptions: invalid,
    },
  }
}

export function createBaselineReport({ baseline, exceptions, baselineValidation, exceptionValidation, documents }) {
  const canonical = documents.filter((document) => document.profile === PROFILES.CANONICAL).length
  const legacy = documents.filter((document) => document.profile === PROFILES.LEGACY).length
  return {
    baseline_version: baseline.baseline_version,
    generation_timestamp: baseline.created_at,
    total_documents: documents.length,
    canonical_documents: canonical,
    legacy_documents: legacy,
    baseline_entries: baseline.entries.length,
    exception_entries: exceptions.exceptions.length,
    known_legacy: baselineValidation.statistics.known_legacy,
    changed_legacy: baselineValidation.statistics.changed_legacy,
    new_legacy: baselineValidation.statistics.unbaselined_legacy,
    removed_legacy: baselineValidation.statistics.removed_legacy,
    expired_exceptions: exceptionValidation.statistics.expired_exceptions,
    repository_summary: {
      baseline_valid: baselineValidation.valid,
      exceptions_valid: exceptionValidation.valid,
      active_exceptions: exceptionValidation.statistics.active_exceptions,
      revoked_exceptions: exceptionValidation.statistics.revoked_exceptions,
      invalid_exceptions: exceptionValidation.statistics.invalid_exceptions,
    },
  }
}

export function serializeBaselineArtifact(value) {
  return stableJson(value)
}

function compareBaseline(entries, documents) {
  const baseline = new Map(entries.map((entry) => [entry.path, entry]))
  const legacy = new Map(documents
    .filter((document) => document.profile === PROFILES.LEGACY)
    .map((document) => [document.sourcePath, document]))
  const known = []
  const changed = []
  const unbaselined = []
  const removed = []
  const diagnostics = []

  for (const [path, document] of legacy) {
    const entry = baseline.get(path)
    if (!entry) {
      unbaselined.push(path)
      diagnostics.push(info(RULES.UNBASELINED_LEGACY, {
        sourcePath: path,
        message: 'Legacy document is not present in the accepted baseline.',
      }))
    } else if (entry.sha256 !== document.sha256) {
      changed.push(path)
      diagnostics.push(info(RULES.LEGACY_CHANGED, {
        sourcePath: path,
        message: 'Legacy document hash differs from the accepted baseline.',
      }))
    } else {
      known.push(path)
      diagnostics.push(info(RULES.KNOWN_LEGACY, {
        sourcePath: path,
        message: 'Legacy document path and hash match the accepted baseline.',
      }))
    }
  }
  for (const path of baseline.keys()) {
    if (legacy.has(path)) continue
    removed.push(path)
    diagnostics.push(info(RULES.BASELINE_DOCUMENT_REMOVED, {
      sourcePath: path,
      message: 'Baseline document is absent from the current legacy corpus.',
    }))
  }

  return { known, changed, unbaselined, removed, diagnostics }
}

function isBaselineEnvelopeValid(value) {
  return Boolean(
    value &&
    value.baseline_version === BASELINE_VERSION &&
    isRfc3339Timestamp(value.created_at) &&
    /^DOCUMENTATION-VALIDATION-\d+\.\d+\.\d+$/.test(value.source_inventory_version) &&
    Array.isArray(value.entries),
  )
}

function isBaselineEntryValid(entry, baseline, validRuleIds) {
  return Boolean(
    entry &&
    typeof entry.path === 'string' &&
    !entry.path.includes('\\') &&
    !entry.path.split('/').includes('..') &&
    /^[a-f0-9]{64}$/.test(entry.sha256) &&
    entry.document_classification === 'LEGACY' &&
    (entry.detected_schema_version === null || typeof entry.detected_schema_version === 'string') &&
    Array.isArray(entry.missing_rules) &&
    entry.missing_rules.length > 0 &&
    new Set(entry.missing_rules).size === entry.missing_rules.length &&
    entry.missing_rules.every((rule) => validRuleIds.has(rule)) &&
    entry.baseline_version === baseline.baseline_version &&
    entry.created_at === baseline.created_at &&
    entry.source_inventory_version === baseline.source_inventory_version
  )
}

function info(rule, input) {
  return createDiagnostic(rule, { ...input, severity: 'INFO' })
}
