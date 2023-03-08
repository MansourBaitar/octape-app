<template>
  <dashboard-card :title="service" color="#95a5a6">
    <!-- -- project info ------------------- -->
    <div class="pair">
      <span class="key">Project</span>
      <span class="value">{{ project }}</span>
    </div>

    <!-- -- subscription activated date ---- -->
    <div class="pair">
      <span class="key">Subscription Activated</span>
      <span class="value">{{ createdFromNow }}</span>
    </div>

    <!-- -- refresh interval --------------- -->
    <div class="pair">
      <span class="key">Refresh Interval</span>
      <span class="value"
        >Every {{ intervalText }} on the {{ refreshOrdinal }}</span
      >
    </div>

    <!-- -- progress bar ------------------- -->
    <div v-if="daysPassed !== 0">
      <p class="detail">Time remaing until subscription will be refreshed</p>
      <b-progress
        size="is-small"
        :type="progressType"
        :value="daysPassed"
        :max="maxValue"
      ></b-progress>
    </div>
    <p class="detail has-text-danger has-text-centered" v-else>
      Subscription will be refreshed today
    </p>

    <!-- -- admin options ------------------ -->
    <!-- <div class="admin-buttons">
      <b-button icon-left="pencil"></b-button>
      <b-button
        icon-left="delete"
        type="is-danger"
        outlined
      ></b-button>
    </div> -->

    <!-- -- footer ------------------------- -->
    <template v-slot:footer>
      {{ footerText }}, you will receive an invoice by mail.
    </template>
  </dashboard-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DashboardCard from '@/components/dashboard-card.vue'
import moment from 'moment'
import {
  getDaysPassed,
  getLastInvoiceDate,
  getDaysFrom,
  tryParseDate,
} from '~/util/date'
import { ordinalSuffixOf } from '~/util/formatter'

export default Vue.extend({
  name: 'SubscriptionCard',
  components: { DashboardCard },
  props: {
    project: String,
    activated: String,
    interval: Number,
    refreshOn: Number,
    service: String,
  },
  data: function () {
    return {
      last: new Date(),
    }
  },
  fetch() {
    this.last = getLastInvoiceDate(
      tryParseDate(this.activated),
      this.refreshOn,
      this.interval
    )
  },
  computed: {
    createdFromNow(): string {
      return moment(this.activated).fromNow()
    },
    intervalText(): string {
      return this.interval === 1 ? 'month' : `${this.interval} months`
    },
    daysPassed(): number {
      return getDaysPassed(this.last)
    },
    maxValue(): number {
      return getDaysFrom(this.last, this.interval)
    },
    progressType(): string {
      const scale = this.daysPassed / this.maxValue
      if (scale > 0.85) return 'is-danger'
      else if (scale > 0.7) return 'is-warning'
      else return 'is-success'
    },
    refreshOrdinal(): string {
      return ordinalSuffixOf(this.refreshOn)
    },
    footerText(): string {
      return this.daysPassed !== 0
        ? `Subscription will be refreshed in ${
            this.maxValue - this.daysPassed
          } days`
        : 'Subscription is being renewed'
    },
  },
})
</script>

<style scoped lang="scss">
// -- key value pair -----------------------
.pair {
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;

  .key {
    color: $primary;
  }
}

// -- detail -------------------------------
p.detail {
  font-size: 0.8rem;
  margin: 1rem 0 0 0;
  color: $grey;
}

// -- admin buttons ------------------------
.admin-buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
}
</style>
