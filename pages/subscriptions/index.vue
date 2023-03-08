<template>
  <div>
    <action-bar>
      <action-link
        label="Create Subscription"
        icon="plus"
        @click="$router.push('/subscriptions/new')"
      />

      <template v-slot:right>
        <action-link label="Show all">
          <b-switch size="is-small" class="toggle" v-model="showAll" />
        </action-link>
      </template>
    </action-bar>

    <section class="section">
      <h1 class="title">Subscriptions</h1>
      <p class="subtitle">an overview of all active subscriptions</p>
    </section>

    <div class="subscription-grid">
      <b-loading :active="loading"></b-loading>
      <subscription-card
        :key="this.key"
        :service="this.service"
        :activated="this.activated"
        :interval="this.interval"
        :refreshOn="this.refreshOn"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SubscriptionCard from '@/components/subscription-card.vue'

export default Vue.extend({
  name: 'SubscriptionsPage',
  head: {
    title: 'Active Subscriptions',
  },
  components: { SubscriptionCard },
  data() {
    return {
      showAll: true,
      loading: false,
      subscriptions: [],
      key: '11111111',
      service: 'GOLD Service',
      activated: 'Thu Dec 15 2020 22:57:58 GMT+0100',
      interval: 1,
      refreshOn: 15,
    }
  },
})
</script>

<style scoped lang="scss">
// -- toggle button ------------------------
.toggle {
  margin-left: 0.5rem;
}

// -- subscription grid --------------------
.subscription-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
}
</style>
