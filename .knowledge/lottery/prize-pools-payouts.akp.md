# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: PRIZE POOLS AND PAYOUTS MODEL

[CRYPTODRAW_PRIZE_POOLS_PAYOUTS]

## 1. Prize Thesis

Prize pools and payout rules must be transparent before users enter a draw.

Users must know what portion goes to prizes, fees, reserves, rollovers, and other destinations.

Prize rules must be deterministic and versioned.

## 2. Prize Pool Concepts

concepts:
  prize_pool:
    definition:
      - total_amount_available_for_prizes_for_specific_draw_after_defined_rules

  gross_ticket_revenue:
    definition:
      - total_entry_payments_before_fees_or_allocations_if paid_entries_exist

  net_prize_pool:
    definition:
      - amount_available_for_prizes_after_fees_or_allocations_if policy defines

  prize_tier:
    definition:
      - reward_category_based_on_match_or_win_condition

  rollover:
    definition:
      - unawarded_or_unclaimed_prize_amount_moved_to_future_draw_or reserve_if policy defines

  reserve:
    definition:
      - amount_set_aside_for_prize_stability_operations_or policy-defined purpose

  guaranteed_pool:
    definition:
      - fixed_prize_commitment_if funded_and_approved
    warning:
      - do_not_use_unless treasury_and_legal_review_support

## 3. Prize Pool Formula Fields

formula_fields:
  - draw_id
  - gross_revenue
  - prize_pool_percentage
  - operating_fee_percentage
  - treasury_fee_percentage
  - reserve_percentage
  - rollover_in
  - rollover_out
  - sponsor_or_bonus_amount_if any
  - net_prize_pool
  - tier_distribution
  - rounding_policy
  - unclaimed_prize_policy

## 4. Prize Tier Object

prize_tier_fields:
  - tier_id
  - game_model_id
  - win_condition
  - tier_pool_percentage
  - fixed_amount_if any
  - winner_count
  - payout_per_winner
  - rollover_rule
  - claim_deadline
  - status

## 5. Payout Models

payout_models:
  pari_mutuel:
    description:
      - tier_pool_split_among_all_winners_in_tier

  fixed_prize:
    description:
      - predefined_amount_per_winner_if funded_and_policy_supports

  hybrid:
    description:
      - mix_of_fixed_minimum_and_pool_split_if approved

  rollover_based:
    description:
      - unawarded_amount_moves_to_future_draw_or reserve

  promotional_prize:
    description:
      - sponsored_or_non-cash_prize_if legal_and_policy support

## 6. Rounding and Dust

rounding_policy_questions:
  - How_are_fractional_amounts_handled?
  - Is_dust_sent_to_treasury_reserve_or_rollover?
  - Is_rounding_applied_per_winner_or_per_tier?
  - How_is_rounding_reported?

## 7. Public Documentation Guidance

The public Prize Pools and Payouts page should:

- define prize pool concepts;
- list formula fields and tier fields;
- explain payout models;
- explain rounding and rollover questions;
- avoid promising prizes that are not funded or approved.
