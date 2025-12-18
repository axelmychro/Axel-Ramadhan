<script lang="ts" setup>
const showLinks = useState<boolean>("showLinks", () => false);
function toggleLinks() {
  showLinks.value = !showLinks.value;
}
</script>

<template>
  <button
    @click="toggleLinks"
    type="button"
    :aria-label="showLinks ? 'close menu' : 'open menu'"
    :aria-expanded="showLinks"
    class="flex cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden"
    :class="showLinks ? 'text-gray-100' : 'text-inherit'"
  >
    <lucide-menu class="size-8" aria-hidden="true" />
  </button>
</template>
