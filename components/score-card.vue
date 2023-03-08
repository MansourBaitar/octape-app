<template>
  <dashboard-card title="Score" icon="scoreboard" color="#2ecc71">
    <template v-slot:footer>coming soon...</template>
  </dashboard-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardCard from '@/components/dashboard-card.vue'

export default Vue.extend({
  name: 'ScoreCard',
  components: { DashboardCard },
})
</script>

<style scoped lang="scss"></style>
