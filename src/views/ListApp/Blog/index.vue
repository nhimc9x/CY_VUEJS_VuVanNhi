<script setup>
import BlogItemCard from '@/views/ListApp/Blog/BlogItemCard.vue'
import { blogData } from '@/views/ListApp/Blog/extractData.js'

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">Blog</div>
      <div class="flex gap-8 px-10">
        <BlogItemCard v-for="item in blogData" :key="item.id" :dataItem="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
