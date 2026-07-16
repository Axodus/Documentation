# Tokenomics Alignment

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Treasury

---

## Purpose

Tokenomics creates treasury implications. Under the current $Neurons model, Treasury alignment focuses on controlled issuance, supply reporting, burn reporting, campaign monitoring, signer authority review, and future cross-chain reconciliation.

## Scope

This document defines how Treasury reviews tokenomics flows and coordinates with the [Tokenomics](../tokenomics/overview.md), [Academy](../academy/overview.md), and [Marketplace](../marketplace/overview.md) nuclei without assuming undefined allocation, staking, marketplace, or locked reward mechanics.

## Interfaces

- Maximum supply monitoring.
- PoK-authorized mint event reporting.
- Campaign issuance monitoring.
- Burn event reporting.
- Signer and mint authority review.
- Cross-chain supply reconciliation if LayerZero support is activated.
- Future marketplace, governance, staking, or liquidity features if separately defined.

## Treasury Questions

Treasury review should ask whether a tokenomics action changes supply, creates a mint authorization campaign, burns tokens, changes signer authority, changes mint limits, affects reporting, introduces future marketplace settlement, or creates a treasury obligation.

## Reward Budget Review

Review is required for high-volume PoK issuance campaigns, authorization signer changes, mint limit changes, burn policy changes, cross-chain activation, marketplace payment activation, staking design, DAO treasury design, or public sale planning.

Review fields should include program, source nucleus, expected participants, authorized amount or formula, maximum campaign issuance if applicable, signer authority, per-user controls, treasury cost if any, reporting requirement, abuse controls, and governance status.

## Locked Reward Liability

Locked rewards, treasury token allocation, treasury fee, liquidity fee, staking rewards, and marketplace settlement are not defined in the current $Neurons model. They must not be treated as active treasury obligations unless contract and policy updates define them.

## Reporting Fields

Treasury reporting may include maximum supply, current total supply, minted amount, burned amount, remaining supply capacity, mint events by program, signer or role changes, cross-chain reconciliation if enabled, open commitments, governance references, and risk notes.

## Risk Considerations

Risk includes undocumented treasury obligations, signer compromise, uncontrolled campaign issuance, supply reconciliation errors, contract-policy mismatch, unsupported fee claims, and future liquidity assumptions.

## Canonical Traceability

- Integration: `INTG-EP8-0032`
- Canonical counterpart: [Tokenomics Treasury Alignment](../tokenomics/treasury-alignment.md)
- Interfaces: `INT-EP7-012`, `INT-EP7-013`
- Authorities: `AUTH-EP8-0006`, `AUTH-EP8-0007`
- Evidence: `EVID-EP7-0003`, `EVID-EP7-0019`
- Status: issuance, distribution, signing, and economic execution are inactive.
