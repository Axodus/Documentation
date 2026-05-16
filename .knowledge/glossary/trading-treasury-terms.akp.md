# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: TRADING AND TREASURY TERMS

[TRADING_TREASURY_TERMS]

terms:

  Trading:
    status: Draft
    domain: Trading
    short_definition: "Trading is the Axodus nucleus for internal financial operations and user-facing strategy products."
    long_definition:
      - Trading may support treasury strategies, market analysis, user-facing bots, strategy access, subscriptions, and risk-managed automation.
      - Trading must never be documented as guaranteed profit.
    aliases:
      - Axodus Trading
      - Trading nucleus
    avoid:
      - guaranteed_profit
      - money_machine
    related_terms:
      - Trading_Strategy
      - User_Facing_Strategy
      - Trinity

  Trading_Strategy:
    status: Draft
    domain: Trading
    short_definition: "A Trading Strategy is a defined method or automation logic for market participation under specified risk rules."
    long_definition:
      - Strategies may perform poorly or fail under changing market conditions.
      - Documentation must include risk and no-profit-guarantee language.
    related_terms:
      - Strategy_Access
      - Risk_Management
      - API_Key_Security

  User_Facing_Strategy:
    status: Draft
    domain: Trading
    short_definition: "A User-Facing Strategy is a trading tool or strategy made available for users to run on their own accounts or wallets."
    long_definition:
      - Users retain responsibility for their own capital, exchange accounts, API keys, permissions, and risk exposure.
    related_terms:
      - Strategy_Access
      - API_Key_Security
      - Trading_Risk

  Strategy_Access:
    status: Draft
    domain: Trading
    short_definition: "Strategy Access defines the conditions under which a user may access a trading strategy or automation tool."
    long_definition:
      - Access may depend on `$Neurons` balance, subscription, milestone, certification, governance-defined rules, or product policy.
    related_terms:
      - Access_Rule
      - $Neurons
      - User_Facing_Strategy

  Scalper_Futures:
    status: Conceptual
    domain: Trading
    short_definition: "Scalper Futures is an example of a possible low-cost or accessible user-facing futures strategy."
    long_definition:
      - It may be used as a marketing entry strategy where eligible users run the tool on their own CEX account.
      - It must not be described as guaranteed profit.
    related_terms:
      - User_Facing_Strategy
      - API_Key_Security
      - Trading_Risk

  API_Key_Security:
    status: Active
    domain: Security
    short_definition: "API Key Security is the practice of protecting exchange or service API keys through least privilege, encryption, revocation, and permission limits."
    long_definition:
      - Trading users should disable withdrawal permissions and understand exchange/API risk.
    related_terms:
      - Trading
      - Least_Privilege
      - Security_Review

  Trading_Risk:
    status: Active
    domain: Trading
    short_definition: "Trading Risk is the possibility of financial loss, liquidation, strategy failure, exchange issues, or operational failure in trading activity."
    long_definition:
      - Trading risk must be clearly disclosed in user-facing and internal trading documentation.
    related_terms:
      - Market_Risk
      - Exchange_Risk
      - Strategy_Risk

  Market_Risk:
    status: Active
    domain: Trading
    short_definition: "Market Risk is the risk of loss due to price volatility, liquidity changes, trend reversal, slippage, or market regime shifts."
    related_terms:
      - Trading_Risk
      - Risk_Management

  Exchange_Risk:
    status: Active
    domain: Trading
    short_definition: "Exchange Risk is the risk created by centralized or decentralized exchange failures, downtime, restrictions, API errors, or counterparty problems."
    related_terms:
      - API_Key_Security
      - Trading_Risk

  Strategy_Risk:
    status: Active
    domain: Trading
    short_definition: "Strategy Risk is the risk that a trading strategy fails, overfits, underperforms, or behaves incorrectly under changing market conditions."
    related_terms:
      - Trading_Strategy
      - Risk_Management

  Treasury:
    status: Active
    domain: Treasury
    short_definition: "Treasury is the Axodus capital allocation, liquidity, exposure, reporting, and financial sustainability layer."
    long_definition:
      - Treasury must be supervised through governance, risk limits, transparency, and accountability.
    aliases:
      - Axodus Treasury
    avoid:
      - opaque_treasury
      - guaranteed_treasury_returns
    related_terms:
      - Treasury_Policy
      - Risk_Limits
      - Accountability

  Treasury_Policy:
    status: Draft
    domain: Treasury
    short_definition: "Treasury Policy defines objectives, approved strategy categories, risk appetite, allocation rules, reporting expectations, and governance approvals."
    related_terms:
      - Treasury
      - Governance
      - Risk_Management

  Capital_Allocation:
    status: Draft
    domain: Treasury
    short_definition: "Capital Allocation is the process of assigning treasury resources to strategies, operations, liquidity, reserves, or ecosystem needs."
    long_definition:
      - Material capital allocation requires governance visibility and reporting.
    related_terms:
      - Treasury
      - Risk_Limits

  Exposure:
    status: Active
    domain: Treasury
    short_definition: "Exposure is the amount or proportion of treasury or user capital subject to a specific asset, strategy, protocol, counterparty, or risk."
    related_terms:
      - Treasury
      - Risk_Management
      - Reporting

  Risk_Limits:
    status: Draft
    domain: Treasury
    short_definition: "Risk Limits are defined boundaries controlling how much exposure, leverage, concentration, or operational risk is acceptable."
    related_terms:
      - Treasury_Policy
      - Risk_Management
      - Trading_Risk

  PnL:
    status: Active
    domain: Trading
    short_definition: "P&L means profit and loss, a measure of financial performance over a defined period."
    long_definition:
      - P&L must be reported with context, limitations, and risk, not as a guarantee of future results.
    aliases:
      - Profit and Loss
    avoid:
      - future_profit_guarantee
    related_terms:
      - Trading
      - Treasury
      - Reporting

  Risk_Management:
    status: Active
    domain: Risk
    short_definition: "Risk Management is the process of identifying, assessing, limiting, monitoring, and reporting risks across Axodus."
    related_terms:
      - Treasury
      - Trading_Risk
      - Governance
      - Security_Review

  Liquidity:
    status: Active
    domain: DeFi
    short_definition: "Liquidity refers to the availability of assets or market depth needed to enter, exit, trade, or settle positions."
    related_terms:
      - Treasury
      - DeFi
      - Market_Risk

  Derivatives:
    status: Draft
    domain: DeFi
    short_definition: "Derivatives are financial instruments whose value depends on an underlying asset, index, or condition."
    long_definition:
      - In Axodus documentation, derivatives must be discussed with risk and governance caution.
    related_terms:
      - Treasury
      - Risk_Management
      - DeFi

  Debentures:
    status: Draft
    domain: DeFi
    short_definition: "Debentures are debt-like instruments that may be considered in financial product models, subject to governance, legal, and risk review."
    long_definition:
      - Do not describe debenture products as active or legally finalized unless confirmed.
    related_terms:
      - Treasury
      - DaaS
      - Risk_Management
