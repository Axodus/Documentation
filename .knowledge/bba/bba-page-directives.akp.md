# AXODUS KNOWLEDGE PACK
# DOMAIN: BBA AGENCY
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[BBA_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the BBA Agency knowledge pack into public documentation pages.

All public documentation must be written in English.

BBA pages must sound professional, responsible, strategic, and business-oriented. They must not sound like generic agency hype or crypto pump marketing.

## 2. Required Public Pages

required_pages:
  - docs/bba-agency/overview.md
  - docs/bba-agency/positioning.md
  - docs/bba-agency/service-model.md
  - docs/bba-agency/client-intake.md
  - docs/bba-agency/campaign-lifecycle.md
  - docs/bba-agency/claim-review.md
  - docs/bba-agency/growth-operations.md
  - docs/bba-agency/content-and-narrative.md
  - docs/bba-agency/brand-architecture.md
  - docs/bba-agency/web3-launch-support.md
  - docs/bba-agency/dao-and-governance-communication.md
  - docs/bba-agency/academy-and-marketplace-alignment.md
  - docs/bba-agency/acs-agent-workflow.md
  - docs/bba-agency/reporting-and-accountability.md
  - docs/bba-agency/risk-and-compliance.md

optional_pages:
  - docs/bba-agency/campaign-templates.md
  - docs/bba-agency/service-catalog.md
  - docs/bba-agency/case-study-format.md
  - docs/bba-agency/brand-guidelines.md
  - docs/bba-agency/content-review-checklist.md

## 3. Standard Page Template

Every major BBA page should include:

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
  Owner: Axodus BBA

## 4. Page: Overview

target:
  docs/bba-agency/overview.md

must_include:
  - Axodus BBA means Blockchain Business & Advertising.
  - BBA is a specialized agency layer under Axodus Business.
  - BBA provides blockchain-native positioning, communication, advertising, growth operations, claim review, and launch support.
  - BBA is not hype marketing.
  - BBA is ROI-aware but does not guarantee ROI.
  - BBA uses ACS agents as support under human validation.

## 5. Page: Positioning

target:
  docs/bba-agency/positioning.md

must_include:
  - positioning statement
  - value proposition
  - brand personality
  - tone of voice
  - brand hierarchy
  - audience segments
  - identity boundaries

## 6. Page: Service Model

target:
  docs/bba-agency/service-model.md

must_include:
  - service groups
  - service object fields
  - possible service tiers
  - required inputs
  - acceptance criteria
  - no guaranteed results statement

## 7. Page: Client Intake

target:
  docs/bba-agency/client-intake.md

must_include:
  - request sources
  - intake fields
  - claim intake questions
  - risk classification
  - intake outputs
  - intake is not approval

## 8. Page: Campaign Lifecycle

target:
  docs/bba-agency/campaign-lifecycle.md

must_include:
  - campaign stages
  - campaign statuses
  - campaign object
  - metrics
  - reporting and archive

## 9. Page: Claim Review

target:
  docs/bba-agency/claim-review.md

must_include:
  - claim definition
  - claim categories
  - claim review statuses
  - record fields
  - evidence requirements
  - dangerous claims
  - safer rewrite patterns

## 10. Page: Growth Operations

target:
  docs/bba-agency/growth-operations.md

must_include:
  - growth funnel
  - growth levers
  - metrics
  - experiment object
  - growth rules

## 11. Page: Content and Narrative

target:
  docs/bba-agency/content-and-narrative.md

must_include:
  - narrative layers
  - content types
  - narrative quality rules
  - review checklist

## 12. Page: Brand Architecture

target:
  docs/bba-agency/brand-architecture.md

must_include:
  - Axodus brand hierarchy
  - naming rules
  - visual identity responsibilities
  - messaging architecture
  - brand risks

## 13. Page: Web3 Launch Support

target:
  docs/bba-agency/web3-launch-support.md

must_include:
  - launch types
  - readiness checklist
  - launch assets
  - launch risk controls

## 14. Page: DAO and Governance Communication

target:
  docs/bba-agency/dao-and-governance-communication.md

must_include:
  - governance communication types
  - governance content requirements
  - sensitive governance claims
  - anti-patterns

## 15. Page: Academy and Marketplace Alignment

target:
  docs/bba-agency/academy-and-marketplace-alignment.md

must_include:
  - Academy support services
  - Academy claim risks
  - Marketplace support services
  - Marketplace claim risks
  - listing copy fields
  - reward and token language rules

## 16. Page: ACS Agent Workflow

target:
  docs/bba-agency/acs-agent-workflow.md

must_include:
  - agent roles
  - ACS workflow
  - output types
  - agent boundaries

## 17. Page: Reporting and Accountability

target:
  docs/bba-agency/reporting-and-accountability.md

must_include:
  - report types
  - campaign report fields
  - accountability records
  - quality rules

## 18. Page: Risk and Compliance

target:
  docs/bba-agency/risk-and-compliance.md

must_include:
  - risk categories
  - prohibited language
  - safe language
  - review triggers
  - escalation requirements

## 19. Cross-Linking Requirements

cross_links:
  overview:
    link_to:
      - Business_overview
      - ACS_overview
      - Claim_Review
      - Campaign_Lifecycle

  claim_review:
    link_to:
      - Tokenomics_risk
      - Trading_disclosures
      - Treasury_reporting
      - Governance_accountability

  growth_operations:
    link_to:
      - Marketplace
      - Academy
      - Business_runtime
      - Reporting

  governance_communication:
    link_to:
      - Governance
      - Runtime
      - Accountability

  academy_marketplace:
    link_to:
      - Academy
      - Marketplace
      - Tokenomics_locked_rewards

  acs_workflow:
    link_to:
      - ACS
      - Morpheus
      - Agent_Smith
      - Trinity

## 20. Language Guardrails

use_language:
  - blockchain-native
  - business-oriented
  - claim-reviewed
  - responsible growth
  - measurable objectives
  - results may vary
  - launch support
  - Web3 positioning
  - governance-aligned
  - risk-aware
  - subject to review
  - subject to approval
  - evidence-based claims

avoid_language:
  - guaranteed ROI
  - guaranteed sales
  - guaranteed growth
  - guaranteed token price
  - guaranteed profit
  - risk-free
  - pump
  - moon
  - passive income
  - audited unless verified
  - official partner unless confirmed
  - legally compliant unless reviewed

## 21. Definition of Done for BBA Docs

done_when:
  - all required pages exist
  - all public pages are in English
  - BBA is clearly defined as Blockchain Business & Advertising
  - BBA is positioned under Axodus Business
  - service model is documented
  - claim review is documented
  - campaign lifecycle is documented
  - growth operations are documented
  - ACS workflow is documented
  - governance, Academy, Marketplace, Tokenomics, Trading, Treasury, and Accountability relationships are clear
  - no unsafe marketing claims exist
  - navigation is updated
