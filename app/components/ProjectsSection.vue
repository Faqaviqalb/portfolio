<script setup lang="ts">
import { projects } from '~/data/site'
const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <div class="top reveal">
        <span class="eyebrow">Featured projects</span>
        <h2 class="section-title">Selected Work</h2>
      </div>

      <div class="grid">
        <article v-for="(p, i) in projects" :key="p.title" class="project reveal" :style="{ transitionDelay: `${i * 100}ms` }">
          <a :href="p.href" class="thumb" :aria-label="`${p.title} — live site`" target="_blank" rel="noopener">
            <img v-if="p.image" :src="p.image" :alt="`${p.title} screenshot`" loading="lazy" />
            <ProjectMock v-else :kind="p.mock" />
          </a>

          <div class="content">
            <h3>{{ p.title }}</h3>
            <p class="subtitle">{{ p.subtitle }}</p>
            <p class="summary">{{ p.summary }}</p>

            <ul class="highlights">
              <li v-for="h in p.highlights" :key="h"><AppIcon name="spark" class="star" />{{ h }}</li>
            </ul>

            <div class="foot">
              <ul class="tags"><li v-for="t in p.tags" :key="t">{{ t }}</li></ul>
              <a :href="p.href" class="visit" target="_blank" rel="noopener">
                {{ host(p.href) }} <AppIcon name="arrow-up-right" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top { margin-bottom: 36px; }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
.project { display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; transition: box-shadow .3s, transform .3s; }
.project:hover { box-shadow: var(--shadow); transform: translateY(-4px); }
.thumb { position: relative; display: block; aspect-ratio: 16 / 10; overflow: hidden; }
.thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.project:hover .thumb img { transform: scale(1.04); }

.content { padding: 20px 22px 22px; }
h3 { font-size: 22px; color: var(--ink); }
.subtitle { margin: 4px 0 0; font-size: 13.5px; font-weight: 600; color: var(--sage); }
.summary { margin: 12px 0 0; font-size: 14px; line-height: 1.65; color: var(--muted); }

.highlights { list-style: none; margin: 14px 0 0; padding: 0; display: grid; gap: 7px; }
.highlights li { display: flex; gap: 8px; align-items: flex-start; font-size: 13.5px; line-height: 1.45; color: var(--ink); }
.star { flex: none; width: 13px; height: 13px; margin-top: 3px; color: var(--gold); }

.foot { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--line); flex-wrap: wrap; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; margin: 0; padding: 0; }
.tags li { font-size: 11px; font-weight: 600; color: var(--sage-dark); background: var(--sage-tint); padding: 4px 9px; border-radius: 999px; }
.visit { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--gold-dark); }
.visit svg { width: 15px; height: 15px; transition: transform .2s; }
.visit:hover svg { transform: translate(2px, -2px); }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .grid { grid-template-columns: 1fr; } }
</style>
