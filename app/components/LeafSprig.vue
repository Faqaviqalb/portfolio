<script setup lang="ts">
// Decorative eucalyptus-style sprig drawn in SVG (no image assets needed).
const leaves = [
  { x: 60, y: 210, r: -40, s: 1.1 }, { x: 60, y: 210, r: 40, s: 1.0 },
  { x: 62, y: 170, r: -50, s: 1.0 }, { x: 62, y: 170, r: 35, s: 0.95 },
  { x: 66, y: 130, r: -35, s: 0.9 }, { x: 66, y: 130, r: 45, s: 0.85 },
  { x: 72, y: 92, r: -45, s: 0.75 }, { x: 72, y: 92, r: 30, s: 0.7 },
  { x: 80, y: 58, r: -30, s: 0.6 }, { x: 80, y: 58, r: 40, s: 0.55 },
  { x: 88, y: 30, r: 0, s: 0.5 },
]
</script>

<template>
  <svg viewBox="0 0 140 260" aria-hidden="true" class="sprig">
    <path d="M58 258 C 60 200, 62 140, 88 22" stroke="currentColor" stroke-width="2" fill="none" opacity=".7" />
    <g v-for="(l, i) in leaves" :key="i" :transform="`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`">
      <ellipse cx="0" cy="-22" rx="11" ry="22" fill="currentColor" :opacity="0.55 + (i % 3) * 0.15" />
      <path d="M0 0 L0 -40" stroke="var(--cream)" stroke-width=".8" opacity=".35" />
    </g>
  </svg>
</template>

<style scoped>
.sprig { color: var(--sage); }
</style>
