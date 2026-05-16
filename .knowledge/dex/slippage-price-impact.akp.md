# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: SLIPPAGE AND PRICE IMPACT MODEL

[AXODUS_DEX_SLIPPAGE_PRICE_IMPACT]

## 1. Thesis

Slippage and price impact are core user risks in decentralized swaps.

Users must understand that the final output can differ from the quoted output.

High slippage settings can lead to worse execution. Low slippage settings can cause transaction failure.

## 2. Definitions

slippage:
  definition:
    - difference_between_expected_trade_result_and_actual_execution_result_due_to_price_or_liquidity_changes

price_impact:
  definition:
    - effect_of_user_trade_size_on_pool_or_route_price

minimum_received:
  definition:
    - lowest_output_amount_accepted_by_user_based_on_slippage_tolerance

slippage_tolerance:
  definition:
    - maximum_acceptable_difference_between_quote_and_execution

quote_expiration:
  definition:
    - time_or_condition_after_which_quote_is_no_longer_reliable

## 3. User Guidance

guidance:
  - review_price_impact_before_confirming_swap
  - use_care_when_setting_high_slippage
  - understand_that_low_liquidity_increases_price_impact
  - verify_token_listing_status
  - avoid_large_swaps_in_small_pools_without_understanding_risk
  - confirm_minimum_received
  - understand_that_failed_transactions_may_still_cost_gas

## 4. Warning Levels

warning_levels:
  low:
    description:
      - price_impact_or_slippage_within_normal_range

  medium:
    description:
      - user_should_review_execution_details

  high:
    description:
      - trade_may_receive_significantly_less_than_expected

  critical:
    description:
      - trade_may_be_unsafe_due_to_extreme_price_impact_or_low_liquidity

## 5. Public Documentation Guidance

The public Slippage and Price Impact page should:

- define terms;
- explain user guidance;
- describe warning levels;
- state that final execution can differ from quote.
