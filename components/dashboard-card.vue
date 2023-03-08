<template>
  <div class="box">
    <!-- -- header ------------------------- -->
    <header>
      <h1 class="title">{{ title }}</h1>
      <b-icon v-if="icon" :icon="icon" :style="iconStyle"></b-icon>
    </header>

    <!-- -- body --------------------------- -->
    <div class="body">
      <slot />
    </div>

    <div class="spacer"></div>

    <!-- -- footer ------------------------- -->
    <footer :style="footerStyle">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Color from 'color'

export default Vue.extend({
  name: 'DashboardCard',
  props: {
    title: String,
    color: String,
    icon: {
      required: false,
      type: String,
    },
  },
  computed: {
    iconStyle(): Object {
      return {
        color: Color(this.color).darken(0.3),
        backgroundColor: Color(this.color).lighten(0.5),
      }
    },
    footerStyle(): Object {
      return {
        backgroundColor: Color(this.color).lighten(0.5),
        color: Color(this.color).darken(0.3),
      }
    },
  },
})
</script>

<style scoped lang="scss">
// -- box styling --------------------------
.box {
  padding: unset;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

// -- box header ---------------------------
.box header {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .title {
    color: darken($grey, 10%);
    font-size: 1rem;
    font-weight: 400;
    margin: unset;
  }

  .icon {
    padding: 1.25rem;
    border-radius: 1.25rem;
  }
}

// -- box body -----------------------------
.box .body {
  padding: 1rem;
}

// -- box footer ---------------------------
.box footer {
  padding: 1rem;
  font-size: 0.8rem;
}
</style>
