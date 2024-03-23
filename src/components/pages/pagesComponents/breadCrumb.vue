<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pagesNum: Number,
  setPageNums : Function
});

const pagesNum= props

</script>
<template>
    <div class="pb-8">
        <div class="flex flex-row justify-between relative">
            <div class="w-full absolute flex top-0 h-4 px-12 md:px-16 lg:px-48 xl:px-52">
                <div :class="{'border-indigo-200':pagesNum.pagesNum===0, 'border-yellow-500':pagesNum.pagesNum!==0}" 
                class="border-0 border-b-4 border-indigo-200 border-dotted flex-1"></div>
                <div :class="{'border-indigo-200':pagesNum.pagesNum===0, 'border-yellow-500':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1}" 
                class="border-0 border-b-4 border-dotted flex-1"></div>
                <div :class="{'border-indigo-200':pagesNum.pagesNum===0, 'border-yellow-500':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2}" 
                class="border-0 border-b-4 border-indigo-200 border-dotted flex-1"></div>
                <div :class="{'border-indigo-200':pagesNum.pagesNum===0, 'border-yellow-500':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2&&pagesNum.pagesNum!==3}" 
                class="border-0 border-b-4 border-indigo-200 border-dotted flex-1"></div>
                <div :class="{'border-indigo-200':pagesNum.pagesNum===0, 'border-yellow-500':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2&&pagesNum.pagesNum!==3&&pagesNum.pagesNum!==4}" 
                class="border-0 border-b-4 border-indigo-200 border-dotted flex-1"></div>
            </div>
            <div class="flex flex-row justify-between relative w-full px-18 lg:px-32">
                <div class="flex flex-1 flex-col items-center z-10">
                    <div class="flex flex-col items-center cursor-pointer">
                        <div @click="setPageNums(0)" class="w-8 h-8 flex justify-center items-center rounded-full passed">1</div>
                        <div class="text-white font-semibold">รายรับ</div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col z-10">
                    <div class="flex flex-col items-center cursor-pointer">
                        <div @click="setPageNums(1)" :class="{'passed':pagesNum.pagesNum!==0}"  class="noPassed w-8 h-8 flex justify-center items-center rounded-full">2</div>
                        <div :class="{'text-indigo-100':pagesNum.pagesNum===0, 'text-white font-semibold':pagesNum.pagesNum!==0}" class="text-indigo-100">ลดหย่อนครอบครัว</div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col z-10">
                    <div class="flex flex-col items-center cursor-pointer">
                    <div @click="setPageNums(2)" :class="{'passed':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1}" class="noPassed w-8 h-8 flex justify-center items-center rounded-full bg-indigo-200 font-bold">3</div>
                    <div :class="{'text-indigo-100':pagesNum.pagesNum===0, 'text-white font-semibold':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1}" class="text-center text-indigo-100">
                        กองทุนสำรองเลี้ยงชีพ<br>เงินประกันสังคม<br>และที่อยู่อาศัย
                    </div>
                </div>
                </div>
                <div class="flex flex-1 flex-col z-10">
                    <div class="flex flex-col items-center cursor-pointer">
                    <div @click="setPageNums(3)" :class="{'passed':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2}" 
                    class="noPassed w-8 h-8 flex justify-center items-center rounded-full bg-indigo-200 font-bold">4</div>
                    <div :class="{'text-indigo-100':pagesNum.pagesNum===0, 'text-white font-semibold':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2}"  class="text-indigo-100">ประกัน</div></div>
                </div>
                <div class="flex flex-1 flex-col z-10 relative">
                    <div class="flex flex-col items-center cursor-pointer">
                        <div @click="setPageNums(4)" :class="{'passed':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2&&pagesNum.pagesNum!==3}" 
                        class="noPassed w-8 h-8 flex justify-center items-center rounded-full bg-indigo-200 font-bold">5</div>
                        <div :class="{'text-indigo-100':pagesNum.pagesNum===0, 'text-white font-semibold':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2&&pagesNum.pagesNum!==3}" class="text-indigo-100">กองทุน อื่น ๆ</div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col z-10">
                    <div class="flex flex-col items-center cursor-pointer">
                    <div @click="setPageNums(5)" :class="{'passed':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2&&pagesNum.pagesNum!==3&&pagesNum.pagesNum!==4}" 
                    class="noPassed w-8 h-8 flex justify-center items-center rounded-full bg-indigo-200 font-bold">6</div>
                    <div :class="{'text-indigo-100':pagesNum.pagesNum===0, 'text-white font-semibold':pagesNum.pagesNum!==0&&pagesNum.pagesNum!==1&&pagesNum.pagesNum!==2&&pagesNum.pagesNum!==3&&pagesNum.pagesNum!==4}" class="text-indigo-100">คำนวณภาษี</div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>