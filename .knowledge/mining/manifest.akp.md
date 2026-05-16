# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: MINING
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Mining
  canonical_name: Axodus Mining
  role: mining_validation_infrastructure_rewards_operations_and_product_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - mining-core.akp.md
  - mining-architecture.akp.md
  - mining-models.akp.md
  - infrastructure-operations.akp.md
  - hardware-energy-uptime.akp.md
  - pools-hashrate-difficulty.akp.md
  - node-validator-operations.akp.md
  - user-facing-products.akp.md
  - rewards-payouts.akp.md
  - costs-fees-profitability.akp.md
  - treasury-alignment.akp.md
  - tokenomics-alignment.akp.md
  - governance-alignment.akp.md
  - marketplace-business-bba-alignment.akp.md
  - academy-user-education.akp.md
  - trading-risk-hedging.akp.md
  - security-custody.akp.md
  - monitoring-telemetry.akp.md
  - acs-integration.akp.md
  - reporting-accountability.akp.md
  - sustainability-responsible-operations.akp.md
  - risk-compliance.akp.md
  - mining-page-directives.akp.md

semantic_domains:
  identity:
    source_file: mining-core.akp.md
    concepts:
      - mining_nucleus
      - infrastructure
      - variable_rewards
      - no_guaranteed_profit
      - mining_vs_validation

  architecture:
    source_file: mining-architecture.akp.md
    concepts:
      - infrastructure_layer
      - pool_layer
      - reward_layer
      - product_layer
      - telemetry_layer
      - governance_layer

  models:
    source_file: mining-models.akp.md
    concepts:
      - proof_of_work
      - cloud_mining
      - hosted_mining
      - hashrate_allocation
      - validator_operations
      - user_products

  infrastructure:
    source_file: infrastructure-operations.akp.md
    concepts:
      - facility
      - hosting
      - maintenance
      - uptime
      - operations
      - incident_response

  hardware_energy:
    source_file: hardware-energy-uptime.akp.md
    concepts:
      - ASIC
      - GPU
      - power_cost
      - cooling
      - uptime
      - energy_efficiency

  pools_hashrate:
    source_file: pools-hashrate-difficulty.akp.md
    concepts:
      - mining_pool
      - hashrate
      - network_difficulty
      - block_reward
      - pool_fee
      - payout_method

  nodes_validators:
    source_file: node-validator-operations.akp.md
    concepts:
      - node
      - validator
      - delegation
      - slashing
      - uptime
      - network_rewards

  user_products:
    source_file: user-facing-products.akp.md
    concepts:
      - user_mining_product
      - subscription
      - allocation
      - dashboard
      - payout_rules
      - eligibility

  rewards_payouts:
    source_file: rewards-payouts.akp.md
    concepts:
      - mined_rewards
      - payout
      - minimum_payout
      - payout_asset
      - withholding
      - payout_status

  profitability:
    source_file: costs-fees-profitability.akp.md
    concepts:
      - cost_model
      - estimated_profitability
      - energy_cost
      - maintenance
      - depreciation
      - variable_returns

  treasury:
    source_file: treasury-alignment.akp.md
    concepts:
      - treasury_mining_exposure
      - capital_allocation
      - mined_assets
      - reserves
      - reporting

  tokenomics:
    source_file: tokenomics-alignment.akp.md
    concepts:
      - $Neurons_access
      - rewards
      - mining_subscriptions
      - discounts
      - token_utility
      - no_investment_claim

  governance:
    source_file: governance-alignment.akp.md
    concepts:
      - product_activation
      - treasury_allocation
      - risk_limits
      - payout_policy
      - pool_policy
      - emergency_pause

  marketplace_business_bba:
    source_file: marketplace-business-bba-alignment.akp.md
    concepts:
      - mining_services
      - Marketplace_listings
      - Business_packages
      - BBA_claim_review
      - client_intake

  education:
    source_file: academy-user-education.akp.md
    concepts:
      - mining_education
      - profitability_estimates
      - operational_risk
      - Proof_of_Knowledge
      - user_readiness

  trading_hedging:
    source_file: trading-risk-hedging.akp.md
    concepts:
      - mined_asset_conversion
      - hedging
      - market_risk
      - treasury_rebalance
      - Trading_integration

  security:
    source_file: security-custody.akp.md
    concepts:
      - wallet_custody
      - payout_wallets
      - pool_credentials
      - API_keys
      - hardware_security
      - access_control

  monitoring:
    source_file: monitoring-telemetry.akp.md
    concepts:
      - hashrate_monitoring
      - uptime
      - temperature
      - pool_status
      - reward_tracking
      - alerts

  ACS:
    source_file: acs-integration.akp.md
    concepts:
      - Trinity
      - Agent_Smith
      - Morpheus
      - monitoring_summary
      - risk_review
      - claim_review

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - mining_report
      - reward_report
      - payout_report
      - uptime_report
      - treasury_report

  sustainability:
    source_file: sustainability-responsible-operations.akp.md
    concepts:
      - energy_usage
      - sustainability
      - heat_noise
      - facility_risk
      - responsible_operations

  risk:
    source_file: risk-compliance.akp.md
    concepts:
      - profitability_risk
      - regulatory_risk
      - energy_risk
      - hardware_risk
      - tax_risk
      - consumer_protection

