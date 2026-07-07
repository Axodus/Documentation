---
schema_version: "1.0.0"
document_id: "DOC-ADR-018"
aliases: []
document_type: "ADR"
title: "Controlled Batch Migration Governance"
summary: "Establishes evidence-backed, atomic documentation migration batches as the required adoption unit."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
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
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-016", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-MIGRATION-PLAYBOOK.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-EPIC-02-PLAN.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-018 — Controlled Batch Migration Governance

## Status

APPROVED

## Approval Date

2026-07-02

## Context

Axodus has 633 legacy documents governed by baseline and exceptions. Individual ad hoc migration cannot reliably preserve evidence, registry synchronization, deterministic generation, cross-core review, or rollback boundaries.

## Problem

The adoption process needs a repeatable unit that combines content review, identity, metadata, baseline, exceptions, generated artifacts, validation, evidence, CI, and rollback.

## Alternatives Considered

1. Migrate documents individually without batch governance.
2. Migrate entire cores in one operation.
3. Group only by document type.
4. Use bounded controlled batches with frozen candidates and explicit evidence.

## Adopted Solution

Use controlled migration batches with explicit evidence, validation, deterministic Generator execution, and rollback by full changeset reversal as the required migration unit.

Each batch will:

- freeze primary and alternate candidates;
- record source hashes, classification, owners, authority, reviewers, and risks;
- reserve immutable IDs without permitting rejected, rolled-back, or published IDs to be reused;
- preserve semantic content;
- update baseline and exceptions only for successful candidates;
- produce batch and evidence reports;
- regenerate derived artifacts exclusively through Generator;
- pass deterministic, CI, evidence, and build gates;
- roll back only as a complete change set.

## Batch Rules

- A batch has a declared target size, frozen primary candidates, and an ordered alternate list.
- Candidate substitution is allowed only from the frozen alternate list.
- A candidate that fails authority, content, security, metadata, relationship, or validation review is deferred; it is never mechanically promoted.
- Batch evidence records every primary, alternate, substitution, rejection, and final disposition.
- Batch 01 targets 20 successful promotions. Later batch sizes may change only through an approved request supported by measured reviewer capacity and quality results.

## Evidence and Validation Requirements

Every batch MUST record safe paths, hashes, classifications, identity reservations, owners, authority, review decisions, baseline impact, exception impact, generated-artifact hashes, and gate results. Evidence MUST NOT contain secret values or source bodies.

Every successful candidate and the repository as a whole MUST pass schema, semantic, relationship, baseline, exception, evidence, deterministic Generator, CI-compatible, and VitePress build checks with zero canonical errors, warnings, or unresolved references.

## Generator and Determinism Requirements

Generator write mode is the only authorized producer of derived artifacts. Two runs over identical repository state MUST be byte-identical, followed by zero drift in check mode. Manual derived-artifact edits are prohibited.

## Baseline and Exception Registry Impact

- Remove one baseline entry and its corresponding exception only after the candidate passes promotion review and validation.
- Failed, rejected, or deferred candidates retain their baseline and exception entries unchanged.
- Counts and normalized paths MUST remain synchronized.
- Batch evidence MUST reconcile every registry delta to one approved candidate.

## Rollback Model

Rollback is a full Git reversal of the complete batch changeset, including source edits, registry deltas, reports, and generated artifacts. Partial rollback is prohibited.

An ID that entered reviewed batch evidence remains reserved after rollback. Published IDs remain permanent. Neither category may be reused.

## Gate Preservation

Batch governance authorizes documentation adoption only. It does not authorize publication, deployment, credentials, providers, production APIs or databases, runtime changes, contract writes, wallet signing, treasury, settlement, payouts, billing, or financial execution.

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

The approach supports revised batch sizes after measured success and explicit approval. Automation may assist selection and reporting but may not make authority, classification, archival, or promotion decisions.

## Related Documents

- `DOC-ROAD-001`
- `DOC-PLAY-001`
- `DOC-STD-002`
- `DOC-SPEC-005`

## Supersession Policy

This approved ADR is immutable. Material changes require a new superseding ADR. Reviewer capacity and safe batch-size changes are operational approvals and may not silently alter this decision.

## References

- DOCUMENTATION-EPIC-01 closure baseline.
- ADR-004 cross-document traceability.
- ADR-016 documentation automation.
