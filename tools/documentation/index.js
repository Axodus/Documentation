import { resolve } from 'node:path'
import { parseDocument } from './parser/front-matter.js'
import {
  discoverDocuments,
  loadDocument as loadDocumentFromRepository,
} from './repository/discovery.js'
import { validateDocumentSet } from './repository/repository-validator.js'
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
  const validation = validateDocumentSet(documents)
  const report = createValidationReport(validation)
  return {
    valid: validation.valid,
    diagnostics: validation.diagnostics,
    statistics: validation.statistics,
    report,
  }
}

export {
  createValidationReport,
  discoverDocuments,
  parseDocument,
  serializeValidationReport,
}
