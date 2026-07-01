# DOC-ADR-010 — Document Naming Convention

## Title

Document Naming and Identifier Convention

## Status

PROPOSED

## Context

Existing file names and identifiers use several conventions across repositories and historical requests.

## Problem

Inconsistent names reduce discoverability and can create unstable or duplicated references.

## Alternatives

1. Preserve unrestricted naming.
2. Derive identity from file paths.
3. Adopt immutable logical IDs and type-specific file naming guidance.

## Proposed Decision

Adopt immutable `<SCOPE>-<TYPE>-<NNN>` identifiers while preserving historical identifiers as aliases.

## Consequences

Identifier allocation requires governance, and filenames remain descriptive rather than authoritative.

## Open Questions

- Which scope codes are reserved?
- How are numbers allocated across repositories?
- Which filename casing and separators are required?
