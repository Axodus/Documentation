---
schema_version: "1.0.0"
document_id: "DOC-SPEC-009"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Epic 03 Adoption Metrics"
summary: "Defines deterministic measures and closure thresholds for EPIC-03 remediation, traceability, migration, and adoption."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.METRICS"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-03"
last_updated: "2026-07-03"
last_reviewed: "2026-07-03"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-010"}, {type: "DEPENDS_ON", target: "DOC-SPEC-005"}, {type: "RELATES_TO", target: "DOC-ADR-023"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-021", "DOC-ADR-022", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.graph.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Epic 03 Adoption Metrics

## Measurement Baseline

| Metric | Baseline | Closure target |
|---|---:|---:|
| Exceptions with explicit disposition | 0 of 573 | 573 of 573 |
| Expired exceptions without decision | 573 potential | 0 |
| Legacy documents | 573 | 513 or fewer |
| Additional migrations | 0 | 60 or more |
| Additional completed batches | 0 | 3 or more |
| Canonical documents | 156 | 216 or more |
| Metadata coverage | 22.88% | 30% or more |
| Default-overview-only documents | 40 | 10 or fewer |
| Public cores at least ADOPTED_PARTIAL | 16 | 16 |
| Broken references | 0 | 0 |
| Canonical orphans | 0 | 0 |
| Errors and warnings | 0 and 0 | 0 and 0 |
| Generator drift | 0 | 0 |

Planning artifacts may increase canonical counts and coverage, but they do not
count as legacy migrations or exception remediation.

## Sources of Truth

| Measure | Source |
|---|---|
| Document populations and coverage | Generated manifest and metadata report |
| Relationships and depth | Generated graph and relationship report |
| Legacy population | Baseline and Validation Framework inventory |
| Exception state and expiry | Exception registry and validation diagnostics |
| Migrations and IDs | Batch evidence and ID reservation records |
| Adoption status | Core Adoption Matrix |
| Determinism | Two byte-identical Generator runs and drift check |
| Public UX | Approved visual inspection report and route checklist |

## Disposition Metrics

- `disposition_coverage = decided_exceptions / active_exception_population`.
- Closure requires `573 / 573`.
- A disposition is counted only when required evidence, owner, approver, risk,
  and target date are present.
- An expired exception with a decision but no valid action or extension is
  reported separately and blocks closure.

## Traceability Metrics

Default-overview-only means a canonical document whose only declared semantic
target is its default core or portfolio overview. Improvement requires at least
one additional evidence-backed relation to a relevant canonical authority or
domain document.

Raw degree is diagnostic, not a quality gate by itself. Artificial or
speculative edges do not count and are validation defects.

## ADOPTED_TARGET Metrics

Target adoption will be evaluated per public core using the proposed
multi-dimensional model:

- canonical coverage;
- required overview, governance, security, and risk documents;
- ownership, reviewer, and approver completeness;
- resolved semantic depth;
- zero expired exceptions;
- zero errors, warnings, orphans, and broken references;
- navigation visibility and publication verification.

No core may be marked `ADOPTED_TARGET` until ADR-023 and its criteria are
approved.

## Reporting Cadence

Measure at REQ-01 baseline, after the disposition inventory, after each
migration batch, after traceability enrichment, after UX inspection, and at
closure. Every report records source hashes and distinguishes planning growth
from legacy promotion.
