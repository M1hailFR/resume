<template>
  <header v-if="fields" dark class="header">
    <div class="header--wrapper bg-background rounded-lg px-md-6 py-4">
      <v-container>
        <div class="d-flex justify-space-between w-100 px-md-6">
          <div class="header--left d-flex align-center justify-space-between w-100">
            <v-title
              v-if="fields.text"
              tag="h2"
              defaultClass="text-neutrals-1 text-title5"
              :title="t(fields.text)"
            />
          </div>
          <div class="header--right d-flex align-center justify-end">
            <div class="d-flex align-center ga-3">
              <v-button
                v-if="fields.buttonForm"
                size="small"
                @click="changeIsOpenCallback"
                class="text-body3 px-2 py-1"
              >
                {{ isOpenCallback ? t('Закрыть') : t(fields.buttonForm) }}
              </v-button>
              <component
                :is="getIconTheme()"
                class="cursor-pointer"
                @click="appStore.toggleTheme"
                :size="20"
              />
              <component
                :is="IconLang"
                @click="switchLanguage(appStore.localeLang === 'ru' ? 'en' : 'ru')"
                :size="20"
                class="cursor-pointer"
                :class="appStore.localeLang === 'ru' ? 'text-neutrals-1' : 'text-brand-2'"
              />
            </div>
          </div>
        </div>
      </v-container>
    </div>

    <mobile-sidebar-menu-default
      v-model="isOpenMenu"
      :button-text="fields.buttonForm"
      :menu="fields.menu"
      :contacts="fields.contacts"
      @open-callback="changeIsOpenCallback"
    />
    <mobile-sidebar-callback-default
      v-model="isOpenCallback"
      :modal-settings="fields.formSettings"
      @close-sidebar="onCloseSidebar"
      class="d-md-none"
    />
    <modal-default
      v-model="isOpenCallback"
      :modal-settings="fields.formSettings"
      class="d-none d-md-flex"
    />
  </header>
</template>

<script setup lang="ts">
import { type IFieldsProps } from "~/core/types/components";
import {
  type IHeaderIndividualProps,
  MobileSidebarMenuDefault,
  MobileSidebarCallbackDefault,
} from "./shared";
import { useAppStore } from "~/stores/app";
import { useLanguageSwitch, useTranslation } from "~/composables/useTranslation";
import { VButton, VTitle } from "~/components/ui";
import { IconSunny, IconNight, IconLang } from "~/components/icons";
import { ModalDefault } from "~/components/modals";

const appStore = useAppStore();
const { switchLanguage } = useLanguageSwitch();
const { t } = useTranslation();

defineOptions({
  name: "HeaderDefault",
});

defineProps<IFieldsProps<IHeaderIndividualProps>>();

const isOpenMenu = ref<boolean | undefined>(false);
const isOpenCallback = ref<boolean | undefined>(false);

const changeIsOpenCallback = () => {
  isOpenCallback.value = !isOpenCallback.value;
};

const onCloseSidebar = () => {
  isOpenMenu.value = false;
};

watch(isOpenMenu, (newValue) => {
  if (!newValue) isOpenCallback.value = false;
});

const getIconTheme = () => {
  return appStore.theme === "light" ? IconSunny : IconNight;
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;

  &--wrapper {
    position: relative;
    z-index: 1000;
    box-shadow: 0px 0px 30px get-rgb-color(neutrals-1, 0.06);
    // background: get-rgb-color(neutrals-1);
  }

  &--left {
    column-gap: $spacer * 1;
  }

  &--right {
    column-gap: $spacer * 1;
  }

  &--logo {
    height: 28px;
  }

  &--menu {
    column-gap: $spacer * 6;
  }
}
</style>
