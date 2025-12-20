<script lang="ts" setup>
const currentSection = useActiveSection();
const { linkItems } = useNavLinks();

const currentSectionLabel = computed(
  () => linkItems.find((item) => item.index === currentSection.value)?.label,
);
const currentSectionMax = computed(() => linkItems.length - 1);
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed right-0 bottom-16 flex min-h-16 min-w-12 items-center justify-center select-none lg:bottom-1/2 lg:min-w-32"
  >
    <div
      class="relative flex min-h-16 min-w-12 items-end justify-center not-lg:mb-2 lg:min-w-24 lg:justify-start"
    >
      <p
        class="font-oswald mb-2 flex-col-reverse overflow-hidden pt-2 text-center text-4xl leading-[0.5] text-fuchsia-300 lg:mb-4 lg:text-6xl"
      >
        0{{ currentSection }}
      </p>
      <div
        class="absolute inset-0 flex flex-row items-end justify-center lg:flex-col-reverse lg:justify-start"
      >
        <div class="flex flex-row justify-end lg:w-full lg:gap-2">
          <div
            class="not-lg:border-r-2 lg:h-fit lg:w-full lg:self-center lg:border-t-2"
          />
          <h6
            class="leading-none font-bold uppercase not-lg:text-xs not-lg:[writing-mode:vertical-lr]"
          >
            {{ $t(`nav.${currentSectionLabel}`) }}
          </h6>
        </div>
        <p class="text-xs leading-none not-lg:[writing-mode:vertical-lr]">
          0{{ currentSection }}/0{{ currentSectionMax }}
        </p>
      </div>
    </div>
  </div>
</template>
