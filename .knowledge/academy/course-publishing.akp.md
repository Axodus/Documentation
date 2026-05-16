# AXODUS KNOWLEDGE PACK
# DOMAIN: ACADEMY
# TYPE: COURSE PUBLISHING MODEL

[AXODUS_COURSE_PUBLISHING]

## 1. Course Publishing Thesis

Axodus Academy should allow not only Axodus Core but also qualified tutors, companies, DAOs, partners, and content creators to publish educational content.

This creates an education marketplace and knowledge economy, but it requires clear validation, pricing, access rules, fee distribution, royalty policies, quality standards, and governance alignment.

Course publishing must be structured enough to prevent low-quality content, misleading financial claims, reward abuse, and marketplace confusion.

## 2. Publisher Types

publisher_types:
  Axodus_Core:
    description:
      - official_courses_created_by_core_team_or_approved_operators
    examples:
      - governance_onboarding
      - DeFi_safety
      - trading_API_safety
      - Academy_intro
      - Marketplace_usage

  Independent_Tutor:
    description:
      - individual_educator_or_expert_publishing_courses
    requirements:
      - validation_status
      - quality_review
      - category_alignment

  Company_or_Partner:
    description:
      - organization_publishing_training_or_certification_content
    requirements:
      - business_intake
      - agreement_or_policy_review
      - content_and_claim_review

  DAO_or_SubDAO:
    description:
      - DAO_publishing_community_specific_training
    requirements:
      - governance_alignment
      - local_DAO_context
      - product_or_plugin_accuracy_review

  ACS_Assisted_Content:
    description:
      - content_generated_or_enhanced_with_AI_assistance
    requirements:
      - human_review
      - accuracy_validation
      - disclosure_if_policy_requires

## 3. Course Object

course_fields:
  - course_id
  - title
  - subtitle
  - description
  - category
  - difficulty
  - language
  - publisher_type
  - tutor_or_organization_id
  - status
  - access_type
  - price
  - accepted_currencies
  - reward_policy_id
  - certification_policy_id
  - marketplace_listing_id
  - prerequisites
  - learning_objectives
  - modules
  - assessments
  - Proof_of_Knowledge_requirements
  - refund_policy_if_any
  - royalty_policy
  - commission_policy
  - operational_fee_policy
  - risk_disclosures
  - governance_review_status
  - ACS_review_status
  - quality_review_status
  - publication_date
  - last_updated

## 4. Course Types

course_types:
  free_onboarding:
    description:
      - beginner_accessible_courses_for_user_entry
    reward_context:
      - may_issue_small_locked_or_internal_rewards

  paid_course:
    description:
      - premium_course_purchased_through_marketplace_or_Academy
    reward_context:
      - may_have_different_reward_or_unlock_rules

  certification_track:
    description:
      - structured_path_leading_to_certificate_or_badge

  product_training:
    description:
      - teaches_specific_Axodus_product_or_module

  governance_training:
    description:
      - teaches_DAO_participation_proposals_voting_risk

  trading_training:
    description:
      - teaches_trading_tool_usage_API_key_safety_and_risk
    warning:
      - must_include_no_profit_guarantee_language

  partner_course:
    description:
      - content_from_company_DAO_or_external_partner

  tutor_course:
    description:
      - content_from_approved_independent_tutor

## 5. Course Publishing Flow

publishing_flow:
  1_publisher_registration:
    - tutor_or_organization_creates_profile
    - validation_status_checked

  2_course_draft_creation:
    - course_metadata_created
    - objectives_defined
    - modules_and_lessons_added

  3_parameter_definition:
    - access_type_set
    - pricing_defined
    - accepted_currencies_selected
    - reward_policy_requested_if_any
    - royalty_commission_fee_rules_defined
    - certification_policy_defined

  4_initial_review:
    - content_quality_review
    - claim_review
    - risk_review
    - ACS_assisted_review_if_available

  5_governance_or_policy_review:
    - required_if_course_affects_rewards_tokenomics_governance_or_high_risk_products

  6_marketplace_listing:
    - listing_created_if_course_is_commercial
    - payment_and_access_rules_configured

  7_publication:
    - course_status_set_to_active
    - learners_can_enroll_or_purchase

  8_monitoring:
    - learner_feedback_collected
    - completion_and_refund_metrics_checked
    - abuse_signals_monitored

  9_updates:
    - course_versioning
    - outdated_content_review
    - reward_policy_revalidation_if_changed

