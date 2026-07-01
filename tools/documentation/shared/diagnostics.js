import { SEVERITY_ORDER } from './constants.js'

export function createDiagnostic(rule, input = {}) {
  const [ruleId, errorCode, defaultSeverity] = rule
  return {
    rule_id: ruleId,
    error_code: errorCode,
    severity: input.severity ?? defaultSeverity,
    source_path: input.sourcePath ?? null,
    document_id: input.documentId ?? null,
    field: input.field ?? null,
    message: input.message,
  }
}

export function sortDiagnostics(diagnostics) {
  return [...diagnostics].sort((left, right) => {
    return (
      String(left.source_path ?? '').localeCompare(String(right.source_path ?? '')) ||
      SEVERITY_ORDER[left.severity] - SEVERITY_ORDER[right.severity] ||
      left.rule_id.localeCompare(right.rule_id) ||
      String(left.field ?? '').localeCompare(String(right.field ?? '')) ||
      left.message.localeCompare(right.message)
    )
  })
}

export function hasErrors(diagnostics) {
  return diagnostics.some((diagnostic) => diagnostic.severity === 'ERROR')
}
