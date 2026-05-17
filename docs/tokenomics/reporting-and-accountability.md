# Reporting and Accountability

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Accountability

---

## Purpose

Tokenomics reporting ensures that $Neurons supply, minting, burn, authorization, and future cross-chain behavior remain auditable.

## Scope

This page defines reporting for the current controlled issuance model. It does not assume active staking, DAO governance, locked rewards, allocation percentages, or marketplace settlement.

## Report Types

Reports may include supply reports, mint reports, burn reports, PoK issuance reports, authorization failure summaries, role-change reports, pause incident reports, cross-chain reconciliation reports if enabled, and public correction notices.

## Reporting Fields

Reports should include reporting period, token contract reference if available, maximum supply, current total supply, minted amount, burned amount, remaining mint capacity, mint events by program, per-user limit enforcement summary where appropriate, nonce/replay incidents if any, signer or role changes, pause events, cross-chain supply data if enabled, risks, assumptions, limitations, and next review.

## Accountability Records

Records may include mint authorization records, nonce usage records, program eligibility records, signer role records, burn records, pause records, contract validation records, and cross-chain adapter validation records.

## Public vs Internal Reporting

Public reports should summarize supply, issuance, burn, program categories, major incidents, and limitations without exposing private user data or security-sensitive operational details.

Internal reports may include signer review notes, abuse analysis, detailed authorization logs, and sensitive incident investigation data when policy allows.

## Reporting Triggers

Triggers include contract deployment, mint authority change, material mint campaign, burn event, pause event, replay attempt incident, daily-limit abuse incident, public claim correction, LayerZero adapter testing, and cross-chain activation.

## Risk Considerations

Risks include incomplete supply reporting, unverified contract references, user privacy leaks, missing nonce records, bridge reconciliation errors, and public documentation drifting away from deployed contracts.

## Related Pages

- [Accountability Overview](../accountability/overview.md)
- [Treasury Reporting and Accountability](../treasury/reporting-and-accountability.md)
- [Contract Dependencies](contract-dependencies.md)
- [Risk and Compliance](risk-and-compliance.md)
