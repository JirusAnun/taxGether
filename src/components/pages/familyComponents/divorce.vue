<template>
    <div>
        <div class="space-y-3">
            <div class="font-semibold">ลดหย่อนบิดามารดา (ตนเอง)</div>
            <div class="flex gap-x-12">
                <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div>
                        <label for="comments" class="font-medium">บิดา</label>
                    </div>
                </div>
                <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                        <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div>
                        <label for="candidates" class="font-medium">มารดา</label>
                    </div>
                </div>
            </div>
            <div class="subscript">คนละ 30,000 บาท (บิดามารดาต้องมีอายุเกิน 60 ปี และมีเงินได้ไม่เกิน 30,000 บาทต่อปี) (ได้ทั้งบิดา มารดาของตนเอง และคู่สมรส)</div>
        </div>
        <div>
            <div>
          <div>บุตรคนที่ 1 (เกิดปีใดก็ตาม)</div>
          <div class="flex gap-x-12">
            <div class="flex items-center gap-x-3">
              <input id="yes" type="radio" name="firstBaby" @click="showRadio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="yes">มี</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="no" type="radio" name="firstBaby" @click="hideRadio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="no">ไม่มี</label>
            </div>
          </div>
        </div>
        <div class="subscript">
            ลดหย่อน 30,000 บาท
        </div>
        </div>
        <div v-if="radio===true">
            <div>บุตรคนที่ 2 เป็นต้นไป</div>
            <div class="flex justify-between">
                <div class="flex flex-col w-1/2">
                    <label for="status">จำนวนบุตรที่เกิดก่อนปี 2561</label>
                    <input type="text" class="input">
                    <div class="subscript">ลดหย่อนคนละ 30,000 บาท</div>
                </div>
                <div class="flex flex-col w-1/2">
                    <label for="monthly">จำนวนบุตรที่เกิดตั้งแต่ปี 2561 เป็นต้นไป</label>
                    <input type="text" name="monthly" class="input">
                    <div class="subscript">ลดหย่อนคนละ 60,000 บาท</div>
                </div>
            </div>
        </div>
        <div>
            <div class="font-semibold">ลดหย่อนผู้พิการหรือทุพพลภาพ (ไม่มีเงินได้)</div>
            <div class="flex gap-x-12">
                <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div>
                        <label for="comments" class="font-medium">บิดา</label>
                    </div>
                </div>
                <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                        <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div>
                        <label for="candidates" class="font-medium">มารดา</label>
                    </div>
                </div>
                <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                        <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div>
                        <label for="offers" class="font-medium">ญาติ (เช่น พี่,น้อง ฯลฯ)</label>
                    </div>
                </div>
                </div>            
                <div class="subscript">
                    กรณีบิดา, มารดา, คู่สมรส, บิดาคู่สมรส , มารดาคู่สมรส และบุตรของตนเอง<br>หากเป็นผู้อื่นได้เพียง 1 คนเท่านั้น ลดหย่อนได้คนละ 60,000 บาท (ต้องมีบัตรประจำตัวคนพิการ และไม่มีรายได้)
                </div>
        </div>
    </div>
</template>

<script setup>
 import {ref} from 'vue';

 const radio = ref(false)
 const showRadio = () => {
    radio.value = true;
    console.log(radio.value)
 }
 const hideRadio = () =>{
    radio.value=false;
    console.log(radio.value)
 }
 
</script>

<style lang="scss" scoped>

</style>