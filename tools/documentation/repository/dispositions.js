import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { RULES } from '../rules/catalog.js'
import {
  createDiagnostic,
  hasErrors,
  sortDiagnostics,
} from '../shared/diagnostics.js'

export const DISPOSITION_REGISTRY_VERSION = '1.0.0'
export const DISPOSITION_SCHEMA_VERSION = '1.0.0'
export const DEFAULT_DISPOSITION_REGISTRY_PATH = 'documentation.exception-dispositions.json'

const PRIMARY_DISPOSITIONS = new Set([
  'MIGRATE',
  'RENEW_EXCEPTION',
  'REVOKE_EXCEPTION',
  'ARCHIVE_LEGACY',
  'MERGE_DUPLICATE',
  'SECURITY_REVIEW',
  'AUTHORITY_REVIEW',
  'DEFER_WITH_RISK',
])
const PRIORITIES = new Set(['P0', 'P1', 'P2', 'P3'])
const DISPOSITION_STATES = new Set(['GOVERNED'])
const ROUTING_STATES = new Set(['REQUIRED', 'PASSED', 'NOT_APPLICABLE', 'PENDING'])
const CONFIRMATION_STATES = new Set(['CONFIRMED', 'PENDING', 'NOT_APPLICABLE'])
const APPROVED_FLAGS = new Set([
  'security_sensitive',
  'authority_required',
  'public_exposure',
  'cross_core_dependency',
  'high_expiry_risk',
  'migration_candidate',
  'renewal_candidate',
  'archive_candidate',
  'merge_candidate',
  'revocation_candidate',
  'requires_corrective_action',
  'requires_semantic_target',
  'requires_owner_confirmation',
  'requires_approver_confirmation',
])

export async function loadDispositionRegistry(path = DEFAULT_DISPOSITION_REGISTRY_PATH, options = {}) {
  const root = resolve(options.root ?? process.cwd())
  return JSON.parse(await readFile(resolve(root, path), 'utf8'))
}

