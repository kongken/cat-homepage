<template>
  <v-app>
    <v-app-bar elevation="0" color="transparent">
      <v-container class="d-flex align-center">
        <v-toolbar-title class="font-weight-bold">
          🐱 LoveCat
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <ThemeSettings />
        <v-btn
          icon="mdi-github"
          href="https://github.com/"
          target="_blank"
          variant="text"
        ></v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue'
import ThemeSettings from '@/components/ThemeSettings.vue'
</script>
