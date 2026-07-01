export const CLI_VERSION = '1.0.0'

export const EXIT_CODES = Object.freeze({
  SUCCESS: 0,
  VALIDATION_FAILED: 1,
  INTERNAL_ERROR: 2,
  INVALID_ARGUMENTS: 3,
  CONFIGURATION_ERROR: 4,
  REPOSITORY_STATE_ERROR: 5,
})

export const COMMANDS = Object.freeze({
  validate: { layers: ['REPOSITORY'], description: 'Validate canonical repository contracts.' },
  schema: { layers: ['SCHEMA'], description: 'Validate schema contracts only.' },
  relationships: { layers: ['RELATIONSHIPS'], description: 'Validate declared relationships only.' },
  baseline: { layers: ['BASELINE'], description: 'Verify the legacy baseline only.' },
  exceptions: { layers: ['EXCEPTIONS'], description: 'Validate the exception registry only.' },
  check: { layers: null, description: 'Run the complete validation pipeline.' },
  generate: { kind: 'GENERATION', description: 'Generate or check persistent derived artifacts.' },
})
