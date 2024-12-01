/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

import { Router, Route } from 'vue-router'

interface ImportMetaEnv {
  readonly VUE_APP_MAIN_HOST_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router
    $route: Route
  }
}
