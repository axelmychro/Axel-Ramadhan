<script lang="ts" setup>
const showLinks = useState('showLinks', () => false)
function toggleLinks() {
  showLinks.value = !showLinks.value
}
</script>

<template>
  <button
    type="button"
    class="flex cursor-pointer items-center justify-center lg:hidden min-h-full min-w-12"
    :aria-label="showLinks ? 'close menu' : 'open menu'"
    :aria-expanded="showLinks"
    :class="showLinks ? 'text-zinc-100' : 'text-inherit'"
    @click="toggleLinks"
  >
    <lucide-menu class="size-8" aria-hidden="true" />
  </button>
</template>
