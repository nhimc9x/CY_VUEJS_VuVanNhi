<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import CardUser from '@/views/ListApp/UserPagination/CardUser.vue'
import axios from 'axios'

const originalUsers = ref([])
const dataUsers = ref([])
const currentPage = ref(1)
const pageSize = ref(3)
const searchText = ref('')

onMounted(async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users')
  originalUsers.value = result.data
  dataUsers.value = originalUsers.value
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return dataUsers.value.slice(start, end)
})

watch(() => currentPage.value, (newVal) => {
  if (newVal < 1) {
    currentPage.value = Math.ceil(dataUsers.value.length / pageSize.value)
  }
  if (newVal > Math.ceil(dataUsers.value.length / pageSize.value)) {
    currentPage.value = 1
  }
})

const handleSearch = () => {
  dataUsers.value = originalUsers.value.filter(item => item.name.toLowerCase().includes(searchText.value.toLowerCase()))
  currentPage.value = 1
}

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">User Pagination</div>

      <form @submit.prevent="handleSearch" class="flex justify-between gap-2 max-w-[1000px] mx-auto my-8">
        <input type="text" v-model.trim="searchText" placeholder="Search" class="w-full p-2 border border-white rounded outline-none bg-transparent text-white">
        <button class="bg-highlight px-4 py-1 rounded-md font-medium text-accent">Search</button>
      </form>

      <div class="max-w-[920px] mx-auto grid grid-cols-3 gap-6">
        <CardUser v-for="item in paginatedUsers" :key="item.id" :userInfo="item" />
      </div>
      <div class="flex justify-center w-full gap-4 items-center mt-6">
        <button
          @click="currentPage--"
          class="bg-red-500 px-4 py-2 rounded-md text-white font-medium"
        >
          Prev
        </button>
        <div class="text-2xl font-bold text-highlight">{{ currentPage }}</div>
        <button
          @click="currentPage++"
          class="bg-green-500 px-4 py-2 rounded-md text-white font-medium"
        >
          Next
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
