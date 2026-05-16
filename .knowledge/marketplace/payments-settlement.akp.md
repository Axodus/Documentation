# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: PAYMENTS AND SETTLEMENT MODEL

[AXODUS_MARKETPLACE_PAYMENTS_SETTLEMENT]

## 1. Payments Thesis

Marketplace payments and settlement must be transparent, auditable, and aligned with treasury policy.

Buyers, sellers, Treasury, and governance must understand what is paid, which asset is used, what fees apply, when settlement happens, and how refunds work.

## 2. Payment Methods

payment_methods:
  crypto_direct:
    description:
      - buyer_pays_with_supported_crypto_asset

  $Neurons_payment:
    description:
      - buyer_pays_with_$Neurons_if policy_and_contracts_support

  locked_credit_payment:
    description:
      - buyer_spends_locked_rewards_or_internal_credit_if approved
    warning:
      - requires_policy_contract_treasury_seller_settlement_and_compliance_model

  fiat_or_card:
    description:
      - fiat_payment_if_gateway_is_implemented

  DEX_swap_checkout:
    description:
      - buyer_swaps_asset_to_required_payment_asset_if DEX_integration_exists
    warning:
      - subject_to_slippage_fees_and_failed_transaction_risk

  hybrid_payment:
    description:
      - mix_of_assets_credits_or_discounts_if implemented

## 3. Settlement Models

settlement_models:
  immediate_settlement:
    description:
      - seller_or_treasury_receives_amount_after_payment_confirmation

  delayed_settlement:
    description:
      - settlement_waits_for_delivery_acceptance_or_policy_period

  milestone_settlement:
    description:
      - payment_released_by_delivery_phase

  escrow_like:
    description:
      - funds_held_until_condition_if architecture_supports
    warning:
      - do_not_claim_escrow_unless_contract_or_process_implements_it

  treasury_settlement:
    description:
      - treasury_receives_and_routes_funds_to_seller_or_budget

  credit_settlement:
    description:
      - internal_credit_or_locked_reward_requires_settlement_rule

## 4. Payment Record Fields

payment_record_fields:
  - payment_id
  - order_id
  - buyer_reference
  - seller_id
  - payment_method
  - payment_asset
  - gross_amount
  - discounts
  - credits_used
  - fees
  - net_amount
  - transaction_hash_or_gateway_reference
  - status
  - timestamp

## 5. Settlement Record Fields

settlement_record_fields:
  - settlement_id
  - order_id
  - seller_id
  - gross_amount
  - marketplace_fee
  - treasury_fee_or_allocation
  - seller_net_amount
  - royalty_or_commission
  - payout_asset
  - settlement_method
  - settlement_status
  - release_condition
  - transaction_reference
  - report_reference

## 6. Payment Statuses

payment_statuses:
  Pending:
    meaning:
      - payment_not_confirmed

  Confirmed:
    meaning:
      - payment_received_or_confirmed

  Failed:
    meaning:
      - payment_failed

  Refunded:
    meaning:
      - payment_returned_under_policy

  Partially_Refunded:
    meaning:
      - partial_refund_processed

  Disputed:
    meaning:
      - payment_under_dispute

  Cancelled:
    meaning:
      - payment_cancelled_before_completion

## 7. Settlement Risks

risks:
  asset_volatility:
    description:
      - crypto_payment_asset_value_changes

  DEX_slippage:
    description:
      - swap_checkout_changes_final_amount

  failed_transaction:
    description:
      - payment_or_swap_fails_but_network_costs_may_apply

  unclear_escrow:
    description:
      - users_assume_funds_are_held_safely_without actual mechanism

  seller_payout_delay:
    description:
      - settlement_waits_for_conditions_or review

  refund_complexity:
    description:
      - refund_in_crypto_or_after_swap_can_be complex

  locked_credit_liability:
    description:
      - internal_credit_spending_requires_seller_settlement_model

## 8. Public Documentation Guidance

The public Payments and Settlement page should:

- define payment methods and settlement models;
- list payment and settlement fields;
- define payment statuses;
- explain settlement risks;
- avoid claiming escrow, fiat, DEX, or locked credit support unless implemented.
