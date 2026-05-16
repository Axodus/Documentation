# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: TRADING ALIGNMENT MODEL

[AXODUS_TREASURY_TRADING_ALIGNMENT]

## 1. Trading Alignment Thesis

Trading is expected to be an important revenue and financial operations nucleus.

Treasury alignment ensures that internal trading strategies operate under clear allocation limits, risk controls, PnL reporting, governance review, and accountability.

Treasury must not outsource financial responsibility to a bot, strategy, or ACS agent.

## 2. Trading-Treasury Interfaces

interfaces:
  capital_allocation:
    description:
      - treasury_assigns_limited_capital_to_approved_strategy

  strategy_review:
    description:
      - strategy_risk_performance_and_fit_reviewed_before_allocation

  PnL_reporting:
    description:
      - realized_unrealized_net_results_reported_with_context

  risk_limits:
    description:
      - drawdown_exposure_leverage_and_counterparty_limits_defined

  exchange_exposure:
    description:
      - treasury_tracks_CEX_or_DEX_counterparty_risk

  incident_response:
    description:
      - losses_API_issues_or_strategy_failures_reported_and escalated

  product_feedback:
    description:
      - internal_strategy_results_may_inform_user_facing_products_if validated

## 3. Treasury Trading Action Flow

flow:
  - strategy_proposed_by_Trading_or_Trinity
  - research_and_backtest_context_collected
  - Trinity_prepares_analysis
  - Agent_Smith_reviews_high_risk_assumptions
  - treasury_risk_review_completed
  - governance_requirement_assessed
  - allocation_limit_defined
  - approval_recorded
  - execution_handoff_created
  - strategy_operates_under_monitoring
  - PnL_and_risk_reported
  - strategy_paused_iterated_or_deprecated_based_on_review

## 4. Required Controls

required_controls:
  - approved_strategy_id
  - allocation_limit
  - maximum_loss_or_drawdown_limit
  - exchange_or_protocol_exposure_limit
  - leverage_policy
  - monitoring_enabled
  - reporting_frequency
  - pause_conditions
  - incident_response_process
  - execution_receipt_for_material_allocation

## 5. PnL Reporting Requirements

PnL_reporting_requirements:
  - realized_PnL
  - unrealized_PnL_if_applicable
  - net_PnL_after_fees
  - drawdown
  - fees
  - slippage
  - funding_if_applicable
  - exposure
  - leverage_if_any
  - period
  - strategy_version
  - limitations
  - no_future_guarantee_note

## 6. Trading Alignment Risks

risks:
  bot_overtrust:
    description:
      - treasury_relies_on_automation_without_review

  unreported_loss:
    description:
      - losses_not_visible_to_governance

  overexposure:
    description:
      - too_much_capital_allocated_to_strategy_or_exchange

  strategy_drift:
    description:
      - strategy_changes_behavior_without_approval

  user_product_misuse:
    description:
      - internal_strategy_results_market_user_product_without_proper_disclosure

## 7. Public Documentation Guidance

The public Trading Alignment page should:

- explain how Treasury and Trading interact;
- define controls and PnL reporting;
- describe review flow;
- include risks;
- link to Trading docs, Risk Management, Governance, and Reporting.
