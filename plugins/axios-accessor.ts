import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/util/api'

const accessor: Plugin = ({ $axios }) => {
  $axios.setHeader('Content-Type', 'application/json')
  initializeAxios($axios)
}

export default accessor
