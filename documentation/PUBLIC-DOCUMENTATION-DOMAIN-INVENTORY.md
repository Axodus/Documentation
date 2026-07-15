# PUBLIC-DOCUMENTATION-DOMAIN-INVENTORY

## Scope

`DOCUMENTATION-EPIC-05-REQ-01` baseline inventory for the public `docs/` corpus,
with priority attention on `overview`, `governance`, `tokenomics`, `treasury`,
`trading`, `mining`, `lottery`, and alignment signals from `requests/`.

## Corpus Totals

| Surface | Markdown files | Governed front matter | No governed front matter |
| --- | ---: | ---: | ---: |
| `docs/` | 267 | 244 | 23 |
| `requests/` | 16 | 16 | 0 |

## Priority Domain Inventory

| Domain | Files | Governed front matter | Immediate inventory reading |
| --- | ---: | ---: | --- |
| `overview` | 9 | 5 | Mixed canonical controls and unguided public entry pages. |
| `governance` | 13 | 12 | Strong canonical surface, but several concept-heavy pages still need explicit qualifiers. |
| `tokenomics` | 17 | 16 | Broad canonical surface with significant sensitivity and status risk. |
| `treasury` | 16 | 15 | Broad canonical surface with financial and disclosure sensitivity. |
| `trading` | 15 | 14 | Broad canonical surface with operational-readiness and performance-claim risk. |
| `mining` | 23 | 22 | Largest priority domain; heavy exposure to operational and financial interpretation. |
| `lottery` | 21 | 20 | Large public surface with legal, prize, and activation-language sensitivity. |

## Priority Domain Classification Freeze

| Domain | Frozen baseline class | Notes |
| --- | --- | --- |
| `docs/overview/` | `CANONICAL_WITH_QUALIFICATION` | Core public control layer exists, but status language is not yet uniform across all pages. |
| `docs/governance/` | `CANONICAL_WITH_QUALIFICATION` | Governance overview is governed, but active-body interpretation risk remains in subpages. |
| `docs/tokenomics/` | `BOUNDARY_REVIEW_REQUIRED` | Private and public boundary remains highly sensitive; qualifiers are not yet uniformly explicit. |
| `docs/treasury/` | `BOUNDARY_REVIEW_REQUIRED` | Financial and operational interpretation risk remains high. |
| `docs/trading/` | `CLAIM_REVIEW_REQUIRED` | Operational, execution, and user-facing strategy language needs claim-strength review. |
| `docs/mining/` | `CLAIM_REVIEW_REQUIRED` | Profitability, operations, and product interpretation need qualifier review. |
| `docs/lottery/` | `BOUNDARY_REVIEW_REQUIRED` | Activation, prize, and compliance interpretation require stricter public-safe framing. |

## Ungoverned or Weakly Governed Priority Pages

These files lack governed front matter and therefore cannot be treated as fully
frozen canonical references without qualification:

| Path | Freeze class | Why |
| --- | --- | --- |
| `docs/overview/README.md` | `BASELINE_REFERENCE` | Directory helper, not a stable governed page. |
| `docs/overview/constitutional-model.md` | `REVIEW_REQUIRED` | Priority overview page without governed metadata. |
| `docs/overview/product-map.md` | `REVIEW_REQUIRED` | Public-facing status map without governed metadata. |
| `docs/overview/terminology.md` | `REVIEW_REQUIRED` | Priority terminology page without governed metadata. |
| `docs/governance/README.md` | `BASELINE_REFERENCE` | Directory helper. |
| `docs/tokenomics/README.md` | `BASELINE_REFERENCE` | Directory helper. |
| `docs/treasury/README.md` | `BASELINE_REFERENCE` | Directory helper. |
| `docs/trading/README.md` | `BASELINE_REFERENCE` | Directory helper. |
| `docs/mining/README.md` | `BASELINE_REFERENCE` | Directory helper. |
| `docs/lottery/README.md` | `BASELINE_REFERENCE` | Directory helper. |

## Requests Surface Inventory

| Request cluster | Files | Frozen reading |
| --- | ---: | --- |
| Track B governance mechanics | 4 | Private-only governance baseline workflow. |
| Track C tokenomics | 3 | Private-only tokenomics workflow gated by Track B closure. |
| Boundary and index | 2 | Private boundary enforcement and disclosure-index maintenance. |
| Sprint 02 sanitization | 7 | Private decision-only public sanitization governance. |

## Inventory Decision

`docs/` remains the canonical authority surface for public Axodus documentation
by scope. `requests/` remains a private execution-governance surface and must be
used for reconciliation signals, not for public content promotion.
