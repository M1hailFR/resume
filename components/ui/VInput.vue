<template>
  <v-text-field
    v-model="model"
    variant="solo-filled"
    clearable
    flat
    :label="label"
    required
    density="comfortable"
    bg-color="neutrals-4"
    base-color="neutrals-1"
    color="neutrals-1"
    rounded="lg"
    class="v-input-custom text-caption"
    v-bind="$attrs"
  >
    <template v-slot:clear>
      <span class="d-inline-flex align-items-center text-neutrals-1" @click="reset">
        <slot name="clear">
          <IconCross size="24" />
        </slot>
      </span>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { IconCross } from "../icons";
defineOptions({
  name: "VInput",
});

interface IInputProps {
  label?: string;
}

withDefaults(defineProps<IInputProps>(), {
  label: "",
});

const model = defineModel({ required: true });

const reset = () => {
  model.value = "";
};
</script>

<style lang="scss" scoped>
.v-input-custom {
  :deep {
    &.v-input {
      .v-field {
        box-shadow: inset 0 0 0 1px get-rgb-color(surface-2);
        padding-bottom: 4px;
        &__overlay {
          display: none;
        }

        &:hover,
        &--active {
          border-color: get-rgb-color(neutrals-3);
          box-shadow: inset 0 0 0 1px get-rgb-color(neutrals-3);
        }
        &--error {
          border-color: get-rgb-color(danger);
          box-shadow: inset 0 0 0 1px get-rgb-color(danger);

          .v-label {
            color: get-rgb-color(neutrals-1, 0.5);
          }
        }

        .v-label {
          opacity: unset;
        }
      }

      .v-input__details {
        padding-inline: unset;
        padding-top: 2px;
      }

      &--error {
        .v-messages__message {
          color: get-rgb-color(danger);
        }
      }
    }
  }
}
</style>
