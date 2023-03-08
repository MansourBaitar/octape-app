<template>
  <div>
    <div class="select" >
      <b-field label="Label">
      <select>
        <option selected disabled hidden>Select</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped lang="scss">
 select{
  width: 570px;
  border: 1px solid #CFCAEA;
  background: #F1F0F9;
}
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #A067CE;
    margin-top: 24px;
}
select:focus {
  box-shadow: none;
  outline: unset;
  border: 2px solid #A067CE;
}
.select {
  margin-bottom: 48px!important;
}
</style>
