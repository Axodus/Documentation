# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: TERMINOLOGY STANDARDS

[AXODUS_TERMINOLOGY_STANDARDS]

## 1. Language Standard

language:
  public_docs:
    required:
      - English

  internal_knowledge_packs:
    preferred:
      - English
    note:
      - internal_source_context_may_originate_from_Portuguese_but_final_pack_should_use_English

## 2. Capitalization Standards

capitalization:
  use_exact:
    - Axodus
    - Axodus Core
    - Axodus Governance
    - Axodus Business
    - Axodus Academy
    - Axodus Trading
    - Axodus Marketplace
    - Axodus Treasury
    - Axodus ACS
    - ACS
    - AI Coordination System
    - BBA
    - Blockchain Business & Advertising
    - Executive DAO
    - Boardroom Council
    - Community DAO
    - DAO Federation
    - Constitutional Governance
    - Local Governance
    - Proof of Knowledge
    - Learn-to-Win
    - `$Neurons`

  lowercase_when_generic:
    - governance
    - treasury
    - marketplace
    - academy
    - business
    - proposal
    - plugin
    - token
    - reward
    - strategy

## 3. Token Naming Standard

token_standard:
  canonical:
    - `$Neurons`

  avoid_as_primary:
    - NRS
    - Neurons Token as sole name without symbol
    - Neuro
    - Neurons coin
    - neurons without context

  usage_notes:
    - Use `$Neurons` when referring to the ecosystem token.
    - Define it as an ecosystem utility, reward, access, and governance participation token.
    - Do not present `$Neurons` as an investment contract, guaranteed appreciating asset, or guaranteed income mechanism.
    - If old documents mention NRS, treat it as historical or deprecated unless project owners revalidate it.

## 4. DAO and Governance Naming Standard

governance_terms:
  canonical:
    Executive_DAO:
      write_as:
        - Executive DAO

    Boardroom_Council:
      write_as:
        - Boardroom Council

    Community_DAO:
      write_as:
        - Community DAO

    DAO_Federation:
      write_as:
        - DAO Federation

    Constitutional_Governance:
      write_as:
        - Constitutional Governance

    Local_Governance:
      write_as:
        - Local Governance

    Proposal_Lifecycle:
      write_as:
        - Proposal Lifecycle

    Execution_Receipt:
      write_as:
        - Execution Receipt

usage_notes:
  - Governance is the coordination heart of Axodus.
  - Do not describe governance as only voting.
  - Do not claim final governance parameters unless verified.
  - Use "current design", "draft", or "planned" for unsettled mechanisms.

## 5. ACS Naming Standard

ACS_terms:
  first_use:
    - AI Coordination System (ACS)

  subsequent_use:
    - ACS

  agent_names:
    - Morpheus
    - Trinity
    - Agent Smith

usage_notes:
  - ACS is an AI-assisted operational intelligence layer.
  - Do not write ACS as autonomous final authority.
  - Do not imply agents execute treasury, contracts, or governance decisions without review.

## 6. Business Naming Standard

Business_terms:
  canonical:
    - Axodus Business
    - Business nucleus
    - Business runtime
    - Request Intake
    - Change Request
    - DAO Service Request
    - Service Catalog
    - Blockchain Business & Advertising
    - BBA

usage_notes:
  - Business is the structured intake and delivery runtime.
  - Do not describe Business as only sales or marketing.
  - BBA is a specialized blockchain-native communication and growth layer.

## 7. Academy Naming Standard

Academy_terms:
  canonical:
    - Axodus Academy
    - Learn-to-Win
    - Proof of Knowledge
    - Locked Rewards
    - Tutor Validation
    - Course Publishing
    - Learning Path

usage_notes:
  - Academy is a central onboarding and education nucleus.
  - Rewards must be documented cautiously.
  - Free-course rewards may be locked or internal-use if implemented.
  - Paid-course rewards may follow different rules but must not be assumed liquid.

## 8. Trading and Treasury Naming Standard

trading_treasury_terms:
  canonical:
    - Axodus Trading
    - Trading Strategy
    - User-Facing Strategy
    - Strategy Access
    - API Key Security
    - Treasury
    - Treasury Policy
    - Risk Limits
    - Exposure
    - P&L
    - Risk Management

usage_notes:
  - Trading strategies are tools, not profit guarantees.
  - Treasury is the capital allocation and risk supervision layer.
  - Always include risk language for trading and treasury topics.

## 9. Status Label Standard

status_labels:
  Draft:
    use_when:
      - document_or_term_is_under_construction

  Planned:
    use_when:
      - feature_or_model_intended_but_not_live

  Active:
    use_when:
      - feature_or_term_is_currently_operational_or_canonical

  Experimental:
    use_when:
      - limited_POC_or_test

  Deprecated:
    use_when:
      - should_no_longer_be_used

  Historical:
    use_when:
      - old_context_preserved_for_reference

  Needs_Review:
    use_when:
      - unclear_incomplete_or_potentially_outdated

  Superseded:
    use_when:
      - replaced_by_newer_term_or_document

## 10. Safe Language Standards

safe_language:
  preferred:
    - designed_to_support
    - may_support
    - subject_to_governance_approval
    - subject_to_contract_implementation
    - requires_validation
    - current_design
    - planned
    - draft
    - risk-aware
    - accountable
    - transparent
    - utility
    - access
    - reward
    - governance_participation
    - internal_use

  avoid:
    - guaranteed
    - risk-free
    - passive_income
    - guaranteed_profit
    - guaranteed_APY
    - guaranteed_yield
    - automatic_approval
    - fully_autonomous
    - legally_compliant_without_review
    - audited_without_audit
    - official_partnership_without_confirmation
    - investment_return

## 11. Documentation Style

documentation_style:
  - define_terms_before_using_acronyms
  - use_clear_plain_English
  - avoid_hype
  - explain_status_for_planned_systems
  - avoid_unverified_specifics
  - cross_link_related_terms
  - use_consistent_file_names
  - avoid_duplicate_definitions_across_docs

## 12. Public Documentation Guidance

The public Terminology Standards page should:

- explain canonical capitalization;
- define `$Neurons` notation;
- explain status labels;
- list safe and unsafe language;
- guide contributors and agents;
- link to glossary terms.
