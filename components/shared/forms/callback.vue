<template>
  <div class="callback d-flex flex-column align-center justify-center" :class="{ 'callback-padding': !disablePadding }">
    <div v-if="formSettings && formSettings.title" class="text-center text-title4 text-md-title3" :class="titleColor && `text-${titleColor}`">
      {{ t(formSettings.title) }}
    </div>
    <div v-if="formSettings && formSettings.subtitle" class="mt-1 text-body2 text-center" :class="subtitleColor && `text-${subtitleColor}`">
      {{ t(formSettings.subtitle) }}
    </div>
    <div class="callback--body">
      <v-form
        v-model="isValidForm"
        class="callback--actions mt-6 mt-md-8 d-flex flex-column"
        @submit.prevent="onSendForm"
      >
        <v-input :label="t('form.name')" required :rules="namePules" v-model="form.name" />
        <v-input :label="t('form.phone')" v-mask="'mobile'" required :rules="phonePules" v-model="form.phone" />
        <v-input :label="t('form.email')" :rules="emailPules" v-model="form.email" />
        <v-text-input-area :label="t('form.message')" required v-model="form.message" />
        <v-button v-if="formSettings && formSettings.buttonText" block type="submit" class="text-body-2"> {{ t(formSettings.buttonText) }} </v-button>
      </v-form>
      <div v-if="formSettings && formSettings.description" class="callback--body--description mt-5 mt-sm-10 text-body3 text-center text-decoration-none" :class="descriptionColor && `text-${descriptionColor}`" v-html="t(formSettings.description)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VInput, VTextInputArea, VButton } from '~/components/ui';
import { type FormSendStatusType, ApiSendFormStatus } from '~/core/types/api';
import { type IFormCallbackSettings } from './shared'
import { type ColorsType, ColorsEnum } from '~/core/types/components';
import { namePules, phonePules, emailPules } from '~/core/utils/validation';
import { useTranslation } from "~/composables/useTranslation";
import { sendInTelegram } from '~/composables/sendInTelegram';

defineOptions({
  name: 'SharedFormCallback'
});

interface ISharedFormCallbackProps {
  formSettings: IFormCallbackSettings;
  disablePadding?: boolean;
  titleColor?: ColorsType;
  subtitleColor?: ColorsType;
  descriptionColor?: ColorsType;
}

withDefaults(defineProps<ISharedFormCallbackProps>(), {
  disablePadding: false,
  titleColor: ColorsEnum.NEUTRALS_1,
  subtitleColor: ColorsEnum.NEUTRALS_1,
  descriptionColor: ColorsEnum.NEUTRALS_1
});

const { t } = useTranslation();

const emit = defineEmits<{
  'send-form': [status: FormSendStatusType];
}>();

const isValidForm = ref(false);
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const onSendForm = async () => {
  if (isValidForm.value) {
    emit('send-form', ApiSendFormStatus.success)
    try {
      // Создаем схему для отображения полей в сообщении
      const schema = {
        name: { placeholder: 'Имя' },
        email: { placeholder: 'Email' },
        phone: { placeholder: 'Телефон' },
        message: { placeholder: 'Сообщение' }
      }

      // Дополнительные данные если нужны
      const additionalData = [
        { title: 'Источник', value: 'Сайт-портфолио' },
        { title: 'Дата', value: new Date().toLocaleString() }
      ]

      await sendInTelegram(
        form.value,
        schema,
        'Новая заявка с сайта-портфолио',
        additionalData
      )

      // Очистка формы после успешной отправки
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
      
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      emit('send-form', ApiSendFormStatus.error)
    }
  }
}
</script>

<style lang="scss" scoped>
.callback {
  &-padding {
    padding: 0 20px;

    @include above(map.get($grid-breakpoints, md)) {
      padding: 0 80px;
    }
  }

  &--body {
    width: 100%;
    max-width: 375px;

    &--description {
      ::v-deep {
        & > a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  &--actions {
    row-gap: $spacer;
  }
}
</style>
