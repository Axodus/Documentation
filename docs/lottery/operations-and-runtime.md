# Operations and Runtime

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / Runtime

---

## Purpose

Lottery operations require a disciplined runtime. A draw is a coordinated process involving configuration, ticket windows, randomness, result publication, claims, support, reporting, and incident handling.

## Operational Roles

Roles may include product owner, governance approver, draw operator, security reviewer, treasury reviewer, compliance reviewer, ACS support, and support operator.

## Runtime Phases

- Pre-draw: confirm game model, governance, compliance, security, configuration, rules, and disclosures.
- Ticket window: monitor ticket creation, payments if any, anomalies, and support needs.
- Close and index: close tickets, finalize valid tickets, generate Merkle root if applicable, and record ticket count.
- Randomness and result: request randomness, monitor fulfillment, compute result, and publish result.
- Claims: open claim window, monitor claims, handle failed claims, and track unclaimed prizes.
- Finalization: close claim window, apply unclaimed prize policy, reconcile treasury, publish draw report, and archive records.

## Incident Types

Incidents may include randomness delay, ticket indexing error, prize calculation error, claim failure, compliance pause, and security issue. Material incidents require reporting and escalation.

## Related Pages

- [Runtime Overview](../runtime/overview.md)
- [Draw Lifecycle](draw-lifecycle.md)
- [Reporting and Accountability](reporting-and-accountability.md)

## Release Gate

A draw runtime would require legal release for a named jurisdiction, defined
operator, eligibility, funding, ticket intake, randomness, claims, payout,
consumer protection, incident handling, audit records, and suspension
authority. None of these dependencies is inferred active. Until every gate is
formally cleared and evidenced, the runtime remains a prototype description
with no public participation or financial execution.

