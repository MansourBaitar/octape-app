<template>
  <dashboard-card title="Activity" icon="chart-timeline-variant" color="#33d9b2">
    <template v-slot:footer>comming soon...</template>
  </dashboard-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardCard from '@/components/dashboard-card.vue'

export default Vue.extend({
  name: 'ActivityCard',
  components: { DashboardCard },
})
</script>

<style scoped></style>
