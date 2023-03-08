<template>
  <a class="menu-item" @click="toggleMenu">
    <b-icon icon="menu"></b-icon>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import Nav from '../store/nav'

export default Vue.extend({
  name: 'DropdownMenu',
  methods: {
    toggleMenu() {
      const nav = getModule(Nav, this.$store)
      nav.toggleNav()
    },
  },
})
</script>

<style scoped lang="scss">
// -- menu item ----------------------------
.menu-item {
  width: $header-height;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;

  @media only screen and (max-width: 1200px) {
    visibility: visible;
  }
}

// -- navigation bar -----------------------
</style>
