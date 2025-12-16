<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

const linkItems = [
  { label: "nav.home", icon: "House", index: 0 },
  { label: "nav.projects", icon: "Code", index: 1 },
  { label: "nav.about", icon: "Info", index: 2 },
  { label: "nav.timeline", icon: "Map", index: 3 },
  { label: "nav.contact", icon: "User", index: 4 },
];

const activeSectionIndex = useActiveSection();
const isAnimating = useState<boolean>("isAnimating", () => false);

function goTo(index: number) {
  if (isAnimating.value) return;
  activeSectionIndex.value = index;
  closeLinks();
}

const showLinks = useState("showLinks");

const isLargeScreen = useState(
  "isLargeScreen",
  () => typeof window !== "undefined" && window.innerWidth >= 1024,
);

const checkScreenSize = () => {
  if (typeof window !== "undefined") {
    isLargeScreen.value = window.innerWidth >= 1024;
    if (isLargeScreen.value) {
      showLinks.value = true;
    }
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
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      @click="handleBackdropClick"
      v-show="showLinks || isLargeScreen"
      class="absolute inset-0 z-50 flex h-screen w-full flex-1 bg-black/50 pt-16 pr-14 pl-2 lg:static lg:h-fit lg:bg-transparent lg:p-0"
    >
      <div
        class="flex h-screen w-full flex-col justify-start lg:mx-4 lg:h-fit lg:w-full lg:flex-row lg:items-center lg:justify-end lg:gap-2"
      >
        <button
          v-for="item in linkItems"
          :key="item.label"
          @click="
            goTo(item.index);
            closeLinks();
          "
          class="font-oswald flex flex-row items-center justify-between border-b-2 p-2 text-lg leading-0 text-gray-100 uppercase transition-colors duration-300 hover:border-sky-300 hover:text-sky-300 focus:border-sky-300 focus:text-sky-300 lg:gap-2 lg:border-transparent lg:text-inherit"
          :class="{ 'text-sky-300': activeSectionIndex === item.index }"
        >
          <LucideHouse v-if="item.icon === 'House'" />
          <LucideCode v-else-if="item.icon === 'Code'" />
          <LucideInfo v-else-if="item.icon === 'Info'" />
          <LucideMap v-else-if="item.icon === 'Map'" />
          <LucideUser v-else-if="item.icon === 'User'" />
          {{ $t(item.label) }}
        </button>
      </div>
    </div>
  </Transition>
</template>
