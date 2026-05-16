# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: DRAW LIFECYCLE MODEL

[CRYPTODRAW_DRAW_LIFECYCLE]

## 1. Lifecycle Thesis

A draw must follow a deterministic lifecycle.

Users must know when tickets open, when tickets close, when randomness is requested, when results are final, when claims open, and when claims expire.

## 2. Draw Round Object

draw_round_fields:
  - draw_id
  - game_model_id
  - game_model_version
  - status
  - ticket_open_time
  - ticket_close_time
  - randomness_request_time
  - randomness_fulfillment_time
  - result_publication_time
  - claim_open_time
  - claim_close_time
  - ticket_count
  - ticket_root_if any
  - randomness_source
  - result
  - prize_pool
  - fee_policy
  - governance_reference_if any
  - report_reference

## 3. Draw Statuses

draw_statuses:
  Draft:
    meaning:
      - draw_configured_but_not_open

  Scheduled:
    meaning:
      - draw_has_defined_open_close_times

  Open:
    meaning:
      - tickets_can_be_created

  Closing:
    meaning:
      - ticket_window_near_close_or_processing_final_entries

  Closed:
    meaning:
      - no_more_tickets_accepted

  Indexing:
    meaning:
      - tickets_being_indexed_or_Merkle_root_prepared_if needed

  Randomness_Requested:
    meaning:
      - VRF_or_randomness_request_submitted

  Randomness_Fulfilled:
    meaning:
      - randomness_received

  Result_Computed:
    meaning:
      - winning_numbers_or_positions_generated

  Result_Published:
    meaning:
      - result_available_to_users

  Claims_Open:
    meaning:
      - winners_can_claim

  Claims_Closed:
    meaning:
      - claim_window_ended

  Finalized:
    meaning:
      - draw_prizes_claims_and_reports_finalized

  Cancelled:
    meaning:
      - draw_cancelled_under_policy

  Disputed:
    meaning:
      - draw_requires_review

  Paused:
    meaning:
      - draw_temporarily_stopped

## 4. Draw Lifecycle Flow

flow:
  - governance_or_operator_creates_draw_config
  - draw_status_set_to_scheduled
  - ticket_window_opens
  - users_create_valid_tickets
  - ticket_window_closes
  - ticket_set_finalized
  - ticket_root_generated_if applicable
  - randomness_requested
  - randomness_fulfilled
  - result_computed_from_randomness_and_game_rules
  - result_published
  - winners_calculated
  - claim_window_opens
  - winners_claim_prizes
  - unclaimed_prizes_processed_by_policy
  - draw_report_published_or_archived
  - draw_finalized

## 5. Cancellation and Refund

cancellation_conditions:
  - randomness_failure_not_resolved
  - contract_or_security_issue
  - compliance_or_governance_pause
  - insufficient_ticket_or_prize_conditions_if policy defines
  - operational_incident
  - detected_integrity_issue

refund_policy_questions:
  - Are_tickets_refunded_if_draw_cancelled?
  - Is_refund_in_original_asset?
  - Who_pays_gas_or_network_costs?
  - What_if_ticket_was_free_or_promotional?
  - How_is_refund_reported?

## 6. Public Documentation Guidance

The public Draw Lifecycle page should:

- define draw round fields and statuses;
- explain lifecycle flow;
- explain cancellation and refund questions;
- link to Tickets, Randomness, Prizes, Claims, and Reporting.
