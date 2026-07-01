# DOC-ADR-013 — Document Semantic Versioning

## Title

Semantic Versioning for Governed Documents

## Status

PROPOSED

## Context

Documents currently expose versions, but there is no approved interpretation for major, minor, and patch changes.

## Problem

Reviewers and consumers cannot reliably determine whether a documentation change alters meaning, adds compatible content, or only corrects presentation.

## Alternatives

1. Use dates only.
2. Increment versions without semantic rules.
3. Adapt Semantic Versioning to governed document changes.

## Proposed Decision

Use Semantic Versioning with documented classifications for breaking semantic changes, compatible additions, and non-semantic corrections.

## Consequences

Authors must classify changes, and approval requirements may vary by version impact.

## Open Questions

- What constitutes a breaking documentation change?
- Do immutable records use the same scheme?
- How do document and release versions interact?
