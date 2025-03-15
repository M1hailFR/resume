<template>
  <div class="card rounded-lg px-4 pt-4 pb-3 transition-all">
    <div class="card--wrapper">
      <div class="card--content">
        <NuxtImg v-if="image" fit="cover" :src="image" class="card--image rounded-lg" />
      </div>
      <div class="card--info">
        <div v-if="title" class="text-neutrals-1 text-body2">{{ t(title) }}</div>
        <div
          v-if="text"
          class="card--text text-neutrals-1 opacity-60 text-caption text-truncate-2-lines"
        >
          {{ t(text) }}
        </div>
      </div>
    </div>
    <div class="d-flex ga-2">
      <v-link v-if="repo" :link="repo" target="_target" class="card--link mt-1 d-flex align-center">
        <component :is="IconGitHub" :size="20" class="card--link-icon" />
      </v-link>
      <v-link
        v-if="site"
        :link="site"
        target="_target"
        class="card--link mt-1 d-flex align-center ga-2"
      >
        <component :is="IconSite" :size="20" rotate="half" class="card--link-icon" />
        {{ site }}
      </v-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSite, IconGitHub } from "~/components/icons";
import { VLink } from "~/components/ui";
import { useTranslation } from "~/composables/useTranslation";
import { type ICardWithImageExampleProps } from "./shared";

defineOptions({
  name: "CardWithImageExample",
});

defineProps<ICardWithImageExampleProps>();
const { t } = useTranslation();
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  border: 1px solid get-rgb-color(brand-1, 0.1);
  background-color: get-rgb-color(neutrals-1, 0.02);
  &:hover {
    border: 1px solid get-rgb-color(brand-1);
    &.card--link {
      color: get-rgb-color(brand-1);
    }
  }
  &--wrapper {
    display: flex;
    gap: $spacer * 3;
  }
  &--link {
    &-icon {
      background-color: get-rgb-color(neutrals-1, 0.2);
      border-radius: 50%;
      height: 28px;
      width: 28px;
      padding: 4px;
    }
  }
  &--title {
    flex: 1;
    min-width: 0;
  }

  &--text {
    @include line-clamp(3);
  }

  &--content {
    flex-shrink: 0;
    width: 64px;
  }

  &--image {
    background-color: get-rgb-color(neutrals-1, 0.03);
    padding: 8px;
    width: 64px;
    aspect-ratio: 1/1;
  }

  // &--hovered {
  //   border: 1px solid get-rgb-color(brand-1);

  //   :deep(a) {
  //     color: get-rgb-color(primary);
  //     text-decoration: underline;
  //   }
  // }
}
</style>
