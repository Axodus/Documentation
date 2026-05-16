# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: STRATEGY OVERSIGHT MODEL

[AXODUS_TREASURY_STRATEGY_OVERSIGHT]

## 1. Strategy Oversight Thesis

Treasury may interact with trading, DeFi, DaaS, liquidity, derivatives, debentures, or other financial strategies.

These strategies must not be treated as guaranteed yield.

Treasury strategy oversight defines which strategy categories may be researched, tested, approved, limited, paused, or prohibited.

## 2. Strategy Categories

strategy_categories:
  treasury_trading:
    description:
      - internal_trading_strategies_for_ecosystem_capital_under_limits

  liquidity_support:
    description:
      - allocations_or_actions_to_support_liquidity_if approved

  DeFi_DaaS:
    description:
      - DeFi_as_a_Service_strategy_allocation_or_productized_financial_infrastructure

  staking_or_yield:
    description:
      - protocol_based_yield_or_staking_if approved
    warning:
      - yield_not_guaranteed_and_protocol_risk_exists

  market_making:
    description:
      - liquidity_or_spread_strategy_if approved

  arbitrage:
    description:
      - strategy_to_capture_price_differences_under_execution_and_counterparty_risk

  hedging:
    description:
      - strategy_to_reduce_specific_exposure_if approved

  derivatives:
    description:
      - exposure_to_derivative_instruments_if governance_and_risk_policy allow
    warning:
      - high_risk_and_compliance_sensitive

  debentures:
    description:
      - debt_like_instrument_concept_or_strategy_if legally_and_governance_reviewed
    warning:
      - do_not_claim_active_product_without review

  ETF_DaaS:
    description:
      - ETF_oriented_DeFi_as_a_Service_design_direction
    warning:
      - do_not_claim_regulated_ETF_status_without legal basis

## 3. Allowed Strategy Statuses

strategy_statuses:
  Research:
    meaning:
      - concept_under_review_no_capital_allocated

  Watchlist:
    meaning:
      - possible_strategy_or_protocol_monitored

  Paper_or_Simulated:
    meaning:
      - tested_without_live_treasury_capital

  Limited_Pilot:
    meaning:
      - small_allocation_under_strict_limits

  Approved:
    meaning:
      - approved_under_defined_policy_and_limits

  Paused:
    meaning:
      - temporarily_stopped

  Deprecated:
    meaning:
      - no_longer_approved

  Prohibited:
    meaning:
      - not_allowed_under_current_policy

## 4. Strategy Review Fields

strategy_review_fields:
  - strategy_id
  - strategy_category
  - objective
  - assets_involved
  - platforms_or_protocols
  - expected_risk
  - expected_liquidity
  - capital_required
  - maximum_allocation
  - exit_conditions
  - smart_contract_risk
  - counterparty_risk
  - governance_requirement
  - reporting_frequency
  - reviewer
  - decision
  - status

## 5. Prohibited Strategy Patterns

prohibited_or_restricted_patterns:
  - unbounded_leverage
  - unaudited_high_risk_contract_with_large_allocation
  - opaque_counterparty
  - strategy_without_exit_plan
  - strategy_without_reporting
  - strategy_described_as_guaranteed_yield
  - treasury_allocation_for_personal_benefit
  - strategy_bypassing_governance_or_policy

## 6. Strategy Pause Conditions

pause_conditions:
  - drawdown_limit_reached
  - protocol_incident
  - exchange_or_counterparty_issue
  - governance_review_requested
  - security_risk_detected
  - liquidity_deterioration
  - market_regime_change
  - reporting_gap
  - strategy_behavior_deviates_from_policy

## 7. Public Documentation Guidance

The public Strategy Oversight page should:

- define strategy oversight purpose;
- list strategy categories with risk caveats;
- define strategy statuses and review fields;
- list prohibited patterns and pause conditions;
- avoid claiming specific active financial products unless verified.
