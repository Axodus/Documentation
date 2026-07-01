import { resolve } from 'node:path'
import {
  loadBaseline,
  loadDocument,
  loadExceptions,
  validateRepository,
} from '../../index.js'
import {
  checkGeneratedArtifacts,
  generateAll,
  writeGeneratedArtifacts,
} from '../../generator/index.js'
import {
  compareSnapshots,
  createInstructionsSnapshot,
  listSnapshots,
} from '../../evidence/index.js'
import { CLI_VERSION, COMMANDS, EXIT_CODES } from '../shared/constants.js'

export async function runCommand(commandName, options = {}) {
  const command = COMMANDS[commandName]
  if (!command) {
    const error = new Error(`Unknown command '${commandName ?? ''}'.`)
    error.exitCode = EXIT_CODES.INVALID_ARGUMENTS
    throw error
  }
  if (command.kind === 'GENERATION') return runGenerator(options)
  if (command.kind === 'EVIDENCE') return runEvidence(command.operation, options)
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

async function runEvidence(operation, options) {
  try {
    if (operation === 'CREATE') {
      const snapshot = await createInstructionsSnapshot({ root: process.cwd() })
      return {
        kind: 'EVIDENCE',
        command: 'snapshot',
        operation,
        status: snapshot.created ? 'CREATED' : 'UNCHANGED',
        exit_code: EXIT_CODES.SUCCESS,
        snapshot_id: snapshot.snapshot_id,
        statistics: {
          files: snapshot.files,
          directories: snapshot.directories,
          snapshot_size: snapshot.snapshot_size,
          redactions: snapshot.redacted_entries.count,
          affected_files: snapshot.redacted_entries.affected_files.length,
          redaction_categories: snapshot.redacted_entries.categories,
        },
        diagnostics: [],
      }
    }
    if (operation === 'LIST') {
      const registry = await listSnapshots({ root: process.cwd() })
      return {
        kind: 'EVIDENCE',
        command: 'snapshot-list',
        operation,
        status: 'SUCCESS',
        exit_code: EXIT_CODES.SUCCESS,
        registry_version: registry.registry_version,
        evidence_version: registry.evidence_version,
        statistics: { snapshots: registry.snapshots.length },
        snapshots: registry.snapshots,
        diagnostics: [],
      }
    }
    const comparison = await compareSnapshots(options.snapshot, options.reference, { root: process.cwd() })
    return {
      kind: 'EVIDENCE',
      command: 'snapshot-compare',
      operation,
      status: comparison.equal ? 'IDENTICAL' : 'CHANGED',
      exit_code: EXIT_CODES.SUCCESS,
      statistics: {
        added_files: comparison.added_files.length,
        removed_files: comparison.removed_files.length,
        modified_files: comparison.modified_files.length,
        metadata_changes: comparison.metadata_changes.length,
      },
      comparison,
      diagnostics: [],
    }
  } catch (error) {
    if (error?.code === 'ENOENT') error.exitCode = EXIT_CODES.CONFIGURATION_ERROR
    throw error
  }
}

async function runGenerator(options) {
  const generation = await generateAll({
    root: process.cwd(),
    baselinePath: options.baseline,
    exceptionsPath: options.exceptions,
    referenceDate: options.referenceDate,
  })
  if (options.write) {
    const write = await writeGeneratedArtifacts(generation, { root: process.cwd() })
    return {
      kind: 'GENERATION',
      command: 'generate',
      mode: 'WRITE',
      status: 'SUCCESS',
      exit_code: EXIT_CODES.SUCCESS,
      generator_version: generation.generator_version,
      generated_at: generation.generated_at,
      statistics: generation.statistics,
      written: write.written,
      diagnostics: [],
    }
  }
  const check = await checkGeneratedArtifacts(generation, { root: process.cwd() })
  return {
    kind: 'GENERATION',
    command: 'generate',
    mode: 'CHECK',
    status: check.clean ? 'CLEAN' : 'DRIFT',
    exit_code: EXIT_CODES.SUCCESS,
    generator_version: generation.generator_version,
    generated_at: generation.generated_at,
    statistics: generation.statistics,
    clean: check.clean,
    drift_count: check.drift_count,
    drift: check.drift,
    diagnostics: [],
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
