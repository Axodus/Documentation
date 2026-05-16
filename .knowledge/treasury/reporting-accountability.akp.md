# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: REPORTING AND ACCOUNTABILITY MODEL

[AXODUS_TREASURY_REPORTING_ACCOUNTABILITY]

## 1. Reporting Thesis

Treasury reporting creates trust.

Reports must explain assets, inflows, outflows, allocations, reserves, risks, PnL where applicable, liabilities, incidents, and governance decisions.

Reporting should be accurate, contextualized, and safe.

Transparency does not require exposing secrets.

## 2. Report Types

report_types:
  treasury_snapshot:
    purpose:
      - show_assets_allocations_reserves_and_major_changes_at_a_point_in_time

  financial_report:
    purpose:
      - summarize_inflows_outflows_expenses_revenue_and_net_position

  allocation_report:
    purpose:
      - show_how_treasury_resources_are_assigned

  reserve_report:
    purpose:
      - show_operating_stable_emergency_and_liquidity_reserve_status

  trading_PnL_report:
    purpose:
      - show_internal_strategy_results_with_risk_context

  exposure_report:
    purpose:
      - show_asset_exchange_protocol_counterparty_and_strategy_exposure

  reward_budget_report:
    purpose:
      - show_Academy_Marketplace_governance_or_campaign_reward_budget_use

  fee_report:
    purpose:
      - show_fees_collected_allocated_burned_or_routed

  incident_report:
    purpose:
      - document_material_loss_security_issue_execution_error_or_policy_breach

  governance_treasury_record:
    purpose:
      - preserve_treasury_related_governance_decisions_and_execution_receipts

## 3. Treasury Report Fields

treasury_report_fields:
  - report_id
  - reporting_period
  - status
  - assets_summary
  - reserve_summary
  - inflows
  - outflows
  - operating_expenses
  - revenue_sources
  - allocations
  - PnL_if_applicable
  - fees
  - reward_budget_usage
  - liabilities_or_commitments
  - exposure
  - risk_limit_status
  - incidents
  - governance_decisions
  - execution_receipts
  - assumptions
  - limitations
  - next_review

## 4. Public vs Internal Reports

public_reports:
  should_include:
    - summarized_assets_or_categories_if approved
    - inflow_outflow_summary
    - allocation_categories
    - risk_notes
    - governance_references
    - major_incidents_if material
    - no_private_keys_or_sensitive_security_details

internal_reports:
  may_include:
    - detailed_wallet_balances
    - counterparty_details
    - signer_or_access_review_notes
    - sensitive_risk_findings
    - internal_reconciliation
    - investigation_details

rule:
  - Public_reporting_should_balance_transparency_and_security.

## 5. Accountability Records

accountability_records:
  treasury_action_record:
    includes:
      - requested_action_approval_execution_and_receipt

  allocation_record:
    includes:
      - purpose_amount_risk_and_approval

  reserve_record:
    includes:
      - reserve_category_status_and_review

  revenue_record:
    includes:
      - source_amount_destination_and_period

  fee_record:
    includes:
      - fee_type_amount_destination_and_reporting_period

  PnL_record:
    includes:
      - strategy_period_realized_unrealized_fees_drawdown_and_notes

  risk_review_record:
    includes:
      - risk_categories_limits_decision_and_reviewer

  incident_record:
    includes:
      - event_impact_response_resolution_and_followup

## 6. Reporting Cadence

reporting_cadence:
  event_based:
    use_when:
      - material_treasury_action_or_incident_occurs

  periodic:
    use_when:
      - mature_reporting_process_exists

  campaign_end:
    use_when:
      - reward_or_partner_campaign_ends

  strategy_review:
    use_when:
      - trading_or_DeFi_strategy_reaches_checkpoint

  governance_request:
    use_when:
      - governance_needs_current_financial_context

## 7. Reporting Quality Rules

quality_rules:
  - numbers_should_have_source_or_method
  - PnL_should_distinguish_realized_unrealized_and_net_after_fees
  - reports_should_include_limitations
  - material_changes_should_link_to_governance_or_execution_receipts
  - reports_should_not_hide_losses
  - public_reports_should_not_expose_secrets
  - estimates_should_be_labeled_as_estimates

## 8. Reporting Anti-Patterns

anti_patterns:
  selective_positive_reporting:
    problem:
      - only_gains_or_good_news_reported

  no_context_numbers:
    problem:
      - figures_without_period_method_or_limitations

  hidden_liabilities:
    problem:
      - locked_rewards_or_marketplace_credits_not_reported

  secret_exposure:
    problem:
      - report_reveals_private_operational_security_data

  missing_execution_receipts:
    problem:
      - material_actions_cannot_be_verified

## 9. Public Documentation Guidance

The public Reporting and Accountability page should:

- define report types and fields;
- distinguish public and internal reporting;
- define accountability records;
- explain cadence and quality rules;
- warn against selective reporting and secret exposure;
- link to Accountability, Governance, Tokenomics, Trading, and Risk.
