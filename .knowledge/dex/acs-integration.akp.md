# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: ACS INTEGRATION MODEL

[AXODUS_DEX_ACS_INTEGRATION]

## 1. ACS Integration Thesis

ACS can support DEX through token listing review, route analysis, liquidity monitoring, risk summaries, claim review, reporting, and governance brief preparation.

ACS cannot approve listings, deploy contracts, move treasury liquidity, or guarantee execution.

## 2. Agent Roles

agent_roles:
  Trinity:
    DEX_role:
      - liquidity_analysis
      - routing_context
      - Trading_integration_review
      - fee_and_volume_reporting
      - treasury_LP_context

  Agent_Smith:
    DEX_role:
      - adversarial_review
      - scam_token_risk_detection
      - MEV_and_execution_risk_review
      - unsafe_claim_detection
      - governance_bypass_detection

  Morpheus:
    DEX_role:
      - ecosystem_positioning
      - governance_alignment
      - documentation_consistency
      - user_narrative_clarity

## 3. ACS DEX Workflow

workflow:
  - DEX_request_or_issue_received
  - context_loaded_from_DEX_DeFi_Tokenomics_Treasury_Governance_docs
  - Trinity_reviews_liquidity_route_or_trading_context
  - Agent_Smith_reviews_token_security_claim_or_attack_surface
  - Morpheus_reviews_positioning_and_governance_alignment
  - human_or_domain_reviewer_validates
  - governance_security_or_treasury_review_if required
  - output_used_for_docs_reports_or_handoff
  - accountability_record_created

## 4. Output Types

output_types:
  token_listing_review:
    fields:
      - token
      - contract
      - status
      - risk_flags
      - evidence_needed

  liquidity_summary:
    fields:
      - pool
      - liquidity
      - volume
      - slippage
      - risks

  route_review:
    fields:
      - route
      - expected_output
      - fees
      - price_impact
      - risk_flags

  claim_review_note:
    fields:
      - claim
      - evidence
      - safer_language
      - escalation

  governance_brief:
    fields:
      - decision_needed
      - affected_pools_tokens_fees
      - risk
      - recommendations_if allowed

## 5. Boundaries

ACS_can:
  - analyze
  - summarize
  - flag_risks
  - draft_reports
  - prepare_handoffs
  - suggest_safer_language

ACS_cannot:
  - approve_token_listings
  - approve_treasury_liquidity
  - deploy_contracts
  - guarantee_execution_or_liquidity
  - override_governance
  - publish_sensitive_claims_without_review

## 6. Public Documentation Guidance

The public ACS Integration page should:

- define ACS support role;
- map agent responsibilities;
- show workflow and outputs;
- state boundaries clearly.
