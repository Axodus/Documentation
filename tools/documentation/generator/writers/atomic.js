import {
  open,
  readFile,
  rename,
  unlink,
} from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { resolve } from 'node:path'

export async function atomicWrite(path, content, options = {}) {
  const target = resolve(path)
  const temporary = `${target}.tmp-${process.pid}-${randomUUID()}`
  let handle
  try {
    handle = await open(temporary, 'wx', 0o644)
    await handle.writeFile(content, 'utf8')
    await handle.sync()
    await handle.close()
    handle = null
    await options.beforeRename?.({ temporary, target })
    await rename(temporary, target)
  } catch (error) {
    await handle?.close().catch(() => {})
    await unlink(temporary).catch(() => {})
    throw error
  }
}

export async function readPersisted(path) {
  try {
    return await readFile(resolve(path), 'utf8')
  } catch (error) {
    if (error?.code === 'ENOENT') return null
    throw error
  }
}
