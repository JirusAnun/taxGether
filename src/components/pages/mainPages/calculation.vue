<script setup>
    import { ref, onMounted, watch } from 'vue';
    import Header from '../pagesComponents/header.vue';
    import Income from '../income.vue';
    import Family from '../family.vue';
    import Residence from '../residence.vue';
    import Insurance from '../insurance.vue';
    import Fund from '../fund.vue';
    import Calculate from '../calculate.vue';
    import breadCrumb from '../pagesComponents/breadCrumb.vue';
    import Back from '../pagesComponents/back.vue';
    import Next from '../pagesComponents/next.vue';

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
</script>

<template>
    <div>
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
</template>


<style lang="scss" scoped>

</style>