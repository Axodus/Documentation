# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: TOKENOMICS ALIGNMENT MODEL

[AXODUS_DEX_TOKENOMICS_ALIGNMENT]

## 1. Tokenomics Alignment Thesis

DEX can support `$Neurons` utility through liquidity, swaps, fees, incentives, access, and ecosystem settlement.

However, DEX tokenomics must not imply guaranteed token appreciation, guaranteed liquidity, guaranteed fee revenue, or risk-free LP returns.

## 2. Tokenomics-DEX Interfaces

interfaces:
  $Neurons_liquidity:
    description:
      - pools_or_routes_may_support_$Neurons_trading_if implemented

  swap_utility:
    description:
      - users_may_swap_assets_to_access_ecosystem_products_if supported

  liquidity_incentives:
    description:
      - rewards_may_support_LP_participation_if governance_approved

  protocol_fees:
    description:
      - fees_may_route_to_treasury_LPs_or_other_destinations_if implemented

  burn_liquidity_treasury_mechanics:
    description:
      - historical_or_planned_tokenomics_fee_mechanics_must_be_verified_before_claimed

  marketplace_settlement:
    description:
      - DEX_may_help_convert_assets_for_marketplace_payments_if supported

## 3. Tokenomics Questions

policy_questions:
  - Is_$Neurons_officially_listed_on_Axodus_DEX?
  - Which_$Neurons_pools_are_official_or_incentivized?
  - Are_locked_rewards_usable_for_D EX_interactions?
  - Are_swap_fees_charged_in_$Neurons_or_output_assets?
  - Are_LP_incentives_paid_in_$Neurons?
  - Who_funds_liquidity_incentives?
  - Are_burn_liquidity_or_treasury_fees_active_in_contracts?
  - How_are_fees_reported?
  - Does_D EX_activity_affect_governance_power?

## 4. Risks

risks:
  liquidity_overclaim:
    description:
      - docs_imply_$Neurons_has_guaranteed_liquidity

  price_support_claim:
    description:
      - DEX_or_fee_mechanics_claimed_to_guarantee_appreciation

  incentive_farming:
    description:
      - users_farm_LP_rewards_without_sustainable_liquidity

  unlocked_reward_sell_pressure:
    description:
      - incentives_create_market_pressure

  contract_mismatch:
    description:
      - tokenomics_fee_claims_not_supported_by_D EX_or_token_contract

## 5. Public Documentation Guidance

The public Tokenomics Alignment page should:

- explain DEX role in `$Neurons` utility carefully;
- define policy questions;
- include risks;
- avoid price, liquidity, or revenue guarantee language.
