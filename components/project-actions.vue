<template>
  <section class="box upload-box">
    <b-field class="upload-field">
      <b-upload v-model="dropFiles" multiple drag-drop>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    
    <div class="tags">
      <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
        {{file.name}}
        <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UploadForm',
  components: { },
  head: {
    title: 'Upload',
  },
  data() {
    return {
      loading: false,
      dropFiles: [],
      error: '',
    }
  },
  methods: {
    deleteDropFile(index: number) {
      this.dropFiles.splice(index, 1)
    }
  }
})
</script>

<style scoped lang="scss">
</style>
