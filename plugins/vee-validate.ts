import { configure } from 'vee-validate'

export default defineNuxtPlugin(() => {
  configure({
    validateOnBlur: true,
    validateOnChange: false,
    validateOnInput: false,
    validateOnModelUpdate: false,
  })
})
