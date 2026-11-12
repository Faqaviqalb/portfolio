<script setup lang="ts">
const site = useSite()
</script>

<template>
  <section id="services" class="section">
    <div class="container grid">
      <div class="head reveal">
        <span class="eyebrow">{{ site.ui.servicesEyebrow }}</span>
        <h2 class="section-title">{{ site.ui.servicesTitle }}</h2>
        <p>{{ site.ui.servicesIntro }}</p>
      </div>

      <article v-for="(s, i) in site.services" :key="s.title" class="card reveal" :style="{ transitionDelay: `${i * 90}ms` }">
        <span class="ic"><AppIcon :name="s.icon" /></span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1.1fr repeat(3, 1fr); gap: 20px; align-items: stretch; }
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

@media (max-width: 1080px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .head { grid-column: 1 / -1; }
  .head p { max-width: none; }
}
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
