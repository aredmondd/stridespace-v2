<script setup>
import { RouterLink } from 'vue-router';
import Features from '@/components/Features.vue';
import ContentScroller from '@/components/ContentScroller.vue';
import MarginBlock from '@/components/MarginBlock.vue';
</script>

<template>
    <div class="flex justify-center items-center mt-24">
        <div class="flex flex-col">
            <!-- <Hero /> -->
        </div>
    </div>

    <Features />


    <div class="flex flex-col gap-4 items-center justify-center mx-12">
        <div class="p-2 mt-6">
            <h1 class="font-martian-mono text-2xl opacity-75 sm:text-4xl">get started today</h1>
        </div>
        <div class="flex gap-6 sm:gap-12">
            <RouterLink to="/signup" class="font-martian-mono text-xl sm:text-2xl p-2 bg-purple text-black text-left hover:bg-white hover:text-black transition-all duration-500 ease-in-out">signup</RouterLink>
            <RouterLink to="/login" class="font-martian-mono text-xl sm:text-2xl p-2 bg-purple text-black text-left hover:bg-white hover:text-black transition-all duration-500 ease-in-out">login</RouterLink>
        </div>
    </div>

    <ContentScroller/>

    <div class="border-t-1 border-white/15"></div>

    <MarginBlock />
</template>
