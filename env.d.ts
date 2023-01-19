/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VUE_APP_MAIN_HOST_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
