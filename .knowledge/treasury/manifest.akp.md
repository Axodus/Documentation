# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: TREASURY
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Treasury
  role: financial_sustainability_capital_allocation_reserve_risk_reporting_and_accountability_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - treasury-core.akp.md
  - treasury-architecture.akp.md
  - treasury-policy.akp.md
  - capital-allocation.akp.md
  - reserves-and-liquidity.akp.md
  - revenue-and-fees.akp.md
  - risk-management.akp.md
  - strategy-oversight.akp.md
  - trading-alignment.akp.md
  - tokenomics-alignment.akp.md
  - governance-alignment.akp.md
  - custody-and-security.akp.md
  - reporting-accountability.akp.md
  - acs-trinity-integration.akp.md
  - compliance-disclosures.akp.md
  - treasury-page-directives.akp.md

semantic_domains:
  treasury_identity:
    source_file: treasury-core.akp.md
    concepts:
      - treasury_as_financial_responsibility_layer
      - sustainability
      - accountability
      - no_profit_guarantee
      - governance_alignment

  architecture:
    source_file: treasury-architecture.akp.md
    concepts:
      - asset_layer
      - revenue_layer
      - allocation_layer
      - risk_layer
      - custody_layer
      - reporting_layer
      - governance_layer

  policy:
    source_file: treasury-policy.akp.md
    concepts:
      - treasury_policy
      - approved_actions
      - prohibited_actions
      - authority_matrix
      - review_frequency

  capital_allocation:
    source_file: capital-allocation.akp.md
    concepts:
      - reserves
      - operations
      - growth
      - liquidity
      - strategies
      - reward_budget
      - allocation_limits

  reserves_liquidity:
    source_file: reserves-and-liquidity.akp.md
    concepts:
      - operating_reserve
      - stable_reserve
      - liquidity_buffer
      - emergency_reserve
      - treasury_runway

  revenue_fees:
    source_file: revenue-and-fees.akp.md
    concepts:
      - business_revenue
      - marketplace_fees
      - treasury_fee
      - academy_revenue
      - trading_revenue
      - fee_reporting

  risk:
    source_file: risk-management.akp.md
    concepts:
      - market_risk
      - liquidity_risk
      - counterparty_risk
      - smart_contract_risk
      - operational_risk
      - concentration_risk

  strategy_oversight:
    source_file: strategy-oversight.akp.md
    concepts:
      - allowed_strategies
      - prohibited_strategies
      - DaaS_DeFi_exposure
      - derivatives
      - debentures
      - strategy_review

  trading_alignment:
    source_file: trading-alignment.akp.md
    concepts:
      - internal_trading
      - PnL
      - drawdown
      - exposure
      - risk_limits
      - Trinity_review

  tokenomics_alignment:
    source_file: tokenomics-alignment.akp.md
    concepts:
      - reward_budget
      - treasury_fee
      - locked_reward_liability
      - tokenomics_reporting
      - marketplace_credit

  governance_alignment:
    source_file: governance-alignment.akp.md
    concepts:
      - treasury_governance
      - approval_thresholds
      - Boardroom_review
      - execution_receipt
      - public_accountability

  custody_security:
    source_file: custody-and-security.akp.md
    concepts:
      - multisig
      - keys
      - permissions
      - wallet_registry
      - least_privilege
      - incident_response

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - treasury_report
      - financial_report
      - PnL_report
      - exposure_report
      - accountability_record

  ACS_Trinity:
    source_file: acs-trinity-integration.akp.md
    concepts:
      - Trinity
      - ACS_analysis
      - treasury_review
      - risk_summary
      - report_drafting

  compliance:
    source_file: compliance-disclosures.akp.md
    concepts:
      - no_investment_advice
      - no_return_guarantee
      - financial_disclosure
      - regulatory_uncertainty
      - privacy

public_documentation_targets:
  overview:
    target: docs/treasury/overview.md
    source_files:
      - treasury-core.akp.md
      - treasury-architecture.akp.md

  architecture:
    target: docs/treasury/architecture.md
    source_files:
      - treasury-architecture.akp.md

  policy:
    target: docs/treasury/treasury-policy.md
    source_files:
      - treasury-policy.akp.md
      - governance-alignment.akp.md

  capital_allocation:
    target: docs/treasury/capital-allocation.md
    source_files:
      - capital-allocation.akp.md
      - risk-management.akp.md

  reserves_liquidity:
    target: docs/treasury/reserves-and-liquidity.md
    source_files:
      - reserves-and-liquidity.akp.md

  revenue_fees:
    target: docs/treasury/revenue-and-fees.md
    source_files:
      - revenue-and-fees.akp.md
      - tokenomics-alignment.akp.md

  risk_management:
    target: docs/treasury/risk-management.md
    source_files:
      - risk-management.akp.md

  strategy_oversight:
    target: docs/treasury/strategy-oversight.md
    source_files:
      - strategy-oversight.akp.md

  trading_alignment:
    target: docs/treasury/trading-alignment.md
    source_files:
      - trading-alignment.akp.md

  tokenomics_alignment:
    target: docs/treasury/tokenomics-alignment.md
    source_files:
      - tokenomics-alignment.akp.md

  governance_alignment:
    target: docs/treasury/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  custody_security:
    target: docs/treasury/custody-and-security.md
    source_files:
      - custody-and-security.akp.md

  reporting:
    target: docs/treasury/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  acs_trinity:
    target: docs/treasury/acs-trinity-integration.md
    source_files:
      - acs-trinity-integration.akp.md

  compliance:
    target: docs/treasury/compliance-and-disclosures.md
    source_files:
      - compliance-disclosures.akp.md

global_invariants:
  - no_guaranteed_returns
  - no_risk_free_language
  - treasury_actions_require_authority
  - material_treasury_actions_require_governance_review_or_visibility
  - capital_allocation_requires_policy_and_records
  - trading_related_treasury_activity_requires_risk_limits_and_reporting
  - tokenomics_related_flows_require_reporting
  - custody_requires_security_controls
  - ACS_Trinity_supports_but_does_not_approve_actions
  - public_docs_must_be_English
