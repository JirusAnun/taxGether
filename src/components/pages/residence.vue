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
    <div class="px-8 md:px-16 lg:px-40 xl:px-48 pb-10 space-y-4">
        <div class="text-xl font-semibold">รายการลดหย่อนภาษี : กองทุน เงินประกันสังคม และที่อยู่อาศัย</div>
        <div class="inputElement"> 
            <div class="flex flex-col space-y-2">
                <label for="monthly">ค่าลดหย่อนกองทุนสำรองเลี้ยงชีพ (PVD)</label>
                <input type="text" name="monthly" class="input">
                <div class="subscript">ไม่เกิน 15% ของเงินเดือน (ไม่รวมเงินสมทบจากนายจ้าง) และไม่เกิน 500,000 บาท</div>
            </div>
            <div class="flex flex-col space-y-2">
                <label for="monthly">เงินประกันสังคม</label>
                <input type="text" name="monthly" class="input">
                <div class="subscript">ไม่เกิน 9,000 บาท</div>
            </div>
            <div class="flex flex-col space-y-2">
                <label for="monthly">ดอกเบี้ยซื้อที่อยู่อาศัย</label>
                <input type="text" name="monthly" class="input">
                <div class="subscript">ไม่เกิน 100,000 บาท</div>
            </div>  
        </div>
    </div>
</template>