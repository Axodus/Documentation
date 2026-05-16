# AXODUS KNOWLEDGE PACK
# DOMAIN: BUSINESS
# TYPE: CHANGE REQUEST SYSTEM MODEL

[AXODUS_BUSINESS_CHANGE_REQUEST_SYSTEM]

## 1. Change Request Thesis

Change requests are essential to Business transparency.

Projects evolve. Clients, DAOs, partners, and internal teams may ask for new features, altered requirements, expanded scope, additional integrations, changed timelines, or new deliverables after approval.

These changes must not be silently absorbed.

Every meaningful change must be logged, classified, reviewed, and either accepted, rejected, deferred, or converted into a new scope.

## 2. Definition

change_request:
  definition:
    - formal_record_of_requested_change_after_scope_or_delivery_baseline
    - may_affect_scope_timeline_cost_risk_governance_or_acceptance

change_request_is_not:
  - informal_chat_message_only
  - hidden_extra_work
  - automatic_commitment
  - proof_that_original_scope_was_wrong
  - excuse_to_bypass_governance

## 3. Change Request Triggers

triggers:
  - new_feature_requested
  - deliverable_changed
  - acceptance_criteria_changed
  - new_integration_requested
  - timeline_acceleration_requested
  - budget_changed
  - governance_impact_discovered
  - security_requirement_added
  - client_or_DAO_changes_objective
  - technical_dependency_changes
  - tokenomics_or_reward_rule_added
  - marketplace_payment_rule_changed
  - trading_strategy_access_rule_changed
  - ACS_permission_or_automation_expanded

## 4. Change Request Classification

classification:
  clarification:
    meaning:
      - requester_clarifies_existing_requirement_without_changing_scope

  bug_fix:
    meaning:
      - correction_to_deliverable_that_should_have_met_original_scope

  minor_adjustment:
    meaning:
      - small_change_with_no_material_time_cost_or_risk_impact

  scope_expansion:
    meaning:
      - adds_new_work_or_deliverables

  scope_reduction:
    meaning:
      - removes_work_or_deliverables

  timeline_change:
    meaning:
      - changes_delivery_schedule

  cost_or_resource_change:
    meaning:
      - affects_budget_resources_or_effort

  governance_impact:
    meaning:
      - affects_DAO_policy_plugin_treasury_tokenomics_or_constitutional_alignment

  security_impact:
    meaning:
      - affects_contracts_API_keys_data_permissions_or_infrastructure

  new_project:
    meaning:
      - sufficiently_distinct_to_require_new_intake

  rejected:
    meaning:
      - not_accepted

## 5. Change Request Fields

required_fields:
  - change_request_id
  - original_request_id
  - requester
  - date
  - description
  - reason
  - affected_deliverables
  - requested_priority
  - classification
  - scope_impact
  - timeline_impact
  - cost_or_resource_impact
  - risk_impact
  - governance_impact
  - security_impact
  - ACS_analysis
  - decision
  - approved_by
  - updated_scope_reference
  - notes

## 6. Change Request Flow

flow:
  1_change_requested:
    - requester_describes_change

  2_record_created:
    - change_request_logged

  3_ACS_analysis:
    - compare_change_to_original_scope
    - classify_change
    - identify_impacts
    - detect_governance_or_security_triggers

  4_business_review:
    - business_owner_validates_analysis
    - decides_if_change_can_be_handled

  5_governance_or_security_review_if_needed:
    - sensitive_changes_routed_to_required_review

  6_decision:
    - approve
    - approve_with_adjustment
    - reject
    - defer
    - convert_to_new_project

  7_scope_update:
    - update_scope_milestones_cost_timeline_if_approved

  8_communication:
    - inform_requester_transparently

  9_execution:
    - deliver_approved_change

  10_archive:
    - preserve_change_record

## 7. Impact Assessment

impact_dimensions:
  scope:
    questions:
      - does_this_add_or_remove_deliverables?
      - does_this_change_acceptance_criteria?

  timeline:
    questions:
      - does_this_delay_or_accelerate_delivery?
      - does_this_create_dependency_conflict?

  cost:
    questions:
      - does_this_require_more_resources?
      - does_this_change_budget_or funding?

  risk:
    questions:
      - does_this_introduce_security_financial_governance_or_tokenomics_risk?

  governance:
    questions:
      - does_this_require_proposal_or_review?

  quality:
    questions:
      - does_this_reduce_or_increase_quality_requirements?

  client_expectation:
    questions:
      - has_requester_acknowledged_impact?

## 8. Change Request Decisions

decisions:
  Approved:
    meaning:
      - change_accepted_and_scope_updated

  Approved_With_Conditions:
    meaning:
      - accepted_only_under_constraints

  Rejected:
    meaning:
      - not_accepted

  Deferred:
    meaning:
      - postponed_to_later_phase

  Requires_Governance:
    meaning:
      - cannot_proceed_until_governance_review

  Requires_Security_Review:
    meaning:
      - cannot_proceed_until_security_review

  New_Project_Required:
    meaning:
      - change_too_large_or_distinct_for_current_scope

  Needs_Clarification:
    meaning:
      - insufficient_information

## 9. Governance Triggers in Change Requests

governance_triggers:
  - change_adds_custom_governance_plugin
  - change_affects_DAO_federation_or_product_access
  - change_affects_treasury_or_revenue_distribution
  - change_affects_token_rewards_unlocks_or_utility
  - change_affects_marketplace_fee_policy
  - change_affects_Academy_reward_policy
  - change_affects_trading_access_or_risk_policy
  - change_expands_ACS_authority_or_tool_permissions
  - change_modifies_public_claims_about_Axodus

## 10. Anti-Patterns

anti_patterns:
  verbal_change_only:
    problem:
      - no_record_or_accountability

  silent_scope_absorption:
    problem:
      - team_does_extra_work_without_time_cost_or_risk_visibility

  change_after_delivery:
    problem:
      - requester_redefines_success_after_work_done

  governance_sensitive_change_without_review:
    problem:
      - Business_bypasses_required_governance

  ACS_accepts_change:
    problem:
      - AI_classification_treated_as_approval

  endless_revisions:
    problem:
      - no_boundary_or_acceptance_process

## 11. Public Documentation Guidance

The public Change Requests page should:

- explain why changes must be controlled;
- define classification types;
- show the flow;
- explain impact assessment;
- explain governance/security triggers;
- explain decision statuses;
- make clear that new ideas after approval may require extra time, cost, or governance review.
