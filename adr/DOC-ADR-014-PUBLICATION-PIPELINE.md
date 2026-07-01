# DOC-ADR-014 — Publication Pipeline

## Title

Governed Documentation Publication Pipeline

## Status

PROPOSED

## Context

VitePress is the current publication surface, while publication authority and target remain gated.

## Problem

Build success, content approval, release approval, and publication execution can be incorrectly treated as equivalent.

## Alternatives

1. Publish automatically after merge.
2. Publish manually without a formal release record.
3. Separate validation, approval, release, publication, and post-publication audit.

## Proposed Decision

Define a gated pipeline with distinct validation, approval, release, publication, rollback, and audit stages.

## Consequences

Publication remains disabled by default and requires evidence from each preceding stage.

## Open Questions

- What is the approved publication target?
- Which roles may authorize execution?
- Which emergency correction path is permitted?
