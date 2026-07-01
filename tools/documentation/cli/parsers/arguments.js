const BOOLEAN_OPTIONS = new Set([
  'json',
  'pretty',
  'summary',
  'verbose',
  'quiet',
  'fail-on-warning',
])

const VALUE_OPTIONS = new Set([
  'scope',
  'path',
  'document-id',
  'type',
  'baseline',
  'exceptions',
  'output',
  'reference-date',
])

export class CliArgumentError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CliArgumentError'
  }
}

export function parseArguments(argv) {
  const [command, ...tokens] = argv
  const options = {}
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index]
    if (token === '--' && index === 0) continue
    if (!token.startsWith('--')) throw new CliArgumentError(`Unexpected positional argument '${token}'.`)
    const [rawName, inlineValue] = token.slice(2).split(/=(.*)/s, 2)
    if (BOOLEAN_OPTIONS.has(rawName)) {
      if (inlineValue !== undefined) throw new CliArgumentError(`--${rawName} does not accept a value.`)
      if (options[toCamel(rawName)]) throw new CliArgumentError(`--${rawName} may be provided only once.`)
      options[toCamel(rawName)] = true
      continue
    }
    if (!VALUE_OPTIONS.has(rawName)) throw new CliArgumentError(`Unknown option '--${rawName}'.`)
    if (options[toCamel(rawName)] !== undefined) {
      throw new CliArgumentError(`--${rawName} may be provided only once.`)
    }
    const value = inlineValue ?? tokens[++index]
    if (!value || value.startsWith('--')) throw new CliArgumentError(`--${rawName} requires a value.`)
    options[toCamel(rawName)] = value
  }
  validateCombinations(options)
  return { command, options }
}

function validateCombinations(options) {
  if (options.pretty && !options.json) throw new CliArgumentError('--pretty requires --json.')
  if (options.quiet && (options.verbose || options.summary)) {
    throw new CliArgumentError('--quiet cannot be combined with --verbose or --summary.')
  }
  if (options.verbose && options.summary) {
    throw new CliArgumentError('--verbose cannot be combined with --summary.')
  }
  if (options.referenceDate &&
      (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(options.referenceDate) ||
       Number.isNaN(Date.parse(options.referenceDate)))) {
    throw new CliArgumentError('--reference-date must be an RFC3339 timestamp.')
  }
}

function toCamel(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}
