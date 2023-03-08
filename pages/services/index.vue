<template>
  <div>
    <action-bar>
      <action-link label="Register Service" icon="plus" />
    </action-bar>
    <section class="section">
      <h1 class="title">Services</h1>
      <p class="subtitle">
        an overview of all services provided by
        <b>Octape</b>
      </p>
    </section>
    <div class="box">
      <b-table :loading="loading" striped hoverable mobile-cards>
        <template>
          <b-table-column field="identification" label="Identification">ID</b-table-column>
          <b-table-column field="description" label="Description">Description</b-table-column>
          <b-table-column field="pricePerMonth" numeric label="PPM">€ 100.00</b-table-column>
          <b-table-column label="Actions" numeric width="10%">
            <b-button icon-left="pencil" size="is-small" type="is-text"></b-button>
            <b-button icon-left="delete" size="is-small" outlined type="is-danger"></b-button>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServicePage',
  head: {
    title: 'Manage Services',
  },
  data() {
    return {
      loading: false,
    }
  },
})
</script>

<style scoped></style>
