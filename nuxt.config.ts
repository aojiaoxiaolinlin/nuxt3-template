// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
      standalone: true,
    },
  },
  devtools: { enabled: true },
})
