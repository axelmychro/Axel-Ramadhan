<script lang="ts" setup>
import Counter from '~/components/props/Counter.vue'

const props = defineProps<{
  section: number
}>()

const showTop = computed(() => ![3, 4].includes(props.section))
const showRight = computed(() => ![4].includes(props.section))
const showBottom = computed(() => ![1, 3, 4].includes(props.section))

const overlayBorder = (visible: boolean) => {
  if (!visible) return 'border-transparent'
  return 'border-black dark:border-white'
}
</script>

<template>
  <div
    class="overlays fixed top-16 left-0 right-0 border-b"
    :class="[
      showTop ? 'translate-y-0' : '-translate-y-16',
      overlayBorder(showTop),
    ]"
  />

  <div
    class="overlays fixed top-0 bottom-0 right-12 border-l lg:right-32"
    :class="[
      showRight ? 'translate-x-0' : 'translate-x-12 lg:translate-x-32',
      overlayBorder(showRight),
    ]"
  />

  <div
    class="overlays fixed left-0 right-0 bottom-16 border-t"
    :class="[
      showBottom ? 'translate-y-0' : 'translate-y-16',
      overlayBorder(showBottom),
    ]"
  />

  <Counter />
</template>

<style scoped>
  .overlays {
    transition: 1.5s cubic-bezier(0.6, 0, 0.3, 1);
  }
</style>
