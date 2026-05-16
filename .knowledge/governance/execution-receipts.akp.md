# AXODUS KNOWLEDGE PACK
# DOMAIN: GOVERNANCE
# TYPE: EXECUTION RECEIPTS AND ACCOUNTABILITY RECORDS

[AXODUS_EXECUTION_RECEIPTS]

## 1. Execution Receipt Thesis

Governance does not end when a vote passes.

A governance decision becomes trustworthy only when the ecosystem can verify what was executed, when it was executed, who executed it, what systems were affected, and whether the execution matched the approved proposal.

Execution receipts are the bridge between governance intention and operational accountability.

## 2. Definition

execution_receipt:
  definition:
    - structured_record_of_completed_governance_execution
    - links_proposal_to_action
    - may_include_on_chain_and_off_chain_evidence
    - supports_auditability_and_public_accountability

receipt_is_not:
  - marketing_update
  - informal_chat_message
  - vague_announcement
  - unverified_claim

## 3. Receipt Purpose

purpose:
  - prove_that_approved_action_was_executed
  - explain_execution_context
  - expose_transaction_or_PR_links
  - document_responsible_actors
  - capture_reason_codes
  - identify_failures_or_partial_execution
  - support_accountability_reports
  - enable_future_audits

## 4. Receipt Types

receipt_types:
  on_chain_execution:
    examples:
      - treasury_transaction
      - contract_call
      - DAO_registry_update
      - plugin_activation
      - parameter_update

  off_chain_execution:
    examples:
      - documentation_update
      - repository_merge
      - deployment_configuration
      - service_activation
      - governance_status_update

  hybrid_execution:
    examples:
      - smart_contract_deployment_plus_frontend_update
      - treasury_action_plus_public_report
      - plugin_deployment_plus_registry_update

  failed_execution:
    examples:
      - transaction_failed
      - deployment_reverted
      - approval_conditions_not_met
      - payload_mismatch_detected

  partial_execution:
    examples:
      - some_steps_completed
      - remaining_steps_pending
      - conditional_follow_up_required

## 5. Receipt Metadata

required_fields:
  - receipt_id
  - linked_proposal_id
  - proposal_title
  - execution_status
  - execution_type
  - executed_at
  - responsible_executor
  - governance_layer_authorizing
  - approved_action_summary
  - actual_action_summary
  - affected_nucleus
  - affected_DAO_if_any
  - affected_chain_if_any
  - risk_level
  - reason_codes
  - evidence_links
  - accountability_status

on_chain_fields:
  - chain_id
  - network_name
  - transaction_hashes
  - contract_addresses
  - function_signatures_if_available
  - decoded_calldata_if_available
  - block_number
  - execution_result

off_chain_fields:
  - repository
  - PR_or_commit_links
  - deployment_environment
  - service_or_route_changed
  - documentation_links
  - operator_notes

financial_fields:
  - treasury_amount
  - token_or_asset
  - source_wallet
  - destination_wallet
  - exchange_or_protocol_if_any
  - risk_notes
  - reporting_requirement

security_fields:
  - audit_requirement
  - security_review_status
  - known_limitations
  - rollback_plan
  - incident_follow_up_if_any

## 6. Receipt Statuses

receipt_statuses:
  Pending:
    meaning:
      - execution_approved_but_not_completed

  Completed:
    meaning:
      - action_executed_and_recorded

  Completed_With_Notes:
    meaning:
      - action_executed_but_limitations_or_followups_exist

  Partial:
    meaning:
      - only_part_of_approved_scope_completed

  Failed:
    meaning:
      - execution_attempt_failed

  Reverted:
    meaning:
      - execution_completed_then_reversed

  Superseded:
    meaning:
      - newer_receipt_or_action_replaced_record

  Needs_Review:
    meaning:
      - receipt_missing_required_evidence

## 7. Receipt Reason Codes

reason_codes:
  EXECUTION_MATCHES_APPROVAL:
    meaning:
      - actual_action_matches_governance_intent

  EXECUTION_DIFFERS_FROM_APPROVAL:
    meaning:
      - material_difference_requires_review

  TRANSACTION_CONFIRMED:
    meaning:
      - on_chain_action_successfully_confirmed

  TRANSACTION_FAILED:
    meaning:
      - on_chain_action_failed

  OFFCHAIN_ACTION_COMPLETED:
    meaning:
      - repository_deployment_or_documentation_action_completed

  ACCOUNTABILITY_PUBLICATION_REQUIRED:
    meaning:
      - material_action_needs_public_report

  SECURITY_FOLLOWUP_REQUIRED:
    meaning:
      - execution_exposes_or_depends_on_security_review

  TREASURY_REPORT_REQUIRED:
    meaning:
      - financial_action_must_be_reported

  REGISTRY_UPDATE_REQUIRED:
    meaning:
      - federation_or_plugin_state_must_be_updated

  PARTIAL_EXECUTION:
    meaning:
      - some_approved_steps_remain_pending

## 8. Receipt Generation Flow

receipt_flow:
  - proposal_approved
  - execution_payload_prepared
  - final_pre_execution_check
  - action_executed
  - evidence_collected
  - receipt_drafted
  - reviewer_validates_match_between_approval_and_execution
  - receipt_published_or_archived
  - accountability_report_updated_if_required
  - registry_updated_if_relevant

## 9. Governance Records

governance_record:
  definition:
    - broader_record_of_decision_context_and_result
    - may_include_proposal_vote_receipt_discussion_and_report

record_components:
  - proposal_metadata
  - discussion_summary
  - vote_result
  - approval_conditions
  - execution_receipt
  - accountability_report
  - follow_up_items
  - supersession_links

## 10. Accountability Relationship

accountability_connection:
  - receipts_feed_financial_reports
  - receipts_feed_governance_records
  - receipts_feed_release_notes
  - receipts_feed_treasury_reporting
  - receipts_feed_federation_registry
  - receipts_feed_plugin_registry

## 11. Receipt Anti-Patterns

anti_patterns:
  vote_without_execution_record:
    problem:
      - no_traceability_after_decision

  receipt_without_evidence:
    problem:
      - cannot_be_verified

  on_chain_hash_without_context:
    problem:
      - users_cannot_understand_intent

  off_chain_change_without_commit_link:
    problem:
      - cannot_audit_code_or_documentation_change

  treasury_transfer_without_report:
    problem:
      - financial_accountability_failure

  execution_payload_mismatch:
    problem:
      - executed_action_may_not_match_governance_approval

  delayed_receipt:
    problem:
      - accountability_window_lost

## 12. Public Documentation Guidance

The public execution receipts page should:

- explain why governance execution must be recorded;
- define execution receipt fields;
- show examples of on-chain and off-chain evidence;
- explain how receipts support accountability;
- describe receipt statuses;
- avoid implying all receipt automation is live unless verified;
- link receipts to proposal lifecycle, treasury reporting, and governance records.

If a real receipt system is not implemented, mark it as a design requirement or planned model.
