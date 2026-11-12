import type { RouterConfig } from '@nuxt/schema'

// Links like /#work: scroll to the section (below the sticky header).
// Coming from another page, wait for the home page to render, then jump
// straight there instead of animating down the whole page.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    const samePage = to.path === from.path
    // Switching language (/x <-> /fa/x): stay where you are on the page.
    const withoutLocale = (path: string) => path.replace(/^\/fa(?=\/|$)/, '') || '/'
    if (!samePage && withoutLocale(to.path) === withoutLocale(from.path)) return false
    return new Promise((resolve) => {
      const go = () => {
        if (savedPosition) resolve({ ...savedPosition, behavior: 'instant' })
        else if (to.hash) resolve({ el: to.hash, top: 84, behavior: samePage ? 'smooth' : 'instant' })
        else resolve({ top: 0, behavior: 'instant' })
      }
      if (samePage) go()
      else nuxtApp.hooks.hookOnce('page:loading:end', () => setTimeout(go, 50))
    })
  },
}
