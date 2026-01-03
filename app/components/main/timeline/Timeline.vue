<template>
  <Section id="timeline">
    <div class="size-full flex items-center justify-center">
      <div class="w-full max-w-lg items-center space-y-4">
        <h3 class="text-6xl leading-none text-cyan-500 ">
          2025
        </h3>
        <div class="relative">
          <div
            class="absolute top-0 left-8 h-full shrink-0 border-r-2 border-zinc-900 dark:border-zinc-100"
          />
          <div class="space-y-2">
            <div class="flex">
              <img
                src="~/assets/icons/USU.webp"
                loading="lazy"
                aria-hidden="true"
                class="border-r-none z-10 aspect-square size-16 rounded-l-xs border-y-2 border-l-2 border-zinc-900 object-cover p-2 backdrop-blur-xs dark:border-zinc-100"
              >
              <div
                class="flex-1 rounded-r-xs border-2 border-zinc-900 p-2 backdrop-blur-xs dark:border-zinc-100"
              >
                <p>{{ $t(`section.timeline.august.description`) }}</p>
                <time class="font-dela-gothic-one block text-sm">
                  {{ $t(`section.timeline.august.name`) }}
                </time>
              </div>
            </div>
            <div class="flex">
              <img
                src="~/assets/icons/GDGoC.webp"
                loading="lazy"
                aria-hidden="true"
                class="border-r-none z-10 aspect-square size-16 rounded-l-xs border-y-2 border-l-2 border-zinc-900 object-cover p-2 backdrop-blur-xs dark:border-zinc-100"
              >
              <div
                class="flex-1 rounded-r-xs border-2 border-zinc-900 p-2 backdrop-blur-xs dark:border-zinc-100"
              >
                <p>
                  {{ $t(`section.timeline.october.description`) }}
                </p>
                <time class="font-dela-gothic-one block text-sm">
                  {{ $t(`section.timeline.october.name`) }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
