---
schema_version: "1.0.0"
document_id: "DOC-STD-002"
aliases: []
document_type: "STANDARD"
title: "Documentation Migration Criteria"
summary: "Defines mandatory eligibility, metadata, authority, validation, and evidence thresholds for canonical promotion."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-019"}, {type: "DEPENDS_ON", target: "DOC-SPEC-001"}, {type: "RELATES_TO", target: "DOC-PLAY-001"}, {type: "RELATES_TO", target: "DOC-STD-003"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-017", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.schema.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "DOCUMENTATION-VALIDATION-RULES.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Migration Criteria

## Purpose

This standard defines the minimum threshold for legacy promotion, archival, exception, and deferral decisions.

## Eligibility Gate

A candidate is eligible for promotion only when:

- its current path and baseline entry resolve uniquely;
- content has ongoing informational or normative value;
- owner, authority, reviewers, and approver are known;
- claims do not conflict with portfolio or stricter safety authority;
- dates are supported by repository evidence;
- no secret or credential value is exposed;
- no stale production, provider, financial, or regulatory assumption remains;
- VitePress or other framework metadata can be normalized without semantic loss.

## Canonical Metadata

All 32 Schema 1.0.0 fields are mandatory in canonical order.

Operational migration terminology maps to the schema:

| Migration term | Schema or derived representation |
|---|---|
| status | `publication_status` |
| lifecycle state | `document_state` |
| created at / first known date | `created_date` |
| last reviewed at | `last_reviewed` |
| related core | `related_cores` |
| source path | Generator-derived `source_path` |
| canonical path | Batch evidence; normally unchanged source path |

No new Front Matter field may be invented to satisfy migration reporting.

`source_path` and `canonical_path` remain batch-evidence fields. They MUST NOT be added to Front Matter. The Generator may derive `source_path` in the manifest.

## Identity

- Scope MUST be registered before first use.
- ID MUST match `<SCOPE>-<TYPE>-<NNN>`.
- Numbering is monotonic per `(scope,type)`.
- Sequence `000` is prohibited.
- IDs and aliases are immutable and never reused.
- A rolled-back or rejected allocated ID remains reserved when it entered reviewed evidence.

## Initial Scope Registry

The detected public corpus contains 16 core overview paths. These 16 scopes are approved for ID allocation. `CORE` remains a separately reserved portfolio scope and is not counted as a public core.

### Allowed Type Code Profile

`PUBLIC_CORE_STANDARD` permits these registered type codes:

`ARCH`, `REQ`, `ADR`, `SPEC`, `API`, `GDE`, `RUN`, `PLAY`, `POL`, `STD`, `PROC`, `REF`, `RPT`, `RFC`, `PROP`, `MTG`, `ROAD`, `REL`, and `RES`.

Use of an allowed code does not grant authority or approve document creation. The document must still satisfy its taxonomy, ownership, review, and approval contract.

### Public Core Scopes

| `scope_code` | `core_name` | `canonical_core_id` | `public_core_status` | `allowed_document_type_codes` | ID sequence starting point | Example |
|---|---|---|---|---|---:|---|
| `ACCOUNT` | Accountability | `ACCOUNTABILITY` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `ACCOUNT-GDE-001` |
| `ACADEMY` | Academy | `ACADEMY` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `ACADEMY-GDE-001` |
| `ACS` | ACS | `ACS` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `ACS-GDE-001` |
| `BBA` | BBA Agency | `BBA_AGENCY` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `BBA-GDE-001` |
| `BUSINESS` | Business | `BUSINESS` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `BUSINESS-GDE-001` |
| `DEFI` | DeFi | `DEFI` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `DEFI-GDE-001` |
| `DEX` | DEX | `DEX` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `DEX-GDE-001` |
| `GOV` | Governance | `GOVERNANCE` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `GOV-GDE-001` |
| `LOTTERY` | Lottery | `LOTTERY` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `LOTTERY-GDE-001` |
| `MARKET` | Marketplace | `MARKETPLACE` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `MARKET-GDE-001` |
| `MINING` | Mining | `MINING` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `MINING-GDE-001` |
| `RUNTIME` | Runtime | `RUNTIME` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `RUNTIME-GDE-001` |
| `SEC` | Security | `SECURITY` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `SEC-GDE-001` |
| `TOKEN` | Tokenomics | `TOKENOMICS` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `TOKEN-GDE-001` |
| `TRADING` | Trading | `TRADING` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `TRADING-GDE-001` |
| `TREASURY` | Treasury | `TREASURY` | `PUBLIC` | `PUBLIC_CORE_STANDARD` | `001` | `TREASURY-GDE-001` |

