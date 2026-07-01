# DOC-ADR-007 — Documentation Releases

## Title

Versioned Documentation Releases

## Status

PROPOSED

## Context

Repository commits provide history, but there is no formal documentation release contract or release identifier.

## Problem

Published documentation cannot yet be tied consistently to source, approval evidence, validation, and rollback information.

## Alternatives

1. Treat every main-branch commit as a release.
2. Use dates only.
3. Introduce explicit versioned documentation release records.

## Proposed Decision

Define explicit documentation releases linked to source commits, approvals, validation evidence, publication target, and rollback reference.

## Consequences

Publication becomes a separately governed activity and requires durable release evidence.

## Open Questions

- Which versioning convention applies to releases?
- Which artifacts are mandatory before release?
- Who owns rollback approval?
