<template>
  <div class="card">
    <div class="card--wrapper pb-4">
      <div class="card--wrapper-left" :style="`min-width: ${minWidth}px`">
        <div class="card--wrapper-left-content">
          <NuxtImg v-if="image" fit="cover" :src="image" class="card--image rounded-lg" />

          <div class="card--wrapper-left-content-info" >
            <div class="d-flex align-center ga-2">
              <component v-if="icon" :is="getIconByKey(icon)" size="32" class="card--icon" />
              <v-title defaultClass="text-body2 mt-1" :title="t(title)" />
            </div>
            
            <v-title v-if="post" defaultClass="text-body2 opacity-60" :title="t(post)" />
          </div>
        </div>
      </div>
      <div class="card--wrapper-right">
        <v-title v-if="text" defaultClass="card--text text-caption opacity-60" :title="t(text)" />
        <div v-if="info" class="d-flex flex-wrap ga-2 mt-4 mt-md-0">
          <VBadge v-for="(item, idx) in info" :key="idx" variant="outlined" size="small">
            {{ t(item) }}
          </VBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VTitle, VBadge } from "~/components/ui";
import { type ICardWithInfoProps } from "./shared";
import { useTranslation } from "~/composables/useTranslation";
import { getIconByKey } from "~/core/helpers/icons";
defineOptions({
  name: "CardWithInfo",
});

defineProps<ICardWithInfoProps>();

const { t } = useTranslation();
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin-bottom: $spacer * 4;
  &--wrapper {
    justify-content: space-between;
    gap: $spacer * 4;

    &-left {
      display: flex;
      flex-direction: column;
      gap: $spacer * 4;

      &-content {
        width: 100%;
        display: flex;
        gap: $spacer * 4;
        height: 100%;
        // align-items: center;
      }
    }
    &-right {
      display: flex;
    }
  }

  &--image {
    width: 50px;
    height: 50px;
  }
  &--text {
    margin-top: 8px;
  }
  &--icon {
    width: 38px;
    height: 38px;
    background-color: get-rgb-color(neutrals-1, 0.1);
    border-radius: 10px;
    padding: 8px;
  }
  @include above(map.get($grid-breakpoints, md)) {
    &--wrapper {
      display: flex;
    }
    &--text {
      margin-top: -36px;
    }
  }
}
</style>
