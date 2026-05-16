# Trading Alignment

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Treasury

---

## Purpose

Trading alignment ensures internal Axodus trading strategies operate under treasury allocation limits, risk controls, PnL reporting, governance review, and accountability.

## Scope

This document covers Treasury interfaces with the [Trading](../trading/overview.md) nucleus. Trading can support revenue, but it does not guarantee revenue or profit.

## Interfaces

- Capital allocation to approved strategies.
- Strategy review before treasury capital is allocated.
- PnL reporting with realized, unrealized, and net results.
- Drawdown, exposure, leverage, and counterparty limits.
- CEX or DEX exposure tracking.
- Incident response for losses, API issues, exchange issues, or strategy failures.
- Product feedback when internal strategy results inform user-facing products.

## Treasury Trading Action Flow

1. Strategy is proposed by Trading or Trinity.
2. Research, backtest context, and limitations are collected.
3. Trinity prepares analysis when useful.
4. Agent Smith reviews high-risk assumptions when appropriate.
5. Treasury risk review is completed.
6. Governance requirement is assessed.
7. Allocation limit and pause conditions are defined.
8. Approval is recorded.
9. Execution handoff is created.
10. Strategy operates under monitoring.
11. PnL, drawdown, and exposure are reported.
12. Strategy is paused, iterated, approved further, or deprecated based on review.

## Required Controls

Controls should include approved strategy identifier, allocation limit, maximum loss or drawdown limit, exchange or protocol exposure limit, leverage policy, monitoring, reporting frequency, pause conditions, incident response process, and execution receipt for material allocation.

## PnL Reporting

PnL reports should distinguish realized PnL, unrealized PnL where applicable, net PnL after fees, drawdown, fees, slippage, funding, exposure, leverage, period, strategy version, limitations, and a no-future-guarantee note.

## Risk Considerations

Treasury must not outsource financial responsibility to a bot, strategy, or ACS agent. Trading alignment risk includes automation overtrust, unreported losses, overexposure, strategy drift, and misuse of internal results in user-facing marketing.
