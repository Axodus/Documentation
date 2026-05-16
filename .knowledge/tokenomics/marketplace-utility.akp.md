# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: MARKETPLACE UTILITY MODEL

[AXODUS_MARKETPLACE_TOKEN_UTILITY]

## 1. Marketplace Utility Thesis

Marketplace is a major potential utility surface for `$Neurons`.

Marketplace utility can create demand for internal ecosystem usage, support course commerce, enable service payments, allow discounts, connect locked rewards to real utility, and support creator/tutor revenue.

But Marketplace utility is complex because it requires settlement logic.

Public docs must not claim final Marketplace payment or locked reward behavior until pricing, accepted assets, fee distribution, settlement, refunds, royalties, and contract/accounting behavior are defined.

## 2. Marketplace Utility Models

utility_models:
  direct_payment:
    description:
      - `$Neurons` accepted as payment asset if implemented

  discount:
    description:
      - `$Neurons` or locked rewards reduce price but may not fully settle seller payment

  internal_credit:
    description:
      - locked_or_internal_use_rewards_spent_inside_platform

  restricted_catalog:
    description:
      - locked_rewards_can_only_spend_on_platform_owned_or_approved_items

  access_unlock:
    description:
      - token_balance_or_status_unlocks_specific_listing_or_service

  subscription_or_service_credit:
    description:
      - token_or_internal_balance_used_for_recurring_or_service_access_if implemented

  loyalty_or_progression:
    description:
      - marketplace_activity_may_affect_user_status_if_policy_defines

## 3. Marketplace Product Types Related to Tokenomics

product_types:
  Academy_course:
    tokenomics_relevance:
      - course_purchase
      - reward_policy
      - tutor_settlement
      - locked_reward_spend

  learning_path:
    tokenomics_relevance:
      - bundle_access
      - reward_or_discount_rules

  tutor_service:
    tokenomics_relevance:
      - payment_settlement
      - royalties_or_commissions

  Business_service:
    tokenomics_relevance:
      - service_payment_or_credit_if_supported

  BBA_service:
    tokenomics_relevance:
      - campaign_or_growth_service_access_if_policy_supports

  product_tool:
    tokenomics_relevance:
      - access_or_purchase_rules

  digital_template_or_toolkit:
    tokenomics_relevance:
      - payment_discount_or_internal_credit

## 4. Settlement Questions

settlement_questions:
  - Which_assets_are_accepted?
  - Can_`$Neurons`_pay_full_price?
  - Can_locked_rewards_pay_full_price_or_only_discount?
  - Are_locked_rewards_valid_for_third_party_tutor_courses?
  - What_does_seller_receive_when_locked_rewards_are_spent?
  - Does_treasury_cover_locked_reward_settlement?
  - Are_locked_rewards_burned_spent_transferred_or_accounted?
  - How_are_royalties_commissions_and_platform_fees_calculated?
  - Are_refunds_allowed?
  - How_are_refunds_handled_when_payment_used_locked_rewards?
  - Are_fees_applied_to_token_payments?
  - Is_settlement_on_chain_off_chain_or_hybrid?
  - How_are_settlements_reported?

## 5. Marketplace Payment Object

payment_object_fields:
  - payment_id
  - listing_id
  - buyer
  - seller_or_tutor
  - payment_asset
  - payment_amount
  - locked_reward_amount_if_any
  - discount_amount_if_any
  - fees
  - royalties
  - commission
  - treasury_allocation_if_any
  - settlement_status
  - refund_status
  - contract_or_accounting_reference
  - timestamp

## 6. Locked Rewards in Marketplace

locked_rewards_marketplace_models:
  discount_only:
    description:
      - locked_rewards_reduce_price_but_do_not_transfer_to_seller

  platform_credit:
    description:
      - locked_rewards_consumed_as_internal_credit

  restricted_purchase:
    description:
      - locked_rewards_spendable_only_on_approved_categories

  seller_settlement_conversion:
    description:
      - platform_or_contract_converts_locked_value_to_seller_payment
    warning:
      - requires_defined_treasury_or_settlement_model

  burn_on_spend:
    description:
      - locked_rewards_burned_when_used
    warning:
      - requires_contract_support

documentation_rule:
  - Treat all locked reward settlement models as Planned or Needs Review unless implementation is confirmed.

## 7. Marketplace Fee Components

fee_components:
  platform_fee:
    meaning:
      - fee_for_marketplace_operation

  operational_fee:
    meaning:
      - infrastructure_or_service_delivery_fee

  royalty:
    meaning:
      - creator_or_tutor_share_if_policy_defines

  commission:
    meaning:
      - sales_or_referral_share_if_defined

  treasury_allocation:
    meaning:
      - portion_allocated_to_treasury_if_policy_defines

  liquidity_or_burn_fee:
    meaning:
      - token_contract_fee_if_applicable_and_verified

## 8. Governance Required For

governance_required_for:
  - accepting_$Neurons_as_marketplace_payment_if_material
  - allowing_locked_rewards_to_spend
  - defining_seller_settlement_for_locked_rewards
  - changing_marketplace_fee_policy
  - using_treasury_to_cover_internal_credits
  - adding_partner_reward_campaigns
  - changing_refund_policy_for_token_payments

## 9. Marketplace Utility Risks

risks:
  settlement_confusion:
    description:
      - users_sellers_and_tutors_do_not_understand_value_flow

  locked_reward_extraction:
    description:
      - users_farm_free_rewards_and_extract_marketplace_value

  tutor_self_dealing:
    description:
      - tutor_creates_fake_buyers_to_convert_rewards_to_revenue

  refund_loop:
    description:
      - users_exploit_refunds_after_spending_rewards

  treasury_leakage:
    description:
      - internal_credits_create_unreported_treasury_cost

  accounting_gap:
    description:
      - token_and_credit_flows_not_reported

## 10. Public Documentation Guidance

The public Marketplace Utility page should:

- explain Marketplace as a possible utility surface for `$Neurons`;
- list utility models with status caveats;
- explain settlement questions;
- define payment and fee components;
- describe locked reward marketplace models as planned/conditional unless verified;
- include risk and governance notes.
