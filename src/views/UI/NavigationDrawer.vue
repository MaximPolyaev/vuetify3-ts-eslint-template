<template>
  <v-navigation-drawer v-model="drawer">
    <v-list-item>
      <v-list-item-title class="text-h4 py-2"
        >Your app {{ $route.name }}</v-list-item-title
      >
    </v-list-item>
    <v-divider />
    <v-list-item
      link
      title="Главная"
      href="/"
      :active="$route.name === 'main'"
    />
    <v-list-item
      link
      title="Форма"
      href="/form"
      :active="$route.name === 'form'"
    />
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { drawer } from '@/refs/navigation/drawer'
</script>
