<script setup>
import { ref } from 'vue'

const distance = ref(13)
const time = ref(60)
const imageUrl = ref(null)
const selectedEmotion = ref('neutral')

const submitRun = async () => {
  try {
    const formData = new FormData()
    formData.append('distance', distance.value)
    formData.append('duration', time.value)
    formData.append('emotion', selectedEmotion.value || 'neutral')

    const response = await fetch('http://127.0.0.1:8000/generate-art', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`)
    }

    const blob = await response.blob()
    imageUrl.value = URL.createObjectURL(blob)
    console.log('Image generated successfully:', imageUrl.value)
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
    <div class="flex flex-col sm:flex-row p-4 sm:p-0">
      <div v-if="imageUrl" class="flex items-center justify-center w-70 sm:w-100">
        <img :src="imageUrl" alt="Generated Run Image" />
      </div>
      <div v-else class="border-2 text-2xl text-white/50 flex items-center justify-center">
        <span class="p-35 sm:p-48">?</span>
      </div>
      <div class="flex flex-col sm:ml-20 mt-12 sm:mt-0">
        <h1 class="text-2xl sm:text-4xl font-martian-mono text-purple text-center">
          HOW WAS YOUR RUN?
        </h1>

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
          <div class="flex flex-col sm:flex-row justify-between items-center sm:items-end">
            <div>
              <h2>how did it feel?</h2>
              <div class="mt-2 flex gap-4 sm:gap-2">
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
              <button @click="submitRun" class="bg-purple text-black px-3 py-2 mt-6 sm:mt-0">
                generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
