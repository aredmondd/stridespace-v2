<script setup>
import { ref } from 'vue'
import ContentScroller from '@/components/ContentScroller.vue'
import MarginBlock from '@/components/MarginBlock.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'

let currentImage = ref('../assets/art/16.056.png')
</script>

<template>
  <MarginBlock />
  <div class="border-t-1 border-white/15"></div>
  <div class="flex justify-center items-center mt-24 mb-24">
    <div class="flex flex-col">
      <Transition appear>
        <div class="flex gap-12">
          <img src="../assets/art/16.056.png" alt="" class="w-125" />
          <div>
            <h1 class="text-white font-martian-mono text-8xl leading-28 mb-12">
              TRANSFORM <br />YOUR <span class="text-purple">RUNS</span> <br />INTO
              <span class="text-purple">ART</span> <br />
            </h1>
            <div class="flex gap-4">
              <img
                src="../assets/art/15.497166666666667.png"
                alt=""
                class="w-40 opacity-50 hover:opacity-100 duration-250 ease-in-out transition-all"
              />
              <img
                src="../assets/art/greenred.png"
                alt=""
                class="w-40 opacity-50 hover:opacity-100 duration-250 ease-in-out transition-all"
              />
              <img
                src="../assets/art/lightblue.png"
                alt=""
                class="w-40 opacity-50 hover:opacity-100 duration-250 ease-in-out transition-all"
              />
              <img
                src="../assets/art/sick_2.png"
                alt=""
                class="w-40 opacity-50 hover:opacity-100 duration-250 ease-in-out transition-all"
              />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>

  <!-- ad #1 -->
  <div class="flex flex-col justify-center items-center mt-18 mb-48">
    <h1 class="text-7xl font-martian-mono mb-24 text-center leading-20">HOW DOES IT WORK?</h1>
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 mb-24"></div>
    </div>
  </div>

  <!-- ad #2 -->
  <div class="flex flex-col justify-center items-center mt-18 mb-36">
    <h1 class="text-7xl font-martian-mono mb-8">
      FULLY <span class="text-purple">OPEN SOURCE</span>
    </h1>
    <p class="text-white/33 mb-1">designed with python & render. published on github.</p>
    <p class="text-white/33 mb-24 text-center">
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
