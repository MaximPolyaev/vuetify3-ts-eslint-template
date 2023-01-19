import pinia from '@/plugins/pinia'
import router from '@/router'
import vuetify from '@/plugins/vuetify'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia)
}
