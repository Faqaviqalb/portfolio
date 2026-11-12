// Switches between English and Farsi with a cross-fade (View Transitions API).
// Browsers without it, or visitors who prefer reduced motion, get an instant switch.
export function useLocaleSwitch() {
  const nuxtApp = useNuxtApp()
  const switchLocalePath = useSwitchLocalePath()
  const { locale } = useI18n()
  // Read by useReveal: show the new page's content at once instead of
  // fading it in a second time after the cross-fade.
  const instantReveal = useState('instant-reveal', () => false)

  const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

  async function go(to: string, code: string) {
    instantReveal.value = true
    const rendered = new Promise<void>((r) => nuxtApp.hooks.hookOnce('page:finish', () => r()))
    await navigateTo(to)
    // Wait for the new page (and its lang/dir attributes and font) before
    // the browser takes the "after" picture.
    await Promise.race([rendered, wait(1000)])
    if (code === 'fa') await Promise.race([document.fonts.load('400 16px Estedad'), wait(800)])
    await nextTick()
    await wait(0)
  }

  return function switchTo(code: 'en' | 'fa', e: MouseEvent) {
    // Let the browser handle "open in new tab" clicks.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    if (code === locale.value) return

    const to = switchLocalePath(code)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduceMotion) {
      navigateTo(to)
      return
    }
    const transition = document.startViewTransition(() => go(to, code))
    // The browser skips the animation in some cases (e.g. a background tab);
    // the language still switches, so that's not an error.
    transition.ready.catch(() => {})
  }
}
