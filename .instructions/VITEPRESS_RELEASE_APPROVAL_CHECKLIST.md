# VitePress Release Approval Checklist

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

Publication command status:

`NOT AUTHORIZED IN REQ-09`

| Section | Status | Evidence Required | Reviewer | Blocker Condition | Resolution Path |
|---|---|---|---|---|---|
| 1. Source and branch verification | REQUIRED | Git branch, commit SHA, clean status, changed file list | Documentation Coordinator | Dirty or unknown source state | Resolve source state before release request |
| 2. VitePress build validation | REQUIRED | Build command, exit code, warnings, output path | Documentation Coordinator / QA | Build not run, failed, stale, or warning not accepted | Run approved local build validation |
| 3. Link/navigation validation | REQUIRED | Static or build-backed link/nav report | Documentation Coordinator | Missing route, broken link, or unresolved anchor risk | Fix or explicitly block publication |
| 4. Content quality validation | REQUIRED | Content quality validation report | Documentation Coordinator | Draft content not validated | Execute content validation |
| 5. Claim-safety validation | REQUIRED | Claim-safety report and high-risk register | Documentation Coordinator / domain reviewers | Unsafe or unsupported claim | Remove, soften, block, or route for review |
| 6. Security/secrets scan | REQUIRED | Secret scan result with no stop-level exposure | Security reviewer | Secret, key, token, endpoint, or operational leak | Stop, remove exposure, rotate if applicable |
| 7. Financial/compliance review | CONDITIONAL_REQUIRED | Approval note for APY, returns, treasury, tokenomics, payouts, trading, financial claims | Financial/compliance reviewer | Review missing for sensitive claim | Route review or remove claim |
| 8. Governance review | CONDITIONAL_REQUIRED | Approval note for governance, DAO, approval, execution receipt, treasury authority claims | Governance reviewer | Governance claim lacks evidence | Route review or remove claim |
| 9. Coordinator approval | REQUIRED | Explicit coordinator approval reference | Coordinator | Approval missing | Do not publish |
| 10. Publication command authorization | REQUIRED | Exact command, operator, target, timestamp window | Coordinator / Release operator | Command not authorized | Do not run command |
| 11. Rollback readiness | REQUIRED | Rollback owner, rollback steps, trigger list | Release operator / Coordinator | Rollback path unknown | Define rollback before release |
| 12. Post-publication audit | REQUIRED | Audit checklist, owner, timeframe | Documentation Coordinator | Audit not assigned | Assign before release |

## Checklist Rule

Every required item must be complete or explicitly accepted by the coordinator before a publication execution request may run.
