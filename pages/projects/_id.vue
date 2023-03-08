<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">Project Overview</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <section class="section">
          <div class="header">
            <b-icon icon="android-messages"></b-icon>
            <p class="heading6 heading-space">{{ project.name }}</p>
          </div>
        </section>
        <section class="section">
          <div class="header">
            <b-icon icon="text"></b-icon>
            <p class="heading6 heading-space">Description</p>
          </div>
          <div class="content">
            <div>
              {{ project.description }}
            </div>
            <div class="media-tiles">
              <media-thumbnail :media="media"></media-thumbnail>
              <media-thumbnail :media="media"></media-thumbnail>
            </div>
          </div>
        </section>
        <section class="section">
          <b-steps
            type="is-success"
            :has-navigation="false"
            :mobile-mode="null"
          >
            <b-step-item label="Sent" icon="send"></b-step-item>
            <b-step-item label="Accepted" icon="check-bold"></b-step-item>
            <b-step-item label="Payed" icon="cash"></b-step-item>
          </b-steps>
        </section>
        <section class="section">
          <div class="header">
            <b-icon icon="format-list-bulleted-square"></b-icon>
            <p class="heading6 heading-space">Activities</p>
          </div>
          <div class="content">
            <div class="activities">
              <user-activity></user-activity>
              <user-comment class="activities-spacing"></user-comment>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-one-fifth">
        <section>
          <p class="heading6">Status</p>
          <div class="newNotification">
            <span class="newSpan">{{ project.status }}</span>
          </div>
        </section>
        <section>
          <p class="heading6 spacing">Members</p>
          <div class="members">
            <div class="tile is-2 profilepic-holder member-item">
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <img
                    class="profilepic"
                    src="https://cdn.octape.io/logo/LogoZonderTekst.jpg"
                  />
                </article>
              </div>
            </div>
            <div class="tile is-2 profilepic-holder member-item">
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <img
                    class="profilepic"
                    src="https://cdn.octape.io/logo/LogoZonderTekst.jpg"
                  />
                </article>
              </div>
            </div>
          </div>
        </section>
        <b-modal :active.sync="isFieldModalActive">
          <upload-form @cancel="handleCancelAddField" />
        </b-modal>
        <section>
          <p class="heading6 spacing">Actions</p>
          <cta-button
            text="Add Attachments"
            class="add-button"
            @click.native="isFieldModalActive = true"
          ></cta-button>
          <cta-button text="Add Members" class="add-button"></cta-button>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/models/project'
import MediaThumbnail from '@/components/common/media-thumbnail.vue'
import UserComment from '@/components/common/user-comment.vue'
import UserActivity from '@/components/common/user-activity.vue'
import CtaButton from '@/components/common/cta-button.vue'
import UploadForm from '@/components/upload-form.vue'

export default Vue.extend({
  name: 'Discover',
  components: {
    MediaThumbnail,
    UserComment,
    UserActivity,
    CtaButton,
    UploadForm,
  },
  async fetch() {
    this.loading = true
    this.project = await this.$axios.$get<Project>(
      'hemera/projects/' + this.$route.params.id
    )
    this.loading = false
  },
  data() {
    return {
      project: {} as Project,
      loading: false,
      isFieldModalActive: false,
      media: {
        name: 'Screenshot',
      },
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
      this.$fetch()
      return await this.$axios.$delete('hemera/projects' + id)
    },
  },
  // @ts-ignore
  head: {
    title: 'Project',
  },
})
</script>

<style scoped lang="scss">
section {
  padding-left: 0 !important;
}
.section {
  padding: 10px 10px 10px 0 !important;
}
.heading6 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
}
.newNotification {
  margin-top: 8px !important;
  .newSpan {
    background: #d5fad1;
    padding: 4px 12px;
    border-radius: 4px;
    color: #23b715;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
  }
}
.header {
  display: flex;
}
.heading-space {
  padding-left: 20px;
}
.content {
  padding-top: 10px;
  padding-left: 45px;
}
.media-tiles {
  display: flex;
}
.spacing {
  padding-top: 25px;
}
.activities-spacing {
  padding-top: 15px;
}
.tile {
  padding: 0;
  background: none;
}
.members {
  display: flex;
  .member-item {
    margin-right: 10px;
  }
}
.add-button {
  margin-bottom: 15px;
}
</style>
