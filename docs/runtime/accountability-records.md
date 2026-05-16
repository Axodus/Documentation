# Accountability Records

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime / Accountability

---

## Purpose

Runtime must end with records, not memory fragments. Accountability records preserve what happened, who approved it, what changed, what was delivered, what was executed, what remains unresolved, and where evidence can be found.

## Scope

This page defines operational records created by Runtime. Public reporting requirements are handled by the broader [Accountability](../accountability/overview.md) layer.

## Record Types

Runtime may create intake records, classification records, ACS analysis records, review records, scope records, approval records, change request records, milestone records, handoff records, delivery records, acceptance records, execution receipts, governance records, and final archive records.

## Minimum Accountability Record

Minimum records should include runtime identifier, title, type, requester, responsible nucleus, owner, final status, summary, key decisions, approvals, deliverables, evidence links, unresolved items, creation timestamp, and archive timestamp.

## Materiality Levels

- Low: minor documentation or internal updates; summary and archive may be enough.
- Medium: service delivery or non-sensitive feature; intake, scope, delivery, and acceptance records are expected.
- High: DAO services, plugin requests, reward policy, or Trading access policy; intake, classification, ACS review, governance or security review, scope, delivery, and acceptance records are expected.
- Critical: treasury actions, contract upgrades, governance execution, or sensitive ACS permissions; full audit trail, execution receipt, and public or governance accountability report may be required.

## Evidence Types

Evidence may include documents, code, commits, pull requests, releases, test results, transaction hashes, contract addresses, vote records, approval records, client acceptance, issue links, ACS analysis, risk reports, Coder handoffs, status updates, delay notices, and decision notices.

## Archive Rules

Completed material runtime items should be archived. Rejected or cancelled items should record reasons. Superseded items should link successors. Sensitive records should respect privacy and security. Public records must not expose secrets. Knowledge packs should update only after validation.

## Outputs by Nucleus

- Governance: proposal records, vote records, execution receipts, governance records.
- Business: intake records, scope records, change request records, delivery and acceptance records.
- Academy: reward policy records, course review records, tutor validation records.
- Trading: risk reports, strategy access records, API security confirmations.
- Treasury: allocation records, exposure reports, financial reports.
- ACS: agent output records, tool call logs, human review records, memory update records.
- Marketplace: listing records, fee policy records, dispute records.

## Anti-Patterns

Avoid decisions without records, execution without receipts, acceptance without scope, records without evidence, public records with secrets, and memory-only accountability.

## Related Pages

- [Governance Execution Receipts](../governance/execution-receipts.md)
- [Business Accountability](../business/accountability.md)
- [ACS Accountability](../acs/accountability.md)
- [Treasury Reporting and Accountability](../treasury/reporting-and-accountability.md)
