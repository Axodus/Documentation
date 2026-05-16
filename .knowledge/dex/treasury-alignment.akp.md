# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: TREASURY ALIGNMENT MODEL

[AXODUS_DEX_TREASURY_ALIGNMENT]

## 1. Treasury Alignment Thesis

DEX activity can affect Treasury through fee revenue, treasury-supported liquidity, LP positions, token exposure, liquidity incentives, and marketplace settlement.

Treasury DEX activity requires policy, limits, governance review, reporting, and risk controls.

## 2. Treasury-DEX Interfaces

interfaces:
  protocol_revenue:
    description:
      - fees_may_flow_to_treasury_if implemented_and_approved

  treasury_liquidity:
    description:
      - treasury_may_provide_liquidity_under_policy

  LP_positions:
    description:
      - treasury_can_hold_LP_positions_if approved

  liquidity_incentives:
    description:
      - treasury_or_reward_budget_may_support_LP_incentives

  marketplace_settlement:
    description:
      - DEX_swaps_may_support_payment_or_asset_conversion

  $Neurons_liquidity:
    description:
      - treasury_may_support_or_report_$Neurons_liquidity_if approved

## 3. Treasury Review Required For

review_required_for:
  - treasury_supported_pool
  - treasury_LP_position
  - protocol_fee_to_treasury
  - liquidity_incentive_budget
  - DEX_checkout_settlement_flow
  - official_$Neurons_liquidity_program
  - fee_destination_change
  - high_risk_pool_exposure

## 4. Treasury DEX Report Fields

report_fields:
  - reporting_period
  - pools
  - treasury_LP_positions
  - assets_allocated
  - current_value_estimate
  - fees_earned
  - impermanent_loss_context
  - incentive_cost
  - net_effect
  - exposure
  - incidents
  - governance_references
  - limitations

## 5. Risks

risks:
  impermanent_loss:
    description:
      - treasury_LP_position_can_underperform_holding_assets

  token_exposure:
    description:
      - treasury_exposed_to_pool_assets

  fee_overestimation:
    description:
      - fees_are_variable_and_not_guaranteed

  incentive_cost:
    description:
      - liquidity_incentives_may_not_produce_sustainable_depth

  liquidity_exit:
    description:
      - external_LPs_may_leave

  reporting_gap:
    description:
      - treasury_D EX_positions_not_visible_to_governance

## 6. Public Documentation Guidance

The public Treasury Alignment page should:

- explain Treasury-DEX interfaces;
- list review triggers;
- define report fields and risks;
- avoid revenue or liquidity guarantees.
