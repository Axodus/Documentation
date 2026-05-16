# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_TOKENOMICS_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Tokenomics knowledge pack into public documentation pages.

All public documentation must be written in English.

Tokenomics pages must be precise, careful, and risk-aware. They must not sound like token marketing, investment promotion, or guaranteed reward documentation.

## 2. Required Public Pages

required_pages:
  - docs/tokenomics/overview.md
  - docs/tokenomics/neurons-token.md
  - docs/tokenomics/utility-model.md
  - docs/tokenomics/supply-and-emission.md
  - docs/tokenomics/reward-policy.md
  - docs/tokenomics/locked-rewards.md
  - docs/tokenomics/academy-rewards.md
  - docs/tokenomics/marketplace-utility.md
  - docs/tokenomics/governance-participation.md
  - docs/tokenomics/treasury-alignment.md
  - docs/tokenomics/contract-dependencies.md
  - docs/tokenomics/risk-and-compliance.md
  - docs/tokenomics/reporting-and-accountability.md

optional_pages:
  - docs/tokenomics/fee-model.md
  - docs/tokenomics/access-rules.md
  - docs/tokenomics/reward-statuses.md
  - docs/tokenomics/tokenomics-governance.md
  - docs/tokenomics/open-questions.md

## 3. Standard Page Template

Every major Tokenomics page should include:

- Title
- Status
- Version
- Last Updated
- Owner
- Purpose
- Scope
- Overview
- Model or Policy
- Governance Touchpoints
- Contract Dependencies
- Risk Considerations
- Current Status
- Future Work

recommended_header:
  Status: Draft
  Version: 0.1.0
  Last Updated: YYYY-MM-DD
  Owner: Axodus Tokenomics

## 4. Page: Tokenomics Overview

target:
  docs/tokenomics/overview.md

must_include:
  - Tokenomics defines economic design, utility, rewards, access, governance participation, and sustainability.
  - `$Neurons` is the canonical token notation.
  - Tokenomics is utility-focused, not investment-focused.
  - Tokenomics connects Academy, Marketplace, Governance, Business, Treasury, Trading, ACS, and Accountability.
  - Contract validation and governance approval are required for material claims.

must_not_include:
  - guaranteed profit
  - guaranteed APY
  - passive income
  - final contract behavior unless verified

## 5. Page: `$Neurons` Token

target:
  docs/tokenomics/neurons-token.md

must_include:
  - canonical notation `$Neurons`
  - deprecated/historical `NRS` warning if needed
  - token roles: utility, rewards, access, governance participation, coordination
  - what `$Neurons` is not
  - historical/planned supply and fee references only with Needs Validation status
  - lifecycle concepts
  - risk language

## 6. Page: Utility Model

target:
  docs/tokenomics/utility-model.md

must_include:
  - utility categories
  - Academy utility
  - Marketplace utility
  - Governance utility
  - Product access
  - Business and ACS possible utility if policy defines
  - status model
  - access utility
  - reward utility
  - anti-patterns

## 7. Page: Supply and Emission

target:
  docs/tokenomics/supply-and-emission.md

must_include:
  - supply concepts
  - historical/planned 10,000,000 supply reference as Needs Validation unless verified
  - emission categories
  - allocation policy fields
  - emission controls
  - minting considerations
  - burn considerations
  - governance requirements
  - risks

must_not_include:
  - final total supply unless contract verified
  - burn claims as price support

## 8. Page: Reward Policy

target:
  docs/tokenomics/reward-policy.md

must_include:
  - reward policy definition
  - reward sources
  - reward statuses
  - reward policy object
  - eligibility
  - budget controls
  - anti-abuse
  - governance requirements
  - risks

## 9. Page: Locked Rewards

target:
  docs/tokenomics/locked-rewards.md

must_include:
  - locked reward definition
  - purpose
  - statuses
  - same-token locked design concept
  - possible implementation patterns
  - unlock conditions
  - internal utility
  - marketplace settlement questions
  - governance participation questions
  - risks

must_not_include:
  - locked rewards are freely transferable
  - guaranteed unlock
  - voting power unless approved and implemented

## 10. Page: Academy Rewards

target:
  docs/tokenomics/academy-rewards.md

must_include:
  - Academy as major reward source
  - Learn-to-Win tokenomics
  - Proof of Knowledge relationship
  - free course reward flow
  - paid course reward flow
  - reward policy fields
  - anti-abuse
  - risks

