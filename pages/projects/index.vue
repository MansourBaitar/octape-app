<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">All projects</h1>
      </div>
      <div class="column">
        <cta-button
          text="Add Project"
          class="add-button"
          @click.native="isFieldModalActive = true"
        ></cta-button>
      </div>
    </div>
    <b-modal :active.sync="isFieldModalActive" has-modal-card trap-focus>
      <project-form @cancel="handleCancelAddField" />
    </b-modal>
    <div class="columns is-multiline">
      <div v-if="projects.length > 0" class="project-grid column">
        <div v-for="project in projects" :key="project.id" class="project-card">
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
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/models/project'
import ProjectForm from '@/components/project-form.vue'
import ProjectCard from '@/components/common/project-card.vue'
import CtaButton from '@/components/common/cta-button.vue'

export default Vue.extend({
  name: 'Projects',
  components: { ProjectForm, ProjectCard, CtaButton },
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
      isFieldModalActive: false,
    }
  },
  methods: {
    handleCancelAddField() {
      this.isFieldModalActive = false
    },
    handleDeleteDialog(id: string) {
      this.$buefy.dialog.confirm({
        title: 'Delete',
        message:
          'Are you sure you want to <b>delete</b> this project? This action cannot be undone.',
        confirmText: 'Delete project',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.deleteProject(id),
      })
    },
    async deleteProject(id: string) {
      await this.$axios.$delete('hemera/projects' + id)
      //await this.$fetch()
      this.loading = true
    this.projects = await this.$axios.$get<Project[]>(
      'hemera/projects/all/' + this.$auth.user.id
    )
    this.loading = false
    },
  },
  head: {
    title: 'Projects',
  },
})
</script>

<style scoped lang="scss">
.no-items {
  color: grey;
  display: flex;
  justify-content: center;
}
.title {
  max-width: 200px;
}
.add-button {
  float: right;
}
.project-grid {
  display: contents;
}
</style>
