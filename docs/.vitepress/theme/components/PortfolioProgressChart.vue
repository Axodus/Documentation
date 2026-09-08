<script setup lang="ts">
import { computed, ref } from 'vue'

type Nucleus = {
  name: string
  completeness: number
  maturity: string
  state: string
  boundary: string
}

const nuclei: Nucleus[] = [
  { name: 'Governance', completeness: 70, maturity: 'L5 / D3', state: 'Hold / no mutation authority', boundary: 'Execution gated' },
  { name: 'AxodusAPP', completeness: 70, maturity: 'L4 Consolidated / D3+', state: 'Portfolio intelligence hub', boundary: 'Non-production / execution gated' },
  { name: 'Trading', completeness: 65, maturity: 'L4 Candidate / D3', state: 'Hold / execution blocked', boundary: 'Non-production / high risk' },
  { name: 'Dex', completeness: 65, maturity: 'L4 Readiness / D3', state: 'Read-only provider reliability ready', boundary: 'Non-production / execution gated' },
  { name: 'Core', completeness: 65, maturity: 'L5 / D3', state: 'Hold', boundary: 'Non-production / execution gated' },
  { name: 'Marketplace', completeness: 60, maturity: 'L4 Consolidated / D4', state: 'Hold / backlog ready', boundary: 'Non-production / execution gated' },
  { name: 'Documentation', completeness: 60, maturity: 'L4 Readiness / D2', state: 'Active documentation platform', boundary: 'Publication authority unresolved' },
  { name: 'Business', completeness: 55, maturity: 'L4 Consolidated / D2', state: 'Consolidated, non-executive', boundary: 'Non-executive' },
  { name: 'Academy', completeness: 55, maturity: 'L4 Consolidated / D3+', state: 'Complete, non-production', boundary: 'No production authority' },
  { name: 'ACS', completeness: 50, maturity: 'L4 Readiness / D3+', state: 'Paused / handed off', boundary: 'No mutation authority / execution gated' },
  { name: 'Defi', completeness: 45, maturity: 'L4 Consolidated / D unassessed', state: 'Gated', boundary: 'Financial gates closed' },
  { name: 'Mining', completeness: 45, maturity: 'L4 Consolidated / D3+', state: 'Complete, non-production', boundary: 'No production authority' },
  { name: 'BBA-Agency', completeness: 45, maturity: 'L3 / D2', state: 'Hold / preparation', boundary: 'Non-production' },
  { name: 'Lottery', completeness: 45, maturity: 'L3 / D2', state: 'Hold', boundary: 'High risk / non-production' }
]

const selectedName = ref(nuclei[0].name)
const average = (nuclei.reduce((sum, nucleus) => sum + nucleus.completeness, 0) / nuclei.length).toFixed(1)
const selected = computed(() => nuclei.find((nucleus) => nucleus.name === selectedName.value) ?? nuclei[0])
</script>

<template>
  <section class="portfolio-progress" aria-labelledby="portfolio-progress-title">
    <div class="portfolio-progress-heading">
      <div>
        <p class="ux-section-index">01 / Development evidence</p>
        <h2 id="portfolio-progress-title">Portfolio development snapshot</h2>
      </div>
      <p>
        An equal-weight view of documented functional-completeness estimates across
        14 assessed nuclei. Select a nucleus to inspect its documented state.
      </p>
    </div>

    <div class="portfolio-progress-summary">
      <div>
        <span>Documented average</span>
        <strong>{{ average }}%</strong>
      </div>
      <p>
        Percentage baseline: <time datetime="2026-06-30">30 June 2026</time>.
        Status context: <time datetime="2026-09-07">7 September 2026</time>.
      </p>
      <p>Institutional is not assessed and is excluded from the average.</p>
    </div>

    <div class="portfolio-progress-grid" aria-label="Functional completeness by nucleus">
      <button
        v-for="nucleus in nuclei"
        :key="nucleus.name"
        class="portfolio-progress-row"
        :class="{ 'is-selected': nucleus.name === selectedName }"
        type="button"
        :aria-pressed="nucleus.name === selectedName"
        :aria-label="`${nucleus.name}: ${nucleus.completeness}% documented functional completeness. Select for details.`"
        @click="selectedName = nucleus.name"
      >
        <span class="portfolio-progress-name">{{ nucleus.name }}</span>
        <span class="portfolio-progress-track" aria-hidden="true">
          <span class="portfolio-progress-fill" :style="{ width: `${nucleus.completeness}%` }"></span>
        </span>
        <span class="portfolio-progress-value">{{ nucleus.completeness }}%</span>
      </button>
    </div>

    <div class="portfolio-progress-detail" aria-live="polite">
      <p><strong>{{ selected.name }}</strong> · {{ selected.completeness }}% documented functional completeness</p>
      <dl>
        <div><dt>Maturity</dt><dd>{{ selected.maturity }}</dd></div>
        <div><dt>Documented state</dt><dd>{{ selected.state }}</dd></div>
        <div><dt>Authority boundary</dt><dd>{{ selected.boundary }}</dd></div>
      </dl>
    </div>

    <p class="portfolio-progress-note">
      This chart displays recorded estimates of functional completeness, informed
      by implementation and validation evidence. These percentages were not
      reassessed during the September status review. They do not measure
      production readiness, financial authority, security
      certification, or live execution. No assessed nucleus is production-authorized.
      <a href="https://github.com/Axodus/.github/blob/390f110/PORTFOLIO_PROGRESS_2026-09-07.md">Read the snapshot methodology</a>.
    </p>
  </section>
</template>
