# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: BBA AGENCY
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: BBA Agency
  canonical_name: Axodus BBA
  full_name: Blockchain Business & Advertising
  parent_nucleus: Business
  role: blockchain_native_business_advertising_growth_positioning_and_claim_review_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - bba-core.akp.md
  - positioning-and-identity.akp.md
  - service-model.akp.md
  - client-intake.akp.md
  - campaign-lifecycle.akp.md
  - claim-review.akp.md
  - growth-operations.akp.md
  - content-and-narrative.akp.md
  - brand-architecture.akp.md
  - web3-launch-support.akp.md
  - dao-governance-communication.akp.md
  - academy-marketplace-alignment.akp.md
  - acs-agent-workflow.akp.md
  - reporting-accountability.akp.md
  - risk-compliance.akp.md
  - bba-page-directives.akp.md

semantic_domains:
  identity:
    source_file: bba-core.akp.md
    concepts:
      - Blockchain_Business_Advertising
      - business_oriented_communication
      - Web3_growth
      - claim_review
      - responsible_marketing

  positioning:
    source_file: positioning-and-identity.akp.md
    concepts:
      - strategic_positioning
      - credibility
      - ROI_aware_not_ROI_guaranteed
      - Axodus_Business_relationship
      - brand_hierarchy

  services:
    source_file: service-model.akp.md
    concepts:
      - service_catalog
      - campaign_strategy
      - brand_positioning
      - launch_support
      - content_operations
      - growth_ops
      - DAO_communication

  intake:
    source_file: client-intake.akp.md
    concepts:
      - client_profile
      - request_context
      - claim_risk
      - business_objectives
      - target_audience
      - campaign_scope

  campaign_lifecycle:
    source_file: campaign-lifecycle.akp.md
    concepts:
      - discovery
      - strategy
      - claim_review
      - production
      - launch
      - monitoring
      - optimization
      - reporting

  claim_review:
    source_file: claim-review.akp.md
    concepts:
      - financial_claim
      - partnership_claim
      - audit_claim
      - performance_claim
      - token_claim
      - compliance_sensitive_claim

  growth:
    source_file: growth-operations.akp.md
    concepts:
      - acquisition
      - activation
      - retention
      - conversion
      - funnel
      - metrics
      - experimentation

  content_narrative:
    source_file: content-and-narrative.akp.md
    concepts:
      - narrative_system
      - educational_content
      - product_copy
      - community_updates
      - launch_content

  brand:
    source_file: brand-architecture.akp.md
    concepts:
      - Axodus_brand
      - product_brand
      - BBA_brand
      - naming
      - visual_language
      - tone

  launch:
    source_file: web3-launch-support.akp.md
    concepts:
      - product_launch
      - token_launch_language
      - DApp_launch
      - community_launch
      - documentation_launch
      - risk_disclosure

  governance:
    source_file: dao-governance-communication.akp.md
    concepts:
      - proposal_communication
      - DAO_updates
      - governance_explainers
      - community_clarity
      - execution_receipts

  academy_marketplace:
    source_file: academy-marketplace-alignment.akp.md
    concepts:
      - course_marketing
      - tutor_positioning
      - marketplace_listing_copy
      - product_education
      - locked_rewards_language

  ACS:
    source_file: acs-agent-workflow.akp.md
    concepts:
      - Morpheus
      - Agent_Smith
      - Trinity
      - campaign_analysis
      - claim_review_assistance
      - human_validation

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - campaign_report
      - performance_report
      - claim_record
      - approval_record
      - accountability

  risk:
    source_file: risk-compliance.akp.md
    concepts:
      - deceptive_marketing
      - financial_promotion_risk
      - token_claim_risk
      - trading_claim_risk
      - privacy
      - reputation

public_documentation_targets:
  overview:
    target: docs/bba-agency/overview.md
    source_files:
      - bba-core.akp.md
      - positioning-and-identity.akp.md

  positioning:
    target: docs/bba-agency/positioning.md
    source_files:
      - positioning-and-identity.akp.md

  service_model:
    target: docs/bba-agency/service-model.md
    source_files:
      - service-model.akp.md

  client_intake:
    target: docs/bba-agency/client-intake.md
    source_files:
      - client-intake.akp.md

  campaign_lifecycle:
    target: docs/bba-agency/campaign-lifecycle.md
    source_files:
      - campaign-lifecycle.akp.md

  claim_review:
    target: docs/bba-agency/claim-review.md
    source_files:
      - claim-review.akp.md
      - risk-compliance.akp.md

  growth_operations:
    target: docs/bba-agency/growth-operations.md
    source_files:
      - growth-operations.akp.md

  content_narrative:
    target: docs/bba-agency/content-and-narrative.md
    source_files:
      - content-and-narrative.akp.md

  brand_architecture:
    target: docs/bba-agency/brand-architecture.md
    source_files:
      - brand-architecture.akp.md

  launch_support:
    target: docs/bba-agency/web3-launch-support.md
    source_files:
      - web3-launch-support.akp.md

  governance_communication:
    target: docs/bba-agency/dao-and-governance-communication.md
    source_files:
      - dao-governance-communication.akp.md

  academy_marketplace:
    target: docs/bba-agency/academy-and-marketplace-alignment.md
    source_files:
      - academy-marketplace-alignment.akp.md

  acs_workflow:
    target: docs/bba-agency/acs-agent-workflow.md
    source_files:
      - acs-agent-workflow.akp.md

  reporting:
    target: docs/bba-agency/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  risk:
    target: docs/bba-agency/risk-and-compliance.md
    source_files:
      - risk-compliance.akp.md

global_invariants:
  - BBA_means_Blockchain_Business_and_Advertising
  - BBA_belongs_under_Axodus_Business
  - BBA_is_not_hype_marketing
  - BBA_must_be_claim_review_driven
  - no_guaranteed_ROI_or_growth
  - no_unverified_partnership_or_audit_claims
  - no_token_investment_claims
  - no_trading_profit_promises
  - ACS_supports_but_does_not_final_approve
  - all_public_docs_must_be_English
