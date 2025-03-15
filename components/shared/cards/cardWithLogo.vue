<template>
  <div class="card rounded-lg transition-all" :class="`card-${size}`">
    <div class="card--inner d-flex flex-column">
      <div class="d-flex align-center ga-4">
        <img
          v-if="logo"
          :src="logo"
          class="card--logo rounded-lg"
          :class="`card-${size}-logo`"
        />
        <div v-if="value" class="title" :class="size === 'medium' ? 'text-body2' : 'text-body3'">
          {{ t(value) }}
          <div v-if="time" class="text-neutrals-1 text-body3 opacity-50">{{ t(time) }}</div>
        </div>
      </div>

      <div v-if="text" class="card--description">
        <div v-if="text" class="text text-neutrals-1 text-body3 opacity-60">{{ t(text) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICardWithLogoProps } from "./shared";
import { SizesEnum } from "~/core/types/components";
import { useTranslation } from "~/composables/useTranslation";

defineOptions({
  name: "CardWithLogo",
});

const props = withDefaults(defineProps<ICardWithLogoProps>(), {
  size: SizesEnum.MEDIUM,
});

const { t } = useTranslation();
const isMediumCard = computed(() => {
  return props.size === SizesEnum.MEDIUM;
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid get-rgb-color(brand-1, 0.1);
  background-color: get-rgb-color(neutrals-1, 0.02);
  cursor: pointer;
  &-medium {
    padding: $spacer * 4;
    @include above(map.get($grid-breakpoints, md)) {
      padding: $spacer * 5 $spacer * 6;
    }
    &-logo {
      max-width: 48px;
      max-height: 48px;
    }
    .title {
      color: get-rgb-color(neutrals-1);
    }
    .text {
      @include line-clamp(3);
    }
  }

  &-small {
    padding: $spacer * 2 $spacer * 4;

    &-logo {
      max-width: 32px;
      max-height: 32px;
    }
    .title {
      color: get-rgb-color(neutrals-1);
    }
    .text {
      @include line-clamp(2);
    }
  }

  &--inner {
    height: 100%;
    position: relative;
    gap: $spacer * 2;
  }

  &:hover {
    border: 1px solid get-rgb-color(brand-1);
  }
}
</style>
