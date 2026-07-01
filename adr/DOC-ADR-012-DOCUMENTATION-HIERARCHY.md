# DOC-ADR-012 — Documentation Hierarchy

## Title

Documentation Hierarchy and Authority Scope

## Status

PROPOSED

## Context

Documents can apply to the portfolio, a core, a project, a module, or a component.

## Problem

Scope is often inferred from path or repository, causing broad documents to conflict with more specific domain evidence.

## Alternatives

1. Infer scope from repository location.
2. Use a global numeric authority rank.
3. Declare logical scope and resolve authority in context.

## Proposed Decision

Declare authority scope explicitly and avoid treating physical hierarchy as automatic precedence.

## Consequences

Conflict resolution must consider subject applicability rather than relying on a single global ranking.

## Open Questions

- How are cross-scope documents reviewed?
- Can one document declare multiple scopes?
- How are experimental documents represented?
