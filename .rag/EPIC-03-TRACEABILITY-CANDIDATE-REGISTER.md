---
schema_version: "1.0.0"
document_id: "DOC-RPT-049"
aliases: []
document_type: "REPORT"
title: "Epic 03 Traceability Candidate Register"
summary: "Registers deterministic evidence-backed relationship candidates, assigns complete dispositions, and freezes one bounded traceability execution batch."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.TRACEABILITY.CANDIDATES"
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
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-07"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-017", "DOC-ADR-022"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.graph.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/EPIC-03-TRACEABILITY-REMEDIATION-INVENTORY.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Epic 03 Traceability Candidate Register

## Purpose

This register gives every reviewed semantic candidate a stable identity, exact
source and target, evidence location, risk route, and final disposition. It is
the complete 40-document migrated public-core default-overview-only cohort from
`DOC-RPT-048`; no reviewed candidate is undecided.

## Registration Rules

- IDs are assigned once in lexicographic source-path order from
  `TRC-EP3-0001` and must never be renumbered or reused.
- A row represents one proposed authored edge. Source and target paths and IDs
  resolve in the frozen manifest.
- Evidence must come from public canonical source content. Metadata, filenames,
  ownership, proximity, and raw degree are not sufficient by themselves.
- `HIGH` confidence means the source explicitly names the target concept or
  related page. `MEDIUM` requires owner, authority, or security review. `LOW`
  is deferred.
- Only high-confidence, non-duplicate, boundary-safe, non-migration candidates
  with no critical or unresolved high-risk gate may be frozen.
- `TRACEABILITY-BATCH-01` is the only frozen batch. `NOT_ASSIGNED` means the
  candidate is not authorized for mutation.

## Candidate Register

