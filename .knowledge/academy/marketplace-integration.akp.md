# AXODUS KNOWLEDGE PACK
# DOMAIN: ACADEMY
# TYPE: MARKETPLACE INTEGRATION MODEL

[AXODUS_ACADEMY_MARKETPLACE_INTEGRATION]

## 1. Integration Thesis

Academy and Marketplace are closely linked.

Academy creates educational content, courses, certifications, tutor services, and learning-related products.

Marketplace enables commercialization, discovery, purchase, access control, payment, royalties, commissions, and distribution for those educational products.

This integration must be documented carefully because it touches pricing, accepted currencies, token utility, locked rewards, tutor compensation, fees, refunds, reputation, and governance policy.

## 2. Marketplace Roles for Academy

marketplace_roles:
  course_storefront:
    description:
      - lists_courses_and_learning_paths_for_purchase_or_access

  educational_product_market:
    description:
      - sells_templates_guides_tools_recordings_workshops_or_learning_materials

  tutor_service_market:
    description:
      - allows_tutors_or_companies_to_offer_training_services

  certification_access_layer:
    description:
      - sells_or_unlocks_certification_tracks_if_policy_supports

  token_utility_surface:
    description:
      - may_accept_$Neurons_or_locked_rewards_if_supported

  revenue_distribution_layer:
    description:
      - handles_tutor_platform_royalty_commission_and_operational_fee_logic

## 3. Marketplace Product Types

product_types:
  course:
    description:
      - single_course_access

  learning_path:
    description:
      - bundle_of_courses_or_modules

  certification_track:
    description:
      - course_plus_assessment_plus_certificate

  workshop:
    description:
      - live_or_recorded_session

  tutor_service:
    description:
      - consulting_or_training_service

  template_or_toolkit:
    description:
      - downloadable_or_platform_based_learning_artifact

  DAO_training_program:
    description:
      - governance_or_product_training_for_specific_DAO

  enterprise_or_partner_program:
    description:
      - structured_company_or_partner_learning_offer

## 4. Purchase and Access Flow

purchase_access_flow:
  - user_browses_marketplace
  - user_selects_course_or_learning_product
  - marketplace_checks_listing_status
  - accepted_payment_methods_shown
  - price_fee_and_access_rules_displayed
  - user_purchases_or_redeems_access
  - payment_or_credit_use_processed
  - access_entitlement_created
  - Academy_enrollment_or_content_access_unlocked
  - tutor_platform_and_treasury_revenue_accounted_if_applicable
  - receipt_or_order_record_created
  - learner_progress_begins

## 5. Payment Sources

payment_sources:
  possible:
    - stablecoin
    - chain_native_token
    - `$Neurons`
    - locked_rewards_if_supported
    - internal_credits_if_supported
    - fiat_gateway_if_integrated
    - voucher_or_coupon
    - partner_sponsored_access

documentation_warning:
  - Do not claim any specific payment source is accepted unless implemented.
  - If using `$Neurons` or locked rewards, explain utility and restrictions clearly.

## 6. Fee and Distribution Model

fee_components:
  tutor_revenue:
    meaning:
      - portion_paid_to_course_creator_or_tutor

  platform_fee:
    meaning:
      - portion_paid_to_Axodus_platform_operations

  royalty:
    meaning:
      - ongoing_share_for_original_creator_or_IP_policy

  operational_fee:
    meaning:
      - infrastructure_processing_or_service_fee

  treasury_allocation:
    meaning:
      - portion_allocated_to_treasury_if_policy_defines

  marketplace_fee:
    meaning:
      - general_marketplace_transaction_fee_if_defined

  referral_or_affiliate_fee:
    meaning:
      - optional_distribution_to_referrer_if_policy_defines

distribution_caution:
  - Do not invent percentages.
  - Do not claim final split until governance/product policy defines it.
  - Course-level fee parameters may be configurable if implemented.

## 7. Locked Rewards in Marketplace

locked_rewards_marketplace_use:
  possible_models:
    discount_model:
      description:
        - locked_rewards_reduce_purchase_price_but_do_not_directly_settle_tutor_payment

    internal_credit_model:
      description:
        - locked_rewards_spent_as_internal_platform_credit

    restricted_catalog_model:
      description:
        - locked_rewards_can_only_buy_specific_courses_or_platform-owned_products

    full_payment_model:
      description:
        - locked_rewards_can_pay_full_price_if_settlement_policy_defined

  unresolved_questions:
    - Does_tutor_receive_unlocked_tokens_when_locked_rewards_are_spent?
    - Does_platform_absorb_locked_reward_credit?
    - Are_locked_rewards_burned_or_transferred?
    - Are_refunds_possible?
    - Are_there_per_course_limits?
    - Can_locked_rewards_buy_third_party_tutor_courses?
    - Is_spending_on_chain_or_internal?

documentation_rule:
  - Mark locked reward marketplace settlement as Needs Review until policy and implementation are final.

## 8. Course Listing Object

course_listing_fields:
  - listing_id
  - course_id
  - title
  - publisher
  - tutor_id
  - product_type
  - price
  - accepted_payment_sources
  - locked_reward_eligibility
  - access_duration
  - refund_policy
  - royalty_policy
  - commission_policy
  - operational_fee_policy
  - marketplace_status
  - course_status
  - tutor_validation_status
  - risk_disclosures
  - governance_status
  - created_at
  - updated_at

## 9. Governance Touchpoints

governance_touchpoints:
  - marketplace_fee_policy
  - token_payment_policy
  - locked_reward_spend_policy
  - tutor_revenue_rules
  - refund_policy_for_token_or_locked_credit_payments
  - high_risk_course_category_policy
  - dispute_resolution_rules
  - treasury_allocation_from_marketplace_revenue

## 10. Risks

risks:
  unclear_payment_rules:
    description:
      - users_or_tutors_do_not_understand_accepted_assets_or settlement

  locked_reward_abuse:
    description:
      - users_farm_free_rewards_to_purchase_value_from_marketplace

  tutor_self_dealing:
    description:
      - tutor_creates_fake_learners_to_extract_rewards_or_revenue

  refund_exploit:
    description:
      - users_purchase_with_rewards_then_refund_or_double_spend

  low_quality_marketplace:
    description:
      - marketplace_fills_with_poor_courses_without_validation

  misleading_financial_courses:
    description:
      - tutors_sell_profit_promises_or_unsafe_trading_guides

  accounting_opacity:
    description:
      - fee_distribution_not_traceable

## 11. ACS Role

ACS_role:
  - classify_course_listings
  - detect_misleading_claims
  - flag_price_or_reward_abuse
  - review_tutor_course_consistency
  - summarize_feedback
  - detect_suspicious_marketplace_patterns

ACS_limitations:
  - cannot_replace_payment_policy
  - cannot_set_final_fee_distribution
  - cannot_auto_approve_sensitive_courses

## 12. Public Documentation Guidance

The public Marketplace Integration page should:

- explain how Academy courses become marketplace products;
- explain possible product types;
- explain pricing, accepted payment assets, and access rules conceptually;
- explain fee distribution components without final percentages;
- explain locked rewards as a possible/internal utility only if supported or planned;
- include risks and unresolved policy questions;
- link to Course Publishing, Token Reward Flows, Locked Rewards, Tutor Validation, and Governance.
