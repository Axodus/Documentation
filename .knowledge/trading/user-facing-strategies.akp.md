# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: USER-FACING STRATEGIES MODEL

[AXODUS_USER_FACING_TRADING_STRATEGIES]

## 1. User-Facing Strategy Thesis

User-facing strategies are trading tools or automations that Axodus may make available to eligible users.

The strategic goal is to let users experience Axodus Trading through accessible tools that may run on their own accounts, creating engagement and recurring platform usage.

This must be done with strong risk disclosures, API security guidance, onboarding, education, access policy, and monitoring.

## 2. User-Facing Strategy Definition

definition:
  - strategy_or_tool_available_to_users_under_defined_access_policy_and_risk_disclosure

default_execution_model:
  - user_owns_CEX_account_or_wallet
  - user_controls_capital
  - user_connects_API_key_or_wallet_if_supported
  - Axodus_provides_tool_strategy_or_interface
  - user_retains_responsibility_for_risk_and_exchange_terms
  - Axodus_does_not_custody_user_funds_by_default

## 3. User-Facing Strategy Types

strategy_types:
  CEX_API_bot:
    description:
      - user_connects_exchange_API_key_for_strategy_execution

  signal_only:
    description:
      - user_receives_signals_or_recommendations_but_executes_manually

  assisted_execution:
    description:
      - user_reviews_and_confirms_actions_if_supported

  wallet_based_strategy:
    description:
      - strategy_interacts_with_user_wallet_or_DeFi_protocol_if implemented
    warning:
      - higher_smart_contract_and_wallet_security_risk

  dashboard_tool:
    description:
      - user_tracks_metrics_positions_or_strategy_status

  educational_simulator:
    description:
      - paper_trading_or_learning_mode

## 4. User Eligibility

eligibility_options:
  - minimum_$Neurons_balance
  - Academy_trading_risk_course_completion
  - Proof_of_Knowledge
  - subscription
  - promotional_campaign
  - milestone_unlock
  - governance_approved_access
  - waitlist_or_beta_invite
  - risk_acknowledgement_completion

eligibility_rule:
  - access_criteria_must_be_explicit
  - eligibility_does_not_reduce_trading_risk
  - token_holding_does_not_guarantee_profit

## 5. User Onboarding Flow

onboarding_flow:
  - user_reads_strategy_description
  - user_reads_risk_disclosure
  - user_completes_Academy_or_risk_module_if_required
  - user_confirms_no_profit_guarantee
  - user_connects_exchange_or_account_if_supported
  - user_configures_API_key_with_least_privilege
  - withdrawal_permissions_disabled
  - user_sets_or_accepts_risk_parameters
  - system_runs_validation_checks
  - user_starts_strategy_or_paper_mode
  - monitoring_and_status_available
  - user_can_pause_or_revoke_access

## 6. Required User Confirmations

required_confirmations:
  - user_understands_trading_risk
  - user_understands_strategy_can_lose_money
  - user_understands_no_profit_guarantee
  - user_understands_backtests_do_not_predict_future_results
  - user_confirms_exchange_API_key_permissions
  - user_confirms_withdrawal_permission_disabled_where_possible
  - user_accepts_exchange_terms_and_risk
  - user_understands_leverage_and_liquidation_if_futures_strategy
  - user_understands_Axodus_does_not_custody_funds_by_default
  - user_understands_they_can_pause_or_revoke_API_key

## 7. Strategy Access Models

access_models:
  free_token_gated:
    description:
      - eligible_$Neurons_holders_access_strategy_without_extra_fee_under_limits

  subscription:
    description:
      - recurring_payment_or_token_based_access_if implemented

  milestone_based:
    description:
      - access_unlocked_by_progress_or_performance_milestone

  Academy_gated:
    description:
      - access_requires_completion_of_risk_education

  promotional:
    description:
      - temporary_access_campaign_for_user_activation

  tiered:
    description:
      - basic_advanced_pro_or_DAO_tiers_if policy defines

## 8. User-Facing Strategy Controls

controls:
  - strategy_status_visible
  - user_pause_button
  - API_key_revocation_guidance
  - position_size_limits
  - drawdown_warning
  - leverage_limits
  - liquidation_warning
  - exchange_error_alerts
  - incident_notice
  - performance_context
  - risk_disclosure_always_available

## 9. User-Facing Risks

risks:
  user_capital_loss:
    description:
      - strategy_can_lose_user_money

  API_key_misconfiguration:
    description:
      - user_enables_excessive_permissions_or_leaks_key

  leverage_liquidation:
    description:
      - futures_positions_can_liquidate

  exchange_risk:
    description:
      - exchange_outage_restrictions_or_API_failure

  misunderstanding:
    description:
      - user_mistakes_tool_for_profit_guarantee

  strategy_regime_failure:
    description:
      - market_conditions_change_and_strategy_underperforms

  overuse_or_overleverage:
    description:
      - user_allocates_more_than_they_can_risk

## 10. Public Documentation Guidance

The public User-Facing Strategies page should:

- define user-facing strategy products;
- explain the default user-owned account model;
- list strategy types and eligibility;
- describe onboarding and confirmations;
- explain access models;
- include strong user responsibility and risk language.
