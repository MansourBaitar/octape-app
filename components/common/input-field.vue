<template>
  <div class="input-field">
    <b-field :label="label">
      <input class="input" :type="type" :placeholder="placeholder" />
    </b-field>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
.input-field {
}
input {
  background: #f1f0f9;
  border: 1px solid #cfcaea;
  box-sizing: border-box;
  border-radius: 8px;
}
input:focus {
  outline: none;
  border: 2px solid #a067ce;
  box-shadow: none;
}
</style>
