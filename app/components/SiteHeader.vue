<script setup lang="ts">
import { nav, profile } from '~/data/site'

const open = ref(false)
const scrolled = ref(false)
const active = ref('#home')

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
  nav.forEach((n) => {
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
      <a href="#home" class="logo" aria-label="Home">
        <span class="mark">{{ profile.name.charAt(0) }}<AppIcon name="spark" class="spark" /></span>
        <span class="word">{{ profile.fullName }}<small>{{ profile.role }}</small></span>
      </a>

      <nav class="nav" :class="{ open }" aria-label="Main">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          :class="{ active: active === item.href }"
          @click="open = false"
        >{{ item.label }}</a>
      </nav>

      <a href="#contact" class="btn btn-gold cta">Let’s Talk <AppIcon name="arrow-right" /></a>

      <button class="burger" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
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
.mark .spark { position: absolute; top: -4px; right: -12px; width: 12px; height: 12px; color: var(--gold); }
.word { display: flex; flex-direction: column; margin-left: 6px; font: 500 12px/1.3 var(--sans); letter-spacing: .2em; text-transform: uppercase; color: var(--sage-dark); }
.word small { font-size: 10px; letter-spacing: .16em; color: var(--muted); }

.nav { display: flex; gap: 30px; margin-left: auto; font-size: 14px; font-weight: 500; }
.nav a { position: relative; color: var(--ink); padding-block: 6px; transition: color .2s; }
.nav a::after {
  content: ''; position: absolute; left: 50%; bottom: -2px; width: 4px; height: 4px; border-radius: 50%;
  background: var(--gold); transform: translateX(-50%) scale(0); transition: transform .25s;
}
.nav a:hover { color: var(--sage); }
.nav a.active::after { transform: translateX(-50%) scale(1); }

.cta { padding: 12px 22px; }
.burger { display: none; margin-left: auto; background: none; border: 0; color: var(--ink); cursor: pointer; padding: 6px; }
.burger svg { width: 26px; height: 26px; }

@media (max-width: 960px) {
  .cta { display: none; }
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
