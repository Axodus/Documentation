# AXODUS KNOWLEDGE PACK
# DOMAIN: ACS
# TYPE: BUSINESS INTEGRATION MODEL

[ACS_BUSINESS_INTEGRATION]

## 1. Business Integration Thesis

Business is expected to be one of the largest consumers of ACS.

Business receives complex requests from clients, DAOs, sub-DAOs, partners, internal teams, and product nuclei. These requests often require classification, technical scoping, governance review, risk analysis, cost/resource estimation, and change management.

ACS helps Business transform vague requests into structured, reviewable, executable workflows.

ACS does not replace Business ownership, client communication responsibility, governance review, or human approval.

## 2. Business Request Types Supported by ACS

request_types:
  DAO_service_request:
    examples:
      - custom_governance_plugin
      - DAO_dashboard
      - product_access
      - reporting_tool
      - treasury_view

  client_project_request:
    examples:
      - custom_development
      - product_integration
      - automation
      - consulting
      - technical_delivery

  BBA_request:
    examples:
      - blockchain_campaign
      - positioning
      - growth_strategy
      - product_narrative
      - AI_assisted_marketing_workflow

  Academy_request:
    examples:
      - partner_course
      - company_training
      - certification_program
      - learning_path

  Trading_request:
    examples:
      - strategy_access
      - exchange_API_setup_guidance
      - bot_product_subscription
      - risk_report

  Marketplace_request:
    examples:
      - product_listing
      - tutor_service
      - course_commerce
      - fee_policy_question

  Governance_request:
    examples:
      - proposal_support
      - DAO_federation_intake
      - plugin_request
      - constitutional_alignment_question

## 3. ACS Business Intake Support

intake_support:
  - summarize_request
  - identify_request_type
  - identify_responsible_nucleus
  - extract_required_data
  - identify_missing_information
  - classify_risk
  - identify_governance_touchpoints
  - suggest_delivery_phases
  - draft_scope_document
  - identify_change_request_risk
  - prepare_handoff_to_Coder_or_human_team

## 4. Business Intake Data

intake_fields:
  - requester_identity
  - organization_or_DAO
  - request_type
  - business_objective
  - user_or_client_problem
  - affected_nuclei
  - technical_scope
  - governance_impact
  - treasury_or_financial_impact
  - tokenomics_impact
  - security_impact
  - data_or_privacy_impact
  - deliverables
  - timeline_constraints
  - budget_or_funding_model
  - required_approvals
  - dependencies
  - success_criteria
  - change_request_policy
  - reporting_requirements

## 5. ACS Business Runtime Flow

business_runtime_flow:
  1_request_received:
    - Business_records_initial_request

  2_ACS_summary:
    - ACS_creates_plain_language_summary

  3_classification:
    - ACS_classifies_domain_type_risk_and_nuclei

  4_missing_information:
    - ACS_generates_questions_or_required_fields

  5_scope_draft:
    - ACS_drafts_scope_deliverables_and_boundaries

  6_risk_and_governance_map:
    - ACS_identifies_governance_security_treasury_or_tokenomics_touchpoints

  7_human_business_review:
    - Business_owner_validates_scope_and_client_context

  8_governance_escalation_if_required:
    - request_routed_to_governance_for_policy_sensitive_items

  9_delivery_handoff:
    - approved_scope_sent_to_Coder_or_execution_team

  10_change_request_handling:
    - ACS_classifies_new_requests_as_in_scope_or_scope_expansion

  11_acceptance_and_reporting:
    - ACS_helps_prepare_delivery_summary_and_accountability_record_if_needed

## 6. Change Request Handling

change_request_model:
  principle:
    - approved_scope_must_not_expand_silently
    - new_client_or_DAO_requests_must_be_classified
    - material_changes_may_require_new_estimate_or_governance_review

ACS_support:
  - compare_new_request_to_original_scope
  - classify_as_bug_fix_minor_change_scope_expansion_or_new_project
  - identify_timeline_and_resource_impact
  - identify_governance_or_policy_impact
  - draft_change_request_summary
  - recommend_accept_reject_or_re-scope

change_request_statuses:
  In_Scope:
    meaning:
      - included_in_original_agreement

  Minor_Adjustment:
    meaning:
      - small_change_without_material_impact

  Scope_Expansion:
    meaning:
      - adds_work_time_or_cost

  Governance_Impact:
    meaning:
      - requires_policy_or_governance_review

  New_Project:
    meaning:
      - should_be_separate_intake

  Rejected:
    meaning:
      - not_accepted

## 7. Business Risk Flags

risk_flags:
  vague_scope:
    - objective_or_deliverable_unclear

  governance_sensitive:
    - affects_DAO_governance_federation_or_policy

  treasury_sensitive:
    - affects_capital_or_financial_reporting

  tokenomics_sensitive:
    - affects_rewards_utility_or_unlocks

  security_sensitive:
    - involves_contracts_API_keys_user_data_or_tool_permissions

  unrealistic_expectation:
    - client_or_DAO_expectation_not_aligned_with_feasible_delivery

  unsupported_claim:
    - request_includes_unverified_partnership_audit_profit_or_legal_claim

  scope_creep:
    - request_expands_beyond_original_approval

## 8. ACS Business Output Types

output_types:
  intake_summary:
    description:
      - structured_summary_for_business_owner

  scoping_brief:
    description:
      - deliverables_boundaries_timeline_dependencies

  governance_escalation_note:
    description:
      - why_governance_review_is_required

  coder_task:
    description:
      - implementation_or_documentation_task_for_agent_coder

  change_request_analysis:
    description:
      - impact_review_of_new_request

  client_update_draft:
    description:
      - transparent_status_or_scope_update_for_client_review

  acceptance_report:
    description:
      - delivery_completion_summary

## 9. Authority Boundaries

Business_can:
  - manage_client_relationship
  - approve_low_risk_scope
  - coordinate_delivery
  - request_ACS_analysis
  - route_governance_sensitive_items

ACS_can:
  - analyze
  - classify
  - draft
  - flag
  - recommend

ACS_cannot:
  - commit_Axodus_to_contractual_terms
  - approve_sensitive_governance_changes
  - promise_delivery_without_human_owner
  - approve_token_or_treasury_behavior
  - bypass_Business_owner

Governance_can:
  - approve_policy_sensitive_or_DAO_sensitive_items
  - define_constraints
  - require_accountability

## 10. Public Documentation Guidance

The public Business Integration page should:

- explain why Business consumes ACS heavily;
- define request types;
- explain intake support;
- explain change request support;
- define risk flags;
- explain authority boundaries;
- link to Business Runtime, Governance, ACS Runtime, and Security docs.
