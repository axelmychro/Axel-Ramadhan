// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'vercel'
  },

  app: {
    head: {
      title: 'mychro',
      meta: [
        {
          name: 'description',
          content:
            'computer science student, self-taught programmer, Vue / Nuxt enthusiast'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    'nuxt-lucide-icons',
    '@nuxtjs/color-mode'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css', 'devicon/devicon.min.css'],

  image: {
    format: ['webp'],
    quality: 50,
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 50
        }
      }
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'id',
        file: 'id.json'
      }
    ],
    langDir: 'locales/'
  },

  colorMode: {
    classSuffix: '',
    preference: 'light'
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
