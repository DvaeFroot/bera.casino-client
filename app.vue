<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
provideHeadlessUseId(() => useId())

useHead({
  title: 'Bera Casino'
})
</script>
