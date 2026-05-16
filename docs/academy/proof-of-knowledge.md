# Proof of Knowledge

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Academy Nucleus

---

## Purpose

Proof of Knowledge validates that a user has completed learning requirements or demonstrated understanding.

## Scope

It may support assessments, certification, marketplace reputation, and governance or product eligibility.

## Overview

Proof of Knowledge should be more robust than simple course completion. Watching content does not prove understanding. Proof of Knowledge exists to validate learning, reduce superficial completion, protect reward systems, improve user safety, and support certification or readiness signals.

## Proof Types

- Quiz-based proof: multiple-choice or short-answer assessments. These require rotation or anti-copy controls.
- Scenario-based proof: realistic decision scenarios that test judgment.
- Practical tasks: simulated or test-environment actions such as connecting a wallet on testnet, reviewing a governance proposal, configuring safe API permissions, or identifying risk patterns.
- Project-based proof: small artifacts such as governance summaries, risk checklists, or integrations.
- Peer or tutor review: human review for advanced credentials.
- On-chain or attestation-based proof: only documented as active if implemented.

## Flow

1. Learner completes required content.
2. Assessment unlocks.
3. Learner submits answers or task.
4. System scores or routes for review.
5. Anti-abuse checks run.
6. Pass or fail result is created.
7. Retry rules apply if needed.
8. Reward policy is checked.
9. Certificate or reputation is updated if supported.
10. Proof record is stored.
11. Governance or product access is updated only if policy supports it.

## Validation

Validation may include quizzes, practical tasks, identity-independent reputation, or course completion records. Final implementation details require product and contract validation.

## Assessment Requirements

Assessments should define clear learning objectives, passing criteria, attempt limits or cooldowns, question randomization where available, scenario variation, anti-copy controls, review paths for high-value credentials, feedback for failed attempts, accessibility considerations, and versioning when course content changes.

## Certification and Reputation

Certificates may indicate completion, demonstrated skill, governance readiness, trading risk readiness, or tutor status. A trading risk readiness certificate does not certify profitability or safe trading outcomes.

Reputation may support advanced course access, tutor trust, Marketplace status, governance context, or beta product access if policy defines it. Reputation should be reviewable or revocable if abuse is detected.

## Governance Relationship

Proof of Knowledge may support governance education, delegation context, product access readiness, or tutor validation. It must not replace formal governance rights unless governance approves that policy.

## ACS Role

ACS may generate assessment drafts, detect low-quality questions, review content alignment, flag possible answer leakage, evaluate project submissions, assist human review, and detect suspicious patterns. ACS should not be the sole final judge for high-value credentials.

## Risk Considerations

Proof systems must consider cheating, farming, sybil behavior, low-quality assessments, and false confidence.

Credentials must not imply that a user cannot lose funds, cannot make mistakes, or is guaranteed safe outcomes in DeFi or trading.
