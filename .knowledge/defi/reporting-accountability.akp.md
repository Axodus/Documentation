# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: REPORTING AND ACCOUNTABILITY MODEL

[AXODUS_DEFI_REPORTING_ACCOUNTABILITY]

## 1. Reporting Thesis

DeFi products and strategies require reporting.

Reports should include exposure, performance, fees, risks, incidents, protocol status, treasury impact, user-facing status, and governance decisions.

Reports must never cherry-pick positive yield while hiding losses, fees, lockups, or risks.

## 2. Report Types

report_types:
  DeFi_product_report:
    purpose:
      - summarize_product_status_usage_risk_and_changes

  strategy_report:
    purpose:
      - summarize_strategy_exposure_performance_fees_and_risk

  vault_report:
    purpose:
      - summarize_assets_deposits_withdrawals_fees_strategy_and incidents

  treasury_DeFi_report:
    purpose:
      - summarize_treasury_exposure_yield_loss_and_risk

  protocol_review_report:
    purpose:
      - summarize_protocol_status_risks_and_approval

  risk_report:
    purpose:
      - summarize_risk_limits_breaches_and_controls

  incident_report:
    purpose:
      - document_exploit_or_failure_response

  governance_record:
    purpose:
      - preserve_strategy_parameter_or_protocol_decisions

## 3. Report Fields

report_fields:
  - report_id
  - reporting_period
  - product_or_strategy
  - status
  - assets
  - protocols
  - exposure
  - deposits
  - withdrawals
  - yield_or_loss
  - fees
  - slippage_or_impermanent_loss_if relevant
  - liquidity_status
  - risk_limit_status
  - incidents
  - governance_references
  - security_review_status
  - limitations
  - no_yield_guarantee_note

## 4. Accountability Records

accountability_records:
  strategy_approval_record:
    includes:
      - decision_risk_limits_governance_reference

  protocol_whitelist_record:
    includes:
      - protocol_review_and_approval_status

  execution_receipt:
    includes:
      - material_contract_treasury_or_parameter_execution

  incident_record:
    includes:
      - issue_impact_response_and_followup

  disclosure_record:
    includes:
      - user_or_public_risk_disclosure_version

## 5. Public Documentation Guidance

The public Reporting and Accountability page should:

- define report types and fields;
- explain accountability records;
- include anti-cherry-picking guidance;
- link to Treasury, Governance, Security, and Risk.
