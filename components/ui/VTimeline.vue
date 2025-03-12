<template>
  <div class="v-timeline">
    <component
      v-if="customMark"
      :is="getIconByKey(icon || defaultCustomIcon)"
      size="16"
      class="v-timeline--marker-custom text-light"
    />
    <span v-if="!customMark" class="v-timeline--marker-standart rounded-circle" />
    <div class="v-timeline--details mb-4">
      <span 
        v-if="title" 
        :class="`static-class ${defaultClass} ${additionalClass}`"
      >
        {{ t(title) }}
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getIconByKey } from "~/core/helpers/icons";
import { ColorsEnum, IconsEnum, type ColorsType } from "~/core/types/components";
import { useTranslation } from "~/composables/useTranslation";
import { type IconPropType } from "~/core/types/components";

defineOptions({
  name: "VTimeline",
});

interface IVTimelineProps {
  divider?: boolean;
  customMark?: boolean;
  textColor?: ColorsType;
  title?: string;
  icon?: IconPropType;
  defaultClass?: string;
  additionalClass?: string;
}

withDefaults(defineProps<IVTimelineProps>(), {
  link: false,
  divider: false,
  customMark: false,
  title: "",
  defaultClass: 'text-body1 text-neutrals-1 opacity-60 d-block mt-1 mb-4',
  additionalClass: '',
});

const { t } = useTranslation();
const defaultCustomIcon = IconsEnum.Check;
</script>

<style lang="scss" scoped>
.v-timeline {
  display: flex;
  position: relative;

  &--marker {
    &-custom {
      border: 1px solid get-rgb-color(neutrals-1, 0.2);
      background: get-rgb-color(background);
      border-radius: 8px;
      padding: 6px;
      min-width: 32px;
      min-height: 32px;
    }
    &-standart {
      border: 12px solid get-rgb-color(background);
      background: get-rgb-color(neutrals-1);
      border-radius: 8px;
      width: 32px;
      height: 32px;
    }
  }
  &--details {
    flex: 1;
    margin-left: 1rem;
  }
  &:after {
    content: "";
    width: 1px;
    position: absolute;
    margin-left: 15px;
    top: 32px;
    height: calc(100%);
    background: get-rgb-color(neutrals-1, 0.2);
  }
  &:last-of-type:after {
    display: none;
  }
}
</style>
