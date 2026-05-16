# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: GAME MODELS

[CRYPTODRAW_GAME_MODELS]

## 1. Game Model Thesis

A CryptoDraw game model defines how users select entries, how results are generated, how winners are classified, and how prizes are allocated.

Game models must be deterministic, versioned, and auditable.

## 2. Game Model Object

game_model_fields:
  - game_model_id
  - name
  - version
  - status
  - selection_type
  - number_range
  - selection_count
  - columns_or_positions_if any
  - ticket_price_or_entry_cost
  - max_tickets_per_user_if any
  - draw_frequency_or_schedule
  - randomness_method
  - prize_tiers
  - prize_distribution_formula
  - fee_policy
  - claim_window
  - rollover_policy
  - refund_policy
  - jurisdiction_or_restriction_policy
  - governance_status
  - security_review_status

## 3. Game Model Types

game_model_types:
  combination_match:
    description:
      - user_selects_set_of_numbers_and_winners_are_determined_by_number_of_matches

  positional_digit:
    description:
      - user_selects_digits_or_numbers_by_position_and_winners_are_determined_by_positional_matches

  random_pick:
    description:
      - system_generates_user_selection_if supported

  multi_ticket_batch:
    description:
      - user_enters_multiple_combinations_in_one purchase_if supported

  promotional_free_entry:
    description:
      - entry_without_direct_payment_if legal_and_policy allow
    warning:
      - still_requires_abuse_and_compliance_review

## 4. Rule Requirements

rule_requirements:
  - selection_rules_must_be_clear
  - invalid_selections_must_be_rejected
  - draw_result_generation_must_be_deterministic_from_randomness
  - prize_tiers_must_be_defined_before_draw
  - fee_and_prize_pool_rules_must_be_defined_before_ticket_window opens
  - claim_window_must_be_defined
  - rule_version_must_be_associated_with_each_draw
  - rule_changes_must_not_affect_closed_draws

## 5. Game Model Lifecycle

lifecycle:
  - concept
  - draft_rules
  - simulation
  - risk_review
  - compliance_review
  - security_review_if contract_dependent
  - governance_approval
  - testnet_or_pilot
  - active_under_scope
  - paused_or_deprecated

## 6. Public Documentation Guidance

The public Game Models page should:

- explain what a game model is;
- define game model fields;
- list types and rule requirements;
- explain lifecycle;
- link to Lotofácil-style, SuperSete-style, Draw Lifecycle, Prize Pools, and Risk.
