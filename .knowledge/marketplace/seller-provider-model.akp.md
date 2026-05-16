# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: SELLER / PROVIDER MODEL

[AXODUS_MARKETPLACE_SELLER_PROVIDER_MODEL]

## 1. Seller Model Thesis

Marketplace trust depends on clear seller, tutor, creator, and provider status.

Users must know who provides a listing, what their verification status is, what quality signals exist, and how disputes or support are handled.

## 2. Seller Types

seller_types:
  Axodus_Official:
    description:
      - official_Axodus_product_or_service_provider

  Academy_Tutor:
    description:
      - educator_or_course_creator_on_Academy

  Business_Provider:
    description:
      - provider_delivering_Business_service

  BBA_Provider:
    description:
      - provider_or_team_delivering_BBA_service

  DAO_Provider:
    description:
      - DAO_or_subDAO_offering_service

  Partner:
    description:
      - external_partner_approved_under_policy

  Community_Creator:
    description:
      - independent_creator_or_seller

  External_Client_Provider:
    description:
      - outside_provider_using_Marketplace_under_review

## 3. Seller Profile Fields

seller_profile_fields:
  - seller_id
  - display_name
  - seller_type
  - profile_description
  - verification_status
  - quality_status
  - specialties
  - credentials_or_references_if verified
  - linked_listings
  - payout_preferences
  - support_contact_or_channel
  - dispute_history_summary_if policy allows
  - policy_acceptance
  - status

## 4. Verification Statuses

verification_statuses:
  Unverified:
    meaning:
      - identity_or_claims_not_reviewed

  Basic_Verified:
    meaning:
      - basic_profile_or_contact_reviewed

  Qualified:
    meaning:
      - seller_meets_specific_category_requirements

  Official:
    meaning:
      - official_Axodus_or_approved_partner_status

  Suspended:
    meaning:
      - seller_temporarily_restricted

  Banned:
    meaning:
      - seller_removed_for_policy_violation

  Deprecated:
    meaning:
      - seller_no_longer_current_or_active

## 5. Quality Statuses

quality_statuses:
  New:
    meaning:
      - no_history_or_limited_history

  Active:
    meaning:
      - seller_currently_eligible

  Trusted:
    meaning:
      - seller_has_positive_history_and_review

  Needs_Review:
    meaning:
      - quality_or_policy_issue_requires_review

  Probation:
    meaning:
      - seller_allowed_under_restrictions

  Suspended:
    meaning:
      - seller_not_allowed_to_sell_temporarily

## 6. Seller Responsibilities

seller_responsibilities:
  - provide_accurate_listing_information
  - deliver_what_is_promised
  - avoid_unsupported_claims
  - follow_refund_and_support_policy
  - respect_user_privacy
  - disclose_requirements_and_limits
  - maintain_communication
  - comply_with_category_rules
  - accept_dispute_resolution_process
  - keep_credentials_and_claims_current

## 7. Tutor-Specific Requirements

tutor_requirements:
  - course_objectives_clear
  - prerequisites_defined
  - learning_outcomes_not_overpromised
  - certification_claims_reviewed
  - reward_claims_validated
  - content_quality_review_if policy requires
  - student_support_expectations_defined

## 8. Public Documentation Guidance

The public Seller / Provider Model page should:

- define seller types;
- list profile fields;
- explain verification and quality statuses;
- list responsibilities;
- include tutor-specific requirements.
