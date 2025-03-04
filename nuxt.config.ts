// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      serverDomain: process.env.SERVER_DOMAIN,
      serverPort: process.env.SERVER_PORT,
      serverToken: process.env.SERVER_TOKEN
    }
  },
  css: ['@/assets/css/tailwind.css'],
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts',
    '@vee-validate/nuxt', 'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
