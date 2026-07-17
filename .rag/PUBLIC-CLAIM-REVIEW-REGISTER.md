---
schema_version: "1.0.0"
document_id: "DOC-RPT-132"
aliases: []
document_type: "REPORT"
title: "Public Claim Review Register"
summary: "Registers priority material public claims, their strength, evidence posture, qualifiers, and future decision state for EPIC-05 REQ-02."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_05"
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
related_epics: ["DOCUMENTATION-EPIC-05"]
related_requirements: ["DOCUMENTATION-EPIC-05-REQ-02"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/PUBLIC-CLAIM-REVIEW-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Public Claim Review Register

## Claim Strength Scale

- `C0` descriptive label only
- `C1` conceptual statement
- `C2` directional architecture
- `C3` governed design statement
- `C4` validated prototype statement
- `C5` operationally verified statement

## Material Claim Register

| Claim ID | Source Path | Section | Claim | Category | Strength | Evidence | Qualifier | Disclosure State | Risk | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CLAIM-001 | `docs/overview/ecosystem-overview.md` | Overview | Axodus is designed as a network of product and operational nuclei coordinated through governance. | `ARCHITECTURE` | `C2` | Public architecture framing only | Prototype and directional wording exists, but not everywhere on the page. | `PUBLIC_DIRECTIONAL_ONLY` | `MEDIUM` | `DIRECTIONAL_ONLY` |
| CLAIM-002 | `docs/overview/ecosystem-overview.md` | Mission | The ecosystem should make decisions and financial activity traceable. | `ACCOUNTABILITY` | `C2` | Public design intent only | Needs explicit design-intent framing. | `PUBLIC_SAFE_WITH_QUALIFICATION` | `MEDIUM` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-003 | `docs/overview/product-map.md` | Product and Operational Nuclei | `$Neurons controlled issuance, PoK minting, supply cap, burn support, and future utility` | `TOKENOMICS` | `C3` | Public tokenomics draft pages and contract-dependent design statements | Current status row is `Draft`, but wording is still dense. | `PUBLIC_SAFE_WITH_QUALIFICATION` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-004 | `docs/governance/executive-dao.md` | Purpose | The Executive DAO is the strategic and executive coordination layer in the current Axodus governance design. | `GOVERNANCE` | `C2` | Public governance design page only | Already scoped to design, but needs consistent anti-activation framing. | `PUBLIC_PROTOTYPE_ONLY` | `MEDIUM` | `PROTOTYPE_ONLY` |
| CLAIM-005 | `docs/governance/boardroom-council.md` | Scope | Boardroom may review higher-impact proposals, treasury-sensitive actions, and compliance concerns. | `AUTHORITY` | `C2` | Public governance design page only | Needs explicit non-implemented authority qualifier. | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-006 | `docs/governance/community-dao.md` | Governance Design | The Community DAO may use mechanisms intended to reduce capture. | `GOVERNANCE` | `C1` | Public design discussion only | Properly caveated as design options. | `PUBLIC_DIRECTIONAL_ONLY` | `LOW` | `SUPPORTED` |
| CLAIM-007 | `docs/governance/dao-federation.md` | Model | DAO federation allows autonomous DAOs to operate under shared Axodus constitutional principles while retaining local autonomy. | `GOVERNANCE` | `C2` | Public constitutional and federation design pages | Current wording still risks active-federation inference. | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-008 | `docs/tokenomics/overview.md` | Purpose | `$Neurons` is a draft/candidate token system with controlled issuance and planned cross-chain expansion. | `TOKENOMICS` | `C3` | Public tokenomics design pages and contract-dependent references | Draft/candidate qualifier is present. | `PUBLIC_SAFE_WITH_QUALIFICATION` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-009 | `docs/tokenomics/overview.md` | Current Tokenomics Model | `$Neurons` uses ERC-20 compatibility, controlled minting, signature validation, cooldown limits, and burn support. | `TOKENOMICS` | `C3` | Public contract-dependent documentation, but not public deployment evidence | Finality and production cannot be inferred. | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | `PROTOTYPE_ONLY` |
| CLAIM-010 | `docs/tokenomics/neurons-token.md` | Current Status | The current tokenomics model supports controlled issuance. | `TOKENOMICS` | `C3` | Public design and contract-dependent documentation | Needs explicit “supported by documented model if verified” narrowing. | `PUBLIC_SAFE_WITH_QUALIFICATION` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-011 | `docs/tokenomics/supply-and-emission.md` | Mint Validity Formula | Exact public mint parameters are documented as values. | `TOKENOMICS` | `C3` | Public documentation only; no public verification cited in-page | Exact values are especially sensitive without stronger verification cues. | `BOUNDARY_REVIEW_REQUIRED` | `HIGH` | `ACTIVE_IF_VERIFIED` |
| CLAIM-012 | `docs/tokenomics/pok-minting.md` | Purpose | PoK minting defines how `$Neurons` can be issued through Proof-of-Knowledge authorization and cryptographic validation. | `TOKENOMICS` | `C3` | Public tokenomics architecture description | Term and mechanism need stronger prototype and source-of-truth qualifiers. | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-013 | `docs/treasury/overview.md` | Purpose | Treasury is the capital stewardship and financial coordination nucleus. | `TREASURY` | `C2` | Public treasury architecture framing | Publicly safe if kept directional. | `PUBLIC_DIRECTIONAL_ONLY` | `MEDIUM` | `DIRECTIONAL_ONLY` |
| CLAIM-014 | `docs/treasury/treasury-policy.md` | Approved Action Categories | Treasury can allocate to trading, DeFi, liquidity support, and emergency response. | `TREASURY` | `C2` | Draft policy framework only | High chance of being read as enabled operations. | `BOUNDARY_REVIEW_REQUIRED` | `HIGH` | `PROTOTYPE_ONLY` |
| CLAIM-015 | `docs/treasury/capital-allocation.md` | Allocation Categories | Capital allocation includes reward budgets, liquidity support, trading allocation, and DeFi allocation. | `TREASURY` | `C2` | Draft policy architecture only | Needs explicit non-live and non-approved-by-default framing. | `BOUNDARY_REVIEW_REQUIRED` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-016 | `docs/treasury/compliance-and-disclosures.md` | Disclosure Themes | Treasury documentation may summarize information without exposing sensitive security details. | `COMPLIANCE` | `C3` | Public guardrail page | Safe as a disclosure rule. | `PUBLIC_SAFE` | `LOW` | `SUPPORTED` |
| CLAIM-017 | `docs/trading/overview.md` | Purpose | Trading is both an internal financial operations nucleus and a user-facing strategy product nucleus. | `TRADING` | `C2` | Public trading overview only | Risks active-product inference. | `PUBLIC_ACTIVE_IF_VERIFIED` | `HIGH` | `ACTIVE_IF_VERIFIED` |
| CLAIM-018 | `docs/trading/overview.md` | Current Status | Strategies and exchange integrations must be validated before treated as active. | `OPERATIONAL_STATUS` | `C3` | Internal public control wording | Safe and useful; current status is constrained. | `PUBLIC_SAFE` | `LOW` | `SUPPORTED` |
| CLAIM-019 | `docs/trading/internal-trading.md` | Purpose | Internal Trading may support ecosystem revenue and financial sustainability. | `TREASURY` | `C2` | Design framing only | Revenue wording is high-risk even with caveats. | `BOUNDARY_REVIEW_REQUIRED` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-020 | `docs/trading/internal-trading.md` | Metrics | Metrics may include PnL, win rate, drawdown, and current allocation. | `PERFORMANCE` | `C2` | Draft monitoring model only | Can be safe if clearly framed as reporting model, not public performance proof. | `PUBLIC_SAFE_WITH_QUALIFICATION` | `MEDIUM` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-021 | `docs/trading/user-facing-strategies.md` | Purpose | User-facing strategies may be made available to eligible users. | `TRADING` | `C2` | Public strategy design page only | Product availability must remain conditional. | `PUBLIC_ACTIVE_IF_VERIFIED` | `HIGH` | `ACTIVE_IF_VERIFIED` |
| CLAIM-022 | `docs/mining/overview.md` | Purpose | Mining is the infrastructure and product nucleus for mining, validation, reward accounting, monitoring, and reporting. | `MINING` | `C2` | Public mining overview only | Risks active product and infrastructure inference. | `PUBLIC_ACTIVE_IF_VERIFIED` | `HIGH` | `ACTIVE_IF_VERIFIED` |
| CLAIM-023 | `docs/mining/infrastructure-and-operations.md` | Purpose | Mining infrastructure is operationally intensive and depends on uptime, power, cooling, hardware, and monitoring. | `OPERATIONAL_STATUS` | `C2` | Public design and operations model only | “Operationally intensive” is safe, but “production operation” in lifecycle needs care. | `PUBLIC_SAFE_WITH_QUALIFICATION` | `MEDIUM` | `SUPPORTED_WITH_QUALIFICATION` |
| CLAIM-024 | `docs/mining/costs-fees-and-profitability.md` | Purpose | Mining profitability is an estimate, not a guarantee. | `PERFORMANCE` | `C3` | Public risk-oriented estimate page | Safe as a disclosure control. | `PUBLIC_SAFE` | `LOW` | `SUPPORTED` |
| CLAIM-025 | `docs/lottery/overview.md` | Purpose | Lottery is the Axodus nucleus for blockchain-based draw, ticket, randomness, prize, settlement, and accountability models. | `LOTTERY` | `C2` | Public lottery overview only | Safe if kept conceptual. | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | `PROTOTYPE_ONLY` |
| CLAIM-026 | `docs/lottery/overview.md` | Current Status | CryptoDraw must not be described as live, licensed, audited, or publicly available unless records support that status. | `PUBLICATION` | `C3` | Internal public control wording | Safe and strong boundary control. | `PUBLIC_SAFE` | `LOW` | `SUPPORTED` |
| CLAIM-027 | `docs/lottery/cryptodraw.md` | Purpose | CryptoDraw is the Axodus blockchain lottery and draw product concept. | `LOTTERY` | `C2` | Public concept page only | Product concept is clear, but adjacent status language still matters. | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | `PROTOTYPE_ONLY` |
| CLAIM-028 | `docs/lottery/prize-pools-and-payouts.md` | Payout Models | Fixed, hybrid, rollover, and promotional prize models are described. | `LOTTERY` | `C2` | Draft product-policy model only | Needs clear non-live and approval-dependent framing. | `BOUNDARY_REVIEW_REQUIRED` | `HIGH` | `SUPPORTED_WITH_QUALIFICATION` |

## Review Reading

The strongest recurring issue is not explicit forbidden claims such as
guaranteed returns. Those are already broadly controlled. The stronger issue is
that many pages describe sophisticated future or bounded models in ways that
can still be mistaken for current operational reality.
