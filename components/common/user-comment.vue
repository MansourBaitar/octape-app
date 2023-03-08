<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-horizontal is-12">
        <div class="tile is-2 profilepic-holder">
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <img
                class="profilepic"
                src="https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg"
              />
            </article>
          </div>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification">
            <p class="title">User498 <span class="subtitle">1 day ago</span></p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
          <article class="tile is-child notification comment-content">
            <p class="subtitle">
              I've added a comment to this project to see if you would react to
              it. This is also a test on how a long comment would like. So this
              is just a test.
            </p>
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
  font-weight: normal;
}
.is-ancestor {
  max-width: 480px;
  max-height: 48px;
  margin-bottom: 50px!important;

}
.comment-content {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
}
.comment-content p {
  padding: 12px 18px;
  margin: 0;
  color: black;
  font-size: 0.8em;
}
</style>
