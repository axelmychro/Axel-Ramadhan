// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    'nuxt-lucide-icons',
    '@nuxtjs/color-mode',
  ],

  ssr: true,

  devtools: { enabled: true },

  css: ['~/assets/css/main.css', 'devicon/devicon.min.css'],

  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'id',
        file: 'id.json',
      },
    ],
    langDir: 'locales/',
  },

  image: {
    format: ['webp'],
    quality: 50,
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 50,
        },
      },
    },
  },
})
