# REQ-03 - Documentation Asset Inventory & VitePress Alignment - 2026-06-04

## Purpose

Create a complete inventory and alignment baseline for the active Axodus VitePress documentation system without publishing documentation, changing package files, running builds, or changing runtime/product behavior.

## Baseline

| Field | Value |
|---|---|
| Workspace | `/opt/Axodus/Documentation` |
| Resolved path | `/mnt/d/Rede/Github/Axodus/Documentation` |
| Starting commit | `8c704a239e6739e26c8c073b021a94452f26a278` |
| Active platform | VitePress |
| GitBook status | Legacy / not active |
| Starting maturity | L4 candidate |
| Root `/opt/Axodus` Git status | Not a Git repository |

## Files Inspected

- `package.json`
- `package-lock.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `README.md`
- `ROADMAP.md`
- `.gitignore`
- `docs/`
- `docs/index.md`
- `docs/.vitepress/config.mts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/custom.css`
- `docs/.vitepress/dist/`
- `docs/.vitepress/cache/`
- `.instructions/`
- root `/opt/Axodus/.instructions`

No package files, runtime files, deployment files, or product code were edited.

## Files Created

- `.instructions/VITEPRESS_ASSET_INVENTORY.md`
- `.instructions/VITEPRESS_ALIGNMENT.md`
- `.instructions/VITEPRESS_VALIDATION_PLAN.md`
- `.instructions/reports/REQ_03_DOCUMENTATION_ASSET_INVENTORY_AND_VITEPRESS_ALIGNMENT_2026-06-04.md`

## Files Updated

Documentation `.instructions`:

- `.instructions/STATUS.md`
- `.instructions/ROADMAP.md`
- `.instructions/WORKFLOW.md`
- `.instructions/VALIDATION.md`
- `.instructions/PUBLICATION_BOUNDARIES.md`
- `.instructions/TASK_REGISTER.md`
- `.instructions/BLOCKER_REGISTER.md`

Root local docs:

- `/opt/Axodus/.instructions/PORTFOLIO_STATUS.md`
- `/opt/Axodus/.instructions/PORTFOLIO_ROADMAP.md`
- `/opt/Axodus/.instructions/ECOSYSTEM_STATUS.md`
- `/opt/Axodus/.instructions/BLOCKER_REGISTER.md`

Root updates remain local and unversioned because `/opt/Axodus` is not a Git repository.

## Bub-Agent Usage

Read-only BUB agents were used:

| Agent | Role | Result |
|---|---|---|
| BUB-01 | VitePress structure auditor | Confirmed source root, config, scripts, mixed npm/pnpm evidence, no repo-local CI/deploy config, generated ignored dist/cache. |
| BUB-02 | Navigation/sidebar inventory auditor | Confirmed config nav/sidebar locations, home page, 248 Markdown source pages, no missing configured local Markdown targets by static inspection, thin/placeholder docs. |
| BUB-03 | Documentation governance alignment reviewer | Confirmed hierarchy and approval gates for Draft, Candidate, Approved, Published, and final L4 blockers. |

All BUB tasks were read-only. No subagent edited files, ran builds, installed dependencies, started services, or published documentation.

## VitePress Inventory Summary

| Area | Finding |
|---|---|
| Source root | `docs/` |
| Config | `docs/.vitepress/config.mts` |
| Home page | `docs/index.md` |
| Theme entry | `docs/.vitepress/theme/index.ts` |
| Theme CSS | `docs/.vitepress/theme/custom.css` |
| Markdown source pages | 248 under `docs/`, excluding cache/dist |
| Major content directories | `academy`, `accountability`, `acs`, `bba-agency`, `business`, `defi`, `dex`, `glossary`, `governance`, `lottery`, `marketplace`, `mining`, `overview`, `runtime`, `security`, `tokenomics`, `trading`, `treasury` |
| Package scripts | `docs:dev`, `docs:build`, `docs:preview` |
| Package evidence | `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`; package manager ownership remains ambiguous |
| Generated output | `docs/.vitepress/dist/` exists locally and is ignored |
| Vite cache | `docs/.vitepress/cache/` exists locally and is ignored |
| Source public/assets dirs | No `docs/public`, `docs/assets`, `docs/images`, or `docs/img` detected |
| CI/deploy config | No `.github/workflows`, `vercel.json`, `netlify.toml`, `wrangler.toml`, or `firebase.json` detected |
| Publication metadata | `og:url` points to `https://axodus-documentation.vercel.app/`, but this is metadata, not publication approval |

## Navigation and Link Inspection

- VitePress navigation and sidebar are declared in `docs/.vitepress/config.mts`.
- Static configured-link target inspection found no missing Markdown targets.
- BUB static scan reported 249 unique configured links and 0 missing Markdown targets.
- BUB body-reference scan reported 577 Markdown files scanned across the repo, excluding generated/vendor paths, and 0 missing local references by static path inspection.
- No VitePress build was run, so route behavior, anchors, redirects, theme behavior, and build correctness are not proven.

## Placeholder and Thin Content Findings

