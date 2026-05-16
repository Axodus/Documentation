# AXODUS KNOWLEDGE PACK
# DOMAIN: RUNTIME
# TYPE: STATUS MODEL

[AXODUS_RUNTIME_STATUS_MODEL]

## 1. Status Model Thesis

Runtime status is the shared language for operational clarity.

Every material request, proposal, task, change, handoff, milestone, delivery, or accountability item should have a status.

Status must communicate:

- where the item is;
- what is blocking it;
- who owns the next action;
- whether review or governance is required;
- whether it is complete, rejected, or archived.

## 2. Core Runtime Statuses

core_statuses:
  New:
    meaning:
      - item_created_but_not_yet_processed
    next_action:
      - perform_intake

  Intake_Incomplete:
    meaning:
      - required_information_missing
    next_action:
      - request_missing_information

  Intake_Complete:
    meaning:
      - basic_context_collected
    next_action:
      - classify

  Classified:
    meaning:
      - domain_type_risk_and_owner_identified
    next_action:
      - analyze_or_scope

  Under_ACS_Analysis:
    meaning:
      - ACS_or_agents_reviewing_context
    next_action:
      - human_validation

  Under_Human_Review:
    meaning:
      - responsible_human_reviewer_validating_output
    next_action:
      - approve_correct_or_escalate

  Governance_Required:
    meaning:
      - formal_or_lightweight_governance_review_needed
    next_action:
      - prepare_governance_context

  Security_Review_Required:
    meaning:
      - security_sensitive_area_requires_review
    next_action:
      - assign_security_reviewer

  Treasury_Review_Required:
    meaning:
      - financial_or_capital_exposure_requires_review
    next_action:
      - assign_treasury_or_risk_reviewer

  Tokenomics_Review_Required:
    meaning:
      - reward_utility_unlock_or_token_policy_requires_review
    next_action:
      - assign_tokenomics_or_governance_review

  Ready_For_Scoping:
    meaning:
      - enough_context_exists_to_define_deliverables
    next_action:
      - create_scope

  Scoped:
    meaning:
      - deliverables_boundaries_dependencies_and_acceptance_defined
    next_action:
      - estimate_or_approve

  Pending_Approval:
    meaning:
      - waiting_for_client_DAO_internal_or_governance_approval
    next_action:
      - obtain_decision

  Approved:
    meaning:
      - correct_authority_approved_scope_or_action
    next_action:
      - execution_handoff

  In_Execution:
    meaning:
      - approved_work_is_being_performed
    next_action:
      - track_milestones

  In_Delivery:
    meaning:
      - delivery_output_being_finalized_or_submitted
    next_action:
      - review_deliverables

  Blocked:
    meaning:
      - cannot_progress_due_to_missing_dependency_information_or_authority
    next_action:
      - resolve_blocker_or_replan

  Delayed:
    meaning:
      - progress_slower_than_expected_or_phase_target_changed
    next_action:
      - issue_delay_notice_and_revised_plan

  Change_Request_Open:
    meaning:
      - requested_change_under_review
    next_action:
      - classify_change_and_decide

  Delivered:
    meaning:
      - output_submitted_for_acceptance
    next_action:
      - validate_against_acceptance_criteria

  Accepted:
    meaning:
      - delivery_accepted_by_authorized_reviewer_or_requester
    next_action:
      - close_or_archive

  Rejected:
    meaning:
      - request_scope_change_or_delivery_not_accepted
    next_action:
      - record_reason_and_exit_or_revise

  Cancelled:
    meaning:
      - item_stopped_by_requester_owner_or_governance
    next_action:
      - archive_with_reason

  Superseded:
    meaning:
      - replaced_by_newer_item_policy_or_decision
    next_action:
      - link_successor_and_archive

  Archived:
    meaning:
      - final_record_preserved
    next_action:
      - no_active_action

## 3. Status Fields

status_record_fields:
  - status
  - status_reason
  - owner
  - next_action
  - blocker_if_any
  - required_review
  - updated_at
  - updated_by
  - expected_next_checkpoint_if_defined
  - related_records

## 4. Status Transition Rules

transition_rules:
  New_to_Intake_Complete:
    requires:
      - minimum_context_collected

  Intake_Complete_to_Classified:
    requires:
      - domain_request_type_risk_and_owner_identified

  Classified_to_Under_ACS_Analysis:
    requires:
      - ACS_analysis_needed_or_requested

  Classified_to_Ready_For_Scoping:
    requires:
      - low_risk_and_sufficient_context

  Any_to_Governance_Required:
    trigger:
      - governance_sensitive_condition_detected

  Scoped_to_Pending_Approval:
    requires:
      - scope_document_complete

  Pending_Approval_to_Approved:
    requires:
      - approval_record

  Approved_to_In_Execution:
    requires:
      - execution_handoff

  In_Execution_to_Delivered:
    requires:
      - deliverables_submitted

  Delivered_to_Accepted:
    requires:
      - acceptance_validation

  Any_to_Blocked:
    trigger:
      - missing_dependency_or_authority

  Any_to_Change_Request_Open:
    trigger:
      - post_scope_change_requested

  Any_to_Archived:
    requires:
      - exit_condition_and_record

## 5. Status Anti-Patterns

anti_patterns:
  status_without_next_action:
    problem:
      - item_becomes_stuck

  blocked_without_reason:
    problem:
      - no_path_to_resolution

  approved_without_approver:
    problem:
      - authority_unclear

  delivered_without_scope_reference:
    problem:
      - cannot_validate_completion

  archived_without_record:
    problem:
      - future_context_lost

  delayed_without_notice:
    problem:
      - transparency_failure

## 6. Public Documentation Guidance

The public Status Model page should:

- list statuses and meanings;
- show required status fields;
- explain transition rules;
- explain anti-patterns;
- clarify that status labels are operational, not marketing.
