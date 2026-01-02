<script setup lang="ts">
import Section from '~/components/Section.vue'

const myGH = 'https://github.com/axelmychro/'
const projects = [
  {
    title: 'Priestess',
    year: '2025',
    date: '2025-09-28',
    url: `${myGH}priestess`,
  },
  {
    title: 'Scraptab',
    year: '2025',
    date: '2025-11-9',
    url: `${myGH}scraptab-web`,
  },
  {
    title: 'Wanderer',
    year: '2025',
    date: '2025-12-22',
    url: `${myGH}Wanderer`,
  },
  {
    title: 'Template Vue Portfolio',
    year: '2025',
    date: '2025-12-27',
    url: `${myGH}template-vue-portfolio`,
  },
]
</script>

<template>
  <Section id="projects">
    <div class="flex size-full flex-col">
      <div class="flex size-full flex-col items-stretch justify-stretch">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.url"
          target="_blank"
          :aria-label="`view project ${project.title}`"
          class="group relative flex flex-row items-center justify-stretch overflow-hidden border-b-2 p-4"
        >
          <div
            class="absolute inset-0 -z-10 size-full -translate-x-full bg-gray-900 transition-transform group-hover:translate-x-0 group-focus:translate-x-0 dark:bg-gray-100"
          />
          <h2
            class="flex-1 text-2xl group-hover:text-gray-100 group-focus:text-gray-100 dark:group-hover:text-gray-900 dark:group-focus:text-gray-900"
          >
            {{ project.title }}
          </h2>
          <time
            :datetime="project.date"
            class="text-2xl text-cyan-500 transition-colors"
          >
            {{ project.year }}
          </time>
          <LucideArrowUpRight class="size-8 text-cyan-500" aria-hidden="true" />
        </a>
        <div class="flex h-full w-full items-center justify-center select-none">
          <a
            href="https://github.com/axelmychro"
            target="_blank"
            aria-label="visit my GitHub profile"
            class="animate-float font-fira-code flex aspect-3/4 w-32 rotate-3 flex-col items-center justify-center rounded-xs bg-gray-900 text-center text-xl text-gray-100 dark:bg-gray-100 dark:text-gray-900"
          >
            <LucideGithub class="size-16" aria-hidden="true" />
            visit my GitHub!
          </a>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
  @keyframes float {
    0%,
    100% {
      transform: translateY(3px) rotate(6deg);
    }
    50% {
      transform: translateY(-3px) rotate(3deg);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>
