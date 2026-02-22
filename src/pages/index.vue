<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-h2 font-weight-bold mb-4">
            🐱 LoveCat Tools
          </h1>
          <p class="text-h6 text-medium-emphasis">
            Collection of handy online tools for developers, with great UX
          </p>
        </div>

        <!-- Tools Grid -->
        <v-row>
          <v-col
            v-for="tool in tools"
            :key="tool.name"
            cols="12"
            sm="6"
          >
            <v-card
              :href="tool.url"
              target="_blank"
              rel="noopener noreferrer"
              class="tool-card"
              elevation="2"
              hover
            >
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <span class="text-h4 mr-3">{{ tool.icon }}</span>
                  <h2 class="text-h5 font-weight-bold">{{ tool.name }}</h2>
                </div>
                <p class="text-body-1 text-medium-emphasis mb-2">
                  {{ tool.description }}
                </p>
                <v-chip
                  v-for="tag in tool.tags"
                  :key="tag"
                  size="small"
                  class="mr-2 mt-2"
                  variant="tonal"
                >
                  {{ tag }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Footer -->
        <div class="text-center mt-12">
          <p class="text-body-2 text-medium-emphasis">
            Made with ❤️ by LoveCat
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const tools = [
  {
    name: 'Tools Collection',
    icon: '🛠️',
    description: 'Collection of handy online tools for developers, with great UX.',
    url: 'https://tools.lovec.at/',
    tags: ['Developer Tools', 'Utilities']
  },
  {
    name: 'Subtitle Translator',
    icon: '🌐',
    description: 'Blazing-fast batch subtitle translation for SRT/ASS/VTT/LRC — 70+ languages, AI-powered 批量字幕翻译',
    url: 'https://subtitle-translator.lovec.at/',
    tags: ['Translation', 'Subtitles', 'AI-Powered']
  }
]
</script>

<style scoped>
.tool-card {
  transition: all 0.3s ease;
  height: 100%;
}

.tool-card:hover {
  transform: translateY(-4px);
}
</style>
