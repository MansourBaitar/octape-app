<script>
import { Radar } from 'vue-chartjs'

export default {
  name: 'RadarChart',
  extends: Radar,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>

<style lang="scss" scoped></style>
