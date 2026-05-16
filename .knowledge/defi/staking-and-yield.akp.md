# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: STAKING AND YIELD MODEL

[AXODUS_STAKING_YIELD]

## 1. Staking and Yield Thesis

Staking and yield are sensitive DeFi concepts because users often interpret them as stable income.

Axodus must document staking and yield as variable, risk-bearing, contract-dependent, and governance-controlled.

## 2. Definitions

staking:
  definition:
    - locking_or_delegating_tokens_or_assets_to_support_network_protocol_or_reward_logic_if implemented

yield:
  definition:
    - variable_reward_or_return_generated_by_protocol_strategy_or_incentive_mechanism

APY:
  definition:
    - annualized_rate_estimate_based_on_assumptions_or_current_conditions
  warning:
    - APY_is_not_guaranteed_and_can_change

## 3. Staking Models

staking_models:
  protocol_staking:
    description:
      - staking_assets_to_network_or_protocol

  governance_staking:
    description:
      - locking_tokens_for_governance_participation_if defined

  product_access_staking:
    description:
      - staking_or_holding_for_product_access_if policy defines

  reward_staking:
    description:
      - staking_to_receive_incentives_if implemented

  liquidity_staking:
    description:
      - staking_LP_tokens_or_liquidity_positions_if supported

## 4. Yield Sources

yield_sources:
  protocol_rewards:
    description:
      - rewards_from_protocol_incentives

  trading_or_strategy_revenue:
    description:
      - returns_from_strategy_activity_if any

  lending_or_borrowing:
    description:
      - interest_from_lending_protocol_if approved

  liquidity_fees:
    description:
      - fees_from_liquidity_provision

  token_incentives:
    description:
      - incentive_tokens_or_rewards_under policy

  treasury_subsidy:
    description:
      - rewards_subsidized_by_treasury_if approved
    warning:
      - may_create_sustainability_risk

## 5. Yield Display Rules

yield_display_rules:
  - label_APY_as_estimated_or_variable
  - include_data_source
  - include_calculation_period
  - include_fees_if relevant
  - state_that_yield_can_decrease_or_become_negative_after_losses_or_fees
  - disclose_lockups_and_withdrawal_limits
  - avoid_guaranteed_yield_language
  - distinguish_rewards_from_profit
  - avoid_using_APY_for_marketing_without_context

## 6. Staking Product Object

staking_product_fields:
  - product_id
  - accepted_asset
  - reward_asset
  - staking_contract_or_protocol
  - lockup_period_if any
  - withdrawal_rules
  - slashing_or_penalty_risk
  - APY_source_if shown
  - reward_policy
  - governance_status
  - security_review_status
  - risk_level
  - status

## 7. Risks

risks:
  slashing:
    description:
      - staked_assets_can_be_penalized_in_some_protocols

  lockup:
    description:
      - assets_may_not_be_immediately_withdrawable

  variable_yield:
    description:
      - rewards_can_change_or_stop

  token_price_risk:
    description:
      - reward_or_staked_asset_value_can_drop

  smart_contract_risk:
    description:
      - staking_contract_or_protocol_can_fail

  protocol_governance_risk:
    description:
      - protocol_parameters_can_change

  misleading_APY:
    description:
      - users_misinterpret_estimate_as_guarantee

## 8. Public Documentation Guidance

The public Staking and Yield page should:

- define staking, yield, and APY carefully;
- list staking models and yield sources;
- include yield display rules;
- define staking product fields;
- include risks and no-guarantee language.
