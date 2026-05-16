# Treasury Architecture

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Treasury

---

## Purpose

Treasury architecture separates assets, custody, revenue, allocation, reserves, strategy, risk, execution, governance, reporting, and ACS support so financial activity remains traceable and reviewable.

## Scope

This document describes the high-level Treasury model and integration surfaces. It does not publish sensitive wallet procedures, private keys, signer operations, or final production thresholds.

## Architecture Layers

- Asset registry layer: records asset type, location, status, valuation method, liquidity level, and risk level.
- Wallet and custody layer: tracks wallets, multisigs, exchange accounts, custody model, purpose, status, and safe public references.
- Revenue layer: classifies inflows, fees, refunds, chargebacks, and reporting periods.
- Allocation layer: defines categories, limits, budget usage, approval status, and review frequency.
- Reserves layer: tracks operating, stable, emergency, liquidity, reward, and strategic reserves.
- Strategy layer: reviews trading, DeFi, DaaS, liquidity, staking, market-making, hedging, derivatives, and related strategy exposure.
- Risk layer: defines market, liquidity, counterparty, smart contract, concentration, drawdown, and operational controls.
- Execution layer: records approved transfers, payments, contract interactions, allocations, and execution receipts.
- Governance layer: provides approval thresholds, proposals, Boardroom or high-risk review, emergency rules, and accountability.
- Reporting layer: produces treasury snapshots, financial reports, PnL reports, exposure reports, and incident records.
- ACS and Trinity layer: supports analysis, risk summaries, report drafting, anomaly flags, and governance briefs.

## Core Data Objects

Treasury records should use structured objects where practical:

| Object | Purpose |
| --- | --- |
| TreasuryAsset | Asset, amount, location, custody type, liquidity, valuation method, status, and risk |
| TreasuryWallet | Public-safe wallet or account reference, chain, purpose, custody model, status, and review status |
| TreasuryAction | Requested transfer, payment, allocation, trade, or contract interaction |
| Allocation | Category, amount, purpose, risk level, approval, review frequency, and reporting requirement |
| RevenueFlow | Source, asset, gross amount, fees, net amount, destination, settlement status, and period |
| RiskLimit | Limit type, threshold concept, owner, governance status, and breach response |
| TreasuryReport | Assets, inflows, outflows, allocations, PnL, exposure, liabilities, and governance references |

## Integration Surfaces

Treasury integrates with Governance for authority and execution receipts, Trading for internal strategy allocation and PnL, Tokenomics for fees and rewards, Marketplace for settlements, Academy for course revenue and reward budgets, Business for service revenue and expenses, ACS for analysis, and Security for custody controls.

## Architecture Invariants

- Asset records must not expose secrets.
- Material actions require authority records.
- Allocations must reference policy.
- Material exposure requires risk limits.
- Execution receipts are required for material actions.
- Reports must contextualize figures and limitations.

## Current Status

The architecture is a draft operating model. Production data schemas and integrations need implementation validation.
