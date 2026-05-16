# AXODUS KNOWLEDGE PACK
# DOMAIN: ACADEMY
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_ACADEMY_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Academy knowledge pack into public documentation pages.

All public documentation must be written in English.

The pages should be clear, institutional, educational, technically useful, and aligned with the current Axodus ecosystem model.

Avoid generic LMS language. Academy must be documented as a core Axodus nucleus connected to token utility, marketplace, governance, ACS, and onboarding.

## 2. Required Public Pages

required_pages:
  - docs/academy/overview.md
  - docs/academy/learn-to-win.md
  - docs/academy/proof-of-knowledge.md
  - docs/academy/course-publishing.md
  - docs/academy/tutor-validation.md
  - docs/academy/token-reward-flows.md
  - docs/academy/locked-rewards.md
  - docs/academy/marketplace-integration.md
  - docs/academy/governance-alignment.md
  - docs/academy/academy-risk.md

optional_pages:
  - docs/academy/certifications.md
  - docs/academy/learning-paths.md
  - docs/academy/reputation.md
  - docs/academy/assessment-design.md
  - docs/academy/partner-programs.md

## 3. Standard Page Template

Every major Academy page should include:

- Title
- Status
- Version
- Last Updated
- Owner
- Purpose
- Scope
- Overview
- Responsibilities or Model
- Workflow
- Governance Touchpoints
- Risk Considerations
- Current Status
- Future Work

recommended_header:
  Status: Draft
  Version: 0.1.0
  Last Updated: YYYY-MM-DD
  Owner: Axodus Academy

## 4. Page: Academy Overview

target:
  docs/academy/overview.md

must_include:
  - Academy is a central education and onboarding nucleus.
  - Academy supports Learn-to-Win.
  - Academy supports Proof of Knowledge.
  - Academy may support certifications and reputation.
  - Academy connects to `$Neurons` utility and rewards.
  - Academy connects to Marketplace course commerce.
  - Academy supports tutor and partner course publishing.
  - Academy requires governance alignment for high-impact reward or policy rules.
  - ACS may assist content review and risk classification.

must_not_include:
  - Academy as simple video library only
  - guaranteed rewards as profit
  - final contract behavior unless verified

## 5. Page: Learn-to-Win

target:
  docs/academy/learn-to-win.md

must_include:
  - gamified learning model
  - milestones
  - learning paths
  - assessments
  - reward eligibility
  - free vs paid course reward distinction
  - anti-farming and anti-sybil considerations
  - ACS support for analysis and abuse detection

must_not_include:
  - rewards for simple clicks without validation
  - guaranteed token market value
  - unlimited rewards

## 6. Page: Proof of Knowledge

target:
  docs/academy/proof-of-knowledge.md

must_include:
  - Proof of Knowledge validates learning
  - differs from simple completion
  - assessment types
  - practical tasks
  - certification relationship
  - reputation relationship
  - reward eligibility relationship
  - risks of weak validation

must_mark_as_planned_if:
  - on-chain attestations are not implemented
  - credential system is not implemented

## 7. Page: Course Publishing

target:
  docs/academy/course-publishing.md

must_include:
  - tutors, companies, DAOs, and partners may publish courses if validated
  - course parameters: price, accepted currencies, royalties, commissions, operational fees, access rules, reward rules
  - review workflow
  - marketplace listing relationship
  - governance review triggers
  - risk requirements for sensitive categories

must_not_include:
  - final fee percentages unless verified
  - automatic approval of any course

## 8. Page: Tutor Validation

target:
  docs/academy/tutor-validation.md

must_include:
  - why tutor validation exists
  - tutor types
  - validation statuses
  - validation criteria
  - sensitive categories
  - dispute and enforcement concepts
  - ACS and human review roles
  - governance touchpoints

must_not_include:
  - validation as legal certification
  - AI-only approval for sensitive tutors

## 9. Page: Token Reward Flows

