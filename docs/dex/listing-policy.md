# Listing Policy

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX / Governance

---

## Purpose

Token availability on a DEX must not imply endorsement. Listing policy defines how tokens are categorized, verified, warned, restricted, or removed.

## Listing Statuses

Use `Official`, `Verified`, `Community`, `Unverified`, `Warning`, `Restricted`, `Deprecated`, or `Blocked`.

## Review Fields

Listing review should include token symbol, name, chain, contract address, requester, official source, metadata status, contract verification, ownership or admin risk, liquidity context, holder distribution if relevant, security flags, scam or impersonation risk, governance status, listing status, warnings, reviewer, and review date.

## Review Flow

1. Listing request or token is detected.
2. Contract address is verified.
3. Metadata is checked.
4. Official source is checked for official claims.
5. Risk flags are generated.
6. Governance review is routed if official or incentivized.
7. Listing status is assigned.
8. UI warnings are configured where needed.
9. Record is archived.

## Official Asset Requirements

Official assets require project or governance confirmation, verified contract address, correct chain, accurate metadata, security notes, official source references, and governance approval where the asset is represented as official Axodus infrastructure.

## Risk Considerations

Listing risk includes impersonation tokens, honeypots, low liquidity, admin controls, misleading metadata, and endorsement confusion.
