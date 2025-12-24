<script lang="ts" setup>
  const showLinks = useState('showLinks', () => false)
  function toggleLinks() {
    showLinks.value = !showLinks.value
  }
</script>

<template>
  <button
    type="button"
    :aria-label="showLinks ? 'close menu' : 'open menu'"
    :aria-expanded="showLinks"
    class="flex cursor-pointer items-center justify-center lg:hidden"
    :class="showLinks ? 'text-gray-100' : 'text-inherit'"
    @click="toggleLinks"
  >
    <lucide-menu class="size-8" aria-hidden="true" />
  </button>
</template>
