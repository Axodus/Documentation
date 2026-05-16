# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: TREASURY AND FEES MODEL

[CRYPTODRAW_TREASURY_FEES]

## 1. Treasury Thesis

Lottery products create treasury implications through ticket revenue, prize pools, fees, reserves, unpaid prizes, refunds, sponsorships, and operational costs.

Treasury must be transparent, reportable, and governance-aligned.

## 2. Treasury Interfaces

interfaces:
  ticket_revenue:
    description:
      - payments_received_for_entries_if paid_entries_exist

  prize_pool:
    description:
      - amount_allocated_to_winners

  operating_fee:
    description:
      - fee_supporting_operations_if policy defines

  treasury_fee:
    description:
      - amount_allocated_to_treasury_if governance_approves

  reserve:
    description:
      - funds_set_aside_for_prize_or_operational_stability

  unclaimed_prizes:
    description:
      - prizes_not_claimed_before_deadline

  refunds:
    description:
      - amounts_returned_due_to_cancelled_draw_or policy condition

  sponsor_bonus:
    description:
      - promotional_or_partner_funded_prize_if approved

## 3. Fee Types

fee_types:
  platform_fee:
    purpose:
      - operations_and_maintenance

  treasury_fee:
    purpose:
      - ecosystem_sustainability_if governance approves

  prize_reserve_allocation:
    purpose:
      - reserve_or_rollover_policy

  VRF_or_network_cost:
    purpose:
      - cover_randomness_and_transaction_costs

  partner_or_sponsor_fee:
    purpose:
      - commercial_arrangement_if Business_policy defines

## 4. Treasury Record Fields

treasury_record_fields:
  - draw_id
  - gross_ticket_revenue
  - payment_assets
  - prize_pool
  - fees
  - treasury_allocation
  - reserve_allocation
  - VRF_or_network_costs
  - prizes_claimed
  - prizes_unclaimed
  - refunds
  - rollover_in
  - rollover_out
  - final_balance
  - governance_reference
  - report_reference

## 5. Treasury Review Required For

review_required_for:
  - prize_pool_formula_change
  - treasury_fee_change
  - reserve_policy_change
  - rollover_policy_change
  - sponsor_or_bonus_prize
  - guaranteed_pool_claim
  - refund_policy_change
  - real_money_or_token_payment_launch
  - unpaid_prize_policy

## 6. Treasury Risks

risks:
  prize_underfunding:
    description:
      - prize_claims_exceed_available_pool_due_to_error

  hidden_fees:
    description:
      - users_do_not_understand_fee_allocation

  unpaid_liability:
    description:
      - unclaimed_or_pending_prizes_not_reported

  refund_gap:
    description:
      - cancelled_draw_refunds_not_available_or unclear

  treasury_revenue_overclaim:
    description:
      - lottery_fees_presented_as_guaranteed_revenue

## 7. Public Documentation Guidance

The public Treasury and Fees page should:

- explain ticket revenue, prize pools, fees, reserves, unclaimed prizes, and refunds;
- define treasury record fields;
- list review triggers and risks;
- avoid guaranteed revenue language.
