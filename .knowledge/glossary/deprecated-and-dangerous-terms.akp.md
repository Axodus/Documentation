# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: DEPRECATED AND DANGEROUS TERMS

[DEPRECATED_AND_DANGEROUS_TERMS]

## 1. Purpose

This file defines terms, phrases, and framing patterns that agents and documentation writers must avoid or treat carefully.

Some terms are dangerous because they create financial, legal, governance, security, or reputational risk.

Some terms are deprecated because they were used earlier in the project but no longer match the current Axodus model.

## 2. Financial and Token Language to Avoid

dangerous_financial_terms:
  guaranteed_profit:
    avoid:
      - guaranteed profit
      - guaranteed earnings
      - guaranteed gains
      - sure profit
    safer_alternatives:
      - potential outcome
      - strategy result
      - historical result if verified
      - risk-managed approach
      - no guarantee of future performance

  guaranteed_APY:
    avoid:
      - guaranteed APY
      - fixed APY unless legally and contractually defined
      - guaranteed yield
    safer_alternatives:
      - estimated yield if applicable and verified
      - variable performance
      - target range if formally defined
      - subject to market and protocol risk

  passive_income:
    avoid:
      - passive income
      - earn without risk
      - automatic income
    safer_alternatives:
      - potential rewards
      - platform utility
      - incentive mechanism
      - reward eligibility

  risk_free:
    avoid:
      - risk-free
      - safe returns
      - no risk
    safer_alternatives:
      - risk-aware
      - risk-managed
      - subject to risk
      - includes risk disclosure

  investment_token:
    avoid:
      - `$Neurons` as investment
      - guaranteed appreciating asset
      - buy for profit
    safer_alternatives:
      - utility token
      - reward unit
      - access mechanism
      - governance participation asset
      - ecosystem coordination token

## 3. Trading Language to Avoid

dangerous_trading_terms:
  trading_bot_profit_machine:
    avoid:
      - money machine
      - guaranteed bot profit
      - automatic profit
      - safe scalper
    safer_alternatives:
      - trading tool
      - strategy automation
      - user-controlled strategy
      - subject to market risk
      - users retain responsibility

  no_loss_strategy:
    avoid:
      - no loss
      - always wins
      - low risk meaning no risk
    safer_alternatives:
      - defined risk model
      - risk limits
      - drawdown possible
      - no performance guarantee

  exchange_safety_overclaim:
    avoid:
      - your funds are always safe
      - API keys are risk-free
    safer_alternatives:
      - use least privilege
      - disable withdrawals
      - exchange/API risk remains
      - user responsibility required

## 4. Governance Language to Avoid

dangerous_governance_terms:
  fully_decentralized_without_proof:
    avoid:
      - fully decentralized if governance is not operationally verified
      - community controlled if admin controls remain undisclosed
    safer_alternatives:
      - governance-coordinated
      - designed for decentralized participation
      - current governance design
      - governance under development

  governance_as_marketing:
    avoid:
      - governance as buzzword
      - voting equals decentralization
    safer_alternatives:
      - proposal lifecycle
      - execution receipts
      - DAO federation
      - constitutional guardrails

  AI_governance:
    avoid:
      - AI decides governance
      - agents govern autonomously
    safer_alternatives:
      - ACS-assisted governance review
      - AI-generated advisory analysis
      - human and governance validation required

## 5. Business and BBA Language to Avoid

dangerous_business_terms:
  guaranteed_ROI:
    avoid:
      - guaranteed ROI
      - guaranteed conversion
      - campaign will make profit
    safer_alternatives:
      - ROI-aware
      - measurable campaign
      - performance-oriented
      - no guaranteed outcome

  fake_partnership:
    avoid:
      - partner
      - official partner
      - backed by
      - adopted by
    rule:
      - only use if confirmed and documented

  fake_audit:
    avoid:
      - audited
      - certified secure
    rule:
      - only use if audit exists and details are verifiable

  automatic_acceptance:
    avoid:
      - all requests accepted
      - instant approval
    safer_alternatives:
      - structured intake
      - review required
      - subject to scope and governance review

## 6. Academy Language to Avoid

dangerous_academy_terms:
  learn_to_earn_profit:
    avoid:
      - learn and earn guaranteed income
      - free course gives sellable tokens
    safer_alternatives:
      - learning rewards
      - reward eligibility
      - locked/internal-use rewards if implemented
      - subject to policy and contract rules

  certification_overclaim:
    avoid:
      - official professional certification
      - legally certified expert
    safer_alternatives:
      - Academy certificate
      - completion credential
      - proof of knowledge record
      - subject to platform policy

  transferable_locked_rewards:
    avoid:
      - locked rewards can be sold
      - locked rewards are liquid
    safer_alternatives:
      - locked rewards may support internal utility if implemented
      - transferability depends on contract rules

## 7. ACS Language to Avoid

dangerous_ACS_terms:
  fully_autonomous_AI:
    avoid:
      - fully autonomous agent
      - no human needed
      - AI decides
      - AI executes treasury
    safer_alternatives:
      - AI-assisted
      - advisory
      - supervised
      - human-reviewed
      - governance-aligned

  unrestricted_tools:
    avoid:
      - agent can access everything
      - agent can deploy or trade automatically
    safer_alternatives:
      - scoped permissions
      - least privilege
      - logged tool usage
      - restricted execution

## 8. Deprecated or Historical Terms

deprecated_terms:
  NRS:
    status: Deprecated_as_primary
    replacement:
      - `$Neurons`
    note:
      - If old documents use NRS, update to `$Neurons` unless specifically discussing historical context.

  simple_DAO:
    status: Deprecated_as_model
    replacement:
      - layered_governance
      - DAO_federation
      - constitutional_governance
    note:
      - Axodus governance is no longer only a simple DAO concept.

  docs_as_static_marketing:
    status: Deprecated_as_approach
    replacement:
      - operational_knowledge_base
      - canonical_documentation
      - semantic_memory_layer

## 9. Agent Rewrite Rules

rewrite_rules:
  if_text_contains_guaranteed_profit:
    replace_with:
      - "No strategy can guarantee profit. This tool is subject to market, execution, liquidity, and operational risk."

  if_text_contains_passive_income:
    replace_with:
      - "This mechanism may provide rewards or utility if eligibility and policy conditions are met."

  if_text_claims_feature_live_without_evidence:
    replace_with:
      - "This feature is currently planned or under development unless implementation status is verified."

  if_text_claims_audit_without_evidence:
    replace_with:
      - "Security review status must be verified before publication."

  if_text_claims_AI_final_authority:
    replace_with:
      - "ACS provides advisory analysis and requires human or governance validation for sensitive decisions."

## 10. Public Documentation Guidance

The public Terminology Standards page should include a safe language section based on this file, but it should not sound alarmist.

It should guide contributors toward accurate and responsible language.
