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
        <div>รายการลดหย่อนภาษี : ประกัน</div>
            <div>
                <div class="flex justify-between gap-x-7">
                    <div class="flex flex-col w-1/2">
                        <label for="monthly">เบี้ยประกันชีวิต</label>
                        <input type="text" name="monthly" class="input">
                        <div class="subscript">ไม่เกิน 100,000 บาท</div>
                    </div>
                    <div class="flex flex-col w-1/2">
                        <label for="monthly">เบี้ยประกันสุขภาพ</label>
                        <input type="text" name="monthly" class="input">
                        <div class="subscript">ไม่เกิน 25,000</div>
                    </div>
                </div>
                <div class="text-xs text-gray-700">เบี้ยประกันชีวิต และประกันสุขภาพรวมกันต้องไม่เกิน 100,000 บาท</div>
            </div>    
            <div class="flex justify-between gap-x-7">
                <div class="flex flex-col w-1/2">
                    <label for="monthly">เบี้ยประกันสุขภาพบิดา, มารดา</label>
                    <input type="text" name="monthly" class="input">
                    <div class="subscript">ไม่เกิน 15,000</div>
                </div>
                <div class="flex flex-col w-1/2">
                    <label for="monthly">เบี้ยประกันชีวิตบำนาญ</label>
                    <input type="text" name="monthly" class="input">
                    <div class="subscript">ไม่เกิน 15% ของรายได้ทั้งปี ไม่เกิน 200,000 บาท หากไม่ได้ใช้สิทธิประกันชีวิตทั่วไป สามารถนำมารวมได้สูงสุด 300,000 บาทและรวมกับกองทุนอื่นไม่เกิน 500,000 บาท</div>
                </div>
            </div>
    </div>
</template>