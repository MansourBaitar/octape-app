<template>
  <div>
    <div class="card">
      <user-activity></user-activity>
      <section class="message-text">
        <p>
          Sollicitudin risus nisl mollis purus nibh est. Sem nunc in sed
          ultricies malesuada consequat a elit ultricies. Lectus in etiam eget
          consequat iaculis ut et...
        </p>
      </section>
    </div>
    <div class="card">
      <user-activity></user-activity>
      <section class="message-text">
        <p>
          Sollicitudin risus nisl mollis purus nibh est. Sem nunc in sed
          ultricies malesuada consequat a elit ultricies. Lectus in etiam eget
          consequat iaculis ut et...
        </p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserActivity from '@/components/common/user-activity.vue'

export default Vue.extend({
  name: 'FeedCard',
  components: {
    UserActivity,
  },
})
</script>

<style scoped lang="scss">
.card {
  margin-top: 30px;
  min-width: 700px;
  max-width: 700px;
  padding: 25px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.13));
  border-radius: 8px;
  transition: 0.2s;
  padding-bottom: 16px;
  .message-text {
    margin-top: 20px;
  }
}
</style>
