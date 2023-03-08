<template>
  <div class="login-screen is-vcentered">
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
          <p>Register</p>
        </div>
        <div>
          <div class="columns">
            <div class="column">
              <input-field
                :value="firstname"
                label="First name"
                type="text"
                placeholder="First name"
                class="login-input-field"
                @change.native="firstname = $event.target.value"
              ></input-field>
            </div>
            <div class="column">
              <input-field
                :value="lastname"
                label="Last name"
                type="text"
                placeholder="Last name"
                class="login-input-field"
                @change.native="lastname = $event.target.value"
              ></input-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <input-field
                :value="email"
                label="Email"
                type="text"
                placeholder="john@doe.com"
                class="login-input-field"
                @change.native="email = $event.target.value"
              ></input-field>
              <input-field
                :value="username"
                label="Username"
                type="text"
                placeholder="john doe"
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
            </div>
          </div>
        </div>
        <div class="submit-group">
          <cta-button
            class="login-button"
            text="Register"
            @click.native="register"
          ></cta-button>
        </div>
        <div class="loginLink">
          <p>
            Already have an account?
            <nuxt-link class="login-text" to="">Login</nuxt-link>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputField from '@/components/common/input-field.vue'
import CtaButton from '@/components/common/cta-button.vue'

export default Vue.extend({
  auth: false,
  name: 'RegisterBox',
  components: { InputField, CtaButton },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      errorOnLogin: false,
      errorMessage: '',
    }
  },
  methods: {
    async register() {
      if (
        this.firstname &&
        this.lastname &&
        this.email &&
        this.username &&
        this.password
      ) {
        try {
          const user = {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            username: this.username,
            password: this.password,
          }
          const resp = await this.$axios.$post('/soter/auth/register', user)
          if (resp.success) {
            this.$auth
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
          }
        } catch (error) {
          this.errorOnLogin = true
          this.errorMessage = 'Something went wrong, Please try again later.'
        }
      } else {
        this.errorOnLogin = true
        this.errorMessage = 'Please fill in all field.'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.column {
  padding-top: 0;
  padding-bottom: 0;
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
}
.login-screen {
  //  margin-left: 4%;
  //   width: 100vw;
  //   height: 100vh;
}
.login-button {
  width: 100%;
  height: 30% !important;
  margin-top: 16px;
}
.login-input-field {
  padding-top: 8px;
  padding-bottom: 8px;
}
.login-checkbox {
  padding-top: 20px;
  padding-bottom: 20px;
}
.login-text {
  color: #23195a;
  font-style: normal;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}
.loginLink {
  padding-top: 18px;
}
.forgot-pwd {
  float: right;
  margin-top: 20px;
  padding-left: 30px;
}
.illustration {
  vertical-align: middle;
}
.login-box {
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
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));

  @media only screen and (max-width: 500px) {
    width: 85vw;
  }
}
.Login-img-header {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 25rem;
  margin-top: 30px;
}
</style>