export function validateDispositionRegistry(registry, options = {}) {
  const diagnostics = []
  const entries = Array.isArray(registry?.entries) ? registry.entries : []
  let structurallyValid = validateEnvelope(registry, diagnostics)
  const baseline = new Map(options.baseline?.entries?.map((entry) => [entry.path, entry]) ?? [])
  const exceptions = new Map(options.exceptions?.exceptions?.map((entry) => [entry.exception_id, entry]) ?? [])
  const exceptionPaths = new Map(options.exceptions?.exceptions?.map((entry) => [entry.document_path, entry]) ?? [])
  const seenIds = new Set()
  const seenPaths = new Set()
  const counts = new Map()

  for (const entry of entries) {
    const base = {
      sourcePath: entry?.document_path,
      documentId: entry?.exception_id,
    }
    if (!validateEntryShape(entry, diagnostics, base)) {
      structurallyValid = false
      continue
    }
    counts.set(entry.primary_disposition, (counts.get(entry.primary_disposition) ?? 0) + 1)
    if (seenIds.has(entry.exception_id) || seenPaths.has(entry.document_path)) {
      structurallyValid = false
      diagnostics.push(error(RULES.DISPOSITION_REGISTRY_MISMATCH, {
        ...base,
        field: 'entries',
        message: 'Disposition registry contains duplicate exception IDs or document paths.',
      }))
    }
    seenIds.add(entry.exception_id)
    seenPaths.add(entry.document_path)

    const baselineEntry = baseline.get(entry.document_path)
    const exceptionEntry = exceptions.get(entry.exception_id)
    const exceptionPathEntry = exceptionPaths.get(entry.document_path)
    if (!baselineEntry || !exceptionEntry || exceptionPathEntry?.exception_id !== entry.exception_id) {
      structurallyValid = false
      diagnostics.push(error(RULES.DISPOSITION_REGISTRY_MISMATCH, {
        ...base,
        field: 'document_path',
        message: 'Disposition entry must match an existing baseline path and exception registry entry.',
      }))
    }
    if (baselineEntry && baselineEntry.sha256 !== entry.baseline_sha256) {
      structurallyValid = false
      diagnostics.push(error(RULES.DISPOSITION_REGISTRY_MISMATCH, {
        ...base,
        field: 'baseline_sha256',
        message: 'Disposition entry baseline hash does not match documentation.baseline.json.',
      }))
    }
    if (exceptionEntry && exceptionEntry.disposition !== entry.current_exception_disposition) {
      structurallyValid = false
      diagnostics.push(error(RULES.DISPOSITION_REGISTRY_MISMATCH, {
        ...base,
        field: 'current_exception_disposition',
        message: 'Disposition entry current exception disposition does not match documentation.exceptions.json.',
      }))
    }
    if (!isRenewalCapValid(entry)) {
      structurallyValid = false
      diagnostics.push(error(RULES.DISPOSITION_RENEWAL_CAP_INVALID, {
        ...base,
        field: 'renewal_expires_at',
        message: 'Disposition renewal date exceeds the approved priority cap.',
      }))
    }
  }

  if (baseline.size && entries.length !== baseline.size) {
    structurallyValid = false
    diagnostics.push(error(RULES.DISPOSITION_REGISTRY_MISMATCH, {
      field: 'entries',
      message: 'Disposition registry must contain exactly one entry for every active baseline exception.',
    }))
  }

  const sortedDiagnostics = sortDiagnostics(diagnostics)
  return {
    valid: structurallyValid && !hasErrors(sortedDiagnostics),
    diagnostics: sortedDiagnostics,
    statistics: {
      disposition_entries: entries.length,
      disposition_registry_valid: structurallyValid,
      dispositions_decided: entries.filter((entry) => PRIMARY_DISPOSITIONS.has(entry.primary_disposition)).length,
      governed_dispositions: entries.filter((entry) => entry.disposition_state === 'GOVERNED').length,
      undecided_dispositions: entries.filter((entry) => entry.disposition_state !== 'GOVERNED').length,
      temporary_extension_candidates: entries.filter((entry) => entry.temporary_extension_required === true).length,
      migrate_dispositions: counts.get('MIGRATE') ?? 0,
      security_review_dispositions: counts.get('SECURITY_REVIEW') ?? 0,
      authority_review_dispositions: counts.get('AUTHORITY_REVIEW') ?? 0,
      defer_with_risk_dispositions: counts.get('DEFER_WITH_RISK') ?? 0,
    },
  }
}

export function dryRunDispositionApplication(registry, options = {}) {
  const validation = validateDispositionRegistry(registry, options)
  const entries = Array.isArray(registry?.entries) ? registry.entries : []
  return {
    dry_run_version: '1.0.0',
    status: validation.valid ? 'PASS' : 'FAILED',
    registry_version: registry?.registry_version ?? null,
    source_inventory_id: registry?.source_inventory_id ?? null,
    statistics: {
      disposition_entries: entries.length,
      would_apply_dispositions: validation.valid ? entries.length : 0,
      governed_dispositions: entries.filter((entry) => entry.disposition_state === 'GOVERNED').length,
      undecided_dispositions: entries.filter((entry) => entry.disposition_state !== 'GOVERNED').length,
      temporary_extension_candidates: entries.filter((entry) => entry.temporary_extension_required === true).length,
      baseline_entries_removed: 0,
      exception_entries_removed: 0,
      exception_registry_entries_mutated: 0,
      migration_candidates: entries.filter((entry) => entry.primary_disposition === 'MIGRATE').length,
      authority_review_routes: entries.filter((entry) => entry.authority_routing === 'REQUIRED').length,
      security_review_routes: entries.filter((entry) => entry.security_routing === 'REQUIRED').length,
      deferred_routes: entries.filter((entry) => entry.primary_disposition === 'DEFER_WITH_RISK').length,
    },
    diff_preview: {
      baseline: { removed_paths: [], changed_paths: [] },
      exceptions: { removed_exception_ids: [], mutated_exception_ids: [] },
      companion_registry: {
        entries_represented: entries.map((entry) => entry.exception_id),
      },
    },
    diagnostics: validation.diagnostics,
  }
}

