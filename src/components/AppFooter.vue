<template>
  <v-footer class="bg-transparent mt-12">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <p class="text-center text-body-2 text-medium-emphasis">
            © {{ currentYear }} LoveCat · Open Source Tools
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
