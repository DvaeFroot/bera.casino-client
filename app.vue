<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
provideHeadlessUseId(() => useId())

useHead({
  title: 'Bera Casino',

  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
