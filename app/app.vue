<script lang="ts" setup>
import Header from '~/components/header/Header.vue'
import Main from '~/components/main/Main.vue'
import Footer from '~/components/footer/Footer.vue'
import Overlay from '~/components/layout/Overlay.vue'

const activeSectionIndex = useActiveSection()

const siteName = 'mychro'
const siteTitle = 'Axel Ramadhan'
const SiteDescription = 'computer science student, self-taught programmer, Vue enthusiast'
const siteImage = '/summary_large_image.png'

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  title: siteTitle,
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})

useSeoMeta({
  title: siteTitle,
  description: SiteDescription,

  ogSiteName: siteName,
  ogType: 'website',
  ogUrl: 'https://www.axelmychro.my.id',
  ogImage: siteImage,

  ogTitle: siteTitle,
  ogDescription: SiteDescription,

  twitterImage: siteImage,
  twitterCard: 'summary_large_image',
  twitterTitle: siteTitle,
  twitterDescription: SiteDescription,
})
</script>

<template>
  <Header class="z-50" />
  <Main />
  <Footer class="z-10" />
  <Overlay :section="activeSectionIndex" class="z-20" />
</template>
