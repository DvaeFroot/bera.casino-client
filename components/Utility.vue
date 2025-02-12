<template>
    <div class="min-h-screen bg-light-peach">
      <!-- First Section -->
      <section class="relative py-16 px-4 md:px-8 border-b border-black">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">

            

            <!-- GIF Box -->
            <div class="relative bg-white  border border-black h-84">
                <!-- rectangle that holds the close and minimize button design -->
            <div class=" border-b border-black bg-white w-full h-8 ">
                <div class="flex flex-row-reverse h-full">
                    <p class="border-l border-black pl-3 pr-3">X</p>
                </div>

                

            </div>

                <!-- GIF file embed -->
              <img
                src="/bikingbear.gif"
                alt="Sample GIF"
                class="w-full h-auto rounded"
              />

              

            </div>

    
            <!-- Simple Text Carousel -->
            <div class=" p-6 ">
              <div class="relative h-48">
                <transition-group name="fade">
                  <div
                    v-for="(text, index) in carouselTexts"
                    :key="index"
                    v-show="currentIndex === index"
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <div class=" p-6 ">
                      <p class="text-4xl text-center font-medium">{{ text }}</p>
                    </div>
                  </div>
                </transition-group>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const carouselTexts = [
    "Welcome to our amazing platform",
    "Discover new possibilities",
    "Create something extraordinary",
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