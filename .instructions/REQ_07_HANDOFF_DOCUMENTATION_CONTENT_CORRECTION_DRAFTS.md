# REQ-07 Handoff - Documentation Content Correction Drafts

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

## Handoff Decision

REQ-07 handoff status:

`PROCEED_WITH_CONDITIONS`

Reason:

REQ-06 completed content inventory and editorial gap analysis without critical source-of-truth blockers, critical leakage, or obvious fake guarantee/audit/production-ready blockers in representative review. Conditions remain because many pages mention high-risk topics and must preserve conservative draft/gated language or receive review before stronger claims are introduced.

## Files Eligible for Correction

Initial P1 candidates:

- `docs/business/client-lifecycle.md` - PLACEHOLDER; returns, treasury, tokenomics, governance
- `docs/governance/accountability.md` - PLACEHOLDER; returns, treasury, tokenomics, governance
- `docs/security/disclosure-policy.md` - PLACEHOLDER; audits, security, legal
- `docs/security/overview.md` - PLACEHOLDER; treasury, governance, audits, security
- `docs/tokenomics/overview.md` - PLACEHOLDER; APY, returns, treasury, tokenomics
- `docs/tokenomics/supply-and-emission.md` - PLACEHOLDER; returns, treasury, tokenomics, governance

P2 candidates include high-risk pages listed in `.instructions/DOCUMENTATION_CONTENT_INVENTORY.md` and category groups in `.instructions/DOCUMENTATION_HIGH_RISK_CLAIMS_REGISTER.md`.

Thin P2 candidates:

- `docs/accountability/release-notes.md`
- `docs/accountability/roadmap-updates.md`
- `docs/accountability/governance-records.md`
- `docs/accountability/financial-reports.md`
- `docs/security/api-security.md`
- `docs/security/wallet-security.md`
- `docs/security/frontend-security.md`
- `docs/security/trading-api-security.md`
- `docs/security/smart-contract-security.md`

Coverage candidates to add or explicitly defer:

- `docs/mcp/`
- `docs/compute/`

## Files Blocked from Unreviewed Correction

Files that mention treasury, tokenomics, governance authority, security, wallets, trading, DEX/swaps, payouts, settlement, lottery, mining rewards, legal/compliance, audits, or production readiness require review-aware conservative edits. They are not blocked from draft cleanup, but they are blocked from strengthened claims without approval.

## Recommended Correction Order

1. P1 placeholder/To Be Defined pages.
2. Security contact/disclosure policy language, with security review.
3. Pages with draft/planned/future maturity mismatch.
4. High-risk financial/tokenomics/treasury/trading/swap/payout pages, preserving conservative wording.
5. Duplicate/overlap terminology alignment across repeated page types.
6. Normalize sensitive-page labels such as `Draft`, `Planned`, `Active if Verified`, `Requires Governance Review`, `Requires Security Review`, and `Requires Legal/Compliance Review`.

## Allowed Correction Types

- clarify draft/candidate/planned status;
- remove or soften unsupported claims;
- add missing disclaimers;
- replace placeholder text;
- align terminology;
- clarify review requirements;
- mark pages as needing owner/security/governance/financial/legal review.

## Forbidden Correction Types

- publication;
- APY or return promises;
- investment advice;
- unsupported security/audit claims;
- production-readiness claims;
- claims that wallet signing, treasury actions, trading, swaps, payouts, settlement, or on-chain writes are enabled;
- package, deployment, CI/CD, runtime, or navigation changes unless a future request explicitly scopes them.

## Validation Requirements for REQ-08

REQ-08 must validate links, terminology, claim safety, maturity alignment, no secrets, no operational leakage, nav/sidebar consistency, and alignment with global and nucleus instructions.

## No-Publication Boundary

REQ-07 may prepare draft/candidate content corrections only. Publication remains disabled and requires separate approval.
