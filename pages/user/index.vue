<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">{{ $auth.user.firstName }}'s profile</h1>
      </div>
    </div>
    <section>
      <div class="columns">
        <div class="column">
          <user-card :name="$auth.user.firstName"></user-card>
        </div>
        <div class="column">
          <div class="columns is-multiline">
            <div v-if="projects.length > 0" class="project-grid column">
              <div
                v-for="project in projects"
                :key="project.id"
                class="project-card"
              >
                <project-card :project="project" />
              </div>
            </div>
            <div v-else>
              <h3 class="no-items">
                No projects were found, click add project to get started!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserCard from '@/components/common/user-card.vue'
import { Project } from '@/models/project'
import ProjectCard from '@/components/common/project-card.vue'

export default Vue.extend({
  name: 'UserProfile',
  components: { UserCard, ProjectCard },
  async fetch() {
    this.loading = true
    this.projects = await this.$axios.$get<Project[]>(
      'hemera/projects/all/' + this.$auth.user.id
    )
    this.loading = false
  },
  data() {
    return {
      projects: [] as Project[],
      loading: false,
    }
  },
  head: {
    title: 'User Profile',
  },
})
</script>

<style scoped lang="scss">
.project-grid {
  display: contents;
}
</style>
