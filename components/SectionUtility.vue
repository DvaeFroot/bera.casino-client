<template>
  <div class="relative min-h-screen bg-light-peach overflow-hidden">
    <!-- Decorations -->
    <!-- 1st Decoration box -->
    <div class="absolute right-[150px] top-[64px] -z-0 h-[300px] w-full overflow-hidden border border-black 
                md:w-[980px]"></div>
    <!-- 2nd Decoration box -->
    <div class="absolute left-[-700px] top-[400px] -z-0 h-[300px] w-[980px] overflow-hidden border border-black
                [@media(min-width:768px)]:h-[158px]"></div>
    <!-- 3rd Decoration box -->
    <div class="absolute h-[200px] bottom-[0px] left-[500px] -z-0 w-full overflow-hidden border border-black
                "></div>
    <!-- First Section -->
    <section id="section-utility" class="relative flex justify-center border-b border-black px-4 py-16 md:px-8">
      <!-- <div class="absolute z-1 box-content max-w-96 h-80 bottom-8 inset-x-20  p-12 border-2 bg-white border-black"></div> -->
      <div class="max-w-6xl ">
        <div class=" grid grid-cols-1 items-center gap-16 md:grid-cols-2 ">
          <!-- GIF Box -->
          <div class="h-84 relative  border border-black bg-white p-4">
            <!-- rectangle that holds the close and minimize button design -->
            <!-- GIF file embed - Bear Biking-->
            <img src="/bikingbear.gif" alt="Sample GIF" class="sm:h-[450px] w-[400px]" />
            <div>./bikingbear.gif</div>
            <!--<div class="relative bg-white  border border-black h-84 bottom-3"></div>-->
          </div>
          <div class="h-84 absolute ml-2  mt-2  border border-black bg-white">
            <!-- GIF file embed -->
          </div>
          <!-- Simple Text Carousel -->
          <div class=" h-auto w-auto max-w-6xl border border-black bg-white p-6 lg:w-[500px]">
            <div class="relative h-80 ">
              <transition-group name="fade">
                <div v-for="(text, index) in carouselTexts" :key="index" v-show="currentIndex === index"
                  class="absolute inset-0 flex items-center justify-center">
                  <div class=" p-6 ">
                    <p class="text-center font-[koulen] text-4xl">{{ text }}</p>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Second Section -->
    <section id="section-staking"
      class="relative flex justify-center mx-auto max-w-7xl border-b border-black px-4 py-8  md:px-8 ">
      <div class=" flex h-full content-center pb-[150px]">
        <div class=" grid grid-cols-1 content-center gap-4 md:grid-cols-2">
          <div class=" w-full py-[80px] sm:py-[170px]">
            <h1 class="text-center font-[Koulen] text-6xl 
                      sm:ml-4 sm:text-center
                      md:text-center md:text-9xl
                      [@media(min-width:1024px)]:text-9xl [@media(min-width:768px)]:text-center
                      [@media(min-width:768px)]:text-8xl"> STAKING </h1>
            <p class="text-center font-[Koulen] text-3xl sm:ml-4 sm:text-center ">"Coming thoon.."</p>
          </div>
          <!-- stacked box of bear eating gif -->
          <!-- GIF container of Bear Eating Fruits -->
          <div
            class="gif-container relative h-auto w-full border border-black bg-white p-4 
                      lg:top-8 lg:w-[380px]
                      [@media(min-width:1024px)]:inset-x-[120px] [@media(min-width:1024px)]:h-[412px] [@media(min-width:768px)_and_(max-width:782px)]:-inset-x-[230px] [@media(min-width:768px)_and_(max-width:782px)]:inset-y-[250px] [@media(min-width:768px)_and_(max-width:782px)]:h-[335px] [@media(min-width:768px)_and_(max-width:789px)]:inset-x-[40px]
                      [@media(min-width:768px)_and_(max-width:789px)]:inset-y-[100px] [@media(min-width:768px)_and_(max-width:789px)]:h-[314px] [@media(min-width:800px)_and_(max-width:1020px)]:h-[314px]">
            <!-- rectangle that holds the close and minimize button design -->
            <!-- GIF file embed - Bear Eating Fruits -->
            <img class="h-auto w-full" src="/bear.png" />
            <div>./bear.gif</div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const carouselTexts = [
  " 60% of Game Revenue Used For Buybacks, Burns, + Airdrops to Loyal Beras",
  "Future IRL Event Perks / Merch ",
  "Prioritized feedback + discord role",
  "Access to Private Bera Cabal Telegram Chat",
  "Join our community today"
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
