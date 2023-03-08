<template>
  <dashboard-card
    title="Discover"
    icon="chart-timeline-variant"
    color="#33d9b2"
  >
    <line-chart
      :data="data"
      :options="options"
      :style="{ height: '18rem !important' }"
      class="line-chart"
    />
  </dashboard-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardCard from '@/components/dashboard-card.vue'
import LineChart from '@/components/line-chart.vue'

export default Vue.extend({
  name: 'LineChartCard',
  components: { DashboardCard, LineChart },
  data() {
    return {
      loading: false,
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Discovering Timeseries data',
            data: [12, 19, 22, 5, 2, 6, 8, 15, 10, 12, 55, 24],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderWidth: 1,
          },
        ],
      },
    }
  },
  computed: {
    options(): Object {
      return {
        responsive: true,
        maintainAspectRatio: false,
        beginAtZero: true,
      }
    },
  },
})
</script>

<style scoped>
.line-chart {
  box-sizing: border-box;
}
</style>
