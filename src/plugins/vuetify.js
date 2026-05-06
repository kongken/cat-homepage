/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#6366f1',
          secondary: '#ec4899',
          background: '#fafafa',
          surface: '#ffffff',
        },
      },
      dark: {
        colors: {
          primary: '#818cf8',
          secondary: '#f472b6',
          background: '#121212',
          surface: '#1e1e1e',
        },
      },
    },
  },
})
