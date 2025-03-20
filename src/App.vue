<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="flex flex-col flex-1 justify-center mx-12 border-x-1 border-white/15">
    <RouterView />
  </main>
  <Footer />
</template>
