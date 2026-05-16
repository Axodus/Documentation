# CEX API Security

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Trading / Security

---

## Purpose

CEX API security is one of the most important safety controls for user-facing trading strategies.

If users connect exchange accounts, API keys must use least privilege, be protected from exposure, and remain revocable.

## Scope

This page applies to centralized exchange API keys used for trading tools, bots, dashboards, monitoring, or strategy execution.

## API Key Definition

An API key is an exchange or service credential that allows a trading tool to access specific account functions. It is not a wallet private key, not withdrawal permission by default, and not proof that funds cannot be lost.

## Permission Model

Read permissions may support balances, positions, order status, and market data. Trade permissions may create, cancel, or manage orders if required. Withdrawal permissions should be disabled. Transfer permissions should be disabled unless absolutely required and reviewed.

Users should never share API secrets in public channels.

## Setup Guidance

Users should create a dedicated API key, enable only required permissions, disable withdrawals, restrict IP if supported and architecture allows, set exchange-level risk limits where available, rotate exposed keys, revoke unused keys, use paper or testnet mode when available, and review exchange terms.

## Storage Models

Possible storage models include user local storage, encrypted server storage if implemented, delegated connector if supported, or no-storage signal-only mode. Do not claim an API storage model until architecture is defined.

If Axodus stores keys, public documentation must explain security boundaries without exposing sensitive details.

## Safety Checks

Safety checks should include withdrawal permission check, required permission check, excessive permission warning, account mode check if available, futures warning if required, leverage warning, API connection test, order test or paper mode if available, and visible revocation guidance.

## Incident Response

If a key is exposed, users should revoke it immediately, strategy instances should pause where possible, and an incident record should be created. If withdrawal permission is enabled, the user should be warned and strategy access may be blocked or limited by policy.

Exchange API errors and unauthorized orders should trigger pause, notification, investigation, and key rotation where needed.

## Risks

Risks include key leaks, withdrawal-enabled keys, excessive permissions, exchange policy changes, storage breach, user device compromise, and phishing.

## Related Pages

- [User-Facing Strategies](user-facing-strategies.md)
- [Risk Management](risk-management.md)
- [Compliance and User Disclosures](compliance-and-user-disclosures.md)
- [Security Overview](../security/overview.md)
