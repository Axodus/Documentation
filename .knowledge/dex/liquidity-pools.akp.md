# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: LIQUIDITY POOLS MODEL

[AXODUS_DEX_LIQUIDITY_POOLS]

## 1. Pool Thesis

Liquidity pools enable decentralized swaps by holding reserves of tokens.

Pools can support trading and liquidity, but they expose liquidity providers to risks such as impermanent loss, token volatility, smart contract bugs, low volume, fee variability, and withdrawal issues.

## 2. Pool Concepts

concepts:
  pool:
    definition:
      - smart_contract_or_accounting_structure_holding_assets_for_swaps_or_liquidity

  reserve:
    definition:
      - amount_of_token_held_in_pool

  pool_pair:
    definition:
      - two_tokens_in_pair_based_pool

  pool_type:
    examples:
      - constant_product
      - stable_pool
      - weighted_pool
      - concentrated_liquidity_if supported

  liquidity_depth:
    definition:
      - amount_of_available_liquidity_for_swaps

  pool_share:
    definition:
      - liquidity_provider_portion_of_pool

## 3. Pool Types

pool_types:
  constant_product:
    description:
      - common_AMM_model_for_token_pairs

  stable_pool:
    description:
      - pool_optimized_for_assets_expected_to_trade_near_each_other
    warning:
      - stable_assets_can_depeg

  weighted_pool:
    description:
      - pool_with_non_50_50_asset_weights_if supported

  concentrated_liquidity:
    description:
      - liquidity_provided_within_price_ranges_if supported
    warning:
      - higher_complexity_and_range_risk

  treasury_pool:
    description:
      - pool_with_treasury_supported_liquidity_under_policy

  incentivized_pool:
    description:
      - pool_with_rewards_or_incentives_if governance_approved

## 4. Pool Object

pool_fields:
  - pool_id
  - chain
  - token_a
  - token_b
  - pool_type
  - reserves
  - fee_tier
  - liquidity_depth
  - volume
  - LP_count_if available
  - treasury_participation_if any
  - incentive_status
  - risk_level
  - security_review_status
  - governance_status
  - status

## 5. Pool Lifecycle

pool_lifecycle:
  - pool_request_or_creation_detected
  - token_listing_status_checked
  - risk_review_completed
  - governance_review_if_official_or_incentivized
  - security_review_if_new_contract_or_pool_type
  - pool_created_or_registered
  - liquidity_added
  - monitoring_enabled
  - reports_created
  - pool_paused_deprecated_or_unlisted_if needed

## 6. Pool Risks

risks:
  impermanent_loss:
    description:
      - LP_may_underperform_holding_tokens

  low_volume:
    description:
      - LP_fees_may_be_low_or_insufficient

  token_risk:
    description:
      - one_or_both_pool_tokens_can_fail_or_drop

  smart_contract_risk:
    description:
      - pool_contract_can_have_vulnerability

  liquidity_migration:
    description:
      - liquidity_can_leave_pool

  manipulation:
    description:
      - low_liquidity_pool_can_be_manipulated

  depeg:
    description:
      - stable_assets_can_lose_expected_price_relationship

## 7. Public Documentation Guidance

The public Liquidity Pools page should:

- define pool concepts and types;
- describe pool object and lifecycle;
- explain pool risks;
- link to LP Model, Slippage, Treasury, Governance, and Risk pages.
