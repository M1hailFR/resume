<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 32 32"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`"
  >
    <path
      fill="currentColor"
      d="M13 9v6H9V9H7v14h2v-6h4v6h2V9zm10 4h-4V9h-2v14h2v-8h4v8h2v-8a2 2 0 0 0-2-2"
    />
  </svg>
</template>

<script setup lang="ts">
import { getIconRotate, type IPropsIcon } from "../shared";
defineOptions({
  name: "IconHh",
});

withDefaults(defineProps<IPropsIcon>(), {
  width: "",
  height: "",
  size: 16,
  rotate: null,
});
</script>
