# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: USER-FACING PRODUCTS MODEL

[AXODUS_MINING_USER_FACING_PRODUCTS]

## 1. Product Thesis

User-facing mining products are sensitive because users may interpret them as guaranteed income.

Every user-facing mining product must clearly define status, eligibility, allocation model, costs, payout rules, risks, custody model, and whether the product is a simulation, educational tool, testnet, pilot, or active product.

## 2. Product Types

product_types:
  Mining_Dashboard:
    description:
      - user_views_mining_education_estimates_or_allocation_status
    risk:
      - users_may_confuse_estimates_with_guarantees

  Mining_Subscription:
    description:
      - user_pays_for_access_to_mining_related_service_or_capacity_if approved
    risk:
      - high_claim_review_and_consumer_protection_sensitivity

  Hashrate_Access:
    description:
      - user_has_defined_share_or_allocation_of_mining_capacity_if implemented
    risk:
      - measurement_and_payout_transparency_required

  Hosted_Mining_Product:
    description:
      - user_accesses_hosted_hardware_or managed mining service_if approved
    risk:
      - custody_hosting_and_counterparty_risk

  Mining_Education_Product:
    description:
      - Academy_course_or_simulation_about_mining
    risk:
      - must_not_claim_real_rewards_if simulation

  Treasury_Mining_Pool_Access:
    description:
      - user participates_in_treasury_or_ecosystem_mining_program_if approved
    risk:
      - requires_strong_governance_treasury_and compliance review

## 3. User Product Object

user_product_fields:
  - product_id
  - name
  - product_type
  - status
  - user_eligibility
  - access_method
  - allocation_model
  - reward_source
  - payout_asset
  - payout_frequency
  - minimum_payout
  - fees
  - costs
  - withdrawal_rules
  - custody_model
  - risk_disclosures
  - estimate_method
  - governance_status
  - treasury_status
  - compliance_status
  - support_policy

## 4. Product Status Labels

status_labels:
  Educational:
    meaning:
      - learning_or_simulation_no_real_rewards

  Estimate_Only:
    meaning:
      - calculator_or_projection_no_payout_commitment

  Testnet:
    meaning:
      - test_environment_no_real_value

  Pilot:
    meaning:
      - limited_scope_test

  Internal:
    meaning:
      - not_available_to_public_users

  Waitlist:
    meaning:
      - interest_collection_not_product_activation

  Active:
    meaning:
      - live_under_approved_scope

  Paused:
    meaning:
      - temporarily_unavailable

  Deprecated:
    meaning:
      - no_longer_current

## 5. Required User Disclosures

required_disclosures:
  - rewards_are_variable
  - estimates_are_not_guarantees
  - payouts_depend_on_network_pool_hardware_uptime_costs_and_market_conditions
  - fees_and_costs_reduce_net_results
  - asset_prices_can_change
  - payment_or_subscription_does_not_guarantee_profit
  - availability_may_be_restricted
  - tax_or_regulatory_obligations_may_apply
  - payout_minimums_and_delays_may apply

## 6. Public Documentation Guidance

The public User-Facing Products page should:

- define product types and object fields;
- explain status labels;
- list required disclosures;
- state user-facing products must not promise profit.
