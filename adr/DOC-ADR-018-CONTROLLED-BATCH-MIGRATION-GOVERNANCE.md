---
schema_version: "1.0.0"
document_id: "DOC-ADR-018"
aliases: []
document_type: "ADR"
title: "Controlled Batch Migration Governance"
summary: "Proposes evidence-backed, atomic documentation migration batches as the required adoption unit."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-004"}, {type: "DEPENDS_ON", target: "DOC-ADR-016"}, {type: "RELATES_TO", target: "DOC-ADR-019"}, {type: "RELATES_TO", target: "DOC-ADR-020"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-02"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-016", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-MIGRATION-PLAYBOOK.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "DOCUMENTATION-EPIC-02-PLAN.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-018 — Controlled Batch Migration Governance

## Status

PROPOSED. This ADR is not approved and authorizes no migration.

## Context

Axodus has 633 legacy documents governed by baseline and exceptions. Individual ad hoc migration cannot reliably preserve evidence, registry synchronization, deterministic generation, cross-core review, or rollback boundaries.

## Problem

The adoption process needs a repeatable unit that combines content review, identity, metadata, baseline, exceptions, generated artifacts, validation, evidence, CI, and rollback.

## Alternatives Considered

1. Migrate documents individually without batch governance.
2. Migrate entire cores in one operation.
3. Group only by document type.
4. Use bounded controlled batches with frozen candidates and explicit evidence.

## Proposed Decision

Use controlled migration batches as the required change unit.

Each batch will:

- freeze primary and alternate candidates;
- assign owners, reviewers, IDs, and dispositions;
- preserve semantic content;
- update baseline and exceptions only for successful candidates;
- produce batch and evidence reports;
- regenerate derived artifacts exclusively through Generator;
- pass deterministic, CI, evidence, and build gates;
- roll back only as a complete change set.

## Rationale

Bounded batches provide measurable throughput while preserving review quality, deterministic artifacts, and atomic governance evidence. They reduce manual coordination risk without requiring framework changes.

## Trade-offs

- More ceremony than individual edits.
- Larger reviewed change sets.
- Requires candidate ranking and cross-core scheduling.
- Provides stronger auditability, rollback, and metric integrity.

## Consequences

- No broad legacy migration may occur outside an approved batch.
- Baseline and exception changes remain coupled to successful promotions.
- Batch IDs, evidence, and immutable document IDs become audit records.
- Failed candidates remain legacy without artificial metadata.

## Future Impacts

The approach supports larger batches after measured success. Automation may assist selection and reporting but may not make authority or promotion decisions.

## Related Documents

- `DOC-ROAD-001`
- `DOC-PLAY-001`
- `DOC-STD-002`
- `DOC-SPEC-005`

## Supersession Policy

If approved, this ADR becomes immutable. Material changes require a new superseding ADR.

## Open Questions

- Final reviewer capacity per concurrent batch.
- Maximum safe batch size after the first three batches.

## References

- DOCUMENTATION-EPIC-01 closure baseline.
- ADR-004 cross-document traceability.
- ADR-016 documentation automation.
