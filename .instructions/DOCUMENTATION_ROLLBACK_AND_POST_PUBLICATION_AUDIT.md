# Documentation Rollback and Post-Publication Audit

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

## Rollback Triggers

Rollback or emergency correction is required when published documentation contains:

- unsupported financial claim;
- incorrect governance authority claim;
- incorrect production-readiness claim;
- security-sensitive leak;
- broken navigation after publication;
- wrong deployment target;
- outdated or misleading tokenomics/treasury statement;
- legal/compliance concern;
- unsupported APY, return, yield, profit, payout, settlement, swap, trading, wallet, or on-chain execution claim;
- unapproved audit, security, partner, or launch claim.

## Rollback Authority

Rollback may be initiated by:

- Documentation Coordinator;
- Portfolio Coordinator;
- Security reviewer for security-sensitive leaks;
- Legal/compliance reviewer for legal/compliance blockers;
- domain owner for materially incorrect domain claims.

Coordinator confirmation should be recorded unless immediate emergency takedown is required to prevent harm.

## Rollback Evidence Required

- affected route or page;
- issue summary;
- severity;
- publication version;
- source commit;
- rollback target;
- rollback operator;
- approval or emergency reason;
- post-rollback verification result.

## Publication Audit Checklist

After publication, verify:

- expected target is live;
- published version matches source commit;
- homepage and changed routes load;
- nav/sidebar routes resolve;
- high-risk pages remain within approved wording;
- no unapproved generated artifacts or build warnings were introduced;
- no secrets or operational details are exposed;
- rollback path remains available.

## Post-Publication Monitoring

Monitor:

- broken links or routing errors;
- user-visible incorrect claims;
- stale maturity labels;
- security disclosure issues;
- complaints or review feedback;
- mismatch between published docs and source-of-truth records.

## Correction Workflow

1. Record issue and severity.
2. Identify affected route and owner.
3. Decide patch, rollback, or retraction.
4. Obtain required approval.
5. Apply correction in source.
6. Validate locally.
7. Publish only through approved workflow.
8. Record post-correction audit.

## Emergency Takedown Workflow

Emergency takedown may be used for secret exposure, legal/compliance blocker, severe financial/governance misclaim, unsafe execution instruction, or wrong deployment target.

Emergency takedown must preserve evidence without copying secret values into reports.

## Accountability Reporting

Every rollback, correction, or takedown should produce an accountability record with:

- issue;
- decision;
- owner;
- affected route;
- source commit;
- action taken;
- validation evidence;
- follow-up prevention step.
