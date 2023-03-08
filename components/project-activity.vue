<template>
    <div class="box activity-box">
      <section class="activity-detail">
        <label>
          <b-icon class="stamp" icon="pencil" size="is-medium"></b-icon>
          <p class="title-base">
            <span class="title-text">Your project hass been created</span>
            <i class="time-stamp">Dec 27, 04:15 AM</i>
          </p>
        </label>
      </section>
      <section class="activity-detail">
        <label>
          <b-icon class="stamp" icon="view-dashboard" size="is-medium"></b-icon>
          <p class="title-base">
            <span class="title-text">Your project hass been created</span>
            <i class="time-stamp">Dec 27, 04:15 AM</i>
          </p>
        </label>
      </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectActivity',
  components: { },
})
</script>

<style scoped lang="scss">
.activity-box {
  padding: 32px 0 0;
  margin: 32px 0 0;
  min-height: 200px;

  .activity-detail {
    position: relative;
  }
  .activity-detail:before {
    content: "";
    display: block;
    border-left: 1px solid #efeff0;
    height: 100%;
    width: 1px;
    position: absolute;
    z-index: 0;
    top: 15px;
    left: 35px;
  }
  .stamp {
    background: #fff no-repeat 0 0;
    background-size: 40px 880px;
    border-radius: 50%;
    border: 5px solid #fff;
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    z-index: 1;
    top: 11px;
    left: 10px;
  }
  .title-base {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 16px 0;
    margin-left: 70px;
    border-bottom: 1px solid #efeff0;
  }
  .title-text {
    padding-right: 8px;
    font-weight: 600;
    color: #62646a;
    width: 100%;
  }
  .time-stamp {
    color: #95979d;
    font-size: 14px;
    line-height: 130%;
    padding: 5px 20px 0 0;
    display: inline-block;
  }
  @media only screen and (min-width: 900px) {
    .activity-detail:before {
      left: 55px;
    }
    .stamp {
      left: 30px;
    }
    .title-base {
      padding: 8px 0;
      min-height: 49px;
      margin-left: 96px;
    }
    .title-text {
      width: auto;
    }
    .time-stamp {
      padding: 2px 10px 0 0;
    }
  }
}
</style>
