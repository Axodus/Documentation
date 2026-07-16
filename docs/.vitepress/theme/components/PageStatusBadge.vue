<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { isDisplayStatus, STATUS_PRESENTATION } from '../status'

const props = withDefaults(defineProps<{
  status: string
  compact?: boolean
}>(), {
  compact: false
})

const presentation = computed(() => (
  isDisplayStatus(props.status) ? STATUS_PRESENTATION[props.status] : undefined
))
</script>

<template>
  <a
    v-if="presentation"
    class="page-status-badge"
    :class="[presentation.className, { 'page-status-badge-compact': compact }]"
    :href="withBase('/overview/documentation-status')"
    :aria-label="`${status}. ${presentation.description} Read documentation status guidance.`"
    :title="presentation.description"
  >
    <span class="page-status-icon" aria-hidden="true">{{ presentation.icon }}</span>
    <span>{{ status }}</span>
  </a>
</template>
