<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
  link: String,
  route: String
});
</script>

<template>
  <RouterLink :to="route" class="flex items-center px-4 border-l-1 border-white/15 hover:text-purple transition-colors duration-250 ease-in-out hover:cursor-pointer">
    {{ link }}
  </RouterLink>
</template>
