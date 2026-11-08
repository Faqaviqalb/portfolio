<script setup lang="ts">
// CSS-drawn device mockups used until real screenshots are added.
defineProps<{ kind: 'dashboard' | 'mobile' | 'landing' }>()
const bars = [40, 62, 48, 80, 58, 92, 70]
</script>

<template>
  <div class="mock" :class="kind" aria-hidden="true">
    <!-- Dashboard -->
    <div v-if="kind === 'dashboard'" class="screen dash">
      <aside><i v-for="n in 5" :key="n" /></aside>
      <div class="main">
        <div class="kpis"><b v-for="n in 3" :key="n"><em /><strong /></b></div>
        <div class="chart">
          <svg viewBox="0 0 200 60" preserveAspectRatio="none">
            <path d="M0 50 C 20 40, 30 44, 45 34 S 75 38, 90 22 S 130 30, 150 16 S 185 18, 200 8 L200 60 L0 60Z" fill="var(--sage-tint)" />
            <path d="M0 50 C 20 40, 30 44, 45 34 S 75 38, 90 22 S 130 30, 150 16 S 185 18, 200 8" stroke="var(--sage)" stroke-width="1.6" fill="none" />
          </svg>
        </div>
        <div class="bars"><span v-for="(b, i) in bars" :key="i" :style="{ height: b + '%' }" /></div>
      </div>
    </div>

    <!-- Mobile -->
    <div v-else-if="kind === 'mobile'" class="phones">
      <div v-for="n in 2" :key="n" class="phone" :class="'p' + n">
        <div class="notch" />
        <div class="balance"><em /><strong /></div>
        <div class="card-chip" />
        <div class="rows"><i v-for="r in 4" :key="r" /></div>
      </div>
    </div>

    <!-- Landing -->
    <div v-else class="screen land">
      <div class="nav"><i /><span><i v-for="n in 4" :key="n" /></span></div>
      <div class="hero">
        <div class="txt"><b>Spaces<br />that inspire</b><em /><u /></div>
        <div class="art"><div class="shelf" /><div class="plant" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock { position: absolute; inset: 0; display: grid; place-items: center; padding: 22px; }
.mock.dashboard { background: linear-gradient(160deg, var(--sand), var(--cream-2)); }
.mock.mobile { background: linear-gradient(160deg, var(--sage-dark), var(--sage)); }
.mock.landing { background: linear-gradient(160deg, #e9e2d5, #f5f0e7); }

.screen { width: 92%; aspect-ratio: 16 / 10; background: var(--white); border-radius: 10px; box-shadow: 0 18px 34px -16px rgba(40,45,30,.35); overflow: hidden; transform: perspective(900px) rotateX(6deg) rotateY(-6deg); transition: transform .5s ease; }

/* dashboard */
.dash { display: flex; }
.dash aside { width: 18%; background: var(--sage-dark); padding: 10px 8px; display: flex; flex-direction: column; gap: 7px; }
.dash aside i { height: 5px; border-radius: 3px; background: rgba(255,255,255,.25); }
.dash aside i:first-child { background: var(--gold); width: 70%; margin-bottom: 6px; }
.dash .main { flex: 1; padding: 10px; display: grid; gap: 8px; grid-template-rows: auto 1fr auto; }
.kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.kpis b { border: 1px solid var(--line); border-radius: 6px; padding: 6px; display: grid; gap: 4px; }
.kpis em { height: 3px; width: 50%; background: var(--line); border-radius: 2px; }
.kpis strong { height: 6px; width: 70%; background: var(--sage-soft); border-radius: 2px; }
.chart svg { width: 100%; height: 100%; }
.bars { display: flex; align-items: end; gap: 5px; height: 26px; }
.bars span { flex: 1; background: var(--sage-soft); border-radius: 2px 2px 0 0; }
.bars span:nth-child(6) { background: var(--gold); }

/* mobile */
.phones { position: relative; width: 100%; height: 100%; }
.phone { position: absolute; width: 36%; aspect-ratio: 9 / 18; background: #23291e; border-radius: 18px; padding: 8px; border: 3px solid #4a5640; box-shadow: 0 20px 34px -14px rgba(0,0,0,.5); display: flex; flex-direction: column; gap: 8px; transition: transform .5s ease; }
.phone.p1 { left: 18%; top: 8%; transform: rotate(-10deg); }
.phone.p2 { right: 16%; top: 14%; transform: rotate(8deg); background: var(--white); border-color: #d9d3c6; }
.notch { width: 30%; height: 5px; border-radius: 3px; background: rgba(255,255,255,.2); margin: 0 auto 4px; }
.p2 .notch { background: var(--line); }
.balance { display: grid; gap: 4px; }
.balance em { height: 3px; width: 40%; background: rgba(255,255,255,.3); border-radius: 2px; }
.balance strong { height: 9px; width: 70%; background: var(--sage-soft); border-radius: 3px; }
.p2 .balance em { background: var(--line); } .p2 .balance strong { background: var(--sage-dark); }
.card-chip { height: 22%; border-radius: 8px; background: linear-gradient(135deg, var(--gold), #e2c27d); }
.p2 .card-chip { background: linear-gradient(135deg, var(--sage), var(--sage-soft)); }
.rows { display: grid; gap: 6px; }
.rows i { height: 7px; border-radius: 3px; background: rgba(255,255,255,.12); }
.p2 .rows i { background: var(--cream-2); }

/* landing */
.land { display: flex; flex-direction: column; }
.land .nav { display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; }
.land .nav > i { width: 26px; height: 6px; background: var(--sage-dark); border-radius: 2px; }
.land .nav span { display: flex; gap: 6px; }
.land .nav span i { width: 14px; height: 3px; background: var(--line); border-radius: 2px; }
.land .hero { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 6px 12px 12px; align-items: center; }
.land .txt { display: grid; gap: 6px; }
.land b { font: 500 13px/1.1 var(--serif); color: var(--sage-dark); text-transform: uppercase; letter-spacing: .04em; }
.land .txt em { height: 3px; width: 80%; background: var(--line); border-radius: 2px; }
.land .txt u { height: 9px; width: 40%; background: var(--sage); border-radius: 5px; }
.land .art { position: relative; height: 100%; background: var(--cream-2); border-radius: 6px; }
.land .shelf { position: absolute; left: 20%; right: 20%; bottom: 30%; height: 3px; background: #b99c74; }
.land .plant { position: absolute; left: 40%; bottom: calc(30% + 3px); width: 18px; height: 26px; border-radius: 50% 50% 4px 4px; background: radial-gradient(circle at 50% 30%, var(--sage) 50%, transparent 52%), linear-gradient(transparent 60%, #d6c7ad 60%); }
</style>

<style>
/* hover tilt hooks from parent card */
.project:hover .mock .screen { transform: perspective(900px) rotateX(0) rotateY(0) scale(1.03); }
.project:hover .mock .phone.p1 { transform: rotate(-6deg) translateY(-6px); }
.project:hover .mock .phone.p2 { transform: rotate(4deg) translateY(-10px); }
</style>
