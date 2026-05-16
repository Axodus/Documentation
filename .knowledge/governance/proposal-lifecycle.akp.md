# AXODUS KNOWLEDGE PACK
# DOMAIN: GOVERNANCE
# TYPE: PROPOSAL LIFECYCLE MODEL

[AXODUS_PROPOSAL_LIFECYCLE]

## 1. Proposal Lifecycle Thesis

A governance proposal is not only a vote.

A proposal is a structured path from intent to accountable execution.

Axodus proposals must preserve context, classify risk, identify affected nuclei, define execution requirements, route review to the proper governance layer, and generate records after execution.

The proposal lifecycle must make governance decisions understandable before voting and auditable after execution.

## 2. Proposal Types

proposal_types:
  strategic:
    description:
      - affects_ecosystem_direction
      - roadmap_or_nucleus_priority
      - high_level_operational_alignment

  technical:
    description:
      - smart_contract_update
      - frontend_or_backend_change
      - infrastructure_integration
      - registry_update
      - plugin_deployment

  treasury:
    description:
      - capital_allocation
      - treasury_strategy
      - spending_approval
      - risk_exposure_change
      - reporting_policy

  product:
    description:
      - new_product_nucleus
      - product_access_policy
      - marketplace_rule
      - academy_reward_policy
      - trading_strategy_access

  federation:
    description:
      - DAO_admission
      - DAO_suspension
      - federation_registry_update
      - local_DAO_product_access

  plugin:
    description:
      - new_governance_plugin
      - custom_voting_plugin
      - DAO_specific_extension
      - plugin_parameter_change

  accountability:
    description:
      - reporting_requirement
      - release_note_policy
      - treasury_report_publication
      - governance_record_update

  emergency:
    description:
      - exploit_response
      - treasury_protection
      - contract_pause
      - urgent_security_action

## 3. Proposal Metadata

required_metadata:
  - title
  - summary
  - author_or_sponsor
  - responsible_nucleus
  - proposal_type
  - current_status
  - requested_action
  - affected_systems
  - governance_layer_required
  - risk_level
  - execution_requirements
  - treasury_impact
  - security_impact
  - product_impact
  - tokenomics_impact
  - ACS_analysis_status
  - review_requirements
  - voting_requirements_if_known
  - execution_plan
  - rollback_or_mitigation_plan
  - accountability_output

recommended_metadata:
  - reason_codes
  - dependency_list
  - milestone_links
  - implementation_PR_links
  - contract_address_if_known
  - chain_id_if_known
  - frontend_routes_if_relevant
  - related_DAO_or_federation_record
  - public_discussion_link
  - decision_deadline_if_any

## 4. Lifecycle Stages

proposal_lifecycle:
  1_idea:
    description:
      - initial_intent_or_problem_identified
    outputs:
      - rough_context
      - initial_owner
      - problem_statement

  2_intake:
    description:
      - proposal_or_request_formalized
    outputs:
      - structured_metadata
      - responsible_nucleus
      - affected_parties

  3_classification:
    description:
      - proposal_type_and_risk_level_identified
    outputs:
      - type
      - risk_level
      - required_governance_layer
      - required_reviews

  4_context_enrichment:
    description:
      - missing_information_collected
    outputs:
      - technical_context
      - financial_context
      - governance_context
      - dependencies

  5_ACS_analysis:
    description:
      - AI_agents_or_ACS_generate_advisory_analysis
    outputs:
      - summary
      - risk_flags
      - missing_data
      - suggested_questions
      - contradiction_detection

  6_human_review:
    description:
      - responsible_operators_review_context
    outputs:
      - corrections
      - readiness_decision
      - request_for_changes

  7_governance_routing:
    description:
      - proposal_sent_to_correct_governance_layer
    outputs:
      - Executive_DAO_review
      - Boardroom_review
      - Community_DAO_vote
      - or_combined_route

  8_public_discussion:
    description:
      - proposal_context_shared_for_feedback_when_required
    outputs:
      - comments
      - objections
      - improvements
      - risk_disclosures

  9_vote_or_approval:
    description:
      - formal_decision_taken
    outputs:
      - approval
      - rejection
      - conditional_approval
      - deferred_review

  10_execution_preparation:
    description:
      - execution_plan_validated
    outputs:
      - transaction_payload
      - code_changes
      - deployment_plan
      - responsible_executor

  11_execution:
    description:
      - approved_action_performed
    outputs:
      - transaction_hashes
      - merged_PRs
      - deployed_artifacts
      - registry_updates
      - published_updates

  12_receipt:
    description:
      - execution_receipt_created
    outputs:
      - execution_summary
      - on_chain_links
      - off_chain_links
      - reason_codes

  13_accountability:
    description:
      - material_decision_reported_publicly
    outputs:
      - governance_record
      - release_note
      - treasury_update
      - roadmap_update

  14_archive:
    description:
      - proposal_preserved_for_future_reference
    outputs:
      - final_status
      - lessons_learned
      - superseded_links_if_any

