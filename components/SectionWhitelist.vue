<template>
  <div class="flex flex-row justify-between px-16 pt-[100px] pb-12 bg-light-peach relative">
    <!-- Decorations -->
    <div class="absolute left-[400px] top-[50px] h-[300px] w-[1200px] border border-black -z-0"></div>
    <div class="absolute left-[-400px] top-[400px] h-[300px] w-[1200px] border border-black -z-0"></div>
    <div class="absolute right-[-400px] bottom-[-100px] h-[300px] w-[1200px] border border-black -z-0"></div>

    <!-- Left Section -->
    <div class="w-[800px] relative z-10">
      <div class="absolute top-[100px] left-[225px] border border-black bg-red rounded-b-[25px]">
        <div class="flex flex-row-reverse bg-egg-white border-b border-black h-[50px] p-2 w-full">
          <div class="text-[25px] p-2 font-bold border border-black flex items-center justify-center">
            <p>X</p>
          </div>
          <div class="text-[25px] px-3 pb-4 mr-2 font-bold border border-black text-center">-</div>
        </div>
        <div class="p-16 bg-white rounded-b-[25px]">
          <img src="/bear.png" class="w-[300px]" />
        </div>
      </div>
      <div class="absolute top-[75px] left-[200px] border border-black bg-red rounded-b-[25px]">
        <div class="flex flex-row-reverse bg-egg-white border-b border-black h-[50px] p-2 w-full ">
          <div class="text-[25px] p-2 font-bold border border-black flex items-center justify-center">
            <p>X</p>
          </div>
          <div class="text-[25px] px-3 pb-4 mr-2 font-bold border border-black text-center">-</div>
        </div>
        <div class="p-16 bg-white rounded-b-[25px]">
          <img src="/bear.png" class="w-[300px]" />
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-[800px] relative">
      <div class="z-10 absolute bottom-[70px] left-[15px] w-full">
        <div class="bg-light-peach-100 border border-black p-8 font-[Lexend] text-[32px] font-medium ">
          <div class="pb-2">Whitelist Application</div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your Twitter/X username?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                placeholder="Enter your Twitter/X username">
            </div>
          </div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your Discord username?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                placeholder="Enter your Discord username">
            </div>
          </div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your Telegram @?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                placeholder="Enter your Telegram @">
            </div>
          </div>
          <div class="text-[23px] pb-4 font-light">
            <div class="pb-2">
              What is your BeraChain address?
            </div>
            <div>
              <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                placeholder="Enter your BeraChain address">
            </div>
          </div>
        </div>
      </div>
      <div class="z-20 relative">
        <form @submit.prevent="submitForm">
          <div class="bg-light-peach-100 border border-black p-8 font-[Lexend] text-[32px] font-medium">
            <div class="pb-2">Whitelist Application</div>
            <div class="text-[23px] pb-4 font-light">
              <div class="pb-2">
                What is your Twitter/X username?
              </div>
              <div>
                <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Twitter/X username">
              </div>
            </div>
            <div class="text-[23px] pb-4 font-light">
              <div class="pb-2">
                What is your Discord username?
              </div>
              <div>
                <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Discord username">
              </div>
            </div>
            <div class="text-[23px] pb-4 font-light">
              <div class="pb-2">
                What is your Telegram @?
              </div>
              <div>
                <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Telegram @">
              </div>
            </div>
            <div class="text-[23px] pb-4 font-light">
              <div class="pb-2">
                What is your BeraChain address?
              </div>
              <div>
                <input type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your BeraChain address">
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse mt-8">
            <button
              class="px-8 py-2 border border-black bg-light-yellow font-[Lexend] text-[24px] font-normal hover:bg-light-brown">Submit</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
const submitForm = () => {
  return;
}
</script>
