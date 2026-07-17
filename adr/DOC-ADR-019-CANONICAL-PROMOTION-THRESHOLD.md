---
schema_version: "1.0.0"
document_id: "DOC-ADR-019"
aliases: []
document_type: "ADR"
title: "Canonical Promotion Threshold"
summary: "Establishes evidence-based metadata, authority, relationship, and validation thresholds for legacy promotion."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-005"}, {type: "DEPENDS_ON", target: "DOC-ADR-011"}, {type: "DEPENDS_ON", target: "DOC-ADR-017"}, {type: "RELATES_TO", target: "DOC-ADR-018"}, {type: "RELATES_TO", target: "DOC-ADR-020"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-017", "DOC-ADR-018", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-MIGRATION-CRITERIA.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-DEBT-CLASSIFICATION.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-019 — Canonical Promotion Threshold

## Status

APPROVED

## Approval Date

2026-07-02

## Context

Legacy documents vary in authority, age, quality, ownership, and operational sensitivity. Schema conformance alone cannot determine whether content should become canonical.

## Problem

Promotion needs a uniform threshold that prevents artificial metadata, stale authority, unresolved conflict, secrets, implicit production assumptions, and isolated graph nodes.

## Alternatives Considered

1. Promote every legacy document.
2. Promote only through unstructured manual approval.
3. Promote through metadata, authority, content, relation, evidence, and validation thresholds.
4. Archive most legacy documents and recreate new canonical content.

## Adopted Solution

Canonical promotion requires complete Schema 1.0.0 metadata, authority evidence, at least one resolved semantic relation, full validation success, and semantic diff review.

A document is promotable only when:

- complete Schema 1.0.0 metadata is evidence-backed;
- identity scope is registered and immutable;
- author, owner, maintainer, applicable reviewers, and approver are valid;
- lifecycle, maturity, authority scope, and authority level are explicitly supported;
- content has current or historical value and no obsolete operational guidance or unresolved authority conflict;
- secret review identifies no exposed sensitive value;
- no production, provider, financial, wallet, contract, database, or regulatory enablement assumption exists;
- every relationship resolves and the document is not orphaned;
- semantic diff review confirms historical meaning is preserved and every non-metadata content change is justified;
- baseline and exception changes are exact;
- validation, generation, evidence, CI, and build gates pass.

## Required Metadata and Field Mapping

All 32 canonical Schema 1.0.0 fields are required in canonical order. Migration terminology maps as follows:

| Migration term | Canonical Front Matter field |
|---|---|
| `status` | `publication_status` |
| `created_at` or first known date | `created_date` |
| `lifecycle_state` | `document_state` |
| related core | `related_cores` |

`source_path` and `canonical_path` are batch-evidence boundaries and MUST NOT be added as Front Matter fields. `source_path` may appear as a Generator-derived manifest attribute.

Unknown ownership, authority, required reviewer assignment, approval, or dates block promotion; values MUST NOT be inferred solely to satisfy the schema.

## Lifecycle, Maturity, and Authority Threshold

- Migration alone does not grant `ACTIVE`, `APPROVED`, `D3`, `D3+`, or `D4`.
- Publication status, document state, and maturity remain independent dimensions.
- Authority is logical and evidence-based; physical location does not grant authority.
- Archival promotion uses `ARCHIVED` + `HISTORICAL` only after ADR-020 criteria are met.

## Relationship and Content Threshold

Every promoted document MUST declare at least one allowed semantic relationship to a resolvable canonical ID and MUST remain reachable from the generated master index. External core, epic, and requirement dimensions stay in `related_*` metadata and do not create artificial graph edges.

Secret detection reports only redacted occurrence metadata. Suspected exposure blocks promotion and requires secure remediation outside batch evidence.

## Rationale

This distinguishes metadata compliance from trustworthy canonical authority and prevents migration metrics from rewarding low-quality mechanical conversion.

## Trade-offs

- Some useful documents remain legacy longer.
- Review capacity becomes a throughput constraint.
- Evidence gaps require deferral rather than inference.
- Canonical quality and auditability remain defensible.

## Consequences

- `PROMOTE_READY` and `NEEDS_METADATA` are the only normal batch candidate classes.
- Unknown ownership, dates, or authority block promotion.
- Scope codes must be registered before use.
- New canonical documents must have semantic relations.
- Migration does not automatically grant `ACTIVE` status or high maturity.
- Source and canonical paths remain evidence, not canonical metadata.
- Semantic review, not only schema validation, is mandatory.

## Future Impacts

Metrics can measure throughput and deferral without lowering the threshold. Future schema versions may add capabilities only through separate governance.

## Related Documents

- `DOC-STD-002`
- `DOC-STD-003`
- `DOC-PLAY-001`
- `DOC-SPEC-005`

## Supersession Policy

This approved ADR is immutable. Threshold changes require a new superseding ADR. The Axodus Documentation Core maintains the initial scope registry; new scopes require an explicit governance update. Domain-specific reviewer requirements may become stricter without weakening this minimum threshold.

## References

- ADR-005 metadata schema architecture.
- ADR-011 required metadata.
- ADR-017 logical authority versus physical location.
