# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: REPORTING AND ACCOUNTABILITY MODEL

[CRYPTODRAW_REPORTING_ACCOUNTABILITY]

## 1. Reporting Thesis

Lottery transparency depends on reporting.

Each draw should produce records that let users, governance, and reviewers understand tickets, randomness, results, prizes, claims, fees, treasury routing, incidents, and limitations.

## 2. Report Types

report_types:
  draw_report:
    purpose:
      - summarize_draw_configuration_ticket_count_randomness_result_winners_and_status

  ticket_report:
    purpose:
      - summarize_ticket_counts_valid_invalid_cancelled_and_indexed

  randomness_report:
    purpose:
      - record_VRF_or_randomness_source_request_fulfillment_and_result_derivation

  prize_report:
    purpose:
      - summarize_prize_pool_tiers_winners_claimed_unclaimed_and_rollover

  treasury_report:
    purpose:
      - summarize_ticket_revenue_fees_prizes_reserves_refunds_and_liabilities

  claim_report:
    purpose:
      - summarize_claims_submitted_settled_failed_disputed_expired

  incident_report:
    purpose:
      - document_randomness_ticket_prize_claim_security_or_compliance_issue

  governance_record:
    purpose:
      - preserve_parameter_approval_game_model_fee_or_emergency_decision

## 3. Draw Report Fields

draw_report_fields:
  - draw_id
  - game_model
  - game_model_version
  - draw_status
  - ticket_open_time
  - ticket_close_time
  - ticket_count
  - ticket_root_if any
  - randomness_source
  - randomness_request_reference
  - randomness_fulfillment_reference
  - draw_result
  - winner_count_by_tier
  - prize_pool
  - fees
  - claim_window
  - incidents
  - governance_reference
  - limitations

## 4. Accountability Records

accountability_records:
  game_model_record:
    includes:
      - rules_version_and_approval

  draw_configuration_record:
    includes:
      - parameters_times_and_fee_policy

  ticket_root_record:
    includes:
      - ticket_dataset_commitment_if used

  randomness_receipt:
    includes:
      - request_fulfillment_and_derivation_details

  prize_record:
    includes:
      - pool_tiers_winners_and_claim_status

  treasury_record:
    includes:
      - inflows_outflows_fees_reserves_and_liabilities

  incident_record:
    includes:
      - issue_impact_response_resolution_and_followup

## 5. Reporting Quality Rules

quality_rules:
  - report_must_use_game_model_version
  - ticket_count_must_match_finalized_ticket_set
  - randomness_source_must_be_identified
  - prize_pool_and_fees_must_be_reconciled
  - unclaimed_prizes_must_be_reported
  - incidents_must_not_be_hidden
  - limitations_must_be stated
  - public_reports_must_not_expose_private_user_data

## 6. Public Documentation Guidance

The public Reporting and Accountability page should:

- define report types and fields;
- define accountability records;
- explain quality rules;
- link to Draw Lifecycle, Randomness, Treasury, Governance, and Claims.
