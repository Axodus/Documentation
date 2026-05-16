# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: ROUTING AND AGGREGATION MODEL

[AXODUS_DEX_ROUTING_AGGREGATION]

## 1. Routing Thesis

Routing determines how a swap is executed across available liquidity.

Better routing can reduce price impact or improve output, but routing is not a guarantee of best possible execution.

Routes can depend on liquidity, fees, chain conditions, token availability, pool safety, and external aggregators.

## 2. Routing Concepts

concepts:
  direct_route:
    definition:
      - swap_uses_single_pool_or_pair

  multi_hop_route:
    definition:
      - swap_passes_through_intermediate_token_or_pool

  split_route:
    definition:
      - swap_amount_split_across_multiple_pools_or_routes_if supported

  aggregator:
    definition:
      - system_compares_or_uses_multiple_liquidity_sources

  route_score:
    definition:
      - ranking_based_on_output_fees_price_impact_risk_or_other_parameters

  route_risk:
    definition:
      - risk_from_using_specific_tokens_pools_protocols_or_external_routes

## 3. Routing Flow

routing_flow:
  - input_output_tokens_selected
  - available_pools_identified
  - token_and_pool_status_checked
  - candidate_routes_generated
  - expected_output_fees_price_impact_estimated
  - route_risk_flags_added
  - selected_route_displayed
  - user_confirms_swap
  - transaction_executes_or_fails

## 4. Route Object

route_fields:
  - route_id
  - input_token
  - output_token
  - hops
  - pools
  - expected_output
  - fees
  - price_impact
  - gas_estimate_if available
  - risk_flags
  - aggregator_used_if any
  - status

## 5. Aggregation Considerations

aggregation_considerations:
  - external_aggregators_introduce_dependency_risk
  - routes_may_use_unverified_tokens_or_pools
  - best_output_may_not_be_best_risk_adjusted_route
  - gas_cost_can_reduce_effective_output
  - route_results_can_change_before_execution
  - aggregation_should_not_hide_risk_warnings

## 6. Public Documentation Guidance

The public Routing and Aggregation page should:

- define routing concepts;
- describe routing flow and route object;
- explain aggregation considerations;
- avoid claiming guaranteed best execution.
