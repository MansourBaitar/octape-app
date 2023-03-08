import { Middleware } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'

const middleware: Middleware = async (context) => {
  const authenticated = context.app.$cookies.get('authenticated')

  if (
    !authenticated ||
    authenticated === false ||
    authenticated === undefined
  ) {
    context.redirect('/auth/login')
  }
}

export default middleware
