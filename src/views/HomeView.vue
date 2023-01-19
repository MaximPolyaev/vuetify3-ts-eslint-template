<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <hello-world msg="Hello your app" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>
