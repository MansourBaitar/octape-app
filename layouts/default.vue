<template>
  <div class="layout">
    <nav
      :class="{
        'is-mobile-active': $store.state.nav.navMobileVisible,
        'small-desktop-active': $store.state.nav.navDesktopSmall,
      }"
    >
      <nuxt-link class="logo" to="/">
        <header class="is-family-code is-uppercase has-text-weight-semibold">
          <img
            v-if="!$store.state.nav.navDesktopSmall"
            class="nav-logo"
            src="https://cdn.octape.io/logo/LogoZonderOWit.png"
            alt="Octape Logo White"
          />
          <img
            v-if="$store.state.nav.navDesktopSmall"
            class="small-octape-logo"
            src="https://cdn.octape.io/logo/LogoWit.png"
            alt="Octape Logo White"
          />
        </header>
      </nuxt-link>
      <div class="sidebar">
        <aside class="menu navigation-menu">
          <p v-if="!$store.state.nav.navDesktopSmall" class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li v-if="!$store.state.nav.navDesktopSmall">
              <nuxt-link to="/" exact>Dashboard</nuxt-link>
            </li>
            <li v-if="$store.state.nav.navDesktopSmall" class="small-nav-item">
              <nuxt-link to="/" exact>
                <b-icon
                  class="small-nav-icon"
                  icon="view-dashboard-outline"
                  size="is-medium"
                ></b-icon>
              </nuxt-link>
            </li>
            <li v-if="!$store.state.nav.navDesktopSmall">
              <nuxt-link to="/subscriptions" exact>Subscriptions</nuxt-link>
            </li>
            <li v-if="$store.state.nav.navDesktopSmall" class="small-nav-item">
              <nuxt-link to="/subscriptions" exact>
                <b-icon
                  class="small-nav-icon"
                  size="is-medium"
                  icon="cash"
                ></b-icon>
              </nuxt-link>
            </li>

            <li v-if="!$store.state.nav.navDesktopSmall">
              <nuxt-link to="/invoices" exact>Invoices</nuxt-link>
            </li>
            <li v-if="$store.state.nav.navDesktopSmall" class="small-nav-item">
              <nuxt-link to="/invoices" exact>
                <b-icon
                  class="small-nav-icon"
                  size="is-medium"
                  icon="receipt"
                ></b-icon>
              </nuxt-link>
            </li>
          </ul>
          <p v-if="!$store.state.nav.navDesktopSmall" class="menu-label">
            Settings
          </p>
          <ul class="menu-list">
            <li v-if="!$store.state.nav.navDesktopSmall">
              <nuxt-link to="/settings/preferences" exact>
                Preferences
              </nuxt-link>
            </li>
            <li v-if="$store.state.nav.navDesktopSmall" class="small-nav-item">
              <nuxt-link to="/settings/preferences" exact>
                <b-icon
                  class="small-nav-icon"
                  size="is-medium"
                  icon="cog-outline"
                ></b-icon>
              </nuxt-link>
            </li>

            <li v-if="!$store.state.nav.navDesktopSmall">
              <nuxt-link to="/settings/design" exact> Design </nuxt-link>
            </li>
            <li v-if="$store.state.nav.navDesktopSmall" class="small-nav-item">
              <nuxt-link to="/settings/design" exact>
                <b-icon
                  class="small-nav-icon"
                  size="is-medium"
                  icon="code-tags"
                ></b-icon>
              </nuxt-link>
            </li>
          </ul>
        </aside>
      </div>
      <ul
        v-if="!$store.state.nav.navMobileVisible"
        class="menu-list toggle-small-desktop-nav"
      >
        <li
          :class="{
            'small-desktop-active': $store.state.nav.navDesktopSmall,
          }"
          @click="toggleNavDesktopSmall"
        >
          <a><b-icon :icon="desktopNavArrow"></b-icon>{{ collapeText }}</a>
        </li>
      </ul>
    </nav>

    <div
      class="focus"
      :class="{ 'is-mobile-active': $store.state.nav.navMobileVisible }"
      @click="toggleNav"
    ></div>

    <section class="page">
      <header-bar />
      <main class="content">
        <nuxt />
      </main>
    </section>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar.vue'
