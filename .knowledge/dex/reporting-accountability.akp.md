# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: REPORTING AND ACCOUNTABILITY MODEL

[AXODUS_DEX_REPORTING_ACCOUNTABILITY]

## 1. Reporting Thesis

DEX activity should be reportable.

Reports should explain liquidity, volume, fees, pool status, listing changes, treasury exposure, incidents, and governance decisions.

Reporting must include limitations and should not hide low liquidity, losses, failed transactions, or incidents.

## 2. Report Types

report_types:
  DEX_activity_report:
    purpose:
      - summarize_volume_liquidity_fees_and_user_activity

  pool_report:
    purpose:
      - summarize_pool_liquidity_volume_fees_risks_and_status

  fee_report:
    purpose:
      - summarize_fee_collection_distribution_and_revenue

  listing_report:
    purpose:
      - summarize_listing_status_changes_warnings_and_reviews

  treasury_liquidity_report:
    purpose:
      - summarize_treasury_LP_positions_exposure_fees_and_impermanent_loss_context

  incident_report:
    purpose:
      - document_security_execution_listing_or_liquidity_incident

  governance_record:
    purpose:
      - preserve_listing_fee_pool_incentive_or_emergency_decisions

## 3. Report Fields

report_fields:
  - report_id
  - reporting_period
  - volume
  - liquidity
  - pool_count
  - active_pools
  - fees_collected
  - LP_fee_distribution_if available
  - treasury_fee_if any
  - treasury_LP_positions_if any
  - listing_changes
  - incidents
  - governance_references
  - risk_notes
  - limitations

## 4. Accountability Records

accountability_records:
  listing_record:
    includes:
      - token_status_review_and_decision

  pool_record:
    includes:
      - pool_parameters_status_and_governance_context

  fee_record:
    includes:
      - fee_rates_destinations_and_period

  treasury_LP_record:
    includes:
      - treasury_position_risk_and_report

  incident_record:
    includes:
      - issue_impact_response_resolution

  execution_receipt:
    includes:
      - material_contract_treasury_or_governance_execution

## 5. Public Documentation Guidance

The public Reporting and Accountability page should:

- define report types and fields;
- define accountability records;
- explain limitations;
- link to Treasury, Governance, Security, and Risk.
