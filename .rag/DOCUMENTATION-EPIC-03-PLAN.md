---
schema_version: "1.0.0"
document_id: "DOC-ROAD-010"
aliases: []
document_type: "ROADMAP"
title: "Documentation Epic 03 Plan"
summary: "Defines the governed sequence for exception expiry remediation, traceability enrichment, continued adoption, and target-state criteria."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-03"
last_updated: "2026-07-07"
last_reviewed: "2026-07-07"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-RPT-035"}, {type: "DEPENDS_ON", target: "DOC-ROAD-009"}, {type: "RELATES_TO", target: "DOC-ADR-021"}, {type: "RELATES_TO", target: "DOC-ADR-022"}, {type: "RELATES_TO", target: "DOC-ADR-023"}]
related_epics: ["DOCUMENTATION-EPIC-02", "DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01", "AXODUS-DOCUMENTATION-EPIC-03-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020", "DOC-ADR-021", "DOC-ADR-022", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-EPIC-02-COMPLETION-REPORT.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Epic 03 Plan

## Executive Summary

DOCUMENTATION-EPIC-03 remediates the time-bound risk created by 573
`MIGRATE_ON_CHANGE` exceptions, improves shallow canonical traceability,
continues controlled adoption, and defines a measurable target state for public
cores.

The EPIC-01 framework and EPIC-02 migration controls remain authoritative.
This plan does not redesign the framework, modify the exception registry, or
authorize migration. ADR-021 through ADR-023 are governed separately by REQ-03.

## Accepted Baseline

| Metric | EPIC-03 baseline |
|---|---:|
| Documents | 743 |
| Canonical documents | 156 |
| Legacy documents | 573 |
| Templates | 14 |
| Metadata coverage | 22.88% |
| Relationships | 287 |
| Baseline entries | 573 |
| Active exceptions | 573 |
| Prior migrations | 60 |
| Completed batches | 3 |
| Canonical errors and warnings | 0 |
| Canonical orphans | 0 |
| Broken references | 0 |
| Generator drift | 0 |

All remaining exceptions expire on `2026-10-01T00:00:00Z`. Every public core
is `ADOPTED_PARTIAL`; `CORE` remains `GOVERNANCE_RESERVED`.

## Objectives and Exit Criteria

- Assign an explicit evidence-backed disposition to all 573 exceptions.
- Leave zero exception expired without a governed decision.
- Migrate at least 60 additional legacy documents through three batches of 20.
- Reduce legacy, baseline, and exception populations to 513 or fewer.
- Reach at least 216 canonical documents and 30% metadata coverage.
- Reduce default-overview-only canonical documents from 40 to at most 10.
- Define and approve multi-dimensional `ADOPTED_TARGET` criteria.
- Complete navigation and documentation UX inspection without publishing.
- Preserve zero errors, warnings, canonical orphans, broken references, and
  Generator drift.

## Governed Sequence

| Request | Purpose | Mutation boundary |
|---|---|---|
| REQ-01 | Planning, disposition model, metrics, risk register, ADR proposals | Planning artifacts only |
| REQ-02 | Exception disposition inventory | Classification evidence only |
| REQ-03 | Traceability depth baseline | Reporting only |
| REQ-04 | ADOPTED_TARGET criteria approval | Governance artifacts only |
| REQ-05 | Batch 04 freeze and execution | Exactly 20 approved migrations |
| REQ-06 | Batch 04 acceptance and Batch 05 planning | Audit and planning |
| REQ-07 | Batch 05 freeze and execution | Exactly 20 approved migrations |
| REQ-08 | Batch 05 acceptance and Batch 06 planning | Audit and planning |
| REQ-09 | Batch 06 freeze and execution | Exactly 20 approved migrations |
| REQ-10 | Publication and navigation inspection | Read-only inspection |
| REQ-11 | Final validation and closure | Closure artifacts only |

## Governance Gates

The following governance decisions became normative through
`AXODUS-DOCUMENTATION-EPIC-03-REQ-03`:

- `DOC-ADR-021` — Exception Expiry Disposition Governance.
- `DOC-ADR-022` — Traceability Depth Quality Model.
- `DOC-ADR-023` — ADOPTED_TARGET Criteria.

REQ-01 created proposals only. REQ-03 approved those ADRs and updated the
approved ADR index. Approval does not apply dispositions, mutate registries,
add traceability edges, assign `ADOPTED_TARGET`, or authorize migration.

## Exception Strategy

Every exception receives one primary decision disposition and supporting
evidence. A disposition does not itself migrate, archive, merge, revoke, or
renew an exception. Registry mutation requires a separately authorized request.

Renewals are risk-capped: P0/P1 exceptions receive at most 90 additional days;
lower-priority exceptions receive at most 180. Security, authority, and
defer-with-risk decisions require a governed temporary extension when their
review crosses the current expiry.

## Traceability Strategy

Quality is based on semantic relevance, not raw edge count. Enrichment uses
only resolvable canonical IDs and evidence-backed relations to applicable ADRs,
policies, requirements, guides, risk notices, governance documents, security
documents, and core overviews.

Owner, lifecycle, authority, maturity, and gate impact remain metadata. They
must not become artificial graph edges.

## Continued Adoption

Batches 04–06 each migrate exactly 20 approved `docs/**/*.md` candidates.
Every batch freezes primary and alternate candidates, reserves final IDs only
after individual approval, preserves meaning, passes security and semantic
review, updates synchronized registries only for successful migrations, and
uses the Generator for derived artifacts.

## Publication and UX Inspection

Inspection verifies landing pages, navigation, direct routes, public links,
core reachability, discoverability, VitePress build behavior, and the known
bundle warning. It is read-only and does not deploy, publish, or imply
production readiness.

## Execution Boundary

Production, execution, publication, provider execution, credentials, financial
operations, wallet signing, contract writes, production APIs, and production
databases remain disabled.
