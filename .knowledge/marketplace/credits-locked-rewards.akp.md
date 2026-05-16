# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: CREDITS AND LOCKED REWARDS MODEL

[AXODUS_MARKETPLACE_CREDITS_LOCKED_REWARDS]

## 1. Locked Rewards Thesis

Locked rewards are one of the most important Marketplace design challenges.

Free Academy course rewards may create `$Neurons` balances that are not transferable, not withdrawable, and not swappable, but may potentially be usable inside the Axodus ecosystem if contracts and policy allow.

Marketplace can become the primary internal utility surface for locked rewards.

This must be handled with extreme clarity.

## 2. Definitions

locked_reward:
  definition:
    - reward_balance_earned_under_restricted_conditions_that_cannot_be_freely_transferred_or_withdrawn_unless_policy_and_contracts_allow

internal_credit:
  definition:
    - platform_accounting_unit_or_locked_balance_spendable_only_under_defined_internal_rules

marketplace_credit:
  definition:
    - credit_that_can_be_applied_to_marketplace_purchase_under_policy

unlockable_reward:
  definition:
    - restricted_reward_that_may_become_unlocked_after_conditions_if defined

non_transferable_balance:
  definition:
    - balance_bound_to_user_account_or_wallet_for_internal_use

## 3. Core Rule

core_rule:
  - Do_not_describe_locked_rewards_as_transferable_withdrawable_swappable_or_marketplace_spendable_until_policy_contract_treasury_seller_settlement_and_compliance_model_are_defined_and_validated.

## 4. Possible Locked Reward Uses

possible_uses:
  course_discount:
    description:
      - locked_reward_reduces_price_of_paid_course_if approved

  marketplace_credit:
    description:
      - locked_reward_applies_to_selected_marketplace_listings_if approved

  service_discount:
    description:
      - locked_reward_reduces_cost_of_Business_or_BBA_service_if approved

  internal_product_access:
    description:
      - locked_reward_grants_access_to_platform_feature_if policy supports

  governance_participation:
    description:
      - locked_reward_may_count_for_voting_if governance_and_contracts allow
    warning:
      - governance_capture_and_abuse_risk

  non_spendable_status:
    description:
      - locked_reward_visible_but_not_spendable_until future policy

## 5. Spend Rule Object

spend_rule_fields:
  - rule_id
  - credit_type
  - eligible_listings
  - excluded_categories
  - max_percentage_of_order
  - max_amount_per_period
  - user_eligibility
  - seller_acceptance_required
  - treasury_settlement_model
  - refund_behavior
  - expiration
  - abuse_controls
  - governance_status
  - contract_status
  - compliance_status

## 6. Seller Settlement Models for Locked Credits

settlement_models:
  treasury_subsidized:
    description:
      - buyer_uses_locked_credit_and_treasury_pays_seller_real_settlement_asset
    risk:
      - treasury_liability_and_budget_overrun

  seller_accepts_credit:
    description:
      - seller_accepts_locked_credit_as_internal_value
    risk:
      - seller_may_not_accept_or_value_credit

  platform_discount:
    description:
      - platform_reduces_its_fee_or_subsidizes_discount
    risk:
      - revenue_reduction

  restricted_to_Axodus_owned_listings:
    description:
      - locked_credits_only_spendable_on_official_Axodus_products
    risk:
      - limited_utility_but_simpler_settlement

  non_settled_internal_access:
    description:
      - credits_unlock_internal_access_without_paying_external_seller
    risk:
      - product_capacity_or_abuse_risk

## 7. Refund Behavior

refund_questions:
  - Are_locked_credits_refunded_when_order_is_cancelled?
  - Are_credits_returned_to_same_locked_status?
  - What_happens_if_partial_refund?
  - Do_expired_credits_return?
  - Can_locked_credits_be_reused_after_dispute?
  - How_are_seller_payout_adjustments_handled?

## 8. Risks

risks:
  hidden_liability:
    description:
      - credits_create_obligation_not_reported_by_treasury

  seller_settlement_gap:
    description:
      - seller_expects_real_asset_but_buyer_paid_locked_credit

  transferability_confusion:
    description:
      - user_thinks_locked_reward_can_be_withdrawn_or_sold

  abuse:
    description:
      - users_farm_free_rewards_to_buy_items_without_sustainable model

  governance_capture:
    description:
      - locked_rewards_affect_vote_power_or_access_unfairly

  compliance_risk:
    description:
      - rewards_and_credits_may_have_consumer_financial_or_promo rules

## 9. Public Documentation Guidance

The public Credits and Locked Rewards page should:

- define locked rewards and internal credits;
- state the core rule clearly;
- describe possible uses only as policy-dependent;
- define spend rule fields and seller settlement models;
- explain refund questions and risks.
