# AXODUS KNOWLEDGE PACK
# DOMAIN: RUNTIME
# TYPE: COMMUNICATION CADENCE AND FEEDBACK MODEL

[AXODUS_RUNTIME_COMMUNICATION]

## 1. Communication Thesis

Runtime requires predictable communication.

Requesters, DAOs, clients, operators, agents, and governance participants must understand what is happening, what changed, what is delayed, what needs review, and what is complete.

Communication is not only public relations. It is operational transparency.

## 2. Communication Types

communication_types:
  intake_acknowledgement:
    purpose:
      - confirm_request_received
    includes:
      - request_summary
      - next_step
      - missing_information_if_any

  clarification_request:
    purpose:
      - ask_for_required_information
    includes:
      - specific_questions
      - why_information_is_needed

  status_update:
    purpose:
      - report_current_state
    includes:
      - current_status
      - completed_work
      - blockers
      - next_action

  review_request:
    purpose:
      - request_validation_or_approval
    includes:
      - item_to_review
      - decision_needed
      - deadline_or_priority_if_any

  decision_notice:
    purpose:
      - communicate_approval_rejection_deferral_or_conditions
    includes:
      - decision
      - reason
      - conditions
      - next_step

  delay_notice:
    purpose:
      - explain_delay_transparently
    includes:
      - delay_reason
      - impact
      - revised_next_action
      - whether_scope_or_governance_changes

  change_request_notice:
    purpose:
      - communicate_new_or_changed_scope_review
    includes:
      - requested_change
      - classification
      - impact
      - decision_needed

  delivery_notice:
    purpose:
      - submit_deliverables_for_review
    includes:
      - deliverables
      - acceptance_criteria
      - known_limitations

  acceptance_notice:
    purpose:
      - confirm_delivery_accepted_or_revision_needed
    includes:
      - acceptance_status
      - unresolved_items
      - next_step

  closure_notice:
    purpose:
      - confirm_runtime_item_archived
    includes:
      - final_status
      - links
      - lessons_or_followups

## 3. Communication Cadence Model

cadence_model:
  low_risk_short_task:
    update_rule:
      - update_at_completion_or_when_blocked

  standard_delivery:
    update_rule:
      - update_at_each_milestone
      - update_when_status_changes
      - update_when_blocked_or_delayed

  high_risk_or_governance_sensitive:
    update_rule:
      - update_at_intake_classification_review_decision_execution_and_receipt

  client_or_DAO_request:
    update_rule:
      - acknowledge_intake
      - confirm_scope
      - update_at_milestones
      - notify_change_requests
      - confirm_delivery_and_acceptance

  ACS_assisted_task:
    update_rule:
      - state_ACS_output_status
      - request_human_review_for_sensitive_outputs
      - report_when_output_is_validated

## 4. Status Update Format

status_update_format:
  fields:
    - runtime_id_or_reference
    - current_status
    - summary
    - completed_since_last_update
    - blockers_or_risks
    - required_decision_or_action
    - next_step
    - owner
    - expected_checkpoint_if_defined

## 5. Delay Notice Format

delay_notice_format:
  fields:
    - runtime_id_or_reference
    - affected_scope_or_milestone
    - delay_reason
    - impact_on_timeline_scope_or_cost
    - blocker_owner
    - mitigation_or_replan
    - next_checkpoint
    - whether_governance_or_change_request_required

## 6. Communication Principles

principles:
  be_clear:
    - avoid_vague_updates_like_working_on_it_without_context

  be_truthful:
    - do_not_hide_blockers_or_uncertainty

  be_proportional:
    - low_risk_tasks_do_not_need_excessive_reporting
    - high_risk_tasks_need_stronger_visibility

  be_actionable:
    - every_update_should_identify_next_step_or_decision_needed

  avoid_overpromising:
    - do_not_set_fixed_dates_without basis
    - do_not_claim_completion_before_validation

  preserve_records:
    - material_updates_should_be_linked_to_runtime_record

## 7. Communication Channels

possible_channels:
  internal_runtime_record:
    use:
      - source_of_truth_for_status

  client_or_DAO_update:
    use:
      - external_or_requester_facing_status

  governance_forum_or_proposal:
    use:
      - governance_sensitive_updates

  documentation_changelog:
    use:
      - public_docs_changes

  accountability_report:
    use:
      - material_decisions_or_financial_governance_actions

  GitHub_issue_or_PR:
    use:
      - technical_delivery_tracking

## 8. Communication Anti-Patterns

anti_patterns:
  silent_blocker:
    problem:
      - work_stalls_without_requester_or_owner_visibility

  fake_progress:
    problem:
      - update_sounds_positive_but_does_not_reflect_status

  update_without_next_action:
    problem:
      - no_one_knows_what_to_do

  overpromised_deadline:
    problem:
      - creates_trust_damage_when_uncertain

  private_status_only:
    problem:
      - agents_or_future_operators_cannot_find_context

  public_claim_before_validation:
    problem:
      - inaccurate_information_reaches_users_or_community

## 9. Public Documentation Guidance

The public Communication Cadence page should:

- define communication types;
- explain update cadence by risk level;
- provide status update and delay notice formats;
- explain communication principles;
- link to Status Model, Delays and Blockers, Change Control, and Accountability.
