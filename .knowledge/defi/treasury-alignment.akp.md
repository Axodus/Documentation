# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: TREASURY ALIGNMENT MODEL

[AXODUS_DEFI_TREASURY_ALIGNMENT]

## 1. Treasury Alignment Thesis

DeFi can affect Treasury through capital allocation, protocol exposure, liquidity programs, yield strategies, vaults, incentives, losses, and liabilities.

Treasury DeFi activity must be policy-driven, limited, monitored, and reported.

## 2. Treasury-DeFi Interfaces

interfaces:
  capital_allocation:
    description:
      - treasury_allocates_assets_to_DeFi_strategy_or_protocol

  reserve_impact:
    description:
      - DeFi_exposure_affects_liquid_reserves_or_runway

  yield_or_loss:
    description:
      - strategy_generates_variable_results_that_must_be_reported

  liquidity_support:
    description:
      - treasury_supports_liquidity_program_if governance approves

  tokenomics_incentives:
    description:
      - rewards_or_fee_programs_affect_treasury_budget

  protocol_exposure:
    description:
      - treasury_assets_exposed_to_external_protocols_or_chains

## 3. Treasury Review Required For

review_required_for:
  - any_live_treasury_DeFi_allocation
  - vault_or_strategy_using_treasury_assets
  - liquidity_program
  - protocol_whitelisting_with_treasury_exposure
  - bridge_dependent_strategy
  - derivatives_or_debentures
  - reward_subsidy_or_incentive_program
  - ETF_DaaS_basket_with_treasury_assets

## 4. Treasury DeFi Report Fields

report_fields:
  - reporting_period
  - strategy_or_protocol
  - assets_allocated
  - current_value
  - yield_or_loss
  - fees
  - impermanent_loss_if relevant
  - exposure
  - liquidity_status
  - risk_limit_status
  - incidents
  - governance_reference
  - limitations

## 5. Treasury Risks

risks:
  capital_loss:
    description:
      - DeFi_strategy_loses_treasury_assets

  illiquidity:
    description:
      - assets_locked_or_hard_to_withdraw

  smart_contract_exploit:
    description:
      - protocol_or_contract_exploit

  yield_misreporting:
    description:
      - gross_yield_reported_without_fees_losses_or_risk

  hidden_incentive_cost:
    description:
      - liquidity_or_reward_program_cost_not_reported

## 6. Public Documentation Guidance

The public Treasury Alignment page should:

- explain how DeFi affects Treasury;
- list review triggers;
- define reporting fields;
- include risks and no-guarantee language.
