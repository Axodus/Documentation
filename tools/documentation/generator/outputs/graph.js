import {
  GENERATOR_VERSION,
  GRAPH_VERSION,
  SCHEMA_VERSION,
} from '../shared/constants.js'

export function buildGraph(manifest) {
  const nodes = manifest.documents.map((document) => ({
    node_id: document.document_id ?? document.source_path,
    document_id: document.document_id,
    document_type: document.document_type,
    classification: document.classification,
    publication_status: document.publication_status,
    authority_level: document.authority_level,
    source_path: document.source_path,
    title: document.title,
  })).sort((left, right) => left.node_id.localeCompare(right.node_id))
  const relationships = [...manifest.relationships]
  const derivedRelationships = [...manifest.derived_relationships]
  const allEdges = [...relationships, ...derivedRelationships]
  const ids = new Set(nodes.map((node) => node.document_id).filter(Boolean))
  const connected = new Set(allEdges.flatMap((edge) => [edge.source, edge.target]))
  const unresolved = allEdges.filter((edge) => !ids.has(edge.target))
  const duplicates = duplicateRelationships(allEdges)
  const cycles = detectCycles(allEdges, ids)
  const relationshipConnected = [...ids].filter((id) => connected.has(id)).sort()
  const relationshipUnreachable = [...ids].filter((id) => !connected.has(id)).sort()

  return {
    graph_version: GRAPH_VERSION,
    schema_version: SCHEMA_VERSION,
    generator_version: GENERATOR_VERSION,
    generated_at: manifest.generated_at,
    nodes,
    relationships,
    derived_relationships: derivedRelationships,
    relationship_types: unique(allEdges.map((edge) => edge.type)),
    relationship_counts: counts(allEdges),
    relationship_statistics: {
      declared: relationships.length,
      derived: derivedRelationships.length,
      total: allEdges.length,
      unresolved: unresolved.length,
      duplicates: duplicates.length,
    },
    reachability: {
      from_master_index: manifest.documents.map((item) => item.source_path),
      relationship_connected: relationshipConnected,
      relationship_unreachable: relationshipUnreachable,
    },
    orphan_documents: manifest.documents
      .filter((item) => !item.document_id || !connected.has(item.document_id))
      .map((item) => item.source_path),
    unresolved_references: unresolved,
    duplicate_references: duplicates,
    cycles,
    graph_metadata: {
      cycle_policy: 'RELATES_TO-only cycles are permitted and reported; other cycles are reported for validation by the Validation Engine.',
      edge_order: 'source, type, target, source_path',
      inference: 'Only declared relationships and deterministic SUPERSEDES/SUPERSEDED_BY projections are represented.',
      master_index_reachability: 'Every inventoried source document is cataloged by the generated master index.',
    },
  }
}

function duplicateRelationships(edges) {
  const seen = new Map()
  for (const edge of edges) {
    const key = `${edge.source}\0${edge.type}\0${edge.target}`
    const values = seen.get(key) ?? []
    values.push(edge)
    seen.set(key, values)
  }
  return [...seen.values()].filter((values) => values.length > 1).flat()
}

function detectCycles(edges, ids) {
  const graph = new Map([...ids].map((id) => [id, []]))
  for (const edge of edges) {
    if (graph.has(edge.source) && graph.has(edge.target)) graph.get(edge.source).push(edge)
  }
  for (const values of graph.values()) {
    values.sort((left, right) => left.target.localeCompare(right.target) || left.type.localeCompare(right.type))
  }

  const cycles = new Map()
  function visit(start, node, path, edgeTypes, visited) {
    for (const edge of graph.get(node) ?? []) {
      if (edge.target === start) {
        const members = [...path]
        const canonical = canonicalCycle(members)
        const types = [...edgeTypes, edge.type]
        const key = canonical.join('\0')
        const existing = cycles.get(key)
        const allowed = types.every((type) => type === 'RELATES_TO')
        if (!existing || (!existing.allowed && allowed)) {
          cycles.set(key, { nodes: canonical, relationship_types: unique(types), allowed })
        }
      } else if (!visited.has(edge.target) && path.length < graph.size) {
        visit(start, edge.target, [...path, edge.target], [...edgeTypes, edge.type], new Set([...visited, edge.target]))
      }
    }
  }
  for (const id of [...ids].sort()) visit(id, id, [id], [], new Set([id]))
  return [...cycles.values()].sort((left, right) => left.nodes.join('\0').localeCompare(right.nodes.join('\0')))
}

function canonicalCycle(nodes) {
  const rotations = nodes.map((_, index) => [...nodes.slice(index), ...nodes.slice(0, index)])
  return rotations.sort((left, right) => left.join('\0').localeCompare(right.join('\0')))[0]
}

function counts(edges) {
  const result = {}
  for (const edge of edges) result[edge.type] = (result[edge.type] ?? 0) + 1
  return Object.fromEntries(Object.entries(result).sort(([left], [right]) => left.localeCompare(right)))
}

function unique(values) {
  return [...new Set(values)].sort()
}
