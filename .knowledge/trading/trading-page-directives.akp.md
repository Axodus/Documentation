# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_TRADING_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Trading knowledge pack into public documentation pages.

All public documentation must be written in English.

Trading pages must be precise, transparent, product-aware, and risk-aware. They must not sound like profit marketing, signal-selling, investment advice, or guaranteed income documentation.

## 2. Required Public Pages

required_pages:
  - docs/trading/overview.md
  - docs/trading/architecture.md
  - docs/trading/internal-trading.md
  - docs/trading/user-facing-strategies.md
  - docs/trading/strategy-lifecycle.md
  - docs/trading/scalper-futures.md
  - docs/trading/access-model.md
  - docs/trading/cex-api-security.md
  - docs/trading/risk-management.md
  - docs/trading/governance-alignment.md
  - docs/trading/treasury-alignment.md
  - docs/trading/acs-trinity-integration.md
  - docs/trading/reporting-and-accountability.md
  - docs/trading/compliance-and-user-disclosures.md

optional_pages:
  - docs/trading/execution-and-infrastructure.md
  - docs/trading/strategy-registry.md
  - docs/trading/user-onboarding.md
  - docs/trading/performance-reporting.md
  - docs/trading/incident-response.md
  - docs/trading/hummingbot-integration.md

## 3. Standard Page Template

Every major Trading page should include:

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
  Owner: Axodus Trading

## 4. Page: Trading Overview

target:
  docs/trading/overview.md

must_include:
  - Trading as internal financial operations and user-facing strategy product nucleus.
  - Trading may support ecosystem revenue but does not guarantee revenue.
  - Trading may expose strategies to eligible users under access and risk rules.
  - Users retain responsibility for their own capital and accounts.
  - Trading connects to Treasury, Governance, Tokenomics, Academy, Business, ACS/Trinity, Marketplace, and Accountability.
  - No strategy guarantees profit.

must_not_include:
  - guaranteed profit
  - risk-free strategy
  - passive income
  - fixed APY
  - investment advice
  - Axodus custodies user funds by default

## 5. Page: Trading Architecture

target:
  docs/trading/architecture.md

must_include:
  - strategy research layer
  - strategy registry layer
  - access control layer
  - user onboarding layer
  - API security layer
  - execution layer
  - risk layer
  - monitoring layer
  - reporting layer
  - governance layer
  - ACS/Trinity layer
  - core data objects
  - integration surfaces

## 6. Page: Internal Trading

target:
  docs/trading/internal-trading.md

must_include:
  - internal trading definition
  - objectives
  - modes
  - treasury capital rules
  - strategy record
  - review flow
  - metrics
  - risks

must_state:
  - Internal Trading involving treasury capital requires risk limits and governance/treasury authority.

## 7. Page: User-Facing Strategies

target:
  docs/trading/user-facing-strategies.md

must_include:
  - user-facing strategy definition
  - user-owned account model
  - no-custody by default
  - strategy types
  - eligibility
  - onboarding flow
  - required confirmations
  - access models
  - user controls
  - risks

## 8. Page: Strategy Lifecycle

target:
  docs/trading/strategy-lifecycle.md

must_include:
  - lifecycle stages
  - statuses
  - versioning
  - promotion gates
  - backtest requirements
  - deprecation conditions
  - no guarantee statement

## 9. Page: Scalper Futures

target:
  docs/trading/scalper-futures.md

must_include:
  - mark status as Conceptual/Planned/Experimental/Active depending on verified project state
  - explain product activation purpose
  - user-owned CEX account model
  - possible access rules
  - futures risk disclosure
  - risk controls
  - onboarding requirements
  - performance reporting
  - launch readiness gates

must_not_include:
  - guaranteed scalping profit
  - exact exchanges unless verified
  - exact token thresholds unless policy confirms

## 10. Page: Access Model

target:
  docs/trading/access-model.md

must_include:
  - access categories
  - access rule object
  - possible product tiers
  - token-based access
  - Academy-based access
  - revocation and pause
  - governance requirements

must_not_include:
  - exact thresholds unless approved
  - locked rewards count for access unless policy/contracts allow

