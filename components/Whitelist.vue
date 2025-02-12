<template>
  <div class="flex flex-row justify-between px-16 pt-[100px] pb-12 bg-light-peach">
    <div class="bg-green-700 w-[800px]">Left Section</div>
    <div class="w-[800px] ">
      <form @submit.prevent="submitForm">
        <div class="bg-light-peach-100 border border-black p-8 font-[Lexend] text-[32px] font-medium">
          <div class="pb-2">Whitelist Application</div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your Twitter/X username?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2"
                placeholder="Enter your Twitter/X username">
            </div>
          </div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your Discord username?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2" placeholder="Enter your Discord username">
            </div>
          </div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your Telegram @?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2" placeholder="Enter your Telegram @">
            </div>
          </div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your BeraChain address?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2"
                placeholder="Enter your BeraChain address">
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse mt-4">
          <button
            class="px-8 py-2 border border-black bg-light-yellow font-[Lexend] text-[24px] font-normal hover:bg-light-brown">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
const submitForm = () => {
  return;
}
</script>
