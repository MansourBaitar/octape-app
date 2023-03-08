<template>
  <div>
    <input-field></input-field>
    <br />
    <input-small-select></input-small-select>
    <br />
    <input-select></input-select>
    <br />
    <input-text-area></input-text-area>
    <br />
    <media-thumbnail :media="media"></media-thumbnail>
    <br />
    <user-activity></user-activity>
    <br />
    <user-comment></user-comment>
    <br />
    <user-card></user-card>
    <br />
    <project-card :project="project"></project-card>
    <br />
    <cta-button></cta-button>
    <br>
    <user-menu :name="$auth.user.firstName"></user-menu>
    <br>
    <flip-switch></flip-switch>
    <br>
    <pager></pager>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputField from '@/components/common/input-field.vue'
import InputSmallSelect from '@/components/common/input-select-small.vue'
import InputSelect from '@/components/common/input-select.vue'
import InputTextArea from '@/components/common/input-text-area.vue'
import MediaThumbnail from '@/components/common/media-thumbnail.vue'
import UserActivity from '@/components/common/user-activity.vue'
import UserComment from '@/components/common/user-comment.vue'
import UserCard from '@/components/common/user-card.vue'
import ProjectCard from '@/components/common/project-card.vue'
import CtaButton from '@/components/common/cta-button.vue'
import FlipSwitch from '@/components/common/flip-switch.vue'
import Pager from '@/components/common/pager.vue'

export default Vue.extend({
  name: 'Configure',
  components: {
    InputField,
    InputSmallSelect,
    InputSelect,
    InputTextArea,
    MediaThumbnail,
    UserActivity,
    UserComment,
    UserCard,
    ProjectCard,
    CtaButton,
    FlipSwitch,
    Pager,
  },
  data() {
    return {
      media: {
        name: 'Screenshot',
      },
      project: {
        id: 'DSDSDD',
        name: 'PRoject Name',
        description: 'This is a project description',
        status: 'new',
      },
    }
  },
  head: {
    title: 'Configure',
  },
})
</script>

<style scoped lang="scss">

</style>
