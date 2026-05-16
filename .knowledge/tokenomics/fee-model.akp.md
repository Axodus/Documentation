# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: FEE MODEL

[AXODUS_FEE_MODEL]

## 1. Fee Model Thesis

Fee mechanics can support sustainability, burn behavior, liquidity, treasury funding, and reporting.

They can also create confusion if historical or planned parameters are presented as live contract behavior.

All fee model documentation must distinguish verified contract mechanics from draft or historical references.

## 2. Historical or Planned Fee References

fee_references:
  burn_fee:
    value: "0.35%"
    status: Needs_Validation
    intended_purpose:
      - deflationary_pressure_or_supply_reduction_if_implemented

  liquidity_fee:
    value: "0.25%"
    status: Needs_Validation
    intended_purpose:
      - liquidity_support_if_implemented

  treasury_fee:
    value: "0.5%"
    status: Needs_Validation
    intended_purpose:
      - treasury_support_if_implemented

public_doc_rule:
  - These values may be documented as historical/planned draft parameters only if implementation is not verified.
  - Do not state they are active unless the production token contract and governance policy confirm them.

## 3. Fee Categories

fee_categories:
  burn_fee:
    definition:
      - fee_or_fraction_removed_from_supply_if_contract_supports

  liquidity_fee:
    definition:
      - fee_or_fraction_allocated_to_liquidity_support_if_contract_supports

  treasury_fee:
    definition:
      - fee_or_fraction_allocated_to_treasury_if_contract_supports

  marketplace_fee:
    definition:
      - fee_applied_to_marketplace_transactions_if_policy_defines

  operational_fee:
    definition:
      - fee_for_platform_operations_infrastructure_or_service_delivery

  reward_fee:
    definition:
      - fee_or_allocation_used_to_fund_reward_programs_if_governance_defines

  partner_or_referral_fee:
    definition:
      - optional_fee_split_for_referral_or_partner_distribution_if_defined

## 4. Fee Applicability Questions

fee_applicability_questions:
  - Which_actions_trigger_fees?
  - Are_standard_wallet_transfers_taxed?
  - Are_marketplace_payments_taxed?
  - Are_reward_claims_taxed?
  - Are_locked_reward_spends_taxed?
  - Are_internal_platform_credits_taxed?
  - Are_governance_or_treasury_movements_exempt?
  - Can_fee_parameters_change?
  - Who_controls_fee_changes?
  - Are_fee_changes_governance_approved?
  - How_are_fees_reported?

## 5. Fee Parameter Object

fee_parameter_fields:
  - fee_id
  - fee_type
  - rate
  - status
  - applies_to
  - excluded_actions
  - destination
  - contract_reference
  - governance_status
  - effective_date
  - review_date
  - reporting_requirement

## 6. Fee Governance

governance_required_for:
  - adding_new_fee
  - changing_fee_rate
  - changing_fee_destination
  - exempting_major_flow
  - applying_fee_to_marketplace_or_rewards
  - changing_treasury_fee_policy
  - modifying_burn_mechanics
  - modifying_liquidity_support_mechanics

## 7. Fee Reporting

fee_reporting:
  should_include:
    - fee_type
    - amount_collected
    - amount_burned_if_any
    - amount_to_liquidity_if_any
    - amount_to_treasury_if_any
    - period
    - contract_or_wallet_reference
    - governance_reference_if_changed

## 8. Fee Risks

risks:
  hidden_tax_confusion:
    description:
      - users_do_not_understand_transfer_or_transaction_costs

  contract_mismatch:
    description:
      - docs_claim_fee_that_contract_does_not_apply

  liquidity_assumption:
    description:
      - liquidity_fee_does_not_guarantee_market_liquidity

  burn_misrepresentation:
    description:
      - burn_fee_presented_as_guaranteed_price_support

  treasury_opacity:
    description:
      - fee_collected_without_reporting

  marketplace_settlement_conflict:
    description:
      - sellers_tutors_or_users_do_not_understand_net_amount

## 9. Fee Anti-Patterns

anti_patterns:
  fee_as_price_pump:
    problem:
      - burn_or_liquidity_mechanics_presented_as_guaranteed_appreciation

  final_fee_without_contract_check:
    problem:
      - public_docs_conflict_with_actual_contract

  no_fee_exemption_policy:
    problem:
      - governance_treasury_or_internal_flows_unclear

  fee_destination_unknown:
    problem:
      - trust_and_accountability_problem

## 10. Public Documentation Guidance

The public Supply and Emission or Fee Model section should:

- define fee categories;
- mark historical/planned fee values as Needs Validation unless verified;
- explain governance requirements for fee changes;
- explain reporting expectations;
- include risk notes;
- avoid price-support claims.
