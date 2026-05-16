# AXODUS KNOWLEDGE PACK
# DOMAIN: BUSINESS
# TYPE: BUSINESS RUNTIME MODEL

[AXODUS_BUSINESS_RUNTIME]

## 1. Runtime Thesis

The Business runtime gives every request a beginning, middle, and end.

Without a runtime, requests become informal promises, scope creeps silently, clients become confused, DAOs bypass governance, and delivery becomes impossible to audit.

The Business runtime must define:

- intake;
- classification;
- ACS analysis;
- human review;
- governance requirement check;
- scope definition;
- cost/resource estimate;
- approval;
- execution;
- milestone validation;
- change request handling;
- delivery;
- acceptance;
- reporting;
- archive.

## 2. Runtime Stages

runtime_stages:
  1_intake:
    purpose:
      - capture_request
      - identify_requester
      - collect_initial_context
    outputs:
      - raw_request
      - requester_profile
      - intake_record

  2_classification:
    purpose:
      - assign_request_type_domain_risk_and_owner
    outputs:
      - request_type
      - responsible_nucleus
      - risk_level
      - governance_requirement

  3_ACS_assisted_analysis:
    purpose:
      - summarize_request
      - detect_missing_information
      - identify_risks
      - suggest_questions_and_scope
    outputs:
      - ACS_analysis
      - risk_flags
      - missing_information
      - initial_handoff_notes

  4_human_business_review:
    purpose:
      - validate_ACS_interpretation
      - validate_business_context
      - determine_if_request_is_viable
    outputs:
      - review_decision
      - clarification_needed
      - ready_for_scope_or_rejected

  5_governance_requirement_check:
    purpose:
      - determine_if_formal_governance_review_is_required
    triggers:
      - DAO_plugin
      - treasury_impact
      - tokenomics_change
      - product_access_policy
      - constitutional_alignment
      - high_risk_public_claim
    outputs:
      - governance_route
      - proposal_required
      - governance_review_notes

  6_scope_definition:
    purpose:
      - define_deliverables_boundaries_dependencies_and_acceptance
    outputs:
      - scope_document
      - milestones
      - out_of_scope_items
      - assumptions
      - acceptance_criteria

  7_estimate_and_resource_planning:
    purpose:
      - estimate_effort_timeline_cost_and_owners
    outputs:
      - estimate
      - resource_plan
      - funding_or_budget_notes
      - constraints

  8_approval:
    purpose:
      - confirm_requester_and_internal_approval
    outputs:
      - approved_scope
      - approval_record
      - execution_authorization

  9_execution:
    purpose:
      - perform_delivery_work
    outputs:
      - tasks
      - PRs
      - artifacts
      - documents
      - configurations
      - campaigns
      - reports

  10_milestone_validation:
    purpose:
      - verify_progress_against_scope
    outputs:
      - milestone_status
      - review_notes
      - blockers

  11_change_request_handling:
    purpose:
      - classify_and_manage_new_or_changed_demands
    outputs:
      - change_request_record
      - impact_assessment
      - approval_or_rejection

  12_delivery:
    purpose:
      - submit_completed_deliverables_for review
    outputs:
      - delivery_package
      - release_notes_if_applicable
      - documentation_if_applicable

  13_acceptance:
    purpose:
      - requester_or_owner_accepts_or_rejects_delivery
    outputs:
      - acceptance_record
      - unresolved_items
      - support_or_followup_plan

  14_reporting:
    purpose:
      - produce_status_accountability_or_governance_reports_if required
    outputs:
      - delivery_report
      - governance_record
      - public_or_internal_update

  15_archive:
    purpose:
      - preserve_final_record
    outputs:
      - archived_request
      - lessons_learned
      - related_links

## 3. Runtime Status Model

