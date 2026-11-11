import type { RouterConfig } from '@nuxt/schema'

// Links like /#work: scroll to the section (below the sticky header),
// waiting for the home page to render when coming from another page.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    return new Promise((resolve) => {
      const go = () => {
        if (savedPosition) resolve(savedPosition)
        else if (to.hash) resolve({ el: to.hash, top: 84, behavior: to.path === from.path ? 'smooth' : 'auto' })
        else resolve({ top: 0 })
      }
      if (to.path === from.path) go()
      else nuxtApp.hooks.hookOnce('page:finish', () => setTimeout(go, 50))
    })
  },
}
