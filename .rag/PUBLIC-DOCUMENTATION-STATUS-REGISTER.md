# PUBLIC-DOCUMENTATION-STATUS-REGISTER

## Purpose

Freeze the current public status baseline before any remediation batch.

## Status Register Rules

- `CANONICAL_CURRENT` is reserved for pages whose governed metadata and current
  wording are both stable enough for public use without immediate status repair.
- `CANONICAL_WITH_QUALIFICATION` marks pages that are canonical, but whose
  wording still needs stronger maturity, prototype, or evidence qualifiers.
- `BASELINE_REFERENCE` marks pages used for navigation or directory support.
- `ACTIVE_IF_VERIFIED` marks pages whose topics could be interpreted as active,
  but must remain contingent on evidence and deployment context.
- `REVIEW_REQUIRED`, `CLAIM_REVIEW_REQUIRED`, and `BOUNDARY_REVIEW_REQUIRED`
  mark pages or domains that must not be treated as fully settled.

## Domain Status Freeze

| Domain | Current freeze status | Reason |
| --- | --- | --- |
| `overview` | `CANONICAL_WITH_QUALIFICATION` | Contains canonical controls, but also ungoverned public entry pages. |
| `governance` | `CANONICAL_WITH_QUALIFICATION` | Core surface is present, but governance activation and body maturity remain sensitive. |
| `tokenomics` | `BOUNDARY_REVIEW_REQUIRED` | Public-safe status needs stricter qualifier consistency. |
| `treasury` | `BOUNDARY_REVIEW_REQUIRED` | Financial and operational interpretation remains sensitive. |
| `trading` | `CLAIM_REVIEW_REQUIRED` | User-facing and internal-execution language can be over-read as operational. |
| `mining` | `CLAIM_REVIEW_REQUIRED` | Costs, rewards, and operations language can be over-read as active or verified. |
| `lottery` | `BOUNDARY_REVIEW_REQUIRED` | Prize, activation, and compliance language require stronger safety review. |

## Page-Level Freeze for Priority Controls

| Path | Frozen class | Notes |
| --- | --- | --- |
| `docs/index.md` | `CANONICAL_WITH_QUALIFICATION` | Canonical landing page, but still `DRAFT`. |
| `docs/overview/documentation-status.md` | `CANONICAL_CURRENT` | Current control page for interpreting status labels. |
| `docs/overview/risk-notices.md` | `CANONICAL_CURRENT` | Current reusable public-risk control page. |
| `docs/overview/core-principles.md` | `CANONICAL_CURRENT` | Stable principle layer. |
| `docs/overview/ecosystem-overview.md` | `CANONICAL_WITH_QUALIFICATION` | Canonical overview, but still vulnerable to over-reading of ecosystem readiness. |
| `docs/overview/documentation-standards.md` | `REVIEW_REQUIRED` | Has front matter markers missing from the current extraction baseline and needs normalization. |
| `docs/overview/terminology.md` | `REVIEW_REQUIRED` | Priority terminology surface without governed metadata. |
| `docs/overview/product-map.md` | `REVIEW_REQUIRED` | High-value public map without governed metadata. |
| `docs/overview/constitutional-model.md` | `REVIEW_REQUIRED` | High-value overview page without governed metadata. |
| `docs/governance/overview.md` | `CANONICAL_WITH_QUALIFICATION` | Canonical overview, but active-governance interpretation still needs tighter framing. |
| `docs/tokenomics/overview.md` | `CANONICAL_WITH_QUALIFICATION` | Canonical overview, but must remain concept-sensitive and non-operational by default. |
| `docs/treasury/overview.md` | `CANONICAL_WITH_QUALIFICATION` | Canonical overview with financial-sensitivity qualifiers still required. |
| `docs/trading/overview.md` | `ACTIVE_IF_VERIFIED` | Publicly useful, but easy to over-read as evidence of live trading systems. |
| `docs/mining/overview.md` | `ACTIVE_IF_VERIFIED` | Publicly useful, but easy to over-read as evidence of active mining operations. |
| `docs/lottery/overview.md` | `ACTIVE_IF_VERIFIED` | Publicly useful, but easy to over-read as evidence of active lottery availability. |

## Requests Status Freeze

All current `requests/` files are frozen as:

- `DRAFT`
- `EXPERIMENTAL`
- private/internal workflow only

No current request file authorizes public activation language, public
production claims, or disclosure expansion by itself.
