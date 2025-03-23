<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import MarginBlock from '../components/MarginBlock.vue'

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
    commits.value = res.data.slice(0, 10).map((commit) => ({
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
      <h1 class="text-purple font-martian-mono text-8xl text-center">CHANGELOG + ROADMAP</h1>
    </div>

    <div class="border-t-1 border-white/15"></div>
    <MarginBlock />
    <div class="border-t-1 border-white/15"></div>

    <div class="flex">
      <div v-if="commits.length">
        <h1
          class="text-white/75 font-martian-mono text-5xl border-b-1 border-white/15 p-4 border-r-1 text-center"
        >
          RECENT COMMITS
        </h1>
        <div v-for="(commit, index) in commits" :key="index" class="border-b-1 border-white/15">
          <div class="flex justify-between">
            <div
              class="flex flex-col gap-1 border-r-1 border-white/15 px-4 items-center justify-center"
            >
              <p class="text-white/50 text-3xl font-martian-mono">
                {{ commits[index].formattedDate.split(' @')[0] }}
              </p>
              <p class="text-white/50 text-xs font-martian-mono">
                {{ commits[index].formattedDate.split(' @')[1] }}
              </p>
            </div>
            <div class="flex flex-col flex-grow justify-center items-start p-4">
              <h2 class="text-lg text-white font-martian-mono">
                {{ commit.commit.message }}
              </h2>
              <a :href="commit.html_url" target="_blank" class="text-purple underline"
                >View Commit</a
              >
            </div>

            <div
              class="flex flex-col gap-1 border-x-1 border-white/15 p-4 items-center justify-center"
            >
              <img :src="commit.author.avatar_url" alt="" class="rounded-full w-15" />
              <p class="text-white/50 text-xs">{{ commit.author.login }}</p>
            </div>
          </div>
        </div>
      </div>

      <p v-else class="text-white/50 p-4">Loading commits...</p>

      <div v-if="commits.length">
        <h1
          class="text-white/75 font-martian-mono text-5xl border-b-1 border-white/15 p-4 border-r-1 text-center"
        >
          TO IMPLEMENT
        </h1>
      </div>
    </div>
  </div>
  <MarginBlock />
</template>
