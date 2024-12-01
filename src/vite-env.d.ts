/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VUE_APP_MAIN_HOST_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { Router, Route } from 'vue-router'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router
    $route: Route
  }
}