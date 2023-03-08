<template>
  <div class="contrainer">
    <div class="columns">
      <div class="column">
        <h1 class="title">Preferences</h1>
      </div>
    </div>
    <section class="tiles columns is-multiline">
      <div class="tile-grid column">
        <preference-tile name="Account" icon="account" />
        <preference-tile name="Notifications" icon="bell" />
        <preference-tile name="Privacy" icon="bell" />
        <preference-tile name="Security" icon="lock" />
        <preference-tile name="Socials" icon="account-group" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PreferenceTile from '@/components/common/preference-tile.vue'

export default Vue.extend({
  name: 'Preferences',
  components: { PreferenceTile },
  data() {
    return {}
  },
  head: {
    title: 'Preferences',
  },
})
</script>

<style scoped lang="scss">
.tiles {
  display: flex;
}
.tile-grid {
  display: contents;
}
</style>
