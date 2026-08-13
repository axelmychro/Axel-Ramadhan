<script setup>
import CTAButton from '../components/CTAButton.vue'
import ProfileCard from '../components/ProfileCard.vue'
import { profile } from '../data/profile'
</script>

<template>
  <article
    class="flex size-full items-center justify-evenly gap-2 not-lg:flex-col"
  >
    <header class="flex flex-col justify-center sm:gap-2">
      <ProfileCard
        :author="profile.name"
        :bio="profile.bio"
        :picture="profile.picture"
        class="not-sm:border-b-0"
      />

      <nav class="flex justify-between not-lg:flex-col sm:gap-2">
        <CTAButton
          class="not-sm:border-b-0"
          content="Email"
        />
        <CTAButton content="LinkedIn" />
        <CTAButton content="Resume" />
      </nav>
    </header>

    <section class="flex flex-col justify-center sm:items-center">
      <div class="flex flex-col sm:gap-2 lg:gap-6">
        <CTAButton
          class="not-sm:border-b-0"
          content="#projects"
        >
          <span class="text-base tracking-wide text-pretty">
            View projects
          </span>
        </CTAButton>

        <div class="flex justify-between not-sm:flex-col sm:gap-2 lg:gap-6">
          <CTAButton
            class="not-sm:border-b-0"
            content="#about"
          />
          <CTAButton
            class="not-sm:border-b-0"
            content="#timeline"
          />
        </div>

        <CTAButton content="#contact">
          <span class="text-base tracking-wide text-pretty">
            Open for collaboration
          </span>
        </CTAButton>
      </div>
    </section>
  </article>
</template>