## 5. Risk-Based Review Requirements

risk_levels:
  low:
    examples:
      - documentation_update
      - non_sensitive_UI_copy_change
      - minor_process_clarification
    required_review:
      - nucleus_owner_or_documentation_review

  medium:
    examples:
      - service_runtime_change
      - product_policy_change
      - non_treasury_integration
    required_review:
      - nucleus_owner
      - ACS_optional
      - governance_visibility

  high:
    examples:
      - treasury_action
      - smart_contract_change
      - custom_governance_plugin
      - token_reward_policy
      - trading_strategy_access_policy
    required_review:
      - ACS_analysis
      - human_review
      - Boardroom_or_equivalent_governance_review
      - public_accountability

  critical:
    examples:
      - exploit_response
      - treasury_emergency
      - constitutional_exception
      - major_contract_migration
    required_review:
      - emergency_flow_if_defined
      - Boardroom_and_Executive_review
      - security_review
      - post_action_public_report

## 6. Proposal Status Model

proposal_statuses:
  Draft:
    meaning:
      - not_ready_for_formal_vote

  Submitted:
    meaning:
      - proposal_entered_intake_or_formal_queue

  Under_Review:
    meaning:
      - being_analyzed_by_humans_ACS_or_governance_layer

  Needs_Revision:
    meaning:
      - incomplete_or_problematic

  Ready_For_Vote:
    meaning:
      - sufficient_context_for_governance_decision

  Voting:
    meaning:
      - formal_vote_active

  Approved:
    meaning:
      - accepted_by_required_governance_process

  Approved_With_Conditions:
    meaning:
      - accepted_but_execution_requires_constraints

  Rejected:
    meaning:
      - not_accepted

  Executed:
    meaning:
      - approved_action_completed

  Failed_Execution:
    meaning:
      - approved_action_could_not_be_completed

  Archived:
    meaning:
      - final_record_preserved

  Superseded:
    meaning:
      - replaced_by_newer_proposal

## 7. Reason Codes

reason_codes:
  INSUFFICIENT_CONTEXT:
    use:
      - proposal_missing_required_metadata

  ACS_REVIEW_REQUIRED:
    use:
      - proposal_needs_agent_analysis_or_classification

  SECURITY_REVIEW_REQUIRED:
    use:
      - contract_plugin_API_or_infrastructure_risk

  TREASURY_REVIEW_REQUIRED:
    use:
      - financial_exposure_or_capital_allocation

  CONSTITUTIONAL_REVIEW_REQUIRED:
    use:
      - action_may_affect_shared_guardrails

  COMMUNITY_VISIBILITY_REQUIRED:
    use:
      - public_legitimacy_or_user_impact_required

  BOARDROOM_REVIEW_REQUIRED:
    use:
      - high_risk_or_supervisory_review_needed

  EXECUTIVE_SPONSORSHIP_REQUIRED:
    use:
      - strategic_or_roadmap_alignment_needed

  EXECUTION_RECEIPT_REQUIRED:
    use:
      - material_action_must_be_traceable_after_execution

  ACCOUNTABILITY_REPORT_REQUIRED:
    use:
      - public_report_or_release_note_required

## 8. Execution Safety

execution_safety_requirements:
  - approved_payload_should_match_voted_intent
  - treasury_transactions_should_be_reviewable
  - contract_calls_should_be_decoded_when_possible
  - high_risk_transactions_should_have_multisig_or_equivalent_controls_if_available
  - execution_should_produce_receipt
  - failed_execution_should_be_documented
  - rollback_plan_should_exist_for_sensitive_changes

## 9. Proposal Anti-Patterns

anti_patterns:
  vague_proposal:
    problem:
      - impossible_to_review_or_execute

  vote_without_context:
    problem:
      - creates_false_legitimacy

  execution_without_receipt:
    problem:
      - breaks_accountability

  treasury_vote_without_risk:
    problem:
      - exposes_ecosystem_to_undisclosed_financial_risk

  plugin_vote_without_security_review:
    problem:
      - may_create_governance_exploit_surface

  AI_generated_proposal_without_human_review:
    problem:
      - shifts_accountability_to_agent_output

  scope_creep_after_approval:
    problem:
      - executed_action_may_differ_from_governance_intent

## 10. Public Documentation Guidance

The public proposal lifecycle page should:

- explain that proposals are structured decision objects;
- show the lifecycle from idea to archive;
- explain risk-based routing;
- explain ACS advisory role;
- explain why execution receipts matter;
- explain how governance protects users, treasury, and ecosystem coherence;
- avoid claiming final software automation unless implemented;
- provide examples of proposal types.

If Mermaid is supported, include a simple lifecycle diagram.
