<template>
  <div>
    <!-- -- messages ----------------------- -->
    <section class="center vertical messages">
      <b-message
        type="is-warning"
        title="Currently In Development"
        has-icon
        aria-close-label
      >
        The Octape Platform is currently in development and may experience bugs
        or problematic issues.
        {{ this.$store.store }}
      </b-message>
    </section>

    <!-- -- info cards --------------------- -->
    <section class="columns">
      <div class="column is-3">
        <activity-card />
      </div>
      <div class="column is-3">
        <billing-card />
      </div>
      <div class="column is-3">
        <activity-card />
      </div>
      <div class="column is-3">
        <billing-card />
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column"><line-chart-card /></div>
        <div class="column"><line-chart-card /></div>
      </div>
    </section>
  </div>
</template>

<script>
import BillingCard from '@/components/billing-card.vue'
import ActivityCard from '@/components/activity-card.vue'
import LineChartCard from '@/components/charts/line-chart-card.vue'

export default {
  name: 'HomePage',
  components: { BillingCard, ActivityCard },
  data() {
    return {
      loading: false,
      number1: 0,
      number2: 0,
      result: 0,
    }
  },
  methods: {
    plus() {
      console.log(this.number1, this.number2)
      this.result = Number(this.number1) + Number(this.number2)
    },
    maal() {
      this.result = Number(this.number1) * Number(this.number2)
    },
    min() {
      this.result = Number(this.number1) - Number(this.number2)
    },
    delen() {
      this.result = Number(this.number1) / Number(this.number2)
    },
  },
  head: {
    title: 'Dashboard',
  },
}
</script>

<style lang="scss" scoped>
article.message {
  width: 100%;
  margin-bottom: 1.5rem;
}
</style>
