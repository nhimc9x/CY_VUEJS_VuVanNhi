<script setup>
import SideBar from '@/views/Calendar/SideBar.vue'
import Header from '@/views/Calendar/Header.vue'
import { ref } from 'vue'
import BoardCalendar from '@/views/Calendar/components/BoardCalendar.vue'

const showSidebar = ref(true)
const handleToggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

</script>

<template>
  <div class="w-full bg-gray-100 dark:bg-[#1b1b1b] dark:text-[#e3e3e3] text-[#1f1f1f] h-screen flex flex-col">
    <Header @toggleSidebar="handleToggleSidebar" />
    <div class="flex h-full my-1">
      <SideBar :showSidebar="showSidebar" />
      <BoardCalendar />
    </div>
  </div>
</template>

<style scoped>

</style>
