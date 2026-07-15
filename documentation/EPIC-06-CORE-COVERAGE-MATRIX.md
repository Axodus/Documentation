---
schema_version: "1.0.0"
document_id: "DOC-RPT-144"
aliases: []
document_type: "REPORT"
title: "EPIC-06 Core Coverage Matrix"
summary: "Inventories all EPIC-06 target core pages and freezes compact coverage, metadata, authority, and disposition classification for REQ-01."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_06"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-06-CORE-COVERAGE-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 Core Coverage Matrix

## Baseline Recalculation

| Core | Pages | Governed | Under-governed |
| --- | ---: | ---: | ---: |
| `business` | 15 | 1 | 14 |
| `mining` | 23 | 6 | 17 |
| `lottery` | 21 | 6 | 15 |
| `treasury` | 16 | 4 | 12 |
| `tokenomics` | 17 | 1 | 16 |
| `runtime` | 15 | 14 | 1 |
| **Total** | **107** | **32** | **75** |

## Matrix Rules

- `Meta`: `G` governed front matter, `U` under-governed or legacy header style.
- `Profile`: compact coverage profile applied to the page.
- `SoT`: source-of-truth class.
- `Disposition` is the frozen REQ-01 page posture.

## Coverage Profiles

| Profile | Core | C | A | G | O | S | B | Reading |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `BUS-P1` | Business | 1 | 0 | 0 | 0 | 0 | 1 | README/index stub only. |
| `BUS-P2` | Business | 3 | 2 | 2 | 2 | 2 | 2 | Governed overview anchor. |
| `BUS-P3` | Business | 2 | 1 | 1 | 3 | 2 | 2 | Operational pipeline and delivery detail. |
| `BUS-P4` | Business | 2 | 1 | 2 | 2 | 2 | 3 | Governance, DAO, plugin, ACS, and routing boundary pages. |
| `BUS-P5` | Business | 2 | 1 | 1 | 1 | 1 | 3 | Cross-core BBA alignment page with authority sensitivity. |
| `MIN-P1` | Mining | 1 | 0 | 0 | 0 | 0 | 1 | README/index stub only. |
| `MIN-P2` | Mining | 3 | 3 | 1 | 2 | 2 | 2 | Governed overview/architecture/model anchors. |
| `MIN-P3` | Mining | 2 | 2 | 1 | 2 | 2 | 2 | Ungoverned support and alignment pages. |
| `MIN-P4` | Mining | 2 | 2 | 1 | 3 | 2 | 3 | Operational, payout, telemetry, or user-facing pages with higher boundary sensitivity. |
| `LOT-P1` | Lottery | 1 | 0 | 0 | 0 | 0 | 1 | README/index stub only. |
| `LOT-P2` | Lottery | 3 | 2 | 1 | 1 | 2 | 3 | Governed overview and concept anchors. |
| `LOT-P3` | Lottery | 2 | 2 | 1 | 2 | 2 | 3 | Ungoverned mechanism pages that remain concept/prototype only. |
| `LOT-P4` | Lottery | 2 | 1 | 1 | 2 | 2 | 4 | Prize, fee, runtime, and settlement pages needing stronger legal/boundary posture. |
| `TRE-P1` | Treasury | 1 | 0 | 0 | 0 | 0 | 1 | README/index stub only. |
| `TRE-P2` | Treasury | 3 | 2 | 2 | 1 | 2 | 3 | Governed overview and control anchors. |
| `TRE-P3` | Treasury | 2 | 2 | 1 | 2 | 2 | 3 | Ungoverned architecture, reporting, and alignment pages. |
| `TRE-P4` | Treasury | 2 | 2 | 2 | 2 | 2 | 4 | Policy, allocation, reserves, fees, and strategy pages with financial sensitivity. |
| `TOK-P1` | Tokenomics | 1 | 0 | 0 | 0 | 0 | 1 | README/index stub only. |
| `TOK-P2` | Tokenomics | 3 | 2 | 2 | 1 | 2 | 3 | Governed overview anchor. |
| `TOK-P3` | Tokenomics | 2 | 2 | 1 | 1 | 2 | 3 | Utility, participation, alignment, and reporting pages. |
| `TOK-P4` | Tokenomics | 2 | 3 | 2 | 2 | 2 | 4 | Issuance, supply, reward, and technical mechanism pages with claim sensitivity. |
| `RUN-P1` | Runtime | 1 | 0 | 0 | 0 | 0 | 1 | README/index stub only. |
| `RUN-P2` | Runtime | 3 | 3 | 2 | 3 | 2 | 2 | Governed runtime operating-model pages. |

