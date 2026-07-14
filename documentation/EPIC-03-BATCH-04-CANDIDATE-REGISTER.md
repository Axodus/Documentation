---
schema_version: "1.0.0"
document_id: "DOC-RPT-055"
aliases: []
document_type: "REPORT"
title: "Epic 03 Batch 04 Candidate Register"
summary: "Records the deterministic primary and alternate candidates frozen for EPIC-03 legacy migration Batch 04."
version: "0.2.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.MIGRATION.BATCH_04.CANDIDATES"
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
related_cores: ["DOCUMENTATION", "RUNTIME", "BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Epic 03 Batch 04 Candidate Register

## Purpose

This is the authoritative freeze for `LEGACY-MIGRATION-BATCH-04`. Candidate IDs
are permanent and must not be renumbered. REQ-10 may process only a primary or
an alternate activated under the replacement rules below.

## Candidate Register

| Candidate ID | Legacy Path | Legacy Title | Legacy Classification | Current Disposition | Target Canonical Path | Target Document ID | Migration Strategy | Content Preservation Rule | Authority Owner | Security Dependency | Priority | Risk | Conflict Status | Supersession Action | Registry Action | Rollback Action | Disposition | Execution Order | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---:|---|
| `MIG-EP3-B04-001` | `docs/runtime/accountability-records.md` | Accountability Records | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-005` | `PROMOTE_TO_NEW_CANONICAL` | Preserve all body sections and public links; normalize legacy header only | Axodus Runtime | None | P1 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from baseline, exception, and companion disposition registries; record evidence | Restore pre-migration bytes and the three registry entries | `FREEZE_FOR_BATCH_04` | 1 | Explicit Accountability and governance-record references |
| `MIG-EP3-B04-002` | `docs/runtime/acs-integration.md` | ACS Integration | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-006` | `PROMOTE_TO_NEW_CANONICAL` | Preserve conceptual ACS scope and prohibitions; add no private ACS mechanics | Axodus Runtime / ACS | Conceptual boundary scan | P1 | MEDIUM | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 2 | Restricted permissioning, veto, and enforcement mechanics remain excluded |
| `MIG-EP3-B04-003` | `docs/runtime/architecture.md` | Runtime Architecture | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-007` | `PROMOTE_TO_NEW_CANONICAL` | Preserve layers, data objects, integrations, and invariants without architectural expansion | Axodus Runtime | None | P1 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 3 | Existing Runtime overview remains the core authority |
| `MIG-EP3-B04-004` | `docs/runtime/communication-cadence.md` | Communication Cadence | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-008` | `PROMOTE_TO_NEW_CANONICAL` | Preserve cadence, formats, principles, channels, and links | Axodus Runtime | None | P2 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 4 | Operational guidance only |
| `MIG-EP3-B04-005` | `docs/runtime/delays-and-blockers.md` | Delays and Blockers | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-009` | `PROMOTE_TO_NEW_CANONICAL` | Preserve definitions, records, severity, resolution, and escalation language | Axodus Runtime | None | P2 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 5 | No authority change |
| `MIG-EP3-B04-006` | `docs/runtime/execution-handoff.md` | Execution Handoff | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-010` | `PROMOTE_TO_NEW_CANONICAL` | Preserve handoff types, package fields, gates, acceptance, and limitations | Axodus Runtime | Public security terminology review | P1 | MEDIUM | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 6 | Does not authorize or enable execution |
| `MIG-EP3-B04-007` | `docs/runtime/milestones.md` | Milestones | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-011` | `PROMOTE_TO_NEW_CANONICAL` | Preserve definitions, types, fields, statuses, and quality gates | Axodus Runtime | None | P2 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 7 | No product state claim |
| `MIG-EP3-B04-008` | `docs/runtime/request-lifecycle.md` | Request Lifecycle | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-012` | `PROMOTE_TO_NEW_CANONICAL` | Preserve lifecycle, variants, exit conditions, invariants, and links | Axodus Runtime | None | P1 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 8 | Generic request governance only |
| `MIG-EP3-B04-009` | `docs/runtime/status-model.md` | Status Model | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-013` | `PROMOTE_TO_NEW_CANONICAL` | Preserve statuses, fields, transition rules, anti-patterns, and links | Axodus Runtime | None | P2 | LOW | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 9 | No runtime interface change |
| `MIG-EP3-B04-010` | `docs/runtime/validation-and-confirmation.md` | Validation and Confirmation | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `RUNTIME-GDE-014` | `PROMOTE_TO_NEW_CANONICAL` | Preserve validation types, gates, records, roles, and limitations | Axodus Runtime | Conceptual ACS boundary scan | P1 | MEDIUM | `NO_CONFLICT` | In-place promotion; no successor pointer | Remove active path from all three active registries; record evidence | Restore bytes and registry entries | `FREEZE_FOR_BATCH_04` | 10 | Validation is not legal, governance, or production approval |
| `MIG-EP3-B04-011` | `docs/business/accountability.md` | Business Accountability | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `BUSINESS-GDE-002` | `PROMOTE_TO_NEW_CANONICAL` | Preserve body; normalize legacy header only | Axodus Business / Accountability | None | P2 | MEDIUM | `NO_CONFLICT` | Conditional in-place promotion | Remove path from active registries only if activated | Restore bytes and entries | `ALTERNATE_CANDIDATE` | 11 | First replacement only |
| `MIG-EP3-B04-012` | `docs/business/change-requests.md` | Change Requests | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `BUSINESS-GDE-003` | `PROMOTE_TO_NEW_CANONICAL` | Preserve body; do not change governance or financial triggers | Axodus Business | None | P2 | MEDIUM | `NO_CONFLICT` | Conditional in-place promotion | Remove path from active registries only if activated | Restore bytes and entries | `ALTERNATE_CANDIDATE` | 12 | Second replacement only |
| `MIG-EP3-B04-013` | `docs/business/client-lifecycle.md` | Client Lifecycle | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `BUSINESS-GDE-004` | `PROMOTE_TO_NEW_CANONICAL` | Preserve lifecycle and explicit non-approval boundaries | Axodus Business | None | P2 | MEDIUM | `NO_CONFLICT` | Conditional in-place promotion | Remove path from active registries only if activated | Restore bytes and entries | `ALTERNATE_CANDIDATE` | 13 | Third replacement only |
| `MIG-EP3-B04-014` | `docs/business/delivery-lifecycle.md` | Delivery Lifecycle | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `BUSINESS-GDE-005` | `PROMOTE_TO_NEW_CANONICAL` | Preserve delivery stages and review gates; add no enabled execution claim | Axodus Business | None | P2 | MEDIUM | `NO_CONFLICT` | Conditional in-place promotion | Remove path from active registries only if activated | Restore bytes and entries | `ALTERNATE_CANDIDATE` | 14 | Fourth replacement only |
| `MIG-EP3-B04-015` | `docs/business/request-intake.md` | Business Request Intake | `LEGACY_PUBLIC_GUIDE` | `MIGRATE` | same path | `BUSINESS-GDE-006` | `PROMOTE_TO_NEW_CANONICAL` | Preserve intake fields and explicit non-approval statement | Axodus Business | None | P2 | MEDIUM | `NO_CONFLICT` | Conditional in-place promotion | Remove path from active registries only if activated | Restore bytes and entries | `ALTERNATE_CANDIDATE` | 15 | Fifth replacement only |

## Frozen Relationship Metadata

REQ-10 may add only these relationships to the promoted primary documents:

| Candidate | Relationships |
|---|---|
| `MIG-EP3-B04-001` | `RELATES_TO ACCOUNT-GDE-001`; `RELATES_TO GOV-GDE-004` |
| `MIG-EP3-B04-002` | `RELATES_TO ACS-GDE-001`; `RELATES_TO RUNTIME-GDE-004` |
| `MIG-EP3-B04-003` | `RELATES_TO RUNTIME-GDE-001`; `RELATES_TO RUNTIME-GDE-003` |
| `MIG-EP3-B04-004` | `RELATES_TO RUNTIME-GDE-001`; `RELATES_TO RUNTIME-GDE-002` |
| `MIG-EP3-B04-005` | `RELATES_TO RUNTIME-GDE-002`; `RELATES_TO RUNTIME-GDE-003` |
| `MIG-EP3-B04-006` | `RELATES_TO RUNTIME-GDE-003`; `RELATES_TO SEC-GDE-001` |
| `MIG-EP3-B04-007` | `RELATES_TO RUNTIME-GDE-001`; `RELATES_TO RUNTIME-GDE-004` |
| `MIG-EP3-B04-008` | `RELATES_TO RUNTIME-GDE-002`; `RELATES_TO RUNTIME-GDE-003` |
| `MIG-EP3-B04-009` | `RELATES_TO RUNTIME-GDE-001`; `RELATES_TO RUNTIME-GDE-002` |
| `MIG-EP3-B04-010` | `RELATES_TO ACS-GDE-001`; `RELATES_TO RUNTIME-GDE-004` |

Targets exist at the freeze baseline, the type is schema-valid, and the body
contains direct public semantic evidence. No reciprocal relationship is
authorized. The simulated directed additions create no duplicate, dependency,
governance, or supersession cycle.

## Alternate Replacement Rules

An alternate may replace a primary only when the primary receives
`BLOCKED_INVALIDATED` during REQ-10. Alternates are activated in numeric order,
one for one, and only after repeating the full preflight, authority, security,
semantic, duplicate-ID, and boundary checks. An unused alternate remains
legacy and its active registry entries remain unchanged. REQ-10 may not replace
an invalid alternate with an unregistered path.

## Disposition Completeness

All 15 reviewed candidates have exactly one planning disposition: ten
`FREEZE_FOR_BATCH_04` and five `ALTERNATE_CANDIDATE`. No candidate is undecided.

## REQ-10 Execution State

The committed freeze was revalidated without a source, target, ID, authority,
security, conflict, or boundary invalidation. No alternate was activated.

| Candidate | Frozen role | Final execution state | Evidence |
|---|---|---|---|
| `MIG-EP3-B04-001` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-005` |
| `MIG-EP3-B04-002` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-006` |
| `MIG-EP3-B04-003` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-007` |
| `MIG-EP3-B04-004` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-008` |
| `MIG-EP3-B04-005` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-009` |
| `MIG-EP3-B04-006` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-010` |
| `MIG-EP3-B04-007` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-011` |
| `MIG-EP3-B04-008` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-012` |
| `MIG-EP3-B04-009` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-013` |
| `MIG-EP3-B04-010` | Primary | `MIGRATED` | Promoted as `RUNTIME-GDE-014` |
| `MIG-EP3-B04-011` | Alternate | Not activated | Primary set remained eligible; legacy and registries unchanged |
| `MIG-EP3-B04-012` | Alternate | Not activated | Primary set remained eligible; legacy and registries unchanged |
| `MIG-EP3-B04-013` | Alternate | Not activated | Primary set remained eligible; legacy and registries unchanged |
| `MIG-EP3-B04-014` | Alternate | Not activated | Primary set remained eligible; legacy and registries unchanged |
| `MIG-EP3-B04-015` | Alternate | Not activated | Primary set remained eligible; legacy and registries unchanged |

```text
MIGRATED: 10
DEFERRED: 0
BLOCKED: 0
APPROVED ALTERNATES ACTIVATED: 0
UNUSED ALTERNATES: 5
```

## Gate Preservation

This register freezes planning decisions only. It does not migrate a document,
reserve authority beyond the scoped promotion, mutate an active registry,
regenerate public artifacts, or expose private content.
