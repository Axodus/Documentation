---
schema_version: "1.0.0"
document_id: "DOC-RPT-105"
aliases: []
document_type: "REPORT"
title: "Knowledge Surface Consumer Map"
summary: "Maps generator, documentation, intake, test, tooling, manual, research, and historical consumers of the .knowledge surface."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".knowledge/", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "tools/documentation/tests/epic-02-inventory.test.js", ref: "WORKTREE", kind: "TEST", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Knowledge Surface Consumer Map

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-04
Dependency Mutation: NOT_AUTHORIZED
Test Mutation: NOT_AUTHORIZED
Generator Logic Change: NOT_AUTHORIZED
Public Navigation Mutation: NOT_AUTHORIZED
```

## Purpose

This map identifies every material consumer class for `.knowledge/` so future
normalization can be scoped and validated without hidden path assumptions.

## Consumer Classes

```text
Generator
Documentation
Institutional Intake
Tests
Developer Tooling
Manual Authoring
Research
Historical Only
Unused
```

## Consumer Register

| Consumer ID | Consumer class | Consumer path or surface | Current dependency | Impact if path changes | Required future validation |
| --- | --- | --- | --- | --- | --- |
| `KNOW-CONS-0001` | Generator | `tools/documentation/` | Discovers `.knowledge/**` as source material and records manifest entries | High; path changes alter generated inventory and manifest source paths | Full generator write, `generate --check`, byte comparison |
| `KNOW-CONS-0002` | Documentation | `documentation/DOCUMENTATION-MASTER-INDEX.md` | Generated links to `.knowledge/**` | High; generated output must be regenerated, not patched manually | Master-index review after generator write |
| `KNOW-CONS-0003` | Documentation | `documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md` | Generated listing of `.knowledge/**` as low-metadata source material | High; generated output must be regenerated | Relationship report review |
| `KNOW-CONS-0004` | Documentation | `SUMMARY.md` | Generated or maintained listing of `.knowledge/**` entries | Medium; path changes require deterministic summary update | Summary diff and link audit |
| `KNOW-CONS-0005` | Documentation | `documentation.manifest.json` | Records 286 `.knowledge/**` entries | High; source paths, hashes, and classification must reconcile | Manifest diff and count reconciliation |
| `KNOW-CONS-0006` | Documentation | `documentation.exception-dispositions.json` | 285 `.knowledge/**` entries route to `AUTHORITY_REVIEW` | Critical; registry paths and counts must reconcile | Registry reconciliation and disposition completeness |
| `KNOW-CONS-0007` | Documentation | `documentation.exceptions.json` | 285 `.knowledge/**` active exceptions | Critical; exception paths must remain traceable | Exception registry reconciliation |
| `KNOW-CONS-0008` | Tests | `tools/documentation/tests/epic-02-inventory.test.js` | Count assertion for `.knowledge/` exception group | Medium; test fixture and expected count require deliberate update | Node test suite |
| `KNOW-CONS-0009` | Institutional Intake | `documentation/INSTITUTIONAL-KNOWLEDGE-INTAKE-INVENTORY.md` | Records `.knowledge/` as Documentation equivalent | Medium; analytical references must be updated after any path decision | Intake report audit |
| `KNOW-CONS-0010` | Institutional Intake | `documentation/CROSS-REPOSITORY-TERMINOLOGY-ALIGNMENT.md` | References `.knowledge/core/terminology.akp.md` and `.knowledge/glossary/` | Medium; terminology source path must remain pinned | Terminology alignment audit |
| `KNOW-CONS-0011` | Institutional Intake | `documentation/INSTITUTIONAL-INTAKE-ALIGNMENT-DECISION-REGISTER.md` | References `.knowledge/core/terminology.akp.md` | Medium; decision register requires controlled path update only after execution | Decision-register audit |
| `KNOW-CONS-0012` | Manual Authoring | Repository authors and agents | Use `.knowledge/` as retrieval-oriented context | Medium; hidden path may be missed by new contributors | Updated contributor guidance after execution |
| `KNOW-CONS-0013` | Research | Knowledge packs and research-aligned domains | Provide semantic context for research, claims, terminology, and domain modeling | Medium; mixed publicability must remain controlled | Research and claims boundary review |
| `KNOW-CONS-0014` | Developer Tooling | Search, inventory, and local discovery commands | Uses path-based scans and generated manifest | Medium; path updates must be discoverable | `rg` scan and manifest reconciliation |
| `KNOW-CONS-0015` | Historical Only | Prior governance and execution reports | Past reports cite `.knowledge/` as predecessor state | Low; historical references may remain as historical evidence | Historical-reference exception handling |
| `KNOW-CONS-0016` | Unused | None identified | No unused material consumer class confirmed | None | Recheck before execution |

## Dependency Status

| Dependency group | Status |
| --- | --- |
| Generator dependencies | Active and high impact |
| Test dependencies | Active and count-sensitive |
| Documentation report dependencies | Active and generated-output-sensitive |
| Institutional intake dependencies | Active analytical references |
| Tooling dependencies | Active through inventory/discovery assumptions |
| Workflow dependencies | No dedicated CI workflow path dependency identified in this request |
| Build script dependencies | Indirect through docs validation/generation scripts |

## Consumer Guidance

Future execution must not treat all consumers the same:

- generator and registry consumers require exact path rewrite and regenerated
  outputs;
- historical reports may preserve old paths as historical evidence;
- intake reports require controlled reference updates, not authority changes;
- manual authoring guidance should be updated only after the physical topology
  changes; and
- public navigation must remain unchanged unless separately authorized.

## Final Result

`.knowledge/` has active generator, registry, report, test, intake, authoring,
and research consumers. Any future physical change requires a bounded execution
request with path rewrite, registry reconciliation, generated-output
regeneration, and tests.

