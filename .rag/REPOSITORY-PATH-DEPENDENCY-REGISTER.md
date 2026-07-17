---
schema_version: "1.0.0"
document_id: "DOC-RPT-097"
aliases: []
document_type: "REPORT"
title: "Repository Path Dependency Register"
summary: "Captures the material path dependencies that constrain EPIC-04 repository reorganization candidates across generator, tests, workflows, guidance, and public inventory artifacts."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-01"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-014", "DOC-ADR-017", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "tools/documentation/repository/discovery.js", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".github/workflows/documentation.yml", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".gitignore", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Path Dependency Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-01
Mutation in this request: NONE
Registry Rewrite: NOT_AUTHORIZED
Generator Rewrite: NOT_AUTHORIZED
Navigation Rewrite: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register maps the material path dependencies that later reorganization
requests would need to rewrite, preserve, or explicitly validate.

## Dependency Register

| Dependency ID | Referenced Path | Referencing File | Reference Type | Consumer | Runtime or Build Impact | Generator Impact | Registry Impact | Navigation Impact | Rewrite Method | Validation Method | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `PATHDEP-EP4-0001` | `docs/.vitepress/dist/` | `.gitignore` | ignore rule | developer worktrees | keeps build output local | none | none | none | literal path update only if target changes | ignore scan and clean checkout build | active | tied to `REORG-EP4-0002` |
| `PATHDEP-EP4-0002` | `docs/.vitepress/cache/` | `.gitignore` | ignore rule | developer worktrees | keeps cache local | none | none | none | literal path update only if target changes | ignore scan and clean checkout build | active | tied to `REORG-EP4-0001` |
| `PATHDEP-EP4-0003` | `docs/.vitepress/dist` | `tools/documentation/repository/discovery.js` | discovery exclusion | repository parser | excludes built HTML and assets from Markdown discovery | high if removed | none | none | code literal update | validate + generate-check + discovery regression | active | build hygiene dependency |
| `PATHDEP-EP4-0004` | `docs/.vitepress/cache` | `tools/documentation/repository/discovery.js` | discovery exclusion | repository parser | excludes local cache from discovery | high if removed | none | none | code literal update | validate + generate-check + discovery regression | active | build hygiene dependency |
| `PATHDEP-EP4-0005` | `docs/.vitepress/dist/` | `tools/documentation/tests/repository-sanitization.test.js` | test assertion | CI and local tests | build artifact hygiene regression | none | none | none | test literal update | node test suite | active | verifies ignore coverage |
| `PATHDEP-EP4-0006` | `docs/.vitepress/cache/` | `tools/documentation/tests/repository-sanitization.test.js` | test assertion | CI and local tests | cache hygiene regression | none | none | none | test literal update | node test suite | active | verifies ignore coverage |
| `PATHDEP-EP4-0007` | `docs/` | `.github/workflows/documentation.yml` | build command (`pnpm docs:build`) | CI build | VitePress source root | indirect | none | indirect via build | script update only if source root changes | workflow test plus build | active | proves `docs/` is still the build source |
| `PATHDEP-EP4-0008` | `Documents/README.md` | `README.md` | Markdown link | repository readers | none | none | none | none | Markdown link rewrite | broken-link scan | active | inbound public repo reference |
| `PATHDEP-EP4-0009` | `Documents/` | `AGENTS.md` | guidance text | contributors and agents | none | none | none | none | prose update | documentation review | active | semantic dependency, not executable code |
| `PATHDEP-EP4-0010` | `Documents/**` | `.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md` | governed inventory rows | legacy governance | none | indirect via generated reports | high | none | controlled inventory update | registry reconciliation | active | blocks low-risk rename |
| `PATHDEP-EP4-0011` | `Documents/**` | `.rag/DOCUMENTATION-MASTER-INDEX.md` | generated inventory links | public inventory consumers | none | high | none | none | generator-driven rewrite only | generate + master-index review | active | emitted from current source paths |
| `PATHDEP-EP4-0012` | `Documents/**` | `.rag/DOCUMENTATION-METADATA-COVERAGE.md` | generated inventory list | governance readers | none | high | none | none | generator-driven rewrite only | generate + coverage review | active | emitted from current source paths |
| `PATHDEP-EP4-0013` | `Documents/**` | `.rag/DOCUMENTATION-RELATIONSHIP-REPORT.md` | generated inventory list | governance readers | none | high | none | none | generator-driven rewrite only | generate + relationship report review | active | emitted from current source paths |
| `PATHDEP-EP4-0014` | `.knowledge/` | `tools/documentation/tests/epic-02-inventory.test.js` | test count assertion | CI and local tests | none | none | tied to governed count assumptions | none | test and evidence update only after authority decision | node test suite | active | root cause for deferring `.knowledge/` rename |
| `PATHDEP-EP4-0015` | `.knowledge/**` | `.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md` | governed inventory rows | authority-routing backlog | none | indirect via generated reports | high | none | controlled registry rewrite | registry reconciliation | active | `285` entries currently authority-routed |
| `PATHDEP-EP4-0016` | `.knowledge/**` | `.rag/DOCUMENTATION-MASTER-INDEX.md` | generated inventory links | public inventory consumers | none | high | none | none | generator-driven rewrite only | generate + master-index review | active | included in public inventory today |
| `PATHDEP-EP4-0017` | `.knowledge/**` | `.rag/DOCUMENTATION-RELATIONSHIP-REPORT.md` | generated inventory list | governance readers | none | high | none | none | generator-driven rewrite only | generate + relationship report review | active | included in public inventory today |
| `PATHDEP-EP4-0018` | `requests/` | `tools/documentation/generator/shared/constants.js` | generator exclusion | public generator | excludes request records from manifest, graph, and master index | high if changed | none | none | code literal update | generator tests and generate-check | active | public boundary control |
| `PATHDEP-EP4-0019` | `institutional-disclosure/` | `tools/documentation/generator/shared/constants.js` | generator exclusion | public generator | excludes private disclosure from manifest, graph, and master index | high if changed | none | none | code literal update | generator tests and generate-check | active | private boundary control |
| `PATHDEP-EP4-0020` | `requests/sprint.json` | `tools/documentation/tests/sprint-runner.test.js` | path fixture | sprint-runner tests | request-surface contract | none | none | none | fixture update only if sprint manifest moves | node test suite | active | internal tooling dependency |
| `PATHDEP-EP4-0021` | `institutional-disclosure/**`, `requests/**` | `tools/documentation/tests/generator.test.js` | exclusion assertions | CI and local tests | public-boundary regression | high if changed | none | none | test update only with explicit boundary decision | node test suite | active | blocks accidental publication |
| `PATHDEP-EP4-0022` | `.knowledge/core/terminology.akp.md` | `.rag/INSTITUTIONAL-INTAKE-ALIGNMENT-DECISION-REGISTER.md` | analytical reference | cross-repo alignment governance | none | none | none | none | analytical reference rewrite only after `.knowledge/` decision | report review and cross-repo audit | active | shows intake phase already depends on `.knowledge/` stability |

