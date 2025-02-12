<script setup lang="ts">
import { Icon } from '#components';

</script>

<template>
  <div class="flex justify-between flex-row px-12 py-2 bg-light-peach border-b border-black">
    <div class="flex flex-row justify-between w-[600px]">
      <div class=""><img src="/beracasino.png" class="scale-100 cursor-pointer" />
      </div>
      <div class="flex flex-row justify-evenly ml-16 items-center font-[">
        <div class="px-4 font-[Koulen] text-2xl cursor-pointer hover:border-b-4 hover:border-black">
          WHITELIST
        </div>
        <div class="px-4 font-[Koulen] text-2xl cursor-pointer hover:border-b-4 hover:border-black">
          UTILITY
        </div>
        <div class="px-4 font-[Koulen] text-2xl cursor-pointer hover:border-b-4 hover:border-black">
          STAKING
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center">
      <Icon name="prime:discord" class="h-10 w-10 mx cursor-pointer hover:border-b-4 hover:border-black" />
      <Icon name="prime:telegram" class="h-10 w-10 mx cursor-pointer hover:border-b-4 hover:border-black" />
      <Icon name="prime:twitter" class="h-6 w-6 mx cursor-pointer hover:border-b-4 hover:border-black" />
    </div>
  </div>
</template>
