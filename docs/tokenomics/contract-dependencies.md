# Contract Dependencies

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Tokenomics / Security

---

## Purpose

Tokenomics is only real when policy and contracts agree. Documentation must not claim behavior that contracts or platform accounting cannot enforce.

## Scope

This page covers contract dependencies for supply, fees, rewards, locks, claims, Marketplace payments, governance participation, treasury flows, revocation, events, reporting, and security.

## Possible Contract Components

Possible components include the `$Neurons` token contract, reward controller, locked balance contract, Marketplace payment contract, governance snapshot or voting adapter, treasury controller, access controller, and proof or attestation contract.

These components are not confirmed production architecture unless implementation validates them.

## Validation Requirements

Validation is required for supply, decimals, minting authority, burn mechanics, fees, destinations, reward issuance, budget controls, locked reward enforcement, internal use, unlock conditions, Marketplace payment assets, settlement, refunds, governance voting power, snapshots, delegation, proposal thresholds, treasury reporting, and admin controls.

## Contract Behavior Statuses

Use `Verified`, `Planned`, `Draft`, `Experimental`, `Needs Validation`, or `Deprecated` to describe contract-dependent behavior.

## Documentation Rules

Do not describe contract behavior as active without verification. Distinguish testnet from production and proof of concept from final contract. Mention governance control when parameters are mutable. Mention audits or security reviews only if they exist. Do not expose private keys, admin secrets, or sensitive deployment details.

## Events and Reporting

Events may support reports if implemented, including reward policy creation, reward issuance, claims, locks, unlocks, spending, revocation, fee collection, burns, treasury allocation, Marketplace payment, governance eligibility updates, and access rule updates.

## Security Requirements

Security expectations include role-based access control, least privilege admin roles, pause controls where needed, governance-controlled parameter changes, test coverage, transfer edge case review, Marketplace refund abuse review, governance snapshot attack review, and security review before production for sensitive contracts.

## Risks

Risks include admin key risk, lock bypass, fee miscalculation, Marketplace exploit, governance snapshot attack, event reporting gaps, and upgrade risk.

## Related Pages

- [Security Overview](../security/overview.md)
- [Smart Contract Security](../security/smart-contract-security.md)
- [Governance Overview](../governance/overview.md)
- [Risk and Compliance](risk-and-compliance.md)
