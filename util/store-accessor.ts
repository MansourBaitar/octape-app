import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Nav from '~/store/nav'

let navStore: Nav

function initStores(store: Store<any>): void {
  navStore = getModule(Nav, store)
}

export { initStores, navStore }
