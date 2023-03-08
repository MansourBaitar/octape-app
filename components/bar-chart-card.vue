<template>
  <dashboard-card
    title="Discover"
    icon="chart-timeline-variant"
    color="#33d9b2"
  >
    <bar-chart
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
import BarChart from '@/components/bar-chart.vue'

export default Vue.extend({
  name: 'BarChartCard',
  components: { DashboardCard, BarChart },
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
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
            ],
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
  height: 100m;
}
</style>
