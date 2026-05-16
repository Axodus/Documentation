# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: ACADEMY REWARDS MODEL

[AXODUS_ACADEMY_REWARDS_TOKENOMICS]

## 1. Academy Rewards Thesis

Academy is one of the most important token utility sources in Axodus.

Through Learn-to-Win and Proof of Knowledge, Academy can reward meaningful learning and onboarding.

But Academy rewards are also one of the highest abuse-risk tokenomics surfaces.

Free-course rewards should be carefully constrained. Paid-course rewards may follow different rules. Both must require real validation and anti-abuse controls.

## 2. Reward Contexts

reward_contexts:
  free_courses:
    purpose:
      - onboarding
      - basic_education
      - risk_awareness
      - initial_user_progression
    reward_behavior:
      - smaller_rewards
      - locked_or_internal_use_preferred
      - anti_farming_controls_required

  paid_courses:
    purpose:
      - advanced_learning
      - premium_content
      - tutor_or_partner_course_economy
    reward_behavior:
      - may_have_different_unlock_rules
      - may_be_higher_value_if_policy_allows
      - still_requires_completion_and_validation

  certifications:
    purpose:
      - skill_or_readiness_signal
    reward_behavior:
      - may_unlock_access_or_rewards_if_policy_defines
      - should_not_be_legal_or_profit_claim

  partner_programs:
    purpose:
      - sponsored_learning_or_DAO_training
    reward_behavior:
      - requires_business_governance_and_tokenomics_review_if_material

## 3. Learn-to-Win Tokenomics

learn_to_win_tokenomics:
  definition:
    - gamified_learning_reward_model_linking_progress_assessment_and_token_or_internal_utility

principles:
  - reward_learning_not_clicks
  - require_Proof_of_Knowledge_for_meaningful_rewards
  - limit_free_reward_extraction
  - use_locked_or_internal_rewards_for_free_onboarding_if_supported
  - report_reward_budget_usage
  - governance_review_high_value_campaigns

## 4. Proof of Knowledge Relationship

Proof_of_Knowledge:
  reward_role:
    - validates_learning_before_reward_eligibility
    - reduces_superficial_completion
    - supports_certification_or_progression
    - improves_anti_farming_resistance

proof_requirements:
  - assessment_or_task
  - passing_criteria
  - attempt_limit_or_cooldown_if_needed
  - anti_cheat_signals
  - review_for_high_value_rewards
  - record_of_completion

## 5. Free Course Reward Flow

free_course_reward_flow:
  - user_enrolls_in_free_course
  - course_progress_recorded
  - Proof_of_Knowledge_or_assessment_completed
  - anti_abuse_checks_run
  - reward_policy_resolved
  - reward_issued_as_locked_or_internal_use_if_policy_and_contract_support
  - user_utility_available_only_within_allowed_flows
  - transfer_or_claim_restricted_if_contract_enforces
  - reward_usage_and_budget_reported

documentation_rule:
  - Do not claim free rewards can be withdrawn or sold.
  - Do not claim locked behavior unless implemented.
  - Use "may be locked", "designed to support internal utility", or "subject to contract validation" if not final.

## 6. Paid Course Reward Flow

paid_course_reward_flow:
  - user_purchases_or_accesses_paid_course
  - payment_or_access_validated
  - course_completion_recorded
  - Proof_of_Knowledge_completed
  - reward_policy_resolved
  - reward_issued_locked_unlocked_or_partially_unlocked_according_to_policy
  - certification_or_access_status_updated
  - reward_budget_and_marketplace_settlement_recorded_if_applicable

documentation_rule:
  - Do not assume paid-course rewards are always liquid.
  - State that paid-course reward behavior may differ from free-course rewards based on policy and implementation.

## 7. Academy Reward Policy Fields

academy_reward_policy_fields:
  - course_id
  - course_type
  - free_or_paid
  - learning_path
  - reward_amount_or_formula
  - proof_required
  - reward_status
  - locked_status
  - internal_use_allowed
  - claim_allowed
  - unlock_conditions
  - max_rewards_per_user
  - max_rewards_per_course
  - anti_abuse_rules
  - budget_source
  - governance_status
  - contract_reference
  - reporting_frequency

## 8. Academy Reward Anti-Abuse

anti_abuse:
  - Proof_of_Knowledge_required_for_meaningful_rewards
  - per_user_limits
  - per_wallet_limits_if_policy_allows
  - course_attempt_limits
  - cooldowns
  - suspicious_completion_pattern_detection
  - ACS_risk_analysis
  - manual_review_for_high_value_rewards
  - marketplace_self_dealing_detection
  - governance_review_for_large_campaigns

## 9. Academy Reward Risks

risks:
  reward_farming:
    description:
      - users_complete_courses_only_to_extract_rewards

  sybil:
    description:
      - one_actor_uses_multiple_accounts

  credential_inflation:
    description:
      - low_quality_proof_makes_certificates_and_rewards_meaningless

  free_to_market_dump:
    description:
      - free_rewards_become_liquid_market_sell_pressure

  tutor_self_dealing:
    description:
      - tutors_create_fake_learners_to_extract_rewards_or_revenue

  contract_mismatch:
    description:
      - reward_policy_not_supported_by_contract_or_accounting

## 10. Public Documentation Guidance

The public Academy Rewards page should:

- connect Tokenomics with Academy;
- explain Learn-to-Win and Proof of Knowledge relationship;
- distinguish free and paid reward flows;
- explain locked/internal-use logic;
- include anti-abuse controls;
- link to Academy docs, Locked Rewards, Reward Policy, Marketplace Utility, and Risk.
