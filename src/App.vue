<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from '@/lib/supabaseClient'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })
  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <Navbar />
  <main class="flex flex-col flex-1 justify-center mx-12 border-x-1 border-white/15">
    <div class="container">
      <Account v-if="session" :session="session" />
      <Auth v-else />
      <RouterView />
    </div>
  </main>
  <Footer />
</template>
