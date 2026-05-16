# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: SWAP MODEL

[AXODUS_DEX_SWAP_MODEL]

## 1. Swap Thesis

A swap allows a user or system to exchange one token for another using available liquidity.

Swap execution is not guaranteed.

Quotes can change before confirmation, transactions can fail, routes can change, liquidity can be insufficient, and users can receive less than expected if slippage tolerance allows it.

## 2. Swap Concepts

concepts:
  input_token:
    definition:
      - token_user_spends

  output_token:
    definition:
      - token_user_receives

  quote:
    definition:
      - estimated_output_based_on_current_liquidity_and_route

  minimum_received:
    definition:
      - lowest_output_amount_user_accepts_after_slippage

  slippage_tolerance:
    definition:
      - maximum_price_movement_or_output_difference_user_accepts

  price_impact:
    definition:
      - effect_of_user_trade_on_pool_or_route_price

  route:
    definition:
      - path_used_to_convert_input_token_to_output_token

  deadline:
    definition:
      - time_after_which_transaction_should_not_execute

  approval:
    definition:
      - token_allowance_given_to_contract_to_spend_input_token

## 3. Swap Flow

swap_flow:
  - user_selects_input_and_output_tokens
  - system_checks_token_listing_status_and_warnings
  - user_enters_amount
  - quote_generated
  - route_selected
  - price_impact_and_slippage_displayed
  - user_sets_or_accepts_slippage_tolerance
  - user_approves_token_if needed
  - user_confirms_swap_transaction
  - transaction_submitted
  - transaction_executes_or_fails
  - final_output_recorded
  - receipt_or_history_updated

## 4. Swap Object

swap_fields:
  - swap_id
  - user_reference
  - chain
  - input_token
  - output_token
  - input_amount
  - quoted_output
  - minimum_received
  - actual_output_if executed
  - route
  - slippage_tolerance
  - price_impact
  - fees
  - status
  - transaction_hash_if applicable
  - warnings

## 5. Swap Statuses

statuses:
  Quote:
    meaning:
      - estimated_swap_not_yet_submitted

  Pending_Approval:
    meaning:
      - waiting_for_token_approval_if needed

  Pending_Transaction:
    meaning:
      - transaction_submitted_but_not_confirmed

  Executed:
    meaning:
      - swap_completed

  Failed:
    meaning:
      - transaction_failed

  Expired:
    meaning:
      - quote_or_deadline_no_longer_valid

  Cancelled:
    meaning:
      - user_cancelled_before_submission

## 6. Swap Warnings

warnings:
  high_price_impact:
    message:
      - trade_may_move_price_significantly

  high_slippage:
    message:
      - user_may_receive_less_than_expected

  low_liquidity:
    message:
      - pool_or_route_has_limited_depth

  unverified_token:
    message:
      - token_is_not_verified_or_officially_supported

  MEV_risk:
    message:
      - transaction_may_be_exposed_to_front_running_or_sandwich_attack

  approval_risk:
    message:
      - token_allowance_can_create_spending_permission_risk

## 7. Public Documentation Guidance

The public Swap Model page should:

- define swap terms;
- describe swap flow and statuses;
- explain warnings;
- state that quotes and execution are not guaranteed;
- link to Slippage, MEV, Token Listing, and Security pages.
