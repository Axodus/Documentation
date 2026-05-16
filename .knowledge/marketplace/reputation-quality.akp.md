# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: REPUTATION AND QUALITY MODEL

[AXODUS_MARKETPLACE_REPUTATION_QUALITY]

## 1. Reputation Thesis

Marketplace trust depends on quality signals that are useful but not misleading.

Ratings, reviews, badges, seller status, tutor quality, delivery history, and dispute history can help users, but they must not be manipulated or overclaimed.

## 2. Quality Signals

quality_signals:
  seller_verification:
    description:
      - profile_or_identity_status

  listing_review:
    description:
      - listing_claims_and_category_reviewed

  course_quality:
    description:
      - Academy_content_or_tutor_quality_status

  delivery_history:
    description:
      - service_or_order_completion_record

  buyer_reviews:
    description:
      - feedback_from_verified_buyers

  dispute_history:
    description:
      - summarized_resolution_history_if policy allows

  official_badge:
    description:
      - Axodus_official_or_partner_status_if approved

  claim_review_badge:
    description:
      - sensitive_claims_reviewed_if policy supports

## 3. Badge Types

badge_types:
  Official:
    meaning:
      - official_Axodus_or_approved_partner_listing

  Verified_Seller:
    meaning:
      - seller_identity_or_profile_reviewed

  Quality_Reviewed:
    meaning:
      - listing_or_course_passed_quality_review

  Claim_Reviewed:
    meaning:
      - sensitive_claims_reviewed

  Academy_Approved:
    meaning:
      - course_or_tutor_approved_under_Academy_policy

  Business_Approved:
    meaning:
      - service_package_approved_under_Business_policy

  BBA_Reviewed:
    meaning:
      - positioning_or_claims_reviewed_by_BBA

  Needs_Review:
    meaning:
      - listing_or_seller_requires_followup

## 4. Review Object

review_fields:
  - review_id
  - order_id
  - buyer_reference
  - seller_id
  - listing_id
  - rating_if supported
  - text
  - verified_purchase
  - moderation_status
  - dispute_related
  - created_at

## 5. Quality Rules

quality_rules:
  - reviews_should_be_tied_to_verified_orders_when possible
  - fake_or_manipulated_reviews_should_be_removed
  - badges_must_have_defined_meaning
  - official_status_requires approval
  - quality_status_must_be_current
  - negative_feedback_should_not_be_hidden_without policy
  - reputation_metrics_should_not_guarantee_outcomes

## 6. Risks

risks:
  fake_reviews:
    description:
      - manipulated_rating_or_feedback

  badge_confusion:
    description:
      - users_misunderstand_badge_as_guarantee

  stale_quality:
    description:
      - old_review_status_no_longer_valid

  unfair_seller_damage:
    description:
      - bad_review_or_dispute_record_misused

  outcome_overclaim:
    description:
      - high_rating_presented_as_guaranteed_success

## 7. Public Documentation Guidance

The public Reputation and Quality page should:

- define quality signals and badges;
- list review fields and quality rules;
- explain risks;
- state that reputation signals do not guarantee outcomes.
