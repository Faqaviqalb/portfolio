<script setup lang="ts">
const route = useRoute()
const site = useSite()
const { localeProperties } = useI18n()

useHead({
  htmlAttrs: {
    lang: () => localeProperties.value.language,
    dir: () => localeProperties.value.dir,
  },
})
useSeoMeta({
  title: () => site.value.meta.title,
  description: () => site.value.meta.description,
})
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
