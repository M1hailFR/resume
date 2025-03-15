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
        class="ml-2 ml-sm-0" 
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
  defaultClass: 'text-body1 text-neutrals-1 d-block mt-1 mb-4',
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
      margin-top: 8px;
      border: 4px solid get-rgb-color(neutrals-1, 0.2);
      background-color: get-rgb-color(brand-1);
      border-radius: 8px;
      min-width: 16px;
      min-height: 16px;
    }
    &-standart {
      margin-top: 3px;
      border: 4px solid get-rgb-color(background);
      background-color: get-rgb-color(neutrals-1);
      border-radius: 8px;
      width: 16px;
      height: 16px;
    }
    
  }
  &--details {
    flex: 1;
    margin-left: .5rem;
  }
  &:after {
    content: "";
    width: 1px;
    position: absolute;
    margin-left: 7px;
    top: 16px;
    height: calc(100%);
    background: get-rgb-color(neutrals-1, 0.2);
  }
  &:last-of-type:after {
    display: none;
  }
  @include above(map.get($grid-breakpoints, sm)) {
    &--marker {
      &-custom, &-standart {
        margin-top: 0;
        width: 32px;
        height: 32px;
      }
      &-custom {
        padding: 8px;
        border: 1px solid get-rgb-color(neutrals-1, 0.2);
      }
      &-standart {
        border-width: 12px;
      }
    }
    &:after {
      margin-left: 15px;
      top: 32px;
    }
    &--details {
      margin-left: 1rem;
    }
  }
}
</style>
