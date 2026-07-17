---
schema_version: "1.0.0"
document_id: "DOC-RPT-116"
aliases: []
document_type: "REPORT"
title: "Public Source Discovery Audit"
summary: "Audits public source discovery, generator participation, and excluded repository surfaces for DOCUMENTATION-REORG-REQ-06."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Public Source Discovery Audit

## Discovery Findings

| Surface | Public source? | Public navigation? | Generated inventory? | Decision |
| --- | --- | --- | --- | --- |
| `docs/` | yes | yes, through VitePress config | yes | keep as only public source |
| `docs/.vitepress/cache/` | no | no | no | ignored build cache |
| `docs/.vitepress/dist/` | no | no | no | ignored build output |
| `.knowledge/` | no | no | yes | internal knowledge source |
| `.instructions/` | no | no | yes | internal/control source |
| `legacy/` | no | no | yes | legacy/historical source |
| `.rag/` | no product-doc role | no | yes | governance/generated reports |
| `institutional-disclosure/` | no | no | excluded | private disclosure |
| `requests/` | no | no | excluded or controlled | request records |
| `evidence/` | no | no | no Markdown corpus | generated evidence snapshots |

## Generator Exclusion Review

REQ-06 does not change generator logic. It records the current rule that public
source behavior is controlled by VitePress `docs/`, while generator inventory
may include non-public governed surfaces for traceability and audit.

## Discovery Decision

Discovery is hardened by explicit documentation and stale-boundary correction.
No generator discovery behavior is changed in this request.

