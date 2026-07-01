---
schema_version: "1.0.0"
document_id: "DOC-ADR-005"
aliases: []
document_type: "ADR"
title: "Metadata Schema Architecture"
summary: "Establishes front matter as source and derived artifacts as projections."
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
relationships: [{type: "RELATES_TO", target: "DOC-ADR-011"}, {type: "RELATES_TO", target: "DOC-ADR-016"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-011", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-005 — Metadata Schema Architecture

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Governance metadata must be colocated with documents while supporting deterministic inventories and indexes.

## Decision

Canonical YAML front matter is the metadata source. Manifests, indexes, graphs, and statistics are derived projections and must not become competing sources.

## Rationale

Colocation keeps content and governance metadata reviewable in one change.

## Alternatives Considered

- Infer from paths: incomplete and conflicts with logical authority.
- Edit a separate manifest: creates dual-write drift.
- Store metadata in an external database: reduces repository auditability.

## Trade-offs

Legacy documents require staged migration and front matter changes become governed source changes.

## Consequences

Schema versions are explicit; generated artifacts must be deterministic.

## Future Impacts

Machine-readable schema and validation require separate implementation.

## Related Documents

- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)
- [Documentation Versioning Policy](../governance/DOCUMENTATION-VERSIONING-POLICY.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-005`.

## References

- Schema 1.0.0
