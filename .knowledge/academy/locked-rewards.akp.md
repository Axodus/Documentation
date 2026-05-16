# AXODUS KNOWLEDGE PACK
# DOMAIN: ACADEMY
# TYPE: LOCKED REWARDS MODEL

[AXODUS_LOCKED_REWARDS]

## 1. Definition

Locked Rewards are reward balances that may be issued through Academy learning flows but are restricted in how they can be transferred, withdrawn, sold, or used.

The primary design motivation is to allow free-course users to receive educational rewards without immediately creating liquid sell pressure, reward farming incentives, or speculative abuse.

Locked Rewards may still have internal utility if implemented correctly.

## 2. Important Caution

Locked Reward behavior must match implementation.

Documentation must not state that a reward is non-transferable, marketplace-spendable, voting-enabled, or unlockable unless the smart contracts, platform accounting, or governance policy actually support that behavior.

If behavior is not finalized, write:

- "designed to support"
- "may support"
- "planned"
- "requires contract validation"
- "subject to governance approval"

## 3. Purpose

purpose:
  - support_free_education_rewards
  - reduce_immediate_market_dumping
  - reduce_reward_farming_incentive
  - preserve_token_utility_inside_platform
  - connect_learning_to_marketplace_governance_or_access
  - allow_progressive_unlock_or_internal_consumption_if_policy_supports

## 4. Locked Reward Use Cases

possible_use_cases:
  marketplace_spending:
    description:
      - locked_rewards_may_be_used_to_purchase_courses_products_or_services_inside_marketplace_if_supported

  course_access:
    description:
      - locked_rewards_may_be_used_to_unlock_additional_courses_or_discount_paid_courses_if supported

  governance_participation:
    description:
      - locked_rewards_may_have_governance_participation_utility_if_policy_and_contract_support
    warning:
      - must_consider_vote_farming_and_governance_capture

  product_access:
    description:
      - locked_rewards_may_count_toward_access_requirements_for certain_products_if_supported

  reputation_signal:
    description:
      - locked_rewards_may_signal_learning_progress_but_should_not_replace Proof_of_Knowledge

  unlock_pathway:
    description:
      - rewards_may_unlock_after_conditions_if_defined
    examples:
      - paid_upgrade
      - time_lock
      - certification_level
      - governance_approved_milestone
      - KYC_or_anti_sybil_requirement_if_policy_requires

## 5. Locked Reward Statuses

locked_reward_statuses:
  Locked:
    meaning:
      - reward_exists_but_transfer_or_withdrawal_restricted

  Internal_Use_Only:
    meaning:
      - reward_can_only_be_used_inside_Axodus_platform

  Marketplace_Eligible:
    meaning:
      - reward_can_be_spent_on_marketplace_items_if_supported

  Governance_Eligible:
    meaning:
      - reward_can_contribute_to_governance_participation_if policy_supports

  Product_Access_Eligible:
    meaning:
      - reward_counts_toward_access_requirement_if policy_supports

  Unlock_Pending:
    meaning:
      - reward_has_defined_unlock_conditions_not_met

  Unlocked:
    meaning:
      - restrictions_removed_if_contract_or_policy_allows

  Revoked:
    meaning:
      - reward_removed_due_to_abuse_or_invalid_completion_if_supported

  Expired:
    meaning:
      - reward_no_longer_valid_for_specific_utility_if_policy_defines_expiration

## 6. Implementation Patterns

implementation_patterns:
  contract_lock:
    description:
      - tokens_are_minted_or_held_in_contract_with_restrictions
    benefits:
      - stronger_on_chain_enforcement
    risks:
      - contract_complexity
      - integration_complexity
      - audit_requirement

  internal_credit:
    description:
      - platform_tracks_internal_reward_credit
    benefits:
      - simpler_initial_product_iteration
    risks:
      - trust_assumption
      - less_on_chain_transparency

  same_token_dual_balance:
    description:
      - same_$Neurons_system_distinguishes_locked_and_unlocked_balances
    benefits:
      - avoids_second_token_fragmentation
    risks:
      - custom_token_logic_complexity

  voucher_or_credit_contract:
    description:
      - locked_rewards_represent_claim_or_spend_right_inside_Axodus
    benefits:
      - flexible_internal_utility
    risks:
      - must_be_clearly_explained_to_users

  soulbound_credit:
    description:
      - non-transferable_credential_or_credit_represents_learning_reward
    benefits:
      - reduces_market_abuse
    risks:
      - may_not_be_equivalent_to_token_balance

