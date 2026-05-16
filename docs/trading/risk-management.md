# Risk Management

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Trading

---

## Purpose

Trading risk cannot be eliminated. Axodus Trading must manage, disclose, monitor, and report risk across internal trading, treasury strategies, user-facing strategies, access policy, API security, exchange integrations, and documentation.

## Risk Categories

Risk categories include market risk, leverage risk, liquidation risk, liquidity risk, slippage risk, fee risk, strategy risk, overfitting risk, exchange risk, API key risk, infrastructure risk, operational risk, user behavior risk, governance risk, and reputation risk.

## Controls

Controls may include market regime review, pause conditions, leverage caps, liquidation warnings, futures education, position limits, liquidity filters, slippage limits, lifecycle gates, backtest limitations, paper trading, limited pilots, exchange health monitoring, least-privilege API keys, withdrawal-disabled guidance, key rotation, monitoring, alerts, allocation limits, governance review, reporting, education, confirmations, and default limits.

## Risk Limits

Risk limits may include position size, leverage, daily loss, max drawdown, exposure, trade frequency, slippage, and API error limits.

## Risk Profile Object

A risk profile should define strategy ID, risk level, market type, leverage policy, maximum leverage, position size rule, max drawdown, daily loss limit, exposure limit, slippage limit, kill switch conditions, required confirmations, monitoring requirements, review frequency, and governance status.

## Risk Levels

Low risk may include educational simulators or signal-only tools. Medium risk may include limited spot strategies. High risk includes futures strategies, leveraged strategies, and user-facing bots. Critical risk includes treasury leveraged strategies, large capital allocations, or autonomous execution with high exposure.

## Futures, Leverage, and Exchange Risk

Futures and leverage can amplify losses and create liquidation risk. Exchanges can suffer outages, API failures, restrictions, counterparty issues, and changing terms. Users remain responsible for their accounts and capital.

## Related Pages

- [CEX API Security](cex-api-security.md)
- [User-Facing Strategies](user-facing-strategies.md)
- [Treasury Alignment](treasury-alignment.md)
- [Compliance and User Disclosures](compliance-and-user-disclosures.md)
