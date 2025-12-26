<script setup lang="ts"></script>

<template>
  <footer
    class="fixed right-0 bottom-0 flex h-16 w-full flex-row items-center justify-between gap-8 p-2"
  >
    <small class="text-sm leading-none backdrop-blur-xs text-shadow-xs">
      &copy;
      <time datetime="2025">
        {{ new Date().getFullYear() }}
      </time>
      Axel
    </small>
  </footer>
</template>
