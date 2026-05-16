# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_MINING_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Mining knowledge pack into public documentation pages.

All public documentation must be written in English.

Mining pages must be operationally clear, risk-aware, and transparent. They must not sound like guaranteed-income marketing, passive-income promotion, or fixed-ROI product copy.

## 2. Required Public Pages

required_pages:
  - docs/mining/overview.md
  - docs/mining/architecture.md
  - docs/mining/mining-models.md
  - docs/mining/infrastructure-and-operations.md
  - docs/mining/hardware-energy-and-uptime.md
  - docs/mining/pools-hashrate-and-network-difficulty.md
  - docs/mining/node-and-validator-operations.md
  - docs/mining/user-facing-products.md
  - docs/mining/rewards-and-payouts.md
  - docs/mining/costs-fees-and-profitability.md
  - docs/mining/treasury-alignment.md
  - docs/mining/tokenomics-alignment.md
  - docs/mining/governance-alignment.md
  - docs/mining/marketplace-business-and-bba-alignment.md
  - docs/mining/academy-and-user-education.md
  - docs/mining/trading-and-risk-hedging.md
  - docs/mining/security-and-custody.md
  - docs/mining/monitoring-and-telemetry.md
  - docs/mining/acs-integration.md
  - docs/mining/reporting-and-accountability.md
  - docs/mining/sustainability-and-responsible-operations.md
  - docs/mining/risk-and-compliance.md

optional_pages:
  - docs/mining/mining-calculator-disclaimer.md
  - docs/mining/payout-policy.md
  - docs/mining/hardware-registry.md
  - docs/mining/pool-registry.md
  - docs/mining/incident-response.md
  - docs/mining/open-questions.md

## 3. Standard Page Template

Every major Mining page should include:

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
  Owner: Axodus Mining

## 4. Page Requirements

overview:
  target: docs/mining/overview.md
  must_include:
    - Mining as infrastructure and product nucleus
    - possible mining/validation models
    - variable rewards and no guaranteed profit
    - relationships with Treasury, Governance, Tokenomics, Trading, Marketplace, Business, BBA, Academy, ACS, Accountability

architecture:
  target: docs/mining/architecture.md
  must_include:
    - infrastructure layer
    - network layer
    - pool/hashrate layer
    - node/validator layer
    - reward accounting layer
    - user product layer
    - treasury layer
    - tokenomics layer
    - governance layer
    - security custody layer
    - monitoring telemetry layer
    - sustainability layer
    - ACS layer
    - reporting layer
    - data objects

mining_models:
  target: docs/mining/mining-models.md
  must_include:
    - model types
    - model object
    - statuses
    - selection criteria

infrastructure:
  target: docs/mining/infrastructure-and-operations.md
  must_include:
    - infrastructure components
    - operation object
    - operational lifecycle
    - operational risks

hardware_energy:
  target: docs/mining/hardware-energy-and-uptime.md
  must_include:
    - hardware types
    - hardware record fields
    - energy fields
    - uptime fields
    - cost and performance rules
    - risks

pools_hashrate:
  target: docs/mining/pools-hashrate-and-network-difficulty.md
  must_include:
    - core concepts
    - payout methods
    - pool account fields
    - hashrate reporting fields
    - sensitivity factors

node_validator:
  target: docs/mining/node-and-validator-operations.md
  must_include:
    - distinction from Proof-of-Work mining
    - concepts
    - validator object
    - lifecycle
    - risks

user_products:
  target: docs/mining/user-facing-products.md
  must_include:
    - product types
    - user product object
    - status labels
    - required user disclosures

rewards:
  target: docs/mining/rewards-and-payouts.md
  must_include:
    - reward sources
    - reward record fields
    - payout models
    - payout fields
    - payout statuses

profitability:
  target: docs/mining/costs-fees-and-profitability.md
  must_include:
    - cost categories
    - profitability estimate fields
    - profitability rules
    - sensitivity factors
    - prohibited claims

