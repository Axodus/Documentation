# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_TREASURY_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Treasury knowledge pack into public documentation pages.

All public documentation must be written in English.

Treasury pages must be institutional, risk-aware, governance-aligned, and transparent. They must not sound like investment marketing or guaranteed yield documentation.

## 2. Required Public Pages

required_pages:
  - docs/treasury/overview.md
  - docs/treasury/architecture.md
  - docs/treasury/treasury-policy.md
  - docs/treasury/capital-allocation.md
  - docs/treasury/reserves-and-liquidity.md
  - docs/treasury/revenue-and-fees.md
  - docs/treasury/risk-management.md
  - docs/treasury/strategy-oversight.md
  - docs/treasury/trading-alignment.md
  - docs/treasury/tokenomics-alignment.md
  - docs/treasury/governance-alignment.md
  - docs/treasury/custody-and-security.md
  - docs/treasury/reporting-and-accountability.md
  - docs/treasury/acs-trinity-integration.md
  - docs/treasury/compliance-and-disclosures.md

optional_pages:
  - docs/treasury/wallet-registry.md
  - docs/treasury/execution-receipts.md
  - docs/treasury/incident-response.md
  - docs/treasury/financial-instruments.md
  - docs/treasury/open-questions.md

## 3. Standard Page Template

Every major Treasury page should include:

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
  Owner: Axodus Treasury

## 4. Page: Treasury Overview

target:
  docs/treasury/overview.md

must_include:
  - Treasury as financial responsibility and sustainability layer.
  - Treasury manages reserves, capital allocation, risk, reporting, and governance-aligned financial accountability.
  - Treasury connects Governance, Trading, Tokenomics, Business, Marketplace, Academy, ACS, and Accountability.
  - Treasury is not a profit guarantee or speculative fund.
  - Material financial actions require authority and records.

must_not_include:
  - guaranteed returns
  - guaranteed APY
  - risk-free yield
  - hidden wallet framing
  - investment advice

## 5. Page: Treasury Architecture

target:
  docs/treasury/architecture.md

must_include:
  - asset registry layer
  - wallet and custody layer
  - revenue layer
  - allocation layer
  - reserves layer
  - strategy layer
  - risk layer
  - execution layer
  - governance layer
  - reporting layer
  - ACS/Trinity layer
  - data objects and integration surfaces

## 6. Page: Treasury Policy

target:
  docs/treasury/treasury-policy.md

must_include:
  - policy purpose and scope
  - approved action categories
  - restricted actions
  - authority matrix
  - treasury action policy object
  - review cadence

must_not_include:
  - exact thresholds unless approved for public disclosure

## 7. Page: Capital Allocation

target:
  docs/treasury/capital-allocation.md

must_include:
  - allocation categories
  - allocation record fields
  - decision flow
  - allocation criteria
  - allocation limits conceptually
  - risks

## 8. Page: Reserves and Liquidity

target:
  docs/treasury/reserves-and-liquidity.md

must_include:
  - reserve types
  - liquidity classes
  - runway concepts
  - liquidity policy fields
  - liquidity events
  - risks

must_not_include:
  - sensitive wallet balances unless approved

## 9. Page: Revenue and Fees

target:
  docs/treasury/revenue-and-fees.md

must_include:
  - revenue sources
  - fee types
  - revenue routing categories
  - revenue flow record
  - historical tokenomics fee references as Needs Validation unless verified
  - risks

must_not_include:
  - fee mechanics as price guarantee

## 10. Page: Risk Management

target:
  docs/treasury/risk-management.md

must_include:
  - risk categories
  - risk controls
  - risk limit types
  - risk review object
  - risk levels
  - links to Trading, Tokenomics, Custody, Governance, and Reporting

## 11. Page: Strategy Oversight

target:
  docs/treasury/strategy-oversight.md

must_include:
  - strategy categories
  - statuses
  - strategy review fields
  - prohibited/restricted patterns
  - pause conditions
  - risk caveats for DaaS, derivatives, debentures, ETF DaaS

must_not_include:
  - regulated ETF status unless legally established
  - active debenture or derivative products unless verified

