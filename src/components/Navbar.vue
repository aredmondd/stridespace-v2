<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Link from './NavLink.vue'
import { userSession, logout } from '@/lib/authStore'

const isOpen = ref(false)
const router = useRouter()

// ✅ Logout with redirection
const handleLogout = async () => {
  await logout()
  router.push('/') // Redirect to index after logout
}
</script>

<template>
  <div class="flex justify-between border-b-1 border-white/20 px-6 sm:px-12">
    <RouterLink
      to="/"
      class="hidden sm:block px-3 py-4 border-x-1 border-white/20 text-white font-martian-mono text-5xl hover:text-purple transition-colors duration-250 ease-in-out"
      >STRIDESPACE</RouterLink
    >
    <RouterLink
      to="/"
      class="block sm:hidden px-3 py-4 border-x-1 border-white/20 text-white font-martian-mono text-5xl hover:text-purple transition-colors duration-250 ease-in-out"
      >SS</RouterLink
    >

    <!-- Mobile Menu Button -->
    <button
      @click="isOpen = true"
      class="md:hidden text-white focus:outline-none border-x-1 border-white/20 px-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Desktop Menu -->
    <div class="hidden md:flex border-r-1 border-white/20">
      <Link link="about" route="/about" />
      <Link link="changelog" route="/changelog" />

      <!-- ✅ Conditionally render 'generate' or 'login' -->
      <Link
        :link="userSession ? 'generate' : 'login'"
        :route="userSession ? '/generate' : '/login'"
      />

      <!-- ✅ Logout with redirect -->
      <button
        v-if="userSession"
        @click="handleLogout"
        class="flex items-center px-4 border-l-1 border-white/20 hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer"
      >
        logout
      </button>
    </div>

    <!-- Full Screen Mobile Menu Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50"
    >
      <button @click="isOpen = false" class="absolute top-5 right-5 text-white text-3xl">
        &times;
      </button>
      <div class="flex flex-col items-center gap-6">
        <RouterLink
          to="/login"
          @click="isOpen = false"
          class="text-2xl hover:text-purple duration-250 transition ease-in-out"
          >login</RouterLink
        >
        <RouterLink
          to="/about"
          @click="isOpen = false"
          class="text-2xl hover:text-purple duration-250 transition ease-in-out"
          >about</RouterLink
        >
        <RouterLink
          to="/changelog"
          @click="isOpen = false"
          class="text-2xl hover:text-purple duration-250 transition ease-in-out"
          >changelog</RouterLink
        >
        <a
          href="https://github.com/aredmondd/stridespace"
          @click="isOpen = false"
          class="text-2xl hover:text-purple duration-250 transition ease-in-out"
          >source code</a
        >
        <RouterLink
          to="/generate"
          @click="isOpen = false"
          class="text-2xl hover:text-purple duration-250 transition ease-in-out"
          >generate</RouterLink
        >

        <button
          v-if="userSession"
          @click="handleLogout"
          class="text-2xl hover:text-purple duration-250 transition ease-in-out"
        >
          logout
        </button>
      </div>
    </div>
  </div>
</template>
