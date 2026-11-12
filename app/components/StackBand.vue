<script setup lang="ts">
const site = useSite()
const stack = computed(() => site.value.stack)
</script>

<template>
  <section class="band" :aria-label="site.ui.toolsLabel">
    <div class="container inner">
      <span class="label">{{ site.ui.toolsLabel }}</span>
      <div class="marquee">
        <ul class="track">
          <li v-for="(t, i) in [...stack, ...stack]" :key="i" :aria-hidden="i >= stack.length">
            <AppIcon name="spark" /> {{ t }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band { background: var(--sage); color: var(--cream); }
.inner { display: flex; align-items: center; gap: 40px; height: 84px; }
.label { flex: none; font-size: 12px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #f0d79a; }
.marquee {
  flex: 1; overflow: hidden; direction: ltr;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.track { display: flex; gap: 44px; width: max-content; margin: 0; padding: 0; list-style: none; animation: scroll 40s linear infinite; }
.marquee:hover .track { animation-play-state: paused; }
li { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500; white-space: nowrap; }
li svg { width: 12px; height: 12px; color: #f0d79a; }
@keyframes scroll { to { transform: translateX(calc(-50% - 22px)); } }

@media (max-width: 640px) {
  .inner { flex-direction: column; justify-content: center; gap: 12px; height: 110px; }
  .marquee { width: 100%; }
}
</style>
