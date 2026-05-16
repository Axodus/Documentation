# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: TOKENOMICS
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Tokenomics
  role: economic_design_utility_rewards_policy_and_token_risk_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - tokenomics-core.akp.md
  - neurons-token.akp.md
  - utility-model.akp.md
  - supply-and-emission.akp.md
  - fee-model.akp.md
  - reward-policy.akp.md
  - locked-rewards.akp.md
  - academy-rewards.akp.md
  - marketplace-utility.akp.md
  - governance-participation.akp.md
  - treasury-alignment.akp.md
  - contract-dependencies.akp.md
  - risk-compliance.akp.md
  - reporting-accountability.akp.md
  - tokenomics-page-directives.akp.md

semantic_domains:
  tokenomics_identity:
    source_file: tokenomics-core.akp.md
    concepts:
      - tokenomics_as_policy_layer
      - utility_not_investment
      - economic_design
      - governance_dependency
      - contract_dependency

  neurons_token:
    source_file: neurons-token.akp.md
    concepts:
      - $Neurons
      - canonical_symbol
      - utility_token
      - deprecated_NRS
      - ecosystem_coordination

  utility_model:
    source_file: utility-model.akp.md
    concepts:
      - access
      - rewards
      - Marketplace
      - Academy
      - governance_participation
      - product_access

  supply_emission:
    source_file: supply-and-emission.akp.md
    concepts:
      - total_supply
      - emission
      - reward_budget
      - minting
      - allocation
      - governance_review

  fee_model:
    source_file: fee-model.akp.md
    concepts:
      - burn_fee
      - liquidity_fee
      - treasury_fee
      - historical_parameters
      - contract_validation_required

  rewards:
    source_file: reward-policy.akp.md
    concepts:
      - reward_policy
      - eligibility
      - reward_status
      - anti_abuse
      - governance_approval

  locked_rewards:
    source_file: locked-rewards.akp.md
    concepts:
      - locked_balance
      - internal_use
      - non_transferability_if_enforced
      - same_token_locked_design
      - unlock_conditions

  academy:
    source_file: academy-rewards.akp.md
    concepts:
      - Learn_to_Win
      - Proof_of_Knowledge
      - free_course_rewards
      - paid_course_rewards
      - reward_farming_prevention

  marketplace:
    source_file: marketplace-utility.akp.md
    concepts:
      - Marketplace_payments
      - locked_reward_spend
      - settlement
      - discounts
      - royalties
      - fees

  governance_participation:
    source_file: governance-participation.akp.md
    concepts:
      - voting_utility
      - governance_eligibility
      - locked_reward_governance_risk
      - quadratic_voting_context

  treasury:
    source_file: treasury-alignment.akp.md
    concepts:
      - treasury_fee
      - reward_budget
      - financial_reporting
      - sustainability
      - accountability

  contracts:
    source_file: contract-dependencies.akp.md
    concepts:
      - ERC20
      - locked_balance_contract
      - reward_controller
      - marketplace_settlement
      - governance_hooks
      - contract_validation_required

  risk:
    source_file: risk-compliance.akp.md
    concepts:
      - investment_language_risk
      - reward_farming
      - sybil
      - governance_capture
      - contract_mismatch
      - regulatory_uncertainty

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - tokenomics_report
      - reward_report
      - treasury_report
      - governance_record
      - execution_receipt

public_documentation_targets:
  overview:
    target: docs/tokenomics/overview.md
    source_files:
      - tokenomics-core.akp.md
      - neurons-token.akp.md

  neurons_token:
    target: docs/tokenomics/neurons-token.md
    source_files:
      - neurons-token.akp.md
      - utility-model.akp.md

  utility_model:
    target: docs/tokenomics/utility-model.md
    source_files:
      - utility-model.akp.md
      - marketplace-utility.akp.md
      - governance-participation.akp.md

  supply_and_emission:
    target: docs/tokenomics/supply-and-emission.md
    source_files:
      - supply-and-emission.akp.md
      - fee-model.akp.md

  reward_policy:
    target: docs/tokenomics/reward-policy.md
    source_files:
      - reward-policy.akp.md
      - academy-rewards.akp.md
      - locked-rewards.akp.md

  locked_rewards:
    target: docs/tokenomics/locked-rewards.md
    source_files:
      - locked-rewards.akp.md
      - contract-dependencies.akp.md

  academy_rewards:
    target: docs/tokenomics/academy-rewards.md
    source_files:
      - academy-rewards.akp.md
      - reward-policy.akp.md

  marketplace_utility:
    target: docs/tokenomics/marketplace-utility.md
    source_files:
      - marketplace-utility.akp.md
      - locked-rewards.akp.md

  governance_participation:
    target: docs/tokenomics/governance-participation.md
    source_files:
      - governance-participation.akp.md
      - risk-compliance.akp.md

  treasury_alignment:
    target: docs/tokenomics/treasury-alignment.md
    source_files:
      - treasury-alignment.akp.md
      - reporting-accountability.akp.md

  contract_dependencies:
    target: docs/tokenomics/contract-dependencies.md
    source_files:
      - contract-dependencies.akp.md

  risk_and_compliance:
    target: docs/tokenomics/risk-and-compliance.md
    source_files:
      - risk-compliance.akp.md

  reporting_accountability:
    target: docs/tokenomics/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

global_invariants:
  - use_$Neurons_as_canonical_symbol
  - NRS_is_deprecated_or_historical_unless_revalidated
  - tokenomics_is_not_investment_documentation
  - no_guaranteed_profit_yield_or_APY
  - contract_behavior_requires_validation
  - free_course_rewards_may_be_locked_or_internal_use
  - paid_course_rewards_may_follow_different_rules
  - locked_rewards_are_not_freely_transferable_unless_contracts_allow
  - marketplace_settlement_questions_must_be_resolved_before_final_claims
  - governance_participation_must_be_policy_and_contract_defined
  - reward_policy_requires_anti_abuse_controls
  - treasury_flows_require_reporting
  - all_public_docs_must_be_English
