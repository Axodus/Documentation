---
schema_version: "1.0.0"
document_id: "DOC-RPT-054"
aliases: []
document_type: "REPORT"
title: "Epic 03 Batch 04 Plan"
summary: "Freezes the baseline, selection rationale, scope, and governance controls for EPIC-03 legacy migration Batch 04."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.MIGRATION.BATCH_04.PLANNING"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
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
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-09", "AXODUS-DOCUMENTATION-EPIC-03-REQ-10"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-017", "DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Epic 03 Batch 04 Plan

## Control Flags

```text
Request: AXODUS-DOCUMENTATION-EPIC-03-REQ-09
Batch: LEGACY-MIGRATION-BATCH-04
Execution Mode: ANALYSIS_AND_FREEZE_ONLY
Legacy Content Mutation: NOT_AUTHORIZED
Canonical Content Mutation: NOT_AUTHORIZED
Registry Mutation: AUTHORIZED_SCOPED_FOR_PLANNING_RECORDS
Generated Artifact Regeneration: NOT_AUTHORIZED
Candidate Set Expansion After Freeze: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Schema Change: NOT_AUTHORIZED
Generator Logic Change: NOT_AUTHORIZED
Production: NOT_ENABLED
Push: NOT_AUTHORIZED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This plan freezes a low-risk migration batch from the governed `MIGRATE`
backlog. REQ-09 records decisions only. It does not edit a candidate, promote a
legacy document, mutate an active registry, or regenerate a public artifact.

## Repository Baseline

| Measure | Frozen value |
|---|---:|
| Branch | `main` |
| HEAD | `2a668ccff4dcd2188c93f1c1d2463ed7022c0b05` |
| Worktree | `CLEAN` |
| Documentation CLI | `1.0.0` |
| Schema | `1.0.0` |
| Complete repository documents | 855 |
| Complete canonical / legacy / templates | 240 / 601 / 14 |
| Public generator sources | 797 |
| Public canonical / legacy / templates | 182 / 601 / 14 |
| Declared relationships | 369 |
| Public graph orphans | 621 |
| Baseline / active exceptions / companion dispositions | 573 / 573 / 573 |
| Governed `MIGRATE` dispositions | 187 |
| Generator drift before planning | 0 |
| Validation / check / relationships | PASS / PASS / PASS |
| Test suite | PASS |
| VitePress build | PASS |

The closed Sprint 03 commit
`2a668ccff4dcd2188c93f1c1d2463ed7022c0b05` is present. The traceability
baseline is therefore closed and REQ-09 is eligible to proceed.

## Backlog Review

The companion disposition registry contains 187 current `MIGRATE` records,
all under `docs/**`. The review separated them by risk before reading the
candidate bodies:

| Backlog group | Planning treatment | Reason |
|---|---|---|
| Runtime public guides | Eligible | Public operational guidance, no disposition blocker, stable canonical overview |
| Business public guides | Alternate pool | Low security sensitivity but broader cross-core ownership |
| Academy and ACS guides | Deferred | Active public/private boundary governance requires a separate batch review |
| DeFi, DEX, Lottery, Marketplace, Mining | Deferred | Security routing is required or financial mechanics are present |
| Tokenomics, Trading, Treasury | Rejected from Batch 04 | Financial, legal, security, and private-boundary sensitivity |
| Governance | Deferred | Governance semantics require a dedicated authority review |
| Glossary and overview | Deferred | Cross-core terminology and authority effects are broader than this batch |

No `AUTHORITY_REVIEW`, `SECURITY_REVIEW`, or `DEFER_WITH_RISK` disposition was
treated as migration-eligible.

## Frozen Batch

`LEGACY-MIGRATION-BATCH-04` freezes ten Runtime guides and five ordered
alternates. The primary set is intentionally smaller than the 20-document
absolute limit.

| Set | Count | Core | Strategy |
|---|---:|---|---|
| Primary | 10 | Runtime | `PROMOTE_TO_NEW_CANONICAL` in place |
| Ordered alternates | 5 | Business | `PROMOTE_TO_NEW_CANONICAL` in place if activated |

Every primary has a governed `MIGRATE` disposition, an existing public path,
an explicit legacy owner, a stable core overview, no unresolved disposition
blocker, and a reversible normalization path. Exact IDs and execution order are
frozen in `DOC-RPT-055`.

## Selection Rationale

Runtime is the safest coherent domain remaining in the backlog:

1. the ten selected paths already form one public operational documentation
   family;
2. all ten registry records use `authority_routing: NOT_APPLICABLE`,
   `security_routing: NOT_APPLICABLE`, and `unresolved_blockers: []`;
3. each body contains an explicit owner and public related-page evidence;
4. existing `RUNTIME-GDE-001` through `RUNTIME-GDE-004` establish the metadata
   and authority pattern;
5. promotion requires no architectural, product, runtime, or financial
   decision.

The migration is schema canonicalization, not a substantive rewrite.

## Batch Boundaries

REQ-10 may add complete Schema 1.0.0 front matter, remove the duplicated legacy
header fields from the body, normalize the title separator, preserve the body
sections and links, and synchronize the active registries. It may not rewrite
the instructional meaning, add a private detail, change an owner, introduce an
execution claim, or add a candidate outside `DOC-RPT-055`.

## Freeze Decision

```text
Primary candidates: 10
Alternates: 5
Authority-blocked primaries: 0
Security-blocked primaries: 0
Conflict-blocked primaries: 0
Candidate Set: FROZEN
Silent Expansion: PROHIBITED
Silent Replacement: PROHIBITED
REQ-09 Result: PASS_WITH_EXPECTED_GENERATOR_DRIFT
```

## Generator Handling

REQ-09 does not run generation in write mode. The six new canonical planning
reports are expected to enter the public generator input inventory and may
therefore cause deterministic drift in the complete generated artifact set.
REQ-10 owns one complete regeneration after applying the frozen migration.

## Gate Preservation

This request planned and froze a bounded public legacy migration set only. It
did not migrate legacy content, mutate canonical content or active registries,
regenerate public artifacts, expose private disclosure or request artifacts,
change schemas or generator logic, modify runtime interfaces, enable
production, activate providers or exchanges, perform wallet signing, write
contracts, perform financial execution, or open operational gates.
