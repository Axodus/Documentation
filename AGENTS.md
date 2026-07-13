# Repository Guidelines

## Project Structure & Module Organization

Canonical VitePress content lives in `docs/`, grouped by ecosystem area such as `docs/governance/` and `docs/treasury/`. Root files (`README.md`, `ARCHITECTURE.md`, `SECURITY.md`) provide repository-wide guidance. Document-type collections—including `adr/`, `policies/`, `requirements/`, `research/`, and `operations/`—hold governed records; `Documents/` contains legacy or historical material. Reuse authoring patterns from `templates/`. Validation, generation, and CLI code lives in `tools/documentation/`, with tests in `tools/documentation/tests/`. Generated indexes and JSON artifacts at the root must not be edited manually.

## Build, Test, and Development Commands

Use Node.js 24 or newer and pnpm 11.1.2.

- `pnpm install --frozen-lockfile` installs the locked dependency set.
- `pnpm docs:dev` starts the VitePress development server.
- `pnpm docs:build` produces the static site and catches broken builds.
- `pnpm docs:check` runs the combined documentation checks.
- `pnpm docs:validate -- --summary` validates document metadata and content.
- `pnpm docs:validate:relationships -- --summary` checks cross-document links.
- `pnpm docs:generate:check` detects stale generated artifacts; run `pnpm docs:generate` to refresh them intentionally.
- `node --test tools/documentation/tests/*.test.js` runs the Node test suite.

## Coding Style & Naming Conventions

Write final-facing documentation in English using concise Markdown and a logical heading hierarchy. Prefer lowercase kebab-case filenames (`treasury-policy.md`); reserve uppercase names for canonical root documents. Major documents should follow the YAML front matter in `templates/`, including IDs, ownership, status, review dates, and relationships. JavaScript uses ES modules, two-space indentation, single quotes, and no semicolons, matching existing tooling.

## Testing Guidelines

Add `*.test.js` files under `tools/documentation/tests/` using `node:test` and `node:assert/strict`. Cover both valid inputs and expected diagnostic codes. Before submitting, run the relevant focused test plus `pnpm docs:check`, `pnpm docs:generate:check`, and `pnpm docs:build`.

## Commit & Pull Request Guidelines

Recent commits follow Conventional Commit-style subjects, commonly `docs(scope): ...` and `chore(docs): ...`; keep subjects imperative and focused. Pull requests should explain what changed and why, identify canonical or superseded files, link related issues or requirements, and call out uncertainty. Include screenshots for visible VitePress changes. Never add secrets, fabricated integrations, or guaranteed-profit/risk-free claims.
