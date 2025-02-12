<script setup lang="ts">
import { Icon } from '#components';

</script>

<template>
  <div class="flex justify-between flex-row px-12 py-2 bg-light-peach">
    <div class="flex flex-row justify-between w-[600px]">
      <div class=""><img src="/beracasino.png" class="scale-100" />
      </div>
      <div class="flex flex-row justify-evenly ml-16 items-center font-[">
        <div class="px-4 font-[Koulen] text-2xl cursor-pointer">
          WHITELIST
        </div>
        <div class="px-4 font-[Koulen] text-2xl cursor-pointer">
          UTILITY
        </div>
        <div class="px-4 font-[Koulen] text-2xl cursor-pointer">
          STAKING
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center">
      <Icon name="prime:discord" class="h-10 w-10 mx" />
      <Icon name="prime:telegram" class="h-10 w-10 mx" />
      <Icon name="prime:twitter" class="h-6 w-6 mx" />
    </div>
  </div>
</template>
