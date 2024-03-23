<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import Single from './familyComponents/single.vue';
import Married from './familyComponents/married.vue';
import Divorce from './familyComponents/divorce.vue';

const props = defineProps({
  increment: Function,
  decrement: Function,
});

const selectedPage = ref(0)

const {increment,decrement} = props;

function handleStatusChange(event) {
  const selectedValue = event.target.value;
  let selected = parseInt(selectedValue)
  console.log("Selected status: ",typeof selected);
  selectedPage.value = selected
  console.log(selectedPage.value)
  // You can perform any action with the selected value here
}

</script>
<template>
    <form class="px-8 md:px-16 lg:px-40 xl:px-48 pb-10 space-y-4">
        <div>รายการลดหย่อนภาษี : ครอบครัว</div>
        <div class="flex justify-between">
            <div class="flex flex-col w-1/2">
                <label for="status">สถานะสมรส</label>
                <select id="status" name="status" @change="handleStatusChange">
                    <option disabled selected value="">กรุณาเลือกสถานะ</option>
                    <option value="1">โสด</option>
                    <option value="2">หย่า</option>
                    <option value="3">คู่สมรสมีเงินได้(แยกยื่น)</option>
                    <option value="4">คู่สมรสไม่มีเงินได้</option>
                </select>
            </div>
            <div class="flex flex-col w-1/2">
                <label for="monthly">ลดหย่อนภาษี</label>
                <input type="text" name="monthly" class="input">
            </div>
        </div>
        <div>
            <Single v-if="selectedPage===1"/>
            <Divorce v-if="selectedPage===2"/>
            <Married v-if="selectedPage===3||selectedPage===4"/>
        </div>
    </form>
       
</template>