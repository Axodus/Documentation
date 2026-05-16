# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: TRADING
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Trading
  role: internal_financial_operations_user_facing_strategy_and_risk_managed_trading_product_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - trading-core.akp.md
  - trading-architecture.akp.md
  - internal-trading.akp.md
  - user-facing-strategies.akp.md
  - strategy-lifecycle.akp.md
  - scalper-futures.akp.md
  - access-model.akp.md
  - cex-api-security.akp.md
  - execution-and-infrastructure.akp.md
  - risk-management.akp.md
  - governance-alignment.akp.md
  - treasury-alignment.akp.md
  - acs-trinity-integration.akp.md
  - reporting-accountability.akp.md
  - compliance-user-disclosures.akp.md
  - trading-page-directives.akp.md

semantic_domains:
  trading_identity:
    source_file: trading-core.akp.md
    concepts:
      - internal_financial_operations
      - user_facing_strategies
      - trading_product_layer
      - no_profit_guarantee
      - risk_managed_strategy_access

  architecture:
    source_file: trading-architecture.akp.md
    concepts:
      - strategy_layer
      - execution_layer
      - risk_layer
      - access_layer
      - API_security_layer
      - reporting_layer
      - governance_layer

  internal_trading:
    source_file: internal-trading.akp.md
    concepts:
      - treasury_strategy_support
      - ecosystem_revenue
      - internal_bots
      - risk_limits
      - governance_reporting

  user_facing:
    source_file: user-facing-strategies.akp.md
    concepts:
      - user_account_execution
      - own_CEX_account
      - no_custody
      - strategy_subscription
      - strategy_access

  strategy_lifecycle:
    source_file: strategy-lifecycle.akp.md
    concepts:
      - research
      - backtest
      - paper_trade
      - limited_pilot
      - production
      - monitoring
      - deprecation

  scalper_futures:
    source_file: scalper-futures.akp.md
    concepts:
      - entry_strategy
      - CEX_API
      - futures_risk
      - leverage
      - promotional_access
      - token_gate

  access_model:
    source_file: access-model.akp.md
    concepts:
      - $Neurons_balance
      - subscription
      - Academy_certification
      - milestone
      - governance_policy
      - product_tiers

  cex_api_security:
    source_file: cex-api-security.akp.md
    concepts:
      - API_key
      - no_withdrawal_permission
      - least_privilege
      - encryption
      - revocation
      - exchange_risk

  execution_infrastructure:
    source_file: execution-and-infrastructure.akp.md
    concepts:
      - Hummingbot
      - bots
      - connectors
      - signal_engine
      - order_management
      - monitoring
      - kill_switch

  risk:
    source_file: risk-management.akp.md
    concepts:
      - market_risk
      - leverage_risk
      - liquidation_risk
      - slippage
      - drawdown
      - exchange_risk
      - strategy_risk

  governance:
    source_file: governance-alignment.akp.md
    concepts:
      - strategy_access_policy
      - treasury_strategy_approval
      - risk_limits
      - user_disclosure
      - governance_review

  treasury:
    source_file: treasury-alignment.akp.md
    concepts:
      - treasury_trading
      - allocation
      - PnL
      - exposure
      - reporting
      - revenue_generation

  ACS_Trinity:
    source_file: acs-trinity-integration.akp.md
    concepts:
      - Trinity
      - ACS_review
      - strategy_analysis
      - PnL_summary
      - risk_monitoring
      - adversarial_review

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - performance_report
      - PnL_report
      - risk_report
      - strategy_status
      - incident_report
      - accountability

  compliance_disclosures:
    source_file: compliance-user-disclosures.akp.md
    concepts:
      - no_financial_advice
      - no_profit_guarantee
      - user_responsibility
      - exchange_terms
      - API_permissions
      - leverage_disclosure

public_documentation_targets:
  overview:
    target: docs/trading/overview.md
    source_files:
      - trading-core.akp.md
      - trading-architecture.akp.md

  architecture:
    target: docs/trading/architecture.md
    source_files:
      - trading-architecture.akp.md
      - execution-and-infrastructure.akp.md

  internal_trading:
    target: docs/trading/internal-trading.md
    source_files:
      - internal-trading.akp.md
      - treasury-alignment.akp.md
      - risk-management.akp.md

  user_facing_strategies:
    target: docs/trading/user-facing-strategies.md
    source_files:
      - user-facing-strategies.akp.md
      - access-model.akp.md
      - cex-api-security.akp.md

  strategy_lifecycle:
    target: docs/trading/strategy-lifecycle.md
    source_files:
      - strategy-lifecycle.akp.md
      - reporting-accountability.akp.md

  scalper_futures:
    target: docs/trading/scalper-futures.md
    source_files:
      - scalper-futures.akp.md
      - risk-management.akp.md
      - compliance-user-disclosures.akp.md

  access_model:
    target: docs/trading/access-model.md
    source_files:
      - access-model.akp.md
      - tokenomics_reference

  cex_api_security:
    target: docs/trading/cex-api-security.md
    source_files:
      - cex-api-security.akp.md
      - compliance-user-disclosures.akp.md

  risk_management:
    target: docs/trading/risk-management.md
    source_files:
      - risk-management.akp.md

  governance_alignment:
    target: docs/trading/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  treasury_alignment:
    target: docs/trading/treasury-alignment.md
    source_files:
      - treasury-alignment.akp.md
      - reporting-accountability.akp.md

  acs_trinity:
    target: docs/trading/acs-trinity-integration.md
    source_files:
      - acs-trinity-integration.akp.md

  reporting:
    target: docs/trading/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  disclosures:
    target: docs/trading/compliance-and-user-disclosures.md
    source_files:
      - compliance-user-disclosures.akp.md

global_invariants:
  - no_profit_guarantee
  - no_risk_free_language
  - backtests_are_not_future_guarantees
  - user_facing_strategies_run_in_user_owned_accounts_unless_otherwise_defined
  - users_retain_capital_and_exchange_responsibility
  - API_keys_must_use_least_privilege
  - withdrawal_permissions_should_be_disabled
  - strategy_access_requires_clear_policy
  - futures_and_leverage_require_strong_disclosure
  - treasury_trading_requires_governance_risk_limits_and_reporting
  - Trinity_supports_but_does_not_replace_authority
  - all_public_docs_must_be_English