must_state:
  - Free-course rewards may be locked/internal-use if supported.
  - Paid-course rewards may follow different rules but are not automatically liquid.

## 11. Page: Marketplace Utility

target:
  docs/tokenomics/marketplace-utility.md

must_include:
  - Marketplace utility models
  - product types
  - settlement questions
  - payment object
  - locked rewards in Marketplace
  - fee components
  - governance requirements
  - risks

must_not_include:
  - final settlement behavior unless defined
  - accepted currencies unless implemented

## 12. Page: Governance Participation

target:
  docs/tokenomics/governance-participation.md

must_include:
  - governance participation use cases
  - eligibility fields
  - locked rewards and governance policy
  - possible models
  - governance layer mapping
  - risks
  - controls
  - governance requirements

must_not_include:
  - automatic voting power for `$Neurons` or locked rewards unless implemented

## 13. Page: Treasury Alignment

target:
  docs/tokenomics/treasury-alignment.md

must_include:
  - treasury-related tokenomics flows
  - treasury questions
  - review requirements
  - reporting fields
  - sustainability controls
  - risks

## 14. Page: Contract Dependencies

target:
  docs/tokenomics/contract-dependencies.md

must_include:
  - tokenomics depends on contracts
  - possible contract components
  - validation requirements
  - contract behavior statuses
  - documentation rules
  - events and reporting
  - security requirements
  - risks

## 15. Page: Risk and Compliance

target:
  docs/tokenomics/risk-and-compliance.md

must_include:
  - Tokenomics is not investment advice
  - risk categories
  - prohibited public claims
  - safe language
  - risk controls
  - review triggers
  - incident scenarios

must_not_include:
  - legal compliance guarantee
  - securities classification claims unless reviewed

## 16. Page: Reporting and Accountability

target:
  docs/tokenomics/reporting-and-accountability.md

must_include:
  - report types
  - report fields
  - accountability records
  - cadence
  - public vs internal reporting
  - triggers
  - risks

## 17. Optional Page: Fee Model

target:
  docs/tokenomics/fee-model.md

must_include:
  - historical/planned fee references:
    - 0.35% burn
    - 0.25% liquidity
    - 0.5% treasury
  - mark as Needs Validation unless verified
  - fee categories
  - applicability questions
  - governance requirements
  - reporting
  - risks

## 18. Cross-Linking Requirements

cross_links:
  tokenomics_overview:
    link_to:
      - neurons_token
      - utility_model
      - reward_policy
      - locked_rewards
      - risk_and_compliance

  neurons_token:
    link_to:
      - utility_model
      - supply_and_emission
      - contract_dependencies
      - risk_and_compliance

  academy_rewards:
    link_to:
      - Academy_overview
      - Learn_to_Win
      - Proof_of_Knowledge
      - locked_rewards

  marketplace_utility:
    link_to:
      - Marketplace_overview
      - Course_Commerce
      - locked_rewards
      - treasury_alignment

  governance_participation:
    link_to:
      - Governance_overview
      - DAO_Federation
      - Proposal_Lifecycle
      - Academy_Proof_of_Knowledge

  treasury_alignment:
    link_to:
      - Treasury_overview
      - Accountability
      - reporting_accountability

  contract_dependencies:
    link_to:
      - Security
      - Smart_Contracts
      - Governance

## 19. Language Guardrails

use_language:
  - utility
  - access
  - reward eligibility
  - governance participation if supported
  - locked reward
  - internal-use balance
  - subject to governance approval
  - subject to contract validation
  - planned
  - draft
  - active if verified
  - risk-aware
  - reportable
  - sustainable

avoid_language:
  - guaranteed profit
  - guaranteed APY
  - guaranteed yield
  - passive income
  - investment return
  - guaranteed appreciation
  - risk-free
  - automatic unlock
  - freely tradable locked rewards
  - official audit unless verified
  - legal compliance unless reviewed

## 20. Definition of Done for Tokenomics Docs

done_when:
  - all required pages exist
  - all pages are written in English
  - `$Neurons` is used consistently
  - NRS is not used as current canonical symbol
  - supply and fee values are marked Needs Validation unless verified
  - reward statuses and policies are documented
  - locked rewards are documented carefully
  - Academy rewards are documented
  - Marketplace utility is documented with settlement caveats
  - Governance participation is documented without overclaiming
  - Treasury alignment is documented
  - Contract dependencies are documented
  - Risk and compliance language is present
  - Reporting and accountability are documented
  - no investment, APY, profit, or guarantee language exists
  - navigation is updated
