<template>
  <div>
    <AppNavBar></AppNavBar>
    <slot />
    <Utility/>
  </div>
</template>

<script lang="ts">
import AppNavBar from '~/components/AppNavBar.vue';
import Utility from '~/components/Utility.vue';
</script>
