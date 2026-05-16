# AXODUS KNOWLEDGE PACK
# DOMAIN: RUNTIME
# TYPE: DELAYS AND BLOCKERS MODEL

[AXODUS_DELAYS_BLOCKERS]

## 1. Delay and Blocker Thesis

Delays and blockers are not failures by themselves.

They become failures when they are hidden, undocumented, or unmanaged.

Runtime must define how blockers are identified, assigned, communicated, escalated, and resolved.

## 2. Definitions

blocker:
  definition:
    - dependency_or_condition_preventing_progress

delay:
  definition:
    - progress_slower_than_expected_or_checkpoint_changed

risk:
  definition:
    - potential_problem_that_may_become_blocker_or_delay

dependency:
  definition:
    - required_input_decision_resource_review_or_system_needed_to_continue

## 3. Blocker Types

blocker_types:
  missing_information:
    examples:
      - requester_did_not_provide_required_context
      - DAO_authority_unclear

  pending_review:
    examples:
      - human_review_not_completed
      - governance_review_pending
      - security_review_pending

  technical_dependency:
    examples:
      - API_not_ready
      - contract_not_deployed
      - repository_access_missing
      - environment_not_configured

  governance_dependency:
    examples:
      - proposal_not_approved
      - federation_status_unknown
      - policy_not_defined

  security_dependency:
    examples:
      - audit_needed
      - permission_model_unclear
      - secrets_handling_unresolved

  treasury_dependency:
    examples:
      - funding_not_approved
      - exposure_review_pending
      - reporting_requirement_unresolved

  scope_dependency:
    examples:
      - acceptance_criteria_missing
      - change_request_open
      - conflicting_requirements

  resource_dependency:
    examples:
      - owner_unavailable
      - required_specialist_missing
      - budget_not_confirmed

  external_dependency:
    examples:
      - partner_response_pending
      - third_party_API_issue
      - exchange_or_chain_issue

## 4. Blocker Record Fields

blocker_record_fields:
  - blocker_id
  - runtime_id
  - blocker_type
  - description
  - owner
  - affected_milestone
  - severity
  - created_at
  - next_action
  - escalation_required
  - expected_resolution_condition
  - status
  - notes

## 5. Delay Notice Requirements

delay_notice_requirements:
  - state_what_is_delayed
  - explain_reason
  - identify_impact
  - identify_owner
  - define_next_action
  - state_if_scope_change_or_governance_review_required
  - avoid_false_certainty
  - update_status_record

## 6. Delay Severity

delay_severity:
  minor:
    meaning:
      - small_delay_no_scope_or_governance_impact

  moderate:
    meaning:
      - affects_milestone_or_requester_expectation

  major:
    meaning:
      - affects_delivery_sequence_resources_or_external_commitment

  critical:
    meaning:
      - affects_governance_treasury_security_or_user_risk

## 7. Blocker Resolution Flow

resolution_flow:
  - blocker_identified
  - blocker_record_created
  - owner_assigned
  - impact_assessed
  - requester_or_stakeholder_notified_if_needed
  - escalation_trigger_checked
  - resolution_action_defined
  - status_updated
  - blocker_closed_when_condition_met
  - timeline_or_scope_updated_if_needed
  - accountability_record_updated_if_material

## 8. Escalation Triggers

escalation_triggers:
  - blocker_affects_governance_sensitive_item
  - blocker_affects_security_review
  - blocker_affects_treasury_or_tokenomics
  - blocker_creates_client_or_DAO_commitment_risk
  - blocker_requires_scope_change
  - blocker_exceeds_runtime_policy_threshold
  - blocker_exposes_public_claim_or_reputation_risk

## 9. Blocker Statuses

blocker_statuses:
  Open:
    meaning:
      - blocker_active

  In_Resolution:
    meaning:
      - owner_actively_resolving

  Waiting_On_External:
    meaning:
      - external_actor_or_system_needed

  Escalated:
    meaning:
      - higher_review_or_authority_required

  Resolved:
    meaning:
      - blocker_condition_cleared

  Deferred:
    meaning:
      - blocker_moved_to_future_phase

  Superseded:
    meaning:
      - blocker_no_longer_relevant_due_to_scope_change

## 10. Anti-Patterns

anti_patterns:
  hidden_blocker:
    problem:
      - work_appears_active_but_cannot_progress

  blocker_without_owner:
    problem:
      - no_one_responsible_for_resolution

  delay_without_impact:
    problem:
      - stakeholders_cannot_understand_consequence

  false_deadline:
    problem:
      - revised_plan_based_on_guess_not_dependency_resolution

  repeated_delay_without_replan:
    problem:
      - runtime_needs_scope_or_governance_review

## 11. Public Documentation Guidance

The public Delays and Blockers page should:

- define delays and blockers;
- list blocker types;
- explain blocker records;
- provide delay notice format;
- explain severity and resolution flow;
- link to Communication Cadence, Change Control, Status Model, and Accountability.
