# Payments and Settlement

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Marketplace / Treasury

---


## Settlement Preconditions

A settlement flow requires an identified payer and payee, accepted asset,
amount, fees, custody model, authorization, signing route, confirmation source,
refund or reversal policy, reconciliation owner, and failure handling. The
Marketplace may prepare an order or settlement instruction but must not move
assets independently.

Current documentation is conceptual. It does not confirm enabled checkout,
wallet signing, token payment, credit redemption, payout, escrow, refund, or
Treasury routing. Missing authorization, custody, compliance, or reconciliation
evidence blocks settlement and routes the dependency to EPIC-10.


## Purpose

Marketplace payments and settlement must be transparent, auditable, and aligned with treasury policy.

## Payment Methods

Possible payment methods include direct crypto payment, $Neurons payment if approved and implemented, locked credit payment if policy and settlement models exist, fiat or card if a gateway is implemented, DEX swap checkout if implemented, and hybrid payments if supported.

## Settlement Models

Settlement may be immediate, delayed, milestone-based, treasury-routed, credit-based, or escrow-like only if architecture actually implements escrow conditions. Do not claim escrow unless supported by contracts or process records.

## Payment and Settlement Records

Payment records should include payment ID, order ID, buyer, seller, method, asset, gross amount, discounts, credits, fees, net amount, transaction or gateway reference, status, and timestamp.

Settlement records should include settlement ID, order ID, seller, gross amount, marketplace fee, treasury allocation, seller net, royalty or commission, payout asset, method, status, release condition, transaction reference, and report reference.

## Statuses and Risks

Payment statuses may include Pending, Confirmed, Failed, Refunded, Partially Refunded, Disputed, and Cancelled. Risks include asset volatility, DEX slippage, failed transactions, unclear escrow assumptions, seller payout delay, refund complexity, and locked credit liability.

## Related Pages

- [Disputes, Refunds and Support](disputes-refunds-and-support.md)
- [Treasury Alignment](treasury-alignment.md)
