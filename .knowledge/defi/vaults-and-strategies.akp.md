# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: VAULTS AND STRATEGIES MODEL

[AXODUS_DEFI_VAULTS_STRATEGIES]

## 1. Vault Thesis

A vault-like product can simplify DeFi access by packaging deposits, allocation rules, strategies, and reporting.

Vaults are high-responsibility systems because users or treasury may rely on them to manage assets.

Vault documentation must be precise about custody, deposits, withdrawals, fees, risks, and strategy behavior.

## 2. Vault Definition

vault:
  definition:
    - structured_container_that_holds_or_accounts_for_assets_and_routes_them_to_defined_strategy_or_allocation_logic_if implemented

vault_is_not:
  - guaranteed_yield_box
  - risk_free_savings_account
  - regulated_fund_unless_legally_established
  - automatic_profit_machine

## 3. Strategy Definition

strategy:
  definition:
    - defined_logic_or_policy_for_allocating_assets_to_protocols_positions_or_actions_under_risk_limits

strategy_is_not:
  - guaranteed_return_method
  - unrestricted_deployment_of_assets

## 4. Vault Types

vault_types:
  treasury_vault:
    description:
      - vault_or_accounting_structure_for_treasury_assets_under_governance_policy

  user_vault:
    description:
      - user_facing_deposit_product_if implemented

  strategy_vault:
    description:
      - vault_tied_to_specific_DeFi_strategy

  index_or_basket_vault:
    description:
      - ETF_DaaS_or_basket_like_structure_if designed

  reward_vault:
    description:
      - vault_or_pool_for_reward_budget_if implemented

## 5. Vault Object

vault_fields:
  - vault_id
  - name
  - status
  - user_facing_or_treasury
  - accepted_assets
  - strategy_id
  - deposit_rules
  - withdrawal_rules
  - fee_rules
  - lockup_rules_if any
  - share_accounting_model_if any
  - risk_level
  - governance_status
  - security_review_status
  - reporting_frequency
  - disclosures

## 6. Strategy Object

strategy_fields:
  - strategy_id
  - name
  - objective
  - category
  - protocols
  - assets
  - allocation_rules
  - rebalancing_rules
  - risk_limits
  - expected_metrics
  - exit_conditions
  - governance_status
  - treasury_impact
  - security_review_status
  - status

## 7. Strategy Lifecycle

strategy_lifecycle:
  - concept
  - research
  - simulation_or_backtest_if applicable
  - risk_review
  - security_review_if contract_dependent
  - treasury_or_user_impact_review
  - governance_approval_if material
  - limited_pilot
  - active
  - monitoring
  - reporting
  - pause_or_deprecation

## 8. Vault Risks

risks:
  custody_risk:
    description:
      - who_controls_assets_must_be_clear

  smart_contract_risk:
    description:
      - vault_contract_can_have_bugs

  strategy_risk:
    description:
      - strategy_can_underperform_or_fail

  withdrawal_risk:
    description:
      - withdrawals_may_be_delayed_limited_or_impacted_by_liquidity

  share_accounting_risk:
    description:
      - accounting_or_share_price_errors_can_harm_users

  fee_risk:
    description:
      - fees_reduce_returns_or_affect_withdrawal_value

  governance_risk:
    description:
      - strategy_or_parameters_changed_without_clear_process

## 9. Public Documentation Guidance

The public Vaults and Strategies page should:

- define vaults and strategies;
- list types and data fields;
- describe lifecycle;
- explain risks and disclosures;
- avoid promising yield or safety.
