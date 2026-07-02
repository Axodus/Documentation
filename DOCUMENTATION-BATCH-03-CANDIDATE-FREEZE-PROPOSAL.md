---
schema_version: "1.0.0"
document_id: "DOC-ROAD-007"
aliases: []
document_type: "ROADMAP"
title: "Documentation Batch 03 Candidate Freeze Proposal"
summary: "Records Batch 02 audit, traceability, or Batch 03 planning for DOCUMENTATION-EPIC-02."
version: "1.1.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "PROJECT"
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
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-006"}, {type: "DEPENDS_ON", target: "DOC-RPT-025"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-08"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 03 Candidate Freeze Proposal

## Primaries

| Path | Scope | Proposed ID pattern | Classification | Score | Semantic target | Status |
|---|---|---|---|---:|---|---|
| `docs/mining/architecture.md` | `MINING` | `MINING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MINING-GDE-001` | `MIGRATED` |
| `docs/mining/infrastructure-and-operations.md` | `MINING` | `MINING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MINING-GDE-001` | `MIGRATED` |
| `docs/mining/mining-models.md` | `MINING` | `MINING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MINING-GDE-001` | `MIGRATED` |
| `docs/mining/risk-and-compliance.md` | `MINING` | `MINING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MINING-GDE-001` | `MIGRATED` |
| `docs/mining/security-and-custody.md` | `MINING` | `MINING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MINING-GDE-001` | `MIGRATED` |
| `docs/marketplace/architecture.md` | `MARKET` | `MARKET-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MARKET-GDE-001` | `MIGRATED` |
| `docs/marketplace/buyer-flow.md` | `MARKET` | `MARKET-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MARKET-GDE-001` | `MIGRATED` |
| `docs/marketplace/risk-and-compliance.md` | `MARKET` | `MARKET-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MARKET-GDE-001` | `MIGRATED` |
| `docs/marketplace/security-and-data-protection.md` | `MARKET` | `MARKET-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MARKET-GDE-001` | `MIGRATED` |
| `docs/marketplace/seller-provider-model.md` | `MARKET` | `MARKET-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MARKET-GDE-001` | `MIGRATED` |
| `docs/lottery/cryptodraw.md` | `LOTTERY` | `LOTTERY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `LOTTERY-GDE-001` | `MIGRATED` |
| `docs/lottery/game-models.md` | `LOTTERY` | `LOTTERY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `LOTTERY-GDE-001` | `MIGRATED` |
| `docs/lottery/responsible-participation.md` | `LOTTERY` | `LOTTERY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `LOTTERY-GDE-001` | `MIGRATED` |
| `docs/lottery/risk-and-compliance.md` | `LOTTERY` | `LOTTERY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `LOTTERY-GDE-001` | `MIGRATED` |
| `docs/lottery/security-and-smart-contracts.md` | `LOTTERY` | `LOTTERY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `LOTTERY-GDE-001` | `MIGRATED` |
| `docs/dex/architecture.md` | `DEX` | `DEX-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEX-GDE-001` | `MIGRATED` |
| `docs/dex/liquidity-pools.md` | `DEX` | `DEX-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEX-GDE-001` | `MIGRATED` |
| `docs/dex/risk-and-disclosures.md` | `DEX` | `DEX-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEX-GDE-001` | `MIGRATED` |
| `docs/dex/routing-and-aggregation.md` | `DEX` | `DEX-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEX-GDE-001` | `MIGRATED` |
| `docs/dex/security-and-smart-contracts.md` | `DEX` | `DEX-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEX-GDE-001` | `MIGRATED` |

## Alternates

| Path | Scope | Proposed ID pattern | Classification | Score | Semantic target | Status |
|---|---|---|---|---:|---|---|
| `docs/defi/risk-management.md` | `DEFI` | `DEFI-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEFI-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/academy/academy-risk.md` | `ACADEMY` | `ACADEMY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `ACADEMY-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/business/risk-and-compliance.md` | `BUSINESS` | `BUSINESS-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `BUSINESS-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/trading/risk-management.md` | `TRADING` | `TRADING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `TRADING-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/tokenomics/risk-and-compliance.md` | `TOKEN` | `TOKEN-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `TOKEN-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/treasury/strategy-oversight.md` | `TREASURY` | `TREASURY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `TREASURY-GDE-001` | `FROZEN_ALTERNATE` |

No final numeric ID is allocated or reserved.
