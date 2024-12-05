import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/element-plus.js'],
  // storybook: {
  //   // Options
  //   url: 'http://localhost:6006',
  //   port: 6006,
  // },
})