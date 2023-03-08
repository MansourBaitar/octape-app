<template>
  <div>
    <div class="flipswitch">
      <input
        type="checkbox"
        name="flipswitch"
        class="flipswitch-cb"
        id="fs"
        checked
      />
      <label class="flipswitch-label" for="fs">
        <div class="flipswitch-inner"  @click="toggleActive"></div>
        <div class="flipswitch-switch" id="flipswitch-switch"  @click="toggleActive"></div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    toggleActive() {
      const switchButton = document.getElementById('flipswitch-switch')
      if (switchButton?.classList.contains('greyed-out')) {
        switchButton.classList.remove('greyed-out')
      } else {
        switchButton?.classList.add('greyed-out')
      }
    },
  },
})
</script>

<style scoped lang="scss">
.flipswitch {
  position: relative;
  width: 32px;
}
.flipswitch input[type='checkbox'] {
  display: none;
}
.flipswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0px solid #999999;
  border-radius: 50px;
}
.flipswitch-inner {
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}
.flipswitch-inner:before,
.flipswitch-inner:after {
  float: left;
  width: 50%;
  height: 14px;
  padding: 0;
  line-height: 14px;
  font-size: 18px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}
.flipswitch-inner:before {
  content: '';
  padding-left: 12px;
  background-color: #f9f1cf;
  color: #ffffff;
}
.flipswitch-inner:after {
  content: '';
  padding-right: 12px;
  background-color: #e8e8e8;
  color: #f9f1cf;
  text-align: right;
}
.flipswitch-switch {
  width: 22px;
  height: 22px;
  margin: -3.5px;
  background: #f1c40f;
  border: 0px solid #999999;
  border-radius: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  transition: all 0.3s ease-in 0s;
}
.greyed-out {
  background: #979797 !important;
}
.flipswitch-cb:checked .flipswitch-inner {
  background: #f1c40f !important;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {
  margin-left: 0;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {
  right: 0;
}
</style>
