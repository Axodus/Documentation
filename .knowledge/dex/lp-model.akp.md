# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: LP MODEL

[AXODUS_DEX_LP_MODEL]

## 1. LP Thesis

Liquidity Providers enable swaps by depositing assets into pools.

LPs may earn fees or incentives, but they can also lose value due to impermanent loss, token price changes, low volume, smart contract risk, and pool manipulation.

LP documentation must be clear and risk-aware.

## 2. LP Concepts

concepts:
  liquidity_provider:
    definition:
      - user_treasury_or_actor_who_deposits_assets_into_pool

  LP_token:
    definition:
      - token_or_record_representing_pool_share_if implemented

  pool_share:
    definition:
      - percentage_of_pool_owned_by_LP_position

  fees_accrued:
    definition:
      - fees_earned_from_pool_activity_if supported

  impermanent_loss:
    definition:
      - difference_between_value_of_LP_position_and_value_of_simply_holding_assets

  withdrawal:
    definition:
      - removing_liquidity_from_pool

## 3. LP Flow

LP_flow:
  - user_selects_pool
  - pool_risk_and_token_status_displayed
  - deposit_amounts_entered
  - pool_share_estimated
  - impermanent_loss_warning_displayed
  - user_approves_tokens_if needed
  - user_adds_liquidity
  - LP_position_created
  - fees_and_position_tracked_if supported
  - user_removes_liquidity_when desired
  - final_assets_received_based_on_pool_state

## 4. LP Position Object

LP_position_fields:
  - position_id
  - owner_reference
  - pool_id
  - deposited_assets
  - pool_share
  - entry_prices_if available
  - current_value_estimate
  - fees_accrued_if available
  - incentives_if any
  - impermanent_loss_context
  - status
  - transaction_references

## 5. LP Risk Warnings

warnings:
  impermanent_loss:
    - LP_position_can_underperform_holding_assets

  token_risk:
    - one_or_both_tokens_can_lose_value_or_fail

  low_volume:
    - fees_depend_on_swap_activity_and_are_not guaranteed

  smart_contract_risk:
    - pool_contract_can_have_bugs_or_be_exploited

  withdrawal_risk:
    - withdrawal_output_depends_on_pool_state

  incentive_risk:
    - rewards_can_change_stop_or_be_unsustainable

## 6. Public Documentation Guidance

The public LP Model page should:

- define LP concepts;
- describe LP flow and position object;
- explain risks clearly;
- state that LP fees and incentives are variable and not guaranteed.
