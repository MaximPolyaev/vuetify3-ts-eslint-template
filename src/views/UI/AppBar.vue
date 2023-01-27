<template>
  <v-app-bar>
    <toggle-navigation-drawer-button />
    <v-spacer />
    <toggle-theme-button />
  </v-app-bar>
</template>
<script setup lang="ts">
import ToggleThemeButton from '@/views/UI/buttons/ToggleThemeButton.vue'
import ToggleNavigationDrawerButton from '@/views/UI/buttons/ToggleNavigationDrawerButton.vue'
</script>
