<template>
  <v-textarea
    v-model="model"
    variant="outlined"
    :label="label"
    flat
    clearable
    required
    no-resize
    density="comfortable"
    bg-color="neutrals-4"
    base-color="neutrals-1"
    color="neutrals-1"
    rounded="lg"
    class="v-textarea-custom text-caption transition-all"
    v-bind="$attrs"
  >
    <template v-slot:clear>
      <span class="d-inline-flex align-items-center text-neutrals-1" @click="reset">
        <slot name="clear">
          <IconCross size="24" />
        </slot>
      </span>
    </template>
  </v-textarea>
</template>

<script setup lang="ts">
import { IconCross } from "../icons";

defineOptions({
  name: "VTextarea",
});

interface ITextareaProps {
  label?: string;
}

withDefaults(defineProps<ITextareaProps>(), {
  label: "",
});

const model = defineModel({ required: true });

const reset = () => {
  model.value = "";
};
</script>

<style lang="scss" scoped>
.v-textarea-custom {
  :deep {
    &.v-input {
      .v-field {
        &__input {
          &::-webkit-scrollbar {
            width: 0px;
            background-color: #f9f9fd;
          }
        }

        &:hover,
        &--active {
          border-color: get-rgb-color(neutrals-3);
        }
        &--error {
          border-color: get-rgb-color(danger);
          .v-label {
            color: get-rgb-color(neutrals-1, 0.8);
          }
        }

        .v-label {
          opacity: unset;
        }
      }

      .v-input__details {
        padding-inline: unset;
        min-height: 16px;
      }

      &--error {
        padding-top: 2px;
        padding-bottom: 4px;
        .v-messages__message {
          color: get-rgb-color(danger);
        }
      }
    }
  }
}
</style>
