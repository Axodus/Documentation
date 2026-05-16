# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: ACS INTEGRATION MODEL

[AXODUS_DEFI_ACS_INTEGRATION]

## 1. ACS Integration Thesis

ACS can support DeFi research, strategy analysis, protocol review, risk summaries, claim review, reporting, and governance briefs.

ACS does not approve DeFi strategies, deploy contracts, move treasury assets, or guarantee yield.

## 2. Agent Roles

agent_roles:
  Trinity:
    DeFi_role:
      - analyze_strategy_performance
      - review_market_and_liquidity_risk
      - summarize_treasury_exposure
      - support_yield_or_loss_reporting

  Agent_Smith:
    DeFi_role:
      - adversarial_review
      - detect_yield_overclaims
      - identify_attack_surfaces
      - challenge_protocol_assumptions
      - flag_governance_or_treasury_bypass

  Morpheus:
    DeFi_role:
      - align_DeFi_with_ecosystem_strategy
      - review_governance_narrative
      - ensure_documentation_coherence
      - support_DaaS_positioning

## 3. ACS DeFi Workflow

workflow:
  - DeFi_request_or_strategy_received
  - context_loaded_from_DeFi_Treasury_Governance_Tokenomics_Security_docs
  - Trinity_reviews_strategy_market_or_treasury_context
  - Agent_Smith_reviews_risks_and_claims
  - Morpheus_reviews_positioning_and_governance_alignment
  - human_or_domain_reviewer_validates
  - governance_security_or_treasury_review_if required
  - output_used_for_docs_scope_report_or_proposal
  - accountability_record_created

## 4. ACS Output Types

output_types:
  protocol_summary:
    fields:
      - protocol
      - category
      - purpose
      - risks
      - status

  strategy_review:
    fields:
      - objective
      - assets
      - protocols
      - expected_metrics
      - risks
      - limits

  risk_report:
    fields:
      - risk_categories
      - severity
      - controls
      - residual_risk
      - review_required

  claim_review_note:
    fields:
      - claim
      - evidence_needed
      - safer_language
      - escalation

  governance_brief:
    fields:
      - decision_needed
      - affected_nuclei
      - risk
      - options
      - recommendation_if allowed

## 5. Boundaries

ACS_can:
  - analyze
  - summarize
  - flag_risks
  - draft_reports
  - prepare_handoffs
  - suggest_safer_language

ACS_cannot:
  - approve_DeFi_strategy
  - approve_treasury_allocation
  - deploy_contracts_without_authority
  - move_funds
  - guarantee_yield
  - publish_sensitive_claims_without_review
  - replace_governance_or_security_review

## 6. Public Documentation Guidance

The public ACS Integration page should:

- define ACS support role;
- map agent responsibilities;
- show workflow and outputs;
- clearly state boundaries.
