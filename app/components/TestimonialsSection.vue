<script setup lang="ts">
import { testimonials } from '~/data/site'

const index = ref(0)
const perView = ref(2)
const pages = computed(() => Math.max(1, testimonials.length - perView.value + 1))

function go(i: number) {
  index.value = (i + pages.value) % pages.value
}

let timer: ReturnType<typeof setInterval> | undefined
function start() { stop(); timer = setInterval(() => go(index.value + 1), 6000) }
function stop() { if (timer) clearInterval(timer) }

onMounted(() => {
  const mq = window.matchMedia('(max-width: 820px)')
  const set = () => { perView.value = mq.matches ? 1 : 2; go(index.value) }
  set()
  mq.addEventListener('change', set)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) start()
  onBeforeUnmount(() => { stop(); mq.removeEventListener('change', set) })
})

const initials = (name: string) => name.split(' ').map((n) => n[0]).join('')
</script>

<template>
  <section id="testimonials" class="testi">
    <div class="container grid">
      <div class="head reveal">
        <span class="eyebrow">Testimonials <AppIcon name="spark" class="spark" /></span>
        <h2 class="section-title">What Clients Say</h2>
        <div class="arrows">
          <button class="icon-circle" aria-label="Previous testimonial" @click="go(index - 1); start()"><AppIcon name="chevron-left" /></button>
          <button class="icon-circle" aria-label="Next testimonial" @click="go(index + 1); start()"><AppIcon name="chevron-right" /></button>
        </div>
      </div>

      <div class="viewport reveal" @mouseenter="stop" @mouseleave="start">
        <div class="track" :style="{ transform: `translateX(calc(${-index} * (100% + 24px) / ${perView}))`, '--per': perView }">
          <figure v-for="t in testimonials" :key="t.name" class="card">
            <AppIcon name="quote" class="q" />
            <blockquote>“{{ t.quote }}”</blockquote>
            <figcaption>
              <span class="avatar">{{ initials(t.name) }}</span>
              <span><strong>{{ t.name }}</strong><small>{{ t.role }}</small></span>
            </figcaption>
          </figure>
        </div>
        <div class="dots" role="tablist">
          <button
            v-for="n in pages"
            :key="n"
            role="tab"
            :aria-selected="index === n - 1"
            :aria-label="`Show testimonials page ${n}`"
            :class="{ on: index === n - 1 }"
            @click="go(n - 1); start()"
          />
        </div>
      </div>
    </div>
    <LeafSprig class="deco" />
  </section>
</template>

<style scoped>
.testi { position: relative; background: var(--sage-tint); padding-block: 90px; overflow: hidden; }
.grid { display: grid; grid-template-columns: .8fr 2fr; gap: 40px; align-items: start; }
.arrows { display: flex; gap: 10px; margin-top: 28px; }
.arrows button { cursor: pointer; }

.viewport { overflow: hidden; padding: 6px; margin: -6px; }
.track { display: flex; gap: 24px; transition: transform .6s cubic-bezier(.2,.7,.2,1); }
.card {
  flex: 0 0 calc((100% - (var(--per) - 1) * 24px) / var(--per));
  margin: 0; position: relative; background: var(--white); border-radius: var(--radius);
  padding: 30px 30px 26px; border: 1px solid var(--line);
}
.q { position: absolute; right: 24px; bottom: 24px; width: 28px; height: 28px; color: var(--gold); opacity: .8; }
blockquote { margin: 0; font-size: 15px; color: var(--ink); }
figcaption { display: flex; align-items: center; gap: 14px; margin-top: 22px; }
.avatar { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; background: var(--sage); color: var(--cream); font: 500 16px var(--serif); flex: none; }
figcaption strong { display: block; font-size: 14px; }
figcaption small { font-size: 12.5px; color: var(--muted); }

.dots { display: flex; justify-content: center; gap: 8px; margin-top: 26px; }
.dots button { width: 8px; height: 8px; padding: 0; border-radius: 999px; border: 0; background: var(--sage-soft); cursor: pointer; transition: width .3s, background .3s; }
.dots button.on { width: 24px; background: var(--gold); }

.deco { position: absolute; right: -10px; bottom: -20px; width: 120px; opacity: .6; transform: rotate(10deg); pointer-events: none; }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .deco { display: none; }
}
</style>
