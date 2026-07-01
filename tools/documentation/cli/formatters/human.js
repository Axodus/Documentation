export function formatHuman(payload, options = {}) {
  if (payload.kind === 'GENERATION') return formatGeneration(payload)
  const { statistics } = payload
  const lines = [
    `Documentation CLI ${payload.cli_version}`,
    `Command: ${payload.command}`,
    `Status: ${payload.status}`,
    `Documents: ${statistics.total_documents ?? 0} total, ${statistics.validated_documents ?? 0} canonical, ${statistics.legacy_documents ?? 0} legacy, ${statistics.template_documents ?? 0} templates`,
    `Diagnostics: ${statistics.errors ?? 0} errors, ${statistics.warnings ?? 0} warnings, ${statistics.info ?? 0} info`,
  ]
  if (!options.summary) {
    const diagnostics = options.verbose
      ? payload.diagnostics
      : payload.diagnostics.filter((item) => item.severity !== 'INFO')
    if (diagnostics.length) {
      lines.push('', 'Diagnostics:')
      for (const item of diagnostics) {
        const location = item.source_path ? ` ${item.source_path}` : ''
        const field = item.field ? ` [${item.field}]` : ''
        lines.push(`${item.severity} ${item.error_code}/${item.rule_id}${location}${field}: ${item.message}`)
      }
    }
  }
  lines.push(
    `Execution time: ${payload.execution_time_ms} ms`,
    `Exit status: ${payload.exit_code}`,
  )
  return `${lines.join('\n')}\n`
}

function formatGeneration(payload) {
  const lines = [
    `Documentation Generator ${payload.generator_version}`,
    `Mode: ${payload.mode}`,
    `Status: ${payload.status}`,
    `Artifacts: ${payload.statistics.artifact_count}`,
    `Source documents: ${payload.statistics.source_documents}`,
    `Canonical: ${payload.statistics.canonical_documents}, legacy: ${payload.statistics.legacy_documents}, templates: ${payload.statistics.template_documents}`,
  ]
  if (payload.mode === 'CHECK') lines.push(`Drift: ${payload.drift_count}`)
  if (payload.mode === 'WRITE') lines.push(`Written: ${payload.written.length}`)
  lines.push(`Execution time: ${payload.execution_time_ms} ms`, `Exit status: ${payload.exit_code}`)
  return `${lines.join('\n')}\n`
}
