# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: ACADEMY ALIGNMENT MODEL

[AXODUS_MARKETPLACE_ACADEMY_ALIGNMENT]

## 1. Academy Alignment Thesis

Marketplace and Academy are tightly connected.

Academy creates educational products, tutors, courses, certifications, Proof of Knowledge paths, and Learn-to-Win reward flows.

Marketplace commercializes paid courses, tutor services, learning bundles, templates, certifications if approved, and possibly internal reward utility.

## 2. Academy-Marketplace Interfaces

interfaces:
  paid_courses:
    description:
      - users_purchase_Academy_courses_through_Marketplace

  free_course_rewards:
    description:
      - free_courses_may_issue_locked_rewards_under_Academy_policy

  paid_course_rewards:
    description:
      - paid_courses_may_issue_unlocked_or_different_reward_status_if policy defines

  tutor_profiles:
    description:
      - tutors_have_marketplace_profiles_and_course_listings

  course_bundles:
    description:
      - Marketplace_can_package_courses_into_learning_paths

  certification_or_Proof_of_Knowledge:
    description:
      - course_completion_or_assessment_may_unlock_badges_access_or_marketplace offers

  tutor_services:
    description:
      - tutors_may_sell_mentoring_consultation_or_custom_training

  educational_assets:
    description:
      - templates_guides_or_study_materials

## 3. Course Listing Fields

course_listing_fields:
  - course_id
  - title
  - tutor_id
  - level
  - prerequisites
  - learning_outcomes
  - modules
  - duration_or_pace
  - price
  - accepted_assets
  - reward_policy
  - locked_or_unlocked_reward_status
  - certification_or_badge_status
  - refund_policy
  - tutor_support_policy
  - quality_status
  - claim_review_status

## 4. Tutor Quality Rules

tutor_quality_rules:
  - tutor_profile_must_be_clear
  - course_claims_must_be_supported
  - certification_claims_require_review
  - income_or_career_claims_must_not_be_guaranteed
  - reward_claims_must_match_Academy_and_Tokenomics_policy
  - course_content_should_have_quality_review_if policy requires
  - user_feedback_and_completion_metrics_may_affect_visibility

## 5. Reward Language Rules

reward_language_rules:
  - free_course_rewards_should_be_described_as_locked_or_restricted_if that is policy
  - locked_rewards_should_not_be_described_as_withdrawable_transferable_or_sellable
  - paid_course_rewards_should_not_be_described_as_unlocked_unless policy_and_contracts confirm
  - rewards_are_not_income_guarantees
  - Proof_of_Knowledge_does_not_guarantee_marketplace_revenue
  - marketplace_discounts_using_rewards_must_be_policy_confirmed

## 6. Risks

risks:
  misleading_learning_outcome:
    description:
      - course_promises_job_income_or_certification_value_without basis

  reward_confusion:
    description:
      - users_misunderstand_locked_vs_unlocked_rewards

  tutor_quality:
    description:
      - low_quality_course_damages_trust

  refund_disputes:
    description:
      - users_dispute_course_value_or_access

  certification_overclaim:
    description:
      - course_claims_external_recognition_without proof

## 7. Public Documentation Guidance

The public Academy Alignment page should:

- explain Academy-Marketplace relationship;
- define course listing fields;
- list tutor quality and reward language rules;
- include risks and no-guarantee language.
