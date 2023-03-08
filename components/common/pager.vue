<template>
  <div>
    <div class="flexbox">
      <div v-for="d in pages" :key="d" class="page">
        <a class="link" href="">{{ d }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      pages: 10,
    }
  },
  methods: {

  },
})
</script>

<style scoped lang="scss">
.flexbox {
  display: flex;
}
.page {
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #edebeb;
  box-sizing: border-box;
  text-align: center;
}
.link {
  position: relative;
  top: 10%;
  font-weight: bold;
}
.fillBg {
  background: #f1c40f;
  border: none;
}
</style>
