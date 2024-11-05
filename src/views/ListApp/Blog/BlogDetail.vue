<script setup>
import { blogData } from '@/views/ListApp/Blog/extractData.js'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const id = useRoute().query.id
const currentDetail = ref({})

watch(() => id, () => {
  currentDetail.value = blogData.find(item => item.id === parseInt(id))
}, { immediate: true })

</script>

<template>
  <div class="bg-primary min-h-screen pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">Blog detail</div>
      <div class="w-[90%] mx-auto max-w-[680px]" >
        <img :src="currentDetail.image" class="w-full h-full object-cover" alt="">
        <div class="text-center mt-10">
          <div class="text-2xl font-bold text-accent mb-2">{{ currentDetail.title }}</div>
          <div class="text-gray-400 text-sm">{{ currentDetail.date }}</div>
        </div>
        <div class="mt-10 text-white">{{ currentDetail.description }}</div>
        <div class="mt-10 text-gray-300">{{ currentDetail.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
