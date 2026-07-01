export function canonicalizeDocuments(documents) {
  const supersededBy = new Map()
  for (const document of documents) {
    const sourceId = scalar(document.metadata.document_id)
    for (const target of list(document.metadata.supersedes)) {
      const values = supersededBy.get(target) ?? []
      if (sourceId) values.push(sourceId)
      supersededBy.set(target, values)
    }
  }

  return documents
    .map((document) => canonicalizeDocument(document, supersededBy))
    .sort((left, right) => left.source_path.localeCompare(right.source_path))
}

export function declaredRelationships(documents) {
  const relationships = []
  for (const document of documents) {
    const source = scalar(document.metadata.document_id)
    if (!source) continue
    for (const relationship of list(document.metadata.relationships)) {
      if (!relationship?.type || !relationship?.target) continue
      relationships.push({
        source,
        source_path: document.sourcePath,
        target: String(relationship.target),
        type: String(relationship.type),
      })
    }
  }
  return sortRelationships(relationships)
}

export function deriveRelationships(documents, declared) {
  const declaredKeys = new Set(declared.map(edgeKey))
  const derived = []
  for (const document of documents) {
    const source = scalar(document.metadata.document_id)
    if (!source) continue
    for (const target of list(document.metadata.supersedes)) {
      const forward = { source, source_path: document.sourcePath, target, type: 'SUPERSEDES' }
      if (!declaredKeys.has(edgeKey(forward))) derived.push(forward)
      derived.push({
        source: target,
        source_path: null,
        target: source,
        type: 'SUPERSEDED_BY',
      })
    }
  }
  return sortRelationships(uniqueBy(derived, edgeKey))
}

function canonicalizeDocument(document, supersededBy) {
  const metadata = document.metadata
  const id = scalar(metadata.document_id)
  const relationships = list(metadata.relationships)
    .filter((item) => item?.target)
    .map((item) => String(item.target))
  const related = [
    ...relationships,
    ...list(metadata.related_requirements),
    ...list(metadata.related_adrs),
    ...list(metadata.related_epics),
  ]
  return {
    aliases: list(metadata.aliases),
    authority_level: scalar(metadata.authority_level),
    authority_scope: scalar(metadata.authority_scope),
    classification: document.profile,
    document_id: id,
    document_state: scalar(metadata.document_state),
    document_type: scalar(metadata.document_type),
    last_updated: dateScalar(metadata.last_updated),
    maturity_level: scalar(metadata.maturity_level),
    owner: scalar(metadata.owner),
    publication_status: scalar(metadata.publication_status),
    related_documents: uniqueStrings(related),
    sha256: document.sha256,
    source_path: document.sourcePath,
    superseded_by: uniqueStrings(supersededBy.get(id) ?? []),
    supersedes: uniqueStrings(list(metadata.supersedes)),
    title: scalar(metadata.title) ?? document.title,
    version: scalar(metadata.version),
  }
}

function scalar(value) {
  if (value === undefined || value === null || value === '') return null
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value)
}

function dateScalar(value) {
  return scalar(value)
}

function list(value) {
  return Array.isArray(value) ? value : []
}

function uniqueStrings(values) {
  return [...new Set(values
    .filter((value) => value !== undefined && value !== null && value !== '')
    .map(String))]
    .sort((left, right) => left.localeCompare(right))
}

function sortRelationships(relationships) {
  return relationships.sort((left, right) =>
    left.source.localeCompare(right.source) ||
    left.type.localeCompare(right.type) ||
    left.target.localeCompare(right.target) ||
    String(left.source_path ?? '').localeCompare(String(right.source_path ?? '')))
}

function edgeKey(edge) {
  return `${edge.source}\0${edge.type}\0${edge.target}`
}

function uniqueBy(values, key) {
  return [...new Map(values.map((value) => [key(value), value])).values()]
}
