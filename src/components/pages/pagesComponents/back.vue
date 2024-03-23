<template>
    <div>
        <button @click="decrement" class="mr-12 bg-indigo-200 w-44 h-10 rounded-full">ย้อนกลับ</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  decrement: Function,
});
</script>

<style lang="scss" scoped>

</style>