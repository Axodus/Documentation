# Academy Risk and Abuse Prevention

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Academy Nucleus

---

## Purpose

This document defines Academy risk and abuse prevention requirements.

## Scope

It covers reward farming, sybil attacks, credential abuse, course quality, tutor fraud, Marketplace abuse, AI quality risk, privacy risk, and governance policy risk.

## Risk Categories

- Reward farming: users extract rewards without meaningful learning.
- Sybil attack: one actor creates many identities to claim rewards or influence reputation.
- Credential abuse: certificates or badges claim expertise not actually earned.
- Low-quality content: courses are inaccurate, outdated, or superficial.
- Misleading financial claims: courses imply guaranteed profit or safe returns.
- Token misrepresentation: rewards are presented as investment or guaranteed income.
- Marketplace abuse: fake purchases, refund loops, self-dealing, or locked reward exploits.
- Tutor fraud: fake expertise, plagiarism, or unapproved content.
- Assessment leakage: quiz answers or tasks become public and farmable.
- AI quality risk: generated content or grading contains errors or bias.
- Privacy and data risk: learner progress, wallet, or identity data is mishandled.
- Governance policy risk: Academy rules change without governance when required.

## Controls

- Reward controls: caps, Proof of Knowledge, locked rewards for free courses, pattern monitoring, cooldowns, and governance for high-value campaigns.
- Sybil controls: wallet pattern analysis, reputation thresholds, progressive rewards, manual review, and optional uniqueness checks if policy supports them.
- Content controls: tutor validation, course review, ACS-assisted claim detection, human review for sensitive categories, versioning, and user feedback.
- Assessment controls: randomization, scenarios, practical tasks, attempt limits, rotating question pools, and review for high-value certifications.
- Marketplace controls: clear payment rules, restricted locked reward use, refund policy, self-dealing detection, fee transparency, and dispute process.
- Governance controls: policy records, reward policy review, sensitive category review, and accountability reports for material changes.
- Security controls: protect learner data, protect API keys where course tools involve trading, avoid sensitive data leakage, and follow security policy.

## Sensitive Course Categories

Trading, DeFi, tokenomics, governance, security, and smart contract development require stronger risk controls.

Trading courses must explain market loss, liquidation, exchange, and API key risk. DeFi courses must explain smart contract, wallet, liquidity, and protocol risk. Tokenomics courses must avoid investment language and frame utility carefully.

## Abuse Signals

Signals may include unusually fast completion, repeated account patterns, suspicious reward claims, suspicious Marketplace spend, low-quality tutor content volume, repeated refund disputes, fake reviews, self-purchase patterns, plagiarism indicators, reward policy changes without review, or excessive locked reward governance influence.

## Response Actions

Responses may include requesting more information, warnings, content corrections, reward claim pauses, marking courses Needs Review, restricting reward eligibility, manual review, listing suspension, reward revocation if policy allows, tutor suspension, campaign blocking, governance escalation, and accountability notes when material.

Emergency responses may include pausing reward campaigns if controls exist, disabling Marketplace purchase routes if exploit detected, initiating security review, and publishing a post-incident report.

## ACS Role

ACS may detect misleading claims, flag reward farming patterns, review course risk, identify suspicious completion patterns, summarize learner feedback, and support human review. ACS is advisory and cannot replace policy, governance, or security review.

## Documentation Requirements

Every trading course must include no-profit-guarantee language, API key risk, and market loss risk. Every DeFi course must explain smart contract, wallet, and protocol risks. Every reward page must explain reward status and limitations. Every locked reward page must explain that transferability depends on contract or policy.
