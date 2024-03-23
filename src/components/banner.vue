<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { Application } from '@splinetool/runtime';
  import Income from './pages/income.vue'
  import Family from './pages/family.vue'
  import Residence from './pages/residence.vue'
  import Insurance from './pages/insurance.vue';
  import Fund from './pages/fund.vue';
  import Calculate from './pages/calculate.vue';
  import breadCrumb from './pages/pagesComponents/breadCrumb.vue';
  import Header from './pages/pagesComponents/header.vue';
  import Next from './pages/pagesComponents/next.vue';
  import Back from './pages/pagesComponents/back.vue';

  const canvas = ref(null);

  //pages state
  const pagesNum = ref(0)
  function increment(){
    pagesNum.value++;
    console.log(pagesNum.value)
  }
  function decrement(){
    pagesNum.value--  
    console.log(pagesNum.value)
  }
  function setPageNums(page){
    pagesNum.value=page
  }

  const formData = ref({
    income: {
      salary: '',
      bonus : '',
      otherIncome: ''
    },
    family:{

    },
    
  });

  const submitForm = () =>{
    console.log(formData.value)
  }

  watch(formData, ()=>{
    submitForm();
  })

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
      <h1 class="mb-[2.5vh] mt-[-20%] sm:mt-[3%] text-5xl font-Mitr font-semibold text-white">Who you are?</h1>
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
      <div class="w-screen h-screen flex justify-center items-center">
        <div class="glass w-5/6  pb-16 relative"> 
          <Header/>
            <div><breadCrumb :pagesNum="pagesNum" :setPageNums="setPageNums"/></div>
            <div v-if="pagesNum==0"><Income v-model:income="formData.income"/></div>
            <div v-if="pagesNum==1"><Family/></div>
            <div v-if="pagesNum==2"><Residence/></div>
            <div v-if="pagesNum==3"><Insurance/></div>
            <div v-if="pagesNum==4"><Fund/></div>
            <div v-if="pagesNum==5"><Calculate/></div>
            <div class="absolute bottom-8 flex justify-center w-full">
                <Back v-if="pagesNum!==0" :decrement="decrement"/>
                <Next v-if="pagesNum!==5" :increment="increment"/>
            </div>
            <div><h1>Banner</h1>{{ JSON.stringify(formData) }}</div>
        </div>
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
  .bg-purple {
    background-color: rgb(136, 130, 219);
  }
  .bg-custom {
    background-color: rgba(179,175,233,1);
  }
</style>