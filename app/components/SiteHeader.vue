<script setup lang="ts">
const site = useSite()
const nav = computed(() => site.value.nav)
const profile = computed(() => site.value.profile)
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const switchTo = useLocaleSwitch()
const langs = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fa', label: 'فا', name: 'فارسی' },
] as const

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()
const active = ref(route.path === '/' ? '#home' : '#work')

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 10)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) active.value = `#${e.target.id}`
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  nav.value.forEach((n) => {
    const el = document.querySelector(n.href)
    if (el) io.observe(el)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    io.disconnect()
  })
})
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container bar">
      <NuxtLink :to="localePath({ path: '/', hash: '#home' })" class="logo" :aria-label="site.ui.home">
        <span class="mark">{{ profile.monogram }}<AppIcon name="spark" class="spark" /></span>
        <span class="word">{{ profile.fullName }}<small>{{ profile.role }}</small></span>
      </NuxtLink>

      <nav class="nav" :class="{ open }" :aria-label="site.ui.mainNav">
        <NuxtLink
          v-for="item in nav"
          :key="item.href"
          :to="localePath({ path: '/', hash: item.href })"
          :class="{ active: active === item.href }"
          @click="open = false"
        >{{ item.label }}</NuxtLink>
      </nav>

      <div class="lang" role="group" :aria-label="site.ui.language">
        <a
          v-for="l in langs"
          :key="l.code"
          :href="switchLocalePath(l.code)"
          :lang="l.code"
          :hreflang="l.code"
          :title="l.name"
          :aria-label="l.name"
          :aria-current="locale === l.code ? 'true' : undefined"
          :class="{ on: locale === l.code }"
          @click="switchTo(l.code, $event)"
        >{{ l.label }}</a>
      </div>

      <button class="burger" :aria-expanded="open" :aria-label="site.ui.toggleMenu" @click="open = !open">
        <AppIcon :name="open ? 'x' : 'menu'" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky; top: 0; z-index: 50;
  transition: background .3s, box-shadow .3s;
}
.header.scrolled { background: rgba(250, 247, 241, .88); backdrop-filter: blur(12px); box-shadow: 0 1px 0 var(--line); }
.bar { display: flex; align-items: center; gap: 24px; height: 76px; }

.logo { display: flex; align-items: center; gap: 12px; }
.mark { position: relative; font: 400 34px/1 var(--serif); color: var(--sage-dark); }
.mark .spark { position: absolute; top: -4px; inset-inline-end: -12px; width: 12px; height: 12px; color: var(--gold); }
.word { display: flex; flex-direction: column; margin-inline-start: 6px; font: 500 12px/1.3 var(--sans); letter-spacing: .2em; text-transform: uppercase; color: var(--sage-dark); }
.word small { font-size: 10px; letter-spacing: .16em; color: var(--muted); }

.nav { display: flex; gap: 30px; margin-inline-start: auto; font-size: 14px; font-weight: 500; }
.nav a { position: relative; color: var(--ink); padding-block: 6px; transition: color .2s; }
.nav a::after {
  content: ''; position: absolute; left: 50%; bottom: -2px; width: 4px; height: 4px; border-radius: 50%;
  background: var(--gold); transform: translateX(-50%) scale(0); transition: transform .25s;
}
.nav a:hover { color: var(--sage); }
.nav a.active::after { transform: translateX(-50%) scale(1); }

/* Language toggle */
.lang { display: flex; padding: 3px; border: 1px solid var(--line); border-radius: 999px; background: var(--white); }
.lang a {
  min-width: 36px; padding: 6px 10px; border-radius: 999px; text-align: center;
  font: 600 12px/1 var(--sans); color: var(--muted); transition: background .2s, color .2s;
}
.lang a[lang='fa'] { font-family: 'Estedad', var(--sans); font-size: 13px; }
.lang a:hover { color: var(--sage-dark); }
.lang a.on { background: var(--sage-dark); color: var(--cream); }

.burger { display: none; background: none; border: 0; color: var(--ink); cursor: pointer; padding: 6px; }
.burger svg { width: 26px; height: 26px; }

@media (max-width: 960px) {
  .lang { margin-inline-start: auto; }
  .burger { display: block; }
  .nav {
    position: absolute; top: 76px; left: 0; right: 0; flex-direction: column; gap: 0;
    background: var(--cream); border-bottom: 1px solid var(--line);
    padding: 8px 20px 20px; transform: translateY(-8px); opacity: 0; pointer-events: none;
    transition: opacity .25s, transform .25s;
  }
  .nav.open { opacity: 1; transform: none; pointer-events: auto; }
  .nav a { padding-block: 12px; border-bottom: 1px solid var(--line); }
  .nav a::after { display: none; }
}
@media (max-width: 480px) { .word small { display: none; } }
</style>
