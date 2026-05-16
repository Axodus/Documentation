# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: $NEURONS TOKEN MODEL

[AXODUS_NEURONS_TOKEN]

## 1. Canonical Token Identity

canonical_token:
  name: Neurons
  canonical_notation: "$Neurons"
  status: Draft
  domain: Tokenomics

deprecated_or_historical_symbols:
  - NRS

symbol_rule:
  - Use `$Neurons` as the canonical notation in all new documentation.
  - Treat `NRS` as deprecated or historical unless project governance revalidates it.
  - Do not create alternative symbols or informal shorthand.

## 2. Token Definition

short_definition:
  "`$Neurons` is the Axodus ecosystem token designed to support utility, rewards, access, governance participation, and ecosystem coordination."

long_definition:
  - `$Neurons` is intended to connect multiple Axodus nuclei through utility and participation.
  - It may be used in Academy reward flows, Marketplace utility, governance participation, product access, and ecosystem incentive models if implementation and governance policy support those uses.
  - `$Neurons` must not be described as an investment, guaranteed return product, guaranteed yield token, or passive income mechanism.
  - Public documentation must distinguish design intent from implemented contract behavior.

## 3. Token Role

token_roles:
  utility:
    description:
      - access_to_products_services_courses_or_marketplace_features_if_supported

  rewards:
    description:
      - learning_or_participation_rewards_under_policy

  governance_participation:
    description:
      - possible participation asset for governance if defined by governance and contracts

  coordination:
    description:
      - shared economic unit connecting Academy Marketplace Governance Business and other nuclei

  marketplace_usage:
    description:
      - possible payment discount credit or access mechanism if marketplace implementation supports it

  reputation_or_progression_context:
    description:
      - token activity may support progression only if policy defines it
    warning:
      - token_balance_alone_should_not_replace_Proof_of_Knowledge_or_quality_review

## 4. Token Should Not Be Framed As

prohibited_framing:
  - investment_product
  - guaranteed_profit
  - guaranteed_APY
  - fixed_income
  - passive_income
  - risk_free_reward
  - guaranteed_price_appreciation
  - guaranteed_liquidity
  - legal_security_or_regulated_product_without_review

## 5. Historical Design References

historical_or_planned_references:
  total_supply:
    value: 10000000
    status: Needs_Validation
    note:
      - Historical or planned tokenomics references mention a 10,000,000 supply.
      - Public docs should mark this as Draft or Needs Contract Validation unless verified in the production token contract.

  burn_fee:
    value: "0.35%"
    status: Needs_Validation
    note:
      - Historical or planned references mention a 0.35% burn per transaction.
      - Do not publish as active unless verified.

  liquidity_fee:
    value: "0.25%"
    status: Needs_Validation
    note:
      - Historical or planned references mention a 0.25% liquidity fee per transaction.
      - Do not publish as active unless verified.

  treasury_fee:
    value: "0.5%"
    status: Needs_Validation
    note:
      - Historical or planned references mention a 0.5% treasury fee per transaction.
      - Do not publish as active unless verified.

## 6. Token Lifecycle Concepts

lifecycle_concepts:
  minted:
    meaning:
      - token_or_reward_created_under_contract_or_policy

  allocated:
    meaning:
      - token_supply_or_reward_budget_assigned_to_category

  earned:
    meaning:
      - user_or_actor_meets_eligibility_condition

  issued:
    meaning:
      - reward_record_created_or_token_distributed

  locked:
    meaning:
      - balance_restricted_by_contract_or_accounting

  unlocked:
    meaning:
      - restrictions_removed_if_policy_and_contract_allow

  claimed:
    meaning:
      - user_claims_reward_to_wallet_or_account_if_supported

  spent:
    meaning:
      - token_or_credit_used_for_marketplace_or_platform_utility

  burned:
    meaning:
      - tokens_removed_from_supply_if_contract_supports

  reported:
    meaning:
      - token_flow_included_in_accountability_or_treasury_report

## 7. Token Documentation Requirements

documentation_requirements:
  - always_define_$Neurons_before_using_it
  - always_explain_utility_without_investment_language
  - mark_contract_dependent_features
  - distinguish_locked_and_unlocked_states
  - link_to_reward_policy_and_locked_rewards
  - link_to_governance_participation_if_claimed
  - include_risk_and_no_guarantee_language
  - verify_supply_fee_and_contract_details_before_public_claims

## 8. Token Anti-Patterns

anti_patterns:
  using_NRS_as_current_symbol:
    problem:
      - creates_brand_and_documentation_inconsistency

  claiming_fee_mechanics_without_contract_check:
    problem:
      - public_docs_may_conflict_with_actual_contract

  token_as_trading_pitch:
    problem:
      - shifts_documentation_from_utility_to_speculation

  assuming_marketplace_acceptance:
    problem:
      - token_payment_behavior_may_not_be_implemented

  assuming_governance_power:
    problem:
      - governance_participation_must_be_policy_defined

## 9. Public Documentation Guidance

The public `$Neurons` token page should:

- define `$Neurons` clearly;
- explain its ecosystem role;
- state what it is not;
- list utility areas as active/planned where appropriate;
- include historical/planned supply and fee references only with validation status;
- link to Utility Model, Reward Policy, Locked Rewards, Governance Participation, and Risk.
