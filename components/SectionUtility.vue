<template>
  <div class="min-h-screen bg-light-peach">
    <!-- Decorations -->
    <!-- 1st Decoration box -->
    <div class="absolute right-[150px] top-[64px] h-[300px] w-full border border-black overflow-hidden -z-0 
                md:w-[980px]"></div>
    <!-- 2nd Decoration box -->
    <div class="absolute left-[-700px] top-[400px] h-[300px] w-[980px] border border-black overflow-hidden -z-0
                [@media(min-width:768px)]:h-[158px]"></div>
    <!-- 3rd Decoration box -->
    <div class="absolute right-[150px] bottom-[-200px] top-[783px] h-[680px] w-full border border-black overflow-hidden -z-0 invisible
                [@media(min-width:768px)]:invisible
                [@media(min-width:881px)]:visible
                [@media(min-width:881px)]:inset-y-[818px]
                [@media(min-width:881px)]:inset-x-[818px]
                "></div>
    <!-- First Section -->
    <section class="relative py-16 px-4 md:px-8 border-b border-black">
      <!-- <div class="absolute z-1 box-content max-w-96 h-80 bottom-8 inset-x-20  p-12 border-2 bg-white border-black"></div> -->
      <div class="max-w-6xl ">
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-16 items-center ">
          <!-- Stacked Box #1 background for the bear GIF -->
          <div
            class="absolute box-content w-[220px] h-[280px] bottom-10 inset-x-[30px]  inset-y-[85px]  p-12 border border-black bg-white rounded
                      [@media(min-width:768px)_and_(max-width:782px)]:w-[210px] [@media(min-width:768px)_and_(max-width:782px)]:h-[270px] [@media(min-width:768px)_and_(max-width:782px)]:inset-x-[50px]  [@media(min-width:768px)_and_(max-width:782px)]:inset-y-[85px]  
                      [@media(min-width:1024px)_and_(max-width:1079px)]:h-[430px] [@media(min-width:1024px)_and_(max-width:1079px)]:w-[330px] [@media(min-width:1024px)_and_(max-width:1079px)]:inset-x-[70px]
                      [@media(min-width:1080px)]:h-[440px] [@media(min-width:1080px)]:w-[350px] [@media(min-width:1080px)]:inset-x-[70px]
                      [@media(min-width:1189px)]:h-[530px] [@media(min-width:1189px)]:w-[430px] [@media(min-width:1189px)]:inset-x-[70px]">
          </div>
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
            <!--<div class="relative bg-white  border border-black h-84 bottom-3"></div>-->
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
    <section class="relative py-16 px-4 md:px-8 border-b border-black max-w-7xl  mx-8 ">
      <div class=" flex content-center pb-[150px] h-full">
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
          <div class=" py-[80px] w-full sm:py-[170px]">
            <h1 class="font-[Koulen] text-6xl text-center 
                      [@media(min-width:768px)]:text-8xl [@media(min-width:768px)]:text-center
                      sm:text-center sm:ml-4
                      md:text-9xl md:text-center
                      [@media(min-width:1024px)]:text-9xl"> STAKING </h1>
            <p class="font-[Koulen] text-3xl text-center sm:text-center sm:ml-4 ">"Coming thoon.."</p>
          </div>
          <!-- stacked box of bear eating gif -->
          <div
            class="absolute z-1 box-content w-[360px] h-[400px]  top-[90px] right-6  p-12 border border-black bg-white round
                      [@media(min-width:1024px)]:ml-[150px] [@media(min-width:1024px)]:h-[330px] [@media(min-width:1024px)]:w-[260px] [@media(min-width:1024px)]:inset-x-[450px] [@media(min-width:1024px)]:inset-y-[110px]
                      [@media(min-width:773px)_and_(max-width:782px)]:h-[220px] [@media(min-width:773px)_and_(max-width:782px)]:w-[215px] [@media(min-width:773px)_and_(max-width:782px)]:inset-x-[380px] [@media(min-width:773px)_and_(max-width:782px)]:inset-y-[180px]
                      [@media(min-width:768px)_and_(max-width:782px)]:flex [@media(min-width:768px)_and_(max-width:782px)]:h-[210px] [@media(min-width:768px)_and_(max-width:782px)]:w-[190px] [@media(min-width:768px)_and_(max-width:782px)]:inset-x-[380px] [@media(min-width:768px)_and_(max-width:782px)]:inset-y-[180px]
                      [@media(min-width:800px)_and_(max-width:1020px)]:w-[190px] [@media(min-width:800px)_and_(max-width:1020px)]:h-[211px] [@media(min-width:800px)_and_(max-width:1020px)]:inset-x-[340px] [@media(min-width:800px)_and_(max-width:1020px)]:inset-y-[80px]
                      [@media(min-width:375px)_and_(max-width:767px)]:w-[125px] [@media(min-width:375px)_and_(max-width:767px)]:h-[150px] [@media(min-width:375px)_and_(max-width:767px)]:-ml-[130px] [@media(min-width:375px)_and_(max-width:767px)]:inset-y-[530px] [@media(min-width:375px)_and_(max-width:767px)]:inset-x-[158px] ">
          </div>
          <!-- GIF container of Bear Eating Fruits -->
          <div
            class="relative gif-container border border-black h-auto w-full 
                      lg:w-[380px] lg:top-8
                      [@media(min-width:768px)_and_(max-width:789px)]:h-[314px] [@media(min-width:768px)_and_(max-width:789px)]:inset-x-[40px] [@media(min-width:768px)_and_(max-width:789px)]:inset-y-[100px] [@media(min-width:768px)_and_(max-width:782px)]:-inset-x-[230px] [@media(min-width:768px)_and_(max-width:782px)]:inset-y-[250px] [@media(min-width:768px)_and_(max-width:782px)]:h-[335px]
                      [@media(min-width:800px)_and_(max-width:1020px)]:h-[314px] [@media(min-width:1024px)]:inset-x-[120px] [@media(min-width:1024px)]:h-[412px]">
            <!-- rectangle that holds the close and minimize button design -->
            <div class="border-b border-black bg-white w-full h-8 ">
              <div class="flex flex-row-reverse h-full">
                <p class="border-l border-black pl-3 pr-3">X</p>
                <p class="border-l border-black pl-3 pr-3">_</p>
              </div>
            </div>
            <!-- GIF file embed - Bear Eating Fruits -->
            <img class=" h-auto w-full" src="/bear.png" />
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
