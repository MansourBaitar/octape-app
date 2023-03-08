<template>
  <div>
    <div class="card">
      <img
        src="https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg"
        class="profilepic"
      />
      <h3 class="Username">Kristin Watson</h3>
      <span class="function">Video Editor</span>
      <p class="bio">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia
      </p>
      <div class="soccial-links">
        <a href="#"><span class="icon skype"></span></a>
        <a href="#"><span class="icon twitter"></span></a>
        <a href="#"><span class="icon linkedin"></span></a>
        <a href="#"><span class="icon instagram"></span></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.card {
  width: 273px;
  height: 384px;
  text-align: center;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.13));
  border-radius: 8px;
  transition: 0.2s;
}
.profilepic {
  max-width: 89px;
  margin-top: 44px;
  border-radius: 50%;
}
.Username {
  padding: 0;
  margin: 0 !important;
}
.function {
  color: #8d8e94;
  font-weight: 500;
}
.bio {
  margin: 4px 24px;
  font-size: 16px;
  line-height: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.icon {
  height: 20px;
  width: 20px;
  display: inline-block;
  transition: 0.2s;
  // filter: grayscale(1);
}
// .icon:hover {
//     filter: grayscale(0);
// }
.skype {
  background: url('https://cdn.octape.io/logo/skype-logo.svg');
  background-size: 20px;
}
.twitter {
  background: url('https://cdn.octape.io/logo/twitter-logo.svg') no-repeat;
  background-size: 20px;
  background-position-y: 3px;
}
.linkedin {
  background: url('https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg');
  background-size: 20px;
}
.instagram {
  background: url('https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg');
  background-size: 20px;
}

//hover animations
.card:hover {
  transform: scale(1.02);
}
</style>
