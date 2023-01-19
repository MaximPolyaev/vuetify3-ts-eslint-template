/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': isProduction ? ['warn', { allow: ['error', 'warn'] }] : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
  },
}
