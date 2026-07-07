---
schema_version: "1.0.0"
document_id: "DOC-ADR-023"
aliases: []
document_type: "ADR"
title: "ADOPTED_TARGET Criteria"
summary: "Approves multi-dimensional criteria for determining when a public core reaches target documentation adoption."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.ADOPTION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-03"
last_updated: "2026-07-07"
last_reviewed: "2026-07-07"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-SPEC-005"}, {type: "DEPENDS_ON", target: "DOC-REF-005"}, {type: "DOCUMENTS", target: "DOC-SPEC-009"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01", "AXODUS-DOCUMENTATION-EPIC-03-REQ-03"]
related_adrs: ["DOC-ADR-002", "DOC-ADR-004", "DOC-ADR-011", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-ADOPTION-METRICS.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-CORE-ADOPTION-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-023 — ADOPTED_TARGET Criteria

## Status

APPROVED

## Approval Date

2026-07-07

## Context

All 16 public cores reached `ADOPTED_PARTIAL` during EPIC-02. The existing
metrics name `ADOPTED_TARGET`, but the repository does not define the complete,
measurable conditions for assigning it.

## Problem

Without formal criteria, target adoption could be assigned from document count
alone, applied inconsistently across cores, or confused with production
readiness.

## Alternatives Considered

1. Treat `ADOPTED_PARTIAL` as sufficient.
2. Define target adoption only by migrated-document count.
3. Define target adoption using coverage, required content, authority,
   traceability, exceptions, validation, and navigation.
4. Defer target adoption indefinitely.

## Adopted Solution

Define `ADOPTED_TARGET` as a multi-dimensional documentary state. A public core
qualifies only when all approved thresholds pass:

- minimum canonical coverage for its inventoried documentation;
- complete canonical overview;
- required governance, security, and risk documentation where applicable;
- complete owner, reviewer, and approver evidence;
- evidence-backed semantic depth and no overview-only dependency where a
  stronger relation is required;
- zero broken references and zero canonical orphans;
- zero expired exceptions without decision;
- navigation visibility and publication verification;
- zero canonical errors, warnings, and Generator drift.

The target state is per core, evidence-backed, and revocable when its criteria
cease to hold. It never represents production, security, regulatory, or
financial readiness.

## Justification

A multi-dimensional model prevents inflated adoption claims and reflects the
quality, authority, discoverability, and governance characteristics needed for
durable documentation.

## Trade-offs

- Different cores may reach target status at different times.
- Applicability of required document classes needs evidence.
- Target status requires periodic reassessment.
- Visual inspection introduces a reviewed manual evidence step.

## Future Impacts

Approval would require a criteria specification, target matrix, assessment
evidence, status transition rules, review cadence, and tests preventing
premature escalation.

## Gate Preservation

`ADOPTED_TARGET` is documentation governance only. It must never be interpreted
as permission to publish, deploy, operate providers, use credentials, execute
financial activity, sign, write contracts, or access production systems.
