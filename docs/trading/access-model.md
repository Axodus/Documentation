# Access Model

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Trading

---

## Purpose

Trading access defines who can use which strategy, under what conditions, for how long, and with which risk controls.

## Scope

Access rules may involve `$Neurons`, Academy completion, Proof of Knowledge, subscriptions, promotional campaigns, milestones, DAO or partner programs, manual review, beta invitations, and governance policy.

## Access Categories

- Token-gated: access based on minimum `$Neurons` balance or token status if policy defines.
- Academy-gated: access requires a trading risk course or Proof of Knowledge.
- Subscription: recurring or time-limited access.
- Promotional: temporary free or discounted access campaigns.
- Milestone-based: access unlocked by user or platform milestones.
- DAO or partner access: group access if approved.
- Manual review: required for high-risk or beta products.
- Beta invite: limited testing group.

## Access Rule Object

Access rules should define strategy, status, category, required `$Neurons` balance if any, whether locked rewards count, Academy requirements, Proof of Knowledge, subscription, campaign, duration, risk tier, exchange restrictions, jurisdiction or terms restrictions if any, leverage limits, confirmations, revocation conditions, governance status, effective date, and review date.

## Product Tiers

Possible tiers include Starter, Basic, Advanced, Pro, and DAO. Do not publish final tier names, requirements, or thresholds unless product policy confirms them.

## Token-Based Access

Possible conditions include minimum unlocked `$Neurons`, total `$Neurons`, locked or internal balance only if policy allows, NFT or certificate if implemented, or time-weighted holding if policy defines.

Locked rewards should not count toward Trading access unless policy and contracts allow it. Counting locked rewards for high-risk trading access may create abuse or user safety risk.

## Academy-Based Access

Academy access may require trading risk introduction, futures and leverage education, API key security lessons, Proof of Knowledge, or periodic refreshers for high-risk tools.

## Revocation and Pause

Access may be revoked or paused for terms violations, unsafe API permissions, strategy pause, exchange issues, governance policy change, security incident, risk limit breach, expired subscription, deprecated access rule, extreme markets, drawdown limits, API error spikes, or incident review.

## Governance Requirements

Governance review is required for major user-group access policy, `$Neurons` thresholds for high-impact products, locked rewards counting for access, DAO strategy access, high-risk strategy tiers, treasury-subsidized free access, or promotional campaigns with tokenomics or treasury impact.

## Related Pages

- [`$Neurons` Token](../tokenomics/neurons-token.md)
- [Proof of Knowledge](../academy/proof-of-knowledge.md)
- [Governance Alignment](governance-alignment.md)
- [Compliance and User Disclosures](compliance-and-user-disclosures.md)
