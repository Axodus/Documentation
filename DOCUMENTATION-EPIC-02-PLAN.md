---
schema_version: "1.0.0"
document_id: "DOC-ROAD-001"
aliases: []
document_type: "ROADMAP"
title: "Documentation Epic 02 Adoption Plan"
summary: "Defines the governed execution sequence, hard metrics, migration batches, and closure gates for DOCUMENTATION-EPIC-02."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.ADOPTION"
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
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "DOC-RPT-002"}, {type: "RELATES_TO", target: "DOC-ADR-018"}, {type: "RELATES_TO", target: "DOC-ADR-019"}, {type: "RELATES_TO", target: "DOC-ADR-020"}, {type: "DOCUMENTS", target: "DOC-PLAY-001"}]
related_epics: ["DOCUMENTATION-EPIC-01", "DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-02"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-EPIC-01-CLOSURE-REPORT.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Epic 02 Adoption Plan

## Executive Summary

DOCUMENTATION-EPIC-02 applies the governance foundation completed by DOCUMENTATION-EPIC-01. It does not redesign Schema 1.0.0, reopen ADRs 001–017, or introduce operational execution.

The epic will migrate at least 60 legacy documents through three controlled batches of 20. Closure requires all quantitative and qualitative gates defined here.

## Accepted Baseline

| Metric | EPIC-01 closure baseline |
|---|---:|
| Source documents | 687 |
| Canonical documents | 40 |
| Legacy documents | 633 |
| Templates | 14 |
| Canonical metadata field coverage | 7.86% |
| Baseline entries | 633 |
| Active exceptions | 633 |
| Graph relationships | 89 |
| Graph orphans | 647 |
| Canonical orphans | 0 |
| Unresolved references | 0 |

All 633 legacy exceptions use `MIGRATE_ON_CHANGE` and expire on 2026-10-01. Their governed disposition is a P0 concern.

## Mandatory Closure Gates

- Canonical documents MUST be at least 100.
- Legacy documents MUST be at most 573.
- Canonical metadata field coverage MUST be at least 15%.
- At least 60 legacy documents MUST leave the baseline through reviewed promotion or archival.
- All 16 public nuclei MUST reach `ADOPTED_PARTIAL` or higher.
- Validation errors, warnings, unresolved references, canonical orphans, and generator drift MUST remain zero.
- Baseline and exception registry counts and paths MUST remain synchronized.
- Every production, financial, provider, custody, signing, contract, API, and database gate MUST remain closed.

## Governance Gates

No migration batch may begin until these proposals are approved:

- `DOC-ADR-018` — Controlled Batch Migration Governance.
- `DOC-ADR-019` — Canonical Promotion Threshold.
- `DOC-ADR-020` — Legacy Archival Policy.

Approval belongs to REQ-02. REQ-01 does not approve these decisions.

## Work Breakdown

| Request | Deliverable |
|---|---|
| REQ-01 | Plan, playbook, criteria, classification, metrics, ADR proposals |
| REQ-02 | Review and approval of ADRs 018–020 and operational contracts |
| REQ-03 | Refined legacy inventory and classification |
| REQ-04 | Core adoption matrix and Batch 01 freeze |
| REQ-05 | Migration Batch 01 |
| REQ-06 | Migration Batch 02 |
| REQ-07 | Migration Batch 03 |
| REQ-08 | Traceability and graph enrichment |
| REQ-09 | Validation and evidence audit |
| REQ-10 | Closure report |

## Migration Batches

Each batch MUST finish with 20 successfully canonicalized legacy documents. Primary and alternate candidates are frozen before editing. A rejected document is deferred and replaced by the next pre-ranked eligible candidate; it is never mechanically promoted.

### Batch 01

Primary candidates:

- All 16 `docs/<core>/overview.md` pages.
- `docs/overview/ecosystem-overview.md`.
- `docs/overview/core-principles.md`.
- `docs/overview/documentation-status.md`.
- `docs/overview/risk-notices.md`.

Alternates, in order:

1. `docs/overview/constitutional-model.md`
2. `docs/overview/documentation-standards.md`
3. `docs/overview/product-map.md`
4. `docs/overview/terminology.md`

### Batch 02

Select the 20 highest-ranked eligible public documents. Prioritize governance, security, accountability, risk, and public navigation. Include at least four nuclei and no more than five documents per nucleus.

### Batch 03

Select the next 20 eligible public documents using the same scoring and distribution limits. Prioritize the public nuclei with the greatest remaining debt.

## Scope Registration

REQ-02 MUST register these initial stable ID scopes before allocation:

`ACCOUNT`, `ACADEMY`, `ACS`, `BBA`, `BUSINESS`, `CORE`, `DEFI`, `DEX`, `GOV`, `LOTTERY`, `MARKET`, `MINING`, `RUNTIME`, `SEC`, `TOKEN`, `TRADING`, and `TREASURY`.

Batch 01 overview guides begin at sequence `001` within each `(scope, GDE)` pair. Portfolio overview guides use `CORE-GDE-001` onward. Registration does not transfer logical authority.

## Batch Atomicity

Each accepted migration change set contains:

1. Canonical Front Matter and reviewed body preservation.
2. Semantic relationships.
3. Baseline path removal.
4. Matching exception removal.
5. Batch report and evidence.
6. Generator-derived artifacts.
7. Validation, deterministic, CI, evidence, and build results.

Rollback is an integral Git revert of the batch. Allocated or published IDs remain unavailable after rollback.

## Traceability Strategy

Semantic graph edges connect canonical documents only. Epic, requirement, and core dimensions remain in `related_*` metadata. Owner, lifecycle, authority, maturity, and gate impact remain metadata/manifest attributes rather than artificial graph nodes.

Every promoted document MUST have an incoming or outgoing semantic edge and MUST resolve through the generated master index.

## Evidence and Security

Batch evidence records paths, IDs, hashes, classifications, decisions, counts, and safe diagnostics. It MUST NOT copy document bodies, credentials, tokens, keys, mnemonic phrases, or other confidential values.

A suspected secret blocks promotion and is reported only as a redacted occurrence for secure remediation.

## Exit Criteria

REQ-10 may close the epic only after all mandatory metrics, three batches, adoption status, validation, deterministic generation, evidence, CI, build, and gate-preservation checks pass.

## Execution Boundary

This plan is documentation-adoption-only. It authorizes no production, publication, provider, financial, wallet, contract, database, credential, or runtime operation.
