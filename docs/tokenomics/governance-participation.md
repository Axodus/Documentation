# Governance Participation

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Tokenomics / Governance

---

## Purpose

`$Neurons` may support governance participation, but token-based governance must be designed carefully.

Token ownership does not automatically create governance power unless Governance, contracts, and policy define it.

## Scope

This page covers possible voting, proposal, signaling, delegation, reputation hybrid, product governance, and locked reward participation models.

## Use Cases

Possible governance use cases include voting, proposal creation, signaling, delegation, reputation or certification hybrids, and product governance if policy defines them.

## Eligibility Fields

Eligibility rules should define governance layer, eligible asset or status, minimum balance if any, whether locked rewards count, certification requirements, DAO status requirements, delegation support, quadratic or sublinear weighting, caps, anti-sybil requirements, contract reference, and governance status.

## Locked Rewards and Governance

Do not assume locked rewards have governance power.

Possible models include no governance power, signaling only, capped weight, reduced weight, Proof of Knowledge requirement, quadratic weighting, or unlock-before-voting. None should be documented as active unless Governance and contracts confirm it.

## Governance Layer Mapping

Executive DAO participation may be restricted by role. Boardroom Council participation may use threshold, reputation, or seat models if defined. Community DAO is likely the user-facing participation layer, but voting mechanics must be implemented before being claimed. Local DAOs may have custom rules or plugins that must align with the Axodus Constitution for official integration.

## Risks and Controls

Risks include large holder dominance, reward farming capture, sybil attacks, low-information voting, credential gatekeeping, snapshot mismatch, and governance complexity.

Controls may include clear eligibility rules, snapshot definitions, anti-sybil controls, caps on locked reward weight, Proof of Knowledge for sensitive participation, quadratic or reputation hybrids if approved, delegation transparency, proposal education, execution receipts, and accountability.

## Governance Requirements

Governance review is required to enable `$Neurons` voting power, allow locked rewards to vote, change vote weight formulas, change proposal thresholds, add quadratic voting, add reputation or certification gates, change DAO federation access rules, or change product governance rules.

## Related Pages

- [Governance Overview](../governance/overview.md)
- [DAO Federation](../governance/dao-federation.md)
- [Proposal Lifecycle](../governance/proposal-lifecycle.md)
- [Proof of Knowledge](../academy/proof-of-knowledge.md)
