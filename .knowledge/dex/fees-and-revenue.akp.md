# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: FEES AND REVENUE MODEL

[AXODUS_DEX_FEES_REVENUE]

## 1. Fee Thesis

DEX fees can compensate LPs, fund protocol operations, support treasury, or incentivize liquidity.

Fees must be transparent.

Fee mechanics must not be described as guaranteed revenue, guaranteed liquidity, or token price support.

## 2. Fee Types

fee_types:
  swap_fee:
    description:
      - fee_applied_to_swap_volume

  LP_fee:
    description:
      - portion_of_swap_fee_distributed_to_liquidity_providers

  protocol_fee:
    description:
      - portion_allocated_to_protocol_or_operations_if implemented

  treasury_fee:
    description:
      - portion_allocated_to_treasury_if governance_and_contracts approve

  router_fee:
    description:
      - fee_for_routing_or_aggregation_if implemented

  listing_fee:
    description:
      - fee_for_listing_review_or_service_if Business_policy defines
    warning:
      - listing_fee_must_not_override_risk_review_or_create_pay_to_scam_risk

  incentive_fee_or_budget:
    description:
      - budget_or_allocation_for_liquidity_incentives_if approved

## 3. Fee Record Fields

fee_record_fields:
  - fee_id
  - fee_type
  - applies_to
  - rate_or_formula
  - asset
  - amount
  - destination
  - pool_or_route
  - period
  - governance_reference
  - contract_reference
  - status
  - reporting_reference

## 4. Fee Governance

governance_required_for:
  - changing_swap_fee
  - changing_protocol_fee
  - changing_treasury_fee
  - adding_router_or_aggregation_fee
  - creating_liquidity_incentive
  - changing_fee_destination
  - enabling_fees_for_$Neurons_related_pools
  - public_fee_claims

## 5. Revenue Reporting

revenue_reporting_should_include:
  - period
  - volume
  - gross_fees
  - LP_fees
  - protocol_fees
  - treasury_fees
  - incentive_costs
  - net_protocol_revenue_if applicable
  - pool_breakdown_if safe
  - limitations

## 6. Risks

risks:
  fee_opacity:
    description:
      - users_do_not_understand_costs

  LP_revenue_overpromise:
    description:
      - LP_fees_are_variable_and_not_guaranteed

  treasury_revenue_overpromise:
    description:
      - protocol_fees_do_not_guarantee_sustainable_revenue

  incentive_cost:
    description:
      - rewards_may_cost_more_than_liquidity_benefit

  contract_mismatch:
    description:
      - documented_fee_differs_from_contract_behavior

## 7. Public Documentation Guidance

The public Fees and Revenue page should:

- define fee types;
- explain governance requirements;
- define fee records and reporting;
- include fee risks;
- avoid guaranteed revenue or liquidity language.
