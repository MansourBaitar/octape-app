<template>
  <div>
    <div class="select" >
      <select>
        <option selected disabled hidden>Select</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped lang="scss">
.select select{
  width: 176px;
}
</style>
