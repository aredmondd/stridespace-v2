<script setup>
import { ref } from 'vue';
import Link from './NavLink.vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
</script>

<template>
    <div class="flex justify-between border-b-1 border-white/15 px-12">
        <RouterLink to="/" class="px-3 py-4 border-x-1 border-white/15 text-white font-martian-mono text-5xl hover:text-purple transition-colors duration-250 ease-in-out">STRIDESPACE</RouterLink>
    
        <!-- Mobile Menu Button -->
        <button @click="isOpen = true" class="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    
        <!-- Desktop Menu -->
        <div class="hidden md:flex border-r-1 border-white/15">
            <Link :link="'about'" :route="'/about'" />
            <Link :link="'login'" :route="'/login'" />
            <Link :link="'signup'" :route="'/signup'" />
        </div>
    
        <!-- Full Screen Mobile Menu Modal -->
        <div v-if="isOpen" class="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50">
            <button @click="isOpen = false" class="absolute top-5 right-5 text-white text-3xl">&times;</button>
            <div class="flex flex-col items-center gap-6">
                <Link :link="'about'" :route="'/about'" @click="isOpen = false" class="text-2xl" />
                <Link :link="'login'" :route="'/login'" @click="isOpen = false" class="text-2xl" />
            </div>
        </div>
    </div>
</template>