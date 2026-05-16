# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: LOTOFACIL-STYLE MODEL

[CRYPTODRAW_LOTOFACIL_STYLE_MODEL]

## 1. Model Thesis

The Lotofácil-style model is inspired by combination-based number matching games.

It should be documented as inspired by this mechanic, not as an official Lotofácil product, affiliation, endorsement, or replica unless legally reviewed.

## 2. Conceptual Rules

conceptual_rules:
  selection:
    - user_selects_a_defined_count_of_numbers_from_a_defined_range

  draw_result:
    - draw_generates_a_defined_count_of_winning_numbers_from_same_range

  win_condition:
    - ticket_matches_are_counted_against_draw_result

  prize_tiers:
    - prize_tiers_are_based_on_number_of_matches

  payout:
    - prize_distribution_formula_allocates_pool_to_tiers

status:
  - Draft / Needs Governance and Compliance Review

## 3. Parameters to Define

parameters:
  - number_range_min
  - number_range_max
  - numbers_per_ticket
  - numbers_drawn
  - ticket_price
  - max_extra_numbers_if supported
  - prize_tiers
  - prize_distribution_percentages
  - rollover_policy
  - claim_window
  - fee_policy
  - max_tickets_per_user_if any

## 4. Ticket Validation

validation_rules:
  - selected_numbers_must_be_unique
  - selected_numbers_must_be_within_range
  - selected_count_must_match_game_rules_or_allowed_variation
  - ticket_must_be_created_before_draw_close
  - ticket_must_reference_game_model_version
  - invalid_ticket_must_not_enter_draw

## 5. Winner Calculation

winner_calculation:
  - compare_ticket_numbers_to_drawn_numbers
  - count_matches
  - map_match_count_to_prize_tier
  - if_tier_has_multiple_winners_split_tier_pool_by_rule
  - if_no_winner_for_tier_apply_rollover_or_reserve_rule
  - create_claim_records

## 6. Risk Notes

risks:
  user_confusion:
    description:
      - users_may_assume_exact_same_rules_as_public_lottery

  legal_reference_risk:
    description:
      - naming_or_similarity_can_create_brand_or_regulatory_issue

  prize_pool_complexity:
    description:
      - multiple_tiers_and_rollovers_require_precise accounting

## 7. Public Documentation Guidance

The public Lotofácil-style Model page should:

- state it is inspired by combination matching mechanics;
- avoid official affiliation claims;
- define parameters to be approved;
- explain validation and winner calculation;
- include status and risk notes.
