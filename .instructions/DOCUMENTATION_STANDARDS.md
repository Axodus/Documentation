# Documentation Standards

Status: Active
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Core

---

## Language Standard

All final documentation files must be written in English.

## Markdown Standard

Use clean Markdown with a clear heading hierarchy. Avoid excessive bolding, official-document emojis, and dense formatting. Use tables only when they improve clarity. Use diagrams only when helpful. Mermaid diagrams may be used in VitePress documentation when they clarify architecture or workflow.

## File Naming

Use lowercase kebab-case for documentation files where possible:

- `governance-overview.md`
- `treasury-policy.md`
- `business-runtime.md`
- `academy-token-flow.md`

Root-level canonical files may use uppercase names:

- `README.md`
- `ROADMAP.md`
- `SECURITY.md`
- `CONTRIBUTING.md`
- `GOVERNANCE.md`
- `ARCHITECTURE.md`
- `GLOSSARY.md`

## Document Header

Every major document should include:

```md
# Document Title

Status: Draft
Version: 0.1.0
Last Updated: YYYY-MM-DD
Owner: Axodus Core / Specific Nucleus

---
```

## Status Labels

Use these labels consistently:

- Draft
- Active
- Deprecated
- Needs Review
- Planned
- Historical Reference

## Writing Rules

Documentation must explain purpose before mechanics, separate concepts from implementation, mark unfinished areas, and avoid presenting planned systems as deployed systems.

Do not claim integrations are live unless verified. Do not promise returns, APY, passive income, or risk-free results. DeFi, trading, treasury, and token-related documents must include risk context.
