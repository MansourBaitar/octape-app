<template>
  <div class="input-field">
    <b-button expanded class="button">{{ text }}</b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    text: {
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
.button {
  background: #f1c40f;
  border-radius: 8px;
  min-width: 100px;
  min-height: 45px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 0.85em;
}
.button:hover {
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