## Page Inventory

### Business

| Path | Meta | Profile | Authority | SoT | Disposition |
| --- | --- | --- | --- | --- | --- |
| `docs/business/README.md` | `U` | `BUS-P1` | `BUSINESS` | `DOCUMENTATION_LEGACY_REFERENCE` | `CONSOLIDATE_INTO_EXISTING_PAGE` |
| `docs/business/accountability.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/business/acs-integration.md` | `U` | `BUS-P4` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/business/bba.md` | `U` | `BUS-P5` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `AUTHORITY_REVIEW_REQUIRED` |
| `docs/business/change-requests.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/business/client-lifecycle.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/business/dao-service-requests.md` | `U` | `BUS-P4` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/business/delivery-lifecycle.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/business/governance-alignment.md` | `U` | `BUS-P4` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/business/overview.md` | `G` | `BUS-P2` | `BUSINESS` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/business/plugin-requests.md` | `U` | `BUS-P4` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/business/request-intake.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/business/risk-and-compliance.md` | `U` | `BUS-P4` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/business/runtime.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/business/service-catalog.md` | `U` | `BUS-P3` | `BUSINESS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |

### Mining

| Path | Meta | Profile | Authority | SoT | Disposition |
| --- | --- | --- | --- | --- | --- |
| `docs/mining/README.md` | `U` | `MIN-P1` | `MINING` | `DOCUMENTATION_LEGACY_REFERENCE` | `CONSOLIDATE_INTO_EXISTING_PAGE` |
| `docs/mining/academy-and-user-education.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/acs-integration.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/mining/architecture.md` | `G` | `MIN-P2` | `MINING` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/mining/costs-fees-and-profitability.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/mining/governance-alignment.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/hardware-energy-and-uptime.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/infrastructure-and-operations.md` | `G` | `MIN-P2` | `MINING` | `DOCUMENTATION_CANONICAL` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/mining/marketplace-business-and-bba-alignment.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/mining-models.md` | `G` | `MIN-P2` | `MINING` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/mining/monitoring-and-telemetry.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/mining/node-and-validator-operations.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/mining/overview.md` | `G` | `MIN-P2` | `MINING` | `DOCUMENTATION_CANONICAL` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/mining/pools-hashrate-and-network-difficulty.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/reporting-and-accountability.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/rewards-and-payouts.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/mining/risk-and-compliance.md` | `G` | `MIN-P2` | `MINING` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/mining/security-and-custody.md` | `G` | `MIN-P2` | `MINING` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/mining/sustainability-and-responsible-operations.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/tokenomics-alignment.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/trading-and-risk-hedging.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/mining/treasury-alignment.md` | `U` | `MIN-P3` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/mining/user-facing-products.md` | `U` | `MIN-P4` | `MINING` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |

### Lottery

