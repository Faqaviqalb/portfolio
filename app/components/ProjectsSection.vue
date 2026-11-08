<script setup lang="ts">
import { projects, socials } from '~/data/site'
const github = socials.find((s) => s.icon === 'github')?.href ?? '#'
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <div class="top reveal">
        <div>
          <span class="eyebrow">Featured projects <AppIcon name="spark" class="spark" /></span>
          <h2 class="section-title">Selected Work</h2>
        </div>
        <a :href="github" target="_blank" rel="noopener" class="all">More on GitHub <AppIcon name="arrow-right" /></a>
      </div>

      <div class="grid">
        <article v-for="(p, i) in projects" :key="p.title" class="project reveal" :style="{ transitionDelay: `${i * 100}ms` }">
          <a :href="p.href" class="thumb" :aria-label="`${p.title} — live site`" target="_blank" rel="noopener">
            <img v-if="p.image" :src="p.image" :alt="`${p.title} screenshot`" loading="lazy" />
            <ProjectMock v-else :kind="p.mock" />
          </a>
          <div class="meta">
            <div>
              <h3>{{ p.title }} <span>– {{ p.subtitle }}</span></h3>
              <ul class="tags"><li v-for="t in p.tags" :key="t">{{ t }}</li></ul>
            </div>
            <div class="links">
              <a v-if="p.repo" :href="p.repo" class="icon-circle" :aria-label="`${p.title} source code`" target="_blank" rel="noopener"><AppIcon name="github" /></a>
              <a :href="p.href" class="icon-circle go" :aria-label="`Open ${p.title}`" target="_blank" rel="noopener"><AppIcon name="arrow-up-right" /></a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 36px; flex-wrap: wrap; }
.all { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--gold-dark); }
.all svg { width: 16px; height: 16px; transition: transform .2s; }
.all:hover svg { transform: translateX(4px); }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.project { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; transition: box-shadow .3s, transform .3s; }
.project:hover { box-shadow: var(--shadow); transform: translateY(-4px); }
.thumb { position: relative; display: block; aspect-ratio: 4 / 3; overflow: hidden; }
.thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.project:hover .thumb img { transform: scale(1.04); }

.meta { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 20px 20px; }
h3 { font: 600 16px/1.3 var(--sans); color: var(--ink); }
h3 span { font-weight: 500; color: var(--muted); }
.tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; margin: 10px 0 0; padding: 0; }
.tags li { font-size: 11.5px; font-weight: 600; color: var(--sage-dark); background: var(--sage-tint); padding: 4px 10px; border-radius: 999px; }
.links { display: flex; gap: 8px; flex: none; }
.go { background: var(--sage-dark); color: var(--cream); border-color: var(--sage-dark); }
.go:hover { background: var(--gold); border-color: var(--gold); }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .grid { grid-template-columns: 1fr; } }
</style>
