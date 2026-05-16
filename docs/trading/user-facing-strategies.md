# User-Facing Strategies

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Trading

---

## Purpose

User-facing strategies are trading tools or automations that Axodus may make available to eligible users under defined access policy and risk disclosures.

## Scope

This page covers user-owned account execution, no-custody-by-default assumptions, CEX API bots, signal-only tools, assisted execution, wallet-based strategies if implemented, dashboards, educational simulators, access models, user controls, and risks.

## Default Execution Model

The default model is that users own their CEX account or wallet, control their capital, connect API keys or wallets if supported, and remain responsible for exchange terms, API permissions, risk settings, leverage, and capital exposure.

Axodus provides strategy logic, interface, education, monitoring, or automation support if implemented. Axodus does not custody user funds by default for CEX API strategies.

## Strategy Types

Possible strategy types include CEX API bots, signal-only strategies, assisted execution, wallet-based strategies if implemented, dashboard tools, and educational simulators.

## Eligibility

Eligibility may depend on `$Neurons` balance, Academy trading risk course completion, Proof of Knowledge, subscription, promotional campaign, milestone unlock, governance-approved access, beta invite, waitlist, or risk acknowledgement.

Eligibility does not reduce trading risk and does not imply profit.

## Onboarding Flow

Users should read strategy descriptions and risk disclosures, complete Academy or risk modules when required, confirm that there is no profit guarantee, connect exchange accounts if supported, configure API keys with least privilege, disable withdrawals, accept or set risk parameters, pass validation checks, start strategy or paper mode, monitor status, and retain the ability to pause or revoke access.

## Required Confirmations

Users should confirm trading risk, potential capital loss, no profit guarantee, backtest limitations, API permissions, disabled withdrawal permissions where possible, exchange terms, leverage and liquidation risks for futures, no custody by default, and revocation ability.

## User Controls

Controls should include visible strategy status, user pause, API key revocation guidance, position limits, drawdown warnings, leverage limits, liquidation warnings, exchange error alerts, incident notices, performance context, and always-available risk disclosure.

## Risks

Risks include user capital loss, API key misconfiguration, leverage liquidation, exchange outages, strategy regime failure, overuse, overleverage, and user misunderstanding.

## Related Pages

- [Access Model](access-model.md)
- [CEX API Security](cex-api-security.md)
- [Compliance and User Disclosures](compliance-and-user-disclosures.md)
- [Academy Overview](../academy/overview.md)
