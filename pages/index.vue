<template>
  <div class="w-100">
    <VVerticalPadding
      :desktop-padding="MAIN_CARD_RESUME_BLOCK.desktopPadding"
      :mobile-padding="MAIN_CARD_RESUME_BLOCK.mobilePadding"
    >
      <BlockCardResume :fields="MAIN_CARD_RESUME_BLOCK.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script lang="ts" setup>
import { BlockCardResume } from "~/components/blocks";
import { VVerticalPadding } from "~/components/ui";
import { MAIN_CARD_RESUME_BLOCK } from "~/configs/pages/index";
</script>
