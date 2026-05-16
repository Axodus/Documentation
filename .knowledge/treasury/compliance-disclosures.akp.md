# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: COMPLIANCE AND DISCLOSURES MODEL

[AXODUS_TREASURY_COMPLIANCE_DISCLOSURES]

## 1. Disclosure Thesis

Treasury documentation must be transparent without making unsafe legal or financial claims.

Treasury documentation must not be written as investment advice, yield marketing, fund marketing, or guaranteed return material.

## 2. Required Disclosure Themes

disclosure_themes:
  no_investment_advice:
    message:
      - Treasury_docs_are_for_ecosystem_transparency_and_operations_not_personal_investment_advice

  no_return_guarantee:
    message:
      - Treasury_strategies_and_allocations_do_not_guarantee_returns

  risk_exists:
    message:
      - Treasury_assets_and_strategies_are_exposed_to_market_liquidity_counterparty_smart_contract_operational_and_governance_risk

  estimates_have_assumptions:
    message:
      - runway_revenue_PnL_or_allocation_estimates_depend_on_assumptions

  public_transparency_limits:
    message:
      - public_docs_may_summarize_information_without_exposing_sensitive_security_details

  governance_dependency:
    message:
      - material_treasury_actions_are_subject_to_governance_policy_and approval

  regulatory_uncertainty:
    message:
      - some_financial_structures_may_require_qualified_review_before_final_public_claims

## 3. Prohibited Claims

prohibited_claims:
  - guaranteed_treasury_returns
  - guaranteed_APY
  - risk_free_reserve
  - fixed_income_without_legal_review
  - ETF_status_without_legal_basis
  - audited_unless_real_audit_exists
  - legally_compliant_unless_qualified_review_exists
  - treasury_can_never_lose
  - trading_will_generate_consistent_profit
  - liquidity_fee_guarantees_liquidity
  - burn_guarantees_token_appreciation

## 4. Safe Language

safe_language:
  - treasury_sustainability
  - risk-managed
  - governance-aligned
  - reportable
  - subject_to_market_risk
  - subject_to_governance_approval
  - subject_to_security_review
  - estimated
  - planned
  - draft
  - active_if_verified
  - allocation_policy
  - reserve_policy
  - accountability_record

## 5. Review Triggers

review_triggers:
  - public_treasury_report
  - treasury_strategy_page
  - DaaS_or_ETF_DaaS_financial_claim
  - derivatives_or_debentures_claim
  - trading_revenue_claim
  - treasury_fee_claim
  - audit_or_compliance_claim
  - public_wallet_balance_or_asset_report
  - incident_report
  - governance_proposal_about_treasury

## 6. Privacy and Security Boundaries

privacy_security_boundaries:
  public_allowed:
    - summarized_asset_categories_if approved
    - governance_decisions
    - execution_receipts_if safe
    - risk_summary
    - reporting_periods
    - high_level_controls

  public_restricted:
    - private_keys
    - seed_phrases
    - sensitive_signer_operations
    - exploitable_wallet_procedures
    - internal_security_incident_details_that_increase_risk
    - private_user_or_client_data

## 7. Public Documentation Guidance

The public Compliance and Disclosures page should:

- explain no investment advice and no guarantees;
- list treasury risks;
- define prohibited and safe language;
- explain review triggers;
- explain privacy/security boundaries;
- avoid legal conclusions unless reviewed.
