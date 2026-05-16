# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: PROTOCOL MODEL

[AXODUS_DEFI_PROTOCOL_MODEL]

## 1. Protocol Model Thesis

Axodus DeFi depends on protocols, integrations, adapters, or smart contracts.

A protocol integration must be evaluated for security, liquidity, governance, risk, compatibility, and reporting before use.

External protocols create external risk. Integration does not mean endorsement or guarantee.

## 2. Protocol Categories

protocol_categories:
  DEX:
    description:
      - decentralized_exchange_or_swap_protocol

  lending:
    description:
      - borrow_lend_or_money_market_protocol_if approved

  staking:
    description:
      - staking_or_validator_reward_protocol

  liquidity_pool:
    description:
      - AMM_or_pool_based_liquidity_system

  yield_aggregator:
    description:
      - protocol_that_routes_assets_to_yield_strategies

  oracle:
    description:
      - price_rate_or_data_feed_provider

  bridge:
    description:
      - cross_chain_asset_or_message_transfer_protocol

  derivatives:
    description:
      - options_futures_synthetics_or_structured_exposure_protocol
    warning:
      - high_risk_and_compliance_sensitive

## 3. Protocol Integration Object

protocol_integration_fields:
  - protocol_id
  - name
  - category
  - chain
  - integration_purpose
  - assets_supported
  - contract_addresses_if safe_and_verified
  - TVL_or_liquidity_context_if available
  - audit_or_security_status
  - governance_status
  - risk_level
  - oracle_dependencies
  - bridge_dependencies
  - pause_or_exit_plan
  - reporting_requirement
  - status

## 4. Integration Review Checklist

review_checklist:
  - protocol_purpose_understood
  - contracts_verified
  - security_review_or_audit_status_checked
  - admin_controls_understood
  - liquidity_and_exit_conditions_understood
  - oracle_dependencies_identified
  - bridge_dependencies_identified
  - fees_understood
  - historical_incidents_reviewed_if available
  - governance_or_parameter_risks_identified
  - treasury_or_user_exposure_classified
  - reporting_data_available
  - emergency_exit_or_pause_plan_defined

## 5. Protocol Statuses

statuses:
  Research:
    meaning:
      - protocol_under_review

  Watchlist:
    meaning:
      - protocol_monitored_but_not_integrated

  Approved_For_Test:
    meaning:
      - limited_test_or_sandbox_allowed

  Approved_For_Limited_Use:
    meaning:
      - restricted_allocation_or_product_scope

  Approved:
    meaning:
      - approved_under_policy_and_limits

  Paused:
    meaning:
      - temporarily_disabled_or_not_recommended

  Deprecated:
    meaning:
      - no_longer_used

  Prohibited:
    meaning:
      - not_allowed_under_current_policy

## 6. Protocol Risks

risks:
  smart_contract_risk:
    description:
      - protocol_contract_can_have_bugs_or_exploits

  admin_key_risk:
    description:
      - protocol_admins_can_change_parameters_or_contracts

  oracle_risk:
    description:
      - incorrect_price_or_data_feed_affects_strategy

  bridge_risk:
    description:
      - cross_chain_mechanism_can_fail_or_be_exploited

  liquidity_risk:
    description:
      - insufficient_depth_or_withdrawal_constraints

  composability_risk:
    description:
      - failure_in_one_protocol_affects_integrated_strategy

  governance_risk:
    description:
      - external_protocol_governance_changes_rules

## 7. Public Documentation Guidance

The public Protocol Model page should:

- define protocol categories;
- describe integration records and review checklist;
- define statuses;
- list risks;
- avoid implying external protocols are risk-free or officially endorsed unless confirmed.
