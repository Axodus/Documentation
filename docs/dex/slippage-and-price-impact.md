# Slippage and Price Impact

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX

---

## Purpose

Slippage and price impact are core user risks in decentralized swaps. Final execution can differ from the quote.

## Definitions

Slippage is the difference between expected trade result and actual execution due to price or liquidity changes. Price impact is the effect of trade size on pool or route price. Minimum received is the lowest output accepted by the user based on slippage tolerance. Quote expiration is the point where a quote is no longer reliable.

## User Guidance

Users should review price impact, use care with high slippage settings, understand that low liquidity increases price impact, verify token listing status, avoid large swaps in small pools without understanding risk, confirm minimum received, and understand that failed transactions may still cost gas.

## Warning Levels

Low means normal range. Medium means review execution details. High means the trade may receive significantly less than expected. Critical means the trade may be unsafe due to extreme price impact or low liquidity.

## Risk Considerations

High slippage can result in worse execution. Low slippage can cause transaction failure. Quotes are estimates, not guarantees.
