import {
  SCHEMA_VERSION,
  VALIDATION_VERSION,
} from '../shared/constants.js'
import {
  isRfc3339Timestamp,
  stableJson,
  stableTimestamp,
} from '../shared/canonical.js'

export function createValidationReport(validation) {
  const statistics = validation.statistics
  const generatedAt = stableTimestamp(validation.documents)
  if (!isRfc3339Timestamp(generatedAt)) throw new TypeError('Generated validation timestamp is not RFC3339.')
  return {
    validation_version: VALIDATION_VERSION,
    schema_version: SCHEMA_VERSION,
    generated_at: generatedAt,
    repository_statistics: statistics,
    validated_documents: statistics.validated_documents,
    skipped_documents: statistics.skipped_documents,
    legacy_documents: statistics.legacy_documents,
    warnings: statistics.warnings,
    errors: statistics.errors,
    summary: validation.valid
      ? 'Validation completed without canonical document errors.'
      : 'Validation found canonical document errors.',
    diagnostics: validation.diagnostics,
  }
}

export function serializeValidationReport(report) {
  return stableJson(report)
}
