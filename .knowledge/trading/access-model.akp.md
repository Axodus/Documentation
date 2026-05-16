# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: STRATEGY ACCESS MODEL

[AXODUS_TRADING_ACCESS_MODEL]

## 1. Access Model Thesis

Trading access defines who can use which strategy, under what conditions, for how long, and with which risk controls.

Access rules protect users and the ecosystem from unrestricted use of high-risk tools while creating meaningful utility for `$Neurons`, Academy education, subscriptions, milestones, and product tiers.

## 2. Access Rule Categories

access_categories:
  token_gated:
    description:
      - access_based_on_minimum_$Neurons_balance_or_token_status_if_policy_defines

  Academy_gated:
    description:
      - access_requires_completion_of_trading_risk_course_or_Proof_of_Knowledge

  subscription:
    description:
      - recurring_or_time_limited_access

  promotional:
    description:
      - temporary_free_or_discounted_access_campaign

  milestone_based:
    description:
      - access_unlocked_by_user_progress_or_platform_milestone

  DAO_or_partner_access:
    description:
      - access_granted_through_DAO_or_partner_program_if approved

  manual_review:
    description:
      - access_requires_human_approval_for_high_risk_or_beta_product

  beta_invite:
    description:
      - limited_user_group_for_testing

## 3. Access Rule Object

access_rule_fields:
  - access_rule_id
  - strategy_id
  - strategy_status
  - access_category
  - required_$Neurons_balance_if_any
  - locked_rewards_count_allowed
  - Academy_course_required
  - Proof_of_Knowledge_required
  - subscription_required
  - promotional_campaign_id
  - duration
  - risk_tier
  - exchange_restrictions
  - jurisdiction_or_terms_restrictions_if any
  - leverage_limits
  - user_confirmations_required
  - revocation_conditions
  - governance_status
  - effective_date
  - review_date

## 4. Product Tiers

possible_tiers:
  Starter:
    description:
      - low_risk_or_limited_access
      - may_be_token_gated_or_Academy_gated

  Basic:
    description:
      - standard_user_access_with_limited_settings

  Advanced:
    description:
      - more_customization_or_additional_strategies
      - stronger_risk_education_required

  Pro:
    description:
      - advanced_tools_dashboard_or_strategy_controls
      - may_require_subscription_or_manual_review

  DAO:
    description:
      - DAO_or_group_level_access_if_governance_and_business_approve

tier_rule:
  - Do_not_publish_final_tier_names_or_requirements_unless product_policy_confirms_them.

## 5. Token-Based Access

token_access:
  possible_conditions:
    - minimum_unlocked_$Neurons_balance
    - minimum_total_$Neurons_balance
    - minimum_locked_or_internal_balance_if_policy_allows
    - NFT_or_certificate_if implemented
    - time_weighted_holding_if policy_defines

locked_reward_warning:
  - Locked_rewards_should_not_count_toward_trading_access_unless_policy_and_contracts_allow.
  - Counting_locked_rewards_for_high_risk_trading_access_may_create_abuse_or_user_safety_risk.

## 6. Academy-Based Access

Academy_access:
  possible_requirements:
    - trading_risk_intro_course
    - futures_and_leverage_course
    - API_key_security_lesson
    - Proof_of_Knowledge_assessment
    - periodic_refresher_for_high_risk_tools

purpose:
  - users_understand_risk_before_strategy_access
  - reduce_support_burden
  - improve_user_safety
  - connect_Academy_to_product_activation

## 7. Revocation and Pause

revocation_conditions:
  - user_violates_terms
  - API_key_permissions_unsafe
  - strategy_paused
  - exchange_integration_issue
  - governance_policy_change
  - security_incident
  - risk_limit_breach
  - subscription_expired
  - access_rule_deprecated

pause_conditions:
  - market_regime_extreme
  - exchange_outage
  - strategy_drawdown_limit_reached
  - API_error_spike
  - incident_under_review
  - governance_or_security_pause

## 8. Governance Required For

governance_required_for:
  - strategy_access_policy_for_major_user_group
  - using_$Neurons_thresholds_for_high_impact_products
  - allowing_locked_rewards_to_count_for_access
  - granting_DAO_strategy_access
  - changing_high_risk_strategy_tiers
  - treasury_subsidized_free_strategy_access
  - promotional_campaign_with_tokenomics_or_treasury_impact

## 9. Public Documentation Guidance

The public Access Model page should:

- explain access categories;
- define access rule fields;
- describe possible tiers without finalizing unless policy exists;
- explain token-based and Academy-based access;
- include revocation and pause conditions;
- explain governance triggers;
- avoid exact thresholds unless confirmed.
