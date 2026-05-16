# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[CRYPTODRAW_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Lottery / CryptoDraw knowledge pack into public documentation pages.

All public documentation must be written in English.

Lottery pages must be transparent, responsible, and precise. They must not sound like gambling hype, investment marketing, or guaranteed prize promotion.

## 2. Required Public Pages

required_pages:
  - docs/lottery/overview.md
  - docs/lottery/cryptodraw.md
  - docs/lottery/game-models.md
  - docs/lottery/lotofacil-style-model.md
  - docs/lottery/supersete-style-model.md
  - docs/lottery/ticket-model.md
  - docs/lottery/draw-lifecycle.md
  - docs/lottery/randomness-and-vrf.md
  - docs/lottery/merkle-and-indexing.md
  - docs/lottery/prize-pools-and-payouts.md
  - docs/lottery/claims-and-settlement.md
  - docs/lottery/treasury-and-fees.md
  - docs/lottery/tokenomics-alignment.md
  - docs/lottery/governance-alignment.md
  - docs/lottery/security-and-smart-contracts.md
  - docs/lottery/operations-and-runtime.md
  - docs/lottery/acs-integration.md
  - docs/lottery/reporting-and-accountability.md
  - docs/lottery/responsible-participation.md
  - docs/lottery/risk-and-compliance.md

optional_pages:
  - docs/lottery/probability-and-odds.md
  - docs/lottery/ticket-registry.md
  - docs/lottery/draw-reports.md
  - docs/lottery/incident-response.md
  - docs/lottery/open-questions.md

## 3. Standard Page Template

Every major Lottery page should include:

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
  Owner: Axodus Lottery / CryptoDraw

## 4. Page Requirements

overview:
  target: docs/lottery/overview.md
  must_include:
    - Lottery nucleus definition
    - CryptoDraw as Axodus lottery product concept
    - no guaranteed winnings
    - status caveat
    - relationships with Governance, Treasury, Tokenomics, Academy, BBA, ACS, Security, Accountability

cryptodraw:
  target: docs/lottery/cryptodraw.md
  must_include:
    - product definition
    - product goals
    - product modules
    - user flow
    - statuses
    - risks

game_models:
  target: docs/lottery/game-models.md
  must_include:
    - game model object
    - game model types
    - rule requirements
    - lifecycle

lotofacil_style:
  target: docs/lottery/lotofacil-style-model.md
  must_include:
    - inspired by combination matching mechanics
    - no official affiliation claim
    - conceptual rules
    - parameters
    - ticket validation
    - winner calculation
    - risk notes

supersete_style:
  target: docs/lottery/supersete-style-model.md
  must_include:
    - inspired by positional matching mechanics
    - no official affiliation claim
    - conceptual rules
    - parameters
    - ticket validation
    - winner calculation
    - risk notes

ticket_model:
  target: docs/lottery/ticket-model.md
  must_include:
    - ticket definition
    - soulbound ticket definition
    - ticket fields
    - statuses
    - soulbound rationale
    - validation
    - privacy

draw_lifecycle:
  target: docs/lottery/draw-lifecycle.md
  must_include:
    - draw round object
    - statuses
    - lifecycle flow
    - cancellation and refund questions

randomness:
  target: docs/lottery/randomness-and-vrf.md
  must_include:
    - randomness requirements
    - VRF concepts
    - VRF flow
    - result derivation
    - failure scenarios and policies

merkle:
  target: docs/lottery/merkle-and-indexing.md
  must_include:
    - indexing concepts
    - uses
    - leaf fields
    - Merkle flow
    - risks

prizes:
  target: docs/lottery/prize-pools-and-payouts.md
  must_include:
    - prize pool concepts
    - formula fields
    - tier object
    - payout models
    - rounding and dust

claims:
  target: docs/lottery/claims-and-settlement.md
  must_include:
    - claim concepts
    - claim fields
    - statuses
    - settlement models
    - unclaimed prize policy

treasury:
  target: docs/lottery/treasury-and-fees.md
  must_include:
    - treasury interfaces
    - fee types
    - treasury record fields
    - review triggers
    - risks

tokenomics:
  target: docs/lottery/tokenomics-alignment.md
  must_include:
    - tokenomics interfaces
    - policy questions
    - risks
    - no investment framing

governance:
  target: docs/lottery/governance-alignment.md
  must_include:
    - governance-sensitive items
    - routing levels
    - reason codes

security:
  target: docs/lottery/security-and-smart-contracts.md
  must_include:
    - possible contract components
    - security checklist
    - statuses
    - incident response

operations:
  target: docs/lottery/operations-and-runtime.md
  must_include:
    - operational roles
    - runtime phases
    - operational incident types

acs:
  target: docs/lottery/acs-integration.md
  must_include:
    - agent roles
    - ACS workflow
    - output types
    - boundaries

reporting:
  target: docs/lottery/reporting-and-accountability.md
  must_include:
    - report types
    - draw report fields
    - accountability records
    - quality rules

responsible_participation:
  target: docs/lottery/responsible-participation.md
  must_include:
    - no guaranteed winnings
    - jurisdiction and age sensitivity
    - spending limits
    - user safety controls
    - prohibited messaging

risk:
  target: docs/lottery/risk-and-compliance.md
  must_include:
    - legal sensitivity
    - risk categories
    - prohibited claims
    - safe language
    - review triggers
    - required reviews

## 5. Cross-Linking Requirements

cross_links:
  overview:
    link_to:
      - cryptodraw
      - game_models
      - draw_lifecycle
      - risk_and_compliance
      - responsible_participation

  tickets:
    link_to:
      - draw_lifecycle
      - merkle
      - claims
      - security

  randomness:
    link_to:
      - draw_lifecycle
      - security
      - reporting

  prizes:
    link_to:
      - claims
      - treasury
      - reporting

  tokenomics:
    link_to:
      - Tokenomics
      - $Neurons
      - Treasury

  governance:
    link_to:
      - Governance
      - Runtime
      - Treasury
      - Security

  acs:
    link_to:
      - ACS
      - Morpheus
      - Agent_Smith
      - Trinity

## 6. Language Guardrails

use_language:
  - lottery product concept
  - CryptoDraw
  - verifiable randomness
  - draw rules
  - ticket record
  - soulbound ticket if implemented
  - prize pool
  - claim window
  - subject to governance approval
  - subject to security review
  - subject to compliance review
  - subject to jurisdiction restrictions
  - no guaranteed winnings
  - planned
  - draft
  - testnet only
  - active if verified

avoid_language:
  - guaranteed winnings
  - guaranteed profit
  - risk-free
  - easy money
  - passive income
  - investment lottery
  - legally available everywhere
  - licensed unless verified
  - regulated unless verified
  - audited unless verified
  - official Lotofácil or SuperSete unless legally confirmed
  - prize guaranteed unless funded and approved

## 7. Definition of Done for Lottery Docs

done_when:
  - all required pages exist
  - all public pages are in English
  - CryptoDraw is clearly defined and status-labeled
  - Lotofácil-style and SuperSete-style models are safely framed as inspired mechanics
  - ticket model, draw lifecycle, randomness, Merkle/indexing, prizes, claims, treasury, tokenomics, governance, security, operations, ACS, reporting, responsible participation, and compliance are documented
  - no guaranteed winnings or legal availability claims exist
  - navigation is updated
