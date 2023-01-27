<template>
  <v-app :theme="theme">
    <navigation-drawer />
    <app-bar />
    <v-main>
      <v-container>Content area</v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from '@/views/UI/AppBar.vue'
import { theme } from '@/refs/theme'
import NavigationDrawer from '@/views/UI/NavigationDrawer.vue'
</script>
