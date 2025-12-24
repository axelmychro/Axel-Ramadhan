<script setup lang="ts">
  const props = defineProps<{
    button: { image: string } | null
    mouse: { x: number; y: number }
  }>()

  const previewVisible = ref(false)
  const currentImage = ref('')
  const previewPosition = ref({ x: 0, y: 0 })
  const targetPosition = ref({ x: 0, y: 0 })

  let animationFrame: number

  watch(
    () => props.button,
    (newButton) => {
      if (newButton) {
        previewVisible.value = true
        currentImage.value = newButton.image
      } else {
        previewVisible.value = false
      }
    }
  )

  watch(
    () => props.mouse,
    (newPos) => {
      targetPosition.value = { ...newPos }
    }
  )

  function startAnimation() {
    const animate = () => {
      previewPosition.value.x +=
        (targetPosition.value.x - previewPosition.value.x) * 0.025
      previewPosition.value.y +=
        (targetPosition.value.y - previewPosition.value.y) * 0.025

      animationFrame = requestAnimationFrame(animate)
    }
    animate()
  }

  onMounted(startAnimation)
  onUnmounted(() => cancelAnimationFrame(animationFrame))
</script>

<template>
  <NuxtImg
    :src="currentImage"
    alt="hey! i'm a preview~"
    loading="eager"
    class="pointer-events-none absolute min-h-64 min-w-64 -translate-x-1/2 -translate-y-1/2 transform object-contain transition-opacity select-none"
    :class="previewVisible ? 'opacity-100' : 'opacity-0'"
    :style="{
      left: `${previewPosition.x}px`,
      top: `${previewPosition.y}px`
    }"
  />
</template>
