<script setup lang="ts">
const site = useSite()
</script>

<template>
  <section id="about" class="about">
    <div class="container grid reveal">
      <div>
        <span class="eyebrow">{{ site.ui.aboutEyebrow }}</span>
        <h2>{{ site.about.title }}</h2>
      </div>

      <div class="text">
        <p>{{ site.about.text }}</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about { position: relative; background: var(--sage-tint); padding-block: 70px; overflow: hidden; }
.grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 48px; align-items: start; }
h2 { font-size: clamp(28px, 3vw, 36px); margin-top: 14px; color: var(--sage-dark); }
.text p { color: var(--muted); font-size: 17px; max-width: 620px; }


@media (max-width: 760px) {
  .grid { grid-template-columns: 1fr; gap: 16px; }
}
</style>
