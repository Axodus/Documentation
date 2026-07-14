---
schema_version: "1.0.0"
document_id: "DOC-RPT-103"
aliases: []
document_type: "REPORT"
title: "Knowledge Surface Inventory"
summary: "Inventories the .knowledge surface for DOCUMENTATION-REORG-REQ-04 without moving, renaming, splitting, or rewriting knowledge-pack content."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-04"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".knowledge/", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Knowledge Surface Inventory

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-04
Execution Mode: Planning / Governance Decision
Physical Mutation: NOT_AUTHORIZED
Generator Write: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Expected Result: PASS_WITH_KNOWLEDGE_SURFACE_DECISION_FROZEN
```

## Purpose

This report freezes the observed state of `.knowledge/` before any future
normalization. It records the physical inventory, schema usage, generated
inventory participation, and current governance state without modifying the
surface.

## Repository Baseline

| Field | Value |
| --- | --- |
| Branch | `main` |
| HEAD at preflight | `5190be81a66c8cbc11da67f942b928978f2c499c` |
| origin/main at preflight | `5190be81a66c8cbc11da67f942b928978f2c499c` |
| Worktree | Clean before analysis |
| Generator drift | `0` before analysis |
| validate/check/relationships | PASS at preflight |
| Public VitePress source | `docs/` |
| Knowledge surface under review | `.knowledge/` |

## Inventory Summary

| Metric | Value |
| --- | ---: |
| Tracked files | 286 |
| Directories including root | 17 |
| `*.akp.md` files | 269 |
| `README.md` files | 17 |
| Manifest participation | 286 entries |
| Graph node participation | 0 nodes |
| Exception registry entries | 285 |
| Disposition registry entries | 285 |
| Primary disposition | `AUTHORITY_REVIEW` for 285 governed exceptions |
| Current manifest classification | `LEGACY` with null canonical metadata |

## Directory Tree

```text
.knowledge/
  academy/
  acs/
  bba/
  business/
  core/
  defi/
  dex/
  glossary/
  governance/
  lottery/
  marketplace/
  mining/
  runtime/
  tokenomics/
  trading/
  treasury/
```

## Family Counts

| Family | Files |
| --- | ---: |
| root | 1 |
| academy | 14 |
| acs | 16 |
| bba | 18 |
| business | 17 |
| core | 7 |
| defi | 21 |
| dex | 23 |
| glossary | 15 |
| governance | 12 |
| lottery | 23 |
| marketplace | 24 |
| mining | 25 |
| runtime | 17 |
| tokenomics | 17 |
| trading | 18 |
| treasury | 18 |
| Total | 286 |

## Document Types

The surface contains two material file forms:

| Type | Count | Function |
| --- | ---: | --- |
| `README.md` | 17 | Family-level orientation and consumer context |
| `*.akp.md` | 269 | Axodus knowledge-pack records optimized for retrieval, reasoning, and governance support |

## Metadata Usage

`.knowledge/` is not authored as canonical YAML-front-matter documentation.
Observed files use knowledge-pack headings and structured body blocks. The
manifest currently records null values for canonical fields such as
`document_id`, `authority_scope`, `publication_status`, `document_state`, and
`maturity_level`.

Eleven `*-core.akp.md` files contain a body-level `relationships:` block, but
those are not canonical graph relationships. No relationship mutation is
authorized or performed by this request.

## Schema Usage

The surface participates in the documentation inventory as legacy-classified
source material. It does not currently satisfy the canonical report/document
front-matter schema. Future normalization must choose between:

- preserving the knowledge-pack schema as a governed non-canonical source
  format; or
- defining a controlled conversion request that explicitly changes schema and
  metadata under separate authorization.

This request does not authorize schema conversion.

## Generated Inventory Participation

`.knowledge/` participates in generated outputs through the manifest and public
inventory reports. It is not present as graph nodes with declared canonical
relationships. Generated outputs that list or summarize `.knowledge/` include:

- `documentation.manifest.json`;
- `documentation/DOCUMENTATION-MASTER-INDEX.md`;
- `documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md`;
- `SUMMARY.md`.

## Tooling and Test Participation

Known active dependency:

| Consumer | Path | Dependency |
| --- | --- | --- |
| Node tests | `tools/documentation/tests/epic-02-inventory.test.js` | Count assertion for `.knowledge/` exception-routing assumptions |
| Generator | `tools/documentation/` | Discovers `.knowledge/` as source material through current inventory rules |
| Generated reports | `documentation/*` outputs | Preserve generated links to `.knowledge/**` |
| Institutional intake records | `documentation/INSTITUTIONAL-*` and `documentation/CROSS-REPOSITORY-*` | Reference `.knowledge/core/terminology.akp.md` and `.knowledge/glossary/` as Documentation equivalents |

## Current Boundary Statement

The root `.knowledge/README.md` states that the directory contains semantic
memory and operational intelligence packs and that these files are not
public-facing documentation. This statement conflicts with public-inventory
visibility unless consumers distinguish repository visibility, generated
inventory inclusion, and publication authorization.

## Limitations

This inventory does not certify any knowledge-pack content as public,
canonical, private, or publication-ready. Authority remains unresolved for the
285 governed exception entries until a future authority review closes them.

## Final Result

`.knowledge/` is a material governed knowledge-source surface with broad
generator and governance coupling. It is not eligible for immediate physical
normalization without additional authority and boundary decisions.

