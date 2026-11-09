<script setup lang="ts">
import { profile, socials } from '~/data/site'
</script>

<template>
  <section id="home" class="hero">
    <div class="container grid">
      <div class="copy">
        <span class="eyebrow">{{ profile.greeting }}</span>
        <h1>
          {{ profile.headline.before }}<br />
          {{ profile.headline.mid }} <em>{{ profile.headline.accent }}</em><template v-if="profile.headline.after"><br />
          {{ profile.headline.after }}</template>
        </h1>
        <p class="intro">{{ profile.intro }}</p>

        <div class="actions">
          <a href="#work" class="btn btn-primary">View My Work <AppIcon name="arrow-right" /></a>
          <a v-if="profile.cv" :href="profile.cv" class="btn btn-ghost" download>Download CV <AppIcon name="download" /></a>
          <a v-else href="#contact" class="btn btn-ghost">Get in Touch <AppIcon name="mail" /></a>
        </div>

        <div class="connect">
          <span class="eyebrow small">Let’s connect</span>
          <div class="icons">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="icon-circle" :aria-label="s.label" target="_blank" rel="noopener">
              <AppIcon :name="s.icon" />
            </a>
          </div>
        </div>
      </div>

      <div class="visual">
        <div class="arch">
          <img v-if="profile.photo" :src="profile.photo" :alt="profile.fullName" />
          <div v-else class="placeholder">
            <span class="mono">{{ profile.name.charAt(0) }}</span>
            <span class="hint">Add your photo in <code>app/data/site.ts</code></span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; padding-block: 30px 0; overflow: hidden; }
.grid { display: grid; grid-template-columns: 1.05fr 1fr; align-items: stretch; gap: 40px; }
.copy { align-self: center; padding-block: 40px 70px; }

h1 { font-size: clamp(40px, 5.6vw, 66px); margin-top: 18px; color: var(--sage-dark); }
h1 em { white-space: nowrap; font-style: italic; color: var(--gold); font-weight: 400; }
.intro { margin-top: 22px; max-width: 500px; color: var(--muted); font-size: 17px; }
.actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }

.connect { margin-top: 44px; }
.eyebrow.small { font-size: 11px; color: var(--muted); }
.icons { display: flex; gap: 12px; margin-top: 12px; }

.visual { position: relative; display: flex; justify-content: center; align-items: flex-end; }
.arch {
  position: relative; z-index: 1;
  width: min(460px, 100%); aspect-ratio: 460 / 600;
  border-radius: 999px 999px 0 0; overflow: hidden;
  background: linear-gradient(170deg, var(--sage-soft), #a9b59a);
}
.arch img { width: 100%; height: 100%; object-fit: cover; object-position: 60% top; }
.placeholder { height: 100%; display: grid; place-items: center; align-content: center; gap: 12px; color: var(--cream); text-align: center; padding: 20px; }
.mono { font: italic 300 180px/1 var(--serif); opacity: .9; }
.hint { font-size: 12px; opacity: .8; }
.hint code { font-size: 11px; background: rgba(255,255,255,.18); padding: 2px 6px; border-radius: 4px; }


@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .copy { padding-bottom: 10px; }
  .visual { min-height: 0; }
}
@media (max-width: 480px) {
  .mono { font-size: 130px; }
}
</style>
