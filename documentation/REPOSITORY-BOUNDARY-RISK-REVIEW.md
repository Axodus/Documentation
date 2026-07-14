---
schema_version: "1.0.0"
document_id: "DOC-RPT-094"
aliases: []
document_type: "REPORT"
title: "Repository Boundary Risk Review"
summary: "Assesses repository-surface risks that could cause publication, authority, path, or generated-artifact confusion during EPIC-04 reorganization."
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
related_adrs: ["DOC-ADR-008", "DOC-ADR-009", "DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "tools/documentation/generator/shared/constants.js", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "docs/.vitepress/config.mts", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Boundary Risk Review

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-01
Boundary Expansion: NOT_AUTHORIZED
Public Navigation Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Request Publication: NOT_AUTHORIZED
Generator Write: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report evaluates where repository topology can mislead contributors or
later automation into crossing publication, authority, or private-surface
boundaries during reorganization.

## Boundary Model

The current repository boundary model is layered:

1. `docs/` is the only structured VitePress publication source.
2. Root public inventory includes additional canonical and legacy Markdown
   outside `docs/`.
3. `documentation/` contains governance inputs plus generated governance
   outputs.
4. `Documents/` and `.knowledge/` are repository-visible, public-inventory
   visible, but not VitePress navigation sources.
5. `institutional-disclosure/` and `requests/` are tracked and validated
   locally but excluded from public generation by prefix.
6. `docs/.vitepress/cache` and `docs/.vitepress/dist` are local build artifacts
   beneath the public source root and must remain clearly non-source.

## Public Source Risks

The main public-source risk is not that `docs/` lacks structure; it is that
`docs/` coexists with nested build outputs and with several other public
inventory surfaces at the repository root. Contributors can confuse:

- repository visibility with VitePress source status;
- VitePress source status with public disclosure authorization; and
- public inventory inclusion with navigation inclusion.

## Public Navigation Risks

Current navigation evidence is contained in `docs/.vitepress/config.mts` and
references only `docs/` paths. Navigation risk remains medium because future
boundary hardening could accidentally widen or narrow navigation scope if it is
done together with structural moves.

## Knowledge Source Risks

`.knowledge/` is the highest-risk non-private surface:

- it is hidden on disk but visible in public inventory;
- it contains `286` Markdown inputs already discovered by the repository;
- `285` governed exceptions route it through `AUTHORITY_REVIEW`; and
- tests and generated outputs already depend on the path.

This means a rename or move can easily change contributor expectations and
inventory behavior at the same time.

## Legacy Classification Risks

`Documents/` is risky for a different reason: its name is visually close to
`documentation/`, but its README describes mixed planning, draft, and
historical use. Renaming it directly to `legacy/` would simplify one ambiguity
while creating another by over-labeling planning material as historical.

## Private Disclosure Risks

`institutional-disclosure/` is correctly excluded from public generation, and
tests explicitly assert that exclusion. The primary risk is future accidental
reuse of private paths or examples in public-boundary reports or VitePress
guidance.

## Request Artifact Risks

`requests/` is also correctly generator-excluded. The risk surface is semantic:
requests can look like planning or documentation sources and may be cited in
reports, tests, or sprint tooling. That is acceptable internally but must never
be treated as public source.

## Generated Artifact Risks

There are three generated-output families with different ownership:

- public generator outputs under root JSON and `documentation/`;
- evidence snapshots under `evidence/` and `documentation.instructions.*.json`;
  and
- VitePress build artifacts under `docs/.vitepress/`.

Confusing these producers would create bad rollback assumptions and wrong
mutation scopes.

## Build Artifact Risks

Build artifact risk is currently low and controlled because:

- `.gitignore` explicitly excludes `docs/.vitepress/dist/` and
  `docs/.vitepress/cache/`;
- discovery explicitly excludes both directories from Markdown discovery; and
- repository-sanitization tests assert those rules.

The risk remains worth freezing because the artifacts live beneath `docs/`.

## Case-Sensitivity Risks

No current top-level case-collision exists. The risk is human-semantic, not a
current filesystem collision:

- `Documents/` and `documentation/` are distinct paths, but similar enough to
  confuse readers;
- `.knowledge/` has no sibling `knowledge/`, so a future rename would not be a
  case-only operation; and
- a future physical rename must still be validated on Linux, macOS default, and
  Windows developer worktrees.

## Cross-Repository Intake Interaction

The institutional intake phase increased the importance of keeping `.knowledge/`
and `documentation/` semantically distinct:

- `.knowledge/core/terminology.akp.md` is now explicitly cited by cross-repo
  alignment records;
- controlled intake outputs live in `documentation/`; and
- moving `.knowledge/` prematurely could invalidate or muddy those references.

## Risk Register

| Risk ID | Surface | Risk | Level | Blocking | Current control | Residual handling |
|---|---|---|---|---|---|---|
| `RISK-EP4-001` | `docs/.vitepress/dist/` | Build output mistaken for public source | `LOW` | no | ignore rules, discovery exclusion, tests | freeze hygiene candidate |
| `RISK-EP4-002` | `docs/.vitepress/cache/` | Cache mistaken for public source | `LOW` | no | ignore rules, discovery exclusion, tests | freeze hygiene candidate |
| `RISK-EP4-003` | `documentation/` | Authored and generated governance artifacts share one namespace | `MEDIUM` | no | explicit generated-path set and governance awareness | keep namespace; no rename |
| `RISK-EP4-004` | `Documents/` | Namespace visually collides with `documentation/` and over-broad rename target could distort planning semantics | `HIGH` | yes for execution freeze | README semantics, governed exceptions, generated inventory references | keep planning-only |
| `RISK-EP4-005` | `.knowledge/` | Hidden path with public inventory inclusion and unresolved authority | `HIGH` | yes for execution freeze | exception routing, tests, generated inventory evidence | require authority review |
| `RISK-EP4-006` | `institutional-disclosure/` | Private disclosure accidentally treated as public source | `LOW` | no | generator exclusion, tests, boundary docs | preserve boundary rules |
| `RISK-EP4-007` | `requests/` | Request evidence confused with public or canonical source | `LOW` | no | generator exclusion, sprint-runner isolation | preserve boundary rules |
| `RISK-EP4-008` | root sparse collections | Low file counts misread as redundancy, causing premature merge | `MEDIUM` | no | documented purpose files | keep planning-only |
| `RISK-EP4-009` | cross-repo alignment outputs | Intake records confused with public claims or product behavior | `MEDIUM` | no | authority-by-scope decisions from intake phase | preserve governance namespace |

## Mitigations

- Keep build hygiene isolated from broader structural mutation.
- Treat `Documents/` and `.knowledge/` as separate problems; do not solve them
  in one rename request.
- Keep `documentation/` as the governance namespace and avoid a second
  large-scale rename while EPIC-04 is still freezing candidates.
- Preserve the strict generator exclusions for `institutional-disclosure/` and
  `requests/`.

## Blocking Risks

The following risks block execution freeze beyond build hygiene:

- `Documents/` semantic overloading and governed inventory coupling.
- `.knowledge/` authority ambiguity plus public inventory coupling.

## Residual Risks

- Private decision artifacts currently cite `docs/.vitepress/dist/` paths as
  evidence. That does not make the build output authoritative, but later hygiene
  work must preserve the fact that those citations are evidentiary only.
- Sparse root collections may still attract future consolidation pressure. That
  pressure should be answered by authority and consumer analysis, not by file
  counts.

## Final Assessment

Current boundary posture is controlled. No `CRITICAL` risk was found. The only
safe freeze in this request is build-artifact hygiene. Legacy-surface and
knowledge-surface normalization remain materially higher risk and must proceed
through later phased requests.
