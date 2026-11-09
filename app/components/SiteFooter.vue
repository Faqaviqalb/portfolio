<script setup lang="ts">
import { nav, profile, services, socials } from '~/data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container cols">
      <div class="brand">
        <span class="mark">{{ profile.name.charAt(0) }}<AppIcon name="spark" class="spark" /></span>
        <p>Frontend developer working with Vue and Nuxt.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a v-for="n in nav" :key="n.href" :href="n.href">{{ n.label }}</a>
      </div>
      <div>
        <h4>Services</h4>
        <a v-for="s in services" :key="s.title" href="#services">{{ s.title }}</a>
      </div>
      <div>
        <h4>Follow Me</h4>
        <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" class="social">
          <AppIcon :name="s.icon" /> {{ s.label }}
        </a>
      </div>
    </div>
    <div class="bottom">
      <div class="container inner">
        <span>© {{ year }} {{ profile.fullName }}. Built with Nuxt.</span>
        <a href="#home" class="top" aria-label="Back to top"><AppIcon name="arrow-up" /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--cream-2); border-top: 1px solid var(--line); }
.cols { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 36px; padding-block: 56px 44px; }
.mark { position: relative; font: 400 40px/1 var(--serif); color: var(--sage-dark); }
.mark .spark { position: absolute; top: -4px; right: -14px; width: 13px; height: 13px; color: var(--gold); }
.brand p { margin-top: 14px; font-size: 14px; color: var(--muted); max-width: 280px; }
h4 { margin: 0 0 14px; font: 600 14px var(--sans); color: var(--ink); }
.cols a { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: var(--muted); padding-block: 3px; transition: color .2s; }
.cols a:hover { color: var(--sage-dark); }
.social svg { width: 15px; height: 15px; }

.bottom { background: var(--sage-dark); color: var(--sage-soft); font-size: 12.5px; }
.inner { display: flex; justify-content: space-between; align-items: center; height: 52px; }
.top { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--cream); color: var(--sage-dark); transition: transform .2s; }
.top:hover { transform: translateY(-3px); }
.top svg { width: 16px; height: 16px; }

@media (max-width: 820px) { .cols { grid-template-columns: 1fr 1fr; } .brand { grid-column: 1 / -1; } }
</style>
