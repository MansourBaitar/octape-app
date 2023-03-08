<template>
  <div>
    <b-field label="Label" >
      <textarea maxlength="200" type="text" class="textfield"></textarea>
    </b-field>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style scoped lang="scss">
  .textfield {
    width: 352px;
    padding-bottom: 96px;
    background: #F1F0F9;
    border: 1px solid #CFCAEA;
    box-sizing: border-box;
    border-radius: 8px;
    resize: none;
    padding-top: 5px;
    padding-left: 5px;
  }

  //scrollbar
  textarea::-webkit-scrollbar {
    width: .75em;
    cursor: grab!important;

  }

  textarea::-webkit-scrollbar-track {
    z-index: 100;
    border-radius: 8px;
    cursor: grab!important;
  }

  textarea::-webkit-scrollbar-thumb {
    z-index: 100;
    background-color: #A067CE;
    border-radius: 8px;
    cursor: grab!important;

  }

  //focused, hover animation
    .textfield:focus {
    outline: none !important;
    border: 2px solid #A067CE;
  }
</style>
