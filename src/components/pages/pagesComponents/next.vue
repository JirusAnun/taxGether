    <template>
        <div>
            <button @click="increment" class="bg-indigo-200 w-44 h-10 rounded-full">ถัดไป</button>
        </div>
    </template>
    
    <script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        increment: Function
    });
    
    </script>
    
    <style lang="scss" scoped>
    
    </style>