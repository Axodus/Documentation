# Tokenomics Alignment

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Treasury

---

## Purpose

Tokenomics creates treasury implications. Rewards, fees, locked balances, marketplace credits, burn mechanics, liquidity allocations, and `$Neurons` utility may create inflows, outflows, liabilities, obligations, or reporting requirements.

## Scope

This document defines how Treasury reviews tokenomics flows and coordinates with the [Tokenomics](../tokenomics/overview.md), [Academy](../academy/overview.md), and [Marketplace](../marketplace/overview.md) nuclei.

## Interfaces

- Treasury fee if implemented.
- Reward budgets for Academy, Marketplace, governance, contributors, or campaigns.
- Locked rewards that may create internal credit, future claim, or other accounting implications.
- Marketplace credits that may require settlement rules.
- Liquidity support if governance and policy approve.
- Burn mechanics if contract-supported.
- Token payment revenue if marketplace or business flows support `$Neurons`.
- Partner reward campaigns that affect treasury budget or reporting.

## Treasury Questions

Treasury review should ask whether rewards are treasury-funded, preallocated, or minted; whether locked rewards create liabilities; whether locked rewards can be spent in Marketplace; who settles value when locked rewards are spent; whether fees are collected to Treasury; whether burns and liquidity fees are reported; whether reward programs are budget-limited; and what governance review is required for tokenomics changes.

## Reward Budget Review

Reward budget review is required for new Academy reward programs, high-value Learn-to-Win campaigns, paid course reward rules, partner campaigns, locked reward utility expansion, and marketplace credit conversion.

Review fields should include program, source nucleus, expected participants, reward amount or formula, maximum budget, locked or unlocked status, treasury cost, reporting requirement, abuse controls, and governance status.

## Locked Reward Liability

Locked rewards may be treated as internal utility, future claim, non-transferable points, or treasury-settled credit depending on policy, accounting, legal review, and contract behavior. Axodus must not publish a final liability model before those dependencies are validated.

## Reporting Fields

Treasury reporting may include reward budget allocated, rewards issued, locked rewards issued, rewards claimed, rewards spent, rewards revoked, token fees collected, treasury fee amount if any, burn amount if any, liquidity allocation if any, marketplace credit settlement, open commitments, governance references, and risk notes.

## Risk Considerations

Risk includes hidden liabilities, reward budget overrun, marketplace value leakage, contract-policy mismatch, fee claim error, and governance capture through reward distribution.