## 12. Page: Trading Alignment

target:
  docs/treasury/trading-alignment.md

must_include:
  - Trading-Treasury interfaces
  - treasury trading action flow
  - required controls
  - PnL reporting requirements
  - risks

must_state:
  - Trading can support revenue but does not guarantee revenue.

## 13. Page: Tokenomics Alignment

target:
  docs/treasury/tokenomics-alignment.md

must_include:
  - Tokenomics-Treasury interfaces
  - treasury questions for tokenomics
  - reward budget review
  - locked reward liability uncertainty
  - reporting fields
  - risks

## 14. Page: Governance Alignment

target:
  docs/treasury/governance-alignment.md

must_include:
  - governance-sensitive treasury actions
  - routing levels
  - governance flow
  - reason codes
  - approval record fields
  - anti-patterns

## 15. Page: Custody and Security

target:
  docs/treasury/custody-and-security.md

must_include:
  - custody models
  - security principles
  - wallet registry fields at safe level
  - permission controls conceptually
  - execution security checklist
  - incident types
  - risks

must_not_include:
  - private keys
  - seed phrases
  - sensitive signer procedures
  - exploitable infrastructure details

## 16. Page: Reporting and Accountability

target:
  docs/treasury/reporting-and-accountability.md

must_include:
  - report types
  - report fields
  - public vs internal reports
  - accountability records
  - cadence
  - quality rules
  - reporting anti-patterns

## 17. Page: ACS & Trinity Integration

target:
  docs/treasury/acs-trinity-integration.md

must_include:
  - Trinity treasury responsibilities
  - Morpheus and Agent Smith support
  - ACS treasury runtime
  - output types
  - ACS boundaries

must_state:
  - ACS/Trinity is advisory and cannot approve or move funds.

## 18. Page: Compliance and Disclosures

target:
  docs/treasury/compliance-and-disclosures.md

must_include:
  - no investment advice
  - no return guarantee
  - treasury risks
  - prohibited claims
  - safe language
  - review triggers
  - privacy and security boundaries

## 19. Cross-Linking Requirements

cross_links:
  treasury_overview:
    link_to:
      - architecture
      - treasury_policy
      - capital_allocation
      - risk_management
      - reporting_accountability

  capital_allocation:
    link_to:
      - reserves_and_liquidity
      - risk_management
      - governance_alignment

  revenue_and_fees:
    link_to:
      - tokenomics_alignment
      - Marketplace
      - Business
      - Academy

  trading_alignment:
    link_to:
      - Trading_overview
      - Trading_risk_management
      - ACS_Trinity
      - Reporting

  tokenomics_alignment:
    link_to:
      - Tokenomics_overview
      - Locked_Rewards
      - Reward_Policy
      - Marketplace_Utility

  custody_security:
    link_to:
      - Security
      - Governance
      - Runtime_execution_handoff

  reporting_accountability:
    link_to:
      - Accountability
      - Governance_execution_receipts
      - Tokenomics_reporting
      - Trading_reporting

## 20. Language Guardrails

use_language:
  - treasury sustainability
  - reserves
  - capital allocation
  - risk-managed
  - governance-aligned
  - reportable
  - execution receipt
  - exposure
  - liquidity
  - runway estimate
  - subject to governance approval
  - subject to risk review
  - subject to security review
  - planned
  - draft
  - active if verified

avoid_language:
  - guaranteed returns
  - guaranteed APY
  - guaranteed yield
  - passive income
  - risk-free treasury
  - treasury cannot lose
  - trading guarantees revenue
  - fixed income unless legally reviewed
  - ETF status unless legally established
  - audited unless verified
  - legal compliance unless reviewed

## 21. Definition of Done for Treasury Docs

done_when:
  - all required pages exist
  - pages are written in English
  - Treasury is defined as financial sustainability and accountability layer
  - policy, allocation, reserves, revenue, risk, strategy, trading, tokenomics, governance, custody, reporting, ACS, and disclosures are documented
  - no return guarantee or investment language exists
  - security-sensitive details are not exposed
  - governance touchpoints are clear
  - reporting and accountability requirements are clear
  - navigation is updated
