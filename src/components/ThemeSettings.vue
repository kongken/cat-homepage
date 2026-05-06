<template>
  <v-menu :close-on-content-click="false" location="bottom end">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-palette-outline"
        variant="text"
        aria-label="Theme settings"
      />
    </template>

    <v-card min-width="260" class="pa-4">
      <v-card-title class="text-subtitle-1 pa-0 mb-3">
        主题设置
      </v-card-title>

      <!-- Dark mode toggle -->
      <div class="d-flex align-center justify-space-between mb-4">
        <span class="text-body-2">深色模式</span>
        <v-switch
          :model-value="isDark"
          hide-details
          density="compact"
          color="primary"
          @update:model-value="toggleDark"
        />
      </div>

      <!-- Color theme picker -->
      <div class="text-body-2 mb-2">主题颜色</div>
      <div class="d-flex flex-wrap ga-2">
        <v-btn
          v-for="color in colorThemes"
          :key="color.name"
          :color="isDark ? color.dark : color.light"
          :variant="activeColor === color.name ? 'flat' : 'tonal'"
          :icon="activeColor === color.name ? 'mdi-check' : undefined"
          size="small"
          rounded="circle"
          width="36"
          height="36"
          :aria-label="color.label"
          @click="setColor(color.name)"
        />
      </div>
    </v-card>
  </v-menu>
</template>

<script setup>
import { useThemeSettings } from '@/composables/useThemeSettings'

const { isDark, activeColor, colorThemes, toggleDark, setColor } = useThemeSettings()
</script>
