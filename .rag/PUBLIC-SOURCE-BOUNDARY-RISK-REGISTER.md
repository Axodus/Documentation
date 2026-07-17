---
schema_version: "1.0.0"
document_id: "DOC-RPT-118"
aliases: []
document_type: "REPORT"
title: "Public Source Boundary Risk Register"
summary: "Records public source boundary risks and mitigations after DOCUMENTATION-REORG-REQ-06."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-06"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-014", "DOC-ADR-017", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/PUBLIC-SOURCE-BOUNDARY-ENFORCEMENT-REPORT.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Public Source Boundary Risk Register

## Risk Register

| Risk ID | Risk | Level | Mitigation | Status |
| --- | --- | --- | --- | --- |
| `PUBSRC-RISK-0001` | Repository visibility mistaken for publication approval | HIGH | Boundary report distinguishes `docs/`, generated inventory, and publication authority | CONTROLLED |
| `PUBSRC-RISK-0002` | Stale `Documents/` path in public docs | MEDIUM | Updated to `legacy/` in public boundary prose | CLOSED |
| `PUBSRC-RISK-0003` | Knowledge packs mistaken for public docs | HIGH | `.knowledge/` remains explicitly non-public documentation | CONTROLLED |
| `PUBSRC-RISK-0004` | Private disclosure linked from public nav | CRITICAL | Navigation audit confirms no such links | CONTROLLED |
| `PUBSRC-RISK-0005` | Requests treated as public artifacts | HIGH | Requests remain excluded from public navigation | CONTROLLED |
| `PUBSRC-RISK-0006` | Generated reports treated as product docs | MEDIUM | Governance namespace remains separate from VitePress nav | CONTROLLED |

## Final Assessment

Public source boundaries are hardened without expanding public disclosure,
changing navigation, moving directories, or changing generator logic.

