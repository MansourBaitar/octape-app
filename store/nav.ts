import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'nav',
  stateFactory: true,
  namespaced: true,
})
export default class Nav extends VuexModule {
  navMobileVisible = false
  navDesktopSmall = false

  @Mutation
  toggleNav() {
    this.navMobileVisible = !this.navMobileVisible
  }

  @Mutation
  toggleNavDesktopSmall() {
    this.navDesktopSmall = !this.navDesktopSmall
  }
}
