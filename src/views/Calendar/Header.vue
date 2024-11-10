<script setup>
import { ListBulletIcon } from '@heroicons/vue/20/solid/index.js'
import ThemeModeBtn from '@/views/Calendar/components/ThemeModeBtn.vue'
import GroupBtn from '@/views/Calendar/components/GroupBtn.vue'
import { ref, watch } from 'vue'

const groupTaps = ref(['Ngày', 'Tháng', 'Năm'])
const currentTap = ref(groupTaps.value[0])
watch(currentTap, () => {
  console.log(currentTap.value)
})

</script>

<template>
  <header class="h-[4.75rem] flex items-center justify-between px-4">

    <div class="flex items-center gap-2">
      <div
        @click="$emit('toggleSidebar')"
        class="size-11 hover:bg-gray-200 dark:hover:bg-[#2b2b2c] rounded-full p-2 cursor-pointer mr-4"
      >
        <ListBulletIcon class="size-full" />
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
        alt="logo"
        class="w-8"
      />
      <div class="text-xl font-medium tracking-wide">Calendar</div>
    </div>

    <div class="text-lg mx-auto tracking-wide">10 tháng 11, 2024</div>

    <div class="flex items-center gap-5">
      <GroupBtn :groupTaps="groupTaps" v-model="currentTap" />
      <ThemeModeBtn class="mr-4" />
    </div>

  </header>

</template>

<style scoped>

</style>
