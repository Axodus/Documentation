# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: TICKET MODEL

[CRYPTODRAW_TICKET_MODEL]

## 1. Ticket Thesis

A ticket is the user's entry into a draw.

Ticket rules must be precise because tickets determine eligibility, validation, winner calculation, claims, refunds, and auditability.

CryptoDraw may use soulbound or non-transferable tickets to reduce secondary-market complexity, fraud, and compliance risk.

## 2. Ticket Definition

ticket:
  definition:
    - record_representing_valid_entry_for_specific_draw_round_and_game_model_version

soulbound_ticket:
  definition:
    - non_transferable_ticket_bound_to_original_owner_or_account_if implemented

ticket_is_not:
  - guaranteed_prize
  - investment_asset
  - tradable_security
  - transferable_NFT_unless_explicitly approved
  - valid_forever

## 3. Ticket Fields

ticket_fields:
  - ticket_id
  - draw_id
  - game_model_id
  - game_model_version
  - owner_reference
  - selected_numbers_or_positions
  - ticket_hash
  - purchase_or_entry_timestamp
  - payment_asset_if any
  - ticket_price_if any
  - status
  - metadata_uri_if any
  - Merkle_leaf_if applicable
  - transaction_hash_if on_chain
  - claim_status
  - refund_status_if any

## 4. Ticket Statuses

ticket_statuses:
  Draft:
    meaning:
      - user_selection_not_confirmed

  Pending_Payment:
    meaning:
      - ticket_created_but_payment_not_final

  Valid:
    meaning:
      - ticket_entered_into_draw

  Invalid:
    meaning:
      - ticket_failed_validation_or_payment

  Cancelled:
    meaning:
      - ticket_cancelled_before_close_if policy allows

  Refunded:
    meaning:
      - ticket_refunded_due_to_failed_or_cancelled_draw_if policy allows

  Drawn:
    meaning:
      - draw_result_available

  Winning:
    meaning:
      - ticket_eligible_for_prize

  Non_Winning:
    meaning:
      - ticket_not_eligible_for_prize

  Claimable:
    meaning:
      - winning_ticket_can_claim_within_window

  Claimed:
    meaning:
      - prize_claimed

  Expired:
    meaning:
      - claim_window_closed_or_ticket_no_longer_valid

  Disputed:
    meaning:
      - ticket_or_claim_requires_review

## 5. Soulbound Design Rationale

soulbound_rationale:
  - reduces_secondary_market_complexity
  - reduces_ticket_resale_and_fraud_risk
  - simplifies_claim_authorization
  - supports_accountability
  - may_reduce_regulatory_and_consumer_protection_complexity
  - preserves_ticket_as_participation_record_not_investment_asset

soulbound_warning:
  - Non-transferability must be enforced by contract or platform logic.
  - Do not claim tickets are soulbound unless implementation verifies it.

## 6. Ticket Validation

validation_rules:
  - draw_must_be_open
  - game_model_must_be_active
  - selection_must_match_game_rules
  - payment_or_entry_condition_must_be_valid
  - user_must_pass_restrictions_if implemented
  - duplicate_policy_must_be_defined
  - max_ticket_policy_must_be_enforced_if defined

## 7. Ticket Privacy

privacy_considerations:
  - selected_numbers_may_be_public_or_private_depending_on_design
  - commitment_hash_can_hide_selection_until_close_if implemented
  - full_ticket_metadata_should_not_expose_sensitive_user_data
  - offchain_indexing_must_protect_private_user_information

## 8. Public Documentation Guidance

The public Ticket Model page should:

- define tickets and soulbound tickets;
- list fields and statuses;
- explain validation and privacy;
- state that tickets do not guarantee prizes and may not be transferable.
