# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: MINING MODELS

[AXODUS_MINING_MODELS]

## 1. Mining Models Thesis

"Mining" must be documented by model.

Different networks and products use different reward mechanisms. Proof-of-Work mining, pool mining, hosted mining, cloud-style access, validator operations, and node operations have different risks, costs, custody assumptions, and disclosures.

## 2. Mining Model Types

model_types:
  Proof_of_Work_Mining:
    description:
      - hardware_performs_computation_to_compete_for_network_rewards
    risks:
      - difficulty_energy_hardware_pool_market_and_regulatory_risk

  Pool_Mining:
    description:
      - miners_contribute_hashrate_to_pool_and_receive_pool_based_payouts
    risks:
      - pool_fee_pool_downtime_payout_method_counterparty_and_reporting_risk

  Solo_Mining:
    description:
      - miner_attempts_to_mine_blocks_without_pool
    risks:
      - high_variance_and_unpredictable_rewards

  Hosted_Mining:
    description:
      - hardware_operated_in_hosting_facility_or_by_service_provider
    risks:
      - hosting_counterparty_energy_maintenance_and_access_risk

  Cloud_Style_Mining_Access:
    description:
      - user_accesses_mining_capacity_or_product_without_direct_hardware custody
    risks:
      - high_consumer_protection_and_claim_review_sensitivity
    warning:
      - Must_not_be_marketed_as_guaranteed_profit_or_fixed_return.

  Hashrate_Allocation:
    description:
      - defined_share_or_amount_of_mining_capacity_allocated_to_treasury_user_or product
    risks:
      - measurement_payout_and_operational_transparency_risk

  Validator_Operations:
    description:
      - node_validates_network_or_participates_in_proof_of_stake_or_similar consensus
    risks:
      - slashing_downtime_delegation_stake_and_network_risk

  Node_Infrastructure:
    description:
      - operating_network_nodes_for_reliability_data_or ecosystem support
    risks:
      - uptime_cost_maintenance_and_no_reward_if_node_is_not_rewarded

  Educational_Mining_Simulation:
    description:
      - Academy_or_dashboard_simulation_for_learning
    risks:
      - users_may_confuse_simulation_with_real_rewards

## 3. Model Object

model_fields:
  - model_id
  - name
  - network_or_asset
  - consensus_or_algorithm
  - reward_source
  - infrastructure_required
  - custody_model
  - cost_model
  - payout_model
  - user_facing_status
  - treasury_impact
  - risk_level
  - governance_status
  - compliance_status
  - reporting_requirement

## 4. Model Statuses

statuses:
  Research:
    meaning:
      - model_under_study

  Simulation:
    meaning:
      - model_used_for_estimation_or_education_only

  Internal_Test:
    meaning:
      - internal_validation_no_public_user_payouts

  Pilot:
    meaning:
      - limited_scope_test_with_controls

  Active_Internal:
    meaning:
      - used_for_treasury_or_internal operations

  Active_User_Facing:
    meaning:
      - live_for_users_under_approved_scope

  Paused:
    meaning:
      - temporarily_disabled

  Deprecated:
    meaning:
      - no_longer_current

  Prohibited:
    meaning:
      - not_allowed_under_policy

## 5. Selection Criteria

selection_criteria:
  - network_reliability
  - reward_variability
  - hardware_or_node_requirements
  - energy_or_hosting_cost
  - pool_or_validator_counterparty_risk
  - market_liquidity
  - compliance_risk
  - treasury_fit
  - user_disclosure_complexity
  - monitoring_availability
  - security_requirements

## 6. Public Documentation Guidance

The public Mining Models page should:

- define each mining or validation model;
- explain statuses and model fields;
- include selection criteria;
- state that rewards are variable and model-specific.
