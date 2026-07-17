---
schema_version: "1.0.0"
document_id: "DOC-RPT-100"
aliases: []
document_type: "REPORT"
title: "Legacy Directory Risk Review"
summary: "Assesses the execution risks, case-sensitivity edge cases, boundary controls, and rollback constraints for the Documents to legacy canonicalization."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-03"]
related_adrs: ["DOC-ADR-008", "DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/REPOSITORY-BOUNDARY-RISK-REVIEW.md", ref: "215d6aab0454ef4d8b183ccf98f8a6703c09cc41", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "SUMMARY.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Legacy Directory Risk Review

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-03
Risk Scope: Documents/ -> legacy/
Generator Write: AUTHORIZED_SCOPED
Schema Change: NOT_AUTHORIZED
Public Rewrite: NOT_AUTHORIZED
```

## Purpose

This review records the bounded risks that had to be controlled for the legacy
surface canonicalization.

## Risk Register

| Risk ID | Risk | Level | Control | Result |
|---|---|---|---|---|
| `LEGACY-RISK-001` | Namespace ambiguity between `Documents/` and `.rag/` | `HIGH` | execute bounded rename only; do not merge content | controlled |
| `LEGACY-RISK-002` | Mixed planning and historical semantics could hide canonical authority | `HIGH` | require per-file classification and block on any canonical evidence | controlled |
| `LEGACY-RISK-003` | Case-sensitivity mismatch between `Documents/**` and `documents/**` tracked paths | `HIGH` | converge the full surface to `legacy/**` and reconcile both path families | controlled |
| `LEGACY-RISK-004` | Registry path drift for the 15 governed entries | `HIGH` | update baseline, exception, and disposition source registries before generator write | controlled |
| `LEGACY-RISK-005` | Generated inventory drift inherited from REQ-01 could hide rename defects | `MEDIUM` | require exact seven-artifact predecessor drift before mutation, then close it with one full generation | controlled |
| `LEGACY-RISK-006` | Private, request, or Institutional boundaries could be touched accidentally | `CRITICAL` | no edits outside explicitly required path-dependent references; no private or Institutional mutations | controlled |
| `LEGACY-RISK-007` | Legacy document content could be rewritten during path cleanup | `HIGH` | move files only; forbid body edits; verify hashes | controlled |

## Case-Sensitivity Review

The execution surfaced a real case-mismatch artifact:

- fifteen tracked files used `Documents/**`;
- five tracked README files used `documents/**`;
- the filesystem materialized a single `Documents/` tree.

This was not treated as a blocker because the successor path `legacy/**` is
unambiguous and does not rely on capitalization-only rename semantics.

## Boundary Review

The rename does not change:

- publication authorization;
- VitePress source eligibility;
- private disclosure boundaries;
- request-artifact exclusion;
- Institutional ownership;
- canonical document authority.

`legacy/` remains repository-visible but non-canonical.

## Rollback Risk

Rollback remains bounded:

1. restore `legacy/` to `Documents/`;
2. restore the five lowercase README index paths if rollback happens on a
   case-sensitive checkout;
3. revert path-dependent references and generated outputs;
4. re-run validation and generator checks.

## Final Assessment

The request is safe to execute only because it is a single-surface rename with
no semantic migration, no body edits, and no generator-logic change. The
highest-risk element was the pre-existing case mismatch, and the chosen
successor path resolved it rather than amplifying it.
