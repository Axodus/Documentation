#!/usr/bin/env node
import { performance } from 'node:perf_hooks'
import { pathToFileURL } from 'node:url'
import { formatHuman } from './formatters/human.js'
import { formatJson } from './formatters/json.js'
import { runCommand } from './commands/run-command.js'
import { CliArgumentError, parseArguments } from './parsers/arguments.js'
import { writeOutput } from './output/write-output.js'
import { EXIT_CODES } from './shared/constants.js'

export async function main(argv, io = defaultIo()) {
  const startedAt = performance.now()
  try {
    const { command, options } = parseArguments(argv)
    const result = await runCommand(command, options)
    const executionTime = Math.round((performance.now() - startedAt) * 100) / 100
    const content = options.json
      ? formatJson(result, options.pretty)
      : formatHuman({ ...result, execution_time_ms: executionTime }, options)
    if (options.output) await writeOutput(content, options.output)
    if (!options.quiet) io.stdout(content)
    return result.exit_code
  } catch (error) {
    const exitCode = error instanceof CliArgumentError
      ? EXIT_CODES.INVALID_ARGUMENTS
      : error.exitCode ?? EXIT_CODES.INTERNAL_ERROR
    io.stderr(`Documentation CLI error: ${error.message}\n`)
    return exitCode
  }
}

function defaultIo() {
  return {
    stdout: (content) => process.stdout.write(content),
    stderr: (content) => process.stderr.write(content),
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = await main(process.argv.slice(2))
}
