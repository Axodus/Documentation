---
schema_version: "1.0.0"
document_id: "DOC-PLAY-001"
aliases: []
document_type: "PLAYBOOK"
title: "Documentation Migration Playbook"
summary: "Defines the repeatable, evidence-backed procedure for controlled legacy-to-canonical migration batches."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-018"}, {type: "DEPENDS_ON", target: "DOC-ADR-019"}, {type: "DEPENDS_ON", target: "DOC-ADR-020"}, {type: "RELATES_TO", target: "DOC-STD-002"}, {type: "RELATES_TO", target: "DOC-STD-003"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "tools/documentation", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".github/workflows/documentation.yml", ref: "main", kind: "CONFIG", environment: "TEST"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Migration Playbook

## Purpose

This playbook defines the repeatable `MIGRATE_ON_CHANGE` procedure for promoting or archiving legacy documents without weakening the framework.

It is the approved operational contract for future migration requests. It does not itself authorize a batch.

## Roles

| Role | Responsibility |
|---|---|
| Batch coordinator | Freezes scope, tracks decisions, and assembles evidence |
| Author | Applies reviewed metadata and normalization |
| Owner | Confirms authority, lifecycle, and remediation |
| Technical reviewer | Confirms technical meaning and dependencies |
| Business reviewer | Confirms domain claims and commitments |
| Security reviewer | Confirms gate boundaries and secret handling |
| Approver | Accepts promotion, archival, exception, or deferral |
| Generator maintainer | Confirms derived outputs only |

## Preconditions

- Batch governance and promotion ADRs are approved.
- Candidate inventory is current and deterministically ranked.
- Every primary candidate has an assigned owner and reviewer.
- Scope codes and IDs are reserved.
- Baseline and exception registry are synchronized.
- Generator check, validation, evidence, CI, and build pass before editing.
- No candidate has an unresolved authority conflict or suspected exposed secret.

## Phase 1 — Freeze

Create a batch record containing:

- batch ID and date;
- primary and alternate paths;
- nuclei and owners;
- current classification, baseline hash, and exception ID;
- proposed ID, type, scope, level, status, state, maturity, and relations;
- review assignments and known risks.

After freeze, candidate substitution follows the ranked alternate list only.

Reserved IDs are recorded at freeze. A reserved or published ID is never reused, including after candidate rejection or full rollback.

## Phase 2 — Content and Authority Review

Review the complete body without rewriting its historical meaning.

Confirm:

- claims remain valid for the declared scope;
- portfolio and local documentation do not conflict;
- status language does not imply production readiness;
- financial, security, custody, signing, provider, and regulatory boundaries remain explicit;
- owner and approver have authority;
- dates are evidence-based;
- no sensitive value is copied into reports or diagnostics.

Failed checks produce `NEEDS_REVIEW`, `CONFLICTING`, `STALE`, `ARCHIVE_CANDIDATE`, or `EXCEPTION_REQUIRED`; they never produce artificial metadata.

## Phase 3 — Canonicalization

1. Preserve the existing path unless separately authorized.
2. Add Schema 1.0.0 Front Matter in canonical field order.
3. Use the reserved immutable ID.
4. Normalize legacy status/date/owner headers into Front Matter.
5. Preserve the body and historical meaning except for metadata removal, line-ending normalization, heading alignment, and framework-compatibility normalization.
6. Add at least one valid semantic relation.
7. Record external epic, requirement, core, implementation, and gate metadata.

Unknown dates or ownership block promotion unless the schema permits an evidence-backed null.

## Phase 4 — Validation Before Registry Changes

Run document, schema, semantic, relationship, and repository validation.

The candidate must have:

- zero errors and warnings;
- no duplicate ID or alias;
- no broken relation or forbidden cycle;
- no placeholder metadata;
- no canonical orphan;
- no implicit operational gate impact.

Only successful candidates proceed.

## Phase 5 — Baseline and Exception Update

For each successful candidate:

1. Remove exactly one matching baseline path.
2. Remove exactly one matching exception record.
3. Preserve gaps in exception IDs.
4. Do not renumber, reuse, regenerate, or broaden unrelated exceptions.
5. Confirm baseline and exception counts decrease by the successful migration count.

Failed or deferred candidates remain unchanged in both registries.

## Phase 6 — Batch Evidence

Produce:

- `DOCUMENTATION-MIGRATION-BATCH-NN.md`;
- `DOCUMENTATION-MIGRATION-BATCH-NN-EVIDENCE.md`.

Evidence includes safe hashes and counts, not source bodies or sensitive values. It records migrated, archived, excepted, deferred, and rejected candidates separately.

## Phase 7 — Derived Artifacts

Use Generator write mode as the sole producer of manifest, graph, master index, coverage, relationship, validation, and baseline reports.

Never edit generated artifacts manually.

## Phase 8 — Acceptance

Execute:

- complete Validation Framework twice;
- complete generation twice;
- baseline and exception checks;
- graph and orphan checks;
- evidence validation;
- unchanged GitHub Actions stages;
- VitePress build;
- generator drift check;
- worktree mutation audit.

The two generation results must be byte-identical, Generator check mode must report zero drift, and all operational gates must remain closed.

## Rollback

Rollback is a complete Git revert of the batch change set. Partial restoration of generated artifacts, baseline, or exceptions is forbidden.

IDs assigned in a reviewed or published batch remain reserved even after rollback. The rollback record explains reason, scope, affected paths, and follow-up disposition.

## Prohibited Actions

The playbook never authorizes deployment, publication, provider activation, credential use, database migration, contract interaction, wallet transaction, financial execution, production API calls, or production database writes.
