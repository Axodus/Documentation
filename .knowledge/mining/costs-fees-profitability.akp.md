# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: COSTS, FEES AND PROFITABILITY MODEL

[AXODUS_MINING_COSTS_FEES_PROFITABILITY]

## 1. Profitability Thesis

Mining profitability is an estimate, not a guarantee.

Profitability depends on dynamic variables and can become negative.

Any calculator, dashboard, report, campaign, or user product must distinguish assumptions, historical data, estimates, gross rewards, costs, fees, and net results.

## 2. Cost Categories

cost_categories:
  hardware_cost:
    description:
      - purchase_lease_or_depreciation_of_equipment

  energy_cost:
    description:
      - electricity_or_power_cost

  cooling_cost:
    description:
      - cooling_ventilation_or_immersion_cost

  hosting_cost:
    description:
      - facility_or_colocation_cost

  maintenance_cost:
    description:
      - repairs_parts_service_and_labor

  pool_fee:
    description:
      - mining_pool_fee

  network_fee:
    description:
      - transaction_or_payout_network_cost

  validator_cost:
    description:
      - node_hosting_validator_operations_or_commission_if relevant

  operations_cost:
    description:
      - monitoring_admin_support_software_and infrastructure

  treasury_fee_or_allocation:
    description:
      - ecosystem_or_treasury_allocation_if governance approves

## 3. Profitability Estimate Fields

profitability_estimate_fields:
  - estimate_id
  - period
  - network
  - asset
  - hashrate_or_validator_capacity
  - network_difficulty_or_reward_context
  - asset_price_assumption
  - gross_reward_estimate
  - energy_cost
  - pool_or_validator_fees
  - hardware_depreciation
  - hosting_and_maintenance
  - other_costs
  - net_estimate
  - sensitivity_notes
  - data_sources
  - limitations
  - created_at

## 4. Profitability Rules

rules:
  - estimates_must_be_labeled_as_estimates
  - historical_results_do_not_guarantee_future_results
  - gross_rewards_must_not_be_presented_as_profit
  - costs_must_be included_or_explicitly_excluded
  - asset_price_assumptions_must_be stated
  - network_difficulty_changes_must_be acknowledged
  - user_products_must_show_fees_and_payout_rules
  - fixed_ROI_language_is_prohibited

## 5. Sensitivity Factors

sensitivity_factors:
  - asset_price
  - network_difficulty
  - block_reward_changes
  - transaction_fee_market
  - energy_cost
  - uptime
  - hardware_efficiency
  - pool_fee
  - pool_luck
  - payout_thresholds
  - maintenance_cost
  - regulation_or_tax
  - market_liquidity

## 6. Prohibited Profitability Claims

prohibited_claims:
  - guaranteed_ROI
  - guaranteed_daily_profit
  - fixed_income
  - risk_free_mining
  - passive_income_without_risk
  - guaranteed_payback_period
  - profit_is_certain
  - losses_are_impossible

## 7. Public Documentation Guidance

The public Costs, Fees and Profitability page should:

- define costs;
- define estimate fields;
- explain rules and sensitivity factors;
- list prohibited profitability claims;
- state estimates are not guarantees.
