<template>
  <dashboard-card
    title="Discover"
    icon="chart-timeline-variant"
    color="#33d9b2"
  >
    <radar-chart
      :data="data"
      :options="options"
      :style="{ height: '100%' }"
      class="radar-chart"
    />
  </dashboard-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardCard from '@/components/dashboard-card.vue'
import RadarChart from '@/components/radar-chart.vue'

export default Vue.extend({
  name: 'RadarChartCard',
  components: { DashboardCard, RadarChart },
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
            backgroundColor: ['rgba(54, 162, 235, 0.4)'],
            borderColor: ['rgba(54, 162, 235)'],
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
.radar-chart {
  box-sizing: border-box;
  height: 100%;
}
</style>
