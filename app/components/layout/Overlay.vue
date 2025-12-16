<script lang="ts" setup>
import Counter from "~/components/layout/Counter.vue";

const props = defineProps<{
  section: number;
}>();

const showTop = computed(() => ![1, 4].includes(props.section));
const showRight = computed(() => true);
const showBottom = computed(() => ![3, 4].includes(props.section));
</script>

<template>
  <!-- top lane -->
  <div
    class="overlay-top fixed top-16 left-0 z-30 w-screen shrink-0 border-b border-black/50 dark:border-white/50"
    :class="{ hidden: !showTop }"
  ></div>

  <!-- mid lane -->
  <div
    class="fixed right-12 bottom-0 z-40 h-screen shrink-0 border-l border-black/50 lg:right-32 dark:border-white/50"
  ></div>

  <!-- anything else -->
  <Counter />

  <!-- mid projects -->

  <!-- bot -->
  <div
    class="overlay-bottom fixed right-0 bottom-16 z-30 w-screen shrink-0 border-b border-black/50 dark:border-white/50"
    :class="{ hidden: !showTop }"
  ></div>
</template>

<style scoped>

.overlay-top {
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid;
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.overlay-top.hidden {
  transform: translateY(-100%);
}
.overlay-bottom.hidden {
  transform: translateY(100%);
}

</style>