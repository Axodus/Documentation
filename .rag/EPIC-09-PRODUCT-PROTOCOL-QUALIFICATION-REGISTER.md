---
schema_version: "1.0.0"
document_id: "DOC-RPT-232"
aliases: []
document_type: "REPORT"
title: "EPIC-09 Product and Protocol Qualification Register"
summary: "Freezes bounded substance decisions for Trading, Mining, Lottery, DeFi, and DEX."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_09"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-17"
last_updated: "2026-07-17"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-09"]
related_requirements: ["DOCUMENTATION-EPIC-09-REQ-05"]
related_adrs: []
related_cores: ["TRADING", "MINING", "LOTTERY", "DEFI", "DEX"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-09-PRODUCT-PROTOCOL-QUALIFICATION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-09 Product and Protocol Qualification Register

| Decision ID | Path | Frozen Action | Required Substance | Status Decision | Residual Dependency | REQ-06 Eligibility |
| --- | --- | --- | --- | --- | --- | --- |
| `QUAL-EP9-PP-001` | `docs/defi/academy-and-user-education.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-002` | `docs/defi/acs-integration.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-003` | `docs/defi/compliance-and-disclosures.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-004` | `docs/defi/daas.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-005` | `docs/defi/derivatives-and-debentures.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-006` | `docs/defi/etf-daas.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-007` | `docs/defi/governance-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-008` | `docs/defi/liquidity-model.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-009` | `docs/defi/protocol-model.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-010` | `docs/defi/reporting-and-accountability.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-011` | `docs/defi/risk-management.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-012` | `docs/defi/security-and-smart-contracts.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-013` | `docs/defi/staking-and-yield.md` | `EDIT_FOR_SUBSTANCE` | conceptual economic flow, authority and custody dependency, accounting boundary, prohibited return claims and disabled financial state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-014` | `docs/defi/tokenomics-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-015` | `docs/defi/treasury-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-016` | `docs/defi/vaults-and-strategies.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-017` | `docs/dex/academy-and-user-education.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-018` | `docs/dex/acs-integration.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-019` | `docs/dex/fees-and-revenue.md` | `EDIT_FOR_SUBSTANCE` | conceptual economic flow, authority and custody dependency, accounting boundary, prohibited return claims and disabled financial state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-020` | `docs/dex/governance-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-021` | `docs/dex/liquidity-pools.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-022` | `docs/dex/listing-policy.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-023` | `docs/dex/lp-model.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-024` | `docs/dex/marketplace-integration.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-025` | `docs/dex/mev-and-execution-risk.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-026` | `docs/dex/reporting-and-accountability.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-027` | `docs/dex/risk-and-disclosures.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-028` | `docs/dex/routing-and-aggregation.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-029` | `docs/dex/security-and-smart-contracts.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-030` | `docs/dex/slippage-and-price-impact.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-031` | `docs/dex/swap-model.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-032` | `docs/dex/tokenomics-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-033` | `docs/dex/trading-integration.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-034` | `docs/dex/treasury-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-035` | `docs/lottery/acs-integration.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-036` | `docs/lottery/claims-and-settlement.md` | `EDIT_FOR_SUBSTANCE` | conceptual economic flow, authority and custody dependency, accounting boundary, prohibited return claims and disabled financial state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-037` | `docs/lottery/game-models.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-038` | `docs/lottery/governance-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-039` | `docs/lottery/lotofacil-style-model.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-040` | `docs/lottery/merkle-and-indexing.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-041` | `docs/lottery/operations-and-runtime.md` | `EDIT_FOR_SUBSTANCE` | trigger, actors, steps, controls, observability, failure, suspension, recovery and current activation status | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-042` | `docs/lottery/randomness-and-vrf.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-043` | `docs/lottery/reporting-and-accountability.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-044` | `docs/lottery/responsible-participation.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-045` | `docs/lottery/security-and-smart-contracts.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-046` | `docs/lottery/supersete-style-model.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-047` | `docs/lottery/tokenomics-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-048` | `docs/lottery/treasury-and-fees.md` | `EDIT_FOR_SUBSTANCE` | conceptual economic flow, authority and custody dependency, accounting boundary, prohibited return claims and disabled financial state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `LEGAL_AND_BOUNDARY_BLOCKED` |
| `QUAL-EP9-PP-049` | `docs/mining/academy-and-user-education.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-050` | `docs/mining/acs-integration.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-051` | `docs/mining/architecture.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-052` | `docs/mining/costs-fees-and-profitability.md` | `EDIT_FOR_SUBSTANCE` | conceptual economic flow, authority and custody dependency, accounting boundary, prohibited return claims and disabled financial state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-053` | `docs/mining/governance-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-054` | `docs/mining/hardware-energy-and-uptime.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-055` | `docs/mining/infrastructure-and-operations.md` | `EDIT_FOR_SUBSTANCE` | trigger, actors, steps, controls, observability, failure, suspension, recovery and current activation status | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-056` | `docs/mining/marketplace-business-and-bba-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-057` | `docs/mining/mining-models.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-058` | `docs/mining/monitoring-and-telemetry.md` | `EDIT_FOR_SUBSTANCE` | trigger, actors, steps, controls, observability, failure, suspension, recovery and current activation status | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-059` | `docs/mining/node-and-validator-operations.md` | `EDIT_FOR_SUBSTANCE` | trigger, actors, steps, controls, observability, failure, suspension, recovery and current activation status | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-060` | `docs/mining/pools-hashrate-and-network-difficulty.md` | `EDIT_FOR_SUBSTANCE` | components, data or assets, state transitions, interfaces, failure modes, implementation status and explicit unknowns | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-061` | `docs/mining/reporting-and-accountability.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-062` | `docs/mining/rewards-and-payouts.md` | `EDIT_FOR_SUBSTANCE` | conceptual economic flow, authority and custody dependency, accounting boundary, prohibited return claims and disabled financial state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-063` | `docs/mining/security-and-custody.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-064` | `docs/mining/sustainability-and-responsible-operations.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-065` | `docs/mining/tokenomics-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-066` | `docs/mining/trading-and-risk-hedging.md` | `EDIT_FOR_SUBSTANCE` | risk source, affected actor, control, reviewer, escalation, unresolved legal/security limits and non-assurance | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-067` | `docs/mining/treasury-alignment.md` | `EDIT_FOR_SUBSTANCE` | bilateral inputs and outputs, interface boundary, authority dependency, status, failure and disabled-execution state | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-PP-068` | `docs/mining/user-facing-products.md` | `EDIT_FOR_SUBSTANCE` | concrete purpose, actors, inputs, outputs, process, authority, dependencies, status, limitations and failure behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |

## Product Boundaries

- No page may imply enabled exchange, provider, custody, mining, draw, swap, vault, yield, payout, settlement, or strategy execution.
- Financial flows are conceptual until authority, custody, signing, reconciliation, and activation evidence exists.
- Performance, return, yield, revenue, prize, liquidity, sustainability, compliance, and security guarantees are prohibited.
- Lottery pages remain legal-and-boundary blocked; documentary clarification is not a public release decision.
- Every evidence-dependent state remains `DEFER_TO_EPIC_10`.