import { getModule } from 'vuex-module-decorators'
import info from '@/package.json'
import Nav from '../store/nav'

export default {
  components: {
    HeaderBar,
  },
  data() {
    return {
      version: info.version,
      isActive: true,
      desktopNavArrow: 'chevron-double-left',
      collapeText: 'Collapse sidebar',
    }
  },
  methods: {
    toggleNav() {
      const nav = getModule(Nav, this.$store)
      nav.toggleNav()
    },
    toggleNavDesktopSmall() {
      const nav = getModule(Nav, this.$store)
      nav.toggleNavDesktopSmall()
      if (this.$store.state.nav.navDesktopSmall) {
        this.desktopNavArrow = 'chevron-double-right'
        this.collapeText = ''
      } else {
        this.desktopNavArrow = 'chevron-double-left'
        this.collapeText = 'Collapse sidebar'
      }
    },
  },
}
</script>

<style scoped lang="scss">
$nav-width: 16.5em;
$menu-item-active-background-color: #a59dd3;
$menu-item-color: white;
$menu-label-color: #a59dd3;

.small-octape-logo {
  width: 48px;
  max-height: 48px;
  display: flex;
}

// -- layout -------------------------------
.layout {
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: $accent-grey;
}

// -- focus screen -------------------------
.focus {
  z-index: 38;
  opacity: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  pointer-events: none;
}

// -- side menu ----------------------------
.logo {
  margin-bottom: 84px;
}
nav {
  z-index: 39;
  width: $nav-width;
  min-width: $nav-width;
  max-width: $nav-width;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $primary;
  transition: transform 0.5s ease-out;

  .nuxt-link-active {
    font-weight: bold;
    background-color: #402f85;
    color: #ffffff;
  }

  .menu-label {
    padding-left: 36px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
  }

  .menu-list {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    li {
      height: 36px;
      a {
        padding: 0 !important;
        padding-left: 36px !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }
    }
  }

  .small-nav-item {
    margin-bottom: 8px;
    display: flex;
  }
  .small-nav-icon {
    height: 52px;
    width: 52px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    outline: none;
    font-size: 20px;
    color: #ffffff;
    .small-nav-item:hover {
      font-weight: bold;
      background-color: #402f85;
      color: #ffffff;
    }
    .small-nav-item:active {
      font-weight: bold;
      background-color: #402f85;
      color: #ffffff;
    }
  }

  .nav-logo {
    width: 60%;
    padding-top: 68px;
  }

  .is-link-active {
    padding: 0 !important;
  }

  footer {
    text-align: center;
    padding: 0.25rem;
    background-color: $secondary;
    color: $dark;
    font-size: 0.75rem;
  }

  header {
    background-color: $primary-dark;
    height: $header-height;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $accent-grey;

    img {
      width: 80%;
    }

    p.text {
      font-size: 1.25rem;
    }

    span.accent {
      color: $primary-light;
      margin-left: 0.5rem;
      font-weight: 100;
    }

    span.icon {
      display: none;
    }
  }
}

// -- navigation menu ----------------------
.navigation-menu {
  flex-grow: 1;
  width: $nav-width;
  max-width: $nav-width;
  min-width: $nav-width;
}

.toggle-small-desktop-nav {
  height: 48px;
}

.small-desktop-active {
  width: 64px;
  max-width: 64px;
  min-width: 64px;
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
  transform: translateX(0%);
  .is-link-active {
    padding: 20px !important;
  }
  .menu-list {
    li {
      a {
        padding-left: 0 !important;
      }
    }
  }
}

// -- sidebar ------------------------------
.sidebar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .menu-item-align a {
    padding: 0 !important;
  }
}

// -- page section -------------------------
section.page {
  min-height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

main.content {
  padding: $page-padding;
  flex-grow: 1;
}

// -- mobile friendly ----------------------
@media only screen and (max-width: 1200px) {
  nav {
    transform: translateX(-110%);
    max-width: 90vw;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16), 0px 0px 6px rgba(0, 0, 0, 0.23);
    position: absolute;
    left: 0;
    top: 0;

    &.is-mobile-active {
      transform: translateX(0%);
    }
  }

  .focus {
    opacity: 0;

    &.is-mobile-active {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
