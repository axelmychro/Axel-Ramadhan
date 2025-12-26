<script setup>
  import Section from '~/components/Section.vue'
  import HeroCard from './HeroCard.vue'
</script>
<template>
  <Section id="home">
    <div class="flex h-full w-full items-center justify-center">
      <HeroCard class="animate-float shadow-md transition-transform" />
    </div>
  </Section>
</template>

<style scoped>
  @media (width >= 40rem) {
    @keyframes float {
      0%,
      100% {
        transform: translateY(2px) rotate(-1.5deg);
      }
      50% {
        transform: translateY(-2px) rotate(-1deg);
      }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  }
</style>
