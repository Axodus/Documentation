---
schema_version: "1.0.0"
document_id: "DOC-RPT-114"
aliases: []
document_type: "REPORT"
title: "Root Consolidation Plan"
summary: "Freezes the DOCUMENTATION-REORG-REQ-05 root consolidation decision and prepares the handoff to REQ-06 and REQ-07."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/ROOT-CONSOLIDATION-CANDIDATE-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/ROOT-CONSOLIDATION-RISK-REVIEW.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Root Consolidation Plan

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-05
Final State: PASS_WITH_ROOT_CONSOLIDATION_PLAN_FROZEN
Physical Consolidation: NOT_PERFORMED
Public Boundary Handoff: REQ-06
Low-Risk Execution Handoff: REQ-07
```

## Planning Decision

The repository root has remaining sparse canonical collections, but no physical
root move is released as low-risk in this request.

The plan freezes three outcomes:

1. Keep active roots such as `adr/`, `governance/`, `documentation/`, `docs/`,
   `templates/`, `tools/`, `evidence/`, `operations/`, and `legacy/`.
2. Preserve `.knowledge/`, `institutional-disclosure/`, and `requests/` outside
   low-risk root consolidation.
3. Treat one-file canonical collection roots as review backlog, not immediate
   move candidates.

## REQ-06 Handoff

REQ-06 should harden the `docs/` boundary and may update rules, reports,
validation evidence, and generated outputs as authorized. It should not move
directories.

## REQ-07 Handoff

REQ-07 may execute only candidates released by this plan. Since REQ-05 releases
zero physical directory moves, REQ-07 must either:

- record that no low-risk physical consolidation candidate was eligible; or
- execute only a separately authorized non-structural cleanup that preserves
  all root paths and authority boundaries.

REQ-07 must not process `.knowledge/`, Institutional, `institutional-disclosure/`,
`requests/`, or authority-changing moves.

## Rollback Model

Rollback for REQ-05 is limited to removing these planning reports and restoring
generated outputs after the next generator write. No source directory rollback
is required because no physical mutation occurred.

## Gate Preservation

This request inventoried remaining root directories, classified them, and froze
root consolidation candidates only. It did not move, rename, split, delete, or
rewrite repository content; did not change authority, schema, relationships,
generator logic, public navigation, Institutional sources, private disclosure,
production, or financial gates.

## Final Result

`PASS_WITH_ROOT_CONSOLIDATION_PLAN_FROZEN`

