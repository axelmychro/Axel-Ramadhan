<script setup>
import { profile } from '../data/profile'
import { site } from '../data/site'

const newAboutCollection = [
  {
    id: 'about-me',
    title: 'About me',
    author: profile.name,
    icon: profile.picture,
  },
  {
    id: 'about-site',
    title: 'This site',
    author: site.name,
    icon: '/apple-touch-icon.png',
  },
]
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center gap-8">
    <NewArticle
      v-for="item in newAboutCollection"
      :key="item.id"
      :title="item.title"
      :author="item.author"
      :icon="item.icon"
    >
      <template v-if="item.id === 'about-me'">
        <p>Computer science undergraduate, makes websites and apps.</p>
      </template>

      <template v-else-if="item.id === 'about-site'">
        <p>Just a portfolio</p>
      </template>
    </NewArticle>
  </div>
</template>
