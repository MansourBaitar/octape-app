<template>
  <div class="error-page">
    <svg class="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ff7979"
        fill-opacity="1"
        d="M0,160L80,165.3C160,171,320,181,480,170.7C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>
    <div class="spacer"></div>

    <div class="error-wrapper">
      <h1 class="title">{{ $route.query.title }}</h1>
      <p class="subtitle">{{ $route.query.message }}</p>
      <b-button type="is-danger" @click="$router.push('/')">GO TO DASHBOARD</b-button>
    </div>

    <div class="spacer"></div>

    <svg class="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ff7979"
        fill-opacity="1"
        d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,277.3C672,299,768,309,864,293.3C960,277,1056,235,1152,224C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ErrorPage',
  layout: 'empty',
  head() {
    return {
      title: 'Something Went Wrong',
    }
  },
})
</script>

<style scoped lang="scss">
$color: #ff7979;

.error-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-wrapper {
  text-align: center;
  padding: unset;
}
</style>
