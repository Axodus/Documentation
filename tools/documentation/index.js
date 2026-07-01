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
  const baseline = options.baseline ?? await loadOptional(loadBaseline, options.baselinePath, root)
  const exceptions = options.exceptions ?? await loadOptional(loadExceptions, options.exceptionsPath, root)
  const baselineValidation = baseline
    ? validateBaseline(baseline, { documents })
    : emptyBaselineValidation()
  const exceptionValidation = exceptions
    ? validateExceptions(exceptions, {
        baseline,
        currentDate: options.currentDate ?? baseline?.created_at,
      })
    : emptyExceptionValidation()
  const validation = {
    ...canonicalValidation,
    diagnostics: [
      ...canonicalValidation.diagnostics,
      ...baselineValidation.diagnostics,
      ...exceptionValidation.diagnostics,
    ].sort(compareDiagnostics),
    statistics: {
      ...canonicalValidation.statistics,
      ...baselineValidation.statistics,
      ...exceptionValidation.statistics,
      info: canonicalValidation.statistics.info +
        baselineValidation.diagnostics.length +
        exceptionValidation.diagnostics.length,
    },
  }
  const report = createValidationReport(validation)
  return {
    valid: canonicalValidation.valid,
    diagnostics: validation.diagnostics,
    statistics: validation.statistics,
    report,
    baseline: baselineValidation,
    exceptions: exceptionValidation,
  }
}

export {
  createValidationReport,
  discoverDocuments,
  loadBaseline,
  loadExceptions,
  parseDocument,
  serializeValidationReport,
  validateBaseline,
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

function compareDiagnostics(left, right) {
  return (
    String(left.source_path ?? '').localeCompare(String(right.source_path ?? '')) ||
    left.rule_id.localeCompare(right.rule_id) ||
    String(left.field ?? '').localeCompare(String(right.field ?? '')) ||
    left.message.localeCompare(right.message)
  )
}
