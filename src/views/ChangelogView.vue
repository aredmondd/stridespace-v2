<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MarginBlock from '../components/MarginBlock.vue'
import ToDoItem from '@/components/ToDoItem.vue'

const commits = ref([])

const formatDate = (isoString) => {
  const date = new Date(isoString)

  return date
    .toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .replace(',', ' @')
}

const fetchCommits = async () => {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/aredmondd/stridespace-v2/commits?sha=gh-pages-deployment`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      },
    )

    // Format the commit dates
    commits.value = res.data.slice(0, 5).map((commit) => ({
      ...commit,
      formattedDate: formatDate(commit.commit.author.date),
    }))
  } catch (error) {
    console.error('Error fetching commits:', error)
  }
}

onMounted(fetchCommits)
</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="p-4">
      <h1 class="text-purple font-martian-mono text-5xl sm:text-8xl text-center">
        CHANGELOG + ROADMAP
      </h1>
    </div>

    <div class="border-t-1 border-white/20"></div>
    <MarginBlock />
    <div class="border-t-1 border-white/20"></div>

    <div class="flex flex-col sm:flex-row">
      <div v-if="commits.length" class="border-r-1 border-white/20 sm:min-w-[800px]">
        <h1
          class="text-white/75 font-martian-mono text-3xl sm:text-5xl border-b-1 border-white/20 p-4 text-center"
        >
          RECENT CHANGES
        </h1>
        <div v-for="(commit, index) in commits" :key="index" class="border-b-1 border-white/20">
          <div
            class="flex justify-between transition-all duration-300"
            :class="index === 0 ? 'bg-purple/20' : 'bg-transparent'"
          >
            <!-- Date -->
            <div
              class="flex flex-col gap-1 border-r-1 border-white/20 px-2 sm:px-4 items-center justify-center"
            >
              <p class="text-white/50 text-2xl sm:text-3xl font-martian-mono">
                {{ commits[index].formattedDate.split(' @')[0] }}
              </p>
              <p class="text-white/50 text-xs font-martian-mono">
                {{ commits[index].formattedDate.split(' @')[1] }}
              </p>
            </div>

            <!-- Commit Message -->
            <div class="flex flex-col flex-grow justify-center items-start p-2 sm:p-4">
              <h2 class="text-md sm:text-lg font-martian-mono">
                {{ commit.commit.message }}
              </h2>
              <a
                :href="commit.html_url"
                target="_blank"
                class="text-sm sm:text-md mt-1 underline"
                :class="index === 0 ? 'text-purple/90' : 'text-purple/75'"
              >
                view commit
              </a>
            </div>

            <!-- Author -->
            <div
              class="flex flex-col gap-1 border-l-1 border-white/20 p-4 items-center justify-center"
            >
              <img :src="commit.author.avatar_url" alt="" class="rounded-full w-15" />
              <p class="text-white/50 text-xs">{{ commit.author.login }}</p>
            </div>
          </div>
        </div>
      </div>

      <p v-else class="text-white/50 p-4">Loading commits...</p>

      <div v-if="commits.length" class="flex-grow border-b-1 border-white/20">
        <h1
          class="text-white/75 font-martian-mono text-5xl border-b-1 border-white/20 p-4 text-center"
        >
          TO DO
        </h1>
        <div class="flex items-center justify-center flex-grow">
          <ul class="p-4 flex flex-col gap-2">
            <ToDoItem content="setup mega art wall" />
            <ToDoItem content="add art posting" />
            <ToDoItem content="add friends" />
            <ToDoItem content="lifetime statistics" />
            <ToDoItem content="upload runs from strava" />
            <ToDoItem content="mi to km support" />
          </ul>
        </div>
      </div>
    </div>
  </div>
  <MarginBlock />
</template>
