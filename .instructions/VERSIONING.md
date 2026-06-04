# Documentation Versioning

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Local Documentation Versioning Model

Every major documentation artifact should carry:

- Status;
- Version;
- Last Updated;
- Owner;
- Source references when applicable.

Version increments should reflect meaningful content changes, not formatting-only edits.

## Compatibility With REQ-01

REQ-01 found:

- Option B is preferred for global documentation versioning.
- Option C via Documentation is an acceptable fallback.
- Root Git initialization is not recommended.

Documentation nucleus may become the versioned home for global documentation only after coordinator approval. REQ-02 does not execute that migration.

## Version States

| State | Meaning |
|---|---|
| draft | Work in progress; not approved or published. |
| candidate | Structurally complete and ready for review. |
| approved | Reviewed and accepted for its defined scope. |
| published | Published through approved public documentation pipeline. |
| deprecated | Retired or superseded; retained only for history. |

## Repository Boundary

Documentation repository versioning does not solve `/opt/Axodus/.instructions` versioning by itself. A coordinator decision is required to define whether global docs are:

- kept local-only;
- moved to a dedicated repo;
- moved or mirrored under Documentation;
- moved or mirrored under Core;
- managed through another approved option.

## Root Git Boundary

Do not run `git init` at `/opt/Axodus`. Root Git initialization is not recommended unless explicitly approved with symlink/nested-repo safeguards.

## Publication Versioning

Published docs must record:

- publication target;
- status;
- version;
- owner;
- approval evidence;
- publication date;
- source references.

REQ-02 does not publish.