public_documentation_targets:
  overview:
    target: docs/mining/overview.md
    source_files:
      - mining-core.akp.md
      - mining-architecture.akp.md

  architecture:
    target: docs/mining/architecture.md
    source_files:
      - mining-architecture.akp.md

  mining_models:
    target: docs/mining/mining-models.md
    source_files:
      - mining-models.akp.md

  infrastructure:
    target: docs/mining/infrastructure-and-operations.md
    source_files:
      - infrastructure-operations.akp.md

  hardware_energy:
    target: docs/mining/hardware-energy-and-uptime.md
    source_files:
      - hardware-energy-uptime.akp.md

  pools_hashrate:
    target: docs/mining/pools-hashrate-and-network-difficulty.md
    source_files:
      - pools-hashrate-difficulty.akp.md

  node_validator:
    target: docs/mining/node-and-validator-operations.md
    source_files:
      - node-validator-operations.akp.md

  user_products:
    target: docs/mining/user-facing-products.md
    source_files:
      - user-facing-products.akp.md

  rewards:
    target: docs/mining/rewards-and-payouts.md
    source_files:
      - rewards-payouts.akp.md

  profitability:
    target: docs/mining/costs-fees-and-profitability.md
    source_files:
      - costs-fees-profitability.akp.md

  treasury:
    target: docs/mining/treasury-alignment.md
    source_files:
      - treasury-alignment.akp.md

  tokenomics:
    target: docs/mining/tokenomics-alignment.md
    source_files:
      - tokenomics-alignment.akp.md

  governance:
    target: docs/mining/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  marketplace_business_bba:
    target: docs/mining/marketplace-business-and-bba-alignment.md
    source_files:
      - marketplace-business-bba-alignment.akp.md

  education:
    target: docs/mining/academy-and-user-education.md
    source_files:
      - academy-user-education.akp.md

  trading_hedging:
    target: docs/mining/trading-and-risk-hedging.md
    source_files:
      - trading-risk-hedging.akp.md

  security:
    target: docs/mining/security-and-custody.md
    source_files:
      - security-custody.akp.md

  monitoring:
    target: docs/mining/monitoring-and-telemetry.md
    source_files:
      - monitoring-telemetry.akp.md

  ACS:
    target: docs/mining/acs-integration.md
    source_files:
      - acs-integration.akp.md

  reporting:
    target: docs/mining/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  sustainability:
    target: docs/mining/sustainability-and-responsible-operations.md
    source_files:
      - sustainability-responsible-operations.akp.md

  risk:
    target: docs/mining/risk-and-compliance.md
    source_files:
      - risk-compliance.akp.md

global_invariants:
  - no_guaranteed_profit
  - no_guaranteed_ROI
  - no_guaranteed_daily_payout
  - rewards_are_variable
  - estimates_are_not_guarantees
  - treasury_mining_exposure_requires_policy_governance_limits_and_reporting
  - user_products_require_disclosures_payout_rules_and_status_labels
  - validator_operations_require_slashing_and_downtime_disclosure
  - marketplace_mining_services_require_claim_review
  - BBA_claim_review_required_for_public_campaigns
  - ACS_is_advisory_not_authority
  - all_public_docs_must_be_English
