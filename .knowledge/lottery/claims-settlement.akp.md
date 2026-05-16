# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: CLAIMS AND SETTLEMENT MODEL

[CRYPTODRAW_CLAIMS_SETTLEMENT]

## 1. Claims Thesis

Winning a prize is not complete until the claim and settlement process is defined and executed.

Claims must be time-bound, auditable, and protected against duplicate claims, invalid tickets, fraud, and settlement errors.

## 2. Claim Concepts

concepts:
  claim:
    definition:
      - process_or_transaction_by_which_eligible_winner_receives_prize

  claim_window:
    definition:
      - time_period_during_which_winner_can_claim_prize

  settlement:
    definition:
      - payment_or_delivery_of_prize_to_winner

  unclaimed_prize:
    definition:
      - prize_not_claimed_before_deadline

  expired_prize:
    definition:
      - prize_no_longer_claimable_after_window

  claim_proof:
    definition:
      - evidence_that_ticket_or_winner_record_is_eligible_for_prize

## 3. Claim Object

claim_fields:
  - claim_id
  - draw_id
  - ticket_id
  - claimant_reference
  - prize_tier
  - prize_amount
  - claim_status
  - claim_deadline
  - claim_proof_if any
  - settlement_asset
  - settlement_transaction
  - failure_reason_if any
  - timestamp

## 4. Claim Statuses

claim_statuses:
  Not_Eligible:
    meaning:
      - ticket_is_not_winning

  Claimable:
    meaning:
      - eligible_and_within_claim_window

  Pending:
    meaning:
      - claim_submitted_but_not_settled

  Settled:
    meaning:
      - prize_paid_or_delivered

  Failed:
    meaning:
      - claim_attempt_failed

  Disputed:
    meaning:
      - claim_requires_review

  Expired:
    meaning:
      - claim_window_closed

  Revoked:
    meaning:
      - claim_invalidated_due_to_rule_or_fraud_if policy supports

## 5. Settlement Models

settlement_models:
  automatic_payout:
    description:
      - contract_pays_prize_automatically_if feasible

  user_claim:
    description:
      - winner_calls_claim_function_or_process

  batch_claim:
    description:
      - multiple_claims_processed_in_batch

  Merkle_claim:
    description:
      - user_claims_with_Merkle_proof_if winner_root_used

  manual_or_reviewed_claim:
    description:
      - sensitive_claim_requires_review_if policy defines

## 6. Unclaimed Prize Policy

unclaimed_policy_options:
  - rollover_to_future_draw
  - return_to_treasury_or_prize_reserve
  - community_pool
  - burn_if token_based_and_policy_allows
  - sponsor_refund_if promotional
  - governance_decision

documentation_rule:
  - Unclaimed_prize_policy_must_be_defined_before draw opens.

## 7. Public Documentation Guidance

The public Claims and Settlement page should:

- define claim concepts and fields;
- explain statuses and settlement models;
- explain unclaimed prize policy options;
- state that claim windows and rules must be followed.
