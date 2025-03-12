<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
import { useScrollStore } from "~/stores/scroll";
// Компоненты будут автоматически импортированы благодаря Nuxt
const { checkScrollTop } = useScrollStore();

onMounted(() => {
  window.addEventListener("scroll", checkScrollTop);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScrollTop);
});
</script>
