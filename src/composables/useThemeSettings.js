import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const STORAGE_KEY_DARK = 'cat-homepage-dark-mode'
const STORAGE_KEY_COLOR = 'cat-homepage-color-theme'

export const colorThemes = [
  { name: 'indigo', label: 'Indigo', light: '#6366f1', dark: '#818cf8' },
  { name: 'rose', label: 'Rose', light: '#e11d48', dark: '#fb7185' },
  { name: 'emerald', label: 'Emerald', light: '#059669', dark: '#34d399' },
  { name: 'amber', label: 'Amber', light: '#d97706', dark: '#fbbf24' },
  { name: 'cyan', label: 'Cyan', light: '#0891b2', dark: '#22d3ee' },
  { name: 'violet', label: 'Violet', light: '#7c3aed', dark: '#a78bfa' },
]

const isDark = ref(loadDarkPreference())
const activeColor = ref(loadColorPreference())

function loadDarkPreference () {
  const stored = localStorage.getItem(STORAGE_KEY_DARK)
  if (stored !== null) return stored === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function loadColorPreference () {
  return localStorage.getItem(STORAGE_KEY_COLOR) || 'indigo'
}

export function useThemeSettings () {
  const theme = useTheme()

  function applyTheme () {
    theme.global.name.value = isDark.value ? 'dark' : 'light'

    const colorDef = colorThemes.find(c => c.name === activeColor.value) || colorThemes[0]
    theme.themes.value.light.colors.primary = colorDef.light
    theme.themes.value.dark.colors.primary = colorDef.dark
  }

  function toggleDark () {
    isDark.value = !isDark.value
  }

  function setColor (name) {
    activeColor.value = name
  }

  watch(isDark, val => {
    localStorage.setItem(STORAGE_KEY_DARK, String(val))
    applyTheme()
  })

  watch(activeColor, val => {
    localStorage.setItem(STORAGE_KEY_COLOR, val)
    applyTheme()
  })

  applyTheme()

  return {
    isDark,
    activeColor,
    colorThemes,
    toggleDark,
    setColor,
  }
}