## 6. Course Parameters

required_parameters:
  pricing:
    options:
      - free
      - fixed_price
      - subscription_access
      - token_gated
      - voucher_based
      - partner_sponsored

  accepted_currencies:
    examples:
      - stablecoins
      - native_tokens
      - $Neurons_if_supported
      - marketplace_credits_if_supported
    warning:
      - do_not_claim_supported_payment_assets_until_implemented

  fee_distribution:
    components:
      - tutor_revenue
      - platform_fee
      - royalty
      - operational_fee
      - treasury_allocation_if_defined
      - referral_or_affiliate_fee_if_defined

  reward_parameters:
    components:
      - reward_amount
      - locked_or_unlocked_status
      - eligibility_conditions
      - maximum_claims
      - abuse_controls
      - governance_status

  access_rules:
    components:
      - prerequisites
      - certification_required
      - token_holding_required_if_any
      - DAO_membership_required_if_any
      - purchase_required
      - expiration_or_lifetime_access

## 7. Financial Distribution Model

financial_distribution_questions:
  - What_percentage_goes_to_tutor?
  - What_percentage_goes_to_Axodus_platform?
  - Is_there_a_royalty_for_original_content?
  - Is_there_a_treasury_allocation?
  - Are_fees_configurable_by_course?
  - Are_fees_governance_controlled?
  - Are_payments_settled_on_chain_or_off_chain?
  - What_assets_are_accepted?
  - How_are_refunds_handled?
  - Can_locked_rewards_be_used_for_payment?
  - If_locked_rewards_are_used_who_receives_what?

documentation_rule:
  - Do not invent final percentages.
  - Document distribution model as configurable or planned unless confirmed.

## 8. Review Requirements

review_requirements:
  content_quality:
    - clarity
    - accuracy
    - completeness
    - appropriate_difficulty
    - learning_objectives_match_assessment

  claims_review:
    - no_guaranteed_profit
    - no_unverified_partnership
    - no_fake_audit_claim
    - no_legal_or_financial_advice_misrepresentation

  technical_review:
    - code_examples_checked
    - smart_contract_or_API_examples_verified
    - outdated_instructions_flagged

  risk_review:
    - DeFi_risks_disclosed
    - trading_risks_disclosed
    - wallet_security_included
    - API_key_risks_included_if_relevant

  reward_review:
    - reward_policy_consistent
    - anti_abuse_controls_present
    - tokenomics_impact_checked

## 9. Course Status Model

course_statuses:
  Draft:
    meaning:
      - course_under_creation

  Submitted_For_Review:
    meaning:
      - publisher_requested_review

  Under_ACS_Review:
    meaning:
      - AI_assisted_review_in_progress

  Under_Human_Review:
    meaning:
      - reviewer_validating_content

  Governance_Review_Required:
    meaning:
      - course_policy_reward_or_high_risk_scope_requires_governance

  Approved:
    meaning:
      - course_can_be_published

  Active:
    meaning:
      - course_available_to_learners

  Needs_Update:
    meaning:
      - content_outdated_or_incomplete

  Suspended:
    meaning:
      - temporarily_unavailable_due_to_issue

  Rejected:
    meaning:
      - course_does_not_meet_requirements

  Archived:
    meaning:
      - course_preserved_but_not_active

## 10. Public Documentation Guidance

The public Course Publishing page should:

- explain who can publish courses;
- explain course parameters;
- explain pricing, accepted assets, royalties, commissions, and operational fees conceptually;
- explain review and validation process;
- explain marketplace integration;
- explain governance touchpoints;
- avoid defining final fee percentages unless known;
- include risk and quality requirements.
