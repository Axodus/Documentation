/**
 * @typedef {'CANONICAL'|'LEGACY'|'TEMPLATE'} DocumentProfile
 * @typedef {'ERROR'|'WARNING'|'INFO'} DiagnosticSeverity
 *
 * @typedef {object} ValidationDiagnostic
 * @property {string} rule_id
 * @property {string} error_code
 * @property {DiagnosticSeverity} severity
 * @property {string|null} source_path
 * @property {string|null} document_id
 * @property {string|null} field
 * @property {string} message
 *
 * @typedef {object} ParsedDocument
 * @property {string} sourcePath
 * @property {string} source
 * @property {Record<string, unknown>} metadata
 * @property {string[]} metadataOrder
 * @property {string|null} title
 * @property {DocumentProfile} profile
 * @property {string} sha256
 *
 * @typedef {object} ValidationResult
 * @property {boolean} valid
 * @property {ValidationDiagnostic[]} diagnostics
 * @property {Record<string, number>} statistics
 */

export {}
