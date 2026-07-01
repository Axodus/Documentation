---
schema_version: "1.0.0"
document_id: "DOC-ADR-013"
aliases: []
document_type: "ADR"
title: "Document Semantic Versioning"
summary: "Applies separate Semantic Versions to documents, schemas, manifests, and releases."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: null
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: []
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "DOC-ADR-005"}, {type: "RELATES_TO", target: "DOC-ADR-007"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-007"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-013 — Document Semantic Versioning

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Dates and arbitrary version increments do not communicate compatibility.

## Decision

Apply Semantic Versioning independently to documents, metadata schemas, future manifests, and documentation releases.

## Rationale

Separate versions identify the contract that changed and whether reliance may break.

## Alternatives Considered

- Dates only: no compatibility meaning.
- One portfolio version: couples unrelated artifacts.
- Unspecified version increments: inconsistent.

## Trade-offs

Authors must classify change impact and downstream consumers must consider compatibility.

## Consequences

Major changes require impact and migration review; newer versions do not automatically gain authority.

## Future Impacts

Future tooling must preserve exact string versions and independent version domains.

## Related Documents

- [Documentation Versioning Policy](../governance/DOCUMENTATION-VERSIONING-POLICY.md)
- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-013`.

## References

- Semantic Versioning 2.0.0 model
