# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: CORE DEX MODEL

[AXODUS_DEX_CORE]

## 1. DEX Identity

DEX_role:
  primary:
    - decentralized_exchange_layer
    - swap_infrastructure_layer
    - liquidity_pool_layer
    - routing_and_execution_layer
    - ecosystem_liquidity_layer
    - marketplace_settlement_support_layer
    - trading_and_DeFi_integration_layer

DEX_is_not:
  - guaranteed_profit_system
  - risk_free_exchange
  - guaranteed_liquidity_provider
  - guaranteed_execution_engine
  - centralized_custody_exchange_by_default
  - token_endorsement_engine
  - unreviewed_listing_platform
  - replacement_for_user_due_diligence
  - replacement_for_smart_contract_security_review
  - replacement_for_governance

## 2. Core Thesis

thesis:
  - Axodus DEX provides decentralized swap, liquidity, routing, and pool infrastructure for the Axodus ecosystem.
  - The DEX supports token utility, DeFi integrations, Trading data and execution paths, Marketplace settlement, Treasury liquidity strategies, and user-facing decentralized exchange functionality.
  - The DEX must be documented with strong risk disclosures because swaps, pools, LP positions, routing, and token listings can expose users and treasury to losses.
  - The DEX must not claim guaranteed prices, guaranteed execution, guaranteed liquidity, or guaranteed returns.

## 3. Mission

mission:
  - provide_clear_decentralized_swap_infrastructure
  - support_ecosystem_liquidity
  - enable_governance_aligned_token_listings_and_pools
  - support_$Neurons_utility_and_liquidity_if_verified
  - support_DeFi_and_Marketplace_flows
  - support_Trading_data_and_execution_research
  - protect_users_with_slippage_LP_ME V_and_token_risk_disclosures
  - preserve_security_review_and_reporting
  - align_D EX_parameters_with_governance_and_treasury_policy

mission_statement:
  "Axodus DEX provides decentralized swap, liquidity pool, routing, and execution infrastructure for the Axodus ecosystem while preserving user education, risk disclosures, smart contract security, governance control, treasury accountability, and transparent reporting."

## 4. Principles

principles:
  transparency:
    meaning:
      - users_should_understand_price_impact_slippage_pool_risks_and_fees

  no_execution_guarantees:
    meaning:
      - quotes_can_change_transactions_can_fail_and_execution_can_be_affected_by_market_conditions

  listing_safety:
    meaning:
      - token_listing_does_not_equal_endorsement
      - official_assets_must_be_distinguished_from_unverified_assets

  liquidity_accountability:
    meaning:
      - treasury_or_incentivized_liquidity_must_be_reportable

  security_first:
    meaning:
      - swap_pool_router_and_fee_contracts_require_review

  governance_alignment:
    meaning:
      - material_listing_pool_fee_incentive_and_emergency_rules_require governance

  education_before_complexity:
    meaning:
      - users_should_learn_swaps_LP_slippage_ME V_and_impermanent_loss

  ecosystem_integration:
    meaning:
      - DEX_should_support_DeFi_Trading_Tokenomics_Marketplace_Treasury_and_Academy_with_clear_boundaries

## 5. Scope

in_scope:
  - token_swaps
  - liquidity_pools
  - AMM_or_pool_models
  - routing_and_aggregation
  - token_listing_policy
  - LP_model
  - fee_model
  - protocol_revenue
  - treasury_liquidity
  - $Neurons_liquidity_and_utility_if implemented
  - slippage_and_price_impact_disclosures
  - MEV_and_execution_risk
  - smart_contract_security
  - governance_parameter_control
  - DEX_reporting
  - user_education

out_of_scope_by_default:
  - guaranteed_profit
  - guaranteed_liquidity
  - guaranteed_swap_execution
  - centralized_exchange_custody
  - token_investment_recommendations
  - unreviewed_token_endorsement
  - unsafe_listing_claims
  - hidden_protocol_fees
  - unapproved_treasury_liquidity_deployment
  - unaudited_security_claims

## 6. Core Product Categories

product_categories:
  Swap:
    description:
      - user_or_contract_swaps_one_token_for_another_through_D EX_routes

  Pool:
    description:
      - liquidity_container_for_token_pair_or_asset_set

  LP_Position:
    description:
      - user_or_treasury_liquidity_provider_position

  Router:
    description:
      - system_that_finds_or_executes_swap_path

  Aggregator:
    description:
      - system_that_compares_or_combines_liquidity_sources

  Listing:
    description:
      - token_availability_and_metadata_status_inside_D EX

  Liquidity_Incentive:
    description:
      - reward_or_fee_program_to_encourage_liquidity_if approved

  Treasury_Liquidity:
    description:
      - treasury_supported_liquidity_under_policy

## 7. Relationships

relationships:
  DeFi:
    - DEX_liquidity_supports_DeFi_products
    - vaults_or_strategies_may_use_D EX_routes
    - DaaS_may_include_D EX_services

  Tokenomics:
    - $Neurons_liquidity
    - swap_fees
    - liquidity_incentives
    - fee_routing
    - token_utility

  Treasury:
    - treasury_LP_positions
    - liquidity_support
    - fee_revenue
    - exposure_reporting

  Trading:
    - DEX_price_data
    - arbitrage_research
    - bot_execution_paths
    - slippage_and_ME V_analysis

  Marketplace:
    - token_swap_checkout
    - settlement
    - accepted_assets
    - payment_routing

  Governance:
    - listings
    - pool_creation
    - fee_policy
    - incentives
    - emergency_pause

  Academy:
    - swap_education
    - LP_education
    - token_risk
    - DeFi_safety

  ACS:
    - risk_analysis
    - route_review
    - claim_review
    - reporting_support

## 8. Standard Runtime

standard_DEX_runtime:
  - DEX_request_or_feature_identified
  - swap_pool_listing_or_integration_classified
  - risk_level_assigned
  - contract_and_protocol_dependencies_identified
  - token_listing_status_checked
  - governance_requirement_identified
  - security_review_required_if_contract_related
  - treasury_review_required_if_liquidity_or_revenue_impact
  - tokenomics_review_required_if_$Neurons_or_incentives_involved
  - user_disclosures_prepared
  - launch_or_update_handoff_created
  - monitoring_and_reporting_enabled
  - accountability_record_archived

## 9. Critical Invariants

critical_invariants:
  - DEX_must_not_promise_guaranteed_execution.
  - DEX_must_not_promise_guaranteed_liquidity.
  - DEX_must_not_promise_guaranteed_returns.
  - Swap_docs_must_explain_slippage_and_price_impact.
  - LP_docs_must_explain_impermanent_loss.
  - Listing_docs_must_distinguish_verified_official_and_unverified_assets.
  - Treasury_liquidity_requires_governance_and_reporting.
  - $Neurons_liquidity_claims_require_contract_and_policy_validation.
  - Smart_contracts_require_security_review.
  - MEV_risk_must_be_disclosed.
  - ACS_is_advisory_not_authority.

## 10. Public Documentation Guidance

The public DEX Overview page should:

- define Axodus DEX;
- explain swaps, pools, routing, listings, LP positions, fees, and ecosystem integrations;
- state no guaranteed execution or liquidity;
- connect DEX to DeFi, Tokenomics, Treasury, Trading, Marketplace, Governance, Academy, ACS, and Accountability.
