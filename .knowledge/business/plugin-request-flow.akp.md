# AXODUS KNOWLEDGE PACK
# DOMAIN: BUSINESS
# TYPE: BUSINESS PLUGIN REQUEST FLOW

[AXODUS_BUSINESS_PLUGIN_REQUEST_FLOW]

## 1. Plugin Request Thesis

Custom governance plugins are one of the most important DAO service request types.

A DAO may require a specific voting model, eligibility rule, execution module, reporting extension, or local governance workflow.

Business receives the request, ACS analyzes it, Governance validates it, technical teams scope it, security reviews it, and only then can it be implemented or activated.

## 2. Plugin Request Types

plugin_request_types:
  voting_plugin:
    examples:
      - quadratic_voting
      - reputation_voting
      - RP_voting
      - token_weighted_variant
      - delegated_voting_extension

  eligibility_plugin:
    examples:
      - token_threshold
      - membership_status
      - credential_or_certificate
      - DAO_role

  execution_plugin:
    examples:
      - treasury_execution
      - contract_call_execution
      - timelock_execution
      - multisig_bridge

  reporting_plugin:
    examples:
      - execution_receipt_generator
      - governance_metrics
      - treasury_snapshot

  federation_plugin:
    examples:
      - DAO_status_registry
      - product_access_checker
      - constitutional_alignment_record

  local_DAO_workflow_plugin:
    examples:
      - DAO_specific_proposal_flow
      - community_specific_voting_rule
      - local_board_review_flow

## 3. Business Intake Fields for Plugin Requests

required_fields:
  - requesting_DAO
  - requester_authority
  - plugin_name_or_description
  - plugin_type
  - governance_problem
  - local_or_global_scope
  - affected_DAO_or_DAOs
  - voting_or_execution_logic
  - eligibility_rules
  - product_access_impact
  - treasury_impact
  - security_impact
  - chain_or_network
  - governance_framework
  - integration_requirements
  - desired_timeline
  - audit_or_review_expectations
  - rollback_or_disable_requirement
  - documentation_requirement

## 4. Plugin Request Flow

flow:
  1_request_received_by_Business:
    - DAO_or_internal_team_submits_plugin_need

  2_intake_validation:
    - Business_confirms_DAO_context_authority_and_basic_requirements

  3_ACS_classification:
    - ACS_identifies_plugin_type_scope_risk_missing_info

  4_governance_sensitivity_check:
    - determine_if_plugin_affects_official_Axodus_flows

  5_constitutional_alignment_review:
    - verify_plugin_does_not_violate_guardrails

  6_governance_approval_path:
    - route_to_required_governance_layer

  7_technical_scope:
    - define_contract_frontend_backend_indexer_or_registry_requirements

  8_security_review_plan:
    - define_threat_model_tests_audit_requirement

  9_implementation_authorization:
    - approve_build_scope_or_reject

  10_development:
    - implement_plugin_and_tests

  11_validation:
    - test_with_DAO_context
    - validate_against_approved_scope

  12_activation_or_deployment:
    - activate_under_defined_scope

  13_registry_and_docs_update:
    - plugin_registry_federation_registry_docs_updated

  14_execution_receipt:
    - material_activation_recorded

## 5. Plugin Scope

scope_types:
  local:
    meaning:
      - only_valid_for_requesting_DAO

  shared:
    meaning:
      - may_be_reused_by_multiple_DAOs

  global:
    meaning:
      - affects_Axodus_core_governance

  experimental:
    meaning:
      - limited_test_or_pilot

  deprecated:
    meaning:
      - no_longer_recommended

scope_rule:
  - Local_need_must_not_become_global_plugin_without_governance_review.

## 6. Plugin Review Criteria

review_criteria:
  functional:
    - solves_defined_governance_problem
    - requirements_clear
    - execution_logic_defined

  constitutional:
    - respects_Axodus_guardrails
    - does_not_bypass_accountability
    - does_not_enable_unrestricted_treasury_access

  security:
    - permission_model_safe
    - upgradeability_clear
    - attack_surface_reviewed
    - tests_defined

  governance:
    - authority_clear
    - voting_or_execution_impact_understood
    - registry_status_defined

  operational:
    - maintainable
    - monitorable
    - rollback_or_disable_path_defined

## 7. Plugin Risk Flags

risk_flags:
  voting_power_manipulation:
    - plugin_changes_vote_weight_or_eligibility

  treasury_execution_risk:
    - plugin_can_trigger_financial_actions

  permission_overreach:
    - plugin_has_broad_admin_or_execution_rights

  unclear_scope:
    - plugin_scope_local_shared_or_global_not_defined

  governance_capture:
    - plugin_benefits_specific_group_unfairly

  audit_gap:
    - high_risk_plugin_without_security_review

  registry_gap:
    - plugin_status_not_recorded

  execution_receipt_gap:
    - activation_not_traceable

## 8. Business Boundaries

Business_can:
  - receive_plugin_request
  - structure_scope
  - coordinate_review
  - prepare_Coder_task
  - communicate_status

Business_cannot:
  - approve_high_risk_plugin_alone
  - bypass_governance
  - bypass_security_review
  - declare_plugin_official_without_authority
  - deploy_plugin_without_approved_scope

## 9. Public Documentation Guidance

The public Plugin Requests page should:

- explain that plugin requests flow through Business;
- explain DAO-specific plugin needs;
- mention examples such as a DAO-specific voting plugin without claiming live deployment;
- explain ACS, governance, technical, and security review;
- define scope types and risk flags;
- link to Governance Plugin Requests and DAO Service Requests.