target:
  docs/academy/token-reward-flows.md

must_include:
  - reward statuses
  - free course rewards
  - paid course rewards
  - locked vs unlocked
  - internal-use rewards
  - smart contract dependency
  - reward policy object
  - governance touchpoints
  - risks

must_not_include:
  - guaranteed income
  - guaranteed unlock
  - final transferability unless implemented

## 10. Page: Locked Rewards

target:
  docs/academy/locked-rewards.md

must_include:
  - locked rewards definition
  - why they exist
  - internal utility concept
  - marketplace use if supported
  - governance use if supported
  - unlock conditions if defined
  - same-token vs second-token conceptual tradeoff
  - contract validation requirement

must_not_include:
  - claim locked rewards are non-transferable unless contract enforces it
  - claim locked rewards can be sold
  - claim locked rewards can vote unless governance/contract support exists

## 11. Page: Marketplace Integration

target:
  docs/academy/marketplace-integration.md

must_include:
  - courses as marketplace products
  - learning paths, certifications, workshops, tutor services
  - accepted payment sources conceptually
  - fee components
  - tutor revenue
  - royalties and commissions
  - locked reward marketplace use as unresolved/planned if not final
  - risks and disputes

must_not_include:
  - specific accepted currencies unless implemented
  - final fee percentages unless verified
  - final settlement behavior for locked rewards unless defined

## 12. Page: Governance Alignment

target:
  docs/academy/governance-alignment.md

must_include:
  - when Academy requires governance review
  - reward policy changes
  - tutor policy
  - marketplace policy
  - certification access power
  - Business role in partner/DAO requests
  - ACS advisory role
  - authority boundaries

## 13. Page: Academy Risk

target:
  docs/academy/academy-risk.md

must_include:
  - reward farming
  - sybil attacks
  - credential abuse
  - low quality content
  - misleading financial claims
  - marketplace abuse
  - tutor fraud
  - assessment leakage
  - AI quality risk
  - anti-abuse controls
  - ACS support and limitations

must_not_include:
  - detailed exploit bypass information
  - hidden anti-abuse mechanisms that would help attackers

## 14. Cross-Linking Requirements

cross_links:
  academy_overview:
    link_to:
      - learn_to_win
      - proof_of_knowledge
      - token_reward_flows
      - marketplace_integration
      - governance_alignment

  learn_to_win:
    link_to:
      - proof_of_knowledge
      - token_reward_flows
      - locked_rewards
      - academy_risk

  proof_of_knowledge:
    link_to:
      - certifications_if_exists
      - tutor_validation
      - academy_risk

  course_publishing:
    link_to:
      - tutor_validation
      - marketplace_integration
      - governance_alignment

  token_reward_flows:
    link_to:
      - locked_rewards
      - tokenomics_neurons
      - governance_alignment
      - academy_risk

  marketplace_integration:
    link_to:
      - course_publishing
      - locked_rewards
      - marketplace_overview

## 15. Language Guardrails

use_language:
  - "may support"
  - "designed to support"
  - "planned"
  - "requires contract validation"
  - "subject to governance approval"
  - "internal utility"
  - "locked reward"
  - "reward eligibility"

avoid_language:
  - "guaranteed"
  - "risk-free"
  - "profit"
  - "income"
  - "investment return"
  - "always transferable"
  - "always unlocked"
  - "official certification" unless policy defines it
  - "audited" unless audit exists

## 16. Definition of Done for Academy Docs

done_when:
  - all required pages exist
  - pages are written in English
  - pages reflect Axodus-specific Academy model
  - Learn-to-Win and Proof of Knowledge are distinct
  - reward flows are cautious and contract-aware
  - locked rewards are explained without overclaiming
  - course publishing and tutor validation are documented
  - marketplace integration is documented
  - governance/Business/ACS relationships are documented
  - risk and anti-abuse language is present
  - navigation is updated
