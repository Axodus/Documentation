# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: UTILITY MODEL

[AXODUS_TOKEN_UTILITY_MODEL]

## 1. Utility Thesis

Token utility must be tied to real ecosystem functions.

`$Neurons` should be documented as useful because it supports actions, access, participation, rewards, and coordination inside Axodus — not because it is expected to rise in price.

Utility claims must be connected to product policy and contract implementation.

## 2. Utility Categories

utility_categories:
  Academy:
    examples:
      - Learn_to_Win_rewards
      - course_access_or_discounts_if_supported
      - Proof_of_Knowledge_progression
      - internal_learning_balance
      - tutor_or_course_related_incentives

  Marketplace:
    examples:
      - payments_if_supported
      - discounts_if_supported
      - internal_credit_usage
      - locked_reward_spend_if_supported
      - service_or_course_purchase

  Governance:
    examples:
      - governance_participation
      - voting_eligibility_if_defined
      - proposal_access_or_signal_if_defined
      - DAO_federation_context_if_defined

  Product_Access:
    examples:
      - access_to_trading_tools
      - access_to_courses
      - access_to_marketplace_features
      - access_to_services_or_subscriptions_if_policy_defines

  Business:
    examples:
      - service_payment_if_supported
      - partner_programs
      - BBA_campaign_access_or_credits_if_defined

  Treasury:
    examples:
      - treasury_fee_if_implemented
      - reward_budget_accounting
      - liquidity_or_sustainability_context

  ACS:
    examples:
      - potential_access_or_consumption_metering_if_policy_defines
    warning:
      - do_not_invent_AI_service_payment_model_without_policy

## 3. Utility Status Model

utility_statuses:
  Active:
    meaning:
      - utility_is_implemented_and_current

  Planned:
    meaning:
      - utility_is_designed_but_not_live

  Experimental:
    meaning:
      - limited_test_or_POC

  Governance_Required:
    meaning:
      - utility_requires_policy_approval

  Contract_Validation_Required:
    meaning:
      - utility_depends_on_contract_behavior

  Deprecated:
    meaning:
      - no_longer_current

## 4. Access Utility

access_utility:
  definition:
    - token_or_balance_condition_may_grant_access_to_product_feature_course_strategy_or_service

possible_access_rules:
  - minimum_$Neurons_balance
  - locked_balance_eligibility_if_policy_supports
  - paid_subscription_or_purchase
  - certification_or_Proof_of_Knowledge
  - DAO_federation_status
  - governance_approved_role
  - marketplace_purchase

access_rule_fields:
  - access_rule_id
  - product_or_feature
  - required_asset_or_condition
  - minimum_amount_if_any
  - locked_balance_allowed
  - certification_required
  - duration
  - revocation_conditions
  - governance_status
  - contract_reference

documentation_warning:
  - Do not claim a product is token-gated unless implemented or marked planned.
  - Do not claim minimum balances unless governance/product policy confirms them.

## 5. Reward Utility

reward_utility:
  definition:
    - token_may_be_earned_or_assigned_through_policy_defined_learning_participation_or_product_flows

reward_sources:
  - Academy_Learn_to_Win
  - Business_partner_programs_if_approved
  - Marketplace_campaigns_if_approved
  - Governance_approved_incentives
  - community_contribution_if_policy_defines

documentation_warning:
  - Rewards require eligibility, anti-abuse controls, budget, and contract or accounting implementation.
  - Rewards are not guaranteed income.

## 6. Marketplace Utility

marketplace_utility:
  possible_models:
    payment_asset:
      - `$Neurons` used as payment if supported

    discount_asset:
      - `$Neurons` or locked_rewards reduce cost if supported

    internal_credit:
      - locked_or_internal_balance used within restricted catalog

    access_unlock:
      - token_status_unlocks_listing_or_service

    loyalty_or_progression:
      - marketplace activity contributes to status if policy defines

documentation_warning:
  - Settlement rules must be defined before claiming Marketplace utility as final.
  - Tutor and seller compensation must be clarified if locked rewards are accepted.

## 7. Governance Utility

governance_utility:
  possible_models:
    token_weighted_participation:
      - `$Neurons` balance contributes_to_vote_or_signal_if_governance_defines

    quadratic_participation:
      - participation_uses_sublinear_weighting_if_defined

    reputation_or_certification_hybrid:
      - token_balance_combined_with_Academy_or_DAO_status_if_governance_defines

    proposal_access:
      - token_or_role_required_to_create_or_support_proposals_if_defined

documentation_warning:
  - Locked rewards must not automatically be counted as governance power.
  - Governance utility requires governance policy and contract/read model support.

## 8. Utility Anti-Patterns

anti_patterns:
  utility_as_price_support_claim:
    problem:
      - utility_explained_as_guaranteed_market_value

  access_without_revocation:
    problem:
      - no_policy_for_abuse_or_status_change

  marketplace_utility_without_settlement:
    problem:
      - unclear_who_receives_value

  voting_power_from_free_rewards_without_controls:
    problem:
      - sybil_governance_capture

  utility_sprawl:
    problem:
      - token_used_everywhere_without_clear_reason

## 9. Public Documentation Guidance

The public Utility Model page should:

- explain utility categories;
- distinguish active/planned/experimental utilities;
- define access and reward utility;
- explain Marketplace and Governance utility carefully;
- include warnings about implementation and governance approval;
- avoid investment or price-support language.
