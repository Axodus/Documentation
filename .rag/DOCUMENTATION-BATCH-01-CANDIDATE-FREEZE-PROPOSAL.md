---
schema_version: "1.0.0"
document_id: "DOC-ROAD-003"
aliases: []
document_type: "ROADMAP"
title: "Documentation Batch 01 Candidate Freeze Proposal"
summary: "Freezes Batch 01 primary and alternate candidates while withholding migration authority and final ID reservations."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION.BATCH_01"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-002"}, {type: "DEPENDS_ON", target: "DOC-REF-005"}, {type: "DEPENDS_ON", target: "DOC-PLAY-001"}, {type: "DEPENDS_ON", target: "DOC-ADR-018"}, {type: "DEPENDS_ON", target: "DOC-ADR-019"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY", "ACADEMY", "ACS", "BBA_AGENCY", "BUSINESS", "DEFI", "DEX", "GOVERNANCE", "LOTTERY", "MARKETPLACE", "MINING", "RUNTIME", "SECURITY", "TOKENOMICS", "TRADING", "TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-LEGACY-PRIORITIZATION.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 01 Candidate Freeze Proposal

## Status

APPROVED and frozen on 2026-07-02. No candidate is migrated or assigned a final numeric ID.

## Common Evidence and Authority Default

Every listed path exists, is referenced by public navigation, declares an inline owner and scope, and has a verifiable update date. Every candidate remains `NEEDS_REVIEW` with score 80.

Batch governance assigns `Documentation Architecture Reviewer`, `Portfolio Documentation Reviewer`, and `Security Reviewer`, with `Documentation Coordinator` as approver. This resolves freeze governance only; content authority and semantic diff remain mandatory REQ-05 checks. Proposed IDs are patterns only.

Likely semantic target: `DOC-GDE-006` (public documentation entry point), with additional ADR/policy targets determined by REQ-04 authority review.

## Primary Candidates

| Source path | Scope | Type/pattern | Flags | Semantic target | Status |
|---|---|---|---|---|---|
| `docs/accountability/overview.md` | `ACCOUNT` | `GDE` / `ACCOUNT-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/academy/overview.md` | `ACADEMY` | `GDE` / `ACADEMY-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/acs/overview.md` | `ACS` | `GDE` / `ACS-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/bba-agency/overview.md` | `BBA` | `GDE` / `BBA-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/business/overview.md` | `BUSINESS` | `GDE` / `BUSINESS-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/defi/overview.md` | `DEFI` | `GDE` / `DEFI-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/dex/overview.md` | `DEX` | `GDE` / `DEX-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/governance/overview.md` | `GOV` | `GDE` / `GOV-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/lottery/overview.md` | `LOTTERY` | `GDE` / `LOTTERY-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/marketplace/overview.md` | `MARKET` | `GDE` / `MARKET-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/mining/overview.md` | `MINING` | `GDE` / `MINING-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/runtime/overview.md` | `RUNTIME` | `GDE` / `RUNTIME-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/security/overview.md` | `SEC` | `GDE` / `SEC-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/tokenomics/overview.md` | `TOKEN` | `GDE` / `TOKEN-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/trading/overview.md` | `TRADING` | `GDE` / `TRADING-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/treasury/overview.md` | `TREASURY` | `GDE` / `TREASURY-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/overview/ecosystem-overview.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/overview/core-principles.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/overview/documentation-status.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk | `DOC-GDE-006` | `FROZEN_PRIMARY` |
| `docs/overview/risk-notices.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk, security_sensitive | `DOC-GDE-006` | `FROZEN_PRIMARY` |

## Ordered Alternates

| Order | Source path | Scope | Type/pattern | Status |
|---:|---|---|---|---|
| 1 | `docs/overview/constitutional-model.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `FROZEN_ALTERNATE` |
| 2 | `docs/overview/documentation-standards.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `FROZEN_ALTERNATE` |
| 3 | `docs/overview/product-map.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `FROZEN_ALTERNATE` |
| 4 | `docs/overview/terminology.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `FROZEN_ALTERNATE` |

## REQ-04 Decision Boundary

REQ-05 must confirm each owner claim, complete content/security/semantic diff review, resolve final semantic targets, and request final numeric ID reservation before migration. Final numeric IDs remain unreserved.
