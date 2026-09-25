# Documentation Development Statistics - 25 September 2026

## Scope and objective

Refresh the repository-review context in docs/index.md and
docs/.vitepress/theme/components/PortfolioProgressChart.vue, preserve all 14
historical estimates, and link the current organization review from the profile.
The 30 June baseline remains 56.8%; Institutional is unassessed and AgentsAI
is outside this baseline. No maturity or publication-state metadata is promoted.

## Validation

Documentation CLI check passed: zero errors/warnings. Generate --check returned
exit 0 with DRIFT and eight artifacts; this is not a clean generation result.
Generated files were preserved. VitePress build passed (exit 0, 27.25 seconds)
with a chunk-size warning. Final diff, relative-link and nonempty-report checks
passed; the 14 estimates still average 56.8%. Node emitted stream-fd warnings,
but the check and build both finished successfully. Browser layout was not
visually rechecked; this change only adjusts the date/caption.

## Publication and boundaries

The user explicitly authorized source commits/pushes in Documentation and the
two organization repositories for development statistics. This is not a new
deployed-site release, runtime activation or financial authorization.
The first source commit was already published; subsequent corrections preserve
its history through a merge and normal follow-up commits. No force-push occurred.

## Records

Updated index frontmatter review dates, chart review date/caption and task
DOC-20260925-001. The report source is the 25 September organization review.
Status: COMPLETE / LOCAL_VALIDATED_WITH_DOCUMENTED_DEFECTS. Source correction
pushed at 936bc9c; this closeout records validation. Deployed-site status is
unverified and production gates remain unchanged.
