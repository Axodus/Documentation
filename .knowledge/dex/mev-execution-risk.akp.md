# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: MEV AND EXECUTION RISK MODEL

[AXODUS_DEX_MEV_EXECUTION_RISK]

## 1. MEV Thesis

DEX transactions can be exposed to MEV and execution risk.

MEV can affect user outcomes through front-running, sandwich attacks, back-running, liquidation interactions, or routing manipulation.

Documentation must explain MEV without overpromising protection.

## 2. Definitions

MEV:
  definition:
    - value_that_block_builders_validators_searchers_or_other_actors_can_extract_by_ordering_including_or_excluding_transactions

front_running:
  definition:
    - actor_executes_before_user_transaction_to_benefit_from_expected_price_change

sandwich_attack:
  definition:
    - attacker_trades_before_and_after_user_swap_to_extract_value

back_running:
  definition:
    - actor_executes_after_user_transaction_to_capture_related_opportunity

failed_transaction:
  definition:
    - transaction_reverts_or_does_not_complete_but_may_still_cost_gas

gas_risk:
  definition:
    - network_fees_can_change_or_be_lost_on_failed_transactions

## 3. Execution Risk Factors

risk_factors:
  - high_slippage_tolerance
  - large_trade_relative_to_liquidity
  - low_liquidity_pool
  - volatile_market
  - public_mempool_exposure
  - inefficient_route
  - slow_confirmation
  - token_transfer_tax_or_unusual_token_logic
  - congested_network

## 4. Possible Protections

possible_protections:
  private_transaction_submission:
    description:
      - route_transaction_outside_public_mempool_if supported

  slippage_limits:
    description:
      - reduce_maximum_accepted_output_difference

  price_impact_warning:
    description:
      - warn_user_before_large_market_impact

  transaction_deadline:
    description:
      - prevent_execution_after_too_much_time

  route_filtering:
    description:
      - avoid_high_risk_pools_or_tokens_if policy supports

  education:
    description:
      - teach_users_how_execution_risk_works

protection_warning:
  - No_ME V_or_execution_protection_is_absolute_unless_specific_mechanism_and_scope_are_verified.

## 5. Public Documentation Guidance

The public MEV and Execution Risk page should:

- define MEV and common attack types;
- list execution risk factors;
- describe possible protections cautiously;
- avoid claiming complete MEV protection unless implemented and verified.
