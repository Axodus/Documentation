# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: ACS INTEGRATION MODEL

[CRYPTODRAW_ACS_INTEGRATION]

## 1. ACS Integration Thesis

ACS agents can support CryptoDraw through risk review, documentation, draw reports, anomaly summaries, claim language review, governance briefs, and public claim review.

ACS cannot manipulate randomness, approve draws, authorize payouts, bypass compliance, or replace governance.

## 2. Agent Roles

agent_roles:
  Morpheus:
    Lottery_role:
      - narrative_and_governance_alignment
      - public_docs_coherence
      - responsible_participation_language
      - community_update_drafts

  Agent_Smith:
    Lottery_role:
      - adversarial_review
      - fairness_risk_detection
      - randomization_and_claim_overstatement_review
      - compliance_claim_warning
      - abuse_and_fraud_scenario_analysis

  Trinity:
    Lottery_role:
      - treasury_prize_pool_context
      - fee_and_payout_reporting_support
      - probability_or_metrics_summary_if needed
      - operational_report_support

  Coder:
    Lottery_role:
      - implement_docs_pages
      - structure_markdown
      - update_navigation
      - implement_or_review_frontend_docs_scaffolding

## 3. ACS Workflow

workflow:
  - lottery_request_or_draw_context_received
  - context_loaded_from_Lottery_Treasury_Governance_Tokenomics_Security_docs
  - Morpheus_reviews_narrative_and_governance_alignment
  - Agent_Smith_reviews_claims_fairness_abuse_and_compliance_risk
  - Trinity_reviews_prize_treasury_or_reporting_context_if relevant
  - human_or_domain_reviewer_validates
  - governance_security_compliance_or_treasury_review_if required
  - output_used_for_docs_reports_or_handoff
  - accountability_record_created

## 4. Output Types

output_types:
  draw_summary:
    fields:
      - draw_id
      - status
      - tickets
      - randomness
      - result
      - prizes
      - claims

  risk_review:
    fields:
      - risk_categories
      - severity
      - controls
      - escalation

  claim_review_note:
    fields:
      - claim
      - evidence_needed
      - safer_language
      - approval_required

  governance_brief:
    fields:
      - decision_needed
      - affected_parameters
      - treasury_impact
      - compliance_risk
      - options

  incident_summary:
    fields:
      - incident
      - impact
      - response
      - follow_up

## 5. Boundaries

ACS_can:
  - analyze
  - summarize
  - draft_reports
  - flag_risks
  - suggest_safer_language
  - prepare_governance_handoffs

ACS_cannot:
  - approve_public_lottery_launch
  - manipulate_or_select_randomness
  - authorize_prize_payouts
  - override_governance
  - bypass_legal_or_compliance_review
  - claim_winnings_are_guaranteed
  - publish_sensitive_claims_without_review

## 6. Public Documentation Guidance

The public ACS Integration page should:

- define ACS support role;
- map agent roles;
- show workflow and outputs;
- state boundaries clearly.
