# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: DEFI
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: DeFi
  canonical_name: Axodus DeFi
  role: decentralized_finance_protocol_DaaS_strategy_risk_and_service_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - defi-core.akp.md
  - defi-architecture.akp.md
  - daas-model.akp.md
  - etf-daas-model.akp.md
  - protocol-model.akp.md
  - vaults-and-strategies.akp.md
  - staking-and-yield.akp.md
  - liquidity-model.akp.md
  - derivatives-and-debentures.akp.md
  - risk-management.akp.md
  - security-smart-contracts.akp.md
  - governance-alignment.akp.md
  - treasury-alignment.akp.md
  - tokenomics-alignment.akp.md
  - academy-user-education.akp.md
  - acs-integration.akp.md
  - reporting-accountability.akp.md
  - compliance-disclosures.akp.md
  - defi-page-directives.akp.md

semantic_domains:
  identity:
    source_file: defi-core.akp.md
    concepts:
      - DeFi
      - DaaS
      - ETF_DaaS
      - risk_aware_DeFi
      - governance_aligned_protocol_layer

  architecture:
    source_file: defi-architecture.akp.md
    concepts:
      - protocol_layer
      - strategy_layer
      - vault_layer
      - risk_layer
      - oracle_layer
      - reporting_layer
      - governance_layer

  DaaS:
    source_file: daas-model.akp.md
    concepts:
      - DeFi_as_a_Service
      - service_catalog
      - strategy_packaging
      - DAO_services
      - Business_integration

  ETF_DaaS:
    source_file: etf-daas-model.akp.md
    concepts:
      - ETF_oriented_DeFi
      - diversified_exposure
      - baskets
      - index_like_strategy
      - not_regulated_ETF_without_legal_basis

  protocol_model:
    source_file: protocol-model.akp.md
    concepts:
      - protocol_integrations
      - adapters
      - connectors
      - vaults
      - oracles
      - external_protocol_risk

  vaults_strategies:
    source_file: vaults-and-strategies.akp.md
    concepts:
      - vault
      - strategy
      - allocation
      - rebalancing
      - deposits_withdrawals
      - share_accounting

  staking_yield:
    source_file: staking-and-yield.akp.md
    concepts:
      - staking
      - variable_yield
      - APY_language_risk
      - rewards
      - lockups
      - slashing

  liquidity:
    source_file: liquidity-model.akp.md
    concepts:
      - liquidity_pools
      - LP_tokens
      - impermanent_loss
      - slippage
      - depth
      - liquidity_incentives

  derivatives_debentures:
    source_file: derivatives-and-debentures.akp.md
    concepts:
      - derivatives
      - debentures
      - structured_products
      - high_risk
      - legal_review_required

  risk:
    source_file: risk-management.akp.md
    concepts:
      - smart_contract_risk
      - market_risk
      - liquidity_risk
      - oracle_risk
      - bridge_risk
      - protocol_risk
      - composability_risk

  security:
    source_file: security-smart-contracts.akp.md
    concepts:
      - audits
      - reviews
      - access_control
      - pause
      - upgradeability
      - bug_bounty
      - incident_response

  governance:
    source_file: governance-alignment.akp.md
    concepts:
      - parameter_governance
      - strategy_approval
      - protocol_whitelisting
      - risk_limits
      - emergency_pause

  treasury:
    source_file: treasury-alignment.akp.md
    concepts:
      - treasury_exposure
      - capital_allocation
      - yield_reporting
      - strategy_limits
      - reserves

  tokenomics:
    source_file: tokenomics-alignment.akp.md
    concepts:
      - $Neurons_utility
      - reward_policy
      - staking_rewards
      - liquidity_incentives
      - fee_routing

  education:
    source_file: academy-user-education.akp.md
    concepts:
      - DeFi_education
      - risk_modules
      - user_readiness
      - Proof_of_Knowledge
      - disclosures

  ACS:
    source_file: acs-integration.akp.md
    concepts:
      - Trinity
      - Agent_Smith
      - Morpheus
      - risk_analysis
      - strategy_review
      - report_drafting

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - DeFi_report
      - vault_report
      - strategy_report
      - risk_report
      - execution_receipt

  compliance:
    source_file: compliance-disclosures.akp.md
    concepts:
      - no_financial_advice
      - no_yield_guarantee
      - ETF_language_risk
      - regulatory_uncertainty
      - user_disclosures

public_documentation_targets:
  overview:
    target: docs/defi/overview.md
    source_files:
      - defi-core.akp.md
      - defi-architecture.akp.md

  architecture:
    target: docs/defi/architecture.md
    source_files:
      - defi-architecture.akp.md

  daas:
    target: docs/defi/daas.md
    source_files:
      - daas-model.akp.md

  etf_daas:
    target: docs/defi/etf-daas.md
    source_files:
      - etf-daas-model.akp.md
      - compliance-disclosures.akp.md

  protocol_model:
    target: docs/defi/protocol-model.md
    source_files:
      - protocol-model.akp.md

  vaults:
    target: docs/defi/vaults-and-strategies.md
    source_files:
      - vaults-and-strategies.akp.md

  staking_yield:
    target: docs/defi/staking-and-yield.md
    source_files:
      - staking-and-yield.akp.md
      - risk-management.akp.md

  liquidity:
    target: docs/defi/liquidity-model.md
    source_files:
      - liquidity-model.akp.md

  derivatives_debentures:
    target: docs/defi/derivatives-and-debentures.md
    source_files:
      - derivatives-and-debentures.akp.md

  risk:
    target: docs/defi/risk-management.md
    source_files:
      - risk-management.akp.md

  security:
    target: docs/defi/security-and-smart-contracts.md
    source_files:
      - security-smart-contracts.akp.md

  governance:
    target: docs/defi/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  treasury:
    target: docs/defi/treasury-alignment.md
    source_files:
      - treasury-alignment.akp.md

  tokenomics:
    target: docs/defi/tokenomics-alignment.md
    source_files:
      - tokenomics-alignment.akp.md

  education:
    target: docs/defi/academy-and-user-education.md
    source_files:
      - academy-user-education.akp.md

  ACS:
    target: docs/defi/acs-integration.md
    source_files:
      - acs-integration.akp.md

  reporting:
    target: docs/defi/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  compliance:
    target: docs/defi/compliance-and-disclosures.md
    source_files:
      - compliance-disclosures.akp.md

global_invariants:
  - no_guaranteed_yield
  - no_guaranteed_APY
  - no_risk_free_DeFi
  - DaaS_means_DeFi_as_a_Service
  - ETF_DaaS_is_ETF_oriented_not_regulated_ETF_unless_legally_established
  - smart_contract_review_required_for_production
  - treasury_DeFi_exposure_requires_policy_limits_and_reporting
  - governance_controls_material_strategy_and_parameter_changes
  - user_facing_DeFi_requires_disclosures_and_education
  - ACS_is_advisory_not_authority
  - all_public_docs_must_be_English
