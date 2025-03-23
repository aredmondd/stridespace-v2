<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
})

let showItem = ref(false)
</script>

<template>
  <div class="border-b border-white/15 p-4">
    <h2 class="font-martian-mono text-2xl mb-2 cursor-pointer" @click="showItem = !showItem">
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

<style scoped>
/* Consistent fade and slide-in effect */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
