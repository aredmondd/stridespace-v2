<script setup>
import { ref } from 'vue'

const distance = ref(13)
const time = ref(60)
const imageUrl = ref(null)
const selectedEmotion = ref('neutral')

const submitRun = async () => {
  console.log(selectedEmotion.value)
  try {
    const response = await fetch(
      `http://localhost:8000/generate-art/?distance=${distance.value}&duration=${time.value}&emotion=${selectedEmotion.value || 'neutral'}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`)
    }

    const blob = await response.blob()
    imageUrl.value = URL.createObjectURL(blob)
  } catch (error) {
    console.error('Error generating image:', error)
  }
}

const emotions = [
  { name: 'very_bad', color: 'text-red-400', icon: 'sentiment_very_dissatisfied' },
  { name: 'bad', color: 'text-blue-400', icon: 'sentiment_dissatisfied' },
  { name: 'neutral', color: 'text-white', icon: 'sentiment_neutral' },
  { name: 'good', color: 'text-yellow-400', icon: 'sentiment_satisfied' },
  { name: 'very_good', color: 'text-green-400', icon: 'sentiment_very_satisfied' },
]
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex">
      <div class="border-2 text-2xl text-white/50 flex items-center justify-center">
        <img v-if="imageUrl" :src="imageUrl" alt="Generated Run Image" class="w-100" />
        <span v-else class="p-48">?</span>
      </div>
      <div class="flex flex-col ml-20">
        <h1 class="text-4xl font-martian-mono text-purple">HOW WAS YOUR RUN?</h1>

        <div class="my-8">
          <div class="flex justify-between">
            <h2>how long was your run?</h2>
            <h2>{{ distance == 26 ? 26.2 : distance }}mi</h2>
          </div>
          <div class="mt-2 relative">
            <input
              v-model="distance"
              type="range"
              min="0"
              max="26"
              class="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple"
            />
            <span class="text-sm text-white/50 absolute start-0 -bottom-6">>1</span>
            <span class="text-sm text-white/50 absolute start-1/2 -translate-x-1/2 -bottom-6"
              >13</span
            >
            <span class="text-sm text-white/50 absolute end-0 -bottom-6">26+</span>
          </div>
        </div>

        <div class="my-8">
          <div class="flex justify-between">
            <h2>how long was your run?</h2>
            <h2>{{ time }}min</h2>
          </div>
          <div class="mt-2 relative">
            <input
              v-model="time"
              type="range"
              min="0"
              max="270"
              class="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple"
            />
            <span class="text-sm text-white/50 absolute start-0 -bottom-6">>10min</span>
            <span class="text-sm text-white/50 absolute start-1/2 -translate-x-1/2 -bottom-6"
              >2hr</span
            >
            <span class="text-sm text-white/50 absolute end-0 -bottom-6">4.5hr</span>
          </div>
        </div>

        <div class="my-8">
          <div class="flex justify-between items-end">
            <div>
              <h2>how did it feel?</h2>
              <div class="mt-2 flex gap-2">
                <span
                  v-for="emotion in emotions"
                  :key="emotion.name"
                  :class="[
                    selectedEmotion === emotion.name ? emotion.color : 'text-white/50',
                    'material-symbols-outlined cursor-pointer transition-all duration-250 ease-in-out',
                  ]"
                  :style="{ fontSize: '45px' }"
                  @click="selectedEmotion = emotion.name"
                >
                  {{ emotion.icon }}
                </span>
              </div>
            </div>
            <div>
              <button @click="submitRun" class="bg-purple text-black px-3 py-2">generate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
