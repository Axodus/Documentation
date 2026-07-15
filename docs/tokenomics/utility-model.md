---
schema_version: "1.0.0"
document_id: "TOKEN-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Utility Model"
summary: "Defines the current and future utility interpretation for $Neurons within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TOKENOMICS"
authority_level: "CORE"
author: "Axodus Tokenomics"
owner: "Axodus Tokenomics"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "TOKEN-GDE-001"}, {type: "RELATES_TO", target: "TOKEN-GDE-002"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TOKENOMICS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/tokenomics/utility-model.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Utility Model

## Purpose

The utility model defines current and future uses of $Neurons without overstating features that are not implemented.

## Current Utility

| Utility | Status |
| --- | --- |
| ERC-20 transferability | Documented current model |
| PoK-controlled minting | Documented model if verified |
| Burn support | Documented support if verified |
| Cross-chain integration | Prepared |
| Participation incentives through PoK | Possible |
| DAO governance | Future |
| Staking | Future |
| Ecosystem rewards | Future |
| Payment for services | Future |
| Multi-chain liquidity | Future |

## Current Utility Interpretation

The current utility is technical and issuance-focused: $Neurons can exist as
an ERC-20 token, be minted through controlled Proof-of-Knowledge flows, be
burned where supported, and later connect to cross-chain infrastructure.

Public references to current utility describe the documented token model. They
must not be read as proof of finalized deployment, active distribution, or live
access-gating unless implementation and policy records support that reading.

## Future Utility Surfaces

Future utilities may include Academy participation incentives, Marketplace or service payments, governance participation, staking, ecosystem rewards, analytics dashboards, and external application integrations.

These utilities require separate product, contract, treasury, governance, and security validation before they can be documented as active.

## Access Utility

Token-gated access, minimum balances, product access, Trading strategy access, or Marketplace privileges must not be claimed as active unless implementation and policy define the rule.

## Governance Utility

DAO governance is a future extension. $Neurons ownership does not currently imply voting rights, proposal rights, delegation, or governance weight unless governance contracts and policy define it.

## Staking Utility

Staking is a future extension. Documentation must not describe staking rewards, staking APY, lock periods, validator economics, or reward rates until a validated staking design exists.

## Anti-Patterns

Avoid presenting utility as price support, using vague “ecosystem value” claims, implying guaranteed benefits, or treating future features as deployed.

## Related Pages

- [$Neurons Token](neurons-token.md)
- [PoK Minting](pok-minting.md)
- [Marketplace Utility](marketplace-utility.md)
- [Governance Participation](governance-participation.md)
- [Risk and Compliance](risk-and-compliance.md)
