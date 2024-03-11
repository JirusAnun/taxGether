<script setup>
  import { ref, onMounted } from 'vue';
  import { Application } from '@splinetool/runtime';

  const canvas = ref(null);

  onMounted(() => {
    const app = new Application(canvas.value);
    app.load('https://prod.spline.design/cRCPLm57W0EwL-oO/scene.splinecode');
  });



</script>

<template>
  <div class="relative h-screen w-screen overflow-auto snap-y bg-custom">
    
    <div class="snap-start h-screen w-screen">
      <canvas ref="canvas" class="absolute top-0 left-0 h-[100%] w-[100%]"></canvas>
      <h4 class="absolute left-[50%] bottom-[3%] transform -translate-x-[50%] -translate-y-[50%] m-4 text-white">scroll down</h4>
    </div>

    <div class="snap-start h-screen w-screen gradient-bg flex flex-col items-center justify-center">
      <h1 class="mb-[2.5vh] mt-[-20%] sm:mt-[-5%] text-5xl font-Mitr font-semibold text-white">Who you are?</h1>
      <div class="w-full flex justify-start items-center">
        <div class="sm:w-[60vw] h-[30vh] mt-[2.5%] ml-[5%] rounded-2xl p-5 w-[90vw] glass">
          <h2 class="mb-4 text-3xl text-[#ffffff]">Tax spender</h2>
          <p class="text-white font-Noto font-medium">คุณเป็นคนที่เสียภาษีให้กับรัฐบาลสุดโง่ที่ไม่รู้ว่าเค้าเอาภาษีของคุณไปทำอะไร</p>
        </div>
        <div class="flex-grow flex items-center justify-center">
          <img src="../assets/taxPeople.png" class="w-0 sm:w-[30vw] sm:h-[30vh] sm:object-contain invisible sm:visible">
        </div>
      </div>

      <div class="w-full flex justify-end items-center">
        <div class="flex-grow flex items-center justify-center">
          <img src="../assets/sale.png" class="w-0 sm:w-[30vw] sm:h-[30vh] sm:object-contain invisible sm:visible">
        </div>
        <div class="sm:w-[60vw] w-[90vw] h-[30vh] mt-[5%] mr-[5%] rounded-2xl glass p-5">
          <h2 class="mb-4 text-3xl text-[#ffffff]">Tax spender</h2>
          <p class="text-white font-Noto font-medium">คุณเป็นคนที่เสียภาษีให้กับรัฐบาลสุดโง่ที่ไม่รู้ว่าเค้าเอาภาษีของคุณไปทำอะไร</p>
        </div>
      </div>

    </div>

    <div class="snap-start h-screen w-screen bg-purple flex flex-col items-center justify-center">
      <p class="text-4xl text-white">tmp</p>
    </div>
  </div>
</template>

<style scoped>
  .snap-y {
    scroll-snap-type: y mandatory;
  }
  .snap-start {
    scroll-snap-align: start;
  }
  .gradient-bg {
    background-color: rgba(179,175,233,1);
    background-image: linear-gradient(180deg, rgba(179,175,233,1) 0%, rgb(136, 130, 219) 30%);
  }
  .bg-purple {
    background-color: rgb(136, 130, 219);
  }
  .bg-custom {
    background-color: rgba(179,175,233,1);
  }
  .glass{
    background: linear-gradient(180deg, rgb(160, 188, 239,0.17) 0%, rgba(85, 115, 172, 0.4) 100%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);
    border: 1px solid rgba(255, 255, 255, 0.51);
  }
</style>