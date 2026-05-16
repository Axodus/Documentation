# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: BUYER FLOW MODEL

[AXODUS_MARKETPLACE_BUYER_FLOW]

## 1. Buyer Flow Thesis

Buyer flow must make purchase decisions clear and safe.

A buyer should understand the listing, seller status, price, accepted assets, discounts, credits, delivery terms, refund policy, risk disclosures, and support path before purchase.

## 2. Buyer Flow

buyer_flow:
  - discover_listing
  - review_listing_details
  - review_seller_or_provider_status
  - review_included_and_not_included_items
  - review_price_assets_fees_discounts_and_credits
  - review_delivery_and_refund_terms
  - review_risk_disclosures_if any
  - add_to_cart_or_start_checkout
  - confirm_payment_method
  - apply_discount_or_credit_if eligible
  - approve_or_sign_transaction_if crypto_payment
  - payment_processed
  - order_created
  - access_or_delivery_started
  - buyer_accepts_delivery_or_completes_course_if relevant
  - seller_settlement_processed_if conditions met
  - buyer_review_or_support_path_available

## 3. Buyer Order Object

order_fields:
  - order_id
  - buyer_reference
  - listing_id
  - seller_id
  - order_status
  - payment_status
  - delivery_status
  - settlement_status
  - refund_status
  - dispute_status
  - price
  - payment_asset
  - credits_used
  - discounts
  - fees
  - created_at
  - completed_at_if any

## 4. Order Statuses

order_statuses:
  Created:
    meaning:
      - order_initialized

  Awaiting_Payment:
    meaning:
      - payment_not_completed

  Paid:
    meaning:
      - payment_received_or_confirmed

  In_Delivery:
    meaning:
      - service_or_access_delivery_in_progress

  Delivered:
    meaning:
      - deliverable_provided

  Completed:
    meaning:
      - buyer_or_policy_marks_order_complete

  Cancelled:
    meaning:
      - order_cancelled_before_completion

  Refunded:
    meaning:
      - refund_processed

  Disputed:
    meaning:
      - order_under_dispute_review

  Failed:
    meaning:
      - payment_or_delivery_failed

## 5. Buyer Protection Requirements

buyer_protection:
  - clear_listing_description
  - seller_status_visible
  - price_and_fees_visible
  - refund_policy_visible
  - delivery_model_visible
  - risk_disclosures_visible
  - support_path_visible
  - transaction_summary_before_payment
  - dispute_process_available_if policy supports
  - no_hidden_token_or_credit_rules

## 6. Public Documentation Guidance

The public Buyer Flow page should:

- describe buyer flow step by step;
- define order fields and statuses;
- explain buyer protection requirements;
- state that outcomes depend on listing terms and are not guaranteed.
