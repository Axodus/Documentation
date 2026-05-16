# Academy Locked Rewards

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Academy Nucleus

---

## Purpose

This document explains locked rewards in the Academy context.

## Scope

It covers possible locked reward behavior, use cases, status labels, implementation patterns, Marketplace use, governance use, unlock conditions, and anti-abuse rules.

## Definition

Locked rewards are reward balances that may be issued through Academy learning flows but are restricted in how they can be transferred, withdrawn, sold, or used.

The primary design motivation is to allow free-course users to receive educational rewards without immediately creating liquid sell pressure, reward farming incentives, or speculative abuse.

## Implementation Caution

Locked reward behavior must match implementation. Documentation must not state that a reward is non-transferable, Marketplace-spendable, voting-enabled, or unlockable unless smart contracts, platform accounting, or governance policy support that behavior.

Use careful language such as `may support`, `designed to support`, `planned`, `requires contract validation`, or `subject to governance approval` where behavior is not final.

## Possible Use Cases

- Marketplace spending if supported.
- Course access or discounts if supported.
- Governance participation if policy and contracts support it.
- Product access if policy supports it.
- Reputation signal, without replacing Proof of Knowledge.
- Unlock pathway after defined conditions.

## Status Model

| Status | Meaning |
| --- | --- |
| Locked | Reward exists but transfer or withdrawal is restricted. |
| Internal Use Only | Reward can only be used inside Axodus. |
| Marketplace Eligible | Reward can be spent on Marketplace items if supported. |
| Governance Eligible | Reward can contribute to governance participation if policy supports it. |
| Product Access Eligible | Reward counts toward access requirements if policy supports it. |
| Unlock Pending | Defined unlock conditions are not met. |
| Unlocked | Restrictions removed if contract or policy allows. |
| Revoked | Reward removed due to abuse or invalid completion if supported. |
| Expired | Reward no longer valid for a specific utility if policy defines expiration. |

## Implementation Patterns

- Contract lock: stronger on-chain enforcement, with higher contract complexity and audit needs.
- Internal credit: simpler early iteration, but creates trust and transparency considerations.
- Same-token dual balance: keeps `$Neurons` as one ecosystem asset, but requires custom accounting or contract logic.
- Voucher or credit contract: flexible internal utility, but must be explained clearly.
- Soulbound credit: reduces transfer abuse, but may not equal a token balance.

## Same Token vs Second Token

The current documentation should prefer describing locked rewards as a design concept tied to `$Neurons` utility without committing to final implementation until contracts are defined. Do not document a second token as final unless governance and contract architecture approve it.

## Marketplace Use

Locked rewards may be used in Marketplace only if policy and implementation define accepted payment sources, settlement, limits, refunds, and tutor compensation. These details remain Needs Review until finalized.

## Governance Use

Locked rewards must not be described as voting power unless governance design and contracts confirm it. If governance utility is discussed, frame it as possible utility subject to policy, caps, anti-sybil controls, and review.

## Unlock Conditions

Possible unlock conditions may include advanced paid course completion, time-based vesting, higher Proof of Knowledge, reputation maintenance, governance-approved milestone, identity or anti-sybil validation if policy requires it, Marketplace activity, or no unlock at all.

## Anti-Abuse Rules

Free-course rewards should consider per-user caps, course caps, assessment validation, cooldowns, wallet or reputation checks where appropriate, ACS risk flagging, manual review for high-value rewards, and governance review for high-impact campaigns.
