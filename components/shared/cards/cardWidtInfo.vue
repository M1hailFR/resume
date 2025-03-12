<template>
  <div class="card">
    <div class="card--wrapper">
      <div class="card--wrapper-left">
        <div class="card--wrapper-left-content">
          <NuxtImg v-if="image" fit="cover" :src="image" class="card--image rounded-lg" />

          <div class="card--wrapper-left-content-info">
            <v-title v-if="post" defaultClass="text-body2 opacity-60" :title="t(post)" />
            <v-title defaultClass="text-body2 mt-1" :title="t(title)" />
          </div>
        </div>
      </div>
      <div v-if="text" class="card--wrapper-right">
        <v-title defaultClass="card--text text-caption opacity-60" :title="t(text)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VTitle } from "~/components/ui";
import { type ICardWithInfoProps } from "./shared";
import { useTranslation } from "~/composables/useTranslation";

defineOptions({
  name: "CardWithInfo",
});

defineProps<ICardWithInfoProps>();

const { t } = useTranslation();
</script>

<style lang="scss" scoped>
.card {
  width: 100%;

  &--wrapper {
    justify-content: space-between;
    gap: $spacer * 4;

    &-left {
      display: flex;
      flex-direction: column;
      gap: $spacer * 4;
      min-width: 256px;
      &-content {
        display: flex;
        gap: $spacer * 4;
      }
    }
    &-right {
      display: flex;
    }
  }

  &--image {
    width: 64px;
    height: 64px;
  }
  &--text {
    margin-top: 8px;
  }
  @include above(map.get($grid-breakpoints, sm)) {
    &--wrapper {
      display: flex;
    }
    &--text {
      margin-top: -34px;
    }
  }
}
</style>
