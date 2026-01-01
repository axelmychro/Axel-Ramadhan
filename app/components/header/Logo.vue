<template>
  <a
    tabindex="0"
    href="#"
    aria-label="Home"
    class="logo-link group flex flex-row items-center gap-2 backdrop-blur-xs select-none"
  >
    <NuxtImg
      src="/images/imathe.webp"
      loading="eager"
      alt="logo"
      class="aspect-square size-12 rounded-full border-2 border-purple-300 bg-[#0f0f0f] object-cover transition-transform group-hover:scale-100 group-focus:scale-100 sm:scale-0"
      aria-hidden="true"
    />

    <span
      class="font-dela-gothic-one hidden -translate-x-14 text-4xl text-cyan-500 transition group-hover:translate-x-0 group-focus:translate-x-0 sm:inline"
    >
      mychro!
    </span>
  </a>
</template>
