export function formatHuman(payload, options = {}) {
  if (payload.kind === 'GENERATION') return formatGeneration(payload)
  if (payload.kind === 'EVIDENCE') return formatEvidence(payload)
  if (payload.kind === 'DISPOSITIONS') return formatDispositions(payload)
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

function formatDispositions(payload) {
  const lines = [
    'Documentation Dispositions Dry Run',
    `Status: ${payload.status}`,
    `Disposition entries: ${payload.statistics.disposition_entries}`,
    `Would apply dispositions: ${payload.statistics.would_apply_dispositions}`,
    `Baseline entries removed: ${payload.statistics.baseline_entries_removed}`,
    `Exception entries removed: ${payload.statistics.exception_entries_removed}`,
    `Exception registry entries mutated: ${payload.statistics.exception_registry_entries_mutated}`,
    `Migration candidates: ${payload.statistics.migration_candidates}`,
    `Authority routes: ${payload.statistics.authority_review_routes}`,
    `Security routes: ${payload.statistics.security_review_routes}`,
    `Deferred routes: ${payload.statistics.deferred_routes}`,
    `Execution time: ${payload.execution_time_ms} ms`,
    `Exit status: ${payload.exit_code}`,
  ]
  return `${lines.join('\n')}\n`
}

function formatEvidence(payload) {
  const lines = [
    `Documentation Evidence: ${payload.command}`,
    `Status: ${payload.status}`,
  ]
  if (payload.snapshot_id) lines.push(`Snapshot: ${payload.snapshot_id}`)
  if (payload.operation === 'CREATE') {
    lines.push(
      `Files: ${payload.statistics.files}`,
      `Directories: ${payload.statistics.directories}`,
      `Redactions: ${payload.statistics.redactions} across ${payload.statistics.affected_files} files`,
    )
  } else if (payload.operation === 'LIST') {
    lines.push(`Snapshots: ${payload.statistics.snapshots}`)
  } else {
    lines.push(
      `Added: ${payload.statistics.added_files}`,
      `Removed: ${payload.statistics.removed_files}`,
      `Modified: ${payload.statistics.modified_files}`,
      `Metadata changes: ${payload.statistics.metadata_changes}`,
    )
  }
  lines.push(`Execution time: ${payload.execution_time_ms} ms`, `Exit status: ${payload.exit_code}`)
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
