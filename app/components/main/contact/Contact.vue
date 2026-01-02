<script lang="ts" setup>
import Section from '~/components/Section.vue'
</script>

<template>
  <Section id="contact">
    <div class="flex size-full flex-row items-center justify-center p-2">
      <div class="flex flex-col gap-2 sm:gap-8 [&>div>div>time]:text-xs">
        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-full bg-neutral-800"
            >
              <p class="leading-0 text-neutral-200">
                AR
              </p>
            </div>
            <p class="text-xl">
              Axel
            </p>
            <time>4:02</time>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              since you've reached this part, why not reach me as well? let's
              talk.
            </p>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              <a
                class="text-cyan-800 underline"
                href="mailto:axelmychro@gmail.com"
                aria-label="send email to axelmychro@gmail.com"
              >
                <LucideMail class="m-px inline size-4" aria-hidden="true" />
                axelmychro@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2 self-end">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-full bg-neutral-800"
            >
              <p class="leading-0 text-neutral-200">
                U
              </p>
            </div>
            <p class="text-xl">
              You
            </p>
            <time>4:11</time>
          </div>

          <p
            class="max-w-[90%] self-end rounded-xl rounded-br-none bg-cyan-500 p-2 text-neutral-800"
          >
            that's cool, but are you okay with casual talks?
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-2">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-full bg-neutral-800"
            >
              <p class="leading-0 text-neutral-200">
                AR
              </p>
            </div>
            <p class="text-xl">
              Axel
            </p>
            <time>4:17</time>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              of course! you wanna just talk about games, it's fine
            </p>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              <a
                class="text-purple-700"
                target="_blank"
                href="https://instagram.com/axelmychro"
                aria-label="visit Instagram profile @axelmychro"
              >
                <LucideInstagram
                  class="m-px inline size-4"
                  aria-hidden="true"
                />
                @axelmychro
              </a>
            </p>
          </div>

          <div
            class="max-w-[90%] self-start rounded-xl rounded-tl-none bg-purple-300 p-2"
          >
            <p class="text-neutral-800">
              thanks for visiting my portfolio!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
