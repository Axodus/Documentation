# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: RESERVES AND LIQUIDITY MODEL

[AXODUS_RESERVES_LIQUIDITY]

## 1. Reserves and Liquidity Thesis

Reserves protect operational continuity.

Liquidity allows the Treasury to meet obligations, respond to incidents, pay expenses, support users or partners where appropriate, and avoid forced selling during market stress.

Treasury must distinguish liquid, semi-liquid, locked, volatile, and strategic assets.

## 2. Reserve Types

reserve_types:
  operating_reserve:
    purpose:
      - cover_near_term_operational_expenses

  stable_reserve:
    purpose:
      - preserve_low_volatility_runway

  emergency_reserve:
    purpose:
      - respond_to_security_incidents_market_disruptions_or_urgent_operations

  liquidity_buffer:
    purpose:
      - provide_available_assets_for_expected_near_term_flows

  reward_reserve:
    purpose:
      - support_reward_programs_under_policy

  strategic_reserve:
    purpose:
      - hold_assets_for_longer_term_ecosystem_strategy

  protocol_or_product_reserve:
    purpose:
      - support_product_specific_needs_if defined

## 3. Liquidity Classes

liquidity_classes:
  highly_liquid:
    description:
      - assets_readily_available_with_low_conversion_friction

  liquid_but_volatile:
    description:
      - assets_available_but_price_can_move_materially

  semi_liquid:
    description:
      - assets_available_with_delay_slippage_or_process

  locked_or_vested:
    description:
      - assets_restricted_by_contract_time_or_policy

  illiquid:
    description:
      - assets_hard_to_convert_without_delay_or_loss

  strategic:
    description:
      - assets_held_for_long_term_or_ecosystem_purpose_not_daily_liquidity

## 4. Runway Concepts

runway:
  definition:
    - estimated_time_treasury_can_support_operations_given_current_reserves_and_expenses

runway_inputs:
  - operating_expenses
  - infrastructure_costs
  - contractor_or_team_costs
  - expected_revenue
  - reserve_assets
  - liquidity
  - market_volatility
  - committed_reward_budgets
  - locked_or_illiquid_assets

runway_reporting_rule:
  - Runway_estimates_should_include_assumptions_and_not_be_presented_as_guaranteed.

## 5. Liquidity Policy Fields

liquidity_policy_fields:
  - reserve_category
  - target_amount_or_ratio
  - asset_preference
  - liquidity_class
  - minimum_buffer
  - allowed_rebalance_actions
  - governance_review_threshold
  - reporting_frequency
  - emergency_use_conditions
  - review_date

## 6. Liquidity Events

liquidity_events:
  expected_outflow:
    examples:
      - operating_payment
      - marketplace_settlement
      - reward_campaign
      - infrastructure_invoice

  unexpected_outflow:
    examples:
      - incident_response
      - emergency_patch
      - legal_or_compliance_review
      - security_recovery

  expected_inflow:
    examples:
      - Business_revenue
      - Marketplace_fees
      - Academy_revenue
      - treasury_fee_if implemented
      - trading_revenue_if realized

  unexpected_inflow:
    examples:
      - grant
      - partner_payment
      - windfall_or_strategy_gain

## 7. Reserve Risks

risks:
  insufficient_runway:
    description:
      - treasury_cannot_support_operations_long_enough

  asset_volatility:
    description:
      - reserves_drop_in_value

  illiquidity:
    description:
      - assets_cannot_be_used_when_needed

  overallocated_to_strategies:
    description:
      - too_much_capital_deployed_outside_reserves

  hidden_liabilities:
    description:
      - reward_or_marketplace_credit_obligations_not_counted

  forced_selling:
    description:
      - treasury_sells_assets_under_bad_market_conditions_due_to_low_liquidity

## 8. Public Documentation Guidance

The public Reserves and Liquidity page should:

- define reserve types and liquidity classes;
- explain runway concept with assumptions;
- describe liquidity policy fields;
- list liquidity events and risks;
- avoid publishing sensitive wallet balances unless approved.
