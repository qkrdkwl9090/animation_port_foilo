// https://nuxt.com/docs/api/configuration/nuxt-config

const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { hid: 'description', name: 'description', content: '' },
  {
    name: 'keywords',
    content: '',
  },
  { name: 'format-detection', content: 'telephone=no' },
]
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfolio',
      htmlAttrs: { lang: 'ko' },
      meta,
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@hypernym/nuxt-gsap'],
  css: ['@/assets/styles/main.css'],
  gsap: {
    extraPlugins: {
      observer: true,
      scrollTrigger: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
