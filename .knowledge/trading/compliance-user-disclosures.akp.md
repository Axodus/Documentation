# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: COMPLIANCE AND USER DISCLOSURES MODEL

[AXODUS_TRADING_COMPLIANCE_USER_DISCLOSURES]

## 1. Disclosure Thesis

Trading products require clear user disclosures.

The purpose is not to scare users. The purpose is to make risk, responsibility, and limitations explicit.

Axodus must not describe trading tools as financial advice, guaranteed returns, or risk-free products.

## 2. Core User Disclosure Themes

disclosure_themes:
  no_financial_advice:
    message:
      - Axodus Trading documentation and tools are for information, education, automation support, or product usage and are not personalized financial advice.

  no_profit_guarantee:
    message:
      - No strategy, bot, signal, or trading tool can guarantee profit.

  user_responsibility:
    message:
      - Users are responsible for their own capital, exchange accounts, wallets, API keys, risk settings, leverage, and decisions.

  market_risk:
    message:
      - Markets are volatile and strategies can lose money.

  leverage_risk:
    message:
      - Futures and leveraged products can amplify losses and cause liquidation.

  exchange_risk:
    message:
      - Exchanges can experience outages, API failures, restrictions, or account issues.

  API_key_risk:
    message:
      - API keys must be protected, limited, and revocable. Withdrawal permissions should be disabled.

  backtest_limitation:
    message:
      - Backtests and historical results do not guarantee future performance.

  no_custody_by_default:
    message:
      - User-facing CEX API strategies are intended to run in user-owned accounts unless otherwise documented.

  availability_risk:
    message:
      - Strategies may be paused, deprecated, restricted, or changed due to market, risk, technical, governance, or security reasons.

## 3. Required Disclosures by Product Type

disclosures_by_product:
  signal_only:
    required:
      - no_financial_advice
      - no_profit_guarantee
      - user_decision_responsibility
      - market_risk

  CEX_API_bot:
    required:
      - no_profit_guarantee
      - user_responsibility
      - API_key_risk
      - exchange_risk
      - strategy_failure_risk
      - pause_or_revocation_guidance

  futures_strategy:
    required:
      - leverage_risk
      - liquidation_risk
      - funding_fee_risk
      - high_volatility_risk
      - no_profit_guarantee
      - user_capital_loss_risk

  treasury_strategy:
    required:
      - governance_approval
      - risk_limits
      - reporting
      - treasury_loss_risk
      - no_guaranteed_revenue

  educational_simulator:
    required:
      - simulation_results_not_live_results
      - educational_purpose
      - no_future_guarantee

## 4. User Confirmation Object

user_confirmation_fields:
  - user_id_or_wallet
  - strategy_id
  - disclosure_version
  - confirmed_no_profit_guarantee
  - confirmed_market_risk
  - confirmed_API_key_risk_if_applicable
  - confirmed_leverage_risk_if_applicable
  - confirmed_user_responsibility
  - confirmed_exchange_terms
  - timestamp
  - status

## 5. Prohibited Marketing Claims

prohibited_claims:
  - guaranteed_profit
  - guaranteed_daily_income
  - risk_free_strategy
  - passive_income_without_risk
  - safe_futures_strategy
  - cannot_lose
  - AI_guarantees_profit
  - backtested_means_safe
  - Axodus_protects_all_user_funds
  - official_exchange_partnership_without_confirmation

## 6. Safe Language

safe_language:
  - strategy_tool
  - automation_support
  - risk-managed
  - subject_to_market_risk
  - no_profit_guarantee
  - user_owned_account
  - least_privilege_API
  - educational_or_product_access
  - performance_may_vary
  - past_results_do_not_guarantee_future_results
  - strategy_may_be_paused_or_deprecated

## 7. Review Triggers

review_triggers:
  - public_strategy_page
  - BBA_campaign_about_trading
  - performance_claim
  - user_facing_bot_launch
  - futures_strategy_launch
  - new_exchange_integration
  - API_key_storage_model_change
  - token_gated_strategy_access
  - treasury_strategy_report

## 8. Public Documentation Guidance

The public Compliance and User Disclosures page should:

- state clearly that Trading is not financial advice;
- explain no-profit-guarantee;
- define user responsibility;
- include API, exchange, futures, leverage, and backtest risks;
- provide prohibited and safe language;
- explain required user confirmations;
- avoid legal conclusions unless reviewed.
