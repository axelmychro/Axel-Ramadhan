<script setup lang="ts">
const Hero = defineAsyncComponent(() => import('./hero/Hero.vue'))
const Projects = defineAsyncComponent(() => import('./projects/Projects.vue'))
const About = defineAsyncComponent(() => import('./about/About.vue'))
const Timeline = defineAsyncComponent(() => import('./timeline/Timeline.vue'))
const Contact = defineAsyncComponent(() => import('./contact/Contact.vue'))

const activeSectionIndex = useActiveSection()

const visited = ref(new Set<number>())

watch(activeSectionIndex, (i) => {
  visited.value.add(i)
  visited.value.add(i + 1)
})

type SectionEntry = {
  component: Component
  eager?: boolean
}

const sectionComponents: SectionEntry[] = [
  { component: Hero, eager: true },
  { component: Projects, eager: true },
  { component: About },
  { component: Timeline },
  { component: Contact },
]

let touchStartYPosition = 0
const isAnimating = ref(false)
const ANIMATION_DURATION = 1500

const handleTouchStart = (event: TouchEvent) => {
  if (isAnimating.value) return
  touchStartYPosition = event.touches[0]?.clientY || 0
}

const handleTouchEnd = (event: TouchEvent) => {
  if (isAnimating.value) return

  const touchEndYPosition = event.changedTouches[0]?.clientY || 0
  const verticalScrollDistance = touchStartYPosition - touchEndYPosition

  if (Math.abs(verticalScrollDistance) < 60) return

  if (verticalScrollDistance > 0) {
    if (activeSectionIndex.value >= sectionComponents.length - 1) return
    navigateToSection(
      Math.min(activeSectionIndex.value + 1, sectionComponents.length - 1),
    )
  }
  else {
    if (activeSectionIndex.value <= 0) return
    navigateToSection(Math.max(activeSectionIndex.value - 1, 0))
  }
}

const handleWheel = (event: WheelEvent) => {
  if (isAnimating.value) return

  if (event.deltaY > 0) {
    if (activeSectionIndex.value >= sectionComponents.length - 1) return
    navigateToSection(
      Math.min(activeSectionIndex.value + 1, sectionComponents.length - 1),
    )
  }
  else {
    if (activeSectionIndex.value <= 0) return
    navigateToSection(Math.max(activeSectionIndex.value - 1, 0))
  }
}

const navigateToSection = (targetSectionIndex: number) => {
  if (isAnimating.value) return
  if (targetSectionIndex === activeSectionIndex.value) return

  isAnimating.value = true
  activeSectionIndex.value = targetSectionIndex

  setTimeout(() => {
    isAnimating.value = false
  }, ANIMATION_DURATION)
}
</script>

<template>
  <main class="overflow-hidden">
    <div
      class="stage flex size-full flex-row"
      :style="{ transform: `translateX(-${activeSectionIndex * 100}vw)` }"
      @touchstart.passive="handleTouchStart"
      @touchend.passive="handleTouchEnd"
      @wheel.passive="handleWheel"
    >
      <template v-for="(section, index) in sectionComponents" :key="index">
        <component
          :is="section.component"
          v-if="section.eager || visited.has(index)"
        />
      </template>
    </div>
  </main>
</template>

<style scoped>
  .stage {
    transition: transform 1.5s cubic-bezier(0.6, 0, 0.3, 1);
  }
</style>
