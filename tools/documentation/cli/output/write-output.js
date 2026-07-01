import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

export async function writeOutput(content, path) {
  const target = resolve(path)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, content, 'utf8')
}
