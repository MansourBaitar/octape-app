<template>
  <div>
    <div class="container">
      <div class="overlay">
        <p class="media-label">{{ media.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MediaThumbnail',
  props: {
    media: {
      type: Object,
    },
  },
})
</script>

<style scoped lang="scss">
.container {
  display: inline-block;
  max-width: 116px;
  max-height: 116px;
  width: 116px !important;
  height: 116px !important;
  background-image: url('https://cdn.octape.io/logo/LogoZonderTekst.jpg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  border-radius: 8px;
  margin-right: 12px;
  margin-bottom: 24px;
  margin-top: 24px;
  transition: 0.2s;
}
.overlay {
  width: 116px !important;
  height: 116px !important;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  border-radius: 8px;
}
.media-label {
  position: relative;
  top: 65%;
  left: 10%;
  color: white;
}
//hover animations
.container:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
