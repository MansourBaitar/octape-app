<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div>
          <h1 class="title">Feed</h1>
        </div>
        <div>
          <feed-card></feed-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FeedCard from '@/components/common/feed-card.vue'

export default Vue.extend({
  name: 'FSeed',
  components: { FeedCard },
  async fetch() {},
  data() {
    return {}
  },
  methods: {},
  head: {
    title: 'Feed',
  },
})
</script>

<style scoped lang="scss"></style>
