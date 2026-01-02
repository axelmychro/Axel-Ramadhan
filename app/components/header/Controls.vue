<script lang="ts" setup>
import { ref } from 'vue'

const { locale, setLocale } = useI18n()

const colorMode = useColorMode()
const sound = ref(false)

const showLinks = useState('showLinks', () => false)

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'id' : 'en')
}

function toggleTheme() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

function toggleSound() {
  sound.value = !sound.value
}
</script>

<template>
  <div
    class="flex flex-1 flex-row items-center justify-end gap-2 px-4 lg:flex-none lg:p-0"
  >
    <button
      type="button"
      :aria-label="`Toggle current language, ${locale === 'en' ? 'EN (English)' : 'ID (Bahasa Indonesia)'}, to ${locale === 'en' ? 'ID (Bahasa Indonesia)' : 'EN (English)'}`"
      class="relative cursor-pointer transition-transform active:scale-90"
      @click="toggleLocale"
    >
      <lucide-languages
        class="size-8"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
      />
      <span
        class="font-fira-code absolute bottom-0 left-0 text-xs leading-none uppercase opacity-50"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
        aria-hidden="true"
      >
        {{ locale }}
      </span>
    </button>

    <button
      type="button"
      :aria-label="`toggle theme to ${colorMode.value === 'dark' ? 'light' : 'dark'}`"
      class="cursor-pointer transition-transform active:scale-90"
      @click="toggleTheme"
    >
      <lucide-moon
        v-if="colorMode.value === 'dark'"
        class="size-8"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
      />
      <lucide-sun
        v-else-if="colorMode.value === 'light'"
        class="size-8"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
      />
      <lucide-orbit
        v-else
        class="size-8"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
      />
    </button>

    <button
      type="button"
      :aria-label="`toggle sound ${sound ? 'off' : 'on'}`"
      class="cursor-pointer transition-transform active:scale-90"
      :class="sound ? 'opacity-100' : 'opacity-50'"
      @click="toggleSound"
    >
      <lucide-headphone-off
        v-if="sound === false"
        class="size-8"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
      />
      <lucide-headphones
        v-else-if="sound === true"
        class="size-8"
        :class="showLinks ? 'text-gray-100' : 'text-inherit'"
      />
    </button>
  </div>
</template>
