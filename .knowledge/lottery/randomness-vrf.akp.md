# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: RANDOMNESS AND VRF MODEL

[CRYPTODRAW_RANDOMNESS_VRF]

## 1. Randomness Thesis

Lottery fairness depends on randomness that users can trust.

CryptoDraw should use verifiable randomness, such as Chainlink VRF or an equivalent mechanism, where possible.

If randomness is not yet implemented or verified, public docs must state the planned status clearly.

## 2. Randomness Requirements

requirements:
  - randomness_source_must_be_defined_before_draw
  - randomness_request_must_happen_after_ticket_close
  - randomness_result_must_be_auditable
  - draw_result_derivation_must_be_deterministic
  - randomness_failure_policy_must_be_defined
  - no_operator_should_be_able_to_choose_or_manipulate_result
  - randomness_receipt_should_be_included_in_draw_report

## 3. VRF Concepts

concepts:
  VRF:
    definition:
      - verifiable_random_function_that_generates_randomness_with_proof

  randomness_request:
    definition:
      - onchain_or_protocol_request_for_random_value

  fulfillment:
    definition:
      - delivery_of_random_value_and_proof

  callback:
    definition:
      - contract_function_receiving_randomness

  seed_or_random_word:
    definition:
      - random_value_used_to_derive_draw_result

  proof:
    definition:
      - cryptographic_evidence_that_randomness_was_generated_correctly

## 4. VRF Flow

VRF_flow:
  - ticket_window_closes
  - draw_manager_locks_ticket_set
  - randomness_request_submitted
  - VRF_provider_generates_randomness
  - randomness_fulfilled_to_contract
  - draw_result_derived_from_randomness_and_game_rules
  - result_published_with_randomness_reference
  - report_records_randomness_source_and_receipt

## 5. Result Derivation

result_derivation_rules:
  - random_value_must_be_mapped_to_valid_game_result_space
  - mapping_must_avoid_bias_where_possible
  - duplicate_numbers_must_be_handled_deterministically
  - positional_games_must_map_randomness_to_each_position
  - derivation_algorithm_must_be_versioned
  - derivation_must_be_reproducible_by_reviewers

## 6. Randomness Failure

failure_scenarios:
  - VRF_request_fails
  - VRF_callback_fails
  - network_outage
  - insufficient_subscription_or_fee
  - contract_pause
  - randomness_delay
  - invalid_or_unverified_randomness_response

failure_policy_options:
  - retry_request
  - delay_draw
  - cancel_and_refund
  - governance_review
  - emergency_pause

documentation_rule:
  - Failure policy must be defined before draw launch.

## 7. Public Documentation Guidance

The public Randomness and VRF page should:

- explain why randomness matters;
- define VRF concepts;
- describe VRF flow and result derivation;
- explain failure scenarios and policy options;
- avoid claiming VRF is active unless implemented and verified.
