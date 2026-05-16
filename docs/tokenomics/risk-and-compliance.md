# Risk and Compliance

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Security

---

## Purpose

Tokenomics documentation must be precise, technically grounded, and careful about legal, financial, and security claims.

This page is not legal advice and does not claim legal compliance or securities classification.

## Scope

This page covers risks in the current Neurons Token System: controlled minting, signature authorization, supply cap enforcement, access control, burn support, and future cross-chain expansion.

## Risk Categories

| Risk | Mitigation |
| --- | --- |
| Unauthorized mint | EIP-712 authorization and ECDSA verification |
| Replay attack | Unique nonce per authorization |
| Excessive emission | Supply cap and mint limits |
| Mint spam | 1-hour cooldown |
| Individual abuse | Daily per-user limit |
| Operational failure | Pausable controls where implemented |
| Admin compromise | Access Control and multisig recommended |
| Cross-chain risk | Modular adapter and LayerZero testing |
| Multi-chain inflation | Global supply reconciliation |
| Documentation mismatch | Contract validation before active claims |

## Prohibited Public Claims

Do not claim guaranteed profit, guaranteed APY, guaranteed yield, passive income, risk-free rewards, guaranteed price appreciation, guaranteed liquidity, active staking, active DAO governance, vesting schedules, allocation percentages, audited status, production deployment addresses, legal compliance, or cross-chain activation unless verified.

## Safe Language

Use language such as controlled issuance, fixed maximum supply, PoK-authorized minting, EIP-712 signature authorization, ECDSA verification, nonce protection, cooldown, daily limits, burn support, prepared for cross-chain expansion, planned, future, draft, and subject to validation.

## Review Triggers

Review is required for supply claims, mint rule changes, signer authority changes, EIP-712 domain changes, burn behavior changes, public reward campaigns, marketplace utility claims, governance utility claims, staking claims, LayerZero adapter activation, audit claims, and deployment references.

## Incident Scenarios

Potential incidents include signer compromise, authorization replay attempt, invalid nonce handling, daily limit bypass attempt, cooldown bypass attempt, role misconfiguration, pause failure, bridge accounting mismatch, and public documentation errors.

## Related Pages

- [Technical Architecture](technical-architecture.md)
- [PoK Minting](pok-minting.md)
- [Contract Dependencies](contract-dependencies.md)
- [Reporting and Accountability](reporting-and-accountability.md)
