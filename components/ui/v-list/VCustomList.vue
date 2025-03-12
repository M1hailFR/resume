<template>
  <ul class="v-list">
    <template v-for="(item, idx) in list">
      <li v-if="divider && idx" class="v-list--divider" />
      <li class="v-list--item d-flex align-center">
        <component :is="getComponent(item)" :link="item.link" target="_target" class="d-flex align-center ga-3" variant="primary">
          <div class="v-list--marker-custom d-flex align-center justify-center">
            <component
              v-if="customMark"
              :is="getIconByKey(item.icon || defaultCustomIcon)"
              size="20"
              class="v-list--marker-custom-icon"
            />
          </div>

          <span v-if="!customMark" class="v-list--marker-standart rounded-circle" /> 
          <span class="d-flex flex-column">
            <span v-if="item.title" class="text-caption opacity-60">
              {{ t(item.title) }}
            </span>
            <span v-if="item.text" class="text-body2">
              {{ t(item.text) }}
            </span>
          </span>
        </component>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { VLink } from "~/components/ui";
import { getIconByKey } from "~/core/helpers/icons";
import { type IListItem } from "./shared";
import { ColorsEnum, IconsEnum, type ColorsType } from "~/core/types/components";
import { useTranslation } from "~/composables/useTranslation";

defineOptions({
  name: "VList",
});

interface IVListProps {
  list: IListItem[];
  divider?: boolean;
  customMark?: boolean;
  textColor?: ColorsType;
}

withDefaults(defineProps<IVListProps>(), {
  link: false,
  divider: false,
  customMark: false,
  textColor: ColorsEnum.NEUTRALS_1,
});

const { t } = useTranslation();

const defaultCustomIcon = IconsEnum.Check;

const getComponent = (list: IListItem) => {
  if (list.link) {
    return VLink;
  }
  return "div";
};
</script>

<style lang="scss" scoped>
.v-list {
  list-style-type: none;
  background-color: transparent;

  &--divider {
    height: 1px;
    margin: 6px 0;
  }

  &--item {
    column-gap: $spacer * 2;
    &:has(.v-list--marker-custom) {
      column-gap: $spacer * 4;
    }
  }

  &--marker {
    &-custom {
      min-width: 32px;
      background-color: get-rgb-color(neutrals-5);
      box-shadow: 0px 0px 16px 4px rgba(255, 255, 255, 0.1);
      aspect-ratio: 1/1;
      border-radius: 50%;
      &-icon {
       
        min-width: 20px;
        
      }
    }

    &-standart {
      width: 4px;
      height: 4px;
      min-width: 4px;
    }
  }
}
</style>
