# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: DEX
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: DEX
  canonical_name: Axodus DEX
  role: decentralized_exchange_swap_pool_liquidity_routing_and_execution_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - dex-core.akp.md
  - dex-architecture.akp.md
  - swap-model.akp.md
  - liquidity-pools.akp.md
  - routing-and-aggregation.akp.md
  - listing-policy.akp.md
  - fees-and-revenue.akp.md
  - lp-model.akp.md
  - slippage-price-impact.akp.md
  - mev-execution-risk.akp.md
  - security-smart-contracts.akp.md
  - governance-alignment.akp.md
  - treasury-alignment.akp.md
  - tokenomics-alignment.akp.md
  - trading-integration.akp.md
  - marketplace-integration.akp.md
  - academy-user-education.akp.md
  - acs-integration.akp.md
  - reporting-accountability.akp.md
  - risk-disclosures.akp.md
  - dex-page-directives.akp.md

semantic_domains:
  identity:
    source_file: dex-core.akp.md
    concepts:
      - decentralized_exchange
      - swaps
      - liquidity_pools
      - routing
      - ecosystem_liquidity
      - no_execution_guarantee

  architecture:
    source_file: dex-architecture.akp.md
    concepts:
      - swap_layer
      - pool_layer
      - router_layer
      - fee_layer
      - listing_layer
      - risk_layer
      - governance_layer
      - reporting_layer

  swaps:
    source_file: swap-model.akp.md
    concepts:
      - token_swap
      - quote
      - route
      - slippage_tolerance
      - deadline
      - failed_transaction

  liquidity_pools:
    source_file: liquidity-pools.akp.md
    concepts:
      - pool
      - AMM
      - reserves
      - pool_pair
      - pool_parameters
      - liquidity_depth

  routing:
    source_file: routing-and-aggregation.akp.md
    concepts:
      - router
      - aggregator
      - split_route
      - best_execution
      - route_risk
      - external_liquidity

  listing:
    source_file: listing-policy.akp.md
    concepts:
      - token_listing
      - listing_review
      - token_risk
      - scam_token
      - official_asset
      - unverified_asset

  fees:
    source_file: fees-and-revenue.akp.md
    concepts:
      - swap_fee
      - protocol_fee
      - LP_fee
      - treasury_fee
      - fee_routing
      - revenue_reporting

  LP:
    source_file: lp-model.akp.md
    concepts:
      - liquidity_provider
      - LP_token
      - impermanent_loss
      - pool_share
      - fees
      - withdrawal

  slippage:
    source_file: slippage-price-impact.akp.md
    concepts:
      - slippage
      - price_impact
      - minimum_received
      - quote_expiration
      - transaction_deadline

  MEV:
    source_file: mev-execution-risk.akp.md
    concepts:
      - MEV
      - sandwich_attack
      - front_running
      - back_running
      - private_orderflow
      - execution_protection

  security:
    source_file: security-smart-contracts.akp.md
    concepts:
      - AMM_contract
      - router_contract
      - access_control
      - upgradeability
      - audits
      - emergency_pause

  governance:
    source_file: governance-alignment.akp.md
    concepts:
      - pool_approval
      - listing_policy
      - fee_policy
      - liquidity_incentives
      - emergency_pause
      - parameter_governance

  treasury:
    source_file: treasury-alignment.akp.md
    concepts:
      - treasury_liquidity
      - LP_positions
      - protocol_revenue
      - liquidity_support
      - exposure_reporting

  tokenomics:
    source_file: tokenomics-alignment.akp.md
    concepts:
      - $Neurons_liquidity
      - fees
      - incentives
      - burn_liquidity_treasury
      - reward_policy

  trading:
    source_file: trading-integration.akp.md
    concepts:
      - DEX_data
      - arbitrage
      - routing
      - bots
      - execution_risk
      - Trinity

  marketplace:
    source_file: marketplace-integration.akp.md
    concepts:
      - marketplace_settlement
      - token_swap_checkout
      - accepted_assets
      - payment_routing
      - refund_risk

  education:
    source_file: academy-user-education.akp.md
    concepts:
      - swap_education
      - LP_education
      - impermanent_loss
      - slippage
      - token_listing_risk
      - Proof_of_Knowledge

  ACS:
    source_file: acs-integration.akp.md
    concepts:
      - Morpheus
      - Trinity
      - Agent_Smith
      - route_analysis
      - claim_review
      - risk_reports

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - DEX_report
      - pool_report
      - fee_report
      - liquidity_report
      - incident_report
      - execution_receipt

  risk:
    source_file: risk-disclosures.akp.md
    concepts:
      - no_guaranteed_execution
      - slippage_risk
      - LP_risk
      - token_risk
      - MEV_risk
      - smart_contract_risk

public_documentation_targets:
  overview:
    target: docs/dex/overview.md
    source_files:
      - dex-core.akp.md
      - dex-architecture.akp.md

  architecture:
    target: docs/dex/architecture.md
    source_files:
      - dex-architecture.akp.md

  swap_model:
    target: docs/dex/swap-model.md
    source_files:
      - swap-model.akp.md
      - slippage-price-impact.akp.md

  liquidity_pools:
    target: docs/dex/liquidity-pools.md
    source_files:
      - liquidity-pools.akp.md
      - lp-model.akp.md

  routing:
    target: docs/dex/routing-and-aggregation.md
    source_files:
      - routing-and-aggregation.akp.md

  listing:
    target: docs/dex/listing-policy.md
    source_files:
      - listing-policy.akp.md

  fees:
    target: docs/dex/fees-and-revenue.md
    source_files:
      - fees-and-revenue.akp.md
      - treasury-alignment.akp.md

  lp_model:
    target: docs/dex/lp-model.md
    source_files:
      - lp-model.akp.md

  slippage:
    target: docs/dex/slippage-and-price-impact.md
    source_files:
      - slippage-price-impact.akp.md

  mev:
    target: docs/dex/mev-and-execution-risk.md
    source_files:
      - mev-execution-risk.akp.md

  security:
    target: docs/dex/security-and-smart-contracts.md
    source_files:
      - security-smart-contracts.akp.md

  governance:
    target: docs/dex/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  treasury:
    target: docs/dex/treasury-alignment.md
    source_files:
      - treasury-alignment.akp.md

  tokenomics:
    target: docs/dex/tokenomics-alignment.md
    source_files:
      - tokenomics-alignment.akp.md

  trading:
    target: docs/dex/trading-integration.md
    source_files:
      - trading-integration.akp.md

  marketplace:
    target: docs/dex/marketplace-integration.md
    source_files:
      - marketplace-integration.akp.md

  education:
    target: docs/dex/academy-and-user-education.md
    source_files:
      - academy-user-education.akp.md

  acs:
    target: docs/dex/acs-integration.md
    source_files:
      - acs-integration.akp.md

  reporting:
    target: docs/dex/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  risk:
    target: docs/dex/risk-and-disclosures.md
    source_files:
      - risk-disclosures.akp.md

global_invariants:
  - no_guaranteed_profit
  - no_guaranteed_liquidity
  - no_guaranteed_execution
  - swaps_require_slippage_and_price_impact_disclosure
  - LPs_require_impermanent_loss_disclosure
  - listings_do_not_equal_endorsement
  - treasury_liquidity_requires_governance_and_reporting
  - $Neurons_liquidity_claims_require_verification
  - smart_contracts_require_security_review
  - MEV_risk_must_be_disclosed
  - ACS_is_advisory_not_authority
  - all_public_docs_must_be_English
