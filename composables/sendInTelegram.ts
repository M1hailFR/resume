const TOKEN = '7807465654:AAEi-IXytVtQMc9_LSMfs7jxVSVk3CY87M4'
const CHAT_ID = '5093309173'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

interface IAdditionalData {
  title: string;
  value: string;
}

export const sendInTelegram = async (
  form: Record<string, string>,
  schema: Record<string, { placeholder: string }>,
  title = 'Заявка с сайта для покупателей',
  data: IAdditionalData[] = []
) => {
  let message = `<b>${title}</b>\n\n`

  for (const item in schema) {
    message += `<b>${schema[item].placeholder}:</b> ${
      form[item] ? form[item] : '-'
    }\n`
  }

  for (const item of data) {
    message += `<b>${item.title}:</b> ${item.value}\n`
  }

  await $fetch(URL_API, {
    method: 'POST',
    body: {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    },
  })
}
