# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: RISK AND DISCLOSURES MODEL

[AXODUS_DEX_RISK_DISCLOSURES]

## 1. Risk Thesis

DEX users face technical, financial, execution, and token risks.

Documentation must educate users and avoid overpromising.

## 2. Risk Categories

risk_categories:
  slippage_risk:
    description:
      - actual_execution_differs_from_quote

  price_impact_risk:
    description:
      - trade_size_moves_pool_price

  MEV_risk:
    description:
      - front_running_sandwich_or_other_extraction

  liquidity_risk:
    description:
      - insufficient_depth_for_trade_or_withdrawal

  impermanent_loss:
    description:
      - LP_position_underperforms_holding_assets

  token_risk:
    description:
      - token_contract_or_project_can_fail_or_be_malicious

  listing_risk:
    description:
      - listed_or_visible_token_may_not_be_verified_or_safe

  smart_contract_risk:
    description:
      - DEX_contract_can_have_bug_or_exploit

  approval_risk:
    description:
      - token_allowance_can_be_misused_if_contract_or_key_compromised

  failed_transaction_risk:
    description:
      - transaction_can_fail_and_still_cost_gas

  bridge_or_multichain_risk:
    description:
      - cross_chain_routes_or_assets_depend_on_bridge_security_if used

  stable_asset_depeg:
    description:
      - stable_tokens_can_lose_peg

## 3. Required Disclosure Themes

disclosure_themes:
  no_guaranteed_execution:
    message:
      - swaps_can_fail_or_execute_differently_than_quote

  no_guaranteed_liquidity:
    message:
      - liquidity_can_change_or_disappear

  no_guaranteed_LP_returns:
    message:
      - LP_fees_and_incentives_are_variable_and_impermanent_loss_can_occur

  listing_not_endorsement:
    message:
      - token_visibility_does_not_mean_Axodus_endorsement

  user_responsibility:
    message:
      - users_should_verify_tokens_routes_and_transaction_details

## 4. Prohibited Claims

prohibited_claims:
  - guaranteed_profit
  - guaranteed_liquidity
  - guaranteed_swap_execution
  - risk_free_swap
  - safe_LP_returns
  - impermanent_loss_free
  - official_token_without_confirmation
  - audited_without_audit
  - MEV_protected_without_verified_mechanism
  - best_execution_guaranteed

## 5. Safe Language

safe_language:
  - estimated_quote
  - minimum_received
  - variable_liquidity
  - subject_to_slippage
  - subject_to_ME V_risk
  - token_listing_not_endorsement
  - LP_fees_are_variable
  - impermanent_loss_possible
  - subject_to_smart_contract_risk
  - active_if_verified
  - planned
  - draft

## 6. Public Documentation Guidance

The public Risk and Disclosures page should:

- list risk categories;
- include required disclosure themes;
- list prohibited and safe language;
- link to Swap, LP, MEV, Listing, Security, and Academy pages.
