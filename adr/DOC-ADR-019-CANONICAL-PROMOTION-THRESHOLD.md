---
schema_version: "1.0.0"
document_id: "DOC-ADR-019"
aliases: []
document_type: "ADR"
title: "Canonical Promotion Threshold"
summary: "Proposes evidence-based metadata, authority, relationship, and validation thresholds for legacy promotion."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
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
related_requirements: ["AXODUS-DOCUMENTATION-REQ-02"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-017", "DOC-ADR-018", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-MIGRATION-CRITERIA.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "DOCUMENTATION-DEBT-CLASSIFICATION.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-019 — Canonical Promotion Threshold

## Status

PROPOSED. This ADR is not approved and establishes no active promotion authority.

## Context

Legacy documents vary in authority, age, quality, ownership, and operational sensitivity. Schema conformance alone cannot determine whether content should become canonical.

## Problem

Promotion needs a uniform threshold that prevents artificial metadata, stale authority, unresolved conflict, secrets, implicit production assumptions, and isolated graph nodes.

## Alternatives Considered

1. Promote every legacy document.
2. Promote only through unstructured manual approval.
3. Promote through metadata, authority, content, relation, evidence, and validation thresholds.
4. Archive most legacy documents and recreate new canonical content.

## Proposed Decision

Require threshold-based promotion.

A document is promotable only when:

- complete Schema 1.0.0 metadata is evidence-backed;
- identity scope is registered and immutable;
- ownership, authority, lifecycle, maturity, and review roles are valid;
- content has current value and no unresolved conflict;
- no sensitive value or implicit operational enablement exists;
- every relationship resolves and the document is not orphaned;
- baseline and exception changes are exact;
- validation, generation, evidence, CI, and build gates pass.

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

## Future Impacts

Metrics can measure throughput and deferral without lowering the threshold. Future schema versions may add capabilities only through separate governance.

## Related Documents

- `DOC-STD-002`
- `DOC-STD-003`
- `DOC-PLAY-001`
- `DOC-SPEC-005`

## Supersession Policy

If approved, this ADR becomes immutable. Threshold changes require a new superseding ADR.

## Open Questions

- Which authority registers portfolio-wide scope codes after the initial set.
- Whether specific regulated domains require additional reviewers.

## References

- ADR-005 metadata schema architecture.
- ADR-011 required metadata.
- ADR-017 logical authority versus physical location.
