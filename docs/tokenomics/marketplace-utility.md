# Marketplace Utility

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Tokenomics / Marketplace

---

## Purpose

Marketplace is a major potential utility surface for `$Neurons`. It may support course commerce, service payments, discounts, internal credits, locked reward utility, and creator or tutor revenue.

## Scope

Marketplace utility is complex because it requires settlement logic. Public documentation must not claim final payment or locked reward behavior until pricing, accepted assets, fees, settlement, refunds, royalties, and contract or accounting behavior are defined.

## Utility Models

Possible models include direct payment, discounts, internal credits, restricted catalog spending, access unlocks, subscription or service credits, and loyalty or progression mechanics.

Each model must be marked as draft, planned, active, or needs validation.

## Product Types

Tokenomics may apply to Academy courses, learning paths, tutor services, Business services, BBA services, product tools, digital templates, or toolkits.

## Settlement Questions

Open questions include accepted assets, whether `$Neurons` can pay full price, whether locked rewards can pay full price or only discounts, whether locked rewards can be used for third-party tutor courses, what sellers receive, whether Treasury covers internal credits, whether rewards are burned or transferred, how royalties and fees work, whether refunds are allowed, and whether settlement is on-chain, off-chain, or hybrid.

## Payment Object

A Marketplace payment record should include payment ID, listing ID, buyer, seller or tutor, asset, amount, locked reward amount if any, discount amount if any, fees, royalties, commission, treasury allocation if any, settlement status, refund status, contract or accounting reference, and timestamp.

## Locked Rewards in Marketplace

Possible locked reward models include discount-only use, platform credit, restricted purchase, seller settlement conversion, and burn-on-spend. Treat all locked reward settlement models as planned or needs review unless implementation is confirmed.

## Fees and Governance

Fee components may include platform fees, operational fees, royalties, commissions, treasury allocations, liquidity fees, or burn fees if verified.

Governance review is required for material changes such as accepting `$Neurons` as payment, allowing locked reward spend, defining seller settlement, changing Marketplace fees, using Treasury to cover internal credits, partner reward campaigns, or refund policy for token payments.

## Risks

Risks include settlement confusion, locked reward extraction, tutor self-dealing, refund loops, treasury leakage, and accounting gaps.

## Related Pages

- [Marketplace Overview](../marketplace/overview.md)
- [Locked Rewards](locked-rewards.md)
- [Treasury Alignment](treasury-alignment.md)
- [Risk and Compliance](risk-and-compliance.md)