runtime_statuses:
  New:
    meaning:
      - request_created

  Intake_Incomplete:
    meaning:
      - missing_required_fields

  Classified:
    meaning:
      - request_type_risk_owner_defined

  Under_ACS_Analysis:
    meaning:
      - ACS_review_active

  Under_Business_Review:
    meaning:
      - human_business_owner_reviewing

  Governance_Review_Required:
    meaning:
      - formal_governance_touchpoint_needed

  Ready_For_Scoping:
    meaning:
      - enough_context_to_define_scope

  Scoped:
    meaning:
      - scope_document_created

  Estimate_Pending:
    meaning:
      - effort_cost_or_resource_estimate_needed

  Pending_Approval:
    meaning:
      - awaiting_client_DAO_internal_or_governance_approval

  Approved:
    meaning:
      - execution_authorized

  In_Delivery:
    meaning:
      - work_in_progress

  Blocked:
    meaning:
      - missing_dependency_or_decision

  Change_Request_Open:
    meaning:
      - scope_change_under_review

  Delivered:
    meaning:
      - deliverables_submitted

  Accepted:
    meaning:
      - delivery_accepted

  Rejected:
    meaning:
      - request_or_delivery_rejected

  Archived:
    meaning:
      - final_record_preserved

## 4. Runtime Decision Gates

decision_gates:
  intake_gate:
    question:
      - is_there_enough_information_to_classify?

  classification_gate:
    question:
      - what_domain_risk_and_owner_apply?

  governance_gate:
    question:
      - does_this_need_governance_review?

  scope_gate:
    question:
      - are_deliverables_boundaries_and_acceptance_defined?

  approval_gate:
    question:
      - has_the_correct_authority_approved_execution?

  delivery_gate:
    question:
      - do_deliverables_match_scope?

  acceptance_gate:
    question:
      - has_requester_or_owner_accepted_completion?

  archive_gate:
    question:
      - are_records_links_and_reports_preserved?

## 5. Governance Escalation Triggers

governance_escalation_triggers:
  - custom_DAO_governance_plugin
  - DAO_federation_status_or_product_access
  - treasury_sensitive_request
  - token_reward_or_unlock_policy
  - marketplace_fee_policy_change
  - Academy_reward_policy_change
  - Trading_strategy_access_policy
  - ACS_permission_expansion
  - public_claim_about_Axodus_governance_or_tokenomics
  - constitutional_alignment_question

## 6. ACS Runtime Support

ACS_support_by_stage:
  intake:
    - summarize_request
    - extract_fields
    - detect_missing_information

  classification:
    - classify_request_type
    - identify_risk
    - identify_responsible_nucleus

  scoping:
    - draft_deliverables
    - identify_dependencies
    - draft_acceptance_criteria

  governance_check:
    - suggest_governance_route
    - draft_governance_summary
    - suggest_reason_codes

  delivery:
    - generate_Coder_task
    - draft_docs
    - support_checklists

  change_request:
    - compare_new_request_to_scope
    - classify_impact
    - draft_change_summary

  reporting:
    - draft_delivery_report
    - draft_accountability_record
    - summarize_lessons_learned

## 7. Runtime Anti-Patterns

anti_patterns:
  intake_to_execution_skip:
    problem:
      - request_goes_directly_to_work_without_scope

  governance_gate_ignored:
    problem:
      - sensitive_request_bypasses_required_review

  ACS_output_as_commitment:
    problem:
      - AI_draft_treated_as_approved_client_promise

  estimate_without_scope:
    problem:
      - impossible_to_price_or_schedule_correctly

  delivery_without_acceptance:
    problem:
      - no_clear_completion

  change_request_without_record:
    problem:
      - scope_expansion_invisible

  archive_missing:
    problem:
      - future_agents_lack_context

## 8. Public Documentation Guidance

The public Business Runtime page should:

- explain the full lifecycle;
- describe each stage and output;
- explain decision gates;
- explain governance escalation triggers;
- explain ACS support;
- explain change request handling;
- make clear that runtime protects both Axodus and requesters.
