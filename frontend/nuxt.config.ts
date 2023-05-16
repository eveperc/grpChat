// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
  alias: {
    '@': resolve(__dirname,'./'),
    '@components': resolve(__dirname,'./components'),
    '@stores': resolve(__dirname,'./stores'),
    '@utils': resolve(__dirname,'./utils'),
    '@services': resolve(__dirname,'./services'),
  },
})
