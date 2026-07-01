export function formatHuman(payload, options = {}) {
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
