---
schema_version: "1.0.0"
document_id: "DOC-RPT-058"
aliases: []
document_type: "REPORT"
title: "Epic 03 Batch 04 Rollback Plan"
summary: "Defines candidate-level and batch-level rollback evidence and sequencing for EPIC-03 legacy migration Batch 04."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.MIGRATION.BATCH_04.ROLLBACK"
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
related_adrs: ["DOC-ADR-004", "DOC-ADR-017", "DOC-ADR-018"]
related_cores: ["DOCUMENTATION", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-03-BATCH-04-CANDIDATE-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Epic 03 Batch 04 Rollback Plan

## Purpose

This plan makes every authorized promotion reversible without deleting history
or manually patching generated artifacts.

## Frozen Source Evidence

| Candidate | Pre-migration SHA-256 |
|---|---|
| `MIG-EP3-B04-001` | `3b17308eeda1836778af2ff3350b57eb21750bd068c8fb9513f203513bec3c1b` |
| `MIG-EP3-B04-002` | `6875b85c7685d244cb625851a1a07f95774d99567abc8194442a3a921f56a281` |
| `MIG-EP3-B04-003` | `b781c2266ebefa90b7309d711db1c192eca5272c9cb3792c357bb60e13e066d0` |
| `MIG-EP3-B04-004` | `40029afe77a6ff9d59602c8fa576b1c3eb180725fb1bf54b37b53811c21a2917` |
| `MIG-EP3-B04-005` | `65d72bb4f9ea7a295d790ae7413e51651ea5744eb2ae14d6b88e72dd450ad836` |
| `MIG-EP3-B04-006` | `ab9563a692a5942f74669ed5a8279b9f9512381197051f7e35ba04e14d71fdf4` |
| `MIG-EP3-B04-007` | `51a669d5b030919e77d834f98bbeffd743d8a01044b7c708c3045fe25df98c7c` |
| `MIG-EP3-B04-008` | `4d8b5ac94cfb89f9f466db37603d1da21e97fd5f7af979d30238320f650a84fc` |
| `MIG-EP3-B04-009` | `99589534bca51914b99de7cb28eacfdd3e2c10b6241ed842fc9f2ec16b5795f1` |
| `MIG-EP3-B04-010` | `80bdf31a88d8727ae4ff06400e9a70fc19dace6062e34ec4d866fddde38c59db` |

REQ-10 must recheck these hashes before writing. A mismatch invalidates the
candidate and does not authorize normalization over changed source content.

## Candidate Rollback

For an individual candidate:

1. restore the exact legacy bytes from the REQ-09 parent revision;
2. restore its exact baseline, active exception, and companion disposition
   entries at their deterministic sorted positions;
3. remove only the canonical identity introduced for that candidate;
4. regenerate the complete public artifact set through the generator;
5. run validation, relationship checks, tests, boundary scans, and VitePress;
6. record the rollback commit and reason in the migration evidence register.

The rollback must never use a private artifact as restoration evidence.

## Batch Rollback

If a shared validation or determinism failure cannot be isolated, revert the
atomic REQ-10 commit as a whole. Do not manually reverse generated JSON or
Markdown outputs. After reverting source and registry changes, run one complete
generation and require drift zero.

## Rollback Triggers

- source hash mismatch before execution;
- duplicate or invalid document ID;
- semantic preservation failure;
- registry population or path mismatch;
- broken reference or prohibited cycle;
- private path, filename, ID, or mechanic in public artifacts;
- nondeterministic generation;
- failed tests or VitePress build attributable to the migration.

## Recovery Validation

A rollback is complete only when the candidate path is legacy again, all three
active registries contain the restored entry, generator drift is zero, public
boundary scans are clean, and the worktree or rollback commit scope contains no
unrelated change.

## Gate Preservation

Rollback changes documentation state only. It does not alter product behavior,
runtime interfaces, providers, wallets, contracts, production, or financial
gates.
