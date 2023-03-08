<template>
  <div>
    <div class="pane flexbox">
      <login-box class="login" />
      <register-box class="register" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginBox from '../../components/login-box.vue'
import RegisterBox from '../../components/auth/register-box.vue'

export default Vue.extend({
  name: 'LoginPage',
  components: {
    LoginBox,
    RegisterBox,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  mounted() {
    const registerlink = document.querySelector('.create-account')
    const loginLink = document.querySelector('.loginLink')
    registerlink?.addEventListener('click', this.move)
    loginLink?.addEventListener('click', this.moveReverse)
  },
  methods: {
    move() {
      const login = document.querySelector('.login')
      const register = document.querySelector('.register')
      login?.classList.remove('moveReverse')
      register?.classList.remove('move2Reverse')
      login?.classList.add('move')
      register?.classList.add('move2')
    },
    moveReverse() {
      const login = document.querySelector('.login')
      const register = document.querySelector('.register')
      login?.classList.remove('move')
      register?.classList.remove('move2')
      login?.classList.add('moveReverse')
      register?.classList.add('move2Reverse')
    },
  },
  head: {
    title: 'Octape Login',
  },
  layout: 'empty',
})
</script>

<style scoped lang="scss">
.pane {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh !important;
  width: 100vw !important;
  background: url('https://cdn.octape.io/illustrations/bg.png') no-repeat center
    center fixed;
  background-size: cover;
}
.login {
  transform: translateX(50%);
}
.register {
  transform: translateX(950px);
  opacity: 0;
  display: inline-block;
}
@keyframes moveLogin {
  from {
    transform: translateX(50%);
    opacity: 1;
  }
  to {
    transform: translateX(-950px);
    opacity: 0;
  }
}
@keyframes moveRegister {
  from {
    transform: translateX(950px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%);
    opacity: 1;
  }
}
.move {
  animation: moveLogin 0.75s ease-in forwards;
}
.move2 {
  animation: moveRegister 1s ease-out forwards;
}
@keyframes moveLoginReverse {
  from {
    transform: translateX(-950px);
    opacity: 0;
  }
  to {
    transform: translateX(50%);
    opacity: 1;
  }
}
@keyframes moveRegisterReverse {
  from {
    transform: translateX(-50%);
    opacity: 1;
  }
  to {
    transform: translateX(950px);
    opacity: 0;
  }
}
.moveReverse {
  animation: moveLoginReverse 1s ease-out forwards;
}
.move2Reverse {
  animation: moveRegisterReverse 0.75s ease-in forwards;
}
</style>
