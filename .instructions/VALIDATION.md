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
