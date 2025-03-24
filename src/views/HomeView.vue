<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ContentScroller from '@/components/ContentScroller.vue'
import MarginBlock from '@/components/MarginBlock.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import { RouterLink } from 'vue-router'

const examples = ref([
  { distance: '26.2mi', time: '4h 15m', feeling: 'very bad' },
  { distance: '2.5mi', time: '20m', feeling: 'good' },
  { distance: '8.9mi', time: '1h 10m', feeling: 'neutral' },
])

const images = ref([
  'src/assets/art/lightblue.png',
  'src/assets/art/greenred.png',
  'src/assets/art/sick_2.png',
])

const currentIndex = ref(0)
const currentExample = ref(examples.value[currentIndex.value])
const currentImage = ref(images.value[currentIndex.value])
let interval = null

const cycleExamples = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % examples.value.length
    currentExample.value = examples.value[currentIndex.value]
    currentImage.value = images.value[currentIndex.value]
  }, 4000)
}

onMounted(() => {
  cycleExamples()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <MarginBlock />
  <div class="border-t-1 border-white/15"></div>
  <div class="flex justify-center items-center mt-24 mb-36">
    <div class="flex flex-col">
      <Transition appear>
        <div class="flex gap-12">
          <img src="../assets/art/16.056.png" alt="" class="w-110" />
          <div>
            <h1 class="text-white font-martian-mono text-8xl leading-28 mb-12">
              TRANSFORM <br />YOUR <span class="text-purple">RUNS</span> <br />INTO
              <span class="text-purple">ART</span> <br />
            </h1>
            <p class="text-white/50">
              want to see how yours look? get started
              <RouterLink
                to="/generate"
                class="underline underline-offset-4 hover:text-purple duration-250 transition-all ease-in-out"
                >now</RouterLink
              >
            </p>
            <p class="text-white/50">
              (run pictured to the left is a 12 mile run at 7:15/mi pace by aiden redmond)
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>

  <!-- ad #1 -->
  <div class="mt-18 mb-48">
    <h1 class="text-7xl font-martian-mono text-center mb-8">HOW DOES IT WORK?</h1>
    <p class="text-center mb-24 text-white/33">
      enter your run's statistics, how you felt, and watch!
    </p>

    <div class="flex items-center justify-center gap-20">
      <!-- Example -->
      <transition name="fade" mode="out-in">
        <div
          v-if="currentExample"
          :key="currentIndex"
          class="flex flex-col justify-center gap-2 font-martian-mono text-4xl w-62"
        >
          <h2 class="text-purple">{{ currentExample.distance }}</h2>
          <h2 class="text-purple">{{ currentExample.time }}</h2>
          <h2 class="text-purple">{{ currentExample.feeling }}</h2>
        </div>
      </transition>

      <div class="arrow"></div>

      <transition name="fade" mode="out-in">
        <img v-if="currentImage" :src="currentImage" :key="currentIndex" alt="" class="w-75" />
      </transition>
    </div>
  </div>

  <!-- ad #2 -->
  <div class="flex flex-col justify-center items-center mt-18 mb-36">
    <h1 class="text-7xl font-martian-mono mb-8">
      FULLY <span class="text-purple">OPEN SOURCE</span>
    </h1>
    <p class="text-white/33 mb-1">designed with python & render. published on github.</p>
    <p class="text-white/33 mb-18 text-center">
      <a
        href="https://github.com/aredmondd/stridespace-v2"
        target="_blank"
        class="underline underline-offset-4 hover:text-purple duration-250 transition-all ease-in-out"
        >stridespace-v2</a
      >
      &&
      <a
        href="https://github.com/aredmondd/stridespace-art-generation"
        target="_blank"
        class="underline underline-offset-4 hover:text-purple duration-250 transition-all ease-in-out"
        >stridespace-art-generation</a
      >
    </p>
    <div class="flex flex-col">
      <CodeSnippet />
    </div>
  </div>

  <ContentScroller />

  <div class="border-t-1 border-white/15"></div>

  <MarginBlock />
</template>
