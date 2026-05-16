# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_DEFI_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the DeFi knowledge pack into public documentation pages.

All public documentation must be written in English.

DeFi pages must be technical enough to be useful, but safe enough to avoid misleading users. They must not sound like yield farming hype or investment marketing.

## 2. Required Public Pages

required_pages:
  - docs/defi/overview.md
  - docs/defi/architecture.md
  - docs/defi/daas.md
  - docs/defi/etf-daas.md
  - docs/defi/protocol-model.md
  - docs/defi/vaults-and-strategies.md
  - docs/defi/staking-and-yield.md
  - docs/defi/liquidity-model.md
  - docs/defi/derivatives-and-debentures.md
  - docs/defi/risk-management.md
  - docs/defi/security-and-smart-contracts.md
  - docs/defi/governance-alignment.md
  - docs/defi/treasury-alignment.md
  - docs/defi/tokenomics-alignment.md
  - docs/defi/academy-and-user-education.md
  - docs/defi/acs-integration.md
  - docs/defi/reporting-and-accountability.md
  - docs/defi/compliance-and-disclosures.md

optional_pages:
  - docs/defi/protocol-whitelist.md
  - docs/defi/strategy-registry.md
  - docs/defi/oracles-and-data.md
  - docs/defi/incident-response.md
  - docs/defi/open-questions.md

## 3. Standard Page Template

Every major DeFi page should include:

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
  Owner: Axodus DeFi

## 4. Page Requirements

overview:
  target: docs/defi/overview.md
  must_include:
    - DeFi as risk-aware decentralized finance nucleus
    - DaaS and ETF DaaS summary
    - no guaranteed yield
    - relationships with Governance, Treasury, Tokenomics, Academy, Business, Trading, ACS, Accountability

architecture:
  target: docs/defi/architecture.md
  must_include:
    - product layer
    - protocol integration layer
    - vault strategy layer
    - oracle data layer
    - access layer
    - risk layer
    - governance layer
    - treasury layer
    - security layer
    - monitoring layer
    - reporting layer
    - ACS layer

daas:
  target: docs/defi/daas.md
  must_include:
    - DeFi as a Service definition
    - service categories
    - client types
    - request object
    - lifecycle
    - risks

etf_daas:
  target: docs/defi/etf-daas.md
  must_include:
    - ETF-oriented DeFi as a Service
    - not regulated ETF unless legally established
    - conceptual components
    - possible themes
    - governance requirements
    - risks

protocol_model:
  target: docs/defi/protocol-model.md
  must_include:
    - protocol categories
    - integration object
    - review checklist
    - statuses
    - protocol risks

vaults:
  target: docs/defi/vaults-and-strategies.md
  must_include:
    - vault definition
    - strategy definition
    - vault types
    - vault and strategy fields
    - lifecycle
    - risks

staking_yield:
  target: docs/defi/staking-and-yield.md
  must_include:
    - staking yield APY definitions
    - APY variable/non-guaranteed rule
    - staking models
    - yield sources
    - yield display rules
    - risks

liquidity:
  target: docs/defi/liquidity-model.md
  must_include:
    - liquidity concepts
    - liquidity models
    - policy fields
    - metrics
    - risks

derivatives_debentures:
  target: docs/defi/derivatives-and-debentures.md
  must_include:
    - sensitive status
    - definitions
    - possible contexts
    - required reviews
    - prohibited claims
    - risks

risk:
  target: docs/defi/risk-management.md
  must_include:
    - risk categories
    - controls
    - risk levels
    - review object

security:
  target: docs/defi/security-and-smart-contracts.md
  must_include:
    - security scope
    - review types
    - smart contract checklist
    - security statuses
    - incident response

governance:
  target: docs/defi/governance-alignment.md
  must_include:
    - governance-sensitive items
    - routing levels
    - reason codes

treasury:
  target: docs/defi/treasury-alignment.md
  must_include:
    - Treasury-DeFi interfaces
    - review triggers
    - report fields
    - risks

tokenomics:
  target: docs/defi/tokenomics-alignment.md
  must_include:
    - Tokenomics-DeFi interfaces
    - policy questions
    - risks

education:
  target: docs/defi/academy-and-user-education.md
  must_include:
    - education topics
    - access education requirements
    - user confirmation fields

acs:
  target: docs/defi/acs-integration.md
  must_include:
    - agent roles
    - workflow
    - output types
    - boundaries

reporting:
  target: docs/defi/reporting-and-accountability.md
  must_include:
    - report types
    - fields
    - accountability records

compliance:
  target: docs/defi/compliance-and-disclosures.md
  must_include:
    - no financial advice
    - no yield guarantee
    - disclosure themes
    - prohibited and safe language
    - review triggers

## 5. Cross-Linking Requirements

cross_links:
  overview:
    link_to:
      - daas
      - etf_daas
      - risk
      - governance
      - treasury

  daas:
    link_to:
      - Business
      - Governance
      - Treasury
      - Reporting

  etf_daas:
    link_to:
      - Compliance
      - Treasury
      - Risk
      - Governance

  staking_yield:
    link_to:
      - Tokenomics
      - Academy
      - Risk
      - Compliance

  liquidity:
    link_to:
      - DEX
      - Treasury
      - Tokenomics
      - Risk

  security:
    link_to:
      - Security
      - Governance
      - Runtime
      - Accountability

  acs:
    link_to:
      - ACS
      - Trinity
      - Agent_Smith
      - Morpheus

## 6. Language Guardrails

use_language:
  - DeFi as a Service
  - DaaS
  - ETF-oriented
  - risk-aware
  - variable yield
  - estimated APY
  - subject to governance approval
  - subject to security review
  - subject to market and protocol risk
  - planned
  - draft
  - active if verified
  - reportable
  - user education

avoid_language:
  - guaranteed APY
  - guaranteed yield
  - guaranteed profit
  - risk-free
  - passive income
  - safe yield
  - regulated ETF unless legally established
  - principal protected unless legally and contractually true
  - audited unless verified
  - legally compliant unless reviewed

## 7. Definition of Done for DeFi Docs

done_when:
  - all required pages exist
  - all public pages are in English
  - DaaS is clearly defined
  - ETF DaaS is safely framed
  - risk and security are documented
  - treasury and governance alignment are documented
  - tokenomics and Academy alignment are documented
  - reporting and compliance are documented
  - no unsafe yield or ETF claims exist
  - navigation is updated
