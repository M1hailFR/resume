<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-chip
      :variant="variant"
      :color="getColor(isHovering)"
      class="v-badge-custom transition-all rounded-lg text-caption cursor-pointer"
      :class="sizeClasses"
      size="custom"
      :disabled="disabled"
      v-bind="{ ...props, ...$attrs }"
    >
      <slot />
    </v-chip>
  </v-hover>
</template>

<script setup lang="ts">
import { type SizesType, SizesEnum, type ColorsType, ColorsEnum } from '~/core/types/components'

defineOptions({
  name: 'VBadge',
  inheritAttrs: false,
})

type BadgeColors = Extract<ColorsType, `${ColorsEnum.BRAND_1 | ColorsEnum.BRAND_2 | ColorsEnum.NEUTRALS_4 | ColorsEnum.NEUTRALS_1 | ColorsEnum.NEUTRALS_2 }`>

interface IBadgeProps {
  size?: SizesType
  disabled?: boolean
  variant?: 'flat' | 'outlined' | 'text'
}

const props = withDefaults(defineProps<IBadgeProps>(), {
  size: SizesEnum.MEDIUM,
  disabled: false,
  variant: 'flat',
})

const getColor = (isHovering: boolean | null): BadgeColors => {
  if (props.disabled) return ColorsEnum.NEUTRALS_4;

  switch (props.variant) {
    case 'outlined':
    case 'text':
      return isHovering ? ColorsEnum.BRAND_1 : ColorsEnum.NEUTRALS_1;
    case 'flat':
    default:
      return isHovering ? ColorsEnum.BRAND_1 : ColorsEnum.BRAND_2;
  }
};

const sizeClasses = computed(() => {
  switch (props.size) {
    case SizesEnum.SMALL:
      return 'px-2 py-1'
    case SizesEnum.MEDIUM:
      return 'pa-3'
    case SizesEnum.LARGE:
      return 'px-5 py-4'
  }
})

</script>

<style lang="scss" scoped>
.v-badge-custom {
  :deep(.v-chip__overlay) {
    display: none;
  }

  &.v-chip--variant-outlined {
    border: 1px solid currentColor !important;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }

  &.v-chip--variant-text {
    width: max-content;
  }
}
</style>
