<script lang="ts" setup>
  import Header from '~/components/header/Header.vue'
  import Main from '~/components/main/Main.vue'
  import Footer from '~/components/footer/Footer.vue'
  import Overlay from '~/components/layout/Overlay.vue'

  const activeSectionIndex = useActiveSection()

  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    title: 'Axel Ramadan',
    htmlAttrs: { lang: 'en' },
    link: [{ rel: 'icon', href: '/favicon.ico' }]
  })

  useSeoMeta({
    ogUrl: 'https://www.axelmychro.my.id/',
    ogTitle: 'mychro',
    description:
      'computer science student, self-taught programmer, Vue enthusiast',
    ogDescription:
      'computer science student, self-taught programmer, Vue enthusiast',
    ogImage: '/summary_large_image.png',
    twitterImage: '/summary_large_image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'mychro',
    twitterDescription:
      'computer science student, self-taught programmer, Vue enthusiast'
  })
</script>
<template>
  <Header class="z-50" />
  <Main />
  <Footer class="z-10" />
  <Overlay :section="activeSectionIndex" class="z-20" />
</template>
