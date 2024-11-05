<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
  dataItem: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="basis-1/3">
    <div
      :style="{backgroundImage: `url(${dataItem.image})`}"
      class="h-[320px] bg-cover bg-no-repeat bg-center relative">
      <RouterLink :to="`/bai7/detail?id=${dataItem.id}`">
        <div class="w-full h-full hover:bg-black hover:bg-opacity-10 transition-all duration-300 ease-in-out relative group">
          <div class="ct-button translate-y-4 py-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-4 left-[4%] w-[92%]  bg-white text-gray-600 px-2">
            Read the full story
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="text-left mt-8">
      <div>
        <div class="text-xl text-gray-600 font-medium hover:text-coffee-400">{{ dataItem.title }}</div>
      </div>
      <div class="text-gray-400 my-3">
        {{ dataItem.description }}
      </div>
      <div class="text-gray-400 text-xs font-medium tracking-widest uppercase">
        {{ dataItem.date }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
