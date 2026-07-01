import {
  PROFILES,
  SEVERITIES,
} from '../shared/constants.js'
import { RULES } from '../rules/catalog.js'
import {
  createDiagnostic,
  hasErrors,
  sortDiagnostics,
} from '../shared/diagnostics.js'
import { validateParsedDocument } from '../validators/semantic-validator.js'

export function validateDocumentSet(documents) {
  const documentResults = documents.map(validateParsedDocument)
  const diagnostics = documentResults.flatMap((item) => item.diagnostics)
  const canonical = documents.filter((document) => document.profile === PROFILES.CANONICAL)
  const byId = new Map()
  const aliasOwners = new Map()

  for (const document of canonical) {
    const id = document.metadata.document_id
    if (typeof id === 'string') append(byId, id, document)
    for (const alias of document.metadata.aliases ?? []) {
      if (typeof alias === 'string') append(aliasOwners, alias, document)
    }
  }

  validateDuplicateIds(byId, diagnostics)
  validateAliases(byId, aliasOwners, diagnostics)

  const resolvable = new Map()
  for (const [id, owners] of byId) {
    if (owners.length === 1) resolvable.set(id, owners[0])
  }
  for (const [alias, owners] of aliasOwners) {
    if (owners.length === 1 && !resolvable.has(alias)) resolvable.set(alias, owners[0])
  }

  const edges = collectEdges(canonical)
  validateReferences(edges, resolvable, diagnostics)
  validateCycles(edges, byId, diagnostics)
  validateOrphans(canonical, edges, diagnostics)

  const sorted = sortDiagnostics(diagnostics)
  return {
    valid: !hasErrors(sorted),
    diagnostics: sorted,
    statistics: buildStatistics(documents, sorted, edges),
    documents,
    edges,
  }
}

function append(map, key, document) {
  const values = map.get(key) ?? []
  values.push(document)
  map.set(key, values)
}

function validateDuplicateIds(byId, diagnostics) {
  for (const [id, documents] of byId) {
    if (documents.length < 2) continue
    for (const document of documents) {
      diagnostics.push(createDiagnostic(RULES.DUPLICATE_ID, {
        sourcePath: document.sourcePath,
        documentId: id,
        field: 'document_id',
        message: `Canonical document_id '${id}' is declared by multiple documents.`,
      }))
    }
  }
}

function validateAliases(byId, aliasOwners, diagnostics) {
  for (const [alias, documents] of aliasOwners) {
    if (documents.length > 1) {
      for (const document of documents) {
        diagnostics.push(createDiagnostic(RULES.DUPLICATE_ALIAS, {
          sourcePath: document.sourcePath,
          documentId: document.metadata.document_id,
          field: 'aliases',
          message: `Alias '${alias}' is declared by multiple documents.`,
        }))
      }
    }
    if (byId.has(alias)) {
      for (const document of documents) {
        diagnostics.push(createDiagnostic(RULES.ID_ALIAS_COLLISION, {
          sourcePath: document.sourcePath,
          documentId: document.metadata.document_id,
          field: 'aliases',
          message: `Alias '${alias}' collides with a canonical document_id.`,
        }))
      }
    }
  }
}

function collectEdges(documents) {
  const edges = []
  for (const document of documents) {
    const source = document.metadata.document_id
    if (typeof source !== 'string') continue
    for (const relationship of document.metadata.relationships ?? []) {
      if (!relationship?.type || !relationship?.target) continue
      edges.push({
        source,
        type: relationship.type,
        target: relationship.target,
        source_path: document.sourcePath,
      })
    }
  }
  return edges.sort((left, right) =>
    left.source.localeCompare(right.source) ||
    left.type.localeCompare(right.type) ||
    left.target.localeCompare(right.target) ||
    left.source_path.localeCompare(right.source_path))
}

