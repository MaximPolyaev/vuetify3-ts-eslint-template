<template>
  <v-navigation-drawer v-model="drawer">
    <v-list-item @click="$router.push({ name: 'main' })">
      <v-list-item-title class="text-h4 py-2">Your app</v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item
      title="Main"
      :active="$route.name === 'main'"
      @click="$router.push({ name: 'main' })"
    />
    <v-list-item
      title="Form"
      :active="$route.name === 'form'"
      @click="$router.push({ name: 'form' })"
    />
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { drawer } from '@/refs/navigation/drawer'
</script>
