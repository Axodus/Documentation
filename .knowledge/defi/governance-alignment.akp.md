# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: GOVERNANCE ALIGNMENT MODEL

[AXODUS_DEFI_GOVERNANCE_ALIGNMENT]

## 1. Governance Thesis

DeFi parameters and strategies can affect users, treasury, tokenomics, rewards, and ecosystem trust.

Therefore material DeFi actions must be governance-aligned.

## 2. Governance-Sensitive DeFi Items

governance_sensitive_items:
  protocol_whitelisting:
    examples:
      - approving_external_protocol_integration
      - approving_chain_or_bridge

  strategy_approval:
    examples:
      - treasury_DeFi_strategy
      - user_vault_strategy
      - liquidity_program

  parameter_changes:
    examples:
      - fees
      - risk_limits
      - reward_rates
      - allocation_rules
      - withdrawal_rules

  product_launch:
    examples:
      - DaaS_service
      - staking_product
      - vault
      - ETF_DaaS_basket

  tokenomics_incentives:
    examples:
      - liquidity_rewards
      - staking_rewards
      - $Neurons_utility
      - reward_budgets

  emergency_controls:
    examples:
      - pause
      - protocol_deprecation
      - exit_strategy
      - incident_response

  treasury_exposure:
    examples:
      - capital_allocation
      - DeFi_protocol_exposure
      - derivatives_or_debentures

## 3. Governance Routing Levels

routing_levels:
  No_Governance:
    examples:
      - educational_content_without_claims
      - internal_research_note

  Governance_Visibility:
    examples:
      - low_risk_strategy_research
      - protocol_watchlist_update

  Governance_Review:
    examples:
      - protocol_integration_review
      - user_facing_DeFi_product_policy
      - reward_or_access_policy

  Formal_Proposal:
    examples:
      - treasury_allocation
      - vault_launch
      - ETF_DaaS_basket
      - liquidity_incentive_program
      - parameter_changes_with_material_effect

  Emergency_Review:
    examples:
      - exploit
      - protocol_failure
      - oracle_failure
      - major_treasury_loss

## 4. Governance Reason Codes

reason_codes:
  DEFI_GOVERNANCE_REVIEW_REQUIRED:
    meaning:
      - material_DeFi_policy_or_product_requires_governance

  PROTOCOL_WHITELIST_REQUIRED:
    meaning:
      - external_protocol_integration_requires_review

  STRATEGY_APPROVAL_REQUIRED:
    meaning:
      - strategy_affects_users_or_treasury

  TREASURY_EXPOSURE_REVIEW_REQUIRED:
    meaning:
      - treasury_capital_or_reserves_affected

  TOKENOMICS_INCENTIVE_REVIEW_REQUIRED:
    meaning:
      - rewards_fees_or_$Neurons_utility_affected

  SECURITY_REVIEW_REQUIRED:
    meaning:
      - contract_or_protocol_integration_risk

  EMERGENCY_DEFI_ACTION:
    meaning:
      - urgent_action_required_to_reduce_harm

## 5. Public Documentation Guidance

The public Governance Alignment page should:

- explain governance-sensitive DeFi items;
- define routing levels and reason codes;
- state that material DeFi changes require governance review;
- link to Governance, Treasury, Tokenomics, Security, and Reporting.
