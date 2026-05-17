# Marketplace Integration

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX / Marketplace

---

## Purpose

DEX may support Marketplace through token swap checkout, asset conversion, accepted payment flexibility, and settlement routing.

## Integration Models

Possible models include swap before checkout, embedded swap checkout, seller settlement conversion, treasury settlement, and discount or credit conversion if policy supports it.

## Design Questions

Design must answer which assets are accepted, whether swap is required before purchase, who bears slippage risk, who pays fees and gas, what happens if swap succeeds but purchase fails, what happens if purchase succeeds but settlement fails, how refunds are handled, and what the seller receives.

## Checkout Record

Checkout records should include buyer, listing, payment asset, settlement asset, swap requirement, route, quoted amount, actual amount, slippage, fees, seller amount, refund status, transaction references, and status.

## Risk Considerations

Risks include settlement failure, refund complexity, slippage disputes, fee confusion, and mismatch between internal credits or rewards and DEX settlement assumptions.

## Related Pages

- [Marketplace Overview](../marketplace/overview.md)
- [Treasury Alignment](treasury-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
