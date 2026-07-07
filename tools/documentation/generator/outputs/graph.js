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

  const components = stronglyConnectedComponents(graph)
  return components
    .map((nodes) => cycleFromComponent(nodes, graph))
    .filter(Boolean)
    .sort((left, right) => left.nodes.join('\0').localeCompare(right.nodes.join('\0')))
}

function stronglyConnectedComponents(graph) {
  let index = 0
  const indexes = new Map()
  const lowlinks = new Map()
  const stack = []
  const onStack = new Set()
  const components = []

  function connect(node) {
    indexes.set(node, index)
    lowlinks.set(node, index)
    index += 1
    stack.push(node)
    onStack.add(node)

    for (const edge of graph.get(node) ?? []) {
      const target = edge.target
      if (!indexes.has(target)) {
        connect(target)
        lowlinks.set(node, Math.min(lowlinks.get(node), lowlinks.get(target)))
      } else if (onStack.has(target)) {
        lowlinks.set(node, Math.min(lowlinks.get(node), indexes.get(target)))
      }
    }

    if (lowlinks.get(node) !== indexes.get(node)) return

    const component = []
    let current
    do {
      current = stack.pop()
      onStack.delete(current)
      component.push(current)
    } while (current !== node)
    components.push(component.sort((left, right) => left.localeCompare(right)))
  }

  for (const node of [...graph.keys()].sort()) {
    if (!indexes.has(node)) connect(node)
  }
  return components
}

function cycleFromComponent(nodes, graph) {
  const members = new Set(nodes)
  const internalEdges = nodes
    .flatMap((node) => graph.get(node) ?? [])
    .filter((edge) => members.has(edge.target))
  if (nodes.length === 1 && !internalEdges.some((edge) => edge.source === edge.target)) return null
  const relationshipTypes = unique(internalEdges.map((edge) => edge.type))
  return {
    nodes,
    edge_count: internalEdges.length,
    source_document_ids: unique(internalEdges.map((edge) => edge.source)),
    relationship_types: relationshipTypes,
    allowed: relationshipTypes.every((type) => type === 'RELATES_TO'),
  }
}

function counts(edges) {
  const result = {}
  for (const edge of edges) result[edge.type] = (result[edge.type] ?? 0) + 1
  return Object.fromEntries(Object.entries(result).sort(([left], [right]) => left.localeCompare(right)))
}

function unique(values) {
  return [...new Set(values)].sort()
}
