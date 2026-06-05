# Documentation Validation

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Candidate Validation

Before documentation is considered candidate:

- required `.instructions` files exist and are non-empty;
- status/version/owner metadata is present where appropriate;
- source-of-truth boundary is stated;
- no production or execution claim exceeds approved evidence;
- risk language is present for financial, token, treasury, trading, DeFi, DEX, mining, marketplace, lottery, and governance content;
- publication state is not overstated;
- blockers are recorded.

## Approved Validation

Before documentation is considered approved:

- candidate validation passes;
- required owner/reviewer/approver is identified;
- affected nucleus docs are checked for conflicts;
- global root `.instructions` are checked for portfolio status conflicts;
- Core source-of-truth and registry rules are checked for architecture claims;
- security-sensitive content receives safety review;
- unresolved blockers are either closed or explicitly accepted.

## Published Validation

Before documentation is published:

- approved validation passes;
- publication target is confirmed;
- VitePress route/publication target is identified;
- links/navigation are checked;
- public claims are reviewed;
- financial/token/legal/compliance claims are approved;
- version and publication date are recorded.

## Cross-Reference Validation

Check documentation against:

- global root `.instructions`;
- VitePress documentation source files;
- VitePress config and navigation/sidebar structure;
- legacy GitBook references only as deprecated historical context;
- nucleus-specific `.instructions`;
- financial/accountability docs;
- governance docs;
- Core source-of-truth and registry rules.

REQ-02A does not perform full VitePress alignment. That is REQ-03 scope.

## VitePress Validation Planning

VitePress validation should eventually confirm:

- documentation source tree exists;
- VitePress config exists;
- navigation/sidebar structure is coherent;
- internal links are valid;
- build command is known;
- build command is safe and local;
- publication target is documented;
- no production publication occurs without approval.

Do not run a VitePress build unless a future request explicitly permits it.

REQ-03 cross-references:

- `.instructions/VITEPRESS_ASSET_INVENTORY.md`
- `.instructions/VITEPRESS_ALIGNMENT.md`
- `.instructions/VITEPRESS_VALIDATION_PLAN.md`

REQ-03 required checks:

- VitePress config exists or absence is documented.
- Docs source root exists or absence is documented.
- Nav/sidebar paths are inventoried.
- Package scripts are inventoried.
- Asset/public directories are inventoried.
- Build command is known or unknown state is documented.
- Publication target is known or unknown state is documented.
- GitBook references are legacy-only.
- No secrets are present in docs/config inspected; sensitive keyword hits must be reviewed without copying secret values into reports.

REQ-03 result:

- VitePress config exists at `docs/.vitepress/config.mts`.
- Docs source root exists at `docs/`.
- Nav/sidebar are declared in `docs/.vitepress/config.mts`.
- Package scripts are known: `docs:dev`, `docs:build`, `docs:preview`.
- No source `docs/public`, `docs/assets`, `docs/images`, or `docs/img` directory was detected.
- Generated `docs/.vitepress/dist/` and `docs/.vitepress/cache/` exist locally and are ignored by git.
- Build command is known but not run.
- Publication target is not formally approved; `og:url` metadata references a Vercel URL, but no repo-local deployment workflow was found.
- GitBook references remain legacy-only or historical.

## Content Validation Requirements

Before content can be considered candidate, validate:

- internal links;
- navigation/sidebar consistency;
- terminology consistency;
- no unsupported APY or return promises;
- no investment advice;
- no unsupported security/audit claims;
- no production-readiness claims exceeding actual maturity;
- no execution claims for treasury, wallet, trading, swaps, payouts, or on-chain writes;
- no secrets or operational leakage;
- alignment with global `.instructions`;
- alignment with nucleus `.instructions`;
- alignment with the maturity register.

Content validation does not authorize publication.

Content validation must occur after content inventory, editorial gap analysis, and draft correction. Passing validation returns content to candidate state only unless publication is separately approved.

## REQ-04 Validation Ladder

1. Inventory validation.
2. Structural validation.
3. Link/navigation static validation.
4. Local build readiness.
5. REQ-05 build handoff.
6. Local build execution.
7. Content inventory.
8. Content correction.
9. Content validation.
10. Publication governance.

REQ-04 cross-references:

- `.instructions/VITEPRESS_STRUCTURE_VALIDATION.md`
- `.instructions/VITEPRESS_BUILD_READINESS.md`
- `.instructions/VITEPRESS_LINK_AND_NAVIGATION_REVIEW.md`
- `.instructions/REQ_05_HANDOFF_VITEPRESS_LOCAL_BUILD_VALIDATION.md`

REQ-04 result:

- Structure: PASS_WITH_WARNINGS.
- Link/navigation review: PASS_WITH_WARNINGS.
- Build readiness: READY_WITH_CONDITIONS.
- REQ-05 handoff: PROCEED_WITH_CONDITIONS.
- Local build execution: NOT RUN.

