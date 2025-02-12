<template>
  <div>
    <AppNavBar />
    <slot />
    <Whitelist />
  </div>
</template>

<script lang="ts">
import AppNavBar from '~/components/AppNavBar.vue';
import Whitelist from '~/components/Whitelist.vue';
</script>
