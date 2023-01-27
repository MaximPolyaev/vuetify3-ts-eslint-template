<template>
  <v-btn
    :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    @click="toggleTheme()"
  />
</template>
<script setup lang="ts">
import { theme, toggleTheme } from '@/refs/theme'
</script>
