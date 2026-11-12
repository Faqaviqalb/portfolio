<script setup lang="ts">
const site = useSite()
const localePath = useLocalePath()
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer class="footer">
    <div class="container cols">
      <div class="brand">
        <span class="mark">{{ site.profile.monogram }}<AppIcon name="spark" class="spark" /></span>
        <p>{{ site.ui.footerTagline }}</p>
      </div>
      <div>
        <h4>{{ site.ui.quickLinks }}</h4>
        <NuxtLink v-for="n in site.nav" :key="n.href" :to="localePath({ path: '/', hash: n.href })">{{ n.label }}</NuxtLink>
      </div>
      <div>
        <h4>{{ site.ui.servicesHeading }}</h4>
        <NuxtLink v-for="s in site.services" :key="s.title" :to="localePath({ path: '/', hash: '#services' })">{{ s.title }}</NuxtLink>
      </div>
      <div>
        <h4>{{ site.ui.contact }}</h4>
        <a :href="`mailto:${site.profile.email}`" class="social">
          <AppIcon name="mail" /> <bdi>{{ site.profile.email }}</bdi>
        </a>
        <a v-for="s in site.socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" class="social">
          <AppIcon :name="s.icon" /> {{ s.label }}
        </a>
      </div>
    </div>
    <div class="bottom">
      <div class="container inner">
        <a href="#" class="top" :aria-label="site.ui.backToTop" @click.prevent="scrollTop"><AppIcon name="arrow-up" /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--cream-2); border-top: 1px solid var(--line); }
.cols { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 36px; padding-block: 56px 44px; }
.mark { position: relative; font: 400 40px/1 var(--serif); color: var(--sage-dark); }
.mark .spark { position: absolute; top: -4px; inset-inline-end: -14px; width: 13px; height: 13px; color: var(--gold); }
.brand p { margin-top: 14px; font-size: 14px; color: var(--muted); max-width: 280px; }
h4 { margin: 0 0 14px; font: 600 14px var(--sans); color: var(--ink); }
.cols a { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: var(--muted); padding-block: 3px; transition: color .2s; }
.cols a:hover { color: var(--sage-dark); }
.social svg { width: 15px; height: 15px; }

.bottom { background: var(--sage-dark); color: var(--sage-soft); font-size: 12.5px; }
.inner { display: flex; justify-content: flex-end; align-items: center; height: 52px; }
.top { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--cream); color: var(--sage-dark); transition: transform .2s; }
.top:hover { transform: translateY(-3px); }
.top svg { width: 16px; height: 16px; }

@media (max-width: 820px) { .cols { grid-template-columns: 1fr 1fr; } .brand { grid-column: 1 / -1; } }
</style>
