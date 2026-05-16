# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: POOLS, HASHRATE AND NETWORK DIFFICULTY MODEL

[AXODUS_MINING_POOLS_HASHRATE_DIFFICULTY]

## 1. Thesis

Mining rewards depend heavily on hashrate, network difficulty, block rewards, pool performance, and payout method.

Users and treasury reviewers must understand that hashrate does not guarantee a fixed payout.

## 2. Core Concepts

concepts:
  hashrate:
    definition:
      - computational_power_contributed_to_mining_network_or_pool

  network_difficulty:
    definition:
      - measure_of_how_difficult_it_is_to_mine_blocks_on_network

  block_reward:
    definition:
      - reward_paid_by_network_for_valid_block_or_equivalent_event

  transaction_fees:
    definition:
      - network_fees_that_may_be_included_in_mining_rewards

  mining_pool:
    definition:
      - group_of_miners_combining_hashrate_and_sharing_rewards_by_pool_rules

  pool_fee:
    definition:
      - fee_charged_by_pool_for_participation

  payout_method:
    definition:
      - formula_used_by_pool_to_distribute_rewards

## 3. Pool Payout Methods

payout_methods:
  PPS:
    description:
      - pay_per_share_model_with_more_predictable_pool_payout_but_pool_fee_or_risk_may differ

  PPLNS:
    description:
      - pay_per_last_n_shares_model_more_dependent_on_pool_block_finding_variance

  FPPS:
    description:
      - full_pay_per_share_including_fee_component_if pool supports

  Solo:
    description:
      - reward_only_if_miner_finds_block
    warning:
      - high_variance

  Custom:
    description:
      - pool_specific_method_must_be_documented

## 4. Pool Account Fields

pool_account_fields:
  - pool_id
  - network
  - pool_name
  - payout_method
  - pool_fee
  - worker_ids
  - payout_address
  - minimum_payout
  - hashrate_reported
  - stale_share_rate
  - rejected_share_rate
  - payout_frequency
  - status
  - risk_notes

## 5. Hashrate Reporting Fields

hashrate_report_fields:
  - period
  - expected_hashrate
  - actual_hashrate
  - average_hashrate
  - peak_hashrate
  - pool_reported_hashrate
  - local_reported_hashrate
  - stale_shares
  - rejected_shares
  - downtime
  - variance_notes

## 6. Difficulty and Reward Sensitivity

sensitivity_factors:
  - network_difficulty_increase_reduces_expected_rewards_if_hashrate_constant
  - block_reward_changes_affect_output
  - asset_price_changes_affect_fiat_value
  - pool_luck_affects_short_term_results
  - pool_fee_reduces_gross_rewards
  - stale_or_rejected_shares_reduce_effective_hashrate
  - downtime_reduces_rewards

## 7. Public Documentation Guidance

The public Pools, Hashrate and Network Difficulty page should:

- define hashrate, difficulty, block rewards, pools, fees, and payout methods;
- define pool and hashrate report fields;
- explain sensitivity factors;
- state hashrate does not guarantee fixed payouts.
