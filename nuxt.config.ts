// Fully static site: `npm run generate` outputs plain HTML/CSS/JS to .output/public
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'],
  // English lives at /, Farsi at /fa. Page text comes from app/data/site.ts
  // and app/data/site.fa.ts (see useSite), not from i18n message files.
  i18n: {
    locales: [
      { code: 'en', language: 'en', dir: 'ltr', name: 'English' },
      { code: 'fa', language: 'fa-IR', dir: 'rtl', name: 'فارسی' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'static', prerender: { routes: ['/', '/fa'] } },
  app: {
    head: {
      title: 'Farnaz — Frontend Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend developer crafting fast, accessible and beautiful web experiences with Vue, Nuxt and TypeScript.' },
        { name: 'theme-color', content: '#5e6e4f' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=DM+Sans:opsz,wght@9..40,400..700&family=Caveat:wght@500&family=Estedad:wght@300..700&display=swap',
        },
      ],
    },
  },
})
