# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: RISK AND COMPLIANCE MODEL

[AXODUS_MINING_RISK_COMPLIANCE]

## 1. Risk Thesis

Mining risk includes profitability risk, operational risk, energy risk, hardware risk, pool risk, validator risk, custody risk, market risk, user expectation risk, tax risk, and regulatory risk.

Mining documentation must be transparent and must not provide legal, tax, financial, or investment advice.

## 2. Risk Categories

risk_categories:
  profitability_risk:
    description:
      - mining_can_be_unprofitable_if_costs_exceed_rewards

  market_risk:
    description:
      - mined_asset_value_can_change

  network_difficulty_risk:
    description:
      - difficulty_increase_can_reduce_expected_rewards

  energy_cost_risk:
    description:
      - power_cost_can_increase_or_operation_can_become uneconomic

  hardware_risk:
    description:
      - hardware_can_fail_degrade_or_become_obsolete

  pool_risk:
    description:
      - pool_can_have_downtime_fee_changes_or_payout_issues

  validator_slashing_risk:
    description:
      - validator_or_delegation_can_be_penalized_if network applies

  custody_risk:
    description:
      - wallet_pool_or_validator_credentials_can_be compromised

  operational_risk:
    description:
      - downtime_configuration_or_monitoring_failure_affects rewards

  regulatory_risk:
    description:
      - mining_or_user_products_may_be_restricted_or regulated

  tax_risk:
    description:
      - mined_rewards_or payouts_may_have_tax implications

  consumer_protection_risk:
    description:
      - users_misunderstand_estimates_as guarantees

  environmental_claim_risk:
    description:
      - sustainability_claims_may_be unsupported_or regulated

## 3. Prohibited Claims

prohibited_claims:
  - guaranteed_profit
  - guaranteed_ROI
  - guaranteed_daily_income
  - guaranteed_payout
  - fixed_income
  - passive_income_without_risk
  - risk_free_mining
  - guaranteed_payback
  - mining_cannot_lose
  - legally_compliant_without_review
  - tax_free_without_review
  - renewable_or_carbon_neutral_without_evidence
  - audited_or_secured_without_evidence

## 4. Safe Language

safe_language:
  - estimated_rewards
  - variable_rewards
  - subject_to_network_difficulty
  - subject_to_energy_costs
  - subject_to_hardware_and_uptime_risk
  - subject_to_market_risk
  - subject_to_pool_or_validator_rules
  - subject_to_governance_approval
  - subject_to_compliance_review
  - no_profit_guarantee
  - active_if_verified
  - planned
  - pilot
  - educational

## 5. Review Triggers

review_triggers:
  - user_facing_mining_product
  - public_profitability_claim
  - mining_subscription
  - hashrate_access_offer
  - treasury_mining_allocation
  - payout_policy
  - token_payment_or_reward_policy
  - sustainability_claim
  - validator_or_slashing_related_product
  - marketplace_mining_listing
  - legal_tax_or_compliance_claim

## 6. Required Reviews

required_reviews:
  Treasury:
    triggers:
      - capital_allocation
      - mining_rewards
      - payout_liabilities
      - hardware_or_hosting_costs

  Governance:
    triggers:
      - product_activation
      - payout_policy
      - fee_policy
      - tokenomics_policy

  Security:
    triggers:
      - wallets
      - pool_accounts
      - validator_keys
      - infrastructure_access

  BBA:
    triggers:
      - public_campaign
      - ROI_reward_or_sustainability_claim

  Compliance_or_Legal:
    triggers:
      - user_product_availability
      - subscription_or_hashrate_access
      - tax_or_legal_claim
      - jurisdiction_sensitive_offer

## 7. Public Documentation Guidance

The public Risk and Compliance page should:

- explain mining risks;
- list prohibited and safe language;
- list review triggers and required reviews;
- avoid legal, tax, financial, and investment advice.
