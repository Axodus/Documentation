# AXODUS KNOWLEDGE PACK
# DOMAIN: BUSINESS
# TYPE: REQUEST INTAKE MODEL

[AXODUS_BUSINESS_REQUEST_INTAKE]

## 1. Intake Thesis

Request intake is the first control point of Axodus Business.

A request that is not properly captured cannot be scoped, priced, governed, delivered, or accepted safely.

The intake process must convert informal demand into structured information.

Business intake must identify:

- who is requesting;
- what they want;
- why they want it;
- what systems are affected;
- which nucleus owns it;
- whether governance is involved;
- whether financial, security, tokenomics, or user risks exist;
- what is missing;
- what must happen before execution.

## 2. Intake Goals

intake_goals:
  - understand_requester
  - clarify_objective
  - classify_request
  - identify_responsible_nucleus
  - detect_missing_information
  - identify_governance_touchpoints
  - identify_risk
  - define_next_step
  - prevent_vague_commitment
  - prepare_for_scope_definition

## 3. Requester Types

requester_types:
  client:
    description:
      - external_company_or_individual_requesting_service

  DAO:
    description:
      - DAO_or_subDAO_requesting_tool_plugin_or_support

  partner:
    description:
      - organization_with_potential_business_or_ecosystem_relationship

  internal_team:
    description:
      - Axodus_nucleus_or_operator_requesting_work

  community_member:
    description:
      - user_or_contributor_suggesting_feature_or_improvement

  tutor_or_content_creator:
    description:
      - Academy_related_publisher_or_educator

  trader_or_strategy_user:
    description:
      - user_requesting_trading_tool_access_or_guidance

## 4. Required Intake Fields

required_fields:
  identity:
    - requester_name_or_identifier
    - requester_type
    - organization_or_DAO
    - contact_or_reference
    - authority_to_request_if_applicable

  request_summary:
    - title
    - short_description
    - business_objective
    - problem_being_solved
    - expected_outcome

  category:
    - request_type
    - affected_nuclei
    - product_or_service_area
    - urgency

  scope:
    - desired_deliverables
    - known_requirements
    - out_of_scope_if_known
    - dependencies
    - constraints
    - timeline_expectations

  technical_context:
    - affected_systems
    - repositories_or_products
    - chains_or_networks_if_any
    - contracts_or_APIs_if_any
    - integrations_required
    - data_or_access_requirements

  governance_context:
    - DAO_involved
    - proposal_required
    - product_access_required
    - plugin_required
    - constitutional_alignment_question
    - governance_sensitivity

  financial_context:
    - budget_or_funding_model
    - payment_or_revenue_model
    - treasury_impact
    - tokenomics_impact
    - reward_policy_impact

  risk_context:
    - security_risk
    - user_risk
    - trading_risk
    - DeFi_risk
    - legal_or_compliance_uncertainty
    - data_privacy_risk

  review_context:
    - required_reviews
    - decision_owner
    - approval_needed
    - expected_acceptance_criteria

## 5. Intake Classification

classification_dimensions:
  domain:
    values:
      - Governance
      - Business
      - Academy
      - Trading
      - Treasury
      - Marketplace
      - Tokenomics
      - ACS
      - DaaS_DeFi
      - Security
      - Documentation
      - BBA

  request_type:
    values:
      - service
      - development
      - plugin
      - consulting
      - campaign
      - integration
      - training
      - automation
      - governance
      - reporting
      - support
      - research

  risk_level:
    values:
      - low
      - medium
      - high
      - critical

  governance_requirement:
    values:
      - none
      - visibility
      - review
      - formal_proposal
      - Boardroom_or_high_level_review

  delivery_complexity:
    values:
      - simple
      - moderate
      - complex
      - multi_nucleus
      - ecosystem_level

## 6. Intake Flow

intake_flow:
  1_request_received:
    - capture_raw_request
    - identify_requester

  2_initial_summary:
    - convert_raw_message_into_structured_summary

  3_required_fields_check:
    - detect_missing_information
    - request_clarification_if_needed

  4_classification:
    - assign_domain_type_risk_and_governance_requirement

  5_ACS_analysis:
    - ACS_summarizes_context
    - ACS_flags_risk_and_questions
    - ACS_suggests_next_steps

  6_business_review:
    - human_business_owner_validates_interpretation
    - decides_if_request_moves_to_scope_reject_or_needs_more_info

  7_intake_status_assignment:
    - New
    - Intake_Incomplete
    - Classified
    - Rejected
    - Ready_For_Scoping
    - Governance_Required

## 7. Missing Information Patterns

missing_information_patterns:
  unclear_requester_authority:
    example:
      - DAO_member_requests_official_DAO_plugin_without_DAO_authorization

  vague_deliverable:
    example:
      - "build a dashboard" without features data or users

  unclear_governance_impact:
    example:
      - request_changes_DAO_process_but_no_proposal_context

  unverified_token_behavior:
    example:
      - request_assumes_rewards_can_be_unlocked_or_transferred

  undefined_payment_or_budget:
    example:
      - commercial_request_without_funding_model

  missing_acceptance_criteria:
    example:
      - no_definition_of_done

  security_sensitive_unknowns:
    example:
      - request_requires_API_keys_or_contract_access_without security_model

## 8. Intake Risk Flags

risk_flags:
  GOVERNANCE_SENSITIVE:
    trigger:
      - affects_DAO_rules_plugins_federation_or_policy

  TREASURY_SENSITIVE:
    trigger:
      - affects_capital_revenue_or_treasury_reporting

  TOKENOMICS_SENSITIVE:
    trigger:
      - affects_rewards_utility_unlocks_or_emissions

  SECURITY_SENSITIVE:
    trigger:
      - involves_contracts_API_keys_private_data_or_tool_permissions

  TRADING_SENSITIVE:
    trigger:
      - involves_user_or_treasury_trading_strategy

  MARKETPLACE_SENSITIVE:
    trigger:
      - affects_fees_payments_refunds_or_seller_rules

  ACADEMY_REWARD_SENSITIVE:
    trigger:
      - affects_Learn_to_Win_rewards_or_locked_balances

  BBA_CLAIM_RISK:
    trigger:
      - campaign_may_make_financial_token_audit_or_partnership_claims

  SCOPE_UNCLEAR:
    trigger:
      - deliverables_not_defined

  CLIENT_EXPECTATION_RISK:
    trigger:
      - request_contains_unrealistic_or_unverified_expectation

## 9. Intake Outputs

intake_outputs:
  - structured_request_record
  - request_summary
  - classification
  - risk_flags
  - missing_information_list
  - recommended_responsible_nucleus
  - governance_requirement_assessment
  - next_step_recommendation
  - initial_scope_notes

## 10. Public Documentation Guidance

The public Request Intake page should:

- explain why structured intake matters;
- list required fields;
- describe classification;
- explain ACS support;
- explain risk flags;
- explain what happens after intake;
- make clear that intake is not approval or commitment.
