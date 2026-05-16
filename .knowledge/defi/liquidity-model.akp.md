# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: LIQUIDITY MODEL

[AXODUS_DEFI_LIQUIDITY_MODEL]

## 1. Liquidity Thesis

Liquidity is essential for DeFi products, token markets, DEX activity, vault exits, and treasury operations.

Liquidity is not guaranteed by saying a system has a liquidity fee or pool.

Liquidity must be measured, managed, incentivized, and reported.

## 2. Liquidity Concepts

concepts:
  liquidity:
    definition:
      - ability_to_trade_enter_exit_or_settle_without_large_price_impact

  liquidity_pool:
    definition:
      - pool_of_assets_used_by_AMM_or_DeFi_protocol_for_trading_or_strategy

  LP_token:
    definition:
      - token_or_record_representing_liquidity_provider_share_if protocol_uses_it

  slippage:
    definition:
      - difference_between_expected_and_executed_price

  impermanent_loss:
    definition:
      - liquidity_provider_loss_relative_to_holding_assets_due_to_price_changes

  depth:
    definition:
      - available_liquidity_at_or_near_current_market_price

## 3. Liquidity Models

liquidity_models:
  treasury_supported_liquidity:
    description:
      - treasury_allocates_assets_to_support_liquidity_if governance approves

  incentive_supported_liquidity:
    description:
      - rewards_or_incentives_encourage_liquidity_provision

  marketplace_or_product_liquidity:
    description:
      - liquidity_needed_for_internal_product_or settlement

  external_protocol_liquidity:
    description:
      - liquidity_depends_on_third_party_protocol_or market

  DEX_liquidity:
    description:
      - liquidity_provided_to_AMM_or_Dex_pool

## 4. Liquidity Policy Fields

liquidity_policy_fields:
  - liquidity_program_id
  - objective
  - assets
  - target_pool_or_protocol
  - allocation
  - incentives_if any
  - expected_duration
  - risk_limits
  - impermanent_loss_policy
  - withdrawal_policy
  - governance_status
  - treasury_impact
  - reporting_frequency

## 5. Liquidity Metrics

metrics:
  - TVL
  - pool_depth
  - volume
  - slippage
  - spread
  - utilization
  - impermanent_loss_estimate
  - fees_generated
  - incentive_cost
  - net_effect_after_incentives
  - treasury_exposure

## 6. Liquidity Risks

risks:
  impermanent_loss:
    description:
      - LP_position_underperforms_holding_assets

  low_depth:
    description:
      - users_experience_large_slippage

  incentive_mining:
    description:
      - liquidity_leaves_when_rewards_end

  treasury_exposure:
    description:
      - treasury_assets_exposed_to_market_or_pool_risk

  protocol_risk:
    description:
      - pool_or_AMM_contract_exploit

  misleading_liquidity_claim:
    description:
      - docs_claim_liquidity_is_guaranteed

## 7. Public Documentation Guidance

The public Liquidity Model page should:

- define liquidity concepts;
- describe models and policy fields;
- list metrics and risks;
- avoid implying liquidity fees guarantee liquidity.
