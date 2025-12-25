<script lang="ts" setup></script>

<template>
  <Section
    id="timeline"
    class="flex justify-center bg-linear-to-l from-zinc-300 via-neutral-300 to-stone-200 text-neutral-800 dark:from-zinc-900 dark:via-neutral-900 dark:to-stone-800 dark:text-neutral-200"
  >
    <div class="size-full max-w-lg items-center p-2">
      <h3 class="text-6xl text-sky-300 text-shadow-xs">2025</h3>

      <div class="relative">
        <div
          class="absolute top-0 left-8 h-full shrink-0 border-r-2 border-neutral-900 dark:border-neutral-100"
        ></div>

        <div class="space-y-2">
          <div class="flex">
            <img
              src="~/assets/icons/USU.webp"
              loading="lazy"
              aria-hidden="true"
              class="border-r-none z-10 aspect-square size-16 rounded-l-xs border-y-2 border-l-2 border-neutral-900 object-cover p-2 backdrop-blur-xs dark:border-neutral-100"
            />
            <div
              class="flex-1 rounded-r-xs border-2 border-neutral-900 p-2 backdrop-blur-xs dark:border-neutral-100"
            >
              <p>{{ $t(`section.timeline.august.description`) }}</p>
              <time class="font-dela-gothic-one block text-sm">
                {{ $t(`section.timeline.october.name`) }}
              </time>
            </div>
          </div>

          <div class="flex">
            <img
              src="~/assets/icons/GDGoC.webp"
              loading="lazy"
              aria-hidden="true"
              class="border-r-none z-10 aspect-square size-16 rounded-l-xs border-y-2 border-l-2 border-neutral-900 object-cover p-2 backdrop-blur-xs dark:border-neutral-100"
            />
            <div
              class="flex-1 rounded-r-xs border-2 border-neutral-900 p-2 backdrop-blur-xs dark:border-neutral-100"
            >
              <p>
                {{ $t(`section.timeline.october.description`) }}
              </p>
              <time class="font-dela-gothic-one block text-sm">
                {{ $t(`section.timeline.august.name`) }}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
