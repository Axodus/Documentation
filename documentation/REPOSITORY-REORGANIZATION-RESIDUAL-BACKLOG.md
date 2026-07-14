---
schema_version: "1.0.0"
document_id: "DOC-RPT-124"
aliases: []
document_type: "REPORT"
title: "Repository Reorganization Residual Backlog"
summary: "Transfers residual repository topology, authority, and boundary backlog from EPIC-04 to the successor EPIC-05 workstream."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-08"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/ROOT-CONSOLIDATION-CANDIDATE-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/KNOWLEDGE-SURFACE-EXECUTION-FREEZE.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Reorganization Residual Backlog

## Backlog Summary

| Backlog group | Count | Target |
| --- | ---: | --- |
| `.knowledge/` execution candidates | 21 | EPIC-05 authority and boundary program |
| sparse root review candidates | 13 | EPIC-05 root collection review |
| public boundary monitoring | ongoing | documentation governance |
| legacy backlog | 591 legacy documents remain in corpus | successor canonicalization work |

## Residual Items

- Decide whether sparse root collections remain as roots or become canonical
  documents after authority review.
- Resolve `.knowledge/` authority and disclosure partitioning before any
  physical move.
- Preserve `docs/` as the only public source while reviewing public claims.
- Keep private disclosure and request records outside publication flows.

## Transfer Decision

Residual work is transferred to EPIC-05. No residual item blocks EPIC-04
closure.

