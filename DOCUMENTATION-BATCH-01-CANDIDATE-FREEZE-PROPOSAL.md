---
schema_version: "1.0.0"
document_id: "DOC-ROAD-003"
aliases: []
document_type: "ROADMAP"
title: "Documentation Batch 01 Candidate Freeze Proposal"
summary: "Proposes Batch 01 primary and alternate candidates while withholding freeze, migration authority, and final ID reservations."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D2"
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
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-LEGACY-PRIORITIZATION.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 01 Candidate Freeze Proposal

## Status

PROPOSED. No candidate is frozen, eligible, migrated, or assigned a final ID.

## Common Evidence and Blocker

Every listed path exists, is referenced by public navigation, declares an inline owner and scope, and has a verifiable update date. Every candidate is `NEEDS_REVIEW`, scores 80, and lacks canonical reviewer/approver evidence. Proposed IDs are patterns only.

Likely semantic target: `DOC-GDE-006` (public documentation entry point), with additional ADR/policy targets determined by REQ-04 authority review.

## Primary Candidates

| Source path | Scope | Type/pattern | Flags | Semantic target | Status |
|---|---|---|---|---|---|
| `docs/accountability/overview.md` | `ACCOUNT` | `GDE` / `ACCOUNT-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/academy/overview.md` | `ACADEMY` | `GDE` / `ACADEMY-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/acs/overview.md` | `ACS` | `GDE` / `ACS-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/bba-agency/overview.md` | `BBA` | `GDE` / `BBA-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/business/overview.md` | `BUSINESS` | `GDE` / `BUSINESS-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/defi/overview.md` | `DEFI` | `GDE` / `DEFI-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/dex/overview.md` | `DEX` | `GDE` / `DEX-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/governance/overview.md` | `GOV` | `GDE` / `GOV-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/lottery/overview.md` | `LOTTERY` | `GDE` / `LOTTERY-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/marketplace/overview.md` | `MARKET` | `GDE` / `MARKET-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/mining/overview.md` | `MINING` | `GDE` / `MINING-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/runtime/overview.md` | `RUNTIME` | `GDE` / `RUNTIME-GDE-<NNN>` | public_exposure, urgency, authority_required, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/security/overview.md` | `SEC` | `GDE` / `SEC-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/tokenomics/overview.md` | `TOKEN` | `GDE` / `TOKEN-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/trading/overview.md` | `TRADING` | `GDE` / `TRADING-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/treasury/overview.md` | `TREASURY` | `GDE` / `TREASURY-GDE-<NNN>` | public_exposure, urgency, authority_required, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/overview/ecosystem-overview.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/overview/core-principles.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/overview/documentation-status.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk | `DOC-GDE-006` | `PRIMARY_BLOCKED` |
| `docs/overview/risk-notices.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | public_exposure, urgency, authority_required, cross_core_dependency, risk, security_sensitive | `DOC-GDE-006` | `PRIMARY_BLOCKED` |

## Ordered Alternates

| Order | Source path | Scope | Type/pattern | Status |
|---:|---|---|---|---|
| 1 | `docs/overview/constitutional-model.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `ALTERNATE_BLOCKED` |
| 2 | `docs/overview/documentation-standards.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `ALTERNATE_BLOCKED` |
| 3 | `docs/overview/product-map.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `ALTERNATE_BLOCKED` |
| 4 | `docs/overview/terminology.md` | `CORE` | `GDE` / `CORE-GDE-<NNN>` | `ALTERNATE_BLOCKED` |

## REQ-04 Decision Boundary

REQ-04 must confirm owner authority, assign applicable reviewers and approver, verify semantic targets, decide candidate status, and only then freeze a reviewed list. Final numeric IDs remain unreserved.
