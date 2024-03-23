<script setup>
import breadCrumb from './pagesComponents/breadCrumb.vue'
import Header from './pagesComponents/header.vue'
import { defineProps } from 'vue';

const props = defineProps({
  increment: Function,
  decrement: Function,
});

const {increment,decrement} = props;

</script>
<template>
            <div class="px-8 md:px-16 lg:px-40 xl:px-48 pb-10">
                <div>คำนวณภาษี</div>
                <div class="flex flex-col">
                    <label for="monthly">เงินเดือน (บาท)</label>
                    <input type="text" name="monthly">
                </div>
                <div class="flex flex-col">
                    <label for="monthly">โบนัส (บาท)</label>
                    <input type="text" name="monthly">
                </div>
                <div class="flex flex-col">
                    <label for="monthly">รายได้อ่ืนๆ เช่น การขายของออนไลน์, รับจ้างฟรีแลนซ์ (บาท)</label>
                    <input type="text" name="monthly">
                </div>  
            </div>
</template>