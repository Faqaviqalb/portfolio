<script setup lang="ts">
const site = useSite()
const localePath = useLocalePath()
const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <div class="top reveal">
        <span class="eyebrow">{{ site.ui.projectsEyebrow }}</span>
        <h2 class="section-title">{{ site.ui.projectsTitle }}</h2>
      </div>

      <div class="grid">
        <article v-for="(p, i) in site.projects" :key="p.slug" class="project reveal" :style="{ transitionDelay: `${i * 100}ms` }">
          <NuxtLink :to="localePath(`/projects/${p.slug}`)" class="thumb" :aria-label="site.ui.caseStudyOf(p.title)">
            <img v-if="p.image" :src="p.image" :alt="site.ui.screenshot(p.title)" loading="lazy" />
            <ProjectMock v-else :kind="p.mock" />
          </NuxtLink>

          <div class="content">
            <h3><NuxtLink :to="localePath(`/projects/${p.slug}`)">{{ p.title }}</NuxtLink></h3>
            <p class="subtitle">{{ p.subtitle }}</p>
            <p class="summary">{{ p.summary }}</p>

            <ul class="highlights">
              <li v-for="h in p.highlights" :key="h"><AppIcon name="spark" class="star" />{{ h }}</li>
            </ul>

            <ul class="tags"><li v-for="t in p.tags" :key="t">{{ t }}</li></ul>

            <div class="foot">
              <NuxtLink :to="localePath(`/projects/${p.slug}`)" class="case">
                {{ site.ui.caseStudy }} <AppIcon name="arrow-right" />
              </NuxtLink>
              <a v-if="p.href" :href="p.href" class="visit" target="_blank" rel="noopener">
                <bdi>{{ host(p.href) }}</bdi> <AppIcon name="arrow-up-right" />
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

.grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr; gap: 24px; align-items: stretch; }
.project { display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; transition: box-shadow .3s, transform .3s; }
.project:hover { box-shadow: var(--shadow); transform: translateY(-4px); }
.thumb { position: relative; display: block; flex: none; aspect-ratio: 16 / 10; overflow: hidden; border-bottom: 1px solid var(--line); }
.thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform .5s; }
.project:hover .thumb img { transform: scale(1.04); }

.content { flex: 1; display: flex; flex-direction: column; padding: 20px 22px 22px; }
h3 { font-size: 22px; color: var(--ink); }
h3 a:hover { color: var(--sage); }
.subtitle { margin: 4px 0 0; font-size: 13.5px; font-weight: 600; color: var(--sage); }
.summary { margin: 12px 0 0; font-size: 14px; line-height: 1.65; color: var(--muted); }

.highlights { list-style: none; margin: 14px 0 18px; padding: 0; display: grid; gap: 7px; }
.highlights li { display: flex; gap: 8px; align-items: flex-start; font-size: 13.5px; line-height: 1.45; color: var(--ink); }
.star { flex: none; width: 13px; height: 13px; margin-top: 3px; color: var(--gold); }

.tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; margin: auto 0 0; padding: 0; }
.tags li { font-size: 11px; font-weight: 600; color: var(--sage-dark); background: var(--sage-tint); padding: 4px 9px; border-radius: 999px; }

.foot { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--line); flex-wrap: wrap; }
.case, .visit { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; }
.case { color: var(--sage-dark); }
.visit { color: var(--gold-dark); }
.case svg, .visit svg { width: 15px; height: 15px; transition: transform .2s; }
.case:hover svg { transform: translateX(3px); }
.visit:hover svg { transform: translate(2px, -2px); }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .grid { grid-template-columns: 1fr; grid-auto-rows: auto; } }
</style>
