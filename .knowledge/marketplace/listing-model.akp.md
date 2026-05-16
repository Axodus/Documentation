# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: LISTING MODEL

[AXODUS_MARKETPLACE_LISTING_MODEL]

## 1. Listing Thesis

A listing is the public commercial representation of a product, service, course, subscription, template, or digital asset.

Listings must be clear, reviewable, and accountable.

A listing must not overpromise outcomes or hide requirements, fees, delivery terms, refund policy, restrictions, or risks.

## 2. Listing Categories

listing_categories:
  Course:
    description:
      - Academy_course_or_learning_path

  Service:
    description:
      - Business_BBA_DAO_or_provider_service

  Digital_Download:
    description:
      - template_document_code_design_or_asset_file_if allowed

  Subscription:
    description:
      - recurring_access_to_tool_service_or_content_if implemented

  Product_Access:
    description:
      - access_to_Axodus_product_feature_or_module_if policy supports

  DAO_Service:
    description:
      - governance_plugin_documentation_integration_or_community_service

  DeFi_Service:
    description:
      - DaaS_or_DeFi_strategy_service_if reviewed
    warning:
      - requires_DeFi_risk_and_claim_review

  Trading_Service:
    description:
      - trading_tool_strategy_access_or_analytics_if approved
    warning:
      - requires_Trading_risk_and_no_profit_disclosures

  BBA_Service:
    description:
      - campaign_positioning_claim_review_growth_or_content_service

  MCP_or_Agent_Service:
    description:
      - automation_agent_or_MCP_related_service_if approved

## 3. Listing Object

listing_fields:
  - listing_id
  - title
  - slug
  - category
  - seller_or_provider_id
  - short_description
  - full_description
  - target_audience
  - included_items
  - not_included_items
  - requirements
  - delivery_model
  - delivery_time_or_schedule_if applicable
  - price
  - accepted_assets
  - discounts_or_credits
  - locked_reward_eligibility_if approved
  - refund_policy
  - support_policy
  - claims
  - evidence_or_references
  - risk_disclosures
  - claim_review_status
  - quality_status
  - governance_status
  - status

## 4. Listing Statuses

listing_statuses:
  Draft:
    meaning:
      - listing_created_but_not_ready

  Pending_Review:
    meaning:
      - listing_waits_for_review

  Needs_Revision:
    meaning:
      - listing_requires_changes_before_publish

  Approved:
    meaning:
      - listing_approved_for_publication

  Published:
    meaning:
      - listing_visible_to_users

  Paused:
    meaning:
      - temporarily_hidden_or_not_purchasable

  Sold_Out_or_Unavailable:
    meaning:
      - listing_exists_but_cannot_be_purchased

  Deprecated:
    meaning:
      - listing_no_longer_current

  Rejected:
    meaning:
      - listing_not_allowed

  Suspended:
    meaning:
      - listing_removed_due_to_policy_quality_or_risk

## 5. Claim Review Requirements

claim_review_required_for:
  - income_or_ROI_claim
  - trading_or_performance_claim
  - DeFi_yield_claim
  - certification_or_professional_claim
  - official_partner_claim
  - audit_or_security_claim
  - legal_or_compliance_claim
  - guaranteed_result_claim
  - token_utility_or_transferability_claim
  - locked_reward_spending_claim

## 6. Listing Quality Checklist

quality_checklist:
  - title_is_clear
  - category_is_correct
  - seller_status_is_visible
  - description_matches_deliverable
  - included_and_not_included_items_are_clear
  - price_and_payment_assets_are_clear
  - delivery_timeline_is_clear_if relevant
  - refund_policy_is_clear
  - claims_are_supported_or_removed
  - risk_disclosures_are_present_if needed
  - token_or_locked_reward_rules_are_validated
  - governance_review_completed_if sensitive

## 7. Public Documentation Guidance

The public Listing Model page should:

- define listing categories;
- list listing fields and statuses;
- explain claim review triggers;
- include quality checklist;
- state that listings must not guarantee outcomes.
