# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: SUPERSETE-STYLE MODEL

[CRYPTODRAW_SUPERSETE_STYLE_MODEL]

## 1. Model Thesis

The SuperSete-style model is inspired by position-based or column-based digit matching games.

It should be documented as inspired by this mechanic, not as an official SuperSete product, affiliation, endorsement, or replica unless legally reviewed.

## 2. Conceptual Rules

conceptual_rules:
  selection:
    - user_selects_digits_or_numbers_for_defined_columns_or_positions

  draw_result:
    - draw_generates_one_result_per_column_or_position

  win_condition:
    - matches_are_counted_by_position

  prize_tiers:
    - prize_tiers_are_based_on_number_of_correct_positions

  payout:
    - tier_pool_split_or_rollover_defined_by_game_rules

status:
  - Draft / Needs Governance and Compliance Review

## 3. Parameters to Define

parameters:
  - number_of_columns
  - digit_or_number_range_per_column
  - selections_per_column
  - ticket_price
  - prize_tiers
  - minimum_matches_for_prize
  - prize_distribution_percentages
  - rollover_policy
  - claim_window
  - fee_policy
  - max_tickets_per_user_if any

## 4. Ticket Validation

validation_rules:
  - each_column_must_have_valid_selection
  - selections_must_match_allowed_range
  - multi_selection_per_column_if_supported_must_follow_rules
  - ticket_must_reference_game_model_version
  - invalid_ticket_must_not_enter_draw

## 5. Winner Calculation

winner_calculation:
  - compare_each_ticket_column_to_draw_result_column
  - count_correct_positions
  - map_correct_position_count_to_prize_tier
  - split_tier_pool_if_multiple_winners
  - apply_rollover_or_reserve_rule_if_no_winner
  - create_claim_records

## 6. Risk Notes

risks:
  positional_complexity:
    description:
      - users_may_misunderstand_column_based_matching

  legal_reference_risk:
    description:
      - similarity_to_existing_lottery_names_or_formats_requires caution

  payout_complexity:
    description:
      - tier_rules_must_be_exactly_defined_before draw

## 7. Public Documentation Guidance

The public SuperSete-style Model page should:

- explain positional matching;
- avoid official affiliation claims;
- define parameters to be approved;
- explain validation and winner calculation;
- include status and risk notes.
