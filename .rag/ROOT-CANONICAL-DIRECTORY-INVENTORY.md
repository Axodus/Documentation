---
schema_version: "1.0.0"
document_id: "DOC-RPT-110"
aliases: []
document_type: "REPORT"
title: "Root Canonical Directory Inventory"
summary: "Inventories remaining root-level repository directories for DOCUMENTATION-REORG-REQ-05 without moving or rewriting files."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/REPOSITORY-SURFACE-INVENTORY.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Root Canonical Directory Inventory

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-05
Execution Mode: Planning / Freeze
File Moves: NOT_AUTHORIZED
Directory Renames: NOT_AUTHORIZED
Generator Write: NOT_AUTHORIZED
Expected Result: PASS_WITH_ROOT_CONSOLIDATION_PLAN_FROZEN
```

## Purpose

This report inventories remaining root-level repository directories after the
legacy and knowledge-surface decisions. It does not move, rename, split, delete,
or rewrite repository files.

## Baseline

| Field | Value |
| --- | --- |
| Branch | `main` |
| Pre-request drift | `7` expected generated artifacts from REQ-04 reports |
| Current physical mutation | none |
| Current source count before REQ-05 reports | `853` |
| Canonical before REQ-05 reports | `248` |
| Legacy before REQ-05 reports | `591` |
| Templates | `14` |

## Root Directory Inventory

| Surface | Primary classification | Files | Markdown | Manifest participation | Current disposition |
| --- | --- | ---: | ---: | --- | --- |
| `.agents/` | `EMPTY_OR_PLACEHOLDER` | 0 | 0 | no | local placeholder; not a commit candidate |
| `.codex/` | `EMPTY_OR_PLACEHOLDER` | 0 | 0 | no | local placeholder; not a commit candidate |
| `.github/` | `TOOLING` | workflow/config files | n/a | no | keep as CI surface |
| `.instructions/` | `KNOWLEDGE_SOURCE` | governed legacy/control files | mixed | yes | out of scope |
| `.knowledge/` | `KNOWLEDGE_SOURCE` | 286 | 286 | yes | governed by REORG-REQ-04; physical move not authorized |
| `adr/` | `CANONICAL_COLLECTION` | 24 | 24 | yes | keep as canonical ADR collection |
| `api/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `architecture/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `docs/` | `PUBLIC_SOURCE` | 267 source docs | 267 | yes | governed by REORG-REQ-06 |
| `.rag/` | `DOCUMENTATION_GOVERNANCE` | 136 before REQ-05 | 136 | yes | keep as governance namespace |
| `evidence/` | `GENERATED_OUTPUT` | 65 | 0 | no Markdown corpus | keep as evidence snapshot surface |
| `governance/` | `CANONICAL_COLLECTION` | 12 | 12 | yes | keep as active governance collection |
| `institutional-disclosure/` | `PRIVATE_DISCLOSURE` | private corpus | mixed | excluded | out of scope |
| `legacy/` | `LEGACY_HISTORICAL` | 20 | 20 | yes | closed by REORG-REQ-03 |
| `meetings/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `node_modules/` | `BUILD_ARTIFACT` | dependency tree | n/a | no | ignored dependency surface |
| `operations/` | `CANONICAL_COLLECTION` | 3 | 3 | yes | keep; has nested playbooks/runbooks placeholders |
| `policies/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `proposals/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `references/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `releases/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `reports/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `requests/` | `REQUEST_EXECUTION_RECORD` | request corpus | mixed | excluded or controlled | out of scope |
| `requirements/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `research/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `roadmaps/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `specifications/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `standards/` | `CANONICAL_COLLECTION` | 1 | 1 | yes | sparse placeholder; review candidate |
| `templates/` | `TEMPLATE_COLLECTION` | 15 | 15 | yes | keep as template namespace |
| `tools/` | `TOOLING` | tooling source | n/a | no | keep as tooling namespace |

## Sparse Canonical Collections

The following root collections contain a single `README.md` and no additional
authored records:

```text
api/
architecture/
meetings/
policies/
proposals/
references/
releases/
reports/
requirements/
research/
roadmaps/
specifications/
standards/
```

These directories are sparse but semantically named. Their README files define
future document classes and ownership expectations. Sparse status alone is not
enough evidence to merge them.

## Collections to Keep

| Surface | Reason |
| --- | --- |
| `adr/` | Active canonical decision collection with document IDs |
| `governance/` | Active canonical governance collection with document IDs |
| `operations/` | Sparse but includes nested `playbooks/` and `runbooks/` placeholders |
| `.rag/` | Authoritative governance and generated-report namespace |
| `docs/` | Sole VitePress public source |
| `templates/` | Template collection |
| `tools/` | Tooling and validation implementation |
| `evidence/` | Immutable evidence snapshot surface |

## Out-of-Scope Surfaces

The following surfaces are explicitly excluded from root consolidation:

```text
.knowledge/
institutional-disclosure/
requests/
legacy/
docs/
```

## Final Inventory Result

All root directories were classified. No directory is released for physical
move by this inventory alone.

