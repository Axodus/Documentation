# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_MARKETPLACE_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Marketplace knowledge pack into public documentation pages.

All public documentation must be written in English.

Marketplace pages must be clear, commercial, trust-oriented, and policy-aware. They must not sound like guaranteed-income marketing, token price promotion, or unsupported seller advertising.

## 2. Required Public Pages

required_pages:
  - docs/marketplace/overview.md
  - docs/marketplace/architecture.md
  - docs/marketplace/listing-model.md
  - docs/marketplace/service-catalog.md
  - docs/marketplace/seller-provider-model.md
  - docs/marketplace/buyer-flow.md
  - docs/marketplace/payments-and-settlement.md
  - docs/marketplace/fees-and-revenue.md
  - docs/marketplace/credits-and-locked-rewards.md
  - docs/marketplace/tokenomics-alignment.md
  - docs/marketplace/academy-alignment.md
  - docs/marketplace/business-and-bba-alignment.md
  - docs/marketplace/dex-and-defi-integration.md
  - docs/marketplace/governance-alignment.md
  - docs/marketplace/treasury-alignment.md
  - docs/marketplace/reputation-and-quality.md
  - docs/marketplace/disputes-refunds-and-support.md
  - docs/marketplace/security-and-data-protection.md
  - docs/marketplace/acs-integration.md
  - docs/marketplace/reporting-and-accountability.md
  - docs/marketplace/risk-and-compliance.md

optional_pages:
  - docs/marketplace/category-policy.md
  - docs/marketplace/seller-onboarding.md
  - docs/marketplace/order-statuses.md
  - docs/marketplace/credit-policy.md
  - docs/marketplace/open-questions.md

## 3. Standard Page Template

Every major Marketplace page should include:

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
  Owner: Axodus Marketplace

## 4. Page Requirements

overview:
  target: docs/marketplace/overview.md
  must_include:
    - Marketplace as commercial exchange layer
    - listing, seller, buyer, payment, settlement, reputation, and dispute scope
    - no guaranteed seller revenue or buyer outcome
    - relationships with Academy, Business, BBA, Tokenomics, Treasury, Governance, DEX, DeFi, ACS, Accountability

architecture:
  target: docs/marketplace/architecture.md
  must_include:
    - catalog layer
    - listing layer
    - seller provider layer
    - buyer layer
    - checkout layer
    - payment layer
    - settlement layer
    - delivery layer
    - dispute layer
    - reputation layer
    - governance layer
    - treasury layer
    - security layer
    - ACS layer
    - reporting layer
    - data objects

listing_model:
  target: docs/marketplace/listing-model.md
  must_include:
    - listing categories
    - listing fields
    - statuses
    - claim review triggers
    - quality checklist

service_catalog:
  target: docs/marketplace/service-catalog.md
  must_include:
    - service groups
    - service listing fields
    - delivery models
    - catalog rules

seller_provider:
  target: docs/marketplace/seller-provider-model.md
  must_include:
    - seller types
    - seller profile fields
    - verification statuses
    - quality statuses
    - responsibilities
    - tutor requirements

buyer_flow:
  target: docs/marketplace/buyer-flow.md
  must_include:
    - buyer flow
    - order fields
    - order statuses
    - buyer protection requirements

payments:
  target: docs/marketplace/payments-and-settlement.md
  must_include:
    - payment methods
    - settlement models
    - payment record fields
    - settlement record fields
    - payment statuses
    - settlement risks

fees:
  target: docs/marketplace/fees-and-revenue.md
  must_include:
    - fee types
    - revenue routing
    - fee record fields
    - governance triggers
    - reporting and risks

credits:
  target: docs/marketplace/credits-and-locked-rewards.md
  must_include:
    - definitions
    - core rule
    - possible uses
    - spend rule object
    - seller settlement models
    - refund behavior
    - risks

tokenomics:
  target: docs/marketplace/tokenomics-alignment.md
  must_include:
    - Tokenomics-Marketplace interfaces
    - policy questions
    - tokenomics record fields
    - risks

