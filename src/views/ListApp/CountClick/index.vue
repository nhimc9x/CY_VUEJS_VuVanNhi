<script setup>
import { ref } from 'vue'

const count = ref(0)

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10 relative">
      <div class="max-w-[600px] mx-auto">
        <img
          class="size-full"
          src="https://static.vecteezy.com/system/resources/previews/009/343/861/non_2x/banana-is-a-yellow-fruit-free-png.png"
          alt="">
      <div class="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-4xl text-white bg-black/70 w-20 grid place-content-center py-2">{{count}}</div>
      </div>
    <div class="flex justify-center mt-6">
      <button
        @click="count++"
        class="text-xl uppercase font-semibold tracking-widest bg-blue-500 px-4 py-2 rounded"
      >CLick</button>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
