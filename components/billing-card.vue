<template>
  <dashboard-card title="Billing" icon="credit-card" color="#ff6348">
    <template v-slot:footer>coming soon...</template>
  </dashboard-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardCard from '@/components/dashboard-card.vue'

export default Vue.extend({
  name: 'BillingCard',
  components: { DashboardCard },
})
</script>

<style scoped lang="scss"></style>
