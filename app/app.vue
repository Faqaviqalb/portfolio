<script setup lang="ts">
const route = useRoute()
const site = useSite()
const asset = useAsset()
const { localeProperties } = useI18n()

useHead({
  htmlAttrs: {
    lang: () => localeProperties.value.language,
    dir: () => localeProperties.value.dir,
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: asset('/favicon.svg') }],
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
