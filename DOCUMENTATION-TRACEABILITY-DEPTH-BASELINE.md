---
schema_version: "1.0.0"
document_id: "DOC-RPT-043"
aliases: []
document_type: "REPORT"
title: "Documentation Traceability Depth Baseline"
summary: "Measures default-overview-only canonical traceability depth and proposes evidence-backed enrichment targets without adding relationships."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.TRACEABILITY.REPORTING"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-07"
last_updated: "2026-07-07"
last_reviewed: "2026-07-07"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{"type":"DEPENDS_ON","target":"DOC-ADR-022"},{"type":"RELATES_TO","target":"DOC-SPEC-002"},{"type":"RELATES_TO","target":"DOC-SPEC-006"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-06"]
related_adrs: ["DOC-ADR-004","DOC-ADR-022","DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{"repository":"Axodus/Documentation","path":"documentation.manifest.json","ref":"main","kind":"CONFIG","environment":"LOCAL"},{"repository":"Axodus/Documentation","path":"documentation.graph.json","ref":"main","kind":"CONFIG","environment":"LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Traceability Depth Baseline

## Decision

`AXODUS-DOCUMENTATION-EPIC-03-REQ-06: TRACEABILITY_DEPTH_BASELINED`

This report measures current traceability depth and proposes remediation
targets only. It does not add, remove, or mutate relationship metadata.

## Measurement Method

Default-overview-only means a canonical non-overview public document whose only
declared semantic relationship targets its core overview. The measurement uses
`documentation.manifest.json` relationship data and excludes generated inverse
relationships.

The EPIC-03 enrichment cohort excludes portfolio-level `CORE` transversal
guides because the accepted EPIC-03 metric was scoped to migrated public core
documents.

## Baseline Result

| Measure | Count |
|---|---:|
| Canonical documents in public generator manifest | 171 |
| Non-overview documents with only overview target | 42 |
| EPIC-03 enrichment cohort | 40 |
| CORE transversal observations outside cohort | 2 |
| Relationships added by this request | 0 |
| Documents migrated by this request | 0 |

## Domain Distribution

| Domain | Cohort count |
|---|---:|
| `ACCOUNT` | 4 |
| `DEX` | 5 |
| `GOV` | 5 |
| `LOTTERY` | 5 |
| `MARKET` | 5 |
| `MINING` | 5 |
| `RUNTIME` | 3 |
| `SEC` | 5 |
| `TREASURY` | 3 |
| **Total** | **40** |

## Candidate Enrichment Targets

These targets are proposals for a later remediation request. Each proposed
target must be confirmed against source content before any relationship edge is
added.

| Document | Current target | Candidate additional targets |
|---|---|---|
| `ACCOUNT-GDE-002` — `docs/accountability/financial-reports.md` | `ACCOUNT-GDE-001` | `CORE-GDE-004`, `DOC-POL-004` |
| `ACCOUNT-GDE-003` — `docs/accountability/governance-records.md` | `ACCOUNT-GDE-001` | `DOC-POL-001`, `GOV-GDE-001` |
| `ACCOUNT-GDE-004` — `docs/accountability/release-notes.md` | `ACCOUNT-GDE-001` | `DOC-POL-004`, `DOC-ADR-014` |
| `ACCOUNT-GDE-005` — `docs/accountability/roadmap-updates.md` | `ACCOUNT-GDE-001` | `DOC-ROAD-010`, `DOC-SPEC-009` |
| `DEX-GDE-002` — `docs/dex/architecture.md` | `DEX-GDE-001` | `DEX-GDE-006`, `DEX-GDE-004` |
| `DEX-GDE-003` — `docs/dex/liquidity-pools.md` | `DEX-GDE-001` | `DEX-GDE-004`, `DEFI-GDE-001` |
| `DEX-GDE-004` — `docs/dex/risk-and-disclosures.md` | `DEX-GDE-001` | `CORE-GDE-004`, `DEX-GDE-006` |
| `DEX-GDE-005` — `docs/dex/routing-and-aggregation.md` | `DEX-GDE-001` | `DEX-GDE-004`, `DEX-GDE-006` |
| `DEX-GDE-006` — `docs/dex/security-and-smart-contracts.md` | `DEX-GDE-001` | `SEC-GDE-005`, `DEX-GDE-004` |
| `GOV-GDE-002` — `docs/governance/accountability.md` | `GOV-GDE-001` | `DOC-POL-001`, `ACCOUNT-GDE-001` |
| `GOV-GDE-003` — `docs/governance/constitutional-governance.md` | `GOV-GDE-001` | `DOC-POL-001`, `DOC-ADR-017` |
| `GOV-GDE-004` — `docs/governance/execution-receipts.md` | `GOV-GDE-001` | `DOC-SPEC-004`, `ACCOUNT-GDE-003` |
| `GOV-GDE-005` — `docs/governance/governance-risk.md` | `GOV-GDE-001` | `CORE-GDE-004`, `DOC-POL-001` |
| `GOV-GDE-006` — `docs/governance/proposal-lifecycle.md` | `GOV-GDE-001` | `DOC-POL-001`, `DOC-POL-003` |
| `LOTTERY-GDE-002` — `docs/lottery/cryptodraw.md` | `LOTTERY-GDE-001` | `LOTTERY-GDE-006`, `LOTTERY-GDE-005` |
| `LOTTERY-GDE-003` — `docs/lottery/game-models.md` | `LOTTERY-GDE-001` | `LOTTERY-GDE-005`, `CORE-GDE-004` |
| `LOTTERY-GDE-004` — `docs/lottery/responsible-participation.md` | `LOTTERY-GDE-001` | `CORE-GDE-004`, `LOTTERY-GDE-005` |
| `LOTTERY-GDE-005` — `docs/lottery/risk-and-compliance.md` | `LOTTERY-GDE-001` | `CORE-GDE-004`, `LOTTERY-GDE-006` |
| `LOTTERY-GDE-006` — `docs/lottery/security-and-smart-contracts.md` | `LOTTERY-GDE-001` | `SEC-GDE-005`, `LOTTERY-GDE-005` |
| `MARKET-GDE-002` — `docs/marketplace/architecture.md` | `MARKET-GDE-001` | `MARKET-GDE-005`, `MARKET-GDE-004` |
| `MARKET-GDE-003` — `docs/marketplace/buyer-flow.md` | `MARKET-GDE-001` | `MARKET-GDE-004`, `CORE-GDE-004` |
| `MARKET-GDE-004` — `docs/marketplace/risk-and-compliance.md` | `MARKET-GDE-001` | `CORE-GDE-004`, `MARKET-GDE-005` |
| `MARKET-GDE-005` — `docs/marketplace/security-and-data-protection.md` | `MARKET-GDE-001` | `SEC-GDE-001`, `MARKET-GDE-004` |
| `MARKET-GDE-006` — `docs/marketplace/seller-provider-model.md` | `MARKET-GDE-001` | `MARKET-GDE-004`, `DOC-POL-001` |
| `MINING-GDE-002` — `docs/mining/architecture.md` | `MINING-GDE-001` | `MINING-GDE-006`, `MINING-GDE-005` |
| `MINING-GDE-003` — `docs/mining/infrastructure-and-operations.md` | `MINING-GDE-001` | `MINING-GDE-006`, `MINING-GDE-005` |
| `MINING-GDE-004` — `docs/mining/mining-models.md` | `MINING-GDE-001` | `MINING-GDE-005`, `CORE-GDE-004` |
| `MINING-GDE-005` — `docs/mining/risk-and-compliance.md` | `MINING-GDE-001` | `CORE-GDE-004`, `MINING-GDE-006` |
| `MINING-GDE-006` — `docs/mining/security-and-custody.md` | `MINING-GDE-001` | `SEC-GDE-006`, `MINING-GDE-005` |
| `RUNTIME-GDE-002` — `docs/runtime/change-control.md` | `RUNTIME-GDE-001` | `DOC-POL-003`, `DOC-ADR-014` |
| `RUNTIME-GDE-003` — `docs/runtime/governance-escalation.md` | `RUNTIME-GDE-001` | `DOC-POL-001`, `GOV-GDE-001` |
| `RUNTIME-GDE-004` — `docs/runtime/risk-controls.md` | `RUNTIME-GDE-001` | `CORE-GDE-004`, `DOC-POL-003` |
| `SEC-GDE-002` — `docs/security/api-security.md` | `SEC-GDE-001` | `CORE-GDE-004`, `DOC-ADR-014` |
| `SEC-GDE-003` — `docs/security/disclosure-policy.md` | `SEC-GDE-001` | `DOC-POL-004`, `CORE-GDE-004` |
| `SEC-GDE-004` — `docs/security/frontend-security.md` | `SEC-GDE-001` | `CORE-GDE-004`, `DOC-ADR-014` |
| `SEC-GDE-005` — `docs/security/smart-contract-security.md` | `SEC-GDE-001` | `CORE-GDE-004`, `DOC-ADR-018` |
| `SEC-GDE-006` — `docs/security/wallet-security.md` | `SEC-GDE-001` | `CORE-GDE-004`, `DOC-ADR-014` |
| `TREASURY-GDE-002` — `docs/treasury/compliance-and-disclosures.md` | `TREASURY-GDE-001` | `CORE-GDE-004`, `DOC-POL-004` |
| `TREASURY-GDE-003` — `docs/treasury/custody-and-security.md` | `TREASURY-GDE-001` | `SEC-GDE-006`, `TREASURY-GDE-004` |
| `TREASURY-GDE-004` — `docs/treasury/risk-management.md` | `TREASURY-GDE-001` | `CORE-GDE-004`, `TREASURY-GDE-003` |

## CORE Transversal Observations

The following two canonical documents also have only the ecosystem overview as
their declared semantic target, but they are outside the EPIC-03 migrated-public
core enrichment cohort:

| Document | Current target | Note |
|---|---|---|
| `CORE-GDE-002` — `docs/overview/core-principles.md` | `CORE-GDE-001` | Candidate for later relation to governance and risk criteria. |
| `CORE-GDE-004` — `docs/overview/risk-notices.md` | `CORE-GDE-001` | Candidate for later relation to compliance and claim-safety governance. |

## Remediation Batches

Recommended remediation should be evidence-reviewed in two or three small
batches. Risk, security, compliance, and governance documents should be reviewed
first because they improve downstream discovery for many product cores.

No relationship should be added unless the source document content directly
supports the target. Owner, lifecycle, authority, maturity, and gate metadata
must remain metadata and must not become graph edges.

## Gate Preservation

This request measured traceability depth and proposed remediation targets only.
It did not add speculative relations, add metadata-derived edges, migrate
legacy documents, reserve final IDs, remove baseline entries, remove exception
entries, authorize publication, enable production, execute financial actions,
use credentials, enable providers, write contracts, modify production databases
or open operational gates.
