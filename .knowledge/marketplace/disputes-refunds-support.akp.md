# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: DISPUTES, REFUNDS AND SUPPORT MODEL

[AXODUS_MARKETPLACE_DISPUTES_REFUNDS_SUPPORT]

## 1. Dispute Thesis

Marketplace needs a clear process for cancellations, failed payments, failed delivery, refund requests, seller disputes, buyer complaints, and credit adjustments.

Dispute policy must be transparent before purchase.

## 2. Dispute Types

dispute_types:
  non_delivery:
    description:
      - seller_or_provider_did_not_deliver

  not_as_described:
    description:
      - delivered_item_or_service_differs_materially_from_listing

  access_issue:
    description:
      - buyer_cannot_access_course_download_or_subscription

  payment_issue:
    description:
      - payment_failed_duplicated_or_wrong_amount

  refund_request:
    description:
      - buyer_requests_refund_under_policy

  quality_issue:
    description:
      - course_or_service_quality_dispute

  credit_issue:
    description:
      - locked_reward_credit_or_discount_not_applied_as expected

  settlement_issue:
    description:
      - seller_payout_issue

  policy_violation:
    description:
      - listing_seller_or_buyer_violates_rules

## 3. Dispute Record Fields

dispute_record_fields:
  - dispute_id
  - order_id
  - buyer_reference
  - seller_id
  - listing_id
  - dispute_type
  - description
  - evidence
  - opened_at
  - status
  - reviewer
  - resolution
  - refund_amount
  - credit_adjustment
  - seller_payout_adjustment
  - closed_at
  - report_reference

## 4. Dispute Statuses

dispute_statuses:
  Open:
    meaning:
      - dispute_submitted

  Evidence_Requested:
    meaning:
      - more_information_needed

  Under_Review:
    meaning:
      - dispute_being_reviewed

  Resolved_Buyer:
    meaning:
      - resolved_in_buyer_favor

  Resolved_Seller:
    meaning:
      - resolved_in_seller_favor

  Partially_Resolved:
    meaning:
      - partial_refund_or_adjustment

  Rejected:
    meaning:
      - dispute_denied_under_policy

  Escalated:
    meaning:
      - requires_governance_business_treasury_or_security_review

  Closed:
    meaning:
      - final_status_recorded

## 5. Refund Models

refund_models:
  full_refund:
    description:
      - complete_return_of_payment_under_policy

  partial_refund:
    description:
      - partial_return_based_on_delivered_value_or decision

  credit_refund:
    description:
      - refund_as_marketplace_credit_if allowed

  original_asset_refund:
    description:
      - refund_in_original_payment_asset_if possible

  converted_asset_refund:
    description:
      - refund_after_swap_or_conversion_if policy supports
    warning:
      - value_may_differ_due_to_market_change

  no_refund:
    description:
      - non-refundable_listing_if clearly disclosed_and_policy_allows

## 6. Support Requirements

support_requirements:
  - clear_support_path
  - order_reference
  - expected_response_model
  - evidence_submission
  - escalation_path
  - refund_policy_visibility
  - seller_communication_expectations
  - privacy_and_data_rules

## 7. Public Documentation Guidance

The public Disputes, Refunds and Support page should:

- define dispute types, records, statuses, and refund models;
- list support requirements;
- explain that refund behavior depends on listing terms and policy.
