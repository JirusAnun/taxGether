<template>
    <div>
        <div>
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

</script>

<style lang="scss" scoped>

</style>