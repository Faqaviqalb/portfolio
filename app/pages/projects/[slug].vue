<script setup lang="ts">
const site = useSite()
const profile = computed(() => site.value.profile)
const projects = computed(() => site.value.projects)
const localePath = useLocalePath()
const digits = useDigits()

const route = useRoute()
const index = computed(() => projects.value.findIndex((p) => p.slug === route.params.slug))
const project = computed(() => projects.value[index.value])
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })

const next = computed(() => projects.value[(index.value + 1) % projects.value.length]!)
const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')
const pad = (n: number) => digits(String(n).padStart(2, '0'))

useSeoMeta({
  title: () => `${project.value!.title} — ${profile.value.fullName}`,
  description: () => project.value!.summary,
  ogTitle: () => `${project.value!.title} — ${profile.value.fullName}`,
  ogDescription: () => project.value!.summary,
  ogImage: () => project.value!.image,
})

useReveal()
</script>

<template>
  <article v-if="project" class="case-study">
    <!-- Intro -->
    <header class="intro section">
      <div class="container">
        <NuxtLink :to="localePath({ path: '/', hash: '#work' })" class="back"><AppIcon name="chevron-left" /> {{ site.ui.allProjects }}</NuxtLink>

        <div class="intro-grid">
          <div class="reveal">
            <span class="eyebrow"><AppIcon name="spark" class="spark" />{{ project.subtitle }}</span>
            <h1>{{ project.title }}</h1>
            <p class="lead">{{ project.summary }}</p>
            <div v-if="project.href" class="actions">
              <a :href="project.href" target="_blank" rel="noopener" class="btn btn-primary">
                {{ site.ui.visit(host(project.href)) }} <AppIcon name="arrow-up-right" />
              </a>
            </div>
          </div>

          <dl class="facts reveal">
            <div v-for="f in project.caseStudy.facts" :key="f.label">
              <dt>{{ f.label }}</dt>
              <dd>{{ f.value }}</dd>
            </div>
            <div>
              <dt>{{ site.ui.stack }}</dt>
              <dd><ul class="tags"><li v-for="t in project.tags" :key="t">{{ t }}</li></ul></dd>
            </div>
          </dl>
        </div>

        <div class="cover reveal">
          <a v-if="project.image" :href="project.image" target="_blank" class="frame" :aria-label="site.ui.openFull(site.ui.screenshot(project.title))">
            <span class="bar"><i /><i /><i /></span>
            <img :src="project.image" :alt="site.ui.screenshot(project.title)" />
          </a>
          <div v-else class="mock-wrap">
            <ProjectMock :kind="project.mock" />
          </div>
        </div>
      </div>
    </header>

    <!-- Overview -->
    <section class="block">
      <div class="container row reveal">
        <h2 class="label">{{ site.ui.overview }}</h2>
        <div class="body">
          <p v-for="(para, i) in project.caseStudy.overview" :key="i">{{ para }}</p>
          <p v-if="project.caseStudy.privateNote" class="private">
            <AppIcon name="spark" class="spark" />{{ project.caseStudy.privateNote }}
          </p>
        </div>
      </div>
    </section>

    <!-- Sections -->
    <section v-for="(s, i) in project.caseStudy.sections" :key="s.title" class="block">
      <div class="container">
        <div class="row reveal">
          <h2 class="label"><span class="num">{{ pad(i + 1) }}</span>{{ s.title }}</h2>
          <div class="body">
            <p v-for="(para, j) in s.body" :key="j">{{ para }}</p>
            <ul v-if="s.points" class="points">
              <li v-for="pt in s.points" :key="pt"><AppIcon name="spark" class="star" />{{ pt }}</li>
            </ul>
          </div>
        </div>

        <div v-if="s.shots?.length" class="gallery">
          <figure v-for="shot in s.shots" :key="shot.src" class="shot reveal" :class="{ mobile: shot.mobile }">
            <a :href="shot.src" target="_blank" :class="shot.mobile ? 'phone' : 'frame'" :aria-label="site.ui.openFull(shot.alt)">
              <span v-if="!shot.mobile" class="bar"><i /><i /><i /></span>
              <img :src="shot.src" :alt="shot.alt" loading="lazy" />
            </a>
            <figcaption v-if="shot.caption">{{ shot.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Next project -->
    <section class="next-wrap">
      <div class="container">
        <NuxtLink :to="localePath(`/projects/${next.slug}`)" class="next reveal">
          <div>
            <span class="eyebrow">{{ site.ui.nextProject }}</span>
            <h2>{{ next.title }}</h2>
            <p>{{ next.subtitle }}</p>
          </div>
          <span class="go"><AppIcon name="arrow-right" /></span>
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<style scoped>
.intro { padding-block: 40px 56px; }
.back { display: inline-flex; align-items: center; gap: 4px; font-size: 13.5px; font-weight: 600; color: var(--muted); transition: color .2s; }
.back svg { width: 16px; height: 16px; }
.back:hover { color: var(--sage-dark); }

.intro-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: end; margin-top: 28px; }
h1 { font-size: clamp(38px, 5.5vw, 62px); color: var(--sage-dark); margin-top: 14px; }
.lead { margin-top: 18px; font-size: 17px; line-height: 1.7; color: var(--muted); max-width: 620px; }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

.facts { margin: 0; display: grid; gap: 0; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 6px 22px; }
.facts > div { display: grid; grid-template-columns: 96px 1fr; gap: 14px; padding: 13px 0; border-bottom: 1px solid var(--line); }
.facts > div:last-child { border-bottom: 0; }
dt { font-size: 12px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--gold-dark); padding-top: 2px; }
dd { margin: 0; font-size: 14px; color: var(--ink); }
.tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; margin: 0; padding: 0; }
.tags li { font-size: 11px; font-weight: 600; color: var(--sage-dark); background: var(--sage-tint); padding: 4px 9px; border-radius: 999px; }

