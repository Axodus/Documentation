# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: MARKETPLACE
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Marketplace
  canonical_name: Axodus Marketplace
  role: commercial_exchange_listing_payment_settlement_and_service_distribution_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - marketplace-core.akp.md
  - marketplace-architecture.akp.md
  - listing-model.akp.md
  - service-catalog.akp.md
  - seller-provider-model.akp.md
  - buyer-flow.akp.md
  - payments-settlement.akp.md
  - fees-revenue.akp.md
  - credits-locked-rewards.akp.md
  - tokenomics-alignment.akp.md
  - academy-alignment.akp.md
  - business-bba-alignment.akp.md
  - dex-defi-integration.akp.md
  - governance-alignment.akp.md
  - treasury-alignment.akp.md
  - reputation-quality.akp.md
  - disputes-refunds-support.akp.md
  - security-data-protection.akp.md
  - acs-integration.akp.md
  - reporting-accountability.akp.md
  - risk-compliance.akp.md
  - marketplace-page-directives.akp.md

semantic_domains:
  identity:
    source_file: marketplace-core.akp.md
    concepts:
      - commercial_exchange_layer
      - listings
      - sellers
      - buyers
      - services
      - token_utility
      - trust

  architecture:
    source_file: marketplace-architecture.akp.md
    concepts:
      - listing_layer
      - seller_layer
      - checkout_layer
      - settlement_layer
      - dispute_layer
      - governance_layer
      - reporting_layer

  listings:
    source_file: listing-model.akp.md
    concepts:
      - listing
      - product
      - service
      - course
      - digital_asset
      - subscription
      - claim_review

  services:
    source_file: service-catalog.akp.md
    concepts:
      - service_catalog
      - Business_services
      - BBA_services
      - DAO_services
      - MCP_services
      - templates

  sellers:
    source_file: seller-provider-model.akp.md
    concepts:
      - seller
      - tutor
      - creator
      - provider
      - verification
      - quality_status
      - suspension

  buyer_flow:
    source_file: buyer-flow.akp.md
    concepts:
      - discovery
      - listing_review
      - checkout
      - delivery
      - completion
      - review

  payments:
    source_file: payments-settlement.akp.md
    concepts:
      - payment
      - checkout
      - escrow
      - settlement
      - seller_payout
      - refund

  fees:
    source_file: fees-revenue.akp.md
    concepts:
      - marketplace_fee
      - platform_fee
      - seller_fee
      - royalty
      - commission
      - treasury_routing

  credits_locked_rewards:
    source_file: credits-locked-rewards.akp.md
    concepts:
      - locked_rewards
      - internal_credit
      - non_transferable_balance
      - spend_rules
      - settlement_liability

  tokenomics:
    source_file: tokenomics-alignment.akp.md
    concepts:
      - $Neurons_utility
      - payments
      - discounts
      - rewards
      - locked_tokens
      - governance_power

  academy:
    source_file: academy-alignment.akp.md
    concepts:
      - course_marketplace
      - tutor
      - paid_courses
      - free_course_locked_rewards
      - Proof_of_Knowledge
      - Learn_to_Win

  business_bba:
    source_file: business-bba-alignment.akp.md
    concepts:
      - Business_service_packages
      - BBA_campaigns
      - client_requests
      - claim_review
      - delivery_runtime

  dex_defi:
    source_file: dex-defi-integration.akp.md
    concepts:
      - swap_checkout
      - accepted_assets
      - DeFi_services
      - DEX_settlement
      - liquidity_risk

  governance:
    source_file: governance-alignment.akp.md
    concepts:
      - listing_policy
      - seller_policy
      - fee_policy
      - locked_reward_policy
      - dispute_policy
      - sensitive_categories

  treasury:
    source_file: treasury-alignment.akp.md
    concepts:
      - marketplace_revenue
      - seller_settlement
      - refunds
      - credits
      - liabilities
      - reporting

  reputation:
    source_file: reputation-quality.akp.md
    concepts:
      - reviews
      - ratings
      - quality_badges
      - dispute_history
      - tutor_quality
      - seller_status

  disputes:
    source_file: disputes-refunds-support.akp.md
    concepts:
      - dispute
      - refund
      - cancellation
      - delivery_failure
      - support
      - evidence

  security:
    source_file: security-data-protection.akp.md
    concepts:
      - wallet_security
      - payment_security
      - data_privacy
      - seller_data
      - fraud_prevention

  ACS:
    source_file: acs-integration.akp.md
    concepts:
      - Morpheus
      - Agent_Smith
      - Trinity
      - listing_review
      - claim_review
      - risk_summary

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - marketplace_report
      - listing_report
      - fee_report
      - settlement_report
      - dispute_report

  risk:
    source_file: risk-compliance.akp.md
    concepts:
      - commerce_risk
      - token_payment_risk
      - seller_claim_risk
      - consumer_protection
      - regulated_goods_services

