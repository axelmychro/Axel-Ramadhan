<script lang="ts" setup>
const { linkItems } = useNavLinks();

const activeSectionIndex = useActiveSection();
const isAnimating = useState<boolean>("isAnimating", () => false);

function goToSection(index: number) {
  if (isAnimating.value) return;
  activeSectionIndex.value = index;
  closeLinks();
}

const showLinks = useState<boolean>("showLinks", () => false);

const isLargeScreen = useState(
  "isLargeScreen",
  () => typeof window !== "undefined" && window.innerWidth >= 1024,
);

const checkScreenSize = () => {
  if (typeof window !== "undefined") {
    isLargeScreen.value = window.innerWidth >= 1024;
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});

function handleBackdropClick() {
  if (!isLargeScreen.value) {
    showLinks.value = false;
  }
}
function closeLinks() {
  showLinks.value = false;
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      @click="handleBackdropClick"
      v-show="showLinks || isLargeScreen"
      class="absolute inset-0 flex h-screen w-screen bg-black/90 pt-16 pr-12 lg:static lg:h-fit lg:w-full lg:bg-transparent lg:p-0"
    >
      <div
        class="flex size-full flex-col justify-start p-4 lg:mx-4 lg:h-fit lg:w-full lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:p-0"
      >
        <button
          v-for="linkItem in linkItems"
          @click="
            goToSection(linkItem.index);
            closeLinks();
          "
          :aria-label="`go to ${linkItem.label} section`"
          class="font-oswald animate-slide flex flex-row items-center justify-between border-b-2 p-2 text-lg leading-0 uppercase transition-colors not-lg:text-gray-100 hover:border-sky-300 hover:text-sky-300 focus:border-sky-300 focus:text-sky-300 lg:gap-2 lg:border-transparent"
          :class="{
            'border-sky-300 text-sky-300':
              activeSectionIndex === linkItem.index,
          }"
        >
          <LucideHouse v-if="linkItem.icon === 'House'" />
          <LucideCode v-else-if="linkItem.icon === 'Code'" />
          <LucideInfo v-else-if="linkItem.icon === 'Info'" />
          <LucideMap v-else-if="linkItem.icon === 'Map'" />
          <LucideUser v-else-if="linkItem.icon === 'User'" />
          {{ $t(`nav.${linkItem.label}`) }}
        </button>
      </div>
      <div
        class="overlays fixed top-16 left-0 w-screen border-b border-white lg:hidden"
      ></div>

      <div
        class="overlays fixed right-12 bottom-0 h-screen border-l border-white lg:right-32 lg:hidden"
      ></div>
    </div>
  </Transition>
</template>
