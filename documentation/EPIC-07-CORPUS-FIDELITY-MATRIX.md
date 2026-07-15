---
schema_version: "1.0.0"
document_id: "DOC-RPT-181"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Corpus Fidelity Matrix"
summary: "Classifies every public Markdown page against the frozen canonical concept, architecture, authority, and execution models."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
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
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-06"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-CORPUS-FIDELITY-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Corpus Fidelity Matrix

## Method

All Markdown files under `docs/` at REQ-06 entry were reconciled. The matrix
measures representation against the frozen EPIC-07 models, not metadata quality.
`ABSTRACT` means materially correct but insufficiently concrete.
`INCOMPLETE` means a material model element is missing. `UNPROVEN` means the
page contains sensitive mechanics whose active interpretation lacks evidence.
`GOVERNANCE_ONLY` means the page is primarily a control surface and does not
need to explain the complete product model.

## Page Register

| Source Path | Domain | Fidelity Class | Disposition |
| --- | --- | --- | --- |
| `docs/README.md` | `README.md` | `ABSTRACT` | `DEFER` |
| `docs/academy/README.md` | `academy` | `ABSTRACT` | `DEFER` |
| `docs/academy/academy-risk.md` | `academy` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/academy/course-publishing.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/academy/governance-alignment.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/academy/learn-to-win.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/academy/locked-rewards.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/academy/marketplace-integration.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/academy/overview.md` | `academy` | `ABSTRACT` | `BATCH_01` |
| `docs/academy/proof-of-knowledge.md` | `academy` | `INCOMPLETE` | `BATCH_01` |
| `docs/academy/token-reward-flows.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/academy/tutor-validation.md` | `academy` | `INCOMPLETE` | `DEFER` |
| `docs/accountability/README.md` | `accountability` | `ABSTRACT` | `DEFER` |
| `docs/accountability/financial-reports.md` | `accountability` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/accountability/governance-records.md` | `accountability` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/accountability/overview.md` | `accountability` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/accountability/release-notes.md` | `accountability` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/accountability/roadmap-updates.md` | `accountability` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/acs/README.md` | `acs` | `ABSTRACT` | `DEFER` |
| `docs/acs/accountability.md` | `acs` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/acs/agent-roles.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/agent-smith.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/architecture.md` | `acs` | `ABSTRACT` | `DEFER` |
| `docs/acs/business-integration.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/governance-alignment.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/human-oversight.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/memory-and-knowledge.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/morpheus.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/overview.md` | `acs` | `ABSTRACT` | `BATCH_01` |
| `docs/acs/risk-review.md` | `acs` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/acs/runtime.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/security-and-risk.md` | `acs` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/acs/tooling-and-mcp.md` | `acs` | `INCOMPLETE` | `DEFER` |
| `docs/acs/trinity.md` | `acs` | `INCOMPLETE` | `BATCH_01` |
| `docs/bba-agency/README.md` | `bba-agency` | `ABSTRACT` | `DEFER` |
| `docs/bba-agency/academy-and-marketplace-alignment.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/acs-agent-workflow.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/brand-architecture.md` | `bba-agency` | `ABSTRACT` | `DEFER` |
| `docs/bba-agency/campaign-lifecycle.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/claim-review.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/client-intake.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/content-and-narrative.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/dao-and-governance-communication.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/growth-operations.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/overview.md` | `bba-agency` | `ABSTRACT` | `DEFER` |
| `docs/bba-agency/positioning.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/reporting-and-accountability.md` | `bba-agency` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/bba-agency/risk-and-compliance.md` | `bba-agency` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/bba-agency/service-model.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/bba-agency/web3-launch-support.md` | `bba-agency` | `INCOMPLETE` | `DEFER` |
| `docs/business/README.md` | `business` | `ABSTRACT` | `DEFER` |
| `docs/business/accountability.md` | `business` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/business/acs-integration.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/bba.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/change-requests.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/client-lifecycle.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/dao-service-requests.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/delivery-lifecycle.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/governance-alignment.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/overview.md` | `business` | `ABSTRACT` | `BATCH_01` |
| `docs/business/plugin-requests.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/request-intake.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/business/risk-and-compliance.md` | `business` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/business/runtime.md` | `business` | `INCOMPLETE` | `BATCH_01` |
| `docs/business/service-catalog.md` | `business` | `INCOMPLETE` | `DEFER` |
| `docs/defi/README.md` | `defi` | `ABSTRACT` | `DEFER` |
| `docs/defi/academy-and-user-education.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/acs-integration.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/architecture.md` | `defi` | `ABSTRACT` | `DEFER` |
| `docs/defi/compliance-and-disclosures.md` | `defi` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/defi/daas.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/derivatives-and-debentures.md` | `defi` | `UNPROVEN` | `DEFER` |
| `docs/defi/etf-daas.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/governance-alignment.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/liquidity-model.md` | `defi` | `UNPROVEN` | `DEFER` |
| `docs/defi/overview.md` | `defi` | `ABSTRACT` | `DEFER` |
| `docs/defi/protocol-model.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/reporting-and-accountability.md` | `defi` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/defi/risk-management.md` | `defi` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/defi/security-and-smart-contracts.md` | `defi` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/defi/staking-and-yield.md` | `defi` | `UNPROVEN` | `DEFER` |
| `docs/defi/tokenomics-alignment.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/treasury-alignment.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/defi/vaults-and-strategies.md` | `defi` | `INCOMPLETE` | `DEFER` |
| `docs/dex/README.md` | `dex` | `ABSTRACT` | `DEFER` |
| `docs/dex/academy-and-user-education.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/acs-integration.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/architecture.md` | `dex` | `ABSTRACT` | `DEFER` |
| `docs/dex/fees-and-revenue.md` | `dex` | `UNPROVEN` | `DEFER` |
| `docs/dex/governance-alignment.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/liquidity-pools.md` | `dex` | `UNPROVEN` | `DEFER` |
| `docs/dex/listing-policy.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/lp-model.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/marketplace-integration.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/mev-and-execution-risk.md` | `dex` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/dex/overview.md` | `dex` | `ABSTRACT` | `DEFER` |
| `docs/dex/reporting-and-accountability.md` | `dex` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/dex/risk-and-disclosures.md` | `dex` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/dex/routing-and-aggregation.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/security-and-smart-contracts.md` | `dex` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/dex/slippage-and-price-impact.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/swap-model.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/tokenomics-alignment.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/trading-integration.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/dex/treasury-alignment.md` | `dex` | `INCOMPLETE` | `DEFER` |
| `docs/glossary/README.md` | `glossary` | `ABSTRACT` | `DEFER` |
| `docs/glossary/terms.md` | `glossary` | `INCOMPLETE` | `DEFER` |
| `docs/governance/README.md` | `governance` | `ABSTRACT` | `DEFER` |
| `docs/governance/accountability.md` | `governance` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/governance/boardroom-council.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/community-dao.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/constitutional-governance.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/dao-federation.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/execution-receipts.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/executive-dao.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/governance-lifecycle.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/governance-risk.md` | `governance` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/governance/overview.md` | `governance` | `ABSTRACT` | `BATCH_01` |
| `docs/governance/plugin-requests.md` | `governance` | `INCOMPLETE` | `DEFER` |
| `docs/governance/proposal-lifecycle.md` | `governance` | `INCOMPLETE` | `BATCH_01` |
| `docs/index.md` | `index.md` | `ABSTRACT` | `BATCH_01` |
| `docs/lottery/README.md` | `lottery` | `ABSTRACT` | `DEFER` |
| `docs/lottery/acs-integration.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/claims-and-settlement.md` | `lottery` | `UNPROVEN` | `DEFER` |
| `docs/lottery/cryptodraw.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/draw-lifecycle.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/game-models.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/governance-alignment.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/lotofacil-style-model.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/merkle-and-indexing.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/operations-and-runtime.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/overview.md` | `lottery` | `ABSTRACT` | `DEFER` |
| `docs/lottery/prize-pools-and-payouts.md` | `lottery` | `UNPROVEN` | `DEFER` |
| `docs/lottery/randomness-and-vrf.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/reporting-and-accountability.md` | `lottery` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/lottery/responsible-participation.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/risk-and-compliance.md` | `lottery` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/lottery/security-and-smart-contracts.md` | `lottery` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/lottery/supersete-style-model.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/ticket-model.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/tokenomics-alignment.md` | `lottery` | `INCOMPLETE` | `DEFER` |
| `docs/lottery/treasury-and-fees.md` | `lottery` | `UNPROVEN` | `DEFER` |
| `docs/marketplace/README.md` | `marketplace` | `ABSTRACT` | `DEFER` |
| `docs/marketplace/academy-alignment.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/acs-integration.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/architecture.md` | `marketplace` | `ABSTRACT` | `DEFER` |
| `docs/marketplace/business-and-bba-alignment.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/buyer-flow.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/credits-and-locked-rewards.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/dex-and-defi-integration.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/disputes-refunds-and-support.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/fees-and-revenue.md` | `marketplace` | `UNPROVEN` | `DEFER` |
| `docs/marketplace/governance-alignment.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/listing-model.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/overview.md` | `marketplace` | `ABSTRACT` | `BATCH_01` |
| `docs/marketplace/payments-and-settlement.md` | `marketplace` | `UNPROVEN` | `DEFER` |
| `docs/marketplace/reporting-and-accountability.md` | `marketplace` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/marketplace/reputation-and-quality.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/risk-and-compliance.md` | `marketplace` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/marketplace/security-and-data-protection.md` | `marketplace` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/marketplace/seller-provider-model.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/service-catalog.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/tokenomics-alignment.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/marketplace/treasury-alignment.md` | `marketplace` | `INCOMPLETE` | `DEFER` |
| `docs/mining/README.md` | `mining` | `ABSTRACT` | `DEFER` |
| `docs/mining/academy-and-user-education.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/acs-integration.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/architecture.md` | `mining` | `ABSTRACT` | `DEFER` |
| `docs/mining/costs-fees-and-profitability.md` | `mining` | `UNPROVEN` | `DEFER` |
| `docs/mining/governance-alignment.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/hardware-energy-and-uptime.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/infrastructure-and-operations.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/marketplace-business-and-bba-alignment.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/mining-models.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/monitoring-and-telemetry.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/node-and-validator-operations.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/overview.md` | `mining` | `ABSTRACT` | `DEFER` |
| `docs/mining/pools-hashrate-and-network-difficulty.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/reporting-and-accountability.md` | `mining` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/mining/rewards-and-payouts.md` | `mining` | `UNPROVEN` | `DEFER` |
| `docs/mining/risk-and-compliance.md` | `mining` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/mining/security-and-custody.md` | `mining` | `UNPROVEN` | `DEFER` |
| `docs/mining/sustainability-and-responsible-operations.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/tokenomics-alignment.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/trading-and-risk-hedging.md` | `mining` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/mining/treasury-alignment.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/mining/user-facing-products.md` | `mining` | `INCOMPLETE` | `DEFER` |
| `docs/overview/README.md` | `overview` | `ABSTRACT` | `DEFER` |
| `docs/overview/constitutional-model.md` | `overview` | `ABSTRACT` | `DEFER` |
| `docs/overview/core-principles.md` | `overview` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/overview/documentation-standards.md` | `overview` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/overview/documentation-status.md` | `overview` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/overview/ecosystem-overview.md` | `overview` | `ABSTRACT` | `BATCH_01` |
| `docs/overview/product-map.md` | `overview` | `ABSTRACT` | `BATCH_01` |
| `docs/overview/risk-notices.md` | `overview` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/overview/terminology.md` | `overview` | `ABSTRACT` | `BATCH_01` |
| `docs/runtime/README.md` | `runtime` | `ABSTRACT` | `DEFER` |
| `docs/runtime/accountability-records.md` | `runtime` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/runtime/acs-integration.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/architecture.md` | `runtime` | `ABSTRACT` | `DEFER` |
| `docs/runtime/change-control.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/communication-cadence.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/delays-and-blockers.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/execution-handoff.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/governance-escalation.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/milestones.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/overview.md` | `runtime` | `ABSTRACT` | `BATCH_01` |
| `docs/runtime/request-lifecycle.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/risk-controls.md` | `runtime` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/runtime/status-model.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/runtime/validation-and-confirmation.md` | `runtime` | `INCOMPLETE` | `DEFER` |
| `docs/security/README.md` | `security` | `ABSTRACT` | `DEFER` |
| `docs/security/api-security.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/security/disclosure-policy.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/security/frontend-security.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/security/overview.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/security/smart-contract-security.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/security/trading-api-security.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/security/wallet-security.md` | `security` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/tokenomics/README.md` | `tokenomics` | `ABSTRACT` | `DEFER` |
| `docs/tokenomics/academy-rewards.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/contract-dependencies.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/cross-chain-readiness.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/governance-participation.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/locked-rewards.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/marketplace-utility.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/neurons-token.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/overview.md` | `tokenomics` | `ABSTRACT` | `BATCH_01` |
| `docs/tokenomics/pok-minting.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/reporting-and-accountability.md` | `tokenomics` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/tokenomics/reward-policy.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/risk-and-compliance.md` | `tokenomics` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/tokenomics/supply-and-emission.md` | `tokenomics` | `UNPROVEN` | `DEFER` |
| `docs/tokenomics/technical-architecture.md` | `tokenomics` | `ABSTRACT` | `DEFER` |
| `docs/tokenomics/treasury-alignment.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/tokenomics/utility-model.md` | `tokenomics` | `INCOMPLETE` | `DEFER` |
| `docs/trading/README.md` | `trading` | `ABSTRACT` | `DEFER` |
| `docs/trading/access-model.md` | `trading` | `INCOMPLETE` | `DEFER` |
| `docs/trading/acs-trinity-integration.md` | `trading` | `INCOMPLETE` | `DEFER` |
| `docs/trading/architecture.md` | `trading` | `ABSTRACT` | `DEFER` |
| `docs/trading/cex-api-security.md` | `trading` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/trading/compliance-and-user-disclosures.md` | `trading` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/trading/governance-alignment.md` | `trading` | `INCOMPLETE` | `DEFER` |
| `docs/trading/internal-trading.md` | `trading` | `UNPROVEN` | `DEFER` |
| `docs/trading/overview.md` | `trading` | `ABSTRACT` | `DEFER` |
| `docs/trading/reporting-and-accountability.md` | `trading` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/trading/risk-management.md` | `trading` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/trading/scalper-futures.md` | `trading` | `UNPROVEN` | `DEFER` |
| `docs/trading/strategy-lifecycle.md` | `trading` | `INCOMPLETE` | `DEFER` |
| `docs/trading/treasury-alignment.md` | `trading` | `INCOMPLETE` | `DEFER` |
| `docs/trading/user-facing-strategies.md` | `trading` | `INCOMPLETE` | `DEFER` |
| `docs/treasury/README.md` | `treasury` | `ABSTRACT` | `DEFER` |
| `docs/treasury/acs-trinity-integration.md` | `treasury` | `INCOMPLETE` | `DEFER` |
| `docs/treasury/architecture.md` | `treasury` | `ABSTRACT` | `DEFER` |
| `docs/treasury/capital-allocation.md` | `treasury` | `UNPROVEN` | `DEFER` |
| `docs/treasury/compliance-and-disclosures.md` | `treasury` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/treasury/custody-and-security.md` | `treasury` | `UNPROVEN` | `DEFER` |
| `docs/treasury/governance-alignment.md` | `treasury` | `INCOMPLETE` | `DEFER` |
| `docs/treasury/overview.md` | `treasury` | `ABSTRACT` | `BATCH_01` |
| `docs/treasury/reporting-and-accountability.md` | `treasury` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/treasury/reserves-and-liquidity.md` | `treasury` | `UNPROVEN` | `DEFER` |
| `docs/treasury/revenue-and-fees.md` | `treasury` | `UNPROVEN` | `DEFER` |
| `docs/treasury/risk-management.md` | `treasury` | `GOVERNANCE_ONLY` | `DEFER` |
| `docs/treasury/strategy-oversight.md` | `treasury` | `INCOMPLETE` | `DEFER` |
| `docs/treasury/tokenomics-alignment.md` | `treasury` | `INCOMPLETE` | `DEFER` |
| `docs/treasury/trading-alignment.md` | `treasury` | `INCOMPLETE` | `DEFER` |
| `docs/treasury/treasury-policy.md` | `treasury` | `INCOMPLETE` | `DEFER` |

## Reconciliation

- Expected Markdown pages: `267`
- Reconciled Markdown pages: `267`
- Count difference: `0`
- Batch selection is intentionally limited to canonical anchors; deferred pages
  remain governed backlog rather than receiving synthetic completeness.

