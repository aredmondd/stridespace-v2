<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- mobile -->
    <div class="sm:hidden flex flex-col">
        <div class="flex justify-between items-center mx-1">
            <RouterLink to="/about" class="flex items-center px-4 hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">about</RouterLink>
            <RouterLink to="/login" class="flex items-center px-4 hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">signup</RouterLink>
            <RouterLink to="/signup" class="flex items-center px-4 hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">login</RouterLink>
            <a href="https://github.com/aredmondd/stridespace" target="_blank" class="font-inter hover:text-purple transition-colors duration-250 ease-in-out">source code</a>
        </div>
        <div class="flex justify-between text-white opacity-25 font-marian-mono text-sm"></div>
        <p class="text-white opacity-25 font-martian-mono text-xs">all aspects of this website were designed and implemented by aiden redmond</p>
    </div>

    <!-- desktop -->
    <div class="hidden sm:flex justify-between border-t-1 border-white/15 px-12">
        <RouterLink to="/" class="pl-3 py-4 border-l-1 border-white/15 text-white font-martian-mono text-4xl sm:text-6xl hover:text-purple transition-colors duration-250 ease-in-out ">SS</RouterLink>
        <div class="flex flex-col justify-center items-end gap-4 pr-3 border-r-1 border-white/15">
            <div class="flex gap-4">
                <RouterLink to="/about" class="flex items-center hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">about</RouterLink>
                <RouterLink to="/login" class="flex items-center hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">signup</RouterLink>
                <RouterLink to="/signup" class="flex items-center hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">login</RouterLink>
                <a href="https://github.com/aredmondd/stridespace" target="_blank" class="font-inter hover:text-purple transition-colors duration-250 ease-in-out">source code</a>
            </div>
            <p class="text-white/25 font-martian-mono text-sm">all aspects of this website were designed and implemented by <a href="https://aidenredmond.com" target="_blank" class="underline underline-offset-2 hover:text-purple hover:opacity-100 transition-all duration-250 ease-in-out">aiden redmond</a></p>
        </div>
    </div>
</template>