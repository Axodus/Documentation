---
schema_version: "1.0.0"
document_id: "DOC-RPT-112"
aliases: []
document_type: "REPORT"
title: "Root Consolidation Risk Review"
summary: "Reviews root directory consolidation risks, including authority, registry, generated inventory, public boundary, and rollback concerns."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.REPOSITORY_REORGANIZATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-04"]
related_requirements: ["DOCUMENTATION-REORG-REQ-05"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/ROOT-CONSOLIDATION-CANDIDATE-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Root Consolidation Risk Review

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-05
Risk Review: PLANNING_ONLY
Physical Mutation: NOT_AUTHORIZED
Authority Change: NOT_AUTHORIZED
```

## Risk Register

| Risk ID | Risk | Level | Evidence | Mitigation | Status |
| --- | --- | --- | --- | --- | --- |
| `ROOT-RISK-0001` | Sparse directory treated as redundant | MEDIUM | Thirteen root collections have one README each | Require purpose and authority review before merge | CONTROLLED |
| `ROOT-RISK-0002` | Registry path churn without semantic gain | MEDIUM | Sparse README files are in exception/disposition inventory | Do not release physical moves in REQ-05 | CONTROLLED |
| `ROOT-RISK-0003` | Public-source boundary confusion | HIGH | `docs/` is sole VitePress source but generated inventory includes non-`docs/` roots | Defer to REQ-06 boundary hardening | OPEN |
| `ROOT-RISK-0004` | Knowledge move smuggled into root consolidation | HIGH | `.knowledge/` has a separate REQ-04 decision | Explicitly exclude `.knowledge/` | CONTROLLED |
| `ROOT-RISK-0005` | Private disclosure mutation | CRITICAL | `institutional-disclosure/` is private Track B/C surface | Explicitly exclude from Sprint 05 consolidation | CONTROLLED |
| `ROOT-RISK-0006` | Request artifact mutation | HIGH | `requests/` contains request/sprint records | Explicitly exclude from consolidation | CONTROLLED |
| `ROOT-RISK-0007` | Evidence snapshot breakage | MEDIUM | `evidence/` is consumed by evidence tooling and CI | Keep as generated evidence surface | CONTROLLED |
| `ROOT-RISK-0008` | Documentation namespace churn | HIGH | `.rag/` contains many canonical reports and generated artifacts | Reject rename or merge | CONTROLLED |
| `ROOT-RISK-0009` | Authority change by move | HIGH | Directory names encode document-type authority expectations | No move without explicit owner approval | CONTROLLED |
| `ROOT-RISK-0010` | REQ-07 forced move without released candidates | MEDIUM | REQ-05 releases no physical move candidates | REQ-07 must record no-op or only execute separately released boundary-safe tasks | OPEN |

## Boundary Assessment

| Boundary | Status |
| --- | --- |
| `docs/` public source | Unchanged; REQ-06 hardening pending |
| `.knowledge/` | Excluded |
| `institutional-disclosure/` | Excluded |
| `requests/` | Excluded |
| `legacy/` | Excluded |
| Institutional repository | Not touched |
| Generated outputs | Not regenerated in REQ-05 |

## Final Assessment

No root consolidation candidate meets the evidence threshold for immediate
low-risk physical execution. The correct risk posture is to freeze a review
backlog and harden the public boundary before any root move is attempted.

