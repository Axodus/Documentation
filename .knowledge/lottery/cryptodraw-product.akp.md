# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: CRYPTODRAW PRODUCT MODEL

[CRYPTODRAW_PRODUCT_MODEL]

## 1. Product Definition

product_name:
  - CryptoDraw

definition:
  - CryptoDraw is the Axodus blockchain lottery and draw product concept, designed to provide transparent number-combination games with verifiable randomness, auditable ticket records, deterministic prize rules, and accountable settlement.

product_status:
  current_default:
    - Draft / Advanced Concept
  documentation_rule:
    - Do not describe CryptoDraw as live, licensed, or available unless implementation and compliance status confirm it.

## 2. Product Goals

goals:
  - create_web3_lottery_experience_with_transparency
  - support_multiple_game_modes
  - use_verifiable_randomness
  - reduce_trust_assumptions_with_public_records
  - support_soulbound_or_non_transferable_ticket_design_if selected
  - support_large_ticket_sets_with_indexing_and_Merkle_roots_if needed
  - define_clear_prize_tiers_and_claims
  - provide_public_draw_reports
  - align_game_parameters_with_governance
  - protect_users_with_responsible_participation_language

## 3. Product Modules

modules:
  Game_Mode_Registry:
    responsibilities:
      - store_or_define_game_rules
      - version_game_parameters
      - activate_or_deprecate_modes

  Draw_Manager:
    responsibilities:
      - create_rounds
      - open_close_ticket_window
      - request_randomness
      - execute_draw
      - publish_results

  Ticket_Manager:
    responsibilities:
      - create_or_record_tickets
      - validate_ticket_selections
      - enforce_ticket_status
      - support_soulbound_ticket_model_if selected

  Randomness_Module:
    responsibilities:
      - request_and_verify_randomness
      - connect_to_VRF_or_equivalent
      - handle_randomness_failure

  Indexing_Module:
    responsibilities:
      - index_tickets
      - generate_Merkle_roots
      - support_winner_verification_if needed

  Prize_Manager:
    responsibilities:
      - calculate_prize_tiers
      - allocate_pool
      - support_claims
      - handle_unclaimed_prizes

  Treasury_Module:
    responsibilities:
      - receive_ticket_payments_if applicable
      - route_fees
      - hold_or_account_prize_pool
      - report_prize_and_fee flows

  Governance_Module:
    responsibilities:
      - approve_game_modes
      - approve_parameters
      - control_pauses_and_changes

  Reporting_Module:
    responsibilities:
      - produce_draw_prize_ticket_randomness_and_treasury_reports

## 4. User-Facing Flow

user_flow:
  - user_reads_game_rules_and_disclosures
  - user_checks_availability_and_restrictions_if implemented
  - user_selects_game_mode
  - user_selects_numbers_or_uses_random_pick_if supported
  - system_validates_ticket_selection
  - user_reviews_ticket_cost_prize_rules_and_deadline
  - user_confirms_ticket_purchase_or_entry
  - ticket_record_created
  - ticket_waits_for_draw
  - draw_result_published
  - user_checks_winner_status
  - user_claims_prize_if eligible_and_within_window
  - draw_report_remains_available

## 5. Product Statuses

statuses:
  Concept:
    meaning:
      - product_design_exists_but_no_implementation

  Specification:
    meaning:
      - detailed_rules_and_architecture_are_being_written

  Prototype:
    meaning:
      - limited_test_or_demo_exists

  Testnet:
    meaning:
      - deployed_for_testing_only

  Compliance_Review:
    meaning:
      - legal_or_operational_review_needed_before_public_use

  Governance_Review:
    meaning:
      - waiting_for_governance_approval

  Paused:
    meaning:
      - product_or_draw_temporarily_disabled

  Active:
    meaning:
      - live_under_approved_scope

  Deprecated:
    meaning:
      - no_longer_current

## 6. Product Risks

risks:
  legal_availability:
    description:
      - lottery_products_may_require_licenses_or_restrictions

  randomness_failure:
    description:
      - VRF_or_randomness_source_can_fail_or_be_delayed

  smart_contract_risk:
    description:
      - contracts_holding_tickets_or_prizes_can_have_vulnerabilities

  prize_accounting_error:
    description:
      - payout_calculation_or_claim_logic_can_be_wrong

  user_misunderstanding:
    description:
      - users_may_misread_odds_costs_or_claim_windows

  operational_delay:
    description:
      - draw_or_claim_process_can_be_delayed_by_network_or_ops_issue

## 7. Public Documentation Guidance

The public CryptoDraw page should:

- define CryptoDraw;
- state product status;
- describe modules and user flow;
- list product statuses and risks;
- avoid launch, licensing, winning, or profit claims unless verified.
