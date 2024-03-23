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
                <div>รายการลดหย่อนภาษี : กองทุนอื่น ๆ</div>
                <div class="inputElement">
                    <div class="flex flex-col">
                        <label for="monthly">กองทุนบำเหน็จบำนาญข้าราชการ (กบข.)</label>
                        <input type="text" name="monthly" class="input">
                        <div class="subscript">ไม่เกิน 15% ของรายได้ทั้งปี และรวมกับกองทุนอื่นไม่เกิน 500,000 บาท</div>
                    </div>
                    <div class="flex flex-col">
                        <label for="monthly">กองทุนออมแห่งชาติ (กอช.)</label>
                        <input type="text" name="monthly" class="input">
                        <div class="subscript">ไม่เกิน 13,200 บาท และรวมกับกองทุนอื่นและเบี้ยประกันชีวิตแบบบำนาญแล้วไม่เกิน 500,000 บาท</div>
                    </div>
                    <div class="flex flex-col">
                        <label for="monthly">กองทุนครูเอกชน</label>
                        <input type="text" name="monthly" class="input">
                        <div class="subscript">ไม่เกิน 15% ของรายได้ทั้งปี และรวมกับกองทุนอื่นและเบี้ยประกันชีวิตแบบบำนาญแล้วไม่เกิน 500,000 บาท</div>
                    </div>
                </div>  
            </div>
</template>