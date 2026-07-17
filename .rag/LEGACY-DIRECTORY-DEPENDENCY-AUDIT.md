---
schema_version: "1.0.0"
document_id: "DOC-RPT-101"
aliases: []
document_type: "REPORT"
title: "Legacy Directory Dependency Audit"
summary: "Audits the exact repository dependencies updated by the Documents to legacy canonicalization, including registries, guidance links, traceability evidence paths, and generated outputs."
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
related_adrs: ["DOC-ADR-009", "DOC-ADR-014", "DOC-ADR-017", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "README.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.graph.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Legacy Directory Dependency Audit

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-03
Dependency Scope: PATH_ONLY
Generator Logic Change: NOT_AUTHORIZED
Schema Change: NOT_AUTHORIZED
```

## Purpose

This audit records the material dependencies touched by the legacy-surface
canonicalization.

## Updated Source Dependencies

| Dependency Class | Files Updated | Reason |
|---|---|---|
| Repository guidance | `README.md`, `AGENTS.md`, `SUMMARY.md` | direct user-facing links or guidance referenced `Documents/` or `documents/` |
| Governed source registries | `documentation.baseline.json`, `documentation.exceptions.json`, `documentation.exception-dispositions.json` | tracked legacy path records required canonical successor paths |
| Governed registry-facing report | `.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md` | path inventory must reconcile with registry source |
| Operational evidence references | `.rag/EPIC-03-TRACEABILITY-REMEDIATION-INVENTORY.md`, `.rag/EPIC-03-TRACEABILITY-RISK-REVIEW.md` | referenced path evidence needed the live successor path |

## Generated Dependencies Closed by Generator Write

The full generator write is expected to reconcile:

- `documentation.baseline.report.json`
- `documentation.graph.json`
- `documentation.manifest.json`
- `documentation.validation.json`
- `.rag/DOCUMENTATION-MASTER-INDEX.md`
- `.rag/DOCUMENTATION-METADATA-COVERAGE.md`
- `.rag/DOCUMENTATION-RELATIONSHIP-REPORT.md`
- `.rag/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md` when required

## Dependency Decisions

| Dependency Surface | Update Decision | Reason |
|---|---|---|
| `tools/documentation/*` | no direct source edit expected unless validation proves path literal usage | no live path constants for `Documents/` were found in executable tooling |
| `.github/workflows/*` | no edit | no workflow literal depended on `Documents/` |
| `.gitignore` | no edit | no ignore rule targeted the legacy surface |
| `institutional-disclosure/` | no edit | out of scope and boundary-protected |
| `requests/` | no edit | out of scope and boundary-protected |
| moved legacy documents | no body edits | request forbids content rewrite |

## Case-Sensitivity Dependency Note

`SUMMARY.md` was the only surfaced tracked file that referenced lowercase
`documents/` links. Those links were normalized to `legacy/` during the same
path-only update set.

## Validation Method

Dependency closure must be demonstrated through:

- path scan with zero remaining live `Documents/` or `documents/` dependencies
  outside historical evidence that is intentionally preserved;
- successful generator write and `generate --check`;
- successful validation, relationship, test, and VitePress runs.
