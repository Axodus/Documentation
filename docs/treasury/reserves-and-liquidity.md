# Reserves and Liquidity

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Treasury

---

## Purpose

Reserves protect operational continuity. Liquidity allows Treasury to meet obligations, respond to incidents, pay expenses, support approved ecosystem needs, and avoid forced selling during market stress.

## Scope

This document defines reserve types, liquidity classes, runway concepts, liquidity policy fields, liquidity events, and reserve risks. It does not publish sensitive wallet balances.

## Reserve Types

- Operating reserve for near-term operational expenses.
- Stable reserve for lower-volatility runway.
- Emergency reserve for security incidents, market disruptions, or urgent operations.
- Liquidity buffer for expected near-term inflows and outflows.
- Reward reserve for approved reward programs.
- Strategic reserve for longer-term ecosystem purposes.
- Protocol or product reserve for product-specific needs when defined.

## Liquidity Classes

| Class | Meaning |
| --- | --- |
| Highly liquid | Available with low conversion friction |
| Liquid but volatile | Available, but price may move materially |
| Semi-liquid | Available with delay, slippage, or process |
| Locked or vested | Restricted by contract, time, or policy |
| Illiquid | Difficult to convert without delay or loss |
| Strategic | Held for long-term or ecosystem purpose, not daily liquidity |

## Runway

Runway is the estimated time Treasury can support operations given current reserves, liquidity, expenses, expected revenue, volatility, committed reward budgets, and locked or illiquid assets. Runway estimates must include assumptions and must not be presented as guaranteed.

## Liquidity Policy Fields

A liquidity policy should define reserve category, target amount or ratio, asset preference, liquidity class, minimum buffer, allowed rebalance actions, governance review threshold, reporting frequency, emergency use conditions, and review date.

## Liquidity Events

Expected outflows include operational payments, marketplace settlements, reward campaigns, and infrastructure invoices. Unexpected outflows include incident response, emergency patches, legal or compliance review, and security recovery. Expected inflows may include Business revenue, Marketplace fees, Academy revenue, future token-related fees if implemented, or realized trading revenue.

## Risk Considerations

Reserve risk includes insufficient runway, asset volatility, illiquidity, over-allocation to strategies, hidden liabilities, and forced selling.
