# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: GLOSSARY
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Glossary
  role: shared_terminology_and_semantic_standard_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - glossary-core.akp.md
  - terminology-standards.akp.md
  - core-ecosystem-terms.akp.md
  - governance-terms.akp.md
  - business-terms.akp.md
  - academy-terms.akp.md
  - acs-terms.akp.md
  - tokenomics-terms.akp.md
  - trading-treasury-terms.akp.md
  - marketplace-product-terms.akp.md
  - security-accountability-terms.akp.md
  - deprecated-and-dangerous-terms.akp.md
  - glossary-page-directives.akp.md

semantic_domains:
  glossary_identity:
    source_file: glossary-core.akp.md
    concepts:
      - canonical_terms
      - term_status
      - short_definition
      - long_definition
      - related_terms
      - usage_notes
      - prohibited_language

  terminology_standards:
    source_file: terminology-standards.akp.md
    concepts:
      - capitalization
      - token_symbol
      - status_labels
      - public_language
      - forbidden_claims

  core_ecosystem:
    source_file: core-ecosystem-terms.akp.md
    concepts:
      - Axodus
      - nucleus
      - ecosystem
      - DaaS
      - ETF_DaaS
      - product_nucleus
      - constitution

  governance:
    source_file: governance-terms.akp.md
    concepts:
      - Executive_DAO
      - Boardroom_Council
      - Community_DAO
      - DAO_Federation
      - Constitutional_Governance
      - Proposal_Lifecycle
      - Execution_Receipt

  business:
    source_file: business-terms.akp.md
    concepts:
      - Business
      - Request_Intake
      - Business_Runtime
      - Change_Request
      - DAO_Service_Request
      - BBA

  academy:
    source_file: academy-terms.akp.md
    concepts:
      - Academy
      - Learn_to_Win
      - Proof_of_Knowledge
      - Locked_Rewards
      - Tutor_Validation
      - Course_Publishing

  ACS:
    source_file: acs-terms.akp.md
    concepts:
      - ACS
      - Morpheus
      - Trinity
      - Agent_Smith
      - MCP
      - Semantic_Memory

  tokenomics:
    source_file: tokenomics-terms.akp.md
    concepts:
      - $Neurons
      - Token_Utility
      - Reward_Policy
      - Locked_Balance
      - Governance_Participation
      - Internal_Use

  trading_treasury:
    source_file: trading-treasury-terms.akp.md
    concepts:
      - Trading
      - Strategy
      - User_Facing_Strategy
      - Treasury
      - Risk_Limits
      - Exposure
      - PnL

  marketplace_product:
    source_file: marketplace-product-terms.akp.md
    concepts:
      - Marketplace
      - Listing
      - Service_Catalog
      - Product_Access
      - BBA
      - Course_Commerce

  security_accountability:
    source_file: security-accountability-terms.akp.md
    concepts:
      - Accountability
      - Financial_Report
      - Governance_Record
      - Auditability
      - Security_Review
      - Prompt_Injection
      - Least_Privilege

  dangerous_terms:
    source_file: deprecated-and-dangerous-terms.akp.md
    concepts:
      - guaranteed_profit
      - passive_income
      - risk_free
      - automatic_approval
      - audited_without_audit
      - partnership_without_confirmation

public_documentation_targets:
  root_glossary:
    target: GLOSSARY.md
    source_files:
      - glossary-core.akp.md
      - core-ecosystem-terms.akp.md
      - governance-terms.akp.md
      - business-terms.akp.md
      - academy-terms.akp.md
      - acs-terms.akp.md
      - tokenomics-terms.akp.md
      - trading-treasury-terms.akp.md
      - security-accountability-terms.akp.md

  terms_page:
    target: docs/glossary/terms.md
    source_files:
      - glossary-core.akp.md
      - all_term_files

  terminology_standards:
    target: docs/glossary/terminology-standards.md
    source_files:
      - terminology-standards.akp.md
      - deprecated-and-dangerous-terms.akp.md

global_invariants:
  - glossary_terms_must_be_in_English
  - use_$Neurons_as_canonical_token_notation
  - avoid_investment_language
  - preserve_governance_layer_terms
  - define_planned_vs_active_when_relevant
  - dangerous_terms_must_be_replaced_with_safe_language
  - public_glossary_should_be_concise_but_precise
  - knowledge_glossary_can_be_dense_and_operational
