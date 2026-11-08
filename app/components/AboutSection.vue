<script setup lang="ts">
import { about, profile } from '~/data/site'
</script>

<template>
  <section id="about" class="about">
    <div class="vase" aria-hidden="true">
      <LeafSprig class="v-sprig" />
      <div class="pot" />
      <div class="books" />
    </div>

    <div class="container grid reveal">
      <div>
        <span class="eyebrow">About me <AppIcon name="spark" class="spark" /></span>
        <h2>{{ about.quote }}</h2>
      </div>

      <div class="text">
        <p>{{ about.text }}</p>
        <span class="signature">{{ profile.name }}</span>
      </div>

      <ul class="stats">
        <li v-for="s in about.stats" :key="s.label">
          <AppIcon :name="s.icon" />
          <span><strong>{{ s.value }}</strong> {{ s.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about { position: relative; background: var(--sage-tint); padding-block: 70px; overflow: hidden; }
.grid { display: grid; grid-template-columns: 1.1fr 1.2fr .9fr; gap: 48px; align-items: center; padding-left: 120px; }
h2 { font-size: clamp(28px, 3vw, 36px); margin-top: 14px; color: var(--sage-dark); }
.text p { color: var(--muted); font-size: 15px; }
.signature { display: block; margin-top: 14px; font: 500 34px/1 var(--script); color: var(--gold); }

.stats { list-style: none; margin: 0; padding: 0 0 0 36px; border-left: 1px solid var(--sage-soft); display: grid; gap: 18px; }
.stats li { display: flex; align-items: center; gap: 14px; font-size: 14px; color: var(--ink); }
.stats strong { font-weight: 700; color: var(--sage-dark); }
.stats svg { width: 20px; height: 20px; color: var(--sage); flex: none; }

.vase { position: absolute; left: 0; bottom: 0; width: 150px; height: 100%; }
.v-sprig { position: absolute; left: 30px; bottom: 90px; width: 90px; }
.pot {
  position: absolute; left: 34px; bottom: 26px; width: 74px; height: 80px;
  border-radius: 40px 40px 18px 18px; background: linear-gradient(140deg, #fbf8f2, #e4dccd);
  box-shadow: inset -8px -6px 14px rgba(0,0,0,.06);
}
.pot::after { content: ''; position: absolute; inset: 22px 20px 26px; border-radius: 50%; background: var(--sage-tint); }
.books { position: absolute; left: 0; bottom: 0; width: 140px; height: 26px; background: linear-gradient(var(--sand) 0 50%, #ddd3c0 50%); border-radius: 2px; }

@media (max-width: 1080px) {
  .grid { grid-template-columns: 1fr 1fr; padding-left: 0; }
  .stats { grid-column: 1 / -1; grid-template-columns: repeat(2, 1fr); border: 0; padding: 0; }
  .vase { display: none; }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; gap: 28px; }
  .stats { grid-template-columns: 1fr; }
}
</style>
