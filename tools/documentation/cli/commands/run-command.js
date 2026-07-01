import { resolve } from 'node:path'
import {
  loadBaseline,
  loadDocument,
  loadExceptions,
  validateRepository,
} from '../../index.js'
import { CLI_VERSION, COMMANDS, EXIT_CODES } from '../shared/constants.js'

export async function runCommand(commandName, options = {}) {
  const command = COMMANDS[commandName]
  if (!command) {
    const error = new Error(`Unknown command '${commandName ?? ''}'.`)
    error.exitCode = EXIT_CODES.INVALID_ARGUMENTS
    throw error
  }
  const root = process.cwd()
  await verifyConfiguredInputs(commandName, options, root)
  const result = await validateRepository({
    root,
    layers: command.layers,
    baselinePath: options.baseline,
    exceptionsPath: options.exceptions,
    currentDate: options.referenceDate,
  })
  const diagnostics = await filterDiagnostics(result.diagnostics, options, root)
  const statistics = {
    ...result.statistics,
    errors: count(diagnostics, 'ERROR'),
    warnings: count(diagnostics, 'WARNING'),
    info: count(diagnostics, 'INFO'),
  }
  const failed = statistics.errors > 0 || (options.failOnWarning && statistics.warnings > 0)
  return {
    cli_version: CLI_VERSION,
    validation_version: result.report.validation_version,
    schema_version: result.report.schema_version,
    command: commandName,
    status: failed ? 'FAILED' : 'SUCCESS',
    exit_code: failed ? EXIT_CODES.VALIDATION_FAILED : EXIT_CODES.SUCCESS,
    statistics,
    diagnostics,
  }
}

async function verifyConfiguredInputs(commandName, options, root) {
  try {
    if (options.baseline || commandName === 'baseline' || commandName === 'check') {
      await loadBaseline(options.baseline, { root })
    }
    if (options.exceptions || commandName === 'exceptions' || commandName === 'check') {
      await loadExceptions(options.exceptions, { root })
    }
  } catch (error) {
    error.exitCode = EXIT_CODES.CONFIGURATION_ERROR
    throw error
  }
}

async function filterDiagnostics(diagnostics, options, root) {
  const basic = diagnostics.filter((diagnostic) =>
    (!options.path || diagnostic.source_path === options.path || diagnostic.source_path?.startsWith(`${options.path}/`)) &&
    (!options.documentId || diagnostic.document_id === options.documentId))
  if (!options.scope && !options.type) return basic

  const metadataByPath = new Map()
  for (const path of new Set(basic.map((item) => item.source_path).filter(Boolean))) {
    try {
      const document = await loadDocument(resolve(root, path), { root })
      metadataByPath.set(path, document.metadata)
    } catch {
      metadataByPath.set(path, null)
    }
  }
  return basic.filter((diagnostic) => {
    const metadata = metadataByPath.get(diagnostic.source_path)
    return (
      (!options.scope || metadata?.authority_scope === options.scope) &&
      (!options.type || metadata?.document_type === options.type)
    )
  })
}

function count(diagnostics, severity) {
  return diagnostics.filter((item) => item.severity === severity).length
}
