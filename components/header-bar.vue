<template>
  <header>
    <!-- -- menu dropdown ------------------ -->
    <dropdown-menu />

    <div class="spacer"></div>
    <b-autocomplete
      v-model="search"
      class="search-box"
      rounded
      placeholder="Search"
      icon="magnify"
      @select="(option) => (selected = option)"
    >
      <!-- <template #empty>No results found</template> -->
    </b-autocomplete>
    <div id="notification-dropdown" class="dropdown is-right">
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
          @click="toggleActive"
        >
          <span class="notif-icon">
            <b-icon class="notification-icoon" icon="bell"></b-icon>
          </span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div id="dropdown-menu3" class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item">Mansour Baitar liked your post </a>
          <a class="dropdown-item">Bram Colleman commented on your post</a>
        </div>
      </div>
    </div>

    <!-- -- user dropdown ------------------ -->
    <!-- <b-dropdown position="is-bottom-left">
      <a slot="trigger" class="menu-item" role="button">
        <span>{{ name }}</span>
        <b-icon icon="menu-down"></b-icon>
      </a> -->

    <!-- -- dropdown items --------------- -->
    <!-- <b-dropdown-item aria-role="menuitem">
        <nuxt-link to="/user" exact>Profile</nuxt-link></b-dropdown-item
      >
      <hr class="dropdown-divider" />
      <b-dropdown-item @click="SignOut">
        <b-icon icon="logout" size="is-small"></b-icon>Logout
      </b-dropdown-item>
    </b-dropdown> -->
    <div>
      <div class="flexbox">
        <!-- -- user dropdown ------------------ -->
        <b-dropdown position="is-bottom-left">
          <a slot="trigger" class="menu-item" role="button">
            <b-icon class="icon" icon="menu-down"></b-icon>
          </a>

          <!-- -- dropdown items --------------- -->
          <b-dropdown-item aria-role="menuitem">
            <nuxt-link to="/user" exact>Profile</nuxt-link></b-dropdown-item
          >
          <hr class="dropdown-divider" />
          <b-dropdown-item @click="SignOut">
            <b-icon icon="logout" size="is-small"></b-icon>Logout
          </b-dropdown-item>
        </b-dropdown>

        <h3 class="Username">{{ name }}</h3>
        <img
          src="https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg"
          class="profilepic"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import DropdownMenu from '@/components/dropdown-menu.vue'

export default Vue.extend({
  name: 'HeaderBar',
  components: { DropdownMenu },
  data() {
    return {
      name: this.$auth.user.firstName || 'User',
      search: null,
    }
  },
  methods: {
    SignOut() {
      this.$auth.logout()
      this.$router.push('/auth/login')
    },
    toggleActive() {
      const dropdown = document.getElementById('notification-dropdown')
      if (dropdown?.classList.contains('is-active')) {
        dropdown.classList.remove('is-active')
      } else {
        dropdown?.classList.add('is-active')
      }
    },
  },
})
</script>

<style scoped lang="scss">
.notification-icoon {
  padding-right: 24px;
}
.search-box {
  height: 30px !important;
  margin-right: 24px;

  .control.input {
    background-color: #efeef7 !important;
      align-self: center;
  }
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: $header-height;
}
.notif-icon {
  padding-top: 12px;
}
.verticaldots {
  padding-top: 28px;
}
.button {
  border: none;
  background: none;
  width: 35px;
  padding-top: 0px;
}
.button:focus {
      outline: none;
     border: none;
     box-shadow: none;
}

// -- menu item ----------------------------
.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.5rem;
  height: $header-height;
  color: $dark;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  // &:hover {
  //   background-color: $primary;
  //   color: $primary-invert;
  // }
}

.icon {
  align-self: center;
  transition: 0.2s;

  &:hover {
    opacity: 50%;
  }
}
.profilepic {
  max-width: 32px;
  margin-top: 0px;
  border-radius: 50%;
  align-self: center;
}
.Username {
  padding: 0;
  margin: 0 !important;
  margin-right: 10px !important;
  font-size: 16px;
  align-self: center;
}
.flexbox {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  margin-right: 32px;
    align-self: center;
}
</style>
