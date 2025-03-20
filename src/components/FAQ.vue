<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
});

let showItem = ref(false);
</script>

<template>
    <div class="border-b-1 border-white/15 p-4">
        <h2 class="font-martian-mono text-2xl mb-2" @click="showItem = !showItem">{{ title }}</h2>
        <div v-if="showItem" class="flex flex-col text-white/50">
            <slot></slot>
        </div>
    </div>
</template>