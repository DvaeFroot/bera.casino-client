<template>
  <!-- DESKTOP VIEW -->
  <div
    class="sticky top-0 z-20 hidden flex-row justify-between border-b border-black bg-light-peach px-12 py-2 sm:flex">
    <div class="flex w-[600px] flex-row justify-between">
      <div class=""><img src="/beracasino.png" class="scale-100 cursor-pointer" />
      </div>
      <div class="ml-16 flex flex-row items-center justify-evenly">
        <a href="#section-desktop-whitelist"
          class="cursor-pointer px-4 select-none font-[Koulen] text-2xl hover:border-b-4 hover:border-black">
          WHITELIST
        </a>
        <a href="#section-utility"
          class="cursor-pointer px-4 select-none font-[Koulen] text-2xl hover:border-b-4 hover:border-black">
          UTILITY
        </a>
        <a href="#section-staking"
          class="cursor-pointer px-4 select-none font-[Koulen] text-2xl hover:border-b-4 hover:border-black">
          STAKING
        </a>
      </div>
    </div>
    <div class="flex flex-row items-center">
      <a :href="DISCORD_LINK">
        <Icon name="prime:discord" class="mx h-10 w-10 cursor-pointer hover:border-b-4 hover:border-black" />
      </a>
      <a :href="TWITTER_LINK">
        <Icon name="prime:twitter" class="mx h-6 w-6 cursor-pointer hover:border-b-4 hover:border-black" />
      </a>
    </div>
  </div>

  <!-- MOBILE VIEW -->
  <div class="sticky top-0 z-20 flex flex-row justify-between border-b border-black bg-light-peach px-4 py-2 sm:hidden">
    <div class="flex w-[200px] flex-row justify-between">
      <div class="w-60">
        <img src="/beracasino.png" class="scale-100 cursor-pointer" />
      </div>
    </div>
    <div class="z-30 flex flex-col items-center">
      <div @click="setIsOpen(true)" class="flex h-full cursor-pointer items-center">
        <Icon name="material-symbols:menu" class="h-6 w-6" />
      </div>
      <Dialog :open="isOpen" @close="setIsOpen">
        <DialogOverlay class="fixed inset-0 z-50 bg-light-peach">
          <div class="relative z-50 flex flex-col">
            <DialogTitle>
              <div
                class="flex min-h-[58.7px] flex-row justify-between border border-b border-l-0 border-r-0 border-t-0 border-black px-4 py-2">
                <div>
                  <img src="/beracasino.png" class="h-[41.7px] w-[200px] scale-100 cursor-pointer" />
                </div>
                <div @click="setIsOpen(false)" class="flex h-[41.7px] cursor-pointer items-center">
                  <Icon name="material-symbols:close-rounded" class="h-full w-6" />
                </div>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div class="mt-4 flex flex-col items-end justify-evenly">
                <a href="#section-mobile-whitelist" @click="setIsOpen(false)"
                  class="cursor-pointer select-none px-4 font-[Koulen] text-4xl hover:border-b-4 focus:outline-none hover:border-black">
                  WHITELIST
                </a>
                <a href="#section-utility" @click="setIsOpen(false)"
                  class="mt-4  cursor-pointer select-none px-4 font-[Koulen] text-4xl hover:border-b-4 hover:border-black">
                  UTILITY
                </a>
                <a href="#section-staking" @click="setIsOpen(false)"
                  class="mt-4 cursor-pointer select-none px-4 font-[Koulen] text-4xl hover:border-b-4 hover:border-black">
                  STAKING
                </a>

                <div class="mt-4 flex flex-row items-center px-4">
                  <a :href="DISCORD_LINK">
                    <Icon @click="setIsOpen(false)" name="prime:discord"
                      class="mx h-10 w-10 cursor-pointer hover:border-b-4 hover:border-black" />
                  </a>
                  <a :href="TWITTER_LINK">
                    <Icon @click="setIsOpen(false)" name="prime:twitter"
                      class="mx ml-2 h-6 w-6 cursor-pointer hover:border-b-4 hover:border-black" />
                  </a>
                </div>
              </div>
            </DialogDescription>
          </div>

        </DialogOverlay>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogTitle, DialogDescription, DialogOverlay } from '@headlessui/vue'

const DISCORD_LINK = "https://discord.gg/hcWgw7Q3"
const TWITTER_LINK = "https://x.com/bera_casino"

// DIALOG
const isOpen = ref(false);
function setIsOpen(value: boolean) {
  isOpen.value = value;
  console.log("Hello")
}
</script>
