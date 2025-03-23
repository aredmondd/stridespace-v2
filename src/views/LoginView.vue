<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter() // Import Vue Router

const handleLogin = async () => {
  try {
    loading.value = true

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    // ✅ Redirect to /generate on successful login
    router.push('/generate')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1 class="font-martian-mono text-6xl sm:text-9xl mb-12 text-purple text-center">LOGIN</h1>
  <div class="flex flex-col items-center justify-center">
    <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
      <input
        type="email"
        v-model="email"
        name="email"
        class="border-1 border-white px-2 py-2 bg-black"
        placeholder="email"
        required
      />
      <input
        type="password"
        v-model="password"
        name="password"
        class="border-1 border-white px-2 py-2 bg-black"
        placeholder="password"
        required
      />
      <button
        type="submit"
        :disabled="loading"
        class="border-1 border-white py-1 mt-6 hover:bg-purple hover:border-purple transition-colors duration-250 ease-in-out"
      >
        {{ loading ? 'loading...' : 'login' }}
      </button>
    </form>
    <p class="mt-12 text-white/50">
      don't have an account? sign up
      <RouterLink to="/signup" class="underline underline-offset-2">here</RouterLink>
    </p>
  </div>
</template>