## 11. Page: CEX API Security

target:
  docs/trading/cex-api-security.md

must_include:
  - API key definition
  - permission model
  - disable withdrawals guidance
  - setup guidance
  - storage models as possible options only
  - safety checks
  - incident response
  - risks

must_state:
  - Users should never share API secrets in public channels.
  - Withdrawal permissions should be disabled.

## 12. Page: Risk Management

target:
  docs/trading/risk-management.md

must_include:
  - risk categories
  - risk controls
  - risk limits
  - risk profile object
  - risk levels
  - futures, leverage, liquidation, API, exchange, and infrastructure risks

## 13. Page: Governance Alignment

target:
  docs/trading/governance-alignment.md

must_include:
  - governance-sensitive trading items
  - governance routing levels
  - review flow
  - reason codes
  - boundaries

## 14. Page: Treasury Alignment

target:
  docs/trading/treasury-alignment.md

must_include:
  - Trading as potential revenue generation support
  - treasury trading objectives
  - policy components
  - strategy categories with risk caveats
  - review requirements
  - metrics
  - reporting requirements
  - risks

## 15. Page: ACS & Trinity Integration

target:
  docs/trading/acs-trinity-integration.md

must_include:
  - Trinity role
  - Morpheus and Agent Smith support
  - ACS trading runtime
  - Trinity output types
  - ACS boundaries

must_state:
  - Trinity supports analysis and monitoring but does not guarantee profit or approve sensitive actions alone.

## 16. Page: Reporting and Accountability

target:
  docs/trading/reporting-and-accountability.md

must_include:
  - report types
  - performance report fields
  - risk report fields
  - incident report fields
  - cadence
  - accountability records
  - reporting anti-patterns

## 17. Page: Compliance and User Disclosures

target:
  docs/trading/compliance-and-user-disclosures.md

must_include:
  - no financial advice
  - no profit guarantee
  - user responsibility
  - market, futures, leverage, exchange, API, and backtest risks
  - required disclosures by product
  - user confirmation object
  - prohibited marketing claims
  - safe language
  - review triggers

## 18. Cross-Linking Requirements

cross_links:
  trading_overview:
    link_to:
      - architecture
      - user_facing_strategies
      - risk_management
      - treasury_alignment
      - acs_trinity_integration

  user_facing_strategies:
    link_to:
      - access_model
      - cex_api_security
      - compliance_user_disclosures
      - Academy_trading_education

  scalper_futures:
    link_to:
      - user_facing_strategies
      - access_model
      - risk_management
      - cex_api_security
      - compliance_user_disclosures

  access_model:
    link_to:
      - Tokenomics_$Neurons
      - Academy_Proof_of_Knowledge
      - Governance_alignment

  treasury_alignment:
    link_to:
      - Treasury_overview
      - Governance_overview
      - Accountability

  acs_trinity_integration:
    link_to:
      - ACS_overview
      - Trinity
      - Agent_Smith

## 19. Language Guardrails

use_language:
  - trading tool
  - strategy access
  - risk-managed
  - subject to market risk
  - user-owned account
  - no custody by default
  - no profit guarantee
  - API key least privilege
  - withdrawal permissions disabled
  - backtests are not guarantees
  - subject to governance review
  - subject to treasury review
  - planned
  - conceptual
  - experimental
  - active if verified

avoid_language:
  - guaranteed profit
  - guaranteed income
  - passive income
  - risk-free
  - safe futures
  - cannot lose
  - guaranteed APY
  - money machine
  - AI guarantees trading results
  - official exchange support unless verified
  - Axodus controls user funds unless true and reviewed

## 20. Definition of Done for Trading Docs

done_when:
  - all required pages exist
  - all pages are written in English
  - Trading is clearly defined as internal and user-facing nucleus
  - no-profit-guarantee language exists
  - user responsibility is explicit
  - API security is documented
  - access model is documented
  - Scalper Futures is documented with status caveat
  - risk management is documented
  - governance and treasury alignment are documented
  - ACS/Trinity integration is documented
  - reporting and accountability are documented
  - compliance/user disclosures are documented
  - no unsafe trading claims exist
  - navigation is updated
