# AXODUS KNOWLEDGE PACK
# DOMAIN: RUNTIME
# TYPE: ACCOUNTABILITY RECORDS MODEL

[AXODUS_RUNTIME_ACCOUNTABILITY_RECORDS]

## 1. Accountability Thesis

Runtime must end with records, not memory fragments.

Accountability records preserve what happened, who approved it, what changed, what was delivered, what was executed, what remains unresolved, and where evidence can be found.

For material decisions, the accountability record is the bridge between operations and trust.

## 2. Accountability Record Types

record_types:
  intake_record:
    purpose:
      - preserve_initial_request_context

  classification_record:
    purpose:
      - preserve_domain_type_risk_and_owner_decision

  ACS_analysis_record:
    purpose:
      - preserve_agent_analysis_assumptions_and_risk_flags

  review_record:
    purpose:
      - preserve_human_domain_security_treasury_or_governance_review

  scope_record:
    purpose:
      - preserve_deliverables_boundaries_and_acceptance

  approval_record:
    purpose:
      - preserve_authorized_decision_to_proceed

  change_request_record:
    purpose:
      - preserve_scope_or_requirement_changes

  milestone_record:
    purpose:
      - preserve_progress_checkpoints

  handoff_record:
    purpose:
      - preserve_context_transferred_to_executor

  delivery_record:
    purpose:
      - preserve_completed_outputs

  acceptance_record:
    purpose:
      - preserve_completion_acceptance_or_unresolved_items

  execution_receipt:
    purpose:
      - preserve_material_execution_evidence

  governance_record:
    purpose:
      - preserve_proposal_vote_decision_and_execution_context

  final_archive_record:
    purpose:
      - preserve_final_summary_and_links

## 3. Minimum Accountability Record

minimum_accountability_record:
  fields:
    - runtime_id
    - title
    - type
    - requester
    - responsible_nucleus
    - owner
    - final_status
    - summary
    - key_decisions
    - approvals
    - deliverables
    - evidence_links
    - unresolved_items
    - created_at
    - archived_at

## 4. Materiality Levels

materiality_levels:
  low:
    examples:
      - minor_documentation_update
    records:
      - summary_and_archive

  medium:
    examples:
      - service_delivery
      - non_sensitive_feature
    records:
      - intake_scope_delivery_acceptance

  high:
    examples:
      - DAO_service
      - plugin_request
      - reward_policy
      - trading_access_policy
    records:
      - intake_classification_ACS_review_governance_or_security_review_scope_delivery_acceptance

  critical:
    examples:
      - treasury_action
      - contract_upgrade
      - governance_execution
      - ACS_sensitive_permission
    records:
      - full_audit_trail_execution_receipt_public_or_governance_accountability_report

## 5. Evidence Types

evidence_types:
  document:
    examples:
      - scope_document
      - proposal
      - report
      - docs_page

  code:
    examples:
      - PR
      - commit
      - release
      - test_result

  on_chain:
    examples:
      - transaction_hash
      - contract_address
      - block_number
      - governance_vote

  off_chain:
    examples:
      - approval_record
      - meeting_summary
      - client_acceptance
      - issue_link

  agent_output:
    examples:
      - ACS_analysis
      - risk_report
      - Coder_handoff

  communication:
    examples:
      - status_update
      - delay_notice
      - decision_notice

## 6. Archive Rules

archive_rules:
  - every_completed_material_runtime_item_should_be_archived
  - rejected_or_cancelled_items_should_record_reason
  - superseded_items_should_link_successor
  - sensitive_records_should_respect_privacy_and_security
  - public_records_should_not_expose_secrets
  - knowledge_packs_should_update_only_after_validation

## 7. Accountability Outputs by Nucleus

outputs_by_nucleus:
  Governance:
    - proposal_record
    - vote_record
    - execution_receipt
    - governance_record

  Business:
    - intake_record
    - scope_record
    - change_request_record
    - delivery_and_acceptance_record

  Academy:
    - reward_policy_record
    - course_review_record
    - tutor_validation_record

  Trading:
    - risk_report
    - strategy_access_record
    - API_security_confirmation

  Treasury:
    - allocation_record
    - exposure_report
    - financial_report

  ACS:
    - agent_output_record
    - tool_call_log
    - human_review_record
    - memory_update_record

  Marketplace:
    - listing_record
    - fee_policy_record
    - dispute_record

## 8. Accountability Anti-Patterns

anti_patterns:
  decision_without_record:
    problem:
      - cannot_audit_why_action_happened

  execution_without_receipt:
    problem:
      - cannot_verify_approved_action

  accepted_without_scope:
    problem:
      - unclear_what_was_completed

  record_without_evidence:
    problem:
      - accountability_claim_not_verifiable

  public_record_with_secrets:
    problem:
      - security_or_privacy_failure

  memory_only_accountability:
    problem:
      - private_memory_replaces_structured_record

## 9. Public Documentation Guidance

The public Accountability Records page should:

- define record types;
- explain materiality levels;
- list evidence types;
- explain archive rules;
- show outputs by nucleus;
- link to Governance Execution Receipts, Business Accountability, ACS Accountability, and Treasury Reporting.
