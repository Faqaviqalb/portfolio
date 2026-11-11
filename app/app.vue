<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <!-- Re-mounted per page so its section tracking starts fresh. -->
    <SiteHeader :key="route.path" />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
