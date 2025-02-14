<template>
  <div class="min-h-screen bg-light-peach">

     <!-- Decorations -->
     <div class="absolute left-[400px] top-[64px] h-[300px] w-[1200px] border border-black -z-0 "></div>
    <div class="absolute left-[-700px] top-[400px] h-[300px] w-[1200px] border border-black -z-0"></div>
    <div class="absolute right-[-400px] bottom-[-200px] h-[300px] w-[1200px] border border-black -z-0"></div>


    <!-- First Section -->
    <section class="relative py-16 px-4 md:px-8 border-b border-black lg:mx-auto">
      <div class="max-w-6xl lg:mx-auto">
        <div class="flex flex-col grid grid-cols-1 md:grid-cols-2 gap-16 items-center lg:mx-auto lg:gap-32">

          <!-- GIF Box -->
          <div class="relative bg-white  border border-black h-84">
            <!-- rectangle that holds the close and minimize button design -->
            <div class=" border-b border-black bg-white w-full h-8 ">
              <div class="flex flex-row-reverse h-full">
                <p class="border-l border-black pl-3 pr-3">X</p>
                <p class="border-l border-black pl-3 pr-3">_</p>
              </div>
            </div>

            <!-- GIF file embed - Bear Biking-->
            <img src="/bikingbear.gif" alt="Sample GIF" class="w-full h-auto rounded " />
          </div>

          <div class="absolute mt-2 ml-2  bg-white  border border-black h-84">
          

            <!-- GIF file embed -->
    
          </div>

          <!-- Simple Text Carousel -->
          <div class=" p-6 max-w-6xl h-auto w-auto border border-black bg-white lg:w-[500px]">
            <div class="relative h-80 ">
              <transition-group name="fade">
                <div v-for="(text, index) in carouselTexts" :key="index" v-show="currentIndex === index"
                  class="absolute inset-0 flex items-center justify-center">
                  <div class=" p-6 ">
                    <p class="text-4xl text-center font-[koulen]">{{ text }}</p>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </section>

     <!-- Second Section -->
    <section class="relative py-16 px-4 md:px-8 border-b border-black max-w-7xl  mx-8 my-8">
      <div class="flex content-center pb-[150px] h-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 content-center ">

          <div>
            <h1 class="font-[Koulen] text-8xl text-center sm:text-center sm:ml-4">STAKING</h1>
            <p class="font-[Koulen] text-2xl text-center sm:text-center sm:ml-4">"Coming thoon.."</p>
          </div>

          
          <div class="gif-container md:ml-[250px] md:-my-[160px] border border-black h-auto w-full lg:my-[5px]  ">
            <!-- rectangle that holds the close and minimize button design -->
            <div class="border-b border-black bg-white w-full h-8 ">
              <div class="flex flex-row-reverse h-full">
                <p class="border-l border-black pl-3 pr-3">X</p>
                <p class="border-l border-black pl-3 pr-3">_</p>
              </div>
            </div>

            <!-- GIF file embed - Bear Eating Fruits -->
            <img class="h-auto w-full"  src="/bear.png"/>

        
          </div>

        </div>
      </div>
    </section>
  </div>  
</template>

<script setup>
const carouselTexts = [
  "\" 60% of Game Revenue Used For Buybacks, Burns, + Airdrops to Loyal Beras\"",
  "\"Future IRL Event Perks / Merch \"",
  "\"Prioritized feedback + discord role\"",
  "\"Access to Private Bera Cabal Telegram Chat\"",
  "\"Join our community today\""
]

const currentIndex = ref(0)

// Auto-advance carousel
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselTexts.length
  }, 3000)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>