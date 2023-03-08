/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
    $login: () => {}
    $logout: (redirectUrl: string) => {}
    $hasRole: (role: string) => Boolean
    $cookies: NuxtCookies
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $cookies: NuxtCookies
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    authenticated?: boolean
  }
}