## 7. Same Token vs Second Token

same_token_approach:
  benefits:
    - preserves_$Neurons_as_single_ecosystem_asset
    - avoids_confusing_users_with_multiple_reward_tokens
    - allows_unified_utility_design
    - supports_locked_and_unlocked_accounting_if_contracts_allow

  risks:
    - transfer_restrictions_are_harder_with_standard_ERC20
    - integrations_must_respect_locked_balance
    - DEX_liquidity_cannot_distinguish_locked_tokens_without_contract_design
    - wallet_UI_may_not_show_locked_status_clearly

second_token_approach:
  benefits:
    - easier_to_distinguish_internal_credit
    - may_reduce_transferability_confusion
  risks:
    - fragments_economy
    - creates_more_tokenomics_complexity
    - users_may_misunderstand_relation_to_$Neurons
    - may_weaken_core_token_utility

current_recommendation_semantic:
  - Prefer_documenting_locked_rewards_as_a_design_concept_tied_to_$Neurons_utility_without_committing_to_final_implementation_until_contracts_are_defined.
  - Avoid_documenting_a_second_token_as_final_unless_governance_and_contract_architecture_approve_it.

## 8. Marketplace Use Logic

marketplace_use:
  possible_flow:
    - learner_earns_locked_reward_from_free_course
    - locked_balance_recorded
    - user_opens_marketplace
    - marketplace_checks_allowed_payment_sources
    - item_or_course_accepts_locked_rewards_if_policy_allows
    - transaction_consumes_locked_balance
    - tutor_or_platform_settlement_resolved_according_to_policy
    - accounting_record_created

settlement_questions:
  - Does_tutor_receive_unlocked_$Neurons?
  - Does_platform_convert_locked_credit_to_tutor_payment?
  - Are_locked_rewards_only_valid_for_platform-owned_courses?
  - Are_there_limits_per_purchase?
  - Can_locked_rewards_pay_fees_or_only_discounts?
  - What_happens_on_refund?
  - Is_marketplace_spend_on_chain_or_internal?

documentation_rule:
  - These questions must be answered before public docs describe final marketplace settlement behavior.

## 9. Governance Use Logic

governance_use:
  possible_flow:
    - learner_earns_locked_rewards
    - system_marks_balance_as_governance_eligible_if_policy_supports
    - governance_contract_or_voting_layer_reads_eligible_balance
    - user_can_participate_with_defined_weight_or_limit

risks:
  - free_reward_farming_could_influence_governance
  - sybil_accounts_could_accumulate_vote_power
  - locked_reward_governance_weight_may_need_caps
  - quadratic_or_reputation_based_controls_may_be_needed

documentation_rule:
  - Do not claim locked rewards can vote unless governance design and contracts confirm it.
  - If discussed, frame as possible utility subject to governance rules.

## 10. Unlock Conditions

possible_unlock_conditions:
  - completion_of_advanced_paid_course
  - time_based_vesting
  - passing_higher_Proof_of_Knowledge
  - maintaining_reputation
  - governance_approved_milestone
  - identity_or_anti_sybil_validation_if_required
  - conversion_through_marketplace_activity
  - no_unlock_available_internal_use_only

unlock_policy_fields:
  - unlock_type
  - unlock_trigger
  - minimum_delay
  - required_certification
  - required_purchase
  - max_unlock_amount
  - expiration
  - governance_status
  - contract_reference

## 11. Anti-Abuse Rules

anti_abuse:
  - cap_free_course_rewards_per_user
  - require_assessment_validation
  - require_cooldowns
  - detect_duplicate_wallets_or_patterns
  - limit_marketplace_spend_categories
  - prevent_refund_exploit
  - prevent_self-dealing_between_tutor_and_fake_learners
  - monitor_governance_influence_from_locked_rewards

## 12. Public Documentation Guidance

The public Locked Rewards page should:

- define locked rewards clearly;
- explain why they exist;
- distinguish internal utility from transferability;
- explain free-course reward context;
- mention possible marketplace or governance use only as implemented or planned;
- explain that behavior depends on contracts and governance policy;
- include risks and anti-abuse controls;
- avoid claiming guaranteed unlock or market value.
