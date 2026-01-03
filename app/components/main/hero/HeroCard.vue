<template>
  <div
    class="flex h-fit w-full max-w-xs flex-col items-stretch justify-center rounded-md bg-zinc-950 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
  >
    <div class="flex flex-col md:flex-row">
      <div
        class="flex max-h-32 min-h-32 min-w-32 items-center justify-center rounded-t-md bg-zinc-950 md:max-h-full md:max-w-full md:rounded-tr-none"
      >
        <NuxtImg
          src="/images/imathe.webp"
          alt="imathe"
          loading="eager"
          class="pointer-events-none size-32 object-contain p-2 select-none"
        />
      </div>

      <div
        class="flex flex-1 flex-col bg-linear-to-tr from-purple-900 via-purple-700 to-purple-800 p-4 md:rounded-tr-md"
      >
        <h1
          class="text-center text-xl leading-relaxed text-zinc-300 sm:text-2xl md:text-start"
        >
          {{ $t('section.home.card.greeting') }}
          <span class="inline-block text-3xl text-zinc-100 sm:text-4xl">
            Axel Ramadhan!
          </span>
        </h1>
        <h2
          class="font-fira-code text-center leading-none text-purple-300 sm:text-lg md:text-start"
        >
          Junior Frontend Developer
        </h2>
        <hr class="my-2 border-white">
        <div
          class="[&>a]: flex flex-row items-center justify-center gap-4 md:justify-end [&>a]:rounded-sm [&>a]:p-2 [&>a>*]:size-8"
        >
          <a
            href="mailto:axelmychro@gmail.com"
            class="bg-black text-white"
            aria-label="send email to axelmychro@gmail.com"
          >
            <lucide-mail aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/axelramadhan"
            target="_blank"
            class="bg-[#0077B5] text-white"
            aria-label="visit LinkedIn profile"
          >
            <lucide-linkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/axelmychro"
            class="bg-black text-white"
            aria-label="visit GitHub profile"
          >
            <lucide-github aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div
        class="flex flex-1 items-center justify-center bg-linear-to-tl from-zinc-700 via-zinc-800 to-zinc-900 p-4 lg:rounded-bl-md"
      >
        <p
          class="text-center text-lg leading-relaxed text-zinc-200 sm:text-xl md:text-start"
        >
          {{ $t('section.home.card.bio') }}
        </p>
      </div>

      <div
        class="flex shrink-0 flex-row place-items-center gap-2 rounded-b-md bg-linear-to-tr from-zinc-800 to-zinc-950 p-2 md:justify-end lg:grid lg:aspect-square lg:grid-cols-2 lg:justify-center lg:rounded-bl-none [&>i]:leading-none [&>i]:grayscale-75 [&>i]:transition [&>i]:hover:grayscale-0 [&>i]:sm:text-xl [&>i]:lg:text-4xl"
        aria-description="technologies: Node.js, Vue, Nuxt, JavaScript, Git, Figma, TypeScript, Tailwind CSS, Vite"
      >
        <i class="devicon-vuejs-plain colored" aria-hidden="true" />
        <i class="devicon-nuxt-original colored" aria-hidden="true" />
        <i class="devicon-javascript-plain colored" aria-hidden="true" />
        <i class="devicon-tailwindcss-original colored" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
