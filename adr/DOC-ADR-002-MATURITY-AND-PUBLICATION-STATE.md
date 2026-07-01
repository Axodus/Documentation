# DOC-ADR-002 — Separate Maturity and Publication State

## Title

Separate Documentation Maturity from Publication State

## Status

PROPOSED

## Context

Existing D-level maturity labels and publication labels describe different characteristics of a document.

## Problem

Combining completeness, review, approval, and publication into one state creates ambiguous governance decisions.

## Alternatives

1. Use only D-level maturity.
2. Use only publication lifecycle states.
3. Maintain independent maturity, publication, and document-state dimensions.

## Proposed Decision

Maintain maturity, publication status, and document state as separate dimensions with validated combinations.

## Consequences

Metadata becomes more explicit but requires clear transition rules and reporting across multiple dimensions.

## Open Questions

- Which combinations are invalid?
- Who may change each dimension?
- How should historical classifications be preserved?
