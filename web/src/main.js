import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueSvgInlinePlugin from 'vue-svg-inline-plugin'
import { SanityBlocks } from 'sanity-blocks-vue-component'

createApp(App)
  .use(router)
  .use(store)
  .use(VueSvgInlinePlugin)
  .component('SanityBlocks', SanityBlocks)
  .mount('#app')
