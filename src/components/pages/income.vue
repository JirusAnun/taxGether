<script setup>
import breadCrumb from './pagesComponents/breadCrumb.vue'
import Header from './pagesComponents/header.vue'
import { defineProps, ref } from 'vue';

const props = defineProps({
  increment: Function,
  decrement: Function,
  income: Object
});


</script>
<template>
        <form class="px-8 md:px-16 lg:px-40 xl:px-48 pb-10">
            <div>รายรับ</div>
            <div class="flex flex-col">
                <label for="monthly">เงินเดือน (บาท)</label>
                <input type="number" name="monthly" class="input" v-model="income.salary">
            </div>
            <div class="flex flex-col">
                <label for="monthly">โบนัส (บาท)</label>
                <input type="number" name="monthly" class="input" v-model="income.bonus">
            </div>
            <div class="flex flex-col">
                <label for="monthly">รายได้อ่ืนๆ เช่น การขายของออนไลน์, รับจ้างฟรีแลนซ์ (บาท)</label>
                <input type="number" name="monthly" class="input" v-model="income.otherIncome">
            </div>  
        </form>
        
</template>