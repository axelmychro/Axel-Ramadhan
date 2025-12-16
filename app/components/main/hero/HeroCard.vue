<template>
  <div
    class="flex h-fit w-full max-w-xs flex-col items-stretch justify-center rounded-md bg-neutral-800 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
  >
    <div class="flex flex-col md:flex-row">
      <div
        class="flex max-h-32 place-items-center rounded-t-md bg-neutral-950 p-2 md:max-h-full md:max-w-full md:rounded-tr-none"
      >
        <NuxtImg
          src="/images/imathe.webp"
          alt="imathe"
          class="pointer-events-none size-full object-scale-down select-none"
        />
      </div>

      <div class="flex flex-1 flex-col bg-purple-800 p-4 md:rounded-tr-md">
        <h1
          class="text-center text-xl text-neutral-300 sm:text-2xl md:text-start"
        >
          {{ $t("section.home.card.greeting") }}
          <span class="block text-3xl text-neutral-100 sm:text-4xl">
            Axel Ramadhan!
          </span>
        </h1>
        <h2
          class="font-fira-code text-md text-center text-purple-300 sm:text-lg md:text-start"
        >
          Junior Frontend Developer
        </h2>
        <hr class="my-2 border-white" />
        <div
          class="[&>a]: flex flex-row items-center justify-center gap-4 md:justify-end [&>a]:rounded-sm [&>a]:p-2 [&>a>*]:size-8"
        >
          <a href="mailto:axelmychro@gmail.com" class="bg-black text-white"
            ><lucide-mail
          /></a>
          <a
            href="https://linkedin.com/in/axelramadhan"
            target="_blank"
            class="bg-[#0077B5] text-white"
            ><lucide-linkedin
          /></a>
          <a href="https://github.com/axelmychro" class="bg-black text-white"
            ><lucide-github
          /></a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div
        class="flex w-full items-center justify-center bg-neutral-800 p-4 lg:rounded-bl-md"
      >
        <p class="sm:text-md text-center text-neutral-100 md:text-start">
          {{ $t("section.home.card.bio") }}
        </p>
      </div>

      <div
        class="flex shrink-0 flex-row place-items-center gap-2 rounded-b-md bg-neutral-950 p-2 md:justify-end lg:grid lg:aspect-square lg:grid-cols-3 lg:justify-center lg:rounded-bl-none [&>i]:leading-none [&>i]:grayscale-75 [&>i]:transition [&>i]:duration-300 [&>i]:hover:grayscale-0 [&>i]:sm:text-xl"
      >
        <i class="devicon-nodejs-plain colored"></i>
        <i class="devicon-vuejs-plain colored"></i>
        <i class="devicon-nuxt-original colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-git-plain colored"></i>
        <i class="devicon-figma-plain colored"></i>
        <i class="devicon-typescript-plain colored"></i>
        <i class="devicon-tailwindcss-original colored"></i>
        <i class="devicon-vite-plain colored"></i>
      </div>
    </div>
  </div>
</template>