.cover { margin-top: 48px; }
.mock-wrap { position: relative; aspect-ratio: 16 / 10; max-width: 820px; margin-inline: auto; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); }

/* Screenshot frames */
.frame { display: block; background: var(--white); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; box-shadow: var(--shadow); transition: transform .3s, box-shadow .3s; }
.frame:hover, .phone:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -16px rgba(63, 75, 53, .3); }
.bar { display: flex; gap: 6px; padding: 10px 14px; background: var(--cream-2); border-bottom: 1px solid var(--line); }
.bar i { width: 9px; height: 9px; border-radius: 50%; background: var(--sand); }
.frame img, .phone img { width: 100%; height: auto; }
.phone { display: block; border: 8px solid var(--ink); border-radius: 34px; overflow: hidden; background: var(--ink); box-shadow: var(--shadow); transition: transform .3s, box-shadow .3s; }
.phone img { border-radius: 26px; }

/* Content blocks */
.block { padding-block: 44px; border-top: 1px solid var(--line); }
.row { display: grid; grid-template-columns: 1fr 1.6fr; gap: 56px; }
.label { font-size: clamp(24px, 2.6vw, 30px); color: var(--ink); }
.num { display: block; margin-bottom: 10px; font: 600 12px var(--sans); letter-spacing: .18em; color: var(--gold-dark); }
.body { display: grid; gap: 14px; font-size: 15.5px; line-height: 1.75; color: var(--muted); }
.points { list-style: none; margin: 4px 0 0; padding: 0; display: grid; gap: 9px; }
.points li { display: flex; gap: 10px; align-items: flex-start; font-size: 14.5px; line-height: 1.5; color: var(--ink); }
.star { flex: none; width: 13px; height: 13px; margin-top: 4px; color: var(--gold); }
.private { display: flex; gap: 10px; align-items: flex-start; padding: 14px 16px; border-radius: 12px; background: var(--sage-tint); color: var(--sage-dark); font-size: 14px; line-height: 1.6; }
.private .spark { flex: none; width: 13px; height: 13px; margin-top: 4px; color: var(--gold); }

.gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 28px; margin-top: 36px; }
.shot { margin: 0; flex: 1 1 440px; min-width: 0; }
.shot.mobile { flex: 0 0 230px; }
figcaption { margin-top: 12px; font-size: 13px; text-align: center; color: var(--muted); }

/* Next project */
.next-wrap { padding-block: 24px 90px; border-top: 1px solid var(--line); }
.next { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 32px; padding: 30px 34px; background: var(--sage-dark); color: var(--cream); border-radius: var(--radius); transition: transform .3s, box-shadow .3s; }
.next:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.next .eyebrow { color: var(--gold); }
.next h2 { margin-top: 8px; font-size: clamp(26px, 3.4vw, 36px); }
.next p { margin-top: 6px; font-size: 14px; color: var(--sage-soft); }
.go { flex: none; display: grid; place-items: center; width: 52px; height: 52px; border-radius: 50%; background: var(--gold); color: var(--white); transition: transform .2s; }
.go svg { width: 20px; height: 20px; }
.next:hover .go { transform: translateX(4px); }
[dir='rtl'] .next:hover .go { transform: translateX(-4px); }

@media (max-width: 900px) {
  .intro-grid, .row { grid-template-columns: 1fr; gap: 28px; }
  .cover { margin-top: 36px; }
}
@media (max-width: 560px) {
  .shot { flex-basis: 100%; }
  .shot.mobile { flex: 0 0 calc(50% - 14px); }
  .gallery { gap: 20px 16px; }
  .phone { border-width: 5px; border-radius: 24px; }
  .phone img { border-radius: 19px; }
  .next { padding: 24px; }
  .facts > div { grid-template-columns: 84px 1fr; }
}
</style>
