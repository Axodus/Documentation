# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: MARKETPLACE INTEGRATION MODEL

[AXODUS_DEX_MARKETPLACE_INTEGRATION]

## 1. Marketplace Integration Thesis

DEX may support Marketplace by enabling token swap checkout, asset conversion, accepted payment flexibility, and settlement routing.

Marketplace integration must be carefully designed because swaps introduce slippage, failed transaction risk, refund complexity, fee complexity, and settlement uncertainty.

## 2. Integration Models

integration_models:
  swap_before_checkout:
    description:
      - user_swaps_asset_then_pays_marketplace

  embedded_swap_checkout:
    description:
      - marketplace_checkout_routes_swap_and_payment_in_one_flow_if implemented

  seller_settlement_conversion:
    description:
      - payment_asset_converted_to_seller_preferred_asset_if supported

  treasury_settlement:
    description:
      - treasury_or_protocol_handles_conversion_and_settlement_if approved

  discount_or_credit_conversion:
    description:
      - token_or_credit_used_to_reduce_payment_if policy supports

## 3. Marketplace DEX Questions

questions:
  - Which_assets_are_accepted?
  - Is_swap_required_before_purchase?
  - Who_bears_slippage_risk?
  - Who_pays_swap_fees_and_gas?
  - What_happens_if_swap_succeeds_but_purchase_fails?
  - What_happens_if_purchase_succeeds_but_settlement_route_fails?
  - How_are_refunds_handled_after_swaps?
  - Can_locked_rewards_interact_with_D EX?
  - Does_seller_receive_original_asset_or_converted_asset?
  - How_are_marketplace_fees_and_D EX_fees_reported?

## 4. Checkout Record Fields

checkout_record_fields:
  - checkout_id
  - buyer
  - listing
  - payment_asset
  - settlement_asset
  - swap_required
  - route
  - quoted_amount
  - actual_amount
  - slippage
  - fees
  - seller_amount
  - refund_status
  - transaction_references
  - status

## 5. Risks

risks:
  settlement_failure:
    description:
      - swap_or_payment_partially_fails

  refund_complexity:
    description:
      - refund_after_asset_conversion_is_not_simple

  slippage_dispute:
    description:
      - buyer_or_seller_disagrees_with_final_amount

  fee_confusion:
    description:
      - users_do_not_understand_D EX_and_marketplace_fees

  locked_reward_mismatch:
    description:
      - internal_rewards_cannot_be_swapped_or_settled_as_assumed

## 6. Public Documentation Guidance

The public Marketplace Integration page should:

- explain possible DEX-Marketplace integration models;
- list key design questions;
- define checkout record fields;
- explain risks;
- avoid claiming final settlement behavior unless implemented.
