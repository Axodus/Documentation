# AXODUS KNOWLEDGE PACK
# DOMAIN: RUNTIME
# TYPE: MILESTONES AND DELIVERABLES MODEL

[AXODUS_MILESTONES_DELIVERABLES]

## 1. Milestone Thesis

Milestones make Runtime measurable.

A milestone is a checkpoint. A deliverable is an output. Acceptance criteria define whether that output is complete.

Without milestones and deliverables, Runtime cannot distinguish progress from activity.

## 2. Definitions

milestone:
  definition:
    - defined_checkpoint_in_a_runtime_or_delivery_lifecycle
    - may_include_one_or_more_deliverables
    - should_have_owner_status_and_validation_requirement

deliverable:
  definition:
    - concrete_output_expected_from_scope_or_milestone
    - can_be_document_code_report_campaign_configuration_review_or_record

acceptance_criteria:
  definition:
    - conditions_used_to_validate_that_deliverable_meets_scope

checkpoint:
  definition:
    - planned_review_moment_or_status_boundary

## 3. Milestone Types

milestone_types:
  intake_milestone:
    examples:
      - request_context_complete
      - classification_complete

  review_milestone:
    examples:
      - ACS_analysis_complete
      - human_review_complete
      - governance_review_complete
      - security_review_complete

  scope_milestone:
    examples:
      - scope_draft_ready
      - scope_confirmed
      - approval_recorded

  implementation_milestone:
    examples:
      - feature_complete
      - docs_draft_complete
      - contract_test_complete
      - campaign_assets_ready

  validation_milestone:
    examples:
      - deliverables_reviewed
      - tests_passed
      - acceptance_review_started

  execution_milestone:
    examples:
      - deployment_complete
      - proposal_executed
      - plugin_activated

  accountability_milestone:
    examples:
      - execution_receipt_created
      - report_published
      - archive_complete

## 4. Deliverable Types

deliverable_types:
  documentation:
    examples:
      - public_docs_page
      - knowledge_pack
      - README
      - guide
      - changelog

  code:
    examples:
      - frontend_component
      - backend_API
      - smart_contract
      - test_suite
      - script

  governance:
    examples:
      - proposal_draft
      - reason_code_set
      - execution_receipt
      - governance_record

  business:
    examples:
      - scope_document
      - service_proposal
      - change_request_analysis
      - acceptance_record

  academy:
    examples:
      - course_outline
      - assessment
      - reward_policy_draft
      - tutor_review

  trading:
    examples:
      - strategy_spec
      - risk_report
      - API_key_security_checklist
      - performance_summary

  treasury:
    examples:
      - allocation_review
      - exposure_report
      - financial_summary

  BBA:
    examples:
      - campaign_brief
      - positioning_statement
      - content_plan
      - claim_review

  ACS:
    examples:
      - agent_workflow
      - MCP_permission_model
      - analysis_report
      - memory_update

## 5. Milestone Record Fields

milestone_record_fields:
  - milestone_id
  - runtime_id
  - title
  - description
  - milestone_type
  - owner
  - status
  - deliverables
  - acceptance_criteria
  - required_reviews
  - blockers
  - dependencies
  - evidence_links
  - completed_at
  - notes

## 6. Deliverable Record Fields

deliverable_record_fields:
  - deliverable_id
  - milestone_id
  - runtime_id
  - title
  - deliverable_type
  - description
  - file_or_link
  - owner
  - status
  - review_status
  - acceptance_status
  - known_limitations
  - evidence_links

## 7. Milestone Statuses

milestone_statuses:
  Planned:
    meaning:
      - milestone_defined_not_started

  In_Progress:
    meaning:
      - work_underway

  Under_Review:
    meaning:
      - output_submitted_for_validation

  Changes_Requested:
    meaning:
      - reviewer_requested_updates

  Accepted:
    meaning:
      - milestone_validated

  Blocked:
    meaning:
      - dependency_prevents_progress

  Cancelled:
    meaning:
      - milestone_no_longer_required

  Superseded:
    meaning:
      - replaced_by_new_milestone_or_scope

## 8. Quality Gates

quality_gates:
  scope_match:
    question:
      - does_deliverable_match_approved_scope?

  completeness:
    question:
      - are_required_parts_present?

  review:
    question:
      - has_required_reviewer_validated_it?

  risk:
    question:
      - are_risks_or_limitations_documented?

  documentation:
    question:
      - can_someone_use_or_maintain_it?

  accountability:
    question:
      - is_evidence_or_record_preserved?

## 9. Milestone Anti-Patterns

anti_patterns:
  activity_as_milestone:
    problem:
      - "working_on_it" is_not_a_deliverable

  no_acceptance_criteria:
    problem:
      - cannot_validate_completion

  hidden_blockers:
    problem:
      - milestone_status_misleading

  milestone_without_owner:
    problem:
      - no_accountability

  deliverable_without_evidence:
    problem:
      - cannot_verify_output

## 10. Public Documentation Guidance

The public Milestones page should:

- define milestones and deliverables;
- list milestone and deliverable types;
- describe record fields;
- explain statuses and quality gates;
- link to Runtime Lifecycle, Delivery Lifecycle, Validation, and Accountability.
