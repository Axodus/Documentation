# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: TREASURY ALIGNMENT MODEL

[AXODUS_MARKETPLACE_TREASURY_ALIGNMENT]

## 1. Treasury Alignment Thesis

Marketplace creates treasury flows and potential liabilities.

Treasury must track revenue, fees, seller settlement, refunds, discounts, locked credits, reward spending, reserves, partner commissions, and open obligations.

## 2. Treasury-Marketplace Interfaces

interfaces:
  marketplace_fees:
    description:
      - fees_collected_from_orders_or_sellers

  seller_settlement:
    description:
      - payouts_to_sellers_tutors_or_providers

  refunds:
    description:
      - returned_payments_or_credit_adjustments

  discounts:
    description:
      - price_reductions_funded_by_seller_platform_or_treasury

  locked_credits:
    description:
      - internal_reward_spending_that_may_create_settlement_obligation

  reward_budgets:
    description:
      - buyer_seller_tutor_or_campaign_rewards

  payment_processing_costs:
    description:
      - gateway_network_or_D EX_costs

  dispute_reserve:
    description:
      - funds_or_accounting_reserved_for_refunds_or disputes_if policy defines

  partner_commissions:
    description:
      - revenue_share_or_referral_payouts

## 3. Treasury Record Fields

treasury_record_fields:
  - reporting_period
  - gross_marketplace_volume
  - net_marketplace_revenue
  - marketplace_fees
  - treasury_fees
  - seller_payouts
  - tutor_payouts
  - refunds
  - credits_issued
  - credits_spent
  - credits_expired
  - discounts
  - reward_budget_usage
  - partner_commissions
  - payment_processing_costs
  - open_liabilities
  - governance_references
  - limitations

## 4. Treasury Review Required For

review_required_for:
  - locked_reward_marketplace_spending
  - treasury_subsidized_discounts
  - seller_settlement_model
  - marketplace_fee_change
  - refund_reserve_policy
  - partner_commission_policy
  - DEX_swap_checkout_settlement
  - large_campaign_reward_budget
  - marketplace_revenue_public_claim

## 5. Treasury Risks

risks:
  hidden_liability:
    description:
      - locked_credits_or_refunds_create_unreported_obligation

  settlement_delay:
    description:
      - seller_payouts_not_processed_or_visible

  refund_shortfall:
    description:
      - insufficient_funds_or_policy_for_refunds

  revenue_overclaim:
    description:
      - marketplace_volume_or_fees_treated_as guaranteed revenue

  accounting_mismatch:
    description:
      - token_credit_or_fiat_records_do_not reconcile

  treasury_subsidy_overrun:
    description:
      - discounts_or_rewards_exceed_budget

## 6. Public Documentation Guidance

The public Treasury Alignment page should:

- explain marketplace treasury flows;
- list record fields and review triggers;
- include risks;
- state that marketplace revenue is not guaranteed.
