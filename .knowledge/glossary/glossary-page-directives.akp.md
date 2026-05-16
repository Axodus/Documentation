# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_GLOSSARY_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Glossary knowledge pack into public documentation pages.

All public documentation must be written in English.

The public glossary should be concise, useful, and cross-linked. It should not be as dense as the knowledge packs.

## 2. Required Public Pages

required_pages:
  - GLOSSARY.md
  - docs/glossary/terms.md

recommended_pages:
  - docs/glossary/terminology-standards.md
  - docs/glossary/governance-terms.md
  - docs/glossary/business-terms.md
  - docs/glossary/academy-terms.md
  - docs/glossary/acs-terms.md
  - docs/glossary/tokenomics-terms.md
  - docs/glossary/trading-treasury-terms.md
  - docs/glossary/security-accountability-terms.md

## 3. Root GLOSSARY.md

target:
  GLOSSARY.md

purpose:
  - provide a high-level canonical glossary entry point

must_include:
  - brief introduction
  - alphabetical or domain-grouped terms
  - concise definitions
  - status labels for Draft/Planned terms when useful
  - links to deeper pages under docs/glossary

must_prioritize_terms:
  - Axodus
  - Nucleus
  - Governance
  - Executive DAO
  - Boardroom Council
  - Community DAO
  - Constitutional Governance
  - DAO Federation
  - Business
  - Request Intake
  - Business Runtime
  - BBA
  - Academy
  - Learn-to-Win
  - Proof of Knowledge
  - Locked Rewards
  - ACS
  - Morpheus
  - Trinity
  - Agent Smith
  - Marketplace
  - Trading
  - Treasury
  - Tokenomics
  - `$Neurons`
  - Accountability
  - Risk Management
  - Execution Receipt
  - Knowledge Pack

## 4. docs/glossary/terms.md

target:
  docs/glossary/terms.md

purpose:
  - complete glossary list

must_include:
  - all major terms from knowledge pack
  - short definition
  - related concepts
  - caution notes for sensitive terms

structure_options:
  alphabetical:
    - A
    - B
    - C
    - etc

  domain_grouped:
    - Core
    - Governance
    - Business
    - Academy
    - ACS
    - Tokenomics
    - Trading and Treasury
    - Marketplace and Products
    - Security and Accountability

recommended:
  - Use domain-grouped for initial readability.
  - Add alphabetical index later if needed.

## 5. docs/glossary/terminology-standards.md

target:
  docs/glossary/terminology-standards.md

must_include:
  - English-only rule
  - capitalization standards
  - `$Neurons` token naming standard
  - status labels
  - safe language
  - dangerous language to avoid
  - planned vs active distinction
  - AI/ACS authority language
  - no financial guarantees

## 6. Domain Glossary Pages

domain_pages:
  governance_terms:
    target: docs/glossary/governance-terms.md
    source: governance-terms.akp.md

  business_terms:
    target: docs/glossary/business-terms.md
    source: business-terms.akp.md

  academy_terms:
    target: docs/glossary/academy-terms.md
    source: academy-terms.akp.md

  acs_terms:
    target: docs/glossary/acs-terms.md
    source: acs-terms.akp.md

  tokenomics_terms:
    target: docs/glossary/tokenomics-terms.md
    source: tokenomics-terms.akp.md

  trading_treasury_terms:
    target: docs/glossary/trading-treasury-terms.md
    source: trading-treasury-terms.akp.md

  security_accountability_terms:
    target: docs/glossary/security-accountability-terms.md
    source: security-accountability-terms.akp.md

## 7. Public Term Entry Format

recommended_public_format:
  term:
    fields:
      - Term
      - Definition
      - Status optional
      - Related terms optional
      - Notes optional for sensitive concepts

example:
  "ACS — AI Coordination System. The AI-assisted operational intelligence layer of Axodus. ACS supports analysis, classification, documentation, and review workflows but does not replace governance or human accountability."

## 8. Cross-Linking Requirements

cross_links:
  Governance:
    link_to:
      - docs/governance/overview.md

  Business:
    link_to:
      - docs/business/overview.md

  Academy:
    link_to:
      - docs/academy/overview.md

  ACS:
    link_to:
      - docs/acs/overview.md

  $Neurons:
    link_to:
      - docs/tokenomics/neurons-token.md

  Locked_Rewards:
    link_to:
      - docs/academy/locked-rewards.md
      - docs/tokenomics/locked-rewards.md

  Trading:
    link_to:
      - docs/trading/overview.md

  Treasury:
    link_to:
      - docs/treasury/overview.md

  Accountability:
    link_to:
      - docs/accountability/overview.md

  Marketplace:
    link_to:
      - docs/marketplace/overview.md

## 9. Language Guardrails

use_language:
  - means
  - refers to
  - describes
  - may support
  - designed to support
  - subject to governance approval
  - subject to implementation validation
  - planned
  - draft
  - active
  - utility
  - access
  - rewards
  - governance participation
  - risk-aware

avoid_language:
  - guaranteed
  - risk-free
  - passive income
  - investment return
  - guaranteed APY
  - guaranteed yield
  - automatic approval
  - fully autonomous
  - legally compliant without review
  - audited unless verified
  - official partnership unless confirmed

## 10. Definition of Done for Glossary Docs

done_when:
  - GLOSSARY.md exists
  - docs/glossary/terms.md exists
  - terminology standards page exists or is planned
  - all final glossary text is in English
  - `$Neurons` is canonical token notation
  - dangerous terms are avoided
  - key governance, business, academy, ACS, tokenomics, trading, treasury, marketplace, security, and accountability terms are defined
  - planned vs active terms are distinguished
  - glossary links to relevant documentation pages
  - no unsafe financial, governance, or AI autonomy claims exist
