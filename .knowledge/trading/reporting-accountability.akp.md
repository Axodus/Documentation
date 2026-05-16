# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: REPORTING AND ACCOUNTABILITY MODEL

[AXODUS_TRADING_REPORTING_ACCOUNTABILITY]

## 1. Reporting Thesis

Trading must be reportable.

Whether a strategy is internal, treasury-facing, or user-facing, its status, performance, risks, incidents, and changes should be documented.

Reports must contextualize performance and avoid implying future results.

## 2. Report Types

report_types:
  strategy_status_report:
    purpose:
      - describe_current_status_version_access_and_risk

  performance_report:
    purpose:
      - report_PnL_drawdown_trades_fees_and_context

  risk_report:
    purpose:
      - report_risk_limits_exposure_and_alerts

  treasury_trading_report:
    purpose:
      - report_treasury_capital_allocation_exposure_and_PnL

  user_strategy_report:
    purpose:
      - report_user_instance_status_and_risk_context_if product_supports

  incident_report:
    purpose:
      - document_errors_losses_API_incidents_security_events_or_strategy_pauses

  strategy_change_log:
    purpose:
      - record_strategy_version_parameter_or_access_policy_changes

  governance_report:
    purpose:
      - provide_governance_context_for_material_trading_policies

## 3. Performance Report Fields

performance_report_fields:
  - strategy_id
  - strategy_version
  - reporting_period
  - market
  - exchange_or_connector
  - status
  - realized_PnL
  - unrealized_PnL_if_available
  - net_PnL_after_fees
  - fees
  - funding_if_applicable
  - slippage
  - trade_count
  - win_rate_if_relevant
  - max_drawdown
  - exposure
  - leverage_if_any
  - incidents
  - limitations
  - no_future_guarantee_note

## 4. Risk Report Fields

risk_report_fields:
  - strategy_id
  - reporting_period
  - risk_level
  - exposure
  - max_drawdown
  - loss_limit_status
  - leverage_status
  - exchange_risk_notes
  - API_error_events
  - kill_switch_events
  - user_or_treasury_impact
  - mitigation_actions
  - review_required

## 5. Incident Report Fields

incident_report_fields:
  - incident_id
  - strategy_id
  - date
  - incident_type
  - severity
  - affected_scope
  - user_or_treasury_impact
  - root_cause_if_known
  - immediate_response
  - resolution_status
  - follow_up_actions
  - governance_or_security_escalation_if_any
  - public_notice_required
  - archived_evidence

## 6. Reporting Cadence

reporting_cadence:
  internal_research:
    - on_phase_completion

  paper_trading:
    - periodic_or_phase_completion

  limited_pilot:
    - frequent_status_and_incident_reporting

  active_user_facing_strategy:
    - status_visible_to_users
    - material_incident_notices
    - periodic_summary_if product_supports

  treasury_trading:
    - governance_or_treasury_defined_cadence
    - event_based_reports_for_material_losses_or_changes

  governance_sensitive_policy:
    - report_when_decision_or_change_occurs

## 7. Accountability Records

accountability_records:
  strategy_registry_record:
    - strategy_status_version_and_risk

  access_policy_record:
    - who_can_access_under_what_conditions

  disclosure_record:
    - user_risk_disclosures_and_confirmations

  API_security_record:
    - permission_status_and_user_confirmation_if stored

  treasury_approval_record:
    - approved_allocation_and_limits

  governance_record:
    - proposal_or_decision_context

  incident_record:
    - event_response_and_followup

  deprecation_record:
    - why_strategy_was_retired_or_paused

## 8. Reporting Anti-Patterns

anti_patterns:
  cherry_picked_performance:
    problem:
      - only_positive_results_reported

  backtest_as_promise:
    problem:
      - users_assume_future_profit

  hidden_drawdown:
    problem:
      - risk_context_removed

  no_fee_context:
    problem:
      - gross_results_mislead

  no_incident_record:
    problem:
      - failures_not_accountable

  no_strategy_version:
    problem:
      - performance_not_linked_to_actual_logic

## 9. Public Documentation Guidance

The public Reporting and Accountability page should:

- explain report types and fields;
- define reporting cadence;
- explain accountability records;
- warn against misleading performance reporting;
- link to Treasury, Governance, Risk Management, and ACS/Trinity.
