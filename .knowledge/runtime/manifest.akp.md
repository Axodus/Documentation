# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: RUNTIME
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Runtime
  role: cross_nucleus_operational_lifecycle_and_validation_protocol
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - runtime-core.akp.md
  - runtime-architecture.akp.md
  - request-lifecycle.akp.md
  - status-model.akp.md
  - validation-and-confirmation.akp.md
  - communication-cadence.akp.md
  - milestones-and-deliverables.akp.md
  - change-control.akp.md
  - governance-escalation.akp.md
  - execution-handoff.akp.md
  - delays-and-blockers.akp.md
  - accountability-records.akp.md
  - acs-integration.akp.md
  - runtime-risk-controls.akp.md
  - runtime-page-directives.akp.md

semantic_domains:
  runtime_identity:
    source_file: runtime-core.akp.md
    concepts:
      - operational_protocol
      - request_to_completion
      - cross_nucleus_lifecycle
      - transparency
      - validation
      - accountability

  architecture:
    source_file: runtime-architecture.akp.md
    concepts:
      - intake_layer
      - context_layer
      - classification_layer
      - validation_layer
      - governance_layer
      - execution_layer
      - accountability_layer

  request_lifecycle:
    source_file: request-lifecycle.akp.md
    concepts:
      - request_origin
      - intake
      - classification
      - scoping
      - approval
      - execution
      - validation
      - acceptance
      - archive

  status_model:
    source_file: status-model.akp.md
    concepts:
      - New
      - Intake_Incomplete
      - Under_Review
      - Governance_Required
      - Scoped
      - Approved
      - In_Execution
      - Blocked
      - Delivered
      - Accepted
      - Archived

  validation:
    source_file: validation-and-confirmation.akp.md
    concepts:
      - confirmation_gate
      - validation_gate
      - acceptance_criteria
      - approval_record
      - review_record

  communication:
    source_file: communication-cadence.akp.md
    concepts:
      - update_cadence
      - requester_feedback
      - status_update
      - delay_notice
      - decision_notice
      - acceptance_notice

  milestones:
    source_file: milestones-and-deliverables.akp.md
    concepts:
      - milestone
      - deliverable
      - checkpoint
      - review_gate
      - completion_evidence

  change_control:
    source_file: change-control.akp.md
    concepts:
      - change_request
      - scope_expansion
      - governance_impact
      - cost_time_impact
      - reapproval

  governance_escalation:
    source_file: governance-escalation.akp.md
    concepts:
      - governance_sensitive
      - constitutional_alignment
      - DAO_plugin
      - treasury_impact
      - tokenomics_impact
      - Boardroom_review

  execution_handoff:
    source_file: execution-handoff.akp.md
    concepts:
      - Coder_handoff
      - operator_handoff
      - governance_handoff
      - implementation_brief
      - execution_checklist

  delays_and_blockers:
    source_file: delays-and-blockers.akp.md
    concepts:
      - blocker
      - dependency
      - delay_reason
      - impact_assessment
      - revised_plan

  accountability:
    source_file: accountability-records.akp.md
    concepts:
      - intake_record
      - scope_record
      - review_record
      - decision_record
      - execution_receipt
      - acceptance_record
      - archive

  ACS:
    source_file: acs-integration.akp.md
    concepts:
      - ACS_analysis
      - agent_review
      - risk_classification
      - missing_information
      - human_validation

  risk_controls:
    source_file: runtime-risk-controls.akp.md
    concepts:
      - scope_risk
      - governance_bypass
      - unclear_authority
      - unreviewed_execution
      - accountability_gap

public_documentation_targets:
  overview:
    target: docs/runtime/overview.md
    source_files:
      - runtime-core.akp.md
      - runtime-architecture.akp.md

  architecture:
    target: docs/runtime/architecture.md
    source_files:
      - runtime-architecture.akp.md

  request_lifecycle:
    target: docs/runtime/request-lifecycle.md
    source_files:
      - request-lifecycle.akp.md
      - status-model.akp.md

  status_model:
    target: docs/runtime/status-model.md
    source_files:
      - status-model.akp.md

  validation_and_confirmation:
    target: docs/runtime/validation-and-confirmation.md
    source_files:
      - validation-and-confirmation.akp.md

  communication_cadence:
    target: docs/runtime/communication-cadence.md
    source_files:
      - communication-cadence.akp.md
      - delays-and-blockers.akp.md

  milestones:
    target: docs/runtime/milestones.md
    source_files:
      - milestones-and-deliverables.akp.md

  change_control:
    target: docs/runtime/change-control.md
    source_files:
      - change-control.akp.md

  governance_escalation:
    target: docs/runtime/governance-escalation.md
    source_files:
      - governance-escalation.akp.md

  execution_handoff:
    target: docs/runtime/execution-handoff.md
    source_files:
      - execution-handoff.akp.md

  accountability_records:
    target: docs/runtime/accountability-records.md
    source_files:
      - accountability-records.akp.md

  risk_controls:
    target: docs/runtime/risk-controls.md
    source_files:
      - runtime-risk-controls.akp.md

global_invariants:
  - Runtime_is_cross_nucleus
  - intake_is_not_approval
  - ACS_analysis_is_not_final_authority
  - scope_precedes_execution
  - governance_sensitive_requests_escalate
  - changes_are_logged
  - delays_are_explained
  - acceptance_is_recorded
  - execution_receipts_required_for_material_actions
  - all_public_docs_must_be_English
