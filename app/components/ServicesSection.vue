<script setup lang="ts">
import { services } from '~/data/site'
</script>

<template>
  <section id="services" class="section">
    <div class="container grid">
      <div class="head reveal">
        <span class="eyebrow">What I do <AppIcon name="spark" class="spark" /></span>
        <h2 class="section-title">Services I Offer</h2>
        <p>From the first wireframe to production deploy, I build interfaces people enjoy using.</p>
      </div>

      <article v-for="(s, i) in services" :key="s.title" class="card reveal" :style="{ transitionDelay: `${i * 90}ms` }">
        <span class="ic"><AppIcon :name="s.icon" /></span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.text }}</p>
        <a href="#contact" class="more">Let’s talk <AppIcon name="arrow-right" /></a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1.1fr repeat(4, 1fr); gap: 20px; align-items: stretch; }
.head p { margin-top: 14px; color: var(--muted); font-size: 15px; max-width: 240px; }

.card {
  background: var(--white); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 26px 22px; display: flex; flex-direction: column;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s;
}
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow); border-color: var(--sage-soft); }
.ic { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; background: var(--sage-tint); color: var(--sage-dark); transition: background .3s, color .3s; }
.card:hover .ic { background: var(--sage-dark); color: var(--cream); }
.ic svg { width: 22px; height: 22px; }
h3 { font-size: 20px; margin-top: 22px; color: var(--sage-dark); }
.card p { margin-top: 10px; font-size: 14px; color: var(--muted); flex: 1; }
.more { margin-top: 20px; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--gold-dark); }
.more svg { width: 14px; height: 14px; transition: transform .2s; }
.more:hover svg { transform: translateX(4px); }

@media (max-width: 1080px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .head { grid-column: 1 / -1; }
  .head p { max-width: none; }
}
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
