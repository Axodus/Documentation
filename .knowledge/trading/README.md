# AXODUS TRADING KNOWLEDGE PACK

Domain: Trading  
Layer: Semantic Memory  
Audience: Agent Coder, ACS agents, Trinity, documentation agents, governance reviewers, treasury reviewers, product planners, security reviewers  
Status: Draft  
Version: 0.1.0  

## Purpose

This folder contains the deep semantic knowledge base for the Trading nucleus of Axodus.

These files are not public-facing documentation pages. They are agent-oriented knowledge packs designed to help coding agents, ACS agents, Trinity, documentation agents, governance reviewers, treasury reviewers, security reviewers, and future MCP systems generate accurate and consistent public documentation and implementation plans.

The Trading nucleus is both:

- an internal financial operations and revenue generation layer for the Axodus ecosystem;
- a product layer that can expose selected strategies, tools, education, signals, automation, and dashboards to users under strict risk, security, and governance boundaries.

## Trading Thesis

Axodus Trading is not a profit promise.

Axodus Trading is a risk-managed trading intelligence, strategy execution support, and product access nucleus.

It may support:

- treasury strategy review;
- internal revenue generation;
- bot strategy research;
- user-facing strategy access;
- CEX API-based user automation;
- risk dashboards;
- performance reporting;
- strategy subscriptions;
- strategy milestone access;
- education-driven onboarding through Academy;
- access rules based on `$Neurons`, certification, subscription, or governance-defined policy.

Trading must always be documented with risk language.

No strategy can guarantee profit. All trading activity is exposed to market risk, exchange risk, execution risk, liquidity risk, strategy risk, API key risk, infrastructure risk, and user decision risk.

## Strategic Product Direction

A key product direction is to allow selected users to access low-cost or free entry strategies when they meet eligibility conditions, such as holding a minimum amount of `$Neurons`, completing Academy risk education, or satisfying product policy.

Example concept:

- a user-facing Scalper Futures strategy;
- the user connects their own Binance, KuCoin, or other CEX account through API keys;
- the strategy runs in the user's own account;
- Axodus does not custody the user's funds;
- withdrawal permissions should be disabled;
- the user retains responsibility for capital, exchange account, risk, leverage, and API permissions;
- the strategy may be offered free, subscription-based, milestone-based, token-gated, or temporarily promotional according to policy.

This model is intended as a product activation funnel, not a guaranteed income system.

## Required Public Trading Pages

The public documentation generated from this knowledge pack should include at least:

- `docs/trading/overview.md`
- `docs/trading/architecture.md`
- `docs/trading/internal-trading.md`
- `docs/trading/user-facing-strategies.md`
- `docs/trading/strategy-lifecycle.md`
- `docs/trading/scalper-futures.md`
- `docs/trading/access-model.md`
- `docs/trading/cex-api-security.md`
- `docs/trading/risk-management.md`
- `docs/trading/governance-alignment.md`
- `docs/trading/treasury-alignment.md`
- `docs/trading/acs-trinity-integration.md`
- `docs/trading/reporting-and-accountability.md`
- `docs/trading/compliance-and-user-disclosures.md`

## Non-Negotiable Trading Invariants

- Trading documentation must never promise profit.
- Trading documentation must never imply risk-free strategies.
- Axodus Trading must distinguish internal ecosystem trading from user-facing strategy products.
- User-facing strategies run under user-owned exchange accounts or wallets unless explicitly documented otherwise.
- Users retain responsibility for their own capital, exchange accounts, API keys, leverage, and risk exposure.
- Exchange API keys must use least privilege; withdrawal permissions should be disabled.
- Strategy access must be governed by clear access rules.
- Strategy performance must be reported with context, limitations, and risk.
- Backtests are not guarantees.
- Treasury trading requires governance, risk limits, and reporting.
- Material trading policies require governance review.
- ACS/Trinity supports analysis, monitoring, and reporting but does not replace human or governance accountability.
- Public Trading documentation must be written in English.
