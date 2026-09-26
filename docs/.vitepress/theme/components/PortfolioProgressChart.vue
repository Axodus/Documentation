<script setup lang="ts">
import { computed, ref } from 'vue'

type Nucleus = {
  name: string
  score: number
  internalScore: string
  readiness: string
  boundary: string
}

const nuclei: Nucleus[] = [
  { name: 'Core', score: 72.3, internalScore: '72.2500%', readiness: 'PRE_RC_NON_PRODUCTION', boundary: 'Non-production / execution gated' },
  { name: 'Governance', score: 72.3, internalScore: '72.2500%', readiness: 'HOLD_NO_MUTATION_AUTHORITY', boundary: 'Execution gated / no mutation authority' },
  { name: 'Documentation', score: 79.3, internalScore: '79.2500%', readiness: 'ACTIVE_PLATFORM_RELEASE_GATED', boundary: 'Publication and release gated' },
  { name: 'Dex', score: 74.8, internalScore: '74.7500%', readiness: 'READ_ONLY_PROVIDER_RELIABILITY_READY', boundary: 'Read-only / execution gated' },
  { name: 'Defi', score: 67.5, internalScore: '67.5000%', readiness: 'CONSOLIDATED_NON_PRODUCTION_GATED', boundary: 'Financial gates closed' },
  { name: 'AxodusAPP', score: 79.3, internalScore: '79.2500%', readiness: 'PORTFOLIO_INTELLIGENCE_HUB_NON_PRODUCTION', boundary: 'Non-production / execution gated' },
  { name: 'Business', score: 74.8, internalScore: '74.7500%', readiness: 'CONSOLIDATED_NON_EXECUTIVE', boundary: 'Non-executive' },
  { name: 'Marketplace', score: 68.8, internalScore: '68.7500%', readiness: 'CONSOLIDATED_WITH_VALIDATION_REGRESSION', boundary: 'Non-production / settlement gated' },
  { name: 'Academy', score: 62.8, internalScore: '62.7500%', readiness: 'INSTITUTIONAL_SITE_NON_PRODUCTION', boundary: 'Non-production / integration gated' },
  { name: 'Mining', score: 79.3, internalScore: '79.2500%', readiness: 'COMPLETE_NON_PRODUCTION', boundary: 'No production authority / payout gated' },
  { name: 'ACS', score: 61.8, internalScore: '61.8000%', readiness: 'PAUSED_NO_MUTATION_AUTHORITY', boundary: 'No mutation authority / execution gated' },
  { name: 'Trading', score: 70.9, internalScore: '70.9000%', readiness: 'CORE_COMPLETE_REAL_CAPITAL_BLOCKED', boundary: 'Non-production / real-capital blocked' },
  { name: 'BBA-Agency', score: 67.5, internalScore: '67.5000%', readiness: 'MOCK_LOCAL_PREPARATION', boundary: 'Non-production' },
  { name: 'Lottery', score: 67.5, internalScore: '67.5000%', readiness: 'MOCK_LOCAL_RECOVERY', boundary: 'High risk / non-production' },
  { name: 'Institutional', score: 75.0, internalScore: '75.0000%', readiness: 'EDITORIAL_FOUNDATION_EXTERNAL_RELEASE_BLOCKED', boundary: 'External publication blocked' }
]

const selectedName = ref(nuclei[0].name)
const average = '71.6'
const selected = computed(() => nuclei.find((nucleus) => nucleus.name === selectedName.value) ?? nuclei[0])
</script>

<template>
  <section class="portfolio-progress" aria-labelledby="portfolio-progress-title">
    <div class="portfolio-progress-heading">
      <div>
        <p class="ux-section-index">01 / Development evidence</p>
        <h2 id="portfolio-progress-title">Portfolio development progress</h2>
      </div>
      <p>
        The canonical v1 score is calculated from 15 equal-weight programs. Select
        a program to inspect its score and readiness boundary.
      </p>
    </div>

    <div class="portfolio-progress-summary">
      <div>
        <span>Canonical portfolio score</span>
        <strong>{{ average }}%</strong>
      </div>
      <p>
        Methodology: <code>axodus-portfolio-development-progress/v1</code>.
        Canonical baseline: <time datetime="2026-09-26">26 September 2026</time>.
      </p>
      <p>15 programs, equal exact weight <code>1/15</code>; Institutional is included.</p>
    </div>

    <div class="portfolio-progress-grid" aria-label="Canonical development score by program">
      <button
        v-for="nucleus in nuclei"
        :key="nucleus.name"
        class="portfolio-progress-row"
        :class="{ 'is-selected': nucleus.name === selectedName }"
        type="button"
        :aria-pressed="nucleus.name === selectedName"
        :aria-label="`${nucleus.name}: ${nucleus.score}% canonical development score. Select for details.`"
        @click="selectedName = nucleus.name"
      >
        <span class="portfolio-progress-name">{{ nucleus.name }}</span>
        <span class="portfolio-progress-track" aria-hidden="true">
          <span class="portfolio-progress-fill" :style="{ width: `${nucleus.score}%` }"></span>
        </span>
        <span class="portfolio-progress-value">{{ nucleus.score }}%</span>
      </button>
    </div>

    <div class="portfolio-progress-detail" aria-live="polite">
      <p><strong>{{ selected.name }}</strong> · {{ selected.internalScore }} canonical development score</p>
      <dl>
        <div><dt>Readiness state</dt><dd>{{ selected.readiness }}</dd></div>
        <div><dt>Authority boundary</dt><dd>{{ selected.boundary }}</dd></div>
      </dl>
    </div>

    <p class="portfolio-progress-note">
      This chart displays the deterministic v1 development score derived from the
      canonical manifest. The input manifest hash is
      <code>9390d8c0</code> and the calculator output hash is
      <code>3f5924c0</code>. The score does not measure production readiness,
      financial authority, security certification, or live execution. No program
      is production-authorized by this measurement.
      <a href="/overview/portfolio-development-progress">Read the methodology and migration record</a>.
    </p>
  </section>
</template>
