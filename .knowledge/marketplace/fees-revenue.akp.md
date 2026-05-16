# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: FEES AND REVENUE MODEL

[AXODUS_MARKETPLACE_FEES_REVENUE]

## 1. Fees Thesis

Marketplace fees must be transparent and reportable.

Fees can support Treasury, operations, sellers, creators, tutors, partners, referrals, and ecosystem growth.

Fees must not be described as guaranteed revenue or token price support.

## 2. Fee Types

fee_types:
  marketplace_fee:
    description:
      - platform_fee_applied_to_marketplace_transaction

  seller_fee:
    description:
      - fee_charged_to_seller_for_transaction_or_listing_if policy defines

  buyer_fee:
    description:
      - fee_charged_to_buyer_if policy defines

  treasury_fee:
    description:
      - allocation_to_treasury_if governance_approves

  royalty:
    description:
      - creator_or_tutor_revenue_share_if policy defines

  commission:
    description:
      - referral_partner_or_affiliate_share_if approved

  payment_processing_fee:
    description:
      - gateway_network_or_transaction_fee

  DEX_swap_fee:
    description:
      - fee_from_swap_checkout_if DEX_integration_exists

  service_management_fee:
    description:
      - fee_for_managed_service_or_Business_runtime_if policy defines

## 3. Revenue Routing

revenue_routing:
  seller_net:
    purpose:
      - amount_paid_to_seller_provider_or_tutor

  treasury:
    purpose:
      - ecosystem_sustainability_and_operations

  operations:
    purpose:
      - marketplace_maintenance_support_and_infrastructure

  rewards:
    purpose:
      - incentive_budget_if approved

  partner_or_referral:
    purpose:
      - partner_or_affiliate_compensation_if agreement exists

  reserve:
    purpose:
      - refund_or_dispute_reserve_if policy defines

## 4. Fee Record Fields

fee_record_fields:
  - fee_id
  - order_id
  - listing_id
  - fee_type
  - rate_or_formula
  - asset
  - amount
  - destination
  - governance_reference_if any
  - status
  - reporting_period

## 5. Fee Governance Required For

governance_required_for:
  - marketplace_fee_change
  - treasury_fee_change
  - locked_credit_settlement_fee
  - reward_or_discount_subsidy
  - DEX_checkout_fee_policy
  - seller_or_buyer_fee_policy
  - partner_or_referral_commission_policy
  - public_fee_claims

## 6. Revenue Reporting

reporting_should_include:
  - gross_volume
  - net_revenue
  - marketplace_fees
  - treasury_fees
  - seller_payouts
  - refunds
  - credits_used
  - discounts
  - partner_commissions
  - payment_processing_costs
  - DEX_swap_costs_if any
  - liabilities
  - limitations

## 7. Fee Risks

risks:
  hidden_fees:
    description:
      - buyer_or_seller_does_not_understand_total_cost

  seller_net_confusion:
    description:
      - seller_does_not_understand_final_payout

  treasury_revenue_overclaim:
    description:
      - marketplace_fees_treated_as_guaranteed_revenue

  credit_subsidy_cost:
    description:
      - discounts_or_locked_credit_spending_create_treasury_cost

  fee_contract_mismatch:
    description:
      - docs_describe_fee_logic_not_implemented_in_contracts_or_backend

## 8. Public Documentation Guidance

The public Fees and Revenue page should:

- define fee types and routing;
- list fee records and governance triggers;
- explain reporting requirements and risks;
- avoid guaranteed revenue or token support language.
