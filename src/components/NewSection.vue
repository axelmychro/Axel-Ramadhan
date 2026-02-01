<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: false,
    default: 'hidden',
  },
})

import { onMounted, onUnmounted } from 'vue'

import { setActiveSection } from '../composables/useActiveSection'

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setActiveSection(`#${props.id}`)
      }
    },
    {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    },
  )

  observer.observe(document.getElementById(props.id))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section
    :id="props.id"
    class="relative z-0 flex min-h-screen min-w-full flex-1 shrink-0 flex-col items-center justify-center overflow-hidden bg-linear-to-b from-neutral-100 via-gray-50 to-neutral-100 not-lg:pt-16 dark:from-neutral-900 dark:via-gray-950 dark:to-neutral-900"
  >
    <div
      aria-hidden="true"
      :class="props.header"
      class="bg-primary absolute top-0 -z-10 min-w-full shrink-0"
    />
    <slot />
  </section>
</template>
