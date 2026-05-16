# AXODUS KNOWLEDGE PACK
# DOMAIN: ACADEMY
# TYPE: TOKEN REWARD FLOWS MODEL

[AXODUS_ACADEMY_TOKEN_REWARD_FLOWS]

## 1. Reward Flow Thesis

Academy rewards must be documented with precision.

Rewards can help onboard users, create engagement, support education, and activate `$Neurons` utility. But reward systems can also create abuse, farming, unsustainable token emissions, user misunderstanding, and legal/reputational risk if documented incorrectly.

The Academy must distinguish between:

- free course rewards;
- paid course rewards;
- locked rewards;
- unlocked rewards;
- internal-use rewards;
- marketplace spendable rewards;
- governance participation utility;
- claimable token rewards;
- contract-enforced behavior;
- planned behavior not yet implemented.

## 2. Reward Language Standard

allowed_language:
  - reward
  - ecosystem_utility
  - learning_incentive
  - internal_use_balance
  - locked_reward
  - claimable_reward_if_contract_supports
  - governance_participation_utility_if_policy_supports
  - marketplace_utility_if_supported
  - access_mechanism

prohibited_language:
  - guaranteed_profit
  - guaranteed_income
  - investment_return
  - risk_free_reward
  - passive_income
  - guaranteed_token_value
  - guaranteed_unlock_without_contract_confirmation

## 3. Reward Sources

reward_sources:
  platform_allocated_rewards:
    description:
      - rewards_from_Axodus_defined_reward_budget_or_policy

  sponsor_or_partner_rewards:
    description:
      - rewards_sponsored_by_partner_or_course_provider
    governance_note:
      - may_require_policy_review_if_affecting_tokenomics_or_users

  course_purchase_related_rewards:
    description:
      - rewards_tied_to_paid_course_completion
    warning:
      - must_not_be_automatically_assumed_unlocked

  governance_approved_campaign:
    description:
      - reward_campaign_approved_through_governance
    accountability_note:
      - should_have_reporting_and_limits

  marketplace_revenue_related_rewards:
    description:
      - possible_rewards_related_to_course_sales_or engagement
    warning:
      - requires_clear_fee_and_policy_model

## 4. Reward Status Model

reward_statuses:
  Pending:
    meaning:
      - learner_may_be_eligible_but_conditions_not_complete

  Eligible:
    meaning:
      - learner_met_requirements_but_reward_not_issued_or_claimed

  Issued_Locked:
    meaning:
      - reward_record_created_as_locked_or_internal_use

  Issued_Unlocked:
    meaning:
      - reward_record_created_as transferable_or_claimable_if_contract_allows

  Claimed:
    meaning:
      - user_claimed_reward_to_wallet_or_account_if_allowed

  Internal_Use_Only:
    meaning:
      - reward_can_be_used_inside_platform_but_not_transferred_if_enforced

  Spent:
    meaning:
      - reward_used_for_marketplace_or_platform_utility

  Revoked:
    meaning:
      - reward_removed_due_to_abuse_or_invalid_completion_if_policy_allows

  Expired:
    meaning:
      - reward_eligibility_or_campaign_window_ended

  Needs_Review:
    meaning:
      - reward_has_risk_or_unclear_status

## 5. Free Course Reward Flow

free_course_reward_flow:
  principle:
    - free_courses_are_entry_level_onboarding_tools
    - rewards_should_be_smaller_or_more_constrained
    - rewards_may_be_locked_or_internal_use
    - rewards_should_not_create_easy_market_sell_pressure
    - rewards_should_require_meaningful_completion_or_proof

flow:
  - user_enrolls_in_free_course
  - user_completes_content
  - Proof_of_Knowledge_or_assessment_validates_completion
  - anti_abuse_rules_checked
  - reward_policy_resolved
  - reward_record_created
  - locked_or_internal_use_status_applied_if_policy_and_contract_support
  - user_can_use_reward_only_for_supported_utilities
  - transfer_or_withdrawal_blocked_if_contract_enforces_lock
  - reporting_metrics_updated

possible_internal_utilities:
  - marketplace_purchase_if_supported
  - course_discount_if_supported
  - governance_participation_if_supported
  - product_access_if_supported
  - certification_fee_discount_if_supported
  - internal_platform_balance_if_supported

documentation_rule:
  - Use "may" or "designed to support" unless implementation is verified.
  - Do not state rewards cannot be transferred unless smart contracts enforce non-transferability.
  - Do not state locked rewards can vote unless governance and contract policy supports it.

## 6. Paid Course Reward Flow

