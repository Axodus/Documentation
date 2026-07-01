# DOC-ADR-017 — Logical Authority versus Physical Location

## Title

Logical Documentation Authority versus Physical Location

## Status

PROPOSED

## Context

Documents reside in public, governance, operational, historical, and nucleus-specific paths.

## Problem

Treating a repository or directory as inherently authoritative conflates storage, publication, ownership, and approval.

## Alternatives

1. Derive authority entirely from path.
2. Derive authority entirely from repository.
3. Declare authority through governed metadata, ownership, scope, and approval.

## Proposed Decision

Treat physical location as organization and publication context, while logical authority is established by explicit governance evidence.

## Consequences

Moving a document does not automatically promote or demote it, and tooling must not infer approval from path alone.

## Open Questions

- Which locations impose publication restrictions?
- How will legacy documents without authority metadata be classified?
- Which authority indicators must be visible to readers?
