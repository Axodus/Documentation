# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: REWARDS AND PAYOUTS MODEL

[AXODUS_MINING_REWARDS_PAYOUTS]

## 1. Rewards Thesis

Mining rewards and payouts must be accounted for carefully.

Gross rewards are not net profit.

Rewards may be reduced by pool fees, infrastructure costs, energy costs, maintenance, treasury fees, payout thresholds, conversion costs, taxes, and volatility.

## 2. Reward Sources

reward_sources:
  PoW_mining:
    description:
      - block_rewards_or_pool_payouts_from_proof_of_work_mining

  pool_rewards:
    description:
      - mining_pool_distribution_based_on_pool_method

  validator_rewards:
    description:
      - rewards_from_validator_or_delegation_activity

  transaction_fees:
    description:
      - network_fees_included_in_mining_or_validator_rewards_if applicable

  incentive_rewards:
    description:
      - external_or_internal incentives_if approved

  promotional_rewards:
    description:
      - campaign_rewards_if policy allows

## 3. Reward Record Fields

reward_record_fields:
  - reward_id
  - period
  - source
  - network
  - asset
  - gross_reward
  - pool_fee
  - validator_commission_if any
  - infrastructure_cost_allocation
  - energy_cost_allocation
  - maintenance_cost_allocation
  - treasury_fee_or_allocation_if any
  - net_amount_estimate
  - payout_status
  - wallet_or_account_reference
  - report_reference

## 4. Payout Models

payout_models:
  treasury_retained:
    description:
      - mined_rewards_retained_by_treasury_under_policy

  user_share:
    description:
      - rewards_allocated_to_user_based_on_product_rules

  subscription_offset:
    description:
      - rewards_reduce_subscription_or_service_cost_if policy defines

  internal_credit:
    description:
      - rewards_recorded_as_internal_balance_or_credit_if policy defines

  direct_wallet_payout:
    description:
      - payout_to_user_wallet_if approved_and_supported

  manual_review_payout:
    description:
      - payout_requires_review_if threshold_or_dispute

## 5. Payout Fields

payout_fields:
  - payout_id
  - user_or_treasury_reference
  - reward_record_ids
  - asset
  - gross_amount
  - fees
  - net_amount
  - payout_method
  - destination
  - minimum_payout_threshold
  - payout_status
  - transaction_reference
  - timestamp
  - report_reference

## 6. Payout Statuses

payout_statuses:
  Accruing:
    meaning:
      - rewards_accumulating_below_threshold_or_period

  Pending:
    meaning:
      - payout_scheduled_or_under_review

  Approved:
    meaning:
      - payout_authorized

  Paid:
    meaning:
      - payout_completed

  Failed:
    meaning:
      - payout_attempt_failed

  Held:
    meaning:
      - payout_paused_due_to_review_policy_or_threshold

  Disputed:
    meaning:
      - payout_under_dispute

  Expired:
    meaning:
      - payout_or_claim_no_longer_valid_if policy defines

## 7. Public Documentation Guidance

The public Rewards and Payouts page should:

- define reward sources;
- distinguish gross rewards from net amounts;
- list reward and payout fields;
- define payout models and statuses;
- state payouts are variable and subject to rules.