public_documentation_targets:
  overview:
    target: docs/marketplace/overview.md
    source_files:
      - marketplace-core.akp.md
      - marketplace-architecture.akp.md

  architecture:
    target: docs/marketplace/architecture.md
    source_files:
      - marketplace-architecture.akp.md

  listings:
    target: docs/marketplace/listing-model.md
    source_files:
      - listing-model.akp.md

  service_catalog:
    target: docs/marketplace/service-catalog.md
    source_files:
      - service-catalog.akp.md

  sellers:
    target: docs/marketplace/seller-provider-model.md
    source_files:
      - seller-provider-model.akp.md

  buyer_flow:
    target: docs/marketplace/buyer-flow.md
    source_files:
      - buyer-flow.akp.md

  payments:
    target: docs/marketplace/payments-and-settlement.md
    source_files:
      - payments-settlement.akp.md

  fees:
    target: docs/marketplace/fees-and-revenue.md
    source_files:
      - fees-revenue.akp.md

  credits:
    target: docs/marketplace/credits-and-locked-rewards.md
    source_files:
      - credits-locked-rewards.akp.md

  tokenomics:
    target: docs/marketplace/tokenomics-alignment.md
    source_files:
      - tokenomics-alignment.akp.md

  academy:
    target: docs/marketplace/academy-alignment.md
    source_files:
      - academy-alignment.akp.md

  business_bba:
    target: docs/marketplace/business-and-bba-alignment.md
    source_files:
      - business-bba-alignment.akp.md

  dex_defi:
    target: docs/marketplace/dex-and-defi-integration.md
    source_files:
      - dex-defi-integration.akp.md

  governance:
    target: docs/marketplace/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  treasury:
    target: docs/marketplace/treasury-alignment.md
    source_files:
      - treasury-alignment.akp.md

  reputation:
    target: docs/marketplace/reputation-and-quality.md
    source_files:
      - reputation-quality.akp.md

  disputes:
    target: docs/marketplace/disputes-refunds-and-support.md
    source_files:
      - disputes-refunds-support.akp.md

  security:
    target: docs/marketplace/security-and-data-protection.md
    source_files:
      - security-data-protection.akp.md

  acs:
    target: docs/marketplace/acs-integration.md
    source_files:
      - acs-integration.akp.md

  reporting:
    target: docs/marketplace/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  risk:
    target: docs/marketplace/risk-and-compliance.md
    source_files:
      - risk-compliance.akp.md

global_invariants:
  - no_guaranteed_seller_revenue
  - no_guaranteed_buyer_outcome
  - no_guaranteed_ROI
  - listings_require_claim_review_when_sensitive
  - locked_rewards_are_not_transferable_or_withdrawable_unless_contracts_and_policy_allow
  - locked_rewards_are_not_marketplace_spendable_unless_policy_contract_treasury_seller_settlement_and_compliance_model_allow
  - seller_status_must_be_clear
  - payment_refund_delivery_and_settlement_rules_must_be_clear
  - treasury_must_report_fees_settlements_refunds_credits_and_liabilities
  - governance_controls_sensitive_listing_fee_locked_reward_and_dispute_policies
  - ACS_is_advisory_not_authority
  - all_public_docs_must_be_English