| Path | Meta | Profile | Authority | SoT | Disposition |
| --- | --- | --- | --- | --- | --- |
| `docs/lottery/README.md` | `U` | `LOT-P1` | `LOTTERY` | `DOCUMENTATION_LEGACY_REFERENCE` | `CONSOLIDATE_INTO_EXISTING_PAGE` |
| `docs/lottery/acs-integration.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/lottery/claims-and-settlement.md` | `U` | `LOT-P4` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `LEGAL_REVIEW_REQUIRED` |
| `docs/lottery/cryptodraw.md` | `G` | `LOT-P2` | `LOTTERY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/lottery/draw-lifecycle.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/lottery/game-models.md` | `G` | `LOT-P2` | `LOTTERY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/lottery/governance-alignment.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/lottery/lotofacil-style-model.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/lottery/merkle-and-indexing.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/lottery/operations-and-runtime.md` | `U` | `LOT-P4` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `LEGAL_REVIEW_REQUIRED` |
| `docs/lottery/overview.md` | `G` | `LOT-P2` | `LOTTERY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/lottery/prize-pools-and-payouts.md` | `U` | `LOT-P4` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `LEGAL_REVIEW_REQUIRED` |
| `docs/lottery/randomness-and-vrf.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/lottery/reporting-and-accountability.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/lottery/responsible-participation.md` | `G` | `LOT-P2` | `LOTTERY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/lottery/risk-and-compliance.md` | `G` | `LOT-P2` | `LOTTERY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/lottery/security-and-smart-contracts.md` | `G` | `LOT-P2` | `LOTTERY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/lottery/supersete-style-model.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/lottery/ticket-model.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/lottery/tokenomics-alignment.md` | `U` | `LOT-P3` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/lottery/treasury-and-fees.md` | `U` | `LOT-P4` | `LOTTERY` | `DOCUMENTATION_PUBLIC_BASELINE` | `LEGAL_REVIEW_REQUIRED` |

### Treasury

| Path | Meta | Profile | Authority | SoT | Disposition |
| --- | --- | --- | --- | --- | --- |
| `docs/treasury/README.md` | `U` | `TRE-P1` | `TREASURY` | `DOCUMENTATION_LEGACY_REFERENCE` | `CONSOLIDATE_INTO_EXISTING_PAGE` |
| `docs/treasury/acs-trinity-integration.md` | `U` | `TRE-P3` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/architecture.md` | `U` | `TRE-P3` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/treasury/capital-allocation.md` | `U` | `TRE-P4` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/compliance-and-disclosures.md` | `G` | `TRE-P2` | `TREASURY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/treasury/custody-and-security.md` | `G` | `TRE-P2` | `TREASURY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/treasury/governance-alignment.md` | `U` | `TRE-P3` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/overview.md` | `G` | `TRE-P2` | `TREASURY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/treasury/reporting-and-accountability.md` | `U` | `TRE-P3` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/treasury/reserves-and-liquidity.md` | `U` | `TRE-P4` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/revenue-and-fees.md` | `U` | `TRE-P4` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/risk-management.md` | `G` | `TRE-P2` | `TREASURY` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/treasury/strategy-oversight.md` | `U` | `TRE-P4` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/tokenomics-alignment.md` | `U` | `TRE-P3` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/trading-alignment.md` | `U` | `TRE-P4` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/treasury/treasury-policy.md` | `U` | `TRE-P4` | `TREASURY` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |

### Tokenomics

| Path | Meta | Profile | Authority | SoT | Disposition |
| --- | --- | --- | --- | --- | --- |
| `docs/tokenomics/README.md` | `U` | `TOK-P1` | `TOKENOMICS` | `DOCUMENTATION_LEGACY_REFERENCE` | `CONSOLIDATE_INTO_EXISTING_PAGE` |
| `docs/tokenomics/academy-rewards.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/contract-dependencies.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/tokenomics/cross-chain-readiness.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/tokenomics/governance-participation.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/locked-rewards.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/tokenomics/marketplace-utility.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/neurons-token.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/tokenomics/overview.md` | `G` | `TOK-P2` | `TOKENOMICS` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/tokenomics/pok-minting.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/reporting-and-accountability.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_METADATA_HARDENING` |
| `docs/tokenomics/reward-policy.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/risk-and-compliance.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/supply-and-emission.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/technical-architecture.md` | `U` | `TOK-P4` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_STATUS_QUALIFICATION` |
| `docs/tokenomics/treasury-alignment.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |
| `docs/tokenomics/utility-model.md` | `U` | `TOK-P3` | `TOKENOMICS` | `DOCUMENTATION_PUBLIC_BASELINE` | `KEEP_WITH_BOUNDARY_QUALIFICATION` |

### Runtime

| Path | Meta | Profile | Authority | SoT | Disposition |
| --- | --- | --- | --- | --- | --- |
| `docs/runtime/README.md` | `U` | `RUN-P1` | `RUNTIME` | `DOCUMENTATION_LEGACY_REFERENCE` | `CONSOLIDATE_INTO_EXISTING_PAGE` |
| `docs/runtime/accountability-records.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/acs-integration.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/architecture.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/change-control.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/communication-cadence.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/delays-and-blockers.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/execution-handoff.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/governance-escalation.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/milestones.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/overview.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/request-lifecycle.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/risk-controls.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/status-model.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |
| `docs/runtime/validation-and-confirmation.md` | `G` | `RUN-P2` | `RUNTIME` | `DOCUMENTATION_CANONICAL` | `KEEP_CANONICAL` |

## Inventory Reading

The 107-page target surface already has broad topical coverage. The dominant
inventory result is not missing breadth. It is uneven canonicalization,
especially in Business, Tokenomics, Treasury, Mining, and Lottery.
