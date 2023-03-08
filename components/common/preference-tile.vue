<template>
  <div class="card">
    <b-icon class="tile-icon" :icon="icon" size="is-large" type="is-primary">
    </b-icon>
    <p class="tile-text">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PreferenceTile',
  props: {
    name: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  width: 270px;
  height: 270px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 24px 24px 24px 12px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.13));
  border-radius: 8px;
  transition: 0.2s;
}
.tile-icon {
  color: #f1c40f !important;
  height: 56px;
  width: 56px;
  padding-bottom: 16px;
}
.tile-text {
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
