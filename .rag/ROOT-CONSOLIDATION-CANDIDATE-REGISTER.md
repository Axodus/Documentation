---
schema_version: "1.0.0"
document_id: "DOC-RPT-111"
aliases: []
document_type: "REPORT"
title: "Root Consolidation Candidate Register"
summary: "Freezes root directory consolidation candidates and classifies which are eligible, review-gated, or rejected for low-risk execution."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/ROOT-CANONICAL-DIRECTORY-INVENTORY.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Root Consolidation Candidate Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-05
Candidate Freeze: PLANNING_ONLY
Physical Mutation: NOT_PERFORMED
Candidate Expansion During REQ-07: NOT_AUTHORIZED
```

## Dispositions

```text
FREEZE_FOR_LOW_RISK_CONSOLIDATION
FREEZE_FOR_REVIEW
AUTHORITY_REVIEW_REQUIRED
BOUNDARY_REVIEW_REQUIRED
REJECT_KEEP_AS_CANONICAL_ROOT
REJECT_OUT_OF_SCOPE
NOT_ELIGIBLE
```

## Candidate Register

| Candidate ID | Source path | Proposed action | Current role | Risk | Dependencies | Disposition | REQ-07 eligibility | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ROOT-EP4-0001` | `.agents/` | Ignore from repository consolidation | local empty placeholder | LOW | none tracked | `NOT_ELIGIBLE` | no | Empty untracked/local placeholder; no commit action |
| `ROOT-EP4-0002` | `.codex/` | Ignore from repository consolidation | local empty placeholder | LOW | none tracked | `NOT_ELIGIBLE` | no | Empty untracked/local placeholder; no commit action |
| `ROOT-EP4-0003` | `.github/` | Keep as CI/tooling surface | tooling | LOW | workflows | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Not documentation content |
| `ROOT-EP4-0004` | `.instructions/` | Keep out of root consolidation | knowledge/control source | HIGH | registries, exceptions | `REJECT_OUT_OF_SCOPE` | no | Not authorized in Sprint 05 |
| `ROOT-EP4-0005` | `.knowledge/` | Keep out of root consolidation | knowledge source | HIGH | REQ-04 freeze | `REJECT_OUT_OF_SCOPE` | no | Knowledge physical move prohibited |
| `ROOT-EP4-0006` | `adr/` | Keep as canonical root | active ADR collection | LOW | canonical IDs, references | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | High semantic value as root |
| `ROOT-EP4-0007` | `api/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | One-file surface; authority still deferred |
| `ROOT-EP4-0008` | `architecture/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | One-file surface; architecture namespace meaningful |
| `ROOT-EP4-0009` | `docs/` | Keep; harden boundary in REQ-06 | public source | MEDIUM | VitePress, navigation | `BOUNDARY_REVIEW_REQUIRED` | no | Physical move prohibited |
| `ROOT-EP4-0010` | `.rag/` | Keep as governance root | governance namespace | LOW | generator reports | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Rename would create churn with no benefit |
| `ROOT-EP4-0011` | `evidence/` | Keep as generated evidence surface | generated evidence | LOW | evidence tooling, CI | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Tool-owned snapshot surface |
| `ROOT-EP4-0012` | `governance/` | Keep as canonical root | active governance collection | LOW | canonical IDs | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Active governed records |
| `ROOT-EP4-0013` | `institutional-disclosure/` | Keep out of root consolidation | private disclosure | CRITICAL | private boundary | `REJECT_OUT_OF_SCOPE` | no | Mutation prohibited |
| `ROOT-EP4-0014` | `legacy/` | Keep as legacy root | legacy/historical | LOW | REQ-03 closure | `REJECT_OUT_OF_SCOPE` | no | Already canonicalized |
| `ROOT-EP4-0015` | `meetings/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Supporting evidence namespace |
| `ROOT-EP4-0016` | `node_modules/` | Ignore dependency artifact | build artifact | LOW | package manager | `NOT_ELIGIBLE` | no | Not tracked source |
| `ROOT-EP4-0017` | `operations/` | Keep as canonical root | operations collection | LOW | nested placeholders | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Explicitly recognized in AGENTS guidance |
| `ROOT-EP4-0018` | `policies/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Policy namespace is semantically meaningful |
| `ROOT-EP4-0019` | `proposals/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Candidate only after authority review |
| `ROOT-EP4-0020` | `references/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Institutional citation mapping depends on this namespace |
| `ROOT-EP4-0021` | `releases/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Release namespace may remain future-facing |
| `ROOT-EP4-0022` | `reports/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Could conflict with `.rag/` reports |
| `ROOT-EP4-0023` | `requests/` | Keep out of root consolidation | request records | HIGH | request boundary | `REJECT_OUT_OF_SCOPE` | no | Mutation prohibited |
| `ROOT-EP4-0024` | `requirements/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Requirement namespace is meaningful |
| `ROOT-EP4-0025` | `research/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Research intake uses this surface conceptually |
| `ROOT-EP4-0026` | `roadmaps/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Roadmap authority remains unpromoted |
| `ROOT-EP4-0027` | `specifications/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Specification namespace is meaningful |
| `ROOT-EP4-0028` | `standards/` | Plan-only consolidation review | sparse canonical collection | MEDIUM | registries, generated inventory | `FREEZE_FOR_REVIEW` | no | Standards namespace is meaningful |
| `ROOT-EP4-0029` | `templates/` | Keep as template root | template collection | LOW | schema and authoring patterns | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Active template surface |
| `ROOT-EP4-0030` | `tools/` | Keep as tooling root | tooling | LOW | validation/generation | `REJECT_KEEP_AS_CANONICAL_ROOT` | no | Not documentation content |

## Reconciliation

| Disposition | Count |
| --- | ---: |
| `FREEZE_FOR_LOW_RISK_CONSOLIDATION` | 0 |
| `FREEZE_FOR_REVIEW` | 13 |
| `AUTHORITY_REVIEW_REQUIRED` | 0 |
| `BOUNDARY_REVIEW_REQUIRED` | 1 |
| `REJECT_KEEP_AS_CANONICAL_ROOT` | 9 |
| `REJECT_OUT_OF_SCOPE` | 5 |
| `NOT_ELIGIBLE` | 2 |
| Total | 30 |

## Freeze Result

No physical root-directory move is released for REQ-07 by this request. The
review set is frozen so a future authority-backed request can choose whether
any sparse canonical collection should remain isolated, merge into a governance
surface, or become a fully canonical collection.