Local build readiness does not equal successful build.

Successful local build does not equal publication approval.

Publication approval requires explicit authorization.

## Local Build Validation Requirements

REQ-05 evidence files:

- `.instructions/VITEPRESS_LOCAL_BUILD_VALIDATION.md`
- `.instructions/VITEPRESS_BUILD_OUTPUT_REVIEW.md`
- `.instructions/REQ_06_HANDOFF_DOCUMENTATION_CONTENT_INVENTORY.md`

Before running build:

- REQ-04 handoff must be PROCEED or PROCEED_WITH_CONDITIONS.
- Build command must be known.
- No install may be required.
- Dependencies must already be available.
- Command must not publish or deploy.
- Output path must be known or discoverable.
- Pre-build git status must be recorded.

After running build:

- Build result must be recorded.
- Warnings/errors must be summarized.
- Output directory must be inspected.
- Generated artifacts must not be staged.
- Post-build git status must be recorded.
- REQ-06 handoff must be created.

REQ-05 result:

- Build result: PASS_WITH_WARNINGS.
- Build command: `npm run docs:build`.
- Generated output reviewed: YES.
- Generated artifacts staged: NO.
- REQ-06 handoff: PROCEED_WITH_WARNINGS.

Passing local build does not authorize publication, content approval, production-readiness claims, or execution-sensitive claims.

## REQ-06 Content Inventory Validation

REQ-06 is valid when:

- all detected Markdown pages are inventoried;
- nav/sidebar coverage is documented;
- placeholders and empty pages are flagged;
- high-risk claims are registered;
- editorial gaps are documented;
- REQ-07 handoff exists;
- no content rewrite was performed;
- publication remains disabled.

REQ-06 result:

- Markdown pages inventoried: 248.
- Nav/sidebar targets detected: 248.
- Missing nav/sidebar targets: 0.
- Orphan pages: 0.
- Placeholder or empty pages flagged: 6.
- Editorial gap analysis: COMPLETE.
- High-risk claims register: COMPLETE.
- REQ-07 handoff: PROCEED_WITH_CONDITIONS.

REQ-06 inventory and gap analysis do not authorize publication, claim approval, production readiness, or content rewrites outside a future scoped request.

## REQ-07 Draft Correction Validation

REQ-07 is valid when:

- every changed file is listed in `DOCUMENTATION_DRAFT_CHANGELOG.md`;
- claim changes are documented in `DOCUMENTATION_CLAIM_RESOLUTION_NOTES.md`;
- high-risk claims are removed, softened, disclaimed, blocked, or marked for review;
- no package files changed;
- no publication occurred;
- REQ-08 handoff exists.

REQ-07 result:

- Correction plan: COMPLETE.
- Draft changes applied: YES.
- Changed content files listed: 15.
- High-risk claims resolved: PARTIAL.
- REQ-08 handoff: PROCEED_WITH_WARNINGS.

REQ-07 does not replace REQ-08 content quality validation.

## Validation Checklist

- [ ] Required `.instructions` files exist.
- [ ] Required `.instructions` files are non-empty.
- [ ] Source-of-truth hierarchy is documented.
- [ ] Ownership and approval rules are documented.
- [ ] Versioning states are documented.
- [ ] Publication boundaries are documented.
- [ ] Security boundaries are documented.
- [ ] Task register exists.
- [ ] Blocker register exists.
- [ ] Recovery report exists.
- [ ] No runtime code changed.
- [ ] No package files changed.
- [ ] No build/test/install/service command run.
- [ ] No publication executed.
- [ ] No secrets touched.
- [ ] No execution-sensitive behavior enabled.

## REQ-02 Safe Validation Commands

```bash
DOCS_WORKSPACE="/opt/Axodus/Documentation"
DOCS_INSTRUCTIONS="$DOCS_WORKSPACE/.instructions"

test -d "$DOCS_WORKSPACE"
test -d "$DOCS_INSTRUCTIONS"

for f in \
README.md \
STATUS.md \
ROADMAP.md \
WORKFLOW.md \
SOURCE_OF_TRUTH.md \
OWNERSHIP.md \
VERSIONING.md \
VALIDATION.md \
PUBLICATION_BOUNDARIES.md \
SECURITY.md \
TASK_REGISTER.md \
BLOCKER_REGISTER.md
do
  test -s "$DOCS_INSTRUCTIONS/$f"
done

test -s "$DOCS_INSTRUCTIONS/reports/REQ_02_DOCUMENTATION_NUCLEUS_RECOVERY_L3_TO_L4_REPORT_2026-06-04.md"
find "$DOCS_INSTRUCTIONS" -maxdepth 2 -type f | sort
```

## Forbidden Validation

Do not run builds, package installs, package tests, publishing commands, deployment commands, services, migrations, trading scripts, swap scripts, settlement scripts, wallet scripts, or on-chain commands unless a future request explicitly approves them.
