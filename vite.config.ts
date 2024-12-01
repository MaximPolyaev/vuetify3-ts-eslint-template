import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'VUE_APP_',
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    vueJsx(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))}
    ]
  },
  server: {
    port: 8080,
  },
})
