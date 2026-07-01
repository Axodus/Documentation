import Ajv2020 from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const schemaPath = fileURLToPath(new URL('../../../documentation.schema.json', import.meta.url))
const schema = JSON.parse(await readFile(schemaPath, 'utf8'))
const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
})
addFormats(ajv)
const validate = ajv.compile(schema)

export function validateMetadataSchema(metadata) {
  const valid = validate(metadata)
  return {
    valid,
    errors: valid ? [] : structuredClone(validate.errors ?? []),
  }
}

export function getDocumentationSchema() {
  return structuredClone(schema)
}
