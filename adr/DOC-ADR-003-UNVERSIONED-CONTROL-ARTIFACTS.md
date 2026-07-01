# DOC-ADR-003 — Unversioned Control Artifacts

## Title

Treatment of Unversioned Portfolio Control Artifacts

## Status

PROPOSED

## Context

Portfolio control artifacts exist under `/opt/Axodus/.instructions`, while `/opt/Axodus` is not a Git repository.

## Problem

These files influence portfolio coordination but lack native version history, durable review evidence, and repository-level auditability.

## Alternatives

1. Keep the artifacts local-only.
2. Initialize Git at `/opt/Axodus`.
3. Move the artifacts to a dedicated repository.
4. Maintain an approved versioned representation while leaving `/opt` unchanged.

## Proposed Decision

Create an approved versioned representation in a documentary authority without initializing Git at `/opt/Axodus`.

## Consequences

A controlled reconciliation process is required, and unversioned files remain temporary operational evidence until formally migrated.

## Open Questions

- Should the representation be a mirror or periodic snapshot?
- Which source is editable after transition?
- How will sensitive material be excluded?
