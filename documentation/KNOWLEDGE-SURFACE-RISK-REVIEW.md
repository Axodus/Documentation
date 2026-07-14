---
schema_version: "1.0.0"
document_id: "DOC-RPT-108"
aliases: []
document_type: "REPORT"
title: "Knowledge Surface Risk Review"
summary: "Reviews authority, disclosure, publication, generator, registry, testing, and boundary risks for future .knowledge normalization."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".knowledge/", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/REPOSITORY-BOUNDARY-RISK-REVIEW.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Knowledge Surface Risk Review

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-04
Risk Review: DECISION_ONLY
Physical Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
```

## Purpose

This report reviews risks associated with `.knowledge/` authority and future
normalization. It blocks premature physical changes where review evidence is
insufficient.

## Risk Register

| Risk ID | Risk | Level | Evidence | Mitigation | Status |
| --- | --- | --- | --- | --- | --- |
| `KNOW-RISK-0001` | Authority inferred from repository presence | HIGH | 285 entries remain in `AUTHORITY_REVIEW`; manifest classifies records as legacy with null metadata | Require family-level authority review before execution | OPEN |
| `KNOW-RISK-0002` | Publication inferred from generated inventory | HIGH | `.knowledge/` is listed in generated inventory while root README says not public-facing | Preserve distinction between inventory inclusion and publication authorization | CONTROLLED |
| `KNOW-RISK-0003` | Direct rename without boundary partition | HIGH | Mixed financial, security, governance, trading, treasury, tokenomics, terminology, and runtime topics | Use hybrid target and review gates | OPEN |
| `KNOW-RISK-0004` | Private or Track B/C leakage | HIGH | Knowledge topics overlap with governance, claims, security, and finance; private surfaces remain separate | No private content enters reports; keep Track B/C outside normalization | CONTROLLED |
| `KNOW-RISK-0005` | Generated output drift | MEDIUM | Manifest and generated reports include `.knowledge/**` | Future execution must run complete generator write and `generate --check` | OPEN |
| `KNOW-RISK-0006` | Registry path divergence | HIGH | Exception and disposition registries contain 285 `.knowledge/**` paths | Rewrite registries only in authorized execution request | OPEN |
| `KNOW-RISK-0007` | Test fixture breakage | MEDIUM | `epic-02-inventory.test.js` asserts `.knowledge/` count | Update tests only after physical execution | OPEN |
| `KNOW-RISK-0008` | Institutional intake reference drift | MEDIUM | Intake and terminology alignment reports cite `.knowledge/core/terminology.akp.md` | Controlled reference audit during execution | OPEN |
| `KNOW-RISK-0009` | Claims or financial wording strengthened | HIGH | Knowledge packs include claims, tokenomics, treasury, trading, DeFi, DEX, lottery, and mining topics | Route through claims, legal, and domain review before publication | OPEN |
| `KNOW-RISK-0010` | Knowledge packs treated as canonical metadata documents | MEDIUM | Files do not use full canonical YAML front matter | Preserve knowledge-pack source format unless schema conversion is separately authorized | CONTROLLED |
| `KNOW-RISK-0011` | Historical references rewritten as if current | MEDIUM | Prior reports cite `.knowledge/` as predecessor state | Preserve historical paths or annotate them as historical evidence | CONTROLLED |
| `KNOW-RISK-0012` | Full-content public disclosure expansion | HIGH | Root README says not public-facing documentation | No public navigation or publication approval in REQ-04 | CONTROLLED |

## Boundary Review

| Boundary | Result |
| --- | --- |
| Institutional | UNCHANGED |
| institutional-disclosure | UNCHANGED |
| requests | UNCHANGED |
| legacy | UNCHANGED |
| docs | UNCHANGED |
| public navigation | UNCHANGED |
| relationships | UNCHANGED |
| schema | UNCHANGED |
| generator logic | UNCHANGED |

## Blocking Risks

No risk blocks this decision-only request. The following risks block physical
execution until addressed:

- unresolved authority for 285 governed entries;
- generated inventory and registry path coupling;
- public-inventory versus not-public-facing ambiguity;
- legal and security-sensitive topic families; and
- institutional intake references to `.knowledge/core/terminology.akp.md`.

## Residual Risks

Residual risk remains `HIGH` for execution but controlled for planning. The
surface must not be physically normalized until the execution freeze identifies
which paths are safe, review-gated, or not eligible.

## Final Assessment

The `.knowledge/` surface is decision-ready but not execution-ready. The hybrid
normalization decision reduces future ambiguity while preserving all current
boundaries in this request.

