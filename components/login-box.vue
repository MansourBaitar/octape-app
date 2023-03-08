<template>
  <div>
    <div class="flexbox login-screen is-centered is-vcentered">
      <div class="login-box">
        <section>
          <div class="Login-img-header is-centered">
            <img
              src="https://cdn.octape.io/logo/LogoZonderO.png"
              alt="Octape Logo"
            />
          </div>
          <b-notification
            v-if="errorOnLogin"
            type="is-danger"
            has-icon
            aria-close-label="Close notification"
            role="alert"
            class="notification-box"
          >
            {{ errorMessage }}
          </b-notification>
          <div class="title">
            <p>login</p>
          </div>
          <div>
            <input-field
              :value="username"
              label="Username"
              type="text"
              placeholder="username"
              class="login-input-field"
              @change.native="username = $event.target.value"
            ></input-field>
            <input-field
              :value="password"
              label="Password"
              type="password"
              placeholder="password"
              class="login-input-field"
              @change.native="password = $event.target.value"
            ></input-field>
            <div class="login-controls">
              <b-checkbox
                class="login-checkbox"
                true-value="Yes"
                false-value="No"
              >
                Keep me logged in
              </b-checkbox>
              <p class="login-text forgot-pwd is-vcentered">Forgot password?</p>
            </div>
          </div>
          <div class="submit-group">
            <cta-button
              class="login-button"
              text="Login"
              @click.native="signIn"
              @keyup.enter.native="signIn"
            ></cta-button>
          </div>
          <div class="create-account">
            <p>
              Don't have an account yet?
              <!-- <nuxt-link class="login-text create-account" to="/auth/register"> -->
              <nuxt-link class="login-text create-account" to="">
                Create one now
              </nuxt-link>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputField from '@/components/common/input-field.vue'
import CtaButton from '@/components/common/cta-button.vue'

export default Vue.extend({
  name: 'LoginBox',
  components: { InputField, CtaButton },
  data() {
    return {
      username: null,
      password: null,
      errorOnLogin: false,
      errorMessage: '',
    }
  },
  methods: {
    async signIn() {
      if (this.username && this.password) {
        try {
          await this.$auth
            .loginWith('local', {
              data: {
                username: this.username,
                password: this.password,
              },
            })
            .then(() => {
              if (this.$auth.loggedIn) {
                this.$router.push('/')
              }
            })
        } catch (error) {
          this.errorOnLogin = true
          this.errorMessage =
            'Incorrect email or password, please check your credentials.'
        }
      } else {
        this.errorOnLogin = true
        this.errorMessage = 'Please fill in username and password.'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.flexbox {
  display: flex;
}
.Login-img-header {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 25rem;
  margin-bottom: 50px;
}
// -- Notification box ----------------------------
.notification-box {
  width: 25rem;
}
.login-controls {
  display: flex;
  justify-content: space-between;
}
.title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
}
.image-login {
  padding-left: 0 !important;
  // width: 62%;
}
.login-text {
  color: #23195a;
  font-style: normal;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
}
.create-account {
  padding-top: 18px;
}
.login-screen {
  // margin-right: 4%;
  //   width: 100vw;
  //   height: 100vh;
}
.login-button {
  width: 25rem;
  height: 30% !important;
}
.login-input-field {
  width: 25rem;
  padding-top: 12px;
  padding-bottom: 20px;
}
.login-checkbox {
  padding-top: 20px;
  padding-bottom: 20px;
}
.forgot-pwd {
  margin-top: 18px;
  padding-left: 30px;
}
.illustration {
  vertical-align: middle;
  width: 100%;
  clip-path: polygon(0 0, 100% 0%, 61% 100%, 0% 100%);
}

.login-box {
  flex-direction: column;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  width: 500px;
  height: 750px;
  align-self: center;
  // margin-right: 12%;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));

  @media only screen and (max-width: 500px) {
    width: 85vw;
  }
}

@media only screen and (max-width: 550px) {
  .image-login {
    display: none;
  }
  .login-box {
    width: 300px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .Login-img-header {
    width: 220px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 50px !important;
  }
  .title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 0;
  }
  .login-input-field {
    width: 220px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
  .label {
    margin-bottom: 0 !important;
  }
  .login-controls {
    display: block;
    text-align: center;
  }
  .login-checkbox {
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
  }
  .forgot-pwd {
    padding: 0;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .login-button {
    width: 220px;
    margin-left: auto;
    margin-right: auto;
  }
  .create-account {
    width: 220px;
    padding-top: 10px;
    text-align: center;
  }
}
</style>
