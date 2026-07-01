# DOC-ADR-011 — Required Metadata

## Title

Required Documentation Metadata

## Status

PROPOSED

## Context

A metadata architecture does not by itself determine which fields every governed document must provide.

## Problem

Optional or inconsistently populated fields undermine ownership, review scheduling, authority, and traceability.

## Alternatives

1. Require only title and owner.
2. Define one large universal field set.
3. Define universal fields plus type-specific requirements.

## Proposed Decision

Define a minimal universal metadata set with additional mandatory fields by document type and risk.

## Consequences

Templates become more structured, and legacy migration must identify missing required fields.

## Open Questions

- Which roles may be empty for low-risk documents?
- Which dates are mandatory?
- How are type-specific requirements versioned?