treasury:
  target: docs/mining/treasury-alignment.md
  must_include:
    - Treasury-Mining interfaces
    - review triggers
    - treasury record fields
    - risks

tokenomics:
  target: docs/mining/tokenomics-alignment.md
  must_include:
    - Tokenomics-Mining interfaces
    - policy questions
    - record fields
    - risks

governance:
  target: docs/mining/governance-alignment.md
  must_include:
    - governance-sensitive items
    - routing levels
    - reason codes

marketplace_business_bba:
  target: docs/mining/marketplace-business-and-bba-alignment.md
  must_include:
    - marketplace listings
    - Business interfaces
    - BBA interfaces
    - claim review triggers
    - risks

education:
  target: docs/mining/academy-and-user-education.md
  must_include:
    - education topics
    - access education requirements
    - user confirmation fields

trading_hedging:
  target: docs/mining/trading-and-risk-hedging.md
  must_include:
    - Trading-Mining interfaces
    - review triggers
    - trading risks
    - reporting fields

security:
  target: docs/mining/security-and-custody.md
  must_include:
    - security scope
    - custody models
    - controls
    - incident types

monitoring:
  target: docs/mining/monitoring-and-telemetry.md
  must_include:
    - metrics
    - alert types
    - monitoring records
    - reporting rules

acs:
  target: docs/mining/acs-integration.md
  must_include:
    - agent roles
    - workflow
    - output types
    - boundaries

reporting:
  target: docs/mining/reporting-and-accountability.md
  must_include:
    - report types
    - report fields
    - accountability records
    - quality rules

sustainability:
  target: docs/mining/sustainability-and-responsible-operations.md
  must_include:
    - responsible operations themes
    - sustainability record fields
    - prohibited and safe language

risk:
  target: docs/mining/risk-and-compliance.md
  must_include:
    - risk categories
    - prohibited claims
    - safe language
    - review triggers
    - required reviews

## 5. Cross-Linking Requirements

cross_links:
  overview:
    link_to:
      - architecture
      - mining_models
      - user_products
      - risk
      - reporting

  profitability:
    link_to:
      - rewards
      - hardware_energy
      - pools_hashrate
      - treasury
      - risk

  user_products:
    link_to:
      - academy
      - tokenomics
      - rewards
      - risk

  treasury:
    link_to:
      - Treasury
      - Governance
      - Trading
      - Reporting

  marketplace_business_bba:
    link_to:
      - Marketplace
      - Business
      - BBA_Agency
      - Risk

  acs:
    link_to:
      - ACS
      - Trinity
      - Agent_Smith
      - Morpheus

## 6. Language Guardrails

use_language:
  - variable rewards
  - estimated rewards
  - estimated profitability
  - subject to network difficulty
  - subject to energy and operational costs
  - subject to market risk
  - subject to uptime and hardware performance
  - subject to pool or validator rules
  - subject to governance approval
  - subject to compliance review
  - no profit guarantee
  - educational
  - pilot
  - active if verified
  - planned
  - draft

avoid_language:
  - guaranteed profit
  - guaranteed ROI
  - guaranteed daily income
  - guaranteed payout
  - fixed income
  - passive income without risk
  - risk-free mining
  - guaranteed payback
  - mining cannot lose
  - tax-free unless reviewed
  - legally compliant unless reviewed
  - renewable or carbon neutral unless verified
  - active product unless verified

## 7. Definition of Done for Mining Docs

done_when:
  - all required pages exist
  - all public pages are in English
  - Mining is defined as infrastructure and product nucleus
  - mining models, infrastructure, hardware, energy, pools, validators, user products, rewards, profitability, treasury, tokenomics, governance, marketplace/business/BBA, Academy, Trading, security, monitoring, ACS, reporting, sustainability, and risk are documented
  - no guaranteed profit, ROI, payout, or passive-income language exists
  - estimates are clearly labeled as estimates
  - navigation is updated