| Finding | Impact | Follow-up |
|---|---|---|
| `docs/security/disclosure-policy.md` is an explicit placeholder. | Blocks final publication-quality security claim. | Fill in a scoped security/docs request. |
| Several security pages are short. | Requires review before final publication quality claim. | REQ-04/REQ-05 content quality review. |
| Several accountability pages are thin. | Public accountability claims need stronger source/evidence review. | REQ-04/REQ-05 content quality review. |
| `docs/index.md` marks site content as Draft. | Correctly prevents overclaiming publication status. | Preserve until approved publication. |

## Alignment Summary

VitePress is the active technical documentation surface, but it is governed by Documentation `.instructions`, root global `.instructions`, Core source-of-truth semantics, and nucleus-specific `.instructions`.

State model:

- Draft: file exists and is explicit about non-final status.
- Candidate: inventoried, structurally reviewed, source-aligned, and risk-labeled.
- Approved: candidate checks pass and required owner/reviewer/approver evidence exists.
- Published: approved content released through authorized publication workflow.
- Deprecated: retained only for historical context.

Documentation source changes do not equal publication approval.

A successful local build does not equal publication approval.

## Blockers

| Blocker | Status |
|---|---|
| VitePress build not run | Open |
| VitePress publication not approved | Open |
| Documentation publication authority not finalized | Open |
| Root global docs not formally versioned | Open |
| Placeholder security disclosure page | Open |
| Source public/assets policy undefined | Open |
| Navigation/sidebar structural build validation incomplete | Open |
| Deployment target and repo-local publication workflow unknown | Open |
| Package manager ownership ambiguous | Open |

## Validation Commands and Results

Inspection commands run:

```bash
cd /opt/Axodus/Documentation
pwd
git status --short --branch
git rev-parse HEAD
find . -maxdepth 3 -type f | sort | sed -n '1,240p'
find . -maxdepth 5 -type f \( -iname '*vitepress*' -o -path '*/.vitepress/*' \) | sort
find . -maxdepth 5 -type d \( -name '.vitepress' -o -name 'public' -o -name 'assets' -o -name 'images' -o -name 'img' -o -name 'docs' \) | sort
find /opt/Axodus/Documentation -maxdepth 5 -type f \( -name 'config.ts' -o -name 'config.mts' -o -name 'config.js' -o -name 'config.mjs' \) | sort
test -f package.json && sed -n '1,220p' package.json || true
rg -n "vitepress|docs:|build|preview|dev|sidebar|nav|themeConfig|public|assets|GitBook|gitbook" . 2>/dev/null || true
rg -n "PRIVATE KEY|private_key|SECRET|TOKEN|PASSWORD|MNEMONIC|SEED|API_KEY|ACCESS_KEY|BEGIN RSA|BEGIN PRIVATE|wallet|credential" .instructions README.md docs .vitepress .github package.json 2>/dev/null || true
```

Static path checks:

- Configured VitePress link targets: no missing Markdown targets found.
- Empty source docs excluding generated cache/dist: none found.
- Sensitive keyword scan returned policy/content references to wallets, credentials, private keys, and similar topics, but no secret values were copied into this report and no stop-level secret exposure was identified from the inspected output.

Final validation run after edits:

```bash
cd /opt/Axodus/Documentation
test -s .instructions/VITEPRESS_ASSET_INVENTORY.md
test -s .instructions/VITEPRESS_ALIGNMENT.md
test -s .instructions/VITEPRESS_VALIDATION_PLAN.md
test -s .instructions/reports/REQ_03_DOCUMENTATION_ASSET_INVENTORY_AND_VITEPRESS_ALIGNMENT_2026-06-04.md
rg -n "VitePress|vitepress" .instructions
rg -n "GitBook|gitbook" .instructions || true
git diff --check -- .instructions
git status --short --branch
```

Root validation:

```bash
cd /opt/Axodus
git status --short --branch || true
test -d .instructions
test -f .instructions/PORTFOLIO_STATUS.md
test -f .instructions/PORTFOLIO_ROADMAP.md
test -f .instructions/BLOCKER_REGISTER.md
```

Expected root Git result: `/opt/Axodus` is not a Git repository.

Final validation result:

- Required VitePress inventory/alignment/validation/report files exist and are non-empty.
- VitePress references are present across Documentation `.instructions`.
- GitBook references remain in legacy, deprecated, historical, or report context only.
- `git diff --check -- .instructions` passed.
- Root validation confirmed required global docs exist and root Git status returns the expected non-Git repository message.

## Boundaries Preserved

- No VitePress build run.
- No VitePress dev or preview server run.
- No documentation published.
- No package files changed.
- No lockfiles changed.
- No dependency install run.
- No deployment configuration changed.
- No GitHub Actions or CI/CD behavior changed.
- No Git initialized at `/opt/Axodus`.
- No folders moved.
- No reports deleted.
- No runtime product code changed.
- No secrets touched.
- No production configs enabled.
- No wallet signing, treasury movement, trading, swaps, payouts, settlement, or on-chain writes enabled.

## Maturity Result

Documentation remains L4 candidate.

REQ-03 reduces asset/inventory uncertainty but does not promote Documentation to final L4.

Final L4 remains blocked by REQ-04 structural/local build readiness and REQ-05 publication governance/release workflow evidence.

## Final Status

REQ-03: COMPLETE.

Next recommended request:

REQ-04 - VitePress Structural Validation & Local Build Readiness.