function validateReferences(edges, resolvable, diagnostics) {
  for (const edge of edges) {
    if (resolvable.has(edge.target)) continue
    diagnostics.push(createDiagnostic(RULES.BROKEN_REFERENCE, {
      sourcePath: edge.source_path,
      documentId: edge.source,
      field: 'relationships',
      message: `Relationship target '${edge.target}' does not resolve to one canonical document.`,
    }))
  }
}

function validateCycles(edges, byId, diagnostics) {
  const forbiddenEdges = edges.filter((edge) => edge.type !== 'RELATES_TO')
  for (const component of stronglyConnectedComponents(forbiddenEdges)) {
    const first = byId.get(component[0])?.[0]
    diagnostics.push(createDiagnostic(RULES.FORBIDDEN_CYCLE, {
      sourcePath: first?.sourcePath,
      documentId: component[0],
      field: 'relationships',
      message: `Forbidden directed relationship cycle: ${component.join(' -> ')}.`,
    }))
  }

  const relatesEdges = edges.filter((edge) => edge.type === 'RELATES_TO')
  for (const component of stronglyConnectedComponents(relatesEdges)) {
    const first = byId.get(component[0])?.[0]
    diagnostics.push(createDiagnostic(RULES.RELATES_CYCLE, {
      severity: SEVERITIES.INFO,
      sourcePath: first?.sourcePath,
      documentId: component[0],
      field: 'relationships',
      message: `Allowed RELATES_TO cycle observed: ${component.join(' -> ')}.`,
    }))
  }
}

function validateOrphans(documents, edges, diagnostics) {
  const connected = new Set(edges.flatMap((edge) => [edge.source, edge.target]))
  for (const document of documents) {
    const id = document.metadata.document_id
    if (!id || connected.has(id)) continue
    diagnostics.push(createDiagnostic(RULES.ORPHAN_DOCUMENT, {
      severity: SEVERITIES.INFO,
      sourcePath: document.sourcePath,
      documentId: id,
      field: 'relationships',
      message: 'Canonical document has no incoming or outgoing semantic relationship.',
    }))
  }
}

function stronglyConnectedComponents(edges) {
  const nodes = new Set(edges.flatMap((edge) => [edge.source, edge.target]))
  const graph = new Map([...nodes].map((node) => [node, []]))
  for (const edge of edges) graph.get(edge.source).push(edge.target)
  for (const targets of graph.values()) targets.sort()

  let index = 0
  const stack = []
  const onStack = new Set()
  const indices = new Map()
  const low = new Map()
  const components = []

  function visit(node) {
    indices.set(node, index)
    low.set(node, index)
    index += 1
    stack.push(node)
    onStack.add(node)
    for (const target of graph.get(node)) {
      if (!indices.has(target)) {
        visit(target)
        low.set(node, Math.min(low.get(node), low.get(target)))
      } else if (onStack.has(target)) {
        low.set(node, Math.min(low.get(node), indices.get(target)))
      }
    }
    if (low.get(node) !== indices.get(node)) return
    const component = []
    while (stack.length) {
      const current = stack.pop()
      onStack.delete(current)
      component.push(current)
      if (current === node) break
    }
    if (component.length > 1 || graph.get(node).includes(node)) components.push(component.sort())
  }

  for (const node of [...nodes].sort()) {
    if (!indices.has(node)) visit(node)
  }
  return components.sort((left, right) => left[0].localeCompare(right[0]))
}

function buildStatistics(documents, diagnostics, edges) {
  const count = (profile) => documents.filter((document) => document.profile === profile).length
  const severity = (value) => diagnostics.filter((item) => item.severity === value).length
  return {
    total_documents: documents.length,
    validated_documents: count(PROFILES.CANONICAL),
    legacy_documents: count(PROFILES.LEGACY),
    template_documents: count(PROFILES.TEMPLATE),
    skipped_documents: 0,
    relationships: edges.length,
    errors: severity('ERROR'),
    warnings: severity('WARNING'),
    info: severity('INFO'),
  }
}
