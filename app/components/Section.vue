<script lang="ts" setup>
defineProps<{
  id: string
}>()
</script>

<template>
  <section
    :id="id"
    class="relative min-h-screen min-w-screen overflow-hidden pt-16 pr-12 pb-16 lg:pr-32"
  >
    <slot />
  </section>
</template>
