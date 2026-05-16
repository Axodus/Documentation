# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: SUPPLY AND EMISSION MODEL

[AXODUS_SUPPLY_AND_EMISSION]

## 1. Supply and Emission Thesis

Supply and emission define how `$Neurons` may exist, be allocated, distributed, rewarded, locked, unlocked, burned, or reported.

Supply and emission are sensitive because they affect sustainability, user expectations, treasury reporting, reward policy, governance participation, and market perception.

Public documentation must not claim final supply or fee mechanics unless verified in contracts and governance records.

## 2. Known Historical or Planned Supply Reference

historical_reference:
  total_supply:
    value: 10000000
    status: Needs_Validation
    public_doc_rule:
      - May be mentioned as draft/planned/historical reference only if not verified.
      - Must not be presented as final production supply unless contract confirms it.

## 3. Supply Concepts

supply_concepts:
  total_supply:
    definition:
      - maximum_or_current_number_of_tokens_defined_by_contract_or_policy

  circulating_supply:
    definition:
      - amount_available_and_transferable_in_market_or_wallets_if_applicable

  locked_supply:
    definition:
      - amount_restricted_by_contract_vesting_or_internal_accounting

  allocated_supply:
    definition:
      - amount_assigned_to_categories_or_programs

  reward_budget:
    definition:
      - portion_available_for_rewards_under_policy

  treasury_reserve:
    definition:
      - portion_controlled_or_accounted_by_treasury_if_defined

  burned_supply:
    definition:
      - amount_permanently_removed_if_burn_mechanism_exists

## 4. Emission Categories

emission_categories:
  Academy_rewards:
    description:
      - emissions_or_allocations_for_learning_rewards

  Marketplace_incentives:
    description:
      - rewards_or_credits_related_to_marketplace_activity_if approved

  Governance_incentives:
    description:
      - rewards_for_governance_participation_if approved

  Community_contributions:
    description:
      - rewards_for_contribution_if policy defines

  Partner_campaigns:
    description:
      - sponsored_or_governance_approved_reward_campaigns

  Treasury_or_liquidity_allocations:
    description:
      - allocations_for_treasury_liquidity_or_sustainability_if defined

  Team_or_ecosystem_allocations:
    description:
      - allocations_for_development_operations_or ecosystem growth if defined

## 5. Allocation Policy Fields

allocation_policy_fields:
  - allocation_id
  - category
  - amount
  - percentage_of_supply_if_applicable
  - status
  - purpose
  - vesting_or_lock_rules
  - claim_rules
  - governance_status
  - treasury_reporting_requirement
  - contract_reference
  - effective_date
  - review_date

## 6. Emission Control

emission_controls:
  - maximum_reward_budget
  - per_user_reward_limits
  - per_course_reward_limits
  - campaign_budget_limits
  - time_based_limits
  - governance_approval_for_high_value_emissions
  - anti_sybil_checks
  - Proof_of_Knowledge_requirement
  - treasury_impact_review
  - reporting_requirement

## 7. Minting Considerations

minting_considerations:
  possible_models:
    fixed_supply:
      description:
        - all_tokens_exist_or_are_capped_at_initial_supply

    controlled_minting:
      description:
        - new_tokens_can_be_minted_under_strict_contract_and_governance_rules

    reward_pool_distribution:
      description:
        - rewards_are_distributed_from_pre_allocated_pool

    internal_credit_accounting:
      description:
        - rewards_recorded_as_platform_credits_until claim_or_spend

  documentation_rule:
    - Do not claim minting model unless verified.
    - Mark as Needs Contract Validation if uncertain.

## 8. Burn Considerations

burn_considerations:
  definition:
    - burn_removes_tokens_from_supply_if_contract_supports

historical_burn_reference:
  value: "0.35%"
  status: Needs_Validation
  note:
    - Historical/planned references mention 0.35% burn per transaction.
    - Public docs must not present this as active unless verified.

burn_policy_questions:
  - Is_burn_automatic_or_manual?
  - Which_transactions_trigger_burn?
  - Is_burn_applied_to_transfers_marketplace_payments_or_claims?
  - Can_burn_parameters_change?
  - Who_controls_parameter_changes?
  - How_is_burn_reported?

## 9. Supply and Emission Governance

governance_required_for:
  - total_supply_change
  - mint_authority_change
  - reward_budget_change
  - emission_schedule_change
  - burn_parameter_change
  - treasury_allocation_change
  - liquidity_allocation_change
  - locked_reward_unlock_policy
  - partner_reward_campaign_above_threshold

## 10. Supply and Emission Risks

risks:
  uncontrolled_emission:
    description:
      - rewards_or_minting_expand_without_sustainability

  unclear_supply:
    description:
      - users_do_not_understand_total_circulating_or_locked_supply

  contract_policy_mismatch:
    description:
      - docs_and_contracts_disagree

  reward_budget_exhaustion:
    description:
      - promised_rewards_exceed_available_budget

  sell_pressure:
    description:
      - unlocked_rewards_increase_market_selling

  governance_capture:
    description:
      - free_or_farmed_rewards_affect_vote_power

  public_claim_error:
    description:
      - final_numbers_published_before_validation

## 11. Public Documentation Guidance

The public Supply and Emission page should:

- define supply and emission terms;
- include historical/planned supply references only with validation status;
- explain allocation and reward budgets conceptually;
- explain governance requirements for supply/emission changes;
- include risks;
- avoid presenting draft values as final.
