<script setup lang="ts">
import { profile, socials } from '~/data/site'
</script>

<template>
  <section id="home" class="hero">
    <div class="container grid">
      <div class="copy">
        <span class="eyebrow">{{ profile.greeting }} <AppIcon name="spark" class="spark" /></span>
        <h1>
          {{ profile.headline.before }}<br />
          {{ profile.headline.mid }} <em>{{ profile.headline.accent }}</em><br />
          {{ profile.headline.after }}
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
        <LeafSprig class="sprig-left" />
        <div class="arch">
          <img v-if="profile.photo" :src="profile.photo" :alt="profile.fullName" />
          <div v-else class="placeholder">
            <span class="mono">{{ profile.name.charAt(0) }}</span>
            <span class="hint">Add your photo in <code>app/data/site.ts</code></span>
          </div>
        </div>

        <div class="badge" aria-hidden="true">
          <svg viewBox="0 0 120 120" class="ring">
            <defs><path id="circlePath" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
            <text><textPath href="#circlePath">{{ profile.badgeWords.repeat(2) }}</textPath></text>
          </svg>
          <AppIcon name="spark" class="center" />
        </div>

        <div class="code-card" aria-hidden="true">
          <div class="dots"><i /><i /><i /></div>
          <pre><span class="k">&lt;template&gt;</span>
  <span class="t">&lt;Idea</span> <span class="a">v-model</span>=<span class="s">"design"</span><span class="t">/&gt;</span>
<span class="k">&lt;/template&gt;</span></pre>
        </div>

        <div v-if="profile.available" class="status">
          <span class="pulse" /> Available for freelance
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; padding-block: 30px 0; overflow: hidden; }
.grid { display: grid; grid-template-columns: 1.05fr 1fr; align-items: end; gap: 40px; }
.copy { padding-block: 40px 80px; }

h1 { font-size: clamp(40px, 5.6vw, 66px); margin-top: 18px; color: var(--sage-dark); }
h1 em { font-style: italic; color: var(--gold); font-weight: 400; }
.intro { margin-top: 22px; max-width: 460px; color: var(--muted); font-size: 17px; }
.actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }

.connect { margin-top: 44px; }
.eyebrow.small { font-size: 11px; color: var(--muted); }
.icons { display: flex; gap: 12px; margin-top: 12px; }

.visual { position: relative; display: flex; justify-content: center; align-self: stretch; min-height: 560px; }
.arch {
  position: relative; z-index: 1; align-self: end;
  width: min(420px, 100%); aspect-ratio: 420 / 540;
  border-radius: 999px 999px 0 0; overflow: hidden;
  background: linear-gradient(170deg, var(--sage-soft), #a9b59a);
}
.arch img { width: 100%; height: 100%; object-fit: cover; }
.placeholder { height: 100%; display: grid; place-items: center; align-content: center; gap: 12px; color: var(--cream); text-align: center; padding: 20px; }
.mono { font: italic 300 180px/1 var(--serif); opacity: .9; }
.hint { font-size: 12px; opacity: .8; }
.hint code { font-size: 11px; background: rgba(255,255,255,.18); padding: 2px 6px; border-radius: 4px; }

.sprig-left { position: absolute; left: -10px; bottom: 30px; width: 130px; z-index: 2; transform: rotate(-12deg); }

.badge {
  position: absolute; z-index: 3; top: 40px; right: 0;
  width: 122px; height: 122px; border-radius: 50%;
  background: var(--white); box-shadow: var(--shadow); display: grid; place-items: center;
}
.ring { position: absolute; inset: 0; animation: spin 22s linear infinite; }
.ring text { font: 600 9.2px var(--sans); letter-spacing: .22em; fill: var(--sage-dark); }
.badge .center { width: 26px; height: 26px; color: var(--gold); }
@keyframes spin { to { transform: rotate(360deg); } }

.code-card {
  position: absolute; z-index: 3; left: 0; top: 42%;
  background: var(--sage-dark); color: var(--cream); border-radius: 14px;
  padding: 12px 16px 14px; box-shadow: 0 20px 40px -18px rgba(30, 38, 25, .55);
  animation: float 6s ease-in-out infinite;
}
.code-card pre { margin: 8px 0 0; font: 12.5px/1.6 ui-monospace, 'SF Mono', Menlo, monospace; }
.dots { display: flex; gap: 5px; }
.dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); opacity: .8; }
.dots i:nth-child(2) { background: var(--sage-soft); }
.dots i:nth-child(3) { background: var(--cream); opacity: .5; }
.k { color: var(--sage-soft); } .t { color: #f0d79a; } .a { color: #d9e2cc; } .s { color: #f6c9a8; }

.status {
  position: absolute; z-index: 3; right: 6%; bottom: 60px;
  display: flex; align-items: center; gap: 10px;
  background: var(--white); padding: 10px 16px; border-radius: 999px;
  font-size: 13px; font-weight: 600; box-shadow: var(--shadow);
  animation: float 7s ease-in-out infinite reverse;
}
.pulse { width: 9px; height: 9px; border-radius: 50%; background: #6aa15a; box-shadow: 0 0 0 0 rgba(106,161,90,.6); animation: pulse 2s infinite; }
@keyframes pulse { 70% { box-shadow: 0 0 0 9px rgba(106,161,90,0); } 100% { box-shadow: 0 0 0 0 rgba(106,161,90,0); } }
@keyframes float { 50% { transform: translateY(-10px); } }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .copy { padding-bottom: 10px; }
  .visual { min-height: 0; }
  .badge { width: 96px; height: 96px; top: 10px; }
  .code-card { top: 30%; }
}
@media (max-width: 480px) {
  .code-card { display: none; }
  .mono { font-size: 130px; }
}
</style>
