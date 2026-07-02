---
schema_version: "1.0.0"
document_id: "DOC-RPT-003"
aliases: []
document_type: "REPORT"
title: "Documentation Legacy Debt Report"
summary: "Reports the refined, evidence-bounded inventory of 633 legacy documents for DOCUMENTATION-EPIC-02."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.DEBT"
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
relationships: [{type: "DEPENDS_ON", target: "DOC-STD-003"}, {type: "RELATES_TO", target: "DOC-SPEC-005"}, {type: "RELATES_TO", target: "DOC-RPT-004"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Legacy Debt Report

## Purpose

This report refines the legacy inventory without changing any legacy source, baseline entry, exception, or migration identity.

## Confirmed Baseline

| Metric | Detected |
|---|---:|
| Repository documents | 695 |
| Canonical documents | 48 |
| Legacy documents | 633 |
| Baseline entries | 633 |
| Active exceptions | 633 |
| Declared relationships | 123 |
| Canonical orphans | 0 |
| Unresolved references | 0 |

The detected baseline equals the REQ-03 expected baseline. No legacy-to-canonical promotion occurred.

## Domain Distribution

| Domain | Expected | Detected | Delta | Batch 01–03 eligibility |
|---|---:|---:|---:|---|
| `docs/` | 247 | 247 | 0 | Eligible only after promotion review |
| `.knowledge/` | 285 | 285 | 0 | Excluded |
| `.instructions/` | 59 | 59 | 0 | Excluded; evidence/control boundary |
| `other/historical` | 42 | 42 | 0 | Excluded |

The first three batches may select only `docs/**/*.md`.

## Public Core Distribution

Counts combine `docs/<core>/` and the corresponding `.knowledge/<core>/` where present.

| Public core | Legacy |
|---|---:|
| Accountability | 5 |
| Academy | 24 |
| ACS | 31 |
| BBA Agency | 33 |
| Business | 31 |
| DeFi | 39 |
| DEX | 43 |
| Governance | 24 |
| Lottery | 43 |
| Marketplace | 45 |
| Mining | 47 |
| Runtime | 31 |
| Security | 7 |
| Tokenomics | 33 |
| Trading | 32 |
| Treasury | 33 |
| Central, transversal, or unmapped | 132 |
| Total | 633 |

## Document Type Coverage

All 633 legacy records lack canonical Schema 1.0.0 `document_type`; their official type is therefore `UNSPECIFIED`. Filename or directory shape is not promoted to canonical type without review. Batch 01 candidates are separately proposed as `GUIDE`/`GDE`.

## Classification Summary

| Primary classification | Count | Evidence |
|---|---:|---|
| `CONFLICTING` | 0 | No conflict confirmed by this non-semantic inventory |
| `DUPLICATED` | 0 | No SHA-256-identical baseline groups |
| `STALE` | 0 | No approved staleness decision; dated content requires review |
| `ARCHIVE_CANDIDATE` | 0 | Historical value and authority not yet reviewed |
| `EXCEPTION_REQUIRED` | 59 | `.instructions/` control/evidence boundary |
| `NEEDS_REVIEW` | 574 | Evidence is insufficient for a lower-priority class |
| `NEEDS_METADATA` | 0 | Content and authority not yet jointly verified |
| `PROMOTE_READY` | 0 | Reviewer and approver evidence not established |

Zero confirmed conflicts, duplicates, stale records, or archive candidates does not assert absence. It records that REQ-03 did not have sufficient evidence to assign those higher-priority classes.

## Secondary Flags

Flags are non-exclusive routing indicators:

| Flag | Count | Evidence rule |
|---|---:|---|
| `urgency` | 633 | Active exceptions expire on 2026-10-01 |
| `public_exposure` | 247 | Path under `docs/` |
| `authority_required` | 574 | Primary class is `NEEDS_REVIEW` |
| `cross_core_dependency` | 14 | `docs/overview/` or `.knowledge/core/` |
| `security_sensitive` | 381 | Sensitive public/knowledge core or `.instructions/` boundary |
| `risk` | 441 | Risk/governance/operational core or `.instructions/` boundary |

These are review-routing flags, not findings of exposed secrets or unsafe behavior.

## Exposure and Review

| Exposure | Count |
|---|---:|
| Public (`docs/`) | 247 |
| Internal/control (`.knowledge/` and `.instructions/`) | 344 |
| Other/historical | 42 |

- Authority review required: 574.
- Security-sensitive routing minimum: 381.
- Batch 01 eligible after this request: 0.
- Excluded from Batches 01–03 by path: 386.

## Exception Horizon

All 633 `MIGRATE_ON_CHANGE` exceptions expire on `2026-10-01`.

```text
Priority: P0
Reference date: 2026-07-02
Expiry horizon: 91 days
```

## Safety Boundary

No credential, token, key, connection string, endpoint secret, source body, or evidence payload was copied into this report.
