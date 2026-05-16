# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: GOVERNANCE PARTICIPATION MODEL

[AXODUS_TOKENOMICS_GOVERNANCE_PARTICIPATION]

## 1. Governance Participation Thesis

`$Neurons` may support governance participation, but token-based governance must be designed carefully.

Governance participation cannot be assumed from token ownership alone unless the governance system, contracts, and policies define it.

Locked rewards are especially sensitive. If free-course locked rewards can vote, reward farming can become governance capture.

## 2. Governance Participation Use Cases

use_cases:
  voting:
    description:
      - token_or_eligible_balance_contributes_to_vote_if_governance_defines

  proposal_creation:
    description:
      - token_or_status_threshold_required_to_create_proposal_if_defined

  signaling:
    description:
      - token_or_reward_status_used_for_non-binding_preference_signal_if_defined

  delegation:
    description:
      - token_holder_delegates_voting_power_if_supported

  reputation_hybrid:
    description:
      - token_balance_combined_with_Proof_of_Knowledge_or_reputation_if_defined

  product_governance:
    description:
      - eligible_users_participate_in_product_parameter_or_access_decisions_if policy_defines

## 3. Governance Eligibility Fields

eligibility_fields:
  - eligibility_rule_id
  - governance_layer
  - eligible_asset_or_status
  - minimum_balance_if_any
  - locked_rewards_allowed
  - locked_reward_weight_if_any
  - certification_required
  - DAO_status_required
  - delegation_allowed
  - quadratic_or_sublinear_weighting
  - caps_or_limits
  - anti_sybil_requirements
  - contract_reference
  - governance_status

## 4. Locked Rewards and Governance

locked_rewards_governance_policy:
  default_position:
    - Do_not_assume_locked_rewards_have_governance_power.

possible_models:
  no_governance_power:
    description:
      - locked_rewards_have_internal_utility_but_do_not_vote

  signaling_only:
    description:
      - locked_rewards_can_participate_in_non_binding_signals

  capped_weight:
    description:
      - locked_rewards_count_with_limit

  reduced_weight:
    description:
      - locked_rewards_count_less_than_unlocked_tokens

  Proof_of_Knowledge_required:
    description:
      - locked_rewards_only_count_if_user_passes_academy_validation

  quadratic_weight:
    description:
      - voting_power_scales_sublinearly_if_governance_defines

  unlock_before_voting:
    description:
      - only_unlocked_rewards_can_vote

documentation_rule:
  - Do not document any model as active unless governance and contracts confirm it.

## 5. Governance Layer Mapping

governance_layers:
  Executive_DAO:
    participation_note:
      - may_have_restricted_role_based_participation
    tokenomics_warning:
      - do_not_claim_$Neurons_direct_control_unless_defined

  Boardroom_Council:
    participation_note:
      - may_use_threshold_reputation_or_seat_model_if_defined
    tokenomics_warning:
      - historical_thresholds_must_be_marked_draft_unless_verified

  Community_DAO:
    participation_note:
      - likely_user_facing_participation_layer
    tokenomics_warning:
      - quadratic_voting_or_token_weighting_must_be_implemented_before_claimed

  Local_DAO:
    participation_note:
      - local_DAOs_may_have_custom_rules_or_plugins
    tokenomics_warning:
      - local_rules_must_align_with_constitution_for_official_Axodus_integration

## 6. Governance Risks

risks:
  token_whale_dominance:
    description:
      - large_holders_dominate_outcomes

  reward_farming_capture:
    description:
      - farmed_rewards_create_governance_influence

  sybil_attack:
    description:
      - one_actor_uses_many_accounts

  low_information_voting:
    description:
      - participants_vote_without_understanding_proposals

  credential_gatekeeping:
    description:
      - Proof_of_Knowledge_or_reputation_requirements_can_exclude_legitimate_users_if poorly_designed

  contract_snapshot_mismatch:
    description:
      - voting_power_calculation_mismatches_token_or_locked_balance_state

  governance_complexity:
    description:
      - users_do_not_understand_voting_rules

## 7. Controls

controls:
  - clear_governance_eligibility_rules
  - snapshot_definitions
  - anti_sybil_controls_if_needed
  - caps_on_locked_reward_weight_if_used
  - Proof_of_Knowledge_for_sensitive_participation_if_policy_defines
  - quadratic_or_reputation_hybrid_models_if_governance_approves
  - delegation_transparency
  - proposal_education_through_Academy
  - execution_receipts_and_accountability

## 8. Governance Required For

governance_required_for:
  - enabling_$Neurons_voting_power
  - allowing_locked_rewards_to_vote
  - changing_vote_weight_formula
  - changing_proposal_thresholds
  - adding_quadratic_voting
  - adding_reputation_or_certification_gate
  - changing_DAO_federation_access_rules
  - changing_product_governance_rules

## 9. Public Documentation Guidance

The public Governance Participation page should:

- explain possible `$Neurons` governance roles;
- avoid claiming final voting mechanics unless verified;
- explain locked reward governance risk;
- list possible models with status caveats;
- connect to Governance docs, Academy Proof of Knowledge, and Risk.
