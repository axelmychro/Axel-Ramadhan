<script lang="ts" setup></script>

<template>
  <div
    class="pointer-events-none fixed right-0 bottom-16 flex h-24 w-12 items-center justify-center select-none lg:bottom-1/2 lg:w-32"
    aria-hidden="true"
  >
    <div
      class="relative flex h-full w-full flex-col justify-center lg:h-fit lg:w-fit lg:items-end"
    >
      <div class="flex flex-row justify-start">
        <div
          class="absolute bottom-0 h-fit w-fit overflow-hidden lg:static lg:bottom-2"
        >
          <div class="relative -bottom-4">
            <p class="font-oswald text-5xl text-fuchsia-300">00</p>
          </div>
        </div>

        <div class="mt-5 flex flex-col items-end justify-center">
          <p
            class="font-fira-code absolute bottom-5 left-5 -rotate-90 text-sm leading-none text-gray-300 lg:static lg:rotate-none"
          >
            <span class="text-transparent lg:text-gray-300">00</span>/05
          </p>

          <p
            class="font-dela-gothic-one absolute top-5 right-5 rotate-90 text-xs leading-none lg:static lg:rotate-none"
          >
            mychro
          </p>
        </div>
      </div>

      <p
        class="font-oswald text-md absolute bottom-12 -left-2 rotate-90 leading-none uppercase lg:static lg:bottom-6 lg:rotate-none"
      >
        homepage
      </p>
    </div>
  </div>
</template>

<style scoped></style>
