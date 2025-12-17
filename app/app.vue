<script lang="ts" setup>
import Header from "~/components/header/Header.vue";
import Main from "~/components/main/Main.vue";
import Footer from "~/components/footer/Footer.vue";
import Overlay from "~/components/layout/Overlay.vue";

const activeSectionIndex = useActiveSection();
</script>
<template>
  <Header class="z-50" />
  <Main />
  <Footer class="z-10" />
  <Overlay :section="activeSectionIndex" class="z-20" />
</template>
