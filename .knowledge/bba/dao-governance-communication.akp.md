# AXODUS KNOWLEDGE PACK
# DOMAIN: BBA AGENCY
# TYPE: DAO AND GOVERNANCE COMMUNICATION MODEL

[BBA_DAO_GOVERNANCE_COMMUNICATION]

## 1. Governance Communication Thesis

DAO and governance communication must make decisions understandable, traceable, and legitimate.

BBA can help governance by translating proposals, execution records, roadmap updates, and DAO decisions into clear community-facing language.

BBA must not manipulate votes or obscure risks.

## 2. Governance Communication Types

communication_types:
  proposal_explainer:
    purpose:
      - explain_what_a_proposal_does_why_it_matters_and_risks

  voting_guide:
    purpose:
      - explain_how_to_participate_without_telling_users_how_to_vote_unless_official_endorsement_approved

  governance_update:
    purpose:
      - summarize_decisions_status_and_next_steps

  execution_receipt_summary:
    purpose:
      - explain_what_was_executed_after_approval

  DAO_onboarding_content:
    purpose:
      - help_users_understand_DAO_structure_roles_and_process

  plugin_launch_communication:
    purpose:
      - explain_new_governance_plugin_or_workflow

  accountability_update:
    purpose:
      - publish_transparent_status_financial_or_roadmap_updates

## 3. Governance Content Requirements

requirements:
  - proposal_context
  - decision_required
  - affected_nuclei
  - risk_notes
  - governance_layer
  - voting_or_review_process
  - execution_plan_if_approved
  - accountability_record_link_if_available
  - neutral_language_unless_material_is_official_recommendation
  - no_hidden_conflicts

## 4. Sensitive Governance Claims

sensitive_claims:
  - proposal_approved
  - DAO_officially_adopted_tool
  - governance_plugin_active
  - treasury_action_authorized
  - federation_status_confirmed
  - community_supports
  - Boardroom_approved
  - Executive_DAO_decided

rule:
  - Governance claims require source records.

## 5. Anti-Patterns

anti_patterns:
  vote_manipulation:
    problem:
      - campaign_pressures_users_without_explaining_context

  opaque_proposal:
    problem:
      - users_cannot_understand_what_they_vote_on

  fake_consensus:
    problem:
      - material_claims_community_support_without_evidence

  missing_risk:
    problem:
      - proposal_communication_hides_downside_or_tradeoffs

## 6. Public Documentation Guidance

The public DAO and Governance Communication page should:

- define governance communication types;
- explain content requirements;
- list sensitive claims;
- explain anti-patterns;
- link to Governance, Runtime, Claim Review, and Accountability.
