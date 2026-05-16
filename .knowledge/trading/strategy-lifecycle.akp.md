# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: STRATEGY LIFECYCLE MODEL

[AXODUS_TRADING_STRATEGY_LIFECYCLE]

## 1. Lifecycle Thesis

Every trading strategy must have a lifecycle.

A strategy should not go from idea to user-facing execution without research, testing, risk review, access policy, monitoring, and reporting.

The lifecycle protects users, treasury, governance, and the Axodus brand.

## 2. Strategy Lifecycle Stages

lifecycle_stages:
  1_concept:
    purpose:
      - define_strategy_hypothesis
    outputs:
      - concept_note
      - market_type
      - initial_risk_assessment

  2_research:
    purpose:
      - analyze_market_logic_data_requirements_and_strategy_assumptions
    outputs:
      - research_note
      - data_sources
      - assumptions
      - failure_modes

  3_backtesting:
    purpose:
      - test_strategy_on_historical_data
    outputs:
      - backtest_report
      - parameter_results
      - limitations
      - overfitting_risk_notes

  4_paper_trading:
    purpose:
      - test_strategy_live_without_real_capital
    outputs:
      - paper_trade_report
      - execution_observations
      - signal_quality_notes

  5_risk_review:
    purpose:
      - define_strategy_risk_limits_and_failure_modes
    outputs:
      - risk_profile
      - drawdown_limits
      - position_size_rules
      - leverage_rules
      - kill_switch_conditions

  6_limited_pilot:
    purpose:
      - restricted_live_use_under_monitoring
    outputs:
      - pilot_report
      - incident_notes
      - performance_context

  7_governance_or_product_approval:
    purpose:
      - approve_internal_treasury_or_user_facing_release_if_material
    outputs:
      - approval_record
      - access_policy
      - disclosure_requirements

  8_active:
    purpose:
      - strategy_available_under_defined_scope
    outputs:
      - monitoring
      - performance_reports
      - user_status
      - incident_records

  9_iteration:
    purpose:
      - update_parameters_or_strategy_logic
    outputs:
      - version_update
      - change_log
      - review_record

  10_pause_or_deprecation:
    purpose:
      - stop_strategy_due_to_risk_performance_policy_or_maintenance
    outputs:
      - pause_notice
      - deprecation_record
      - user_or_treasury_guidance

## 3. Strategy Statuses

strategy_statuses:
  Concept:
    meaning:
      - idea_not_tested

  Research:
    meaning:
      - strategy_under_analysis

  Backtesting:
    meaning:
      - historical_testing

  Paper_Trading:
    meaning:
      - simulated_live_testing

  Risk_Review:
    meaning:
      - risk_limits_under_review

  Limited_Pilot:
    meaning:
      - restricted_live_test

  Pending_Approval:
    meaning:
      - awaiting_product_treasury_or_governance_review

  Active_Internal:
    meaning:
      - live_for_internal_use

  Active_User_Facing:
    meaning:
      - available_to_eligible_users

  Paused:
    meaning:
      - temporarily_disabled

  Deprecated:
    meaning:
      - no_longer_available_or_recommended

  Failed:
    meaning:
      - did_not_meet_risk_or_performance_criteria

  Needs_Review:
    meaning:
      - requires_human_risk_or_governance_review

## 4. Strategy Versioning

version_fields:
  - strategy_id
  - version
  - logic_summary
  - parameters
  - changed_from_previous
  - reason_for_change
  - backtest_reference
  - paper_trade_reference
  - risk_review_reference
  - approval_reference
  - effective_date
  - rollback_plan

versioning_rules:
  - material_strategy_logic_changes_require_new_version
  - user_facing_changes_require_disclosure_if_material
  - treasury_strategy_changes_require_reporting_if material
  - high_risk_changes_require_review_before_release

## 5. Promotion Gates

promotion_gates:
  concept_to_research:
    requires:
      - hypothesis_and_market_defined

  research_to_backtesting:
    requires:
      - data_sources_and_logic_defined

  backtesting_to_paper_trading:
    requires:
      - backtest_report_with_limitations

  paper_trading_to_limited_pilot:
    requires:
      - execution_viability_and_risk_limits

  limited_pilot_to_active:
    requires:
      - pilot_review
      - risk_disclosure
      - monitoring_ready
      - access_policy
      - approval_if_material

## 6. Backtest Requirements

backtest_requirements:
  - data_period
  - exchange_or_market_source
  - assumptions
  - fees
  - slippage
  - liquidity_constraints
  - leverage_if_any
  - drawdown
  - number_of_trades
  - out_of_sample_or_robustness_notes_if available
  - overfitting_risk
  - limitations
  - statement_that_backtest_is_not_future_guarantee

## 7. Deprecation Conditions

deprecation_conditions:
  - persistent_underperformance
  - excessive_drawdown
  - market_regime_change
  - exchange_API_incompatibility
  - security_issue
  - governance_policy_change
  - user_risk_too_high
  - infrastructure_instability
  - better_strategy_replaces_it

## 8. Public Documentation Guidance

The public Strategy Lifecycle page should:

- explain stages and statuses;
- explain versioning and promotion gates;
- list backtest requirements;
- explain pause and deprecation;
- include no guarantee language;
- link to Risk Management, Reporting, User-Facing Strategies, and Governance Alignment.
