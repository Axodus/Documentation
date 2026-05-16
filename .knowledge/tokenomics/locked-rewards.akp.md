# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: LOCKED REWARDS MODEL

[AXODUS_TOKENOMICS_LOCKED_REWARDS]

## 1. Locked Rewards Thesis

Locked Rewards are central to making Academy incentives sustainable.

They allow Axodus to reward free learning without necessarily creating immediately transferable market assets.

Locked Rewards may support internal utility such as Marketplace spending, product access, discounts, or governance participation only if policy and contracts explicitly allow it.

## 2. Definition

locked_rewards:
  definition:
    - reward_balances_restricted_by_contract_or_accounting_from_free_transfer_with_defined_internal_utility_or_unlock_rules_if_any

locked_rewards_are_not:
  - automatically_liquid_tokens
  - guaranteed_income
  - guaranteed_unlock
  - automatically_voting_power
  - freely_tradable_unless_unlocked
  - final_feature_without_contract_validation

## 3. Purpose

purpose:
  - reduce_reward_farming_incentive
  - reduce_immediate_sell_pressure
  - support_free_course_rewards
  - preserve_internal_platform_utility
  - create_progressive_user_onboarding
  - connect_Academy_to_Marketplace_and_product_access
  - allow_governance_to_define_unlock_or_use_rules

## 4. Locked Reward Statuses

statuses:
  Proposed:
    meaning:
      - locked_reward_model_requested_not_approved

  Issued_Locked:
    meaning:
      - reward_record_created_with_restrictions

  Internal_Use_Only:
    meaning:
      - usable_inside_Axodus_only_if_enforced

  Marketplace_Eligible:
    meaning:
      - can_be_spent_on_marketplace_items_if_policy_and_contract_allow

  Access_Eligible:
    meaning:
      - can_count_toward_access_rule_if_policy_allows

  Governance_Eligible:
    meaning:
      - can_contribute_to_governance_if_governance_and_contracts_allow

  Unlock_Pending:
    meaning:
      - has_conditions_for_future_unlock_not_met

  Unlocked:
    meaning:
      - restrictions_removed_if_policy_and_contract_allow

  Spent:
    meaning:
      - consumed_for_internal_utility

  Revoked:
    meaning:
      - removed_due_to_abuse_if_policy_supports

  Expired:
    meaning:
      - no_longer_valid_for_specific_utility_if_policy_defines

## 5. Same-Token Locked Design

same_token_locked_design:
  thesis:
    - Prefer_using_$Neurons_as_the_core_token_with_locked_and_unlocked_states_over_creating_unnecessary_second_token_fragmentation.
    - Same-token design can preserve ecosystem coherence.
    - However transfer restrictions require contract-level enforcement or trusted platform accounting.

possible_patterns:
  locked_balance_contract:
    description:
      - rewards_held_or_tracked_in_contract_and_spendable_only_through_allowed_functions

  internal_credit_accounting:
    description:
      - platform_records_internal_use_balance
    warning:
      - less_on_chain_transparency_unless_audited_or_reported

  dual_balance_token_model:
    description:
      - same_token_system_has_locked_and_unlocked_balance_accounting
    warning:
      - custom_contract_complexity

  voucher_or_credit_model:
    description:
      - reward_represented_as_claim_or_platform_credit_not_liquid_token

  soulbound_credit:
    description:
      - non_transferable_learning_credit_or_attestation

documentation_rule:
  - Do not document a final architecture until selected and validated.
  - Explain same-token locked design as preferred conceptual direction if appropriate.

## 6. Unlock Conditions

possible_unlock_conditions:
  - paid_course_completion
  - higher_Proof_of_Knowledge
  - time_based_vesting
  - marketplace_spend_conversion
  - governance_approved_milestone
  - identity_or_anti_sybil_check_if_policy_requires
  - no_unlock_internal_use_only

unlock_policy_fields:
  - unlock_type
  - trigger
  - amount_or_percentage
  - delay_if_any
  - required_certification
  - required_action
  - maximum_unlock
  - expiration
  - governance_status
  - contract_reference

## 7. Internal Utility

internal_utility_options:
  Marketplace:
    - purchase_courses_if_supported
    - discount_learning_products_if_supported
    - restricted_catalog_spend_if_supported

  Academy:
    - unlock_additional_courses_if_supported
    - certification_fee_discount_if_supported

  Product_Access:
    - count_toward_access_threshold_if_policy_allows

  Governance:
    - participate_or_signal_if_policy_and_contracts_allow
    warning:
      - high_sybil_and_capture_risk

## 8. Marketplace Settlement Questions

settlement_questions:
  - If_user_spends_locked_rewards_who_receives_value?
  - Does_tutor_receive_unlocked_$Neurons?
  - Does_platform_absorb_or_convert_locked_credit?
  - Are_locked_rewards_burned_when_spent?
  - Are_locked_rewards_transfered_to_treasury?
  - Can_locked_rewards_buy_third_party_courses?
  - Are_refunds_allowed?
  - Are_spend_limits_required?
  - Is_settlement_on_chain_or_internal?
  - How_is_spending_reported?

documentation_rule:
  - Do not claim final Marketplace locked reward behavior until these questions are answered.

## 9. Governance Participation Questions

governance_questions:
  - Can_locked_rewards_vote?
  - Do_locked_rewards_count_fully_or_partially?
  - Are_caps_required?
  - Is_quadratic_voting_used?
  - Is_Proof_of_Knowledge_required?
  - Are_sybil_controls_required?
  - Can_locked_rewards_create_proposals?
  - Can_governance_eligibility_be_revoked_if_abuse_detected?

documentation_rule:
  - Do not claim governance power for locked rewards without governance and contract approval.

## 10. Locked Reward Risks

risks:
  unenforced_lock:
    description:
      - restriction_claim_exists_but_contract_cannot_enforce_it

  user_confusion:
    description:
      - users_do_not_understand_internal_vs_transferable_balance

  reward_farming:
    description:
      - users_farm_free_courses_to_collect_internal_utility

  marketplace_abuse:
    description:
      - locked_rewards_used_to_extract_tutor_or_platform_value

  governance_capture:
    description:
      - locked_rewards_create_voting_power_for_sybil_accounts

  contract_complexity:
    description:
      - custom_locked_balance_logic_increases_security_risk

## 11. Public Documentation Guidance

The public Locked Rewards page should:

- define locked rewards;
- explain why they exist;
- distinguish locked, internal-use, marketplace-eligible, governance-eligible, unlocked, spent, revoked, and expired;
- explain same-token locked design concept;
- list implementation patterns as possible/planned unless validated;
- include settlement and governance questions;
- avoid claiming transferability, unlock, voting, or spend behavior unless implemented.
