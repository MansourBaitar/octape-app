<template>
  <section class="box upload-box">
    <b-field class="upload-field">
      <b-upload v-model="dropFiles" multiple drag-drop>
        <section class="section upload-section">
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
      <span
        v-for="(file, index) in dropFiles"
        :key="index"
        class="tag is-primary"
      >
        {{ file.name }}
        <button
          class="delete is-small"
          type="button"
          @click="deleteDropFile(index)"
        ></button>
      </span>
    </div>
    <cta-button
      text="Upload"
      class="upload-button"
      @click.native="handleUpload(dropFiles)"
    ></cta-button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CtaButton from '@/components/common/cta-button.vue'

export default Vue.extend({
  name: 'UploadForm',
  components: { CtaButton },
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
    },
    async handleUpload(files: any) {
      console.log(files)
      const bodyFormData = new FormData()
      bodyFormData.append('file', files)
      this.$axios.setBaseURL('http://localhost:8080/')
      this.$axios.setHeader('Content-Type', 'multipart/form-data')
      const res = await this.$axios.$post('/storage/upload/', bodyFormData)
      console.log(res)
      this.$axios.setBaseURL(process.env.API_URL || 'https://api.octape.io/')
    },
  },
  head: {
    title: 'Upload',
  },
})
</script>

<style scoped lang="scss">
.upload-box {
  padding: 32px;
  margin: 0 auto;
  width: 30vw;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  padding-left: 32px !important;

  .upload-field {
    display: flex;
    justify-content: center;
    width: 30vw;
  }
  .upload-field.upload.upload-draggable {
    width: 80vw;
  }
  .upload-section {
    width: 20vw;
  }
  .upload-button {
    width: 70%;
    display: flex;
    justify-content: center;
  }
  .upload-files-box {
    width: 70vw;
  }
}
</style>
