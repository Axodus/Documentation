---
schema_version: "1.0.0"
document_id: "DOC-REF-009"
aliases: []
document_type: "REFERENCE"
title: "Documentation Epic 03 Risk Register"
summary: "Tracks governance, migration, traceability, security, determinism, and gate risks for EPIC-03."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.RISK"
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-010"}, {type: "RELATES_TO", target: "DOC-ADR-021"}, {type: "RELATES_TO", target: "DOC-ADR-022"}, {type: "RELATES_TO", target: "DOC-ADR-023"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020", "DOC-ADR-021", "DOC-ADR-022", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-POST-EPIC-02-BACKLOG.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Epic 03 Risk Register

## Active Risks

| ID | Priority | Risk | Impact | Control | Owner role |
|---|---|---|---|---|---|
| E3-RISK-001 | P0 | 573 exceptions expire without decision | Governance failure | Complete disposition inventory before expiry | Documentation Coordinator |
| E3-RISK-002 | P0 | Blanket renewal perpetuates debt | Exception mechanism loses credibility | Evidence and risk-capped renewal | Portfolio Documentation Reviewer |
| E3-RISK-003 | P0 | Secret exposure during legacy review | Security incident | Redacted findings and blocking security review | Security Reviewer |
| E3-RISK-004 | P1 | Mechanical migration to meet counts | Incorrect canonical authority | ADR-018/019 gates and semantic diff | Documentation Architecture Reviewer |
| E3-RISK-005 | P1 | Artificial traceability edges | Misleading graph | Evidence-backed relation criteria | Documentation Architecture Reviewer |
| E3-RISK-006 | P1 | ADOPTED_TARGET overstates maturity | Misleading adoption status | Multi-dimensional approval criteria | Portfolio Documentation Reviewer |
| E3-RISK-007 | P1 | Baseline and exception divergence | Untracked legacy deviation | Exact path reconciliation | Validation Framework Maintainer |
| E3-RISK-008 | P1 | ID collision or reuse | Broken identity contract | Monotonic reservation and no-reuse tests | Documentation Maintainer |
| E3-RISK-009 | P1 | Generator nondeterminism | Unstable CI and audit results | Two byte-identical runs and drift check | Generator Maintainer |
| E3-RISK-010 | P1 | Navigation defects remain unseen | Poor documentation UX | Visual inspection and route checklist | Documentation Maintainer |
| E3-RISK-011 | P1 | Framework redesign through remediation | Architectural scope creep | Proposal and approval boundaries | Documentation Coordinator |
| E3-RISK-012 | P0 | Operational gates are implied or opened | Production or financial exposure | Mandatory preservation statement and tests | Documentation Coordinator |

## Escalation Rules

- P0 findings block the affected disposition or migration until reviewed.
- Security findings are recorded only by category and decision.
- A registry mismatch, exposed secret, validation error, warning, unresolved
  reference, canonical orphan, or Generator drift blocks acceptance.
- Any production, provider, financial, signing, contract, API, or database
  action is outside EPIC-03 and blocks the request.

## Review Cadence

Review this register at every EPIC-03 request, after each migration batch, and
whenever exception expiry, security, authority, or gate state changes. REQ-01
records risks only and performs no remediation action.
