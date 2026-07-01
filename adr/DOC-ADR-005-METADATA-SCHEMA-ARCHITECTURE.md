# DOC-ADR-005 — Metadata Schema Architecture

## Title

Metadata Schema Architecture

## Status

PROPOSED

## Context

Current documents use inconsistent headings and metadata fields, and many repository areas lack structured metadata.

## Problem

Automation and governance require a stable metadata contract without creating competing metadata sources.

## Alternatives

1. Infer metadata from paths and headings.
2. Maintain metadata in a separate registry.
3. Store metadata in document front matter and derive registries.

## Proposed Decision

Use versioned document front matter as the metadata source and derive manifests and indexes from it.

## Consequences

Schema evolution must be governed, and legacy documents require an incremental migration strategy.

## Open Questions

- Which fields are universal or type-specific?
- How will schema compatibility be managed?
- Which legacy exemptions are permitted?
