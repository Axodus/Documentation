# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_DEX_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the DEX knowledge pack into public documentation pages.

All public documentation must be written in English.

DEX pages must be clear, technical enough to be useful, and safe enough to prevent users from misunderstanding swap, pool, LP, listing, liquidity, routing, and execution risks.

## 2. Required Public Pages

required_pages:
  - docs/dex/overview.md
  - docs/dex/architecture.md
  - docs/dex/swap-model.md
  - docs/dex/liquidity-pools.md
  - docs/dex/routing-and-aggregation.md
  - docs/dex/listing-policy.md
  - docs/dex/fees-and-revenue.md
  - docs/dex/lp-model.md
  - docs/dex/slippage-and-price-impact.md
  - docs/dex/mev-and-execution-risk.md
  - docs/dex/security-and-smart-contracts.md
  - docs/dex/governance-alignment.md
  - docs/dex/treasury-alignment.md
  - docs/dex/tokenomics-alignment.md
  - docs/dex/trading-integration.md
  - docs/dex/marketplace-integration.md
  - docs/dex/academy-and-user-education.md
  - docs/dex/acs-integration.md
  - docs/dex/reporting-and-accountability.md
  - docs/dex/risk-and-disclosures.md

optional_pages:
  - docs/dex/pool-registry.md
  - docs/dex/token-registry.md
  - docs/dex/liquidity-incentives.md
  - docs/dex/incident-response.md
  - docs/dex/open-questions.md

## 3. Standard Page Template

Every major DEX page should include:

- Title
- Status
- Version
- Last Updated
- Owner
- Purpose
- Scope
- Overview
- Model or Responsibilities
- Workflow
- Governance Touchpoints
- Risk Considerations
- Current Status
- Future Work

recommended_header:
  Status: Draft
  Version: 0.1.0
  Last Updated: YYYY-MM-DD
  Owner: Axodus DEX

## 4. Page Requirements

overview:
  target: docs/dex/overview.md
  must_include:
    - DEX as decentralized exchange, swap, pool, routing, and liquidity layer
    - no guaranteed execution or liquidity
    - relationships with DeFi, Tokenomics, Treasury, Trading, Marketplace, Governance, Academy, ACS, Accountability

architecture:
  target: docs/dex/architecture.md
  must_include:
    - UI layer
    - swap layer
    - pool layer
    - router layer
    - listing layer
    - fee layer
    - risk layer
    - governance layer
    - treasury layer
    - security layer
    - monitoring layer
    - reporting layer
    - ACS layer

swap_model:
  target: docs/dex/swap-model.md
  must_include:
    - swap concepts
    - swap flow
    - swap object
    - statuses
    - warnings

liquidity_pools:
  target: docs/dex/liquidity-pools.md
  must_include:
    - pool concepts
    - pool types
    - pool object
    - lifecycle
    - risks

routing:
  target: docs/dex/routing-and-aggregation.md
  must_include:
    - routing concepts
    - flow
    - route object
    - aggregation considerations
    - no guaranteed best execution

listing:
  target: docs/dex/listing-policy.md
  must_include:
    - listing is not endorsement
    - listing statuses
    - review fields
    - review flow
    - official asset requirements
    - risks

fees:
  target: docs/dex/fees-and-revenue.md
  must_include:
    - fee types
    - fee records
    - governance requirements
    - reporting
    - risks

lp:
  target: docs/dex/lp-model.md
  must_include:
    - LP concepts
    - LP flow
    - position object
    - risk warnings
    - variable fees and impermanent loss

slippage:
  target: docs/dex/slippage-and-price-impact.md
  must_include:
    - definitions
    - user guidance
    - warning levels
    - final execution can differ from quote

mev:
  target: docs/dex/mev-and-execution-risk.md
  must_include:
    - MEV definitions
    - execution risk factors
    - possible protections
    - no complete protection claim unless verified

security:
  target: docs/dex/security-and-smart-contracts.md
  must_include:
    - contract components
    - security checklist
    - security statuses
    - incident response

governance:
  target: docs/dex/governance-alignment.md
  must_include:
    - governance-sensitive items
    - routing levels
    - reason codes

treasury:
  target: docs/dex/treasury-alignment.md
  must_include:
    - Treasury-DEX interfaces
    - review triggers
    - report fields
    - risks

tokenomics:
  target: docs/dex/tokenomics-alignment.md
  must_include:
    - Tokenomics-DEX interfaces
    - policy questions
    - risks

trading:
  target: docs/dex/trading-integration.md
  must_include:
    - Trading use cases
    - risks
    - review requirements

marketplace:
  target: docs/dex/marketplace-integration.md
  must_include:
    - integration models
    - design questions
    - checkout record fields
    - risks

education:
  target: docs/dex/academy-and-user-education.md
  must_include:
    - education topics
    - access education requirements
    - user confirmation fields

acs:
  target: docs/dex/acs-integration.md
  must_include:
    - agent roles
    - workflow
    - output types
    - boundaries

reporting:
  target: docs/dex/reporting-and-accountability.md
  must_include:
    - report types
    - fields
    - accountability records

risk:
  target: docs/dex/risk-and-disclosures.md
  must_include:
    - risk categories
    - disclosure themes
    - prohibited and safe language

## 5. Cross-Linking Requirements

cross_links:
  overview:
    link_to:
      - swap_model
      - liquidity_pools
      - listing_policy
      - risk_disclosures
      - governance_alignment

  swap_model:
    link_to:
      - slippage_price_impact
      - mev_execution_risk
      - listing_policy
      - security

  liquidity_pools:
    link_to:
      - lp_model
      - treasury_alignment
      - tokenomics_alignment

  tokenomics:
    link_to:
      - Tokenomics
      - $Neurons
      - DeFi

  trading:
    link_to:
      - Trading
      - Risk
      - ACS_Trinity

  marketplace:
    link_to:
      - Marketplace
      - Treasury
      - Tokenomics

  education:
    link_to:
      - Academy
      - DeFi_Education

## 6. Language Guardrails

use_language:
  - estimated quote
  - subject to slippage
  - price impact
  - liquidity depth
  - listing is not endorsement
  - LP fees are variable
  - impermanent loss possible
  - subject to MEV risk
  - subject to smart contract risk
  - subject to governance approval
  - subject to security review
  - active if verified
  - planned
  - draft

avoid_language:
  - guaranteed profit
  - guaranteed liquidity
  - guaranteed execution
  - guaranteed best price
  - risk-free swap
  - safe LP returns
  - impermanent-loss-free
  - official token unless confirmed
  - audited unless verified
  - MEV protected unless mechanism verified

## 7. Definition of Done for DEX Docs

done_when:
  - all required pages exist
  - all public pages are in English
  - swaps, pools, routing, listings, fees, LPs, slippage, MEV, security, governance, treasury, tokenomics, trading, marketplace, education, ACS, reporting, and risks are documented
  - no guaranteed execution, liquidity, or profit language exists
  - token listing disclaimers are clear
  - LP risk and impermanent loss are clear
  - navigation is updated
