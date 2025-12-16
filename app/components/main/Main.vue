<script setup lang="ts">
import Hero from "./hero/Hero.vue";
import Projects from "./projects/Projects.vue";
import About from "./about/About.vue";
import Timeline from "./timeline/Timeline.vue";
import Contact from "./contact/Contact.vue";

const activeSectionIndex = useActiveSection();

const sectionComponents = [Hero, Projects, About, Timeline, Contact];

let touchStartYPosition = 0;
const isAnimating = ref(false);
const ANIMATION_DURATION = 1500;

const handleTouchStart = (event: TouchEvent) => {
  if (isAnimating.value) return;
  touchStartYPosition = event.touches[0]?.clientY || 0;
};

const handleTouchEnd = (event: TouchEvent) => {
  if (isAnimating.value) return;

  const touchEndYPosition = event.changedTouches[0]?.clientY || 0;
  const verticalScrollDistance = touchStartYPosition - touchEndYPosition;

  if (Math.abs(verticalScrollDistance) < 60) return;

  if (verticalScrollDistance > 0) {
    if (activeSectionIndex.value >= sectionComponents.length - 1) return;
    navigateToSection(
      Math.min(activeSectionIndex.value + 1, sectionComponents.length - 1),
    );
  } else {
    if (activeSectionIndex.value <= 0) return;
    navigateToSection(Math.max(activeSectionIndex.value - 1, 0));
  }
};

const handleWheel = (event: WheelEvent) => {
  if (isAnimating.value) return;

  if (event.deltaY > 0) {
    if (activeSectionIndex.value >= sectionComponents.length - 1) return;
    navigateToSection(
      Math.min(activeSectionIndex.value + 1, sectionComponents.length - 1),
    );
  } else {
    if (activeSectionIndex.value <= 0) return;
    navigateToSection(Math.max(activeSectionIndex.value - 1, 0));
  }
};

const navigateToSection = (targetSectionIndex: number) => {
  if (isAnimating.value) return;
  if (targetSectionIndex === activeSectionIndex.value) return;

  isAnimating.value = true;
  activeSectionIndex.value = targetSectionIndex;

  setTimeout(() => {
    isAnimating.value = false;
  }, ANIMATION_DURATION);
};
</script>

<template>
  <div class="max-h-full max-w-full overflow-hidden">
    <div
      class="stage flex size-full flex-row"
      @touchstart.passive="handleTouchStart"
      @touchend.passive="handleTouchEnd"
      @wheel.passive="handleWheel"
      :style="{ transform: `translateX(-${activeSectionIndex * 100}vw)` }"
    >
      <component
        v-for="(sectionComponent, index) in sectionComponents"
        :key="index"
        :is="sectionComponent"
      />
    </div>
  </div>
</template>

<style scoped>
.stage {
  transition: transform 1.5s cubic-bezier(0.6, 0, 0.3, 1);
}
</style>
