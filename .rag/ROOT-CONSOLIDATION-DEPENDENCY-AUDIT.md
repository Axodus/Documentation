---
schema_version: "1.0.0"
document_id: "DOC-RPT-113"
aliases: []
document_type: "REPORT"
title: "Root Consolidation Dependency Audit"
summary: "Audits path, registry, generator, navigation, tooling, and boundary dependencies for root directory consolidation planning."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Root Consolidation Dependency Audit

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-05
Dependency Mutation: NOT_AUTHORIZED
Registry Mutation: NOT_AUTHORIZED
Generated Output Mutation: NOT_AUTHORIZED
```

## Dependency Summary

| Dependency class | Finding |
| --- | --- |
| Manifest | Root sparse README files appear as legacy entries without document IDs |
| Exception registry | Sparse root README files remain governed exception entries |
| Disposition registry | Sparse root README files are `DEFER_WITH_RISK` or equivalent governed backlog |
| Generated reports | Master index, metadata coverage, and relationship report list sparse roots |
| Summary | `SUMMARY.md` contains links to sparse root collections |
| VitePress navigation | No evidence that sparse roots are VitePress navigation roots |
| Tooling | Evidence tooling depends on `evidence/`; documentation tooling depends on generated inventory |
| CI | `.github/workflows/documentation.yml` imports evidence tooling |
| Private boundary | No consolidation candidate may target `institutional-disclosure/` |

## Material Path Dependencies

| Dependency ID | Path | Consumer | Impact | Future rewrite method |
| --- | --- | --- | --- | --- |
| `ROOTDEP-EP4-0001` | `api/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0002` | `architecture/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0003` | `meetings/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0004` | `policies/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0005` | `proposals/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0006` | `references/README.md` | generated inventory, registries, Institutional intake references | medium | controlled reference update if moved |
| `ROOTDEP-EP4-0007` | `releases/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0008` | `reports/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0009` | `requirements/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0010` | `research/README.md` | generated inventory, registries, Institutional intake references | medium | controlled reference update if moved |
| `ROOTDEP-EP4-0011` | `roadmaps/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0012` | `specifications/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0013` | `standards/README.md` | generated inventory and registries | medium | generator plus registry rewrite if moved |
| `ROOTDEP-EP4-0014` | `evidence/` | evidence tooling and CI | high | do not move without tooling request |
| `ROOTDEP-EP4-0015` | `docs/` | VitePress source | high | handled by REQ-06 boundary hardening only |

## Audit Result

Every plausible root move has generated inventory and registry consequences.
Because authority changes are not authorized, no path dependency is updated by
REQ-05.