function validateEnvelope(registry, diagnostics) {
  if (!registry || typeof registry !== 'object' || Array.isArray(registry)) {
    diagnostics.push(error(RULES.DISPOSITION_REGISTRY_INVALID, {
      message: 'Disposition registry envelope must be an object.',
    }))
    return false
  }
  const required = [
    'registry_version',
    'schema_version',
    'created_at',
    'source_inventory_id',
    'baseline_version',
    'exception_registry_version',
    'entries',
  ]
  let valid = true
  for (const field of required) {
    if (registry[field] !== undefined) continue
    valid = false
    diagnostics.push(error(RULES.DISPOSITION_REGISTRY_INVALID, {
      field,
      message: 'Disposition registry is missing a required envelope field.',
    }))
  }
  if (registry.registry_version !== DISPOSITION_REGISTRY_VERSION) valid = false
  if (registry.schema_version !== DISPOSITION_SCHEMA_VERSION) valid = false
  if (registry.source_inventory_id !== 'DOC-REF-010') valid = false
  if (!Array.isArray(registry.entries)) valid = false
  if (!valid) {
    diagnostics.push(error(RULES.DISPOSITION_REGISTRY_INVALID, {
      message: 'Disposition registry envelope has invalid version, source inventory, or entries.',
    }))
  }
  return valid
}

function validateEntryShape(entry, diagnostics, base) {
  const stringFields = [
    'exception_id',
    'document_path',
    'baseline_sha256',
    'current_exception_disposition',
    'primary_disposition',
    'disposition_state',
    'decided_at',
    'risk_priority',
    'authority_routing',
    'security_routing',
    'owner_confirmation',
    'approver_confirmation',
    'target_action',
    'target_resolution_date',
    'rationale',
  ]
  let valid = true
  for (const field of stringFields) {
    if (typeof entry?.[field] === 'string' && entry[field].length > 0) continue
    valid = false
    diagnostics.push(error(RULES.DISPOSITION_REGISTRY_INVALID, {
      ...base,
      field,
      message: 'Disposition entry field is required and must be a non-empty string.',
    }))
  }
  if (!Array.isArray(entry?.secondary_flags) || !Array.isArray(entry?.evidence_refs)) valid = false
  if (!PRIMARY_DISPOSITIONS.has(entry?.primary_disposition)) valid = false
  if (!DISPOSITION_STATES.has(entry?.disposition_state)) valid = false
  if (!PRIORITIES.has(entry?.risk_priority)) valid = false
  if (!ROUTING_STATES.has(entry?.authority_routing) || !ROUTING_STATES.has(entry?.security_routing)) valid = false
  if (!CONFIRMATION_STATES.has(entry?.owner_confirmation) || !CONFIRMATION_STATES.has(entry?.approver_confirmation)) valid = false
  if (!/^[a-f0-9]{64}$/.test(entry?.baseline_sha256 ?? '')) valid = false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry?.target_resolution_date ?? '')) valid = false
  if (!isRfc3339(entry?.decided_at)) valid = false
  if (entry?.renewal_expires_at !== null && !isRfc3339(entry?.renewal_expires_at)) valid = false
  if (typeof entry?.maximum_extension_days !== 'number') valid = false
  if (typeof entry?.temporary_extension_required !== 'boolean') valid = false
  if (typeof entry?.migration_candidate !== 'boolean') valid = false
  if (!Array.isArray(entry?.unresolved_blockers)) valid = false
  if (entry?.secondary_flags?.some((flag) => !APPROVED_FLAGS.has(flag))) valid = false
  if (!valid) {
    diagnostics.push(error(RULES.DISPOSITION_REGISTRY_INVALID, {
      ...base,
      field: 'entries',
      message: 'Disposition entry shape, enum, date, or flag value is invalid.',
    }))
  }
  return valid
}

function isRenewalCapValid(entry) {
  if (!entry?.renewal_expires_at) return true
  const target = Date.parse(entry.renewal_expires_at)
  const base = Date.parse('2026-10-01T00:00:00Z')
  if (Number.isNaN(target) || Number.isNaN(base) || target < base) return false
  const days = Math.ceil((target - base) / 86400000)
  return ['P0', 'P1'].includes(entry.risk_priority) ? days <= 90 : days <= 180
}

function isRfc3339(value) {
  return typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value) &&
    !Number.isNaN(Date.parse(value))
}

function error(rule, input) {
  return createDiagnostic(rule, { ...input, severity: 'ERROR' })
}
