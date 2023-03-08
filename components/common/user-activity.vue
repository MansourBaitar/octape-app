<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-horizontal is-12">
        <div class="tile is-2 profilepic-holder">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <img
                class="profilepic"
                src="https://cdn.octape.io/logo/LogoZonderTekst.jpg"
              />
            </article>
          </div>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification col2">
            <p class="title">
              User498 <span class="subtitle">Attached screenshot236</span>
            </p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
          <article class="tile is-child notification col3">
            <p class="subtitle">2 days ago</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.profilepic {
  border-radius: 50%;
  max-width: 39px;
  max-height: 39px;
  position: relative;
  top: 0;
  left: 0;
  transform: translateX(7.5px) translateY(4.5px);
}
.profilepic-holder {
  max-width: 56px;
}
.tile {
  padding: 0;
  background: none;
  margin: 0 !important;
}
article {
  padding: 0 !important;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 0 !important;
}
.title {
  color: black;
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 0.5em !important;
}
.subtitle {
  color: #777777;
  font-size: 0.75em;
}
.col2 .subtitle {
  margin-top: 50px;
  color: #333333;
  font-weight: normal;
  font-size: 1em;
}
.is-ancestor {
  max-width: 329.5px;
  max-height: 48px;
}
</style>
