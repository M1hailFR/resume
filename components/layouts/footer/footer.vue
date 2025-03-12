<template>
  <footer v-if="fields" dark class="footer">
    <v-container>
      <div class="footer--wrapper rounded-lg px-6 py-4">
        <div class="d-flex justify-space-between w-100">
          <div class="footer--left d-flex align-center justify-space-between w-100">
            <v-title v-if="fields.text" tag="h2" defaultClass="text-lighter" :title="t(fields.text)" />
          </div>          
        </div>
        <span class="">©{{ ' ' + new Date().getFullYear() + ' ' }}rmnch</span>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
import { type IFieldsProps } from "~/core/types/components";
import { VTitle } from "~/components/ui";
import { useTranslation } from "~/composables/useTranslation";

const { t } = useTranslation();

defineOptions({
  name: "FooterDefault",
});

interface IOffer {
  text: string;
  link: string;
}

defineProps<IFieldsProps<IOffer>>();

</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  top: 0;
  // z-index: 50;

  &--wrapper {
    position: relative;
    z-index: 10;
  }

  &--left {
    column-gap: $spacer * 1;
  }

  &--right {
    column-gap: $spacer * 1;
  }
}
</style>