paid_course_reward_flow:
  principle:
    - paid_courses_can_have_different_reward_rules
    - paid_course_participation_may_reduce_spam_but_not_eliminate_risk
    - paid_course_rewards_may_be_unlocked_or partially_unlocked_if_policy_contracts_allow
    - rewards_still_depend_on_completion_and_validation

flow:
  - user_purchases_or_accesses_paid_course
  - payment_or_access_confirmed
  - user_completes_course
  - Proof_of_Knowledge_validated
  - reward_policy_checked
  - paid_course_reward_rule_applied
  - reward_issued_locked_or_unlocked_according_to_policy
  - certification_or_reputation_record_updated
  - marketplace_revenue_distribution_processed_if_applicable

documentation_rule:
  - Do not claim all paid-course rewards are unlocked unless verified.
  - Describe paid-course rewards as potentially different from free-course rewards.
  - State that exact behavior depends on finalized tokenomics and smart contracts.

## 7. Reward Policy Object

reward_policy_fields:
  - policy_id
  - course_id
  - course_type
  - reward_asset
  - reward_amount
  - reward_calculation_method
  - max_reward_per_user
  - max_reward_budget
  - free_or_paid_context
  - locked_status
  - internal_use_status
  - transferability
  - claim_conditions
  - unlock_conditions
  - expiration
  - anti_abuse_rules
  - governance_status
  - contract_reference
  - version
  - effective_date
  - review_date

## 8. Smart Contract Relationship

smart_contract_roles:
  possible:
    - reward_minting
    - locked_balance_management
    - claim_control
    - internal_use_tracking
    - marketplace_payment_acceptance
    - voting_weight_calculation
    - unlock_condition_enforcement
    - reward_revocation_if_policy_supports

contract_caution:
  - Documentation must not invent contract behavior.
  - If a POC minter or token-linked reward contract is planned but not final, mark it as planned.
  - If locked balances are implemented as same-token restricted balances, explain the high-level behavior without claiming internal code.
  - If a second token is considered but not selected, do not document it as final.
  - If same-token locked reward design is used, explain that transferability restrictions require contract-level enforcement.

## 9. Same Token Locked Reward Design

same_token_locked_reward_concept:
  thesis:
    - free_course_rewards_can_be_recorded_as_locked_$Neurons_or_internal_$Neurons_balance
    - same_token_design_avoids_creating_unnecessary_second_token
    - restrictions_must_be_enforced_by_contract_or_platform_accounting
    - utility_must_be explicitly_allowed_by_marketplace_governance_and_contracts

possible_implementation_patterns:
  internal_accounting_balance:
    description:
      - backend_or_contract_records_internal_use_balance
    risk:
      - requires_trust_or_contract_verification

  non_transferable_vesting_or_lock_contract:
    description:
      - rewards_held_in_contract_and_spendable_only_through_allowed_flows
    risk:
      - contract_complexity

  soulbound_or_attestation_based_credit:
    description:
      - reward_right_or_credit_not_direct_liquid_token
    risk:
      - utility_must_be_clearly_defined

  dual_balance_token_contract:
    description:
      - same_asset_has_locked_and_unlocked_balances
    risk:
      - custom_contract_complexity_and_integration_requirements

documentation_warning:
  - Do not force a single implementation in docs until selected.
  - Explain design intent and dependency on contract validation.

## 10. Governance Touchpoints

governance_touchpoints:
  - reward_budget_policy
  - reward_amount_changes
  - free_vs_paid_reward_rules
  - locked_balance_utility
  - marketplace_spend_rules
  - voting_power_for_locked_rewards
  - unlock_conditions
  - anti_abuse_policy
  - tokenomics_supply_impact
  - partner_sponsored_reward_programs

## 11. Risk Considerations

risks:
  reward_farming:
    description:
      - users_create_many_accounts_to_extract_rewards

  tokenomics_pressure:
    description:
      - rewards_exceed_sustainable_supply_or_demand

  unclear_transferability:
    description:
      - users_misunderstand_locked_vs_unlocked

  governance_abuse:
    description:
      - locked_rewards_used_for_voting_without_policy_controls

  marketplace_abuse:
    description:
      - internal_rewards_used_to exploit commerce_or_refund_loops

  legal_reputational_risk:
    description:
      - rewards_marketed_as_income_or_investment

  contract_mismatch:
    description:
      - documentation_says_one_thing_but_contract_does_another

## 12. Public Documentation Guidance

The public Token Reward Flows page should:

- explain free and paid course reward differences;
- explain locked, unlocked, claimable, and internal-use statuses;
- include clear implementation caveats;
- connect to `$Neurons` utility without investment claims;
- link to Locked Rewards, Tokenomics, Marketplace Integration, and Governance;
- include risk and anti-abuse notes;
- mark contract-dependent sections as Needs Review if not implemented.