academy:
  target: docs/marketplace/academy-alignment.md
  must_include:
    - Academy-Marketplace interfaces
    - course listing fields
    - tutor quality rules
    - reward language rules
    - risks

business_bba:
  target: docs/marketplace/business-and-bba-alignment.md
  must_include:
    - Business interfaces
    - BBA interfaces
    - service request flow
    - claim review triggers
    - risks

dex_defi:
  target: docs/marketplace/dex-and-defi-integration.md
  must_include:
    - DEX integration models
    - DeFi listing categories
    - required disclosures
    - design questions
    - risks

governance:
  target: docs/marketplace/governance-alignment.md
  must_include:
    - governance-sensitive items
    - routing levels
    - reason codes

treasury:
  target: docs/marketplace/treasury-alignment.md
  must_include:
    - Treasury-Marketplace interfaces
    - treasury record fields
    - review triggers
    - risks

reputation:
  target: docs/marketplace/reputation-and-quality.md
  must_include:
    - quality signals
    - badge types
    - review fields
    - quality rules
    - risks

disputes:
  target: docs/marketplace/disputes-refunds-and-support.md
  must_include:
    - dispute types
    - dispute record fields
    - statuses
    - refund models
    - support requirements

security:
  target: docs/marketplace/security-and-data-protection.md
  must_include:
    - security scope
    - controls
    - incident types

acs:
  target: docs/marketplace/acs-integration.md
  must_include:
    - agent roles
    - workflow
    - output types
    - boundaries

reporting:
  target: docs/marketplace/reporting-and-accountability.md
  must_include:
    - report types
    - marketplace report fields
    - accountability records
    - quality rules

risk:
  target: docs/marketplace/risk-and-compliance.md
  must_include:
    - risk categories
    - prohibited claims
    - safe language
    - sensitive categories
    - review triggers

## 5. Cross-Linking Requirements

cross_links:
  overview:
    link_to:
      - listing_model
      - payments
      - credits
      - governance
      - treasury

  listing_model:
    link_to:
      - seller_provider
      - reputation
      - risk
      - BBA_claim_review

  credits:
    link_to:
      - Tokenomics
      - Academy
      - Treasury
      - Governance

  academy:
    link_to:
      - Academy
      - Tokenomics_locked_rewards
      - Reputation

  business_bba:
    link_to:
      - Business
      - BBA_Agency
      - Runtime

  dex_defi:
    link_to:
      - DEX
      - DeFi
      - Risk

  disputes:
    link_to:
      - Payments
      - Treasury
      - Reporting

  acs:
    link_to:
      - ACS
      - Morpheus
      - Agent_Smith
      - Trinity

## 6. Language Guardrails

use_language:
  - Marketplace listing
  - seller status
  - verified if reviewed
  - subject to listing terms
  - subject to refund policy
  - subject to governance approval
  - subject to tokenomics policy
  - locked rewards may be restricted
  - internal credit if approved
  - results may vary
  - no guaranteed revenue
  - no guaranteed buyer outcome
  - active if verified
  - planned
  - draft

avoid_language:
  - guaranteed seller revenue
  - guaranteed buyer result
  - guaranteed ROI
  - guaranteed profit
  - guaranteed DeFi yield
  - risk-free
  - passive income
  - locked rewards are withdrawable unless confirmed
  - locked rewards are transferable unless confirmed
  - cash equivalent unless policy confirms
  - official seller unless approved
  - certified unless verified
  - legally compliant unless reviewed
  - DEX checkout active unless implemented

## 7. Definition of Done for Marketplace Docs

done_when:
  - all required pages exist
  - all public pages are in English
  - Marketplace is defined as commercial exchange layer
  - listing, seller, buyer, payment, settlement, fees, credits, tokenomics, Academy, Business/BBA, DEX/DeFi, Governance, Treasury, reputation, disputes, security, ACS, reporting, and risk are documented
  - locked rewards are treated with strict caveats
  - no guaranteed revenue, ROI, buyer outcome, or token price language exists
  - navigation is updated
