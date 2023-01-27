<template>
  <v-btn
    :icon="drawer ? 'mdi-menu-open' : 'mdi-menu'"
    @click="toggleDrawer()"
  />
</template>
<script setup lang="ts">
import { drawer, toggleDrawer } from '@/refs/navigation/drawer'
</script>
