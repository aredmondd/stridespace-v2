<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
})

let showItem = ref(false)
</script>

<template>
  <div class="border-b border-white/20 p-4">
    <h2
      class="font-martian-mono text-lg sm:text-2xl mb-2 cursor-pointer text-white/75"
      @click="showItem = !showItem"
    >
      {{ title }}
    </h2>

    <Transition name="fade-slide" appear>
      <div
        v-if="showItem"
        class="flex flex-col text-white/50 transition-all duration-300 ease-in-out"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>