### Reserved Portfolio Scope

| `scope_code` | `core_name` | `canonical_core_id` | `public_core_status` | `allowed_document_type_codes` | ID sequence starting point | Example |
|---|---|---|---|---|---:|---|
| `CORE` | Axodus Portfolio/Core | `AXODUS_CORE` | `GOVERNANCE_RESERVED` | `PUBLIC_CORE_STANDARD` | `001` | `CORE-GDE-001` |

### Allocation and Reservation Policy

- Allocation is monotonic independently for every `(scope_code,type_code)` pair.
- `001` is the starting point only when the pair has no existing or reserved ID; allocation otherwise continues after the highest occupied or reserved number.
- `000` is permanently reserved.
- A reservation records scope, type, number, candidate path, accountable owner, batch, date, and disposition in batch evidence.
- Reserved, rejected, rolled-back, deprecated, deleted, superseded, archived, and published IDs remain permanently unavailable.
- Gaps are valid and MUST NOT be compacted or renumbered.
- Scope codes become stable upon this approval. A new scope or scope-code change requires an explicit governance update.
- Scope registration and physical path do not grant logical authority.

## Lifecycle and Maturity

- Current draft guidance uses `DRAFT` + `CURRENT`.
- Approved but not active documents use `APPROVED` + `CURRENT`.
- Active authority requires `ACTIVE` + `CURRENT`.
- Historical archival requires `ARCHIVED` + `HISTORICAL`.
- Deprecated or superseded content uses an allowed obsolete combination and explicit relations.
- Maturity is assessed independently and MUST NOT be inferred from publication status.

Migration alone does not justify `ACTIVE`, `APPROVED`, `D3`, `D3+`, or `D4`.

## Ownership and Review

Promotion requires:

- accountable author and owner;
- active maintainer;
- technical reviewer for technical claims;
- business reviewer for product, financial, market, or customer claims;
- security reviewer for credentials, custody, signing, contracts, APIs, financial flows, or production boundaries;
- approver authorized for the declared scope.

Unknown ownership blocks promotion.

Reviewer arrays MUST contain the applicable technical, business, and security reviewers. A non-applicable reviewer class may be empty only when batch evidence records why that review is not required.

## Relationships

Every promoted document MUST:

- declare at least one allowed semantic relationship;
- resolve every target to one canonical ID or alias;
- avoid duplicate edges and forbidden cycles;
- remain reachable through the master index;
- not become a canonical orphan.

External epics, requirements, and cores use `related_*` fields unless they have canonical document nodes.

## Content Preservation

Allowed normalization:

- legacy metadata moved into Front Matter;
- line endings normalized;
- title/H1 aligned;
- metadata-only separators removed;
- framework-specific Front Matter moved without losing meaning;
- broken formatting corrected when semantics remain unchanged.

Any claim rewrite, consolidation, contradiction resolution, or product-status correction requires explicit review and evidence.

Every candidate requires a semantic diff review comparing pre-migration and proposed content. The review MUST distinguish metadata/format normalization from claim changes and block any unexplained semantic drift.

## Decision Outcomes

| Result | Required action |
|---|---|
| Promote | Apply Schema 1.0.0 and complete batch workflow |
| Archive | Apply approved historical lifecycle and traceability |
| Exception | Preserve legacy and create/maintain justified exception |
| Defer | Leave source, baseline, and exception unchanged |
| Reject | Record rationale; do not modify source |

## Validation Threshold

Promotion requires complete Schema 1.0.0 metadata supported by evidence, valid ownership/review/approval, valid lifecycle/maturity/authority, at least one resolved semantic relation, no authority conflict, no exposed secret, no production-enablement assumption, no obsolete operational content, a completed semantic diff review, zero errors, zero warnings, zero unresolved references, zero canonical orphan status, synchronized baseline/exception removal, deterministic generation, clean CI, valid evidence, successful build, and closed gates.
