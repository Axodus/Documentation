import { resolve } from 'node:path'
import { parseDocument } from './parser/front-matter.js'
import {
  discoverDocuments,
  loadDocument as loadDocumentFromRepository,
} from './repository/discovery.js'
import { validateDocumentSet } from './repository/repository-validator.js'
import {
  loadBaseline,
  loadExceptions,
  validateBaseline,
  validateExceptions,
} from './repository/baseline.js'
import {
  loadDispositionRegistry,
  validateDispositionRegistry,
} from './repository/dispositions.js'
import { validateParsedDocument } from './validators/semantic-validator.js'
import {
  createValidationReport,
  serializeValidationReport,
} from './reports/validation-report.js'

export function validateDocument(source, context = {}) {
  const parsed = parseDocument(source, context)
  const { document: _document, ...result } = validateParsedDocument(parsed)
  return result
}

export async function loadDocument(path, options = {}) {
  return loadDocumentFromRepository(path, options)
}

export async function validateRepository(options = {}) {
  const root = resolve(options.root ?? process.cwd())
  const documents = options.documents ?? await discoverDocuments(root)
  const canonicalValidation = validateDocumentSet(documents)
  const layers = normalizeLayers(options.layers)
  const requiresDispositions = !layers || layers.has('DISPOSITIONS')
  const requiresBaseline = !layers || layers.has('BASELINE') || layers.has('EXCEPTIONS') || requiresDispositions
  const requiresExceptions = !layers || layers.has('EXCEPTIONS') || requiresDispositions
  const baseline = requiresBaseline
    ? options.baseline ?? await loadOptional(loadBaseline, options.baselinePath, root)
    : null
  const exceptions = requiresExceptions
    ? options.exceptions ?? await loadOptional(loadExceptions, options.exceptionsPath, root)
    : null
  const dispositions = requiresDispositions
    ? options.dispositions ?? await loadOptional(loadDispositionRegistry, options.dispositionsPath, root)
    : null
  const baselineValidation = baseline && (!layers || layers.has('BASELINE'))
    ? validateBaseline(baseline, { documents })
    : emptyBaselineValidation()
  const exceptionValidation = exceptions && (!layers || layers.has('EXCEPTIONS'))
    ? validateExceptions(exceptions, {
        baseline,
        currentDate: options.currentDate ?? baseline?.created_at,
      })
    : emptyExceptionValidation()
  const dispositionValidation = dispositions && (!layers || layers.has('DISPOSITIONS'))
    ? validateDispositionRegistry(dispositions, {
        baseline,
        exceptions,
        currentDate: options.currentDate ?? baseline?.created_at,
      })
    : emptyDispositionValidation()
  const completeValidation = {
    ...canonicalValidation,
    diagnostics: [
      ...canonicalValidation.diagnostics,
      ...baselineValidation.diagnostics,
      ...exceptionValidation.diagnostics,
      ...dispositionValidation.diagnostics,
    ].sort(compareDiagnostics),
    statistics: {
      ...canonicalValidation.statistics,
      ...baselineValidation.statistics,
      ...exceptionValidation.statistics,
      ...dispositionValidation.statistics,
      info: canonicalValidation.statistics.info +
        baselineValidation.diagnostics.length +
        exceptionValidation.diagnostics.length +
        dispositionValidation.diagnostics.length,
    },
  }
  const validation = selectValidationLayers(completeValidation, layers)
  const report = createValidationReport(validation)
  return {
    valid: validation.valid,
    diagnostics: validation.diagnostics,
    statistics: validation.statistics,
    report,
    baseline: baselineValidation,
    exceptions: exceptionValidation,
  }
}

const LAYER_RULE_RANGES = Object.freeze({
  SCHEMA: [1, 4, 24],
  REPOSITORY: [1, 26],
  RELATIONSHIPS: [14, 21, 26],
  BASELINE: [27, 30, 34, 35],
  EXCEPTIONS: [31, 33],
  DISPOSITIONS: [36, 38],
})

function selectValidationLayers(validation, requestedLayers) {
  if (!requestedLayers) return validation
  const ruleNumbers = new Set()
  for (const layer of requestedLayers) {
    const ranges = LAYER_RULE_RANGES[layer]
    if (!ranges) throw new TypeError(`Unknown validation layer '${layer}'.`)
    for (let index = 0; index < ranges.length; index += 2) {
      const start = ranges[index]
      const end = ranges[index + 1] ?? start
      for (let number = start; number <= end; number += 1) ruleNumbers.add(number)
    }
  }
  const diagnostics = validation.diagnostics.filter((diagnostic) => {
    const number = Number(diagnostic.rule_id?.slice(-3))
    return ruleNumbers.has(number)
  })
  const count = (severity) => diagnostics.filter((item) => item.severity === severity).length
  return {
    ...validation,
    valid: count('ERROR') === 0,
    diagnostics,
    statistics: {
      ...validation.statistics,
      errors: count('ERROR'),
      warnings: count('WARNING'),
      info: count('INFO'),
    },
  }
}

function normalizeLayers(requestedLayers) {
  if (!requestedLayers) return null
  return new Set(Array.isArray(requestedLayers) ? requestedLayers : [requestedLayers])
}

export {
  createValidationReport,
  discoverDocuments,
  loadBaseline,
  loadDispositionRegistry,
  loadExceptions,
  parseDocument,
  serializeValidationReport,
  validateBaseline,
  validateDispositionRegistry,
  validateExceptions,
}

async function loadOptional(loader, path, root) {
  try {
    return await loader(path, { root })
  } catch (error) {
    if (error?.code === 'ENOENT') return null
    throw error
  }
}

function emptyBaselineValidation() {
  return {
    valid: true,
    diagnostics: [],
    statistics: {
      baseline_entries: 0,
      known_legacy: 0,
      changed_legacy: 0,
      unbaselined_legacy: 0,
      removed_legacy: 0,
    },
    states: { known: [], changed: [], unbaselined: [], removed: [] },
  }
}

function emptyExceptionValidation() {
  return {
    valid: true,
    diagnostics: [],
    statistics: {
      exception_entries: 0,
      active_exceptions: 0,
      expired_exceptions: 0,
      revoked_exceptions: 0,
      invalid_exceptions: 0,
    },
  }
}

function emptyDispositionValidation() {
  return {
    valid: true,
    diagnostics: [],
    statistics: {
      disposition_entries: 0,
      disposition_registry_valid: true,
      dispositions_decided: 0,
      migrate_dispositions: 0,
      security_review_dispositions: 0,
      authority_review_dispositions: 0,
      defer_with_risk_dispositions: 0,
    },
  }
}

function compareDiagnostics(left, right) {
  return (
    String(left.source_path ?? '').localeCompare(String(right.source_path ?? '')) ||
    left.rule_id.localeCompare(right.rule_id) ||
    String(left.field ?? '').localeCompare(String(right.field ?? '')) ||
    left.message.localeCompare(right.message)
  )
}
