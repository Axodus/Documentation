---
schema_version: "1.0.0"
document_id: "DOC-RPT-099"
aliases: []
document_type: "REPORT"
title: "Legacy Directory Migration Register"
summary: "Provides the authoritative per-file migration register for the Documents to legacy canonicalization, including source-path reconciliation, hash preservation, and case-sensitivity handling."
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
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "legacy/strategy/AXODUS_CONSTITUTION.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Legacy Directory Migration Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-03
Scope: Documents/ -> legacy/
Content Rewrite: NOT_AUTHORIZED
Metadata Rewrite: NOT_AUTHORIZED
Relationship Rewrite: NOT_AUTHORIZED
```

## Purpose

This register is the authoritative file-by-file move record for the legacy
surface canonicalization.

## Source-Path Reconciliation Note

Five README files were tracked under lowercase index paths (`documents/**`)
while materializing on disk beneath `Documents/**`. The move reconciles both the
filesystem and the index to `legacy/**`.

## Migration Register

| Row | Filesystem Path Before Move | Git Path Before Move | Path After Move | Classification | Move Decision | SHA-256 After Move | ID Before | ID After | Metadata Before | Metadata After | Relationships Before | Relationships After |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Documents/README.md` | `Documents/README.md` | `legacy/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `f1a227f3a60e6c5ee9e7b64adb66eafbb7fd7782a1e5458af7ee908224636dbc` | `null` | `null` | `null` | `null` | `null` | `null` |
| 2 | `Documents/agents/AXODUS_AGENT_ALIGNMENT.md` | `Documents/agents/AXODUS_AGENT_ALIGNMENT.md` | `legacy/agents/AXODUS_AGENT_ALIGNMENT.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `ae444795ff39aa2b325d804d6117ec2650420bbcf05077b684a5474ec29b1627` | `null` | `null` | `null` | `null` | `null` | `null` |
| 3 | `Documents/agents/README.md` | `documents/agents/README.md` | `legacy/agents/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `33702d4b92017cf156c6011562a7fc11edb928eeda8f95e9620959d49b35d070` | `null` | `null` | `null` | `null` | `null` | `null` |
| 4 | `Documents/archive/README.md` | `Documents/archive/README.md` | `legacy/archive/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `eb5e88760bf731cb0b41aadbee09c4b941121a2227e83f64d0b452e365ea3d18` | `null` | `null` | `null` | `null` | `null` | `null` |
| 5 | `Documents/commercial/AXODUS_COMMERCIAL_CORE.md` | `Documents/commercial/AXODUS_COMMERCIAL_CORE.md` | `legacy/commercial/AXODUS_COMMERCIAL_CORE.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `fcf960b1e11bd875d8056b922e0ba5f8b7ee25a8b5d91aca1c9b96cf9cfdc168` | `null` | `null` | `null` | `null` | `null` | `null` |
| 6 | `Documents/commercial/README.md` | `documents/commercial/README.md` | `legacy/commercial/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `9651dca3e58a5b4a073ef5beeba44d06eb31c4ac06eb73285ed301e547b683eb` | `null` | `null` | `null` | `null` | `null` | `null` |
| 7 | `Documents/planning/README.md` | `Documents/planning/README.md` | `legacy/planning/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `246a740dcfcf342e4b27c322805eb8eebf2ef926903467decdff758bc367c72f` | `null` | `null` | `null` | `null` | `null` | `null` |
| 8 | `Documents/planning/VITEPRESS_CUSTOMIZATION_REPORT.md` | `Documents/planning/VITEPRESS_CUSTOMIZATION_REPORT.md` | `legacy/planning/VITEPRESS_CUSTOMIZATION_REPORT.md` | `HISTORICAL` | `MOVE_WITH_LEGACY_SURFACE` | `60340cbde8576645d5b857e3e6e1d64e2a8cd6169a5c4d4e9d497d99076fbba3` | `null` | `null` | `null` | `null` | `null` | `null` |
| 9 | `Documents/product/AXODUS_ECOSYSTEM_ONBOARDING.md` | `Documents/product/AXODUS_ECOSYSTEM_ONBOARDING.md` | `legacy/product/AXODUS_ECOSYSTEM_ONBOARDING.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `cb55c096f0a7f5d6ebc278646b3c7457668d1f1bfa88861b2afe8bf93439940c` | `null` | `null` | `null` | `null` | `null` | `null` |
| 10 | `Documents/product/AXODUS_USER_JOURNEY.md` | `Documents/product/AXODUS_USER_JOURNEY.md` | `legacy/product/AXODUS_USER_JOURNEY.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `8de79da06c042b6c3b7aa902ae60080680ad153c646fda503b025bbb44564f20` | `null` | `null` | `null` | `null` | `null` | `null` |
| 11 | `Documents/product/README.md` | `documents/product/README.md` | `legacy/product/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `a9b774f43379aa4d832dcaad781aa09f98fd224403a27490fbebc8b6117817f5` | `null` | `null` | `null` | `null` | `null` | `null` |
| 12 | `Documents/research/README.md` | `Documents/research/README.md` | `legacy/research/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `729a9e2c51c9e15286e18779aea4b24a4ee8cd8f8c8c36dd93684e61366d4191` | `null` | `null` | `null` | `null` | `null` | `null` |
| 13 | `Documents/strategy/AXODUS_CAPITAL_ALLOCATION_MODEL.md` | `Documents/strategy/AXODUS_CAPITAL_ALLOCATION_MODEL.md` | `legacy/strategy/AXODUS_CAPITAL_ALLOCATION_MODEL.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `8d26b48bc4c1a98787710778fb485b3b7e54c0c9466923b22bbf800ce28e092a` | `null` | `null` | `null` | `null` | `null` | `null` |
| 14 | `Documents/strategy/AXODUS_CONSTITUTION.md` | `Documents/strategy/AXODUS_CONSTITUTION.md` | `legacy/strategy/AXODUS_CONSTITUTION.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `322695d46ff8e35469dcb5631a909ec4ebf4d9d4661e60df7b04a5f78cc09bbd` | `null` | `null` | `null` | `null` | `null` | `null` |
| 15 | `Documents/strategy/AXODUS_DAO_FEDERATION_MODEL.md` | `Documents/strategy/AXODUS_DAO_FEDERATION_MODEL.md` | `legacy/strategy/AXODUS_DAO_FEDERATION_MODEL.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `4cc7c6421978a73c5be1451829764f0fcd460d884fb6e3c46c5393429a57c0ca` | `null` | `null` | `null` | `null` | `null` | `null` |
| 16 | `Documents/strategy/AXODUS_ECONOMIC_MODEL.md` | `Documents/strategy/AXODUS_ECONOMIC_MODEL.md` | `legacy/strategy/AXODUS_ECONOMIC_MODEL.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `f04078866fb6a78fd2f65d9f3d167bceb31cb9079cc054f391c9afbc80f64c77` | `null` | `null` | `null` | `null` | `null` | `null` |
| 17 | `Documents/strategy/AXODUS_TREASURY_PHILOSOPHY.md` | `Documents/strategy/AXODUS_TREASURY_PHILOSOPHY.md` | `legacy/strategy/AXODUS_TREASURY_PHILOSOPHY.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `5004174f41a6969ec14cc35bbea0f7af761140374d6d45496684da0a73270b22` | `null` | `null` | `null` | `null` | `null` | `null` |
| 18 | `Documents/strategy/README.md` | `documents/strategy/README.md` | `legacy/strategy/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `a9eb1cae2b8910c1409d85adbcf02fb62a3a614a1b3729008b41a0950a81b3fe` | `null` | `null` | `null` | `null` | `null` | `null` |
| 19 | `Documents/trading/AXODUS_TRADING_PRINCIPLES.md` | `Documents/trading/AXODUS_TRADING_PRINCIPLES.md` | `legacy/trading/AXODUS_TRADING_PRINCIPLES.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` | `461a5c14724bdac23a66b898bba4616bd7b4ac8601c1e558760db1ae2b38dbee` | `null` | `null` | `null` | `null` | `null` | `null` |
| 20 | `Documents/trading/README.md` | `documents/trading/README.md` | `legacy/trading/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` | `20b26db19aa40ad3d403a2222ec26ca8815b2e0fe8c5e86d694827483a80d05d` | `null` | `null` | `null` | `null` | `null` | `null` |

## Reconciliation

```text
MOVE_WITH_LEGACY_SURFACE: 20
RETAIN_OUTSIDE_LEGACY: 0
BLOCK_CANONICAL_AUTHORITY: 0
BLOCK_AMBIGUOUS_CLASSIFICATION: 0
```

All moved files remained byte-identical after the rename.
