<template>
  <div class="card">
    <div class="container">
      <header class="card-header">
        <p class="card-header-title">Add project</p>
      </header>
      <div class="card-content">
        <b-notification
          v-if="error"
          type="is-danger"
          has-icon
          aria-close-label="Close notification"
          role="alert"
          class="notification-box"
        >
          Incorrect email or password, please check your credentials.
        </b-notification>
        <b-loading :active="loading"></b-loading>
        <form @submit.prevent="handleAddproject">
          <!-- -- name --------------------- -->
          <input-field
            :value="name"
            label="Name*"
            type="text"
            placeholder="Project name"
            class="input-field"
            @change.native="name = $event.target.value"
          ></input-field>
          <!-- -- description -------------- -->
          <input-field
            :value="name"
            label="Description"
            type="text"
            placeholder="Project sescription"
            class="input-field"
            @change.native="description = $event.target.value"
          ></input-field>
          <!-- -- description -------------- -->
          <input-field
            :value="name"
            label="Contributors"
            type="textarea"
            placeholder="Project contributors"
            class="input-field"
            @change.native="contributors = $event.target.value"
          ></input-field>
        </form>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" @click="handleAddproject">Add</a>
        <a class="card-footer-item" @click="$emit('cancel')">Cancel</a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputField from '@/components/common/input-field.vue'

export default Vue.extend({
  name: 'ProjectForm',
  components: { InputField },
  data() {
    return {
      loading: false,
      name: '',
      description: '',
      contributors: [],
      error: '',
    }
  },
  methods: {
    async handleAddproject() {
      this.loading = true
      this.contributors = this.$auth.user.id
      const project = {
        owner: this.$auth.user.id,
        name: this.name,
        description: this.description,
        contributors: [this.contributors],
      }
      const resp = await this.$axios
        .$post('hemera/projects', project)
        .catch((err) => (this.error = err.message))

      if (resp.id) {
        this.$router.push('/projects/' + resp.id)
      }
    },
  },
  head: {
    title: 'Projects',
  },
})
</script>

<style scoped lang="scss">
.card {
  width: 30vw;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.13));
  border-radius: 8px;
  transition: 0.2s;
  margin: 20px 10px;
}
.input-field {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
