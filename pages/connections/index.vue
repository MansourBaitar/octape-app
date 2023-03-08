<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">Connections</h1>
      </div>
    </div>
    <div class="columns is-multiline">
      <!-- <div v-if="projects.length > 0" class="project-grid column">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <connection-card :project="project" />
        </div>
      </div>
      <div v-else>
        <h3 class="no-items">No connection were found!</h3>
      </div> -->
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
      <connection-card class="connection" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConnectionCard from '@/components/common/connection-card.vue'
export default Vue.extend({
  name: 'Clients',
  components: { ConnectionCard },
  head: {
    title: 'Manage Clients',
  },
})
</script>

<style scoped lang="scss">
.connection {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
