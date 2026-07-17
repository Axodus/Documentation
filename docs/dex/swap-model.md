# Swap Model

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX

---

## Purpose

A swap lets a user or system exchange one token for another using available liquidity. Swap execution is not guaranteed.

## Swap Concepts

Key concepts include input token, output token, estimated quote, minimum received, slippage tolerance, price impact, route, deadline, and token approval.

## Swap Flow

1. User selects input and output tokens.
2. System checks token listing status and warnings.
3. User enters amount.
4. Quote and route are generated.
5. Price impact and slippage are displayed.
6. User sets or accepts slippage tolerance.
7. User approves token if needed.
8. User confirms transaction.
9. Transaction executes, fails, expires, or is cancelled.
10. Receipt or history is updated.

## Swap Record

A swap record should include user reference, chain, input token, output token, input amount, quoted output, minimum received, actual output if executed, route, slippage tolerance, price impact, fees, status, transaction hash where applicable, and warnings.

## Statuses

Use `Quote`, `Pending Approval`, `Pending Transaction`, `Executed`, `Failed`, `Expired`, or `Cancelled`.

## Warnings

Warnings should cover high price impact, high slippage, low liquidity, unverified tokens, MEV risk, and approval risk.

## Related Pages

- [Slippage and Price Impact](slippage-and-price-impact.md)
- [MEV and Execution Risk](mev-and-execution-risk.md)
- [Listing Policy](listing-policy.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)

## Swap Preconditions

A swap requires verified asset identities, an available route, current quote,
minimum received, deadline, fee disclosure, wallet authorization, transaction
simulation or checks, and a receipt. Failure at any precondition stops before
signing. This model does not establish deployed contracts, enabled wallets,
liquidity, settlement, or production swaps.
