<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
        <v-col cols="12" md="11" lg="10">
        <!-- Header -->
        <div class="text-center mb-6">
          <h1 class="text-h3 font-weight-bold mb-2">
            🐱 LoveCat Tools
          </h1>
          <p class="text-body-1 text-medium-emphasis">
            Collection of handy online tools for developers, with great UX
          </p>
        </div>

        <!-- Category Sections -->
        <div
          v-for="(category, idx) in categories"
          :key="category.title"
          :class="idx > 0 ? 'mt-6' : ''"
        >
          <div class="mb-2">
            <h2 class="text-h5 font-weight-bold mb-1">{{ category.icon }} {{ category.title }}</h2>
            <p class="text-body-2 text-medium-emphasis">{{ category.description }}</p>
          </div>
          <v-row dense>
            <v-col
              v-for="item in category.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="tool-card"
                elevation="2"
                hover
              >
                <v-card-text class="pa-4">
                  <div class="d-flex align-center mb-2">
                    <span class="text-h5 mr-2">{{ item.icon }}</span>
                    <div>
                      <h2 class="text-h6 font-weight-bold">{{ item.name }}</h2>
                      <p v-if="item.subtitle" class="text-caption text-medium-emphasis mt-0 mb-0">
                        {{ item.subtitle }}
                      </p>
                    </div>
                  </div>
                  <p class="text-body-2 text-medium-emphasis mb-1">
                    {{ item.description }}
                  </p>
                  <v-chip
                    v-for="tag in item.tags"
                    :key="tag"
                    size="x-small"
                    class="mr-1 mt-1"
                    variant="tonal"
                  >
                    {{ tag }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
          <p class="text-body-2 text-medium-emphasis">
            Made with ❤️ by LoveCat
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const categories = [
  {
    title: 'Toolkit',
    icon: '🛠️',
    description: 'Handy online tools and utilities',
    items: [
      {
        name: 'Tools Collection',
        icon: '🛠️',
        description: 'Collection of handy online tools for developers, with great UX.',
        url: 'https://tools.lovec.at/',
        tags: ['Developer Tools', 'Utilities']
      },
      {
        name: 'URL Shortener',
        icon: '🔗',
        description: 'URL shortener management — create, track and manage short links.',
        url: 'https://url.lovec.at/',
        tags: ['URL Shortener', 'Management']
      },
      {
        name: 'IP Toolkit',
        icon: '🌍',
        description: 'Comprehensive IP toolkit — check your IP address, geolocation, DNS, WebRTC leak and more.',
        url: 'https://ipcheck.ing/',
        tags: ['Network', 'IP Tools', 'Diagnostics']
      },
    ]
  },
  {
    title: 'Coding',
    icon: '💻',
    description: 'Code hosting & collaboration platforms',
    items: [
      {
        name: 'GitHub',
        icon: '🐙',
        description: 'The world\'s leading software development platform — host, review, and manage code.',
        url: 'https://github.com/',
        tags: ['Git', 'Open Source']
      },
      {
        name: 'GitLab',
        icon: '🦊',
        description: 'DevSecOps platform — source code management, CI/CD, and project planning in one place.',
        url: 'https://gitlab.com/',
        tags: ['Git', 'DevOps']
      },
      {
        name: 'Multica',
        icon: '🤖',
        description: 'The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.',
        url: 'https://multica.ai/',
        tags: ['AI Agents', 'Open Source']
      }
    ]
  },
  {
    title: 'AI',
    icon: '🧠',
    description: 'AI assistants and large language models',
    items: [
      {
        name: 'Perplexity',
        icon: '🔍',
        description: 'AI-powered answer engine — get instant, source-cited answers to any question.',
        url: 'https://www.perplexity.ai/',
        tags: ['Search', 'AI']
      },
      {
        name: 'ChatGPT',
        icon: '💬',
        description: 'OpenAI\'s conversational AI assistant — chat, write, code, and create with GPT.',
        url: 'https://chat.openai.com/',
        tags: ['Chat', 'AI']
      },
      {
        name: 'Claude',
        icon: '🟠',
        description: 'Anthropic\'s AI assistant — thoughtful, nuanced conversations with a focus on safety and helpfulness.',
        url: 'https://claude.ai/',
        tags: ['Chat', 'AI']
      },
      {
        name: 'Gemini',
        icon: '✨',
        description: 'Google\'s multimodal AI — reason across text, images, code and more.',
        url: 'https://gemini.google.com/',
        tags: ['Multimodal', 'AI']
      }
    ]
  },
  {
    title: 'AI Tools',
    icon: '🧰',
    description: 'Building blocks and platforms for AI agents and applications',
    items: [
      {
        name: 'Mem0',
        icon: '🧩',
        description: 'Memory layer for AI agents and assistants — give your apps long-term, personalized memory across sessions.',
        url: 'https://mem0.ai/',
        tags: ['Memory', 'AI Agents']
      },
      {
        name: 'Skills Hub',
        icon: '🪄',
        description: 'Discover AI Skills — explore modular capabilities to enhance your AI\'s functionality.',
        url: 'https://skills-hub.cc/',
        tags: ['AI Skills', 'Discovery']
      }
    ]
  },
  {
    title: 'Finance',
    icon: '💰',
    description: 'Financial tools and record keeping',
    items: [
      {
        name: 'Beavern',
        icon: '🦫',
        subtitle: 'Where Every Stream Finds Order.',
        description: 'Move your scattered records into one place and see the whole picture at a glance.',
        url: 'https://beavern.com/',
        tags: ['Finance', 'Organization']
      }
    ]
  },
  {
    title: 'Etc',
    icon: '📦',
    description: 'Other useful tools and utilities',
    items: [
      {
        name: 'Subtitle Translator',
        icon: '🌐',
        description: 'Blazing-fast batch subtitle translation for SRT/ASS/VTT/LRC — 70+ languages, AI-powered.',
        url: 'https://subtitle-translator.lovec.at/',
        tags: ['Translation', 'Subtitles', 'AI-Powered']
      }
    ]
  }
]
</script>

<style scoped>
.tool-card {
  transition: all 0.3s ease;
  height: 100%;
}

.tool-card:hover {
  transform: translateY(-2px);
}
</style>
