# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: GOVERNANCE ALIGNMENT MODEL

[AXODUS_DEX_GOVERNANCE_ALIGNMENT]

## 1. Governance Thesis

DEX parameters can affect user safety, treasury revenue, liquidity, token utility, and market integrity.

Governance must control material policies around listings, pools, fees, incentives, treasury liquidity, emergency actions, and official token status.

## 2. Governance-Sensitive DEX Items

governance_sensitive_items:
  token_listing:
    examples:
      - official_listing
      - verified_status
      - warning_or_blocking_policy

  pool_policy:
    examples:
      - official_pool_creation
      - incentivized_pool
      - treasury_supported_pool

  fee_policy:
    examples:
      - swap_fee
      - protocol_fee
      - treasury_fee
      - LP_fee_distribution

  liquidity_incentives:
    examples:
      - rewards_for_LPs
      - $Neurons_incentives
      - partner_campaigns

  treasury_liquidity:
    examples:
      - treasury_adds_liquidity
      - treasury_removes_liquidity
      - treasury_pool_rebalance

  emergency_actions:
    examples:
      - pause_UI
      - block_token
      - deprecate_pool
      - stop_incentives

  marketplace_or_tokenomics_integration:
    examples:
      - DEX_checkout
      - accepted_assets
      - token_utility_claims

## 3. Governance Routing Levels

routing_levels:
  No_Governance:
    examples:
      - educational_content
      - internal_research

  Governance_Visibility:
    examples:
      - token_watchlist_update
      - pool_metrics_report

  Governance_Review:
    examples:
      - verified_listing
      - fee_policy_change
      - marketplace_D EX_integration

  Formal_Proposal:
    examples:
      - treasury_supported_liquidity
      - liquidity_incentive_program
      - official_$Neurons_pool_policy
      - major_fee_destination_change

  Emergency_Review:
    examples:
      - exploit
      - scam_token_incident
      - liquidity_attack
      - contract_vulnerability

## 4. Reason Codes

reason_codes:
  DEX_GOVERNANCE_REVIEW_REQUIRED:
    meaning:
      - material_DEX_policy_or_parameter_requires_review

  TOKEN_LISTING_REVIEW_REQUIRED:
    meaning:
      - asset_status_or_listing_claim_requires_review

  POOL_POLICY_REVIEW_REQUIRED:
    meaning:
      - official_or_incentivized_pool_requires_review

  FEE_POLICY_REVIEW_REQUIRED:
    meaning:
      - fee_rate_or_destination_change

  TREASURY_LIQUIDITY_REVIEW_REQUIRED:
    meaning:
      - treasury_assets_used_for_liquidity

  TOKENOMICS_LIQUIDITY_REVIEW_REQUIRED:
    meaning:
      - $Neurons_incentives_or_token_utility_affected

  EMERGENCY_DEX_ACTION:
    meaning:
      - urgent_action_needed_to_reduce_harm

## 5. Public Documentation Guidance

The public Governance Alignment page should:

- list governance-sensitive DEX items;
- define routing levels and reason codes;
- explain governance control over listings, pools, fees, incentives, and emergency actions.
