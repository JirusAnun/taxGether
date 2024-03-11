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
      <h1 class="mb-[2.5%] text-5xl">Who you are?</h1>
      <div class="w-full flex justify-start">
        <div class="bg-red-500 w-[60vw] h-[30vh] mt-[2.5%] ml-[5%] rounded-2xl p-5">
          <h2 class="mb-1 text-3xl">Kuy</h2>
          <p>Kuy kuy kuy Kuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuyKuy kuy kuy</p>
          <input type="button">kuy</input>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <div class="bg-red-500 w-[60vw] h-[30vh] mt-[5%] mr-[5%] rounded-2xl"></div>
      </div>
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
  .bg-custom {
    background-color: rgba(255,253,250,1);
  }
</style>