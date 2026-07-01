# DOC-ADR-004 — Cross-Document Traceability

## Title

Cross-Document and Cross-Nucleus Traceability

## Status

PROPOSED

## Context

Requirements, decisions, specifications, implementation evidence, operational material, and releases are currently recorded independently.

## Problem

The portfolio cannot reliably demonstrate why a document exists, what decision governs it, or which downstream artifacts depend on it.

## Alternatives

1. Use informal Markdown links.
2. Maintain manually curated matrices.
3. Define typed relationships and derive traceability views.

## Proposed Decision

Define stable identifiers and typed relationships that support a cross-document dependency graph.

## Consequences

Documents require relationship metadata, and unresolved references become explicit governance defects.

## Open Questions

- Which relationship types are mandatory?
- How will external implementation evidence be represented?
- Which incomplete paths are acceptable for proposals?
