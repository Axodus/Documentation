# Locked Rewards

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Tokenomics

---

## Purpose

Locked rewards are restricted reward balances that may support internal utility without necessarily becoming immediately transferable market assets.

## Scope

Locked rewards are central to making Academy incentives sustainable, but they depend on policy, contract enforcement, accounting rules, Marketplace settlement, and governance decisions.

## Definition

Locked rewards are reward balances restricted by contract or accounting from free transfer, with defined internal utility or unlock rules if any.

Locked rewards are not automatically liquid tokens, guaranteed income, guaranteed unlocks, automatic voting power, freely tradable balances, or final features without contract validation.

## Statuses

Locked reward statuses may include `Proposed`, `Issued Locked`, `Internal Use Only`, `Marketplace Eligible`, `Access Eligible`, `Governance Eligible`, `Unlock Pending`, `Unlocked`, `Spent`, `Revoked`, or `Expired`.

## Same-Token Locked Design

Axodus may prefer using `$Neurons` as the core token with locked and unlocked states rather than creating unnecessary token fragmentation. This is a conceptual direction unless contracts and platform accounting validate it.

Possible implementation patterns include locked balance contracts, internal credit accounting, dual-balance token models, voucher or credit models, and soulbound credit or attestations.

## Unlock Conditions

Possible unlock conditions may include paid course completion, higher Proof of Knowledge, time-based vesting, Marketplace spend conversion, governance-approved milestones, identity or anti-sybil checks if policy requires, or no unlock for internal-use-only rewards.

No unlock condition should be presented as active until policy and contracts confirm it.

## Internal Utility

Locked rewards may support Marketplace, Academy, product access, or governance utility only if policy and contracts allow it. Governance use is especially sensitive because free reward farming can become governance capture.

## Marketplace and Governance Questions

Open questions include who receives value when locked rewards are spent, whether tutors receive unlocked `$Neurons`, whether rewards are burned or transferred, whether refunds are allowed, whether locked rewards can vote, whether caps are needed, and whether Proof of Knowledge is required.

## Risks

Risks include unenforced locks, user confusion, reward farming, Marketplace abuse, governance capture, and contract complexity.

## Related Pages

- [Reward Policy](reward-policy.md)
- [Academy Rewards](academy-rewards.md)
- [Marketplace Utility](marketplace-utility.md)
- [Governance Participation](governance-participation.md)
