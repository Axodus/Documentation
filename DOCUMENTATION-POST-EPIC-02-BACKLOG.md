---
schema_version: "1.0.0"
document_id: "DOC-ROAD-008"
aliases: []
document_type: "ROADMAP"
title: "Documentation Post Epic 02 Backlog"
summary: "Records final validation, closure, or post-EPIC planning for DOCUMENTATION-EPIC-02."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.EPIC_02.CLOSURE"
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
relationships: [{type: "DEPENDS_ON", target: "DOC-RPT-035"}, {type: "RELATES_TO", target: "DOC-ROAD-009"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-10"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Post Epic 02 Backlog

## Prioritized Backlog

| Priority | Item | Rationale | Risk | Owner role | Suggested work |
|---|---|---|---|---|---|
| P0 | MIGRATE_ON_CHANGE expiry remediation | 573 exceptions expire 2026-10-01 | Invalid exception posture | Documentation Coordinator | EPIC-03 |
| P0 | Remaining legacy debt | 573 documents remain | Persistent authority ambiguity | Axodus Documentation Core | Continued migration |
| P1 | Default-overview-only enrichment | 40 shallow relations identified | Weak traceability | Documentation Architecture Reviewer | Traceability workstream |
| P1 | Relation depth improvement | Degree-one documents remain | Low graph resilience | Documentation Architecture Reviewer | Graph enrichment |
| P1 | ADOPTED_TARGET criteria | Partial adoption is not completion | Overstated maturity | Portfolio Documentation Reviewer | Governance request |
| P1 | Landing/navigation visual inspection | Build is not visual acceptance | UX regression | Documentation Maintainer | UX audit |
| P1 | Pin GitHub Actions by immutable SHA | Mutable action tags | Supply-chain risk | CI Maintainer | CI hardening |
| P2 | Filesystem-safe snapshot IDs | Improve portability | Cross-platform path failures | Evidence Maintainer | Evidence 2.0 |
| P2 | Workflow parallelization | Reduce validation latency | Slow feedback | CI Maintainer | CI optimization |
| P2 | Automatic relation proposals | Assist evidence-backed enrichment | Speculative edges | Generator Maintainer | Proposal-only tooling |
| P2 | Continued migration beyond 60 | Increase adoption coverage | Debt stagnation | Axodus Documentation Core | Migration waves |
