<script setup lang="ts">
import Links from './Links.vue'
import Controls from './Controls.vue'
import Menu from './Menu.vue'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-16">
    <nav class="flex flex-row items-center justify-end size-full">
      <Links class="z-40" />
      <Controls class="z-50" />
      <Menu class="z-50" />
    </nav>
  </header>
</template>
