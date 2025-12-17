<script setup lang="ts">
import Logo from "./Logo.vue";
import Links from "./Links.vue";
import Controls from "./Controls.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <header class="fixed top-0 left-0 h-16 w-full">
    <nav class="flex flex-row items-center justify-stretch p-2">
      <Logo class="z-50" />
      <Links class="z-40" />
      <Controls class="z-50" />
      <Menu class="z-50" />
    </nav>
  </header>
</template>
