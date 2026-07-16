# Academy Token Reward Flows

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Academy Nucleus

---

## Purpose

This document explains cautious reward concepts for Academy.

## Overview

Academy rewards can support onboarding, engagement, education, and `$Neurons` utility. They can also create farming, unsustainable token emissions, user misunderstanding, and legal or reputational risk if documented incorrectly.

Academy documentation must distinguish free-course rewards, paid-course rewards, locked rewards, unlocked rewards, internal-use rewards, Marketplace-spendable rewards, governance participation utility, claimable rewards, contract-enforced behavior, and planned behavior.

## Reward Concepts

Free courses may issue locked or internal-use rewards. Paid courses may issue unlocked or differently governed rewards. Exact rules depend on smart contract implementation and must not be presented as final until verified.

## Reward Sources

- Platform-allocated rewards
- Sponsor or partner rewards
- Course purchase-related rewards
- Governance-approved campaigns
- Marketplace revenue-related rewards if policy defines them

## Reward Status Model

| Status | Meaning |
| --- | --- |
| Pending | Learner may be eligible but conditions are incomplete. |
| Eligible | Learner met requirements but reward is not issued or claimed. |
| Issued Locked | Reward record created as locked or internal-use. |
| Issued Unlocked | Reward record created as transferable or claimable if contracts allow. |
| Claimed | User claimed reward to wallet or account if allowed. |
| Internal Use Only | Reward can be used inside the platform if enforced. |
| Spent | Reward used for Marketplace or platform utility. |
| Revoked | Reward removed due to abuse or invalid completion if policy allows. |
| Expired | Eligibility or campaign window ended. |
| Needs Review | Reward status has risk or unclear implementation. |

## Free Course Reward Flow

1. User enrolls in a free course.
2. User completes content.
3. Proof of Knowledge or assessment validates completion.
4. Anti-abuse checks run.
5. Reward policy is resolved.
6. Reward record is created.
7. Locked or internal-use status applies if policy and contracts support it.
8. User can use reward only for supported utilities.
9. Transfer or withdrawal is blocked only if contracts or platform accounting enforce it.
10. Reporting metrics are updated.

## Paid Course Reward Flow

Paid courses may have different reward rules. Paid participation may reduce spam but does not remove abuse risk. Do not claim all paid-course rewards are unlocked unless finalized tokenomics and contracts confirm it.

## Possible Utility

Locked rewards may support internal utility such as Marketplace purchases, voting, platform access, or certification progress if implemented.

## Smart Contract Relationship

Contracts or platform accounting may support reward minting, locked balance management, claim control, internal-use tracking, Marketplace payment acceptance, voting weight calculation, unlock condition enforcement, or reward revocation if policy supports it.

Documentation must not invent contract behavior.

## Guardrails

Locked rewards must not be described as freely tradable unless contract rules allow it. Rewards must not be framed as guaranteed financial return.

## Reward Policy Fields

Reward policies should define course ID, course type, reward asset, reward amount, calculation method, max reward per user, max budget, free or paid context, locked status, internal-use status, transferability, claim conditions, unlock conditions, expiration, anti-abuse rules, governance status, contract reference, version, effective date, and review date.

## Canonical Traceability

- Integration: `INTG-EP8-0005`
- Canonical counterpart: [Tokenomics Academy Rewards](../tokenomics/academy-rewards.md)
- Interfaces: `INT-EP7-010`, `INT-EP7-011`, `INT-EP7-013`
- Authority: `AUTH-EP8-0007`
- Evidence: `EVID-EP7-0011`, `EVID-EP7-0019`
- Status: directional and inactive economic effect.

Assessment or qualification evidence does not itself authorize issuance,
distribution, transferability, Marketplace spending, or governance rights.