| Candidate ID | Source Document | Source Document ID | Target Document | Target Document ID | Proposed Relationship Type | Traceability Debt Category | Evidence | Evidence Location | Confidence | Priority | Risk Level | Dependency Owner | Disposition | Execution Batch | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `TRC-EP3-0001` | `docs/accountability/financial-reports.md` | `ACCOUNT-GDE-002` | `docs/overview/risk-notices.md` | `CORE-GDE-004` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | The source requires risk notes and prohibits unsupported financial certainty; the target defines portfolio risk-notice language for financial claims. | `docs/accountability/financial-reports.md:L42-L60`; `docs/overview/risk-notices.md:L42-L58` | HIGH | P1 | MEDIUM | Accountability Nucleus | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Exact public risk-context association. |
| `TRC-EP3-0002` | `docs/accountability/governance-records.md` | `ACCOUNT-GDE-003` | `docs/governance/execution-receipts.md` | `GOV-GDE-004` | `RELATES_TO` | `MISSING_IMPLEMENTATION_TRACEABILITY` | Governance records include execution records and receipt requirements; the target defines the receipt-to-accountability relationship. | `docs/accountability/governance-records.md:L42-L55`; `docs/accountability/governance-records.md:L61-L70`; `docs/governance/execution-receipts.md:L42-L46`; `docs/governance/execution-receipts.md:L100-L106` | HIGH | P1 | MEDIUM | Accountability Nucleus | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | `RELATES_TO` avoids asserting that either guide governs the other. |
| `TRC-EP3-0003` | `docs/accountability/release-notes.md` | `ACCOUNT-GDE-004` | `adr/DOC-ADR-014-PUBLICATION-PIPELINE.md` | `DOC-ADR-014` | `DEPENDS_ON` | `MISSING_DECISION_TRACEABILITY` | Release notes require deployment evidence and separate candidate, approved, published, and production states; ADR-014 mandates separate gated publication stages. | `docs/accountability/release-notes.md:L53-L73`; `adr/DOC-ADR-014-PUBLICATION-PIPELINE.md:L46-L56` | HIGH | P1 | LOW | Accountability Nucleus | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Direction is downstream guide to approved decision. |
| `TRC-EP3-0004` | `docs/accountability/roadmap-updates.md` | `ACCOUNT-GDE-005` | `.rag/DOCUMENTATION-EPIC-03-PLAN.md` | `DOC-ROAD-010` | `RELATES_TO` | `MISSING_IMPLEMENTATION_TRACEABILITY` | The source defines generic roadmap reporting but does not identify EPIC-03 specifically; the earlier baseline suggested this target without a direct content tie. | `docs/accountability/roadmap-updates.md:L42-L69`; `.rag/DOCUMENTATION-EPIC-03-PLAN.md:L5-L7` | LOW | P2 | MEDIUM | Accountability Nucleus | `DEFER_INSUFFICIENT_EVIDENCE` | `NOT_ASSIGNED` | A generic roadmap page must not be linked to a specific epic merely to increase depth. |
| `TRC-EP3-0005` | `docs/dex/architecture.md` | `DEX-GDE-002` | `docs/dex/security-and-smart-contracts.md` | `DEX-GDE-006` | `RELATES_TO` | `MISSING_IMPLEMENTATION_TRACEABILITY` | The architecture declares a security layer with contract, router, pool, access-control, and incident responsibilities; the target defines those controls. | `docs/dex/architecture.md:L42-L55`; `docs/dex/security-and-smart-contracts.md:L42-L50` | HIGH | P1 | LOW | Axodus DEX | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Same-core architecture association. |
| `TRC-EP3-0006` | `docs/dex/liquidity-pools.md` | `DEX-GDE-003` | `docs/dex/risk-and-disclosures.md` | `DEX-GDE-004` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Pool records and lifecycle require risk review and the Related Pages section explicitly names Risk and Disclosures. | `docs/dex/liquidity-pools.md:L52-L69`; `docs/dex/risk-and-disclosures.md:L42-L46` | HIGH | P1 | LOW | Axodus DEX | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Explicit related-page evidence. |
| `TRC-EP3-0007` | `docs/dex/risk-and-disclosures.md` | `DEX-GDE-004` | `docs/dex/security-and-smart-contracts.md` | `DEX-GDE-006` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | The risk guide identifies smart-contract and approval risk and explicitly lists Security and Smart Contracts. | `docs/dex/risk-and-disclosures.md:L42-L46`; `docs/dex/risk-and-disclosures.md:L65-L71`; `docs/dex/security-and-smart-contracts.md:L42-L50` | HIGH | P1 | MEDIUM | Axodus DEX | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Public security context only; no sensitive detail is introduced. |
| `TRC-EP3-0008` | `docs/dex/routing-and-aggregation.md` | `DEX-GDE-005` | `docs/dex/risk-and-disclosures.md` | `DEX-GDE-004` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Routing evaluates risk flags and external-aggregator dependency risk; the target documents DEX execution and route risk. | `docs/dex/routing-and-aggregation.md:L42-L70`; `docs/dex/risk-and-disclosures.md:L42-L63` | HIGH | P1 | LOW | Axodus DEX | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Content establishes risk relevance without claiming a normative dependency. |
| `TRC-EP3-0009` | `docs/dex/security-and-smart-contracts.md` | `DEX-GDE-006` | `docs/security/overview.md` | `SEC-GDE-001` | `RELATES_TO` | `MISSING_INTEGRATION_TRACEABILITY` | The source explicitly names Security Overview as a related page; the target covers contracts, wallets, APIs, governance, treasury, and users. | `docs/dex/security-and-smart-contracts.md:L60-L62`; `docs/security/overview.md:L42-L50` | HIGH | P1 | MEDIUM | Axodus DEX / Security | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Boundary-safe public overview target. |
| `TRC-EP3-0010` | `docs/governance/accountability.md` | `GOV-GDE-002` | `docs/accountability/governance-records.md` | `ACCOUNT-GDE-003` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | Governance accountability says receipts feed governance records and public accountability; the target defines governance-record contents and authority boundaries. | `docs/governance/accountability.md:L42-L62`; `docs/accountability/governance-records.md:L42-L70` | HIGH | P1 | MEDIUM | Governance Nucleus | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Cross-core accountability direction requires both authorities to confirm. |
| `TRC-EP3-0011` | `docs/governance/constitutional-governance.md` | `GOV-GDE-003` | `docs/overview/core-principles.md` | `CORE-GDE-002` | `RELATES_TO` | `MISSING_DECISION_TRACEABILITY` | Constitutional governance requires alignment with core principles; the portfolio guide defines constitutional limits and governance traceability. | `docs/governance/constitutional-governance.md:L48-L52`; `docs/overview/core-principles.md:L74-L81` | MEDIUM | P1 | HIGH | Governance Nucleus | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Portfolio-level constitutional meaning must be confirmed explicitly. |
| `TRC-EP3-0012` | `docs/governance/execution-receipts.md` | `GOV-GDE-004` | `docs/accountability/governance-records.md` | `ACCOUNT-GDE-003` | `RELATES_TO` | `MISSING_IMPLEMENTATION_TRACEABILITY` | The source expressly states that receipts feed governance records; the target states that records preserve execution evidence. | `docs/governance/execution-receipts.md:L42-L50`; `docs/governance/execution-receipts.md:L100-L106`; `docs/accountability/governance-records.md:L42-L55` | HIGH | P1 | HIGH | Governance Nucleus | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Reverse of candidate 0010 is not frozen; authority review must decide whether one or both directions are warranted. |
| `TRC-EP3-0013` | `docs/governance/governance-risk.md` | `GOV-GDE-005` | `docs/overview/risk-notices.md` | `CORE-GDE-004` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | The source covers financial, legal, compliance, execution, and disclosure risks; the target defines portfolio public-risk framing. | `docs/governance/governance-risk.md:L42-L57`; `docs/overview/risk-notices.md:L42-L58` | MEDIUM | P1 | HIGH | Governance Nucleus | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Portfolio risk scope must not be inferred from topic overlap alone. |
| `TRC-EP3-0014` | `docs/governance/proposal-lifecycle.md` | `GOV-GDE-006` | `docs/governance/execution-receipts.md` | `GOV-GDE-004` | `RELATES_TO` | `MISSING_DECISION_TRACEABILITY` | The proposal lifecycle explicitly covers execution receipts and accountable execution; the target defines the receipt record. | `docs/governance/proposal-lifecycle.md:L42-L50`; `docs/governance/execution-receipts.md:L42-L50` | HIGH | P1 | MEDIUM | Governance Nucleus | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Same-core but governance-semantic review remains required. |
| `TRC-EP3-0015` | `docs/lottery/cryptodraw.md` | `LOTTERY-GDE-002` | `docs/lottery/risk-and-compliance.md` | `LOTTERY-GDE-005` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | The user flow requires risk disclosures, active status requires compliance evidence, and the source explicitly names Risk and Compliance. | `docs/lottery/cryptodraw.md:L62-L77`; `docs/lottery/cryptodraw.md:L79-L83`; `docs/lottery/risk-and-compliance.md:L42-L58` | HIGH | P1 | HIGH | Axodus Lottery / CryptoDraw | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Lottery activation and compliance semantics require enhanced review. |
| `TRC-EP3-0016` | `docs/lottery/game-models.md` | `LOTTERY-GDE-003` | `docs/lottery/risk-and-compliance.md` | `LOTTERY-GDE-005` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Game models require risk, compliance, and security review and explicitly list Risk and Compliance. | `docs/lottery/game-models.md:L42-L50`; `docs/lottery/game-models.md:L64-L73`; `docs/lottery/risk-and-compliance.md:L42-L58` | HIGH | P1 | LOW | Axodus Lottery / CryptoDraw | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | The relation records review context and does not activate a game. |
| `TRC-EP3-0017` | `docs/lottery/responsible-participation.md` | `LOTTERY-GDE-004` | `docs/lottery/risk-and-compliance.md` | `LOTTERY-GDE-005` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | Responsible participation defines financial and behavioral risk and explicitly lists Risk and Compliance. | `docs/lottery/responsible-participation.md:L42-L60`; `docs/lottery/risk-and-compliance.md:L42-L58` | HIGH | P1 | LOW | Axodus Lottery / CryptoDraw | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Same-core public risk association. |
| `TRC-EP3-0018` | `docs/lottery/risk-and-compliance.md` | `LOTTERY-GDE-005` | `docs/lottery/security-and-smart-contracts.md` | `LOTTERY-GDE-006` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | The risk guide includes security and randomness-integrity risks and explicitly lists Security and Smart Contracts. | `docs/lottery/risk-and-compliance.md:L48-L58`; `docs/lottery/risk-and-compliance.md:L68-L72`; `docs/lottery/security-and-smart-contracts.md:L42-L50` | HIGH | P1 | MEDIUM | Axodus Lottery / CryptoDraw | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Public same-core association only. |
| `TRC-EP3-0019` | `docs/lottery/security-and-smart-contracts.md` | `LOTTERY-GDE-006` | `docs/security/overview.md` | `SEC-GDE-001` | `RELATES_TO` | `MISSING_INTEGRATION_TRACEABILITY` | The source explicitly names Security Overview and the target establishes the ecosystem security review layer. | `docs/lottery/security-and-smart-contracts.md:L60-L65`; `docs/security/overview.md:L42-L50` | HIGH | P1 | HIGH | Axodus Lottery / Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Cross-core lottery security remains review-gated. |
| `TRC-EP3-0020` | `docs/marketplace/architecture.md` | `MARKET-GDE-002` | `docs/marketplace/security-and-data-protection.md` | `MARKET-GDE-005` | `RELATES_TO` | `MISSING_IMPLEMENTATION_TRACEABILITY` | The architecture defines wallet, payment, data-protection, fraud, and access-control responsibilities; the target defines those security controls. | `docs/marketplace/architecture.md:L42-L58`; `docs/marketplace/security-and-data-protection.md:L42-L50` | HIGH | P1 | LOW | Axodus Marketplace | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Same-core architecture association. |
| `TRC-EP3-0021` | `docs/marketplace/buyer-flow.md` | `MARKET-GDE-003` | `docs/marketplace/risk-and-compliance.md` | `MARKET-GDE-004` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Buyer protection requires risk disclosures and refund terms; the target covers buyer expectation, payment, refund, and claim risk. | `docs/marketplace/buyer-flow.md:L64-L66`; `docs/marketplace/risk-and-compliance.md:L42-L50` | MEDIUM | P2 | MEDIUM | Axodus Marketplace | `OWNER_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Relevant but not explicitly named as a related page. |
| `TRC-EP3-0022` | `docs/marketplace/risk-and-compliance.md` | `MARKET-GDE-004` | `docs/marketplace/security-and-data-protection.md` | `MARKET-GDE-005` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | Marketplace risk includes privacy, fraud, and security incidents; the target defines the corresponding controls and incident classes. | `docs/marketplace/risk-and-compliance.md:L42-L66`; `docs/marketplace/security-and-data-protection.md:L42-L54` | HIGH | P1 | HIGH | Axodus Marketplace | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Security owner must confirm the semantic boundary. |
| `TRC-EP3-0023` | `docs/marketplace/security-and-data-protection.md` | `MARKET-GDE-005` | `docs/security/overview.md` | `SEC-GDE-001` | `RELATES_TO` | `MISSING_INTEGRATION_TRACEABILITY` | The source explicitly names Security Overview; the target covers wallet, API, frontend, governance, treasury, and user protection. | `docs/marketplace/security-and-data-protection.md:L60-L64`; `docs/security/overview.md:L42-L50` | HIGH | P1 | MEDIUM | Axodus Marketplace / Security | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Boundary-safe public overview target. |
| `TRC-EP3-0024` | `docs/marketplace/seller-provider-model.md` | `MARKET-GDE-006` | `docs/marketplace/risk-and-compliance.md` | `MARKET-GDE-004` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | Seller duties include claims, refunds, privacy, policy, and dispute obligations; the target defines seller and buyer risk controls. | `docs/marketplace/seller-provider-model.md:L46-L66`; `docs/marketplace/risk-and-compliance.md:L42-L58` | MEDIUM | P2 | MEDIUM | Axodus Marketplace | `OWNER_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Source owner must confirm that the risk guide is the intended governed context. |
| `TRC-EP3-0025` | `docs/mining/architecture.md` | `MINING-GDE-002` | `docs/mining/security-and-custody.md` | `MINING-GDE-006` | `RELATES_TO` | `MISSING_IMPLEMENTATION_TRACEABILITY` | Mining architecture defines a security and custody layer for wallets, credentials, API keys, and hardware; the target defines that layer. | `docs/mining/architecture.md:L42-L55`; `docs/mining/security-and-custody.md:L42-L54` | HIGH | P1 | LOW | Axodus Mining | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Same-core architecture association. |
| `TRC-EP3-0026` | `docs/mining/infrastructure-and-operations.md` | `MINING-GDE-003` | `docs/mining/security-and-custody.md` | `MINING-GDE-006` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Infrastructure operations depend on wallet routing and security setup and contain a no-secret publication boundary. | `docs/mining/infrastructure-and-operations.md:L42-L62`; `docs/mining/security-and-custody.md:L42-L54` | HIGH | P1 | HIGH | Axodus Mining | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Operational and credential-adjacent scope requires security confirmation. |
| `TRC-EP3-0027` | `docs/mining/mining-models.md` | `MINING-GDE-004` | `docs/mining/risk-and-compliance.md` | `MINING-GDE-005` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Mining models require risk, custody, disclosure, governance, and compliance context; the target defines those review triggers. | `docs/mining/mining-models.md:L42-L66`; `docs/mining/risk-and-compliance.md:L42-L58` | HIGH | P1 | LOW | Axodus Mining | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Same-core risk association. |
| `TRC-EP3-0028` | `docs/mining/risk-and-compliance.md` | `MINING-GDE-005` | `docs/mining/security-and-custody.md` | `MINING-GDE-006` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | The source explicitly assigns wallet, pool-account, validator-key, and infrastructure-access review to Security; the target defines those controls. | `docs/mining/risk-and-compliance.md:L42-L66`; `docs/mining/security-and-custody.md:L42-L54` | HIGH | P1 | HIGH | Axodus Mining | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | High-risk security semantics are not frozen. |
| `TRC-EP3-0029` | `docs/mining/security-and-custody.md` | `MINING-GDE-006` | `docs/security/wallet-security.md` | `SEC-GDE-006` | `RELATES_TO` | `MISSING_INTEGRATION_TRACEABILITY` | Mining custody depends on payout and treasury wallets, keys, approvals, and least privilege; the target defines signing and permission risk. | `docs/mining/security-and-custody.md:L42-L54`; `docs/security/wallet-security.md:L42-L53` | HIGH | P1 | HIGH | Axodus Mining / Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Cross-core wallet scope requires security review. |
| `TRC-EP3-0030` | `docs/runtime/change-control.md` | `RUNTIME-GDE-002` | `docs/runtime/governance-escalation.md` | `RUNTIME-GDE-003` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Change control defines governance-sensitive triggers and explicitly names Governance Escalation as a related page. | `docs/runtime/change-control.md:L77-L93`; `docs/runtime/governance-escalation.md:L42-L48` | HIGH | P1 | LOW | Axodus Runtime | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Exact same-core related-page evidence. |
| `TRC-EP3-0031` | `docs/runtime/governance-escalation.md` | `RUNTIME-GDE-003` | `docs/governance/overview.md` | `GOV-GDE-001` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | Runtime must pause governance-sensitive execution and explicitly names Governance Overview; the target defines governance coordination and routing. | `docs/runtime/governance-escalation.md:L42-L48`; `docs/runtime/governance-escalation.md:L97-L100`; `docs/governance/overview.md:L42-L56` | HIGH | P1 | HIGH | Axodus Runtime / Governance | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Cross-core escalation authority requires confirmation. |
| `TRC-EP3-0032` | `docs/runtime/risk-controls.md` | `RUNTIME-GDE-004` | `docs/runtime/governance-escalation.md` | `RUNTIME-GDE-003` | `RELATES_TO` | `MISSING_DEPENDENCY_TRACEABILITY` | Runtime risk controls require escalation for governance bypass and explicitly list Governance Escalation. | `docs/runtime/risk-controls.md:L42-L62`; `docs/runtime/risk-controls.md:L80-L84`; `docs/runtime/governance-escalation.md:L42-L48` | HIGH | P1 | LOW | Axodus Runtime | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Exact same-core related-page evidence. |
| `TRC-EP3-0033` | `docs/security/api-security.md` | `SEC-GDE-002` | `docs/overview/risk-notices.md` | `CORE-GDE-004` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | API guidance prohibits production or audit claims without evidence; the target supplies portfolio-level active-if-verified and implementation-dependent framing. | `docs/security/api-security.md:L42-L67`; `docs/overview/risk-notices.md:L46-L58` | MEDIUM | P1 | HIGH | Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Topic alignment is strong, but Security must confirm the portfolio target. |
| `TRC-EP3-0034` | `docs/security/disclosure-policy.md` | `SEC-GDE-003` | `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md` | `DOC-POL-004` | `RELATES_TO` | `MISSING_DECISION_TRACEABILITY` | The disclosure process is not official until security and coordinator approval; the policy defines publication gates, enhanced reviews, and sensitive-value blocking. | `docs/security/disclosure-policy.md:L42-L63`; `docs/security/disclosure-policy.md:L69-L80`; `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md:L40-L56` | HIGH | P1 | HIGH | Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Disclosure-route meaning cannot be frozen without security approval. |
| `TRC-EP3-0035` | `docs/security/frontend-security.md` | `SEC-GDE-004` | `docs/overview/risk-notices.md` | `CORE-GDE-004` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | Frontend guidance requires visible execution state and prohibits unsupported production or financial claims; the target defines the public risk framing. | `docs/security/frontend-security.md:L42-L68`; `docs/overview/risk-notices.md:L46-L58` | MEDIUM | P1 | HIGH | Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Security review must confirm that a portfolio risk edge is not overly broad. |
| `TRC-EP3-0036` | `docs/security/smart-contract-security.md` | `SEC-GDE-005` | `docs/overview/documentation-status.md` | `CORE-GDE-003` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | Contract documentation must distinguish planned, testnet, audited, deployed, and gated states; the target defines status interpretation and evidence boundaries. | `docs/security/smart-contract-security.md:L42-L72`; `docs/overview/documentation-status.md:L42-L62` | MEDIUM | P1 | HIGH | Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Status association requires review because it affects audit/deployment interpretation. |
| `TRC-EP3-0037` | `docs/security/wallet-security.md` | `SEC-GDE-006` | `docs/treasury/custody-and-security.md` | `TREASURY-GDE-003` | `RELATES_TO` | `MISSING_INTEGRATION_TRACEABILITY` | Wallet guidance covers signing and permission risk and names treasury movement; the target defines treasury wallet custody and permission controls. | `docs/security/wallet-security.md:L42-L66`; `docs/treasury/custody-and-security.md:L42-L63` | HIGH | P1 | HIGH | Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Cross-core custody relation requires Security and Treasury review. |
| `TRC-EP3-0038` | `docs/treasury/compliance-and-disclosures.md` | `TREASURY-GDE-002` | `docs/overview/risk-notices.md` | `CORE-GDE-004` | `RELATES_TO` | `MISSING_GOVERNANCE_TRACEABILITY` | Treasury disclosure rules prohibit guaranteed financial claims and require risk, governance, and review framing; the target defines portfolio risk notices. | `docs/treasury/compliance-and-disclosures.md:L42-L78`; `docs/overview/risk-notices.md:L46-L58` | HIGH | P1 | HIGH | Axodus Treasury | `AUTHORITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Compliance and publication authority must confirm the cross-portfolio meaning. |
| `TRC-EP3-0039` | `docs/treasury/custody-and-security.md` | `TREASURY-GDE-003` | `docs/security/wallet-security.md` | `SEC-GDE-006` | `RELATES_TO` | `MISSING_INTEGRATION_TRACEABILITY` | Treasury custody defines wallet, signer, permission, and secret-exposure controls; the target defines wallet signing and permission risk. | `docs/treasury/custody-and-security.md:L42-L65`; `docs/security/wallet-security.md:L42-L53` | HIGH | P1 | HIGH | Axodus Treasury / Security | `SECURITY_REVIEW_REQUIRED` | `NOT_ASSIGNED` | Reverse of candidate 0037 is not frozen; reviewers must decide direction and duplication risk. |
| `TRC-EP3-0040` | `docs/treasury/risk-management.md` | `TREASURY-GDE-004` | `docs/treasury/custody-and-security.md` | `TREASURY-GDE-003` | `RELATES_TO` | `MISSING_SECURITY_TRACEABILITY` | Treasury risk identifies custody risk and explicitly lists Custody and Security as a related document. | `docs/treasury/risk-management.md:L42-L66`; `docs/treasury/risk-management.md:L85-L89`; `docs/treasury/custody-and-security.md:L42-L59` | HIGH | P1 | MEDIUM | Axodus Treasury | `FREEZE_FOR_EXECUTION` | `TRACEABILITY-BATCH-01` | Exact same-core related-document evidence. |

## Frozen Candidate Set

`TRACEABILITY-BATCH-01` contains exactly these immutable candidate IDs:

`TRC-EP3-0001`, `TRC-EP3-0002`, `TRC-EP3-0003`, `TRC-EP3-0005`,
`TRC-EP3-0006`, `TRC-EP3-0007`, `TRC-EP3-0008`, `TRC-EP3-0009`,
`TRC-EP3-0016`, `TRC-EP3-0017`, `TRC-EP3-0018`, `TRC-EP3-0020`,
`TRC-EP3-0023`, `TRC-EP3-0025`, `TRC-EP3-0027`, `TRC-EP3-0030`,
`TRC-EP3-0032`, and `TRC-EP3-0040`.

The batch has 18 source documents and 18 relationship mutations: 17
`RELATES_TO` and one `DEPENDS_ON`. It is below the maximum of 20 source
documents and 40 mutations.

## Disposition Summary

| Disposition | Candidates |
|---|---:|
| `FREEZE_FOR_EXECUTION` | 18 |
| `OWNER_REVIEW_REQUIRED` | 2 |
| `AUTHORITY_REVIEW_REQUIRED` | 7 |
| `SECURITY_REVIEW_REQUIRED` | 12 |
| `MIGRATION_PREFERRED` | 0 |
| `ACCEPTABLE_STANDALONE` | 0 |
| `DEFER_INSUFFICIENT_EVIDENCE` | 1 |
| `OUT_OF_SCOPE` | 0 |
| **Total** | **40** |

Migration-preferred legacy sources and acceptable standalone templates are
classified in `DOC-RPT-048`, not admitted as edge candidates, because they do
not have resolvable canonical source IDs. This keeps every register source and
target ID valid.

## Confidence, Priority, and Risk Summary

| Dimension | Distribution |
|---|---|
| Confidence | HIGH 32; MEDIUM 7; LOW 1 |
| Priority | P1 37; P2 3 |
| Risk | LOW 11; MEDIUM 12; HIGH 17; CRITICAL 0 |

All 17 high-risk candidates have an explicit owner, authority, or security
review disposition. The low-confidence candidate is deferred. No review-gated
or migration candidate is in the frozen set.

## Duplicate and Cycle Simulation

The 18 frozen triples were compared with all 351 baseline edges and with one
another. Existing duplicates: 0. Internal duplicates: 0.

The validator-style non-`RELATES_TO` graph contains zero forbidden strongly
connected components before simulation and zero after simulation. The full
graph generator reports 13 baseline components and 13 after simulation, with
no new or expanded component. The single proposed `DEPENDS_ON` edge does not
create a path back to its source.

## Freeze Boundary

Freeze means the candidate IDs, source, target, type, evidence, and disposition
are stable inputs for a later execution request. It does not authorize a
relationship mutation now. Any evidence, path, ID, type, owner, confidence,
risk, or boundary change invalidates the affected candidate and blocks
execution until this register is superseded by an approved review record.

This request analyzed documentation traceability, classified remediation candidates and froze a bounded execution set only. It did not add, remove or alter relationships; modify document metadata or public content; regenerate public artifacts; expose private disclosure or request content; change schemas, generator logic or runtime interfaces; enable production; activate providers or exchanges; perform wallet signing; write contracts; perform financial execution; or open operational gates.
