# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: ACS AND TRINITY INTEGRATION MODEL

[AXODUS_TRADING_ACS_TRINITY_INTEGRATION]

## 1. Integration Thesis

Trinity is the primary ACS agent archetype for Trading.

Trinity supports strategy analysis, trading operations, P&L review, market context, risk monitoring, treasury alignment, user-facing product review, and reporting.

Trinity does not guarantee profit, execute unrestricted trades, approve treasury actions, or replace governance.

## 2. Trinity Responsibilities in Trading

responsibilities:
  strategy_analysis:
    - summarize_strategy_logic
    - identify_market_conditions
    - review_backtest_context
    - identify_failure_modes

  risk_review:
    - classify_strategy_risk
    - identify_leverage_liquidation_exchange_API_and_operational_risk
    - recommend_risk_limits

  PnL_review:
    - summarize_performance
    - contextualize_drawdown
    - separate_realized_unrealized_and_net_results
    - flag_misleading_metrics

  user_facing_review:
    - review_strategy_access_model
    - review_disclosures
    - review_API_security_requirements
    - identify_user_misunderstanding_risk

  treasury_review:
    - summarize_exposure
    - review_allocation_context
    - flag_treasury_reporting_needs

  incident_review:
    - summarize_issue
    - identify_impact
    - propose_response
    - recommend_accountability_record

## 3. Other ACS Agent Roles

agent_roles:
  Morpheus:
    trading_role:
      - align_trading_docs_with_ecosystem_strategy
      - ensure_public_language_is_responsible
      - connect_trading_to_governance_Academy_Business_and_tokenomics

  Agent_Smith:
    trading_role:
      - adversarial_review
      - challenge_profit_claims
      - identify_API_key_abuse
      - identify_liquidation_and_governance_bypass_risk
      - detect_scope_or_access_policy_abuse

## 4. ACS Trading Runtime

ACS_trading_runtime:
  - trading_request_received
  - context_loaded
  - Trinity_prepares_strategy_or_risk_summary
  - Agent_Smith_reviews_high_risk_or_user_facing_items
  - Morpheus_reviews_public_docs_or_strategy_positioning_if needed
  - human_or_product_owner_validates
  - governance_or_treasury_review_if required
  - output_used_for_scope_docs_or_reporting
  - records_archived

## 5. Trinity Output Types

output_types:
  strategy_summary:
    fields:
      - logic
      - market
      - assumptions
      - risk
      - status

  risk_report:
    fields:
      - risk_categories
      - severity
      - limits
      - mitigation
      - review_required

  PnL_report:
    fields:
      - period
      - realized
      - unrealized
      - fees
      - drawdown
      - context
      - limitations

  user_disclosure_review:
    fields:
      - missing_disclosures
      - risky_claims
      - API_key_requirements
      - leverage_warnings

  treasury_review_note:
    fields:
      - allocation
      - exposure
      - performance
      - risks
      - governance_touchpoints

  incident_summary:
    fields:
      - event
      - impact
      - affected_users_or_assets
      - response
      - next_action

## 6. ACS Boundaries

ACS_and_Trinity_can:
  - analyze
  - summarize
  - flag_risks
  - draft_reports
  - recommend_limits
  - prepare_handoffs
  - support_monitoring

ACS_and_Trinity_cannot:
  - guarantee_profit
  - approve_strategy_access_policy_without_owner_or_governance
  - execute_treasury_trades_without_authority
  - manage_user_exchange_accounts_without_explicit_authorized_product_flow
  - override_risk_limits
  - hide_losses_or_incidents
  - publish_performance_claims_without validation

## 7. Public Documentation Guidance

The public ACS & Trinity Integration page should:

- define Trinity's role in Trading;
- explain Morpheus and Agent Smith support;
- show ACS trading runtime;
- list output types;
- define boundaries;
- link to ACS, Trinity, Risk Management, Treasury Alignment, and Reporting.
