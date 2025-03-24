<script setup>
const props = defineProps(['content'])
</script>

<template>
  <li class="flex gap-2 items-center flex-grow">
    <div class="p-2 border-1 border-white/20"></div>
    <p>{{ content }}</p>
  </li>
</template>
