<script setup lang="ts">
const site = useSite()
const asset = useAsset()
const profile = computed(() => site.value.profile)
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
          <a href="#work" class="btn btn-primary">{{ site.ui.viewWork }} <AppIcon name="arrow-right" /></a>
          <a :href="`mailto:${profile.email}`" class="btn btn-ghost">{{ site.ui.contactMe }} <AppIcon name="mail" /></a>
          <a v-if="profile.cv" :href="profile.cv" class="btn btn-ghost" download>{{ site.ui.downloadCv }} <AppIcon name="download" /></a>
        </div>
      </div>

      <div class="visual">
        <div class="arch">
          <img v-if="profile.photo" :src="asset(profile.photo)" :alt="profile.fullName" />
          <div v-else class="placeholder">
            <span class="mono">{{ profile.monogram }}</span>
            <span class="hint">Add your photo in <code>app/data/site.ts</code></span>
          </div>
        </div>

        <div class="code-card" aria-hidden="true">
          <div class="dots"><i /><i /><i /></div>
          <pre><span class="k">&lt;template&gt;</span>
  <span class="t">&lt;Idea</span> <span class="a">v-model</span>=<span class="s">"design"</span><span class="t">/&gt;</span>
<span class="k">&lt;/template&gt;</span></pre>
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

.code-card {
  position: absolute; z-index: 3; left: 0; top: 42%;
  background: var(--sage-dark); color: var(--cream); border-radius: 14px;
  padding: 12px 16px 14px; box-shadow: 0 20px 40px -18px rgba(30, 38, 25, .55);
  animation: float 6s ease-in-out infinite;
}
.code-card pre { direction: ltr; text-align: left; margin: 8px 0 0; font: 12.5px/1.6 ui-monospace, 'SF Mono', Menlo, monospace; }
.dots { display: flex; gap: 5px; }
.dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); opacity: .8; }
.dots i:nth-child(2) { background: var(--sage-soft); }
.dots i:nth-child(3) { background: var(--cream); opacity: .5; }
.k { color: var(--sage-soft); } .t { color: #f0d79a; } .a { color: #d9e2cc; } .s { color: #f6c9a8; }
@keyframes float { 50% { transform: translateY(-10px); } }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .copy { padding-bottom: 10px; }
  .visual { min-height: 0; }
  .code-card { top: 30%; }
}
@media (max-width: 480px) {
  .code-card { display: none; }
  .mono { font-size: 130px; }
}
</style>
