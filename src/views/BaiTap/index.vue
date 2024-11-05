<script setup>
import { computed, ref, watch } from 'vue'
import BtnCustom from '@/views/BaiTap/components/BtnCustom.vue'
import ModalAdd from '@/views/BaiTap/components/Modal.vue'
import TableCustom from '@/views/BaiTap/components/TableCustom.vue'
import RadioCustom from '@/views/BaiTap/components/RadioCustom.vue'

const mockData = ref(JSON.parse(localStorage.getItem('todoData')) || [])
const headers = ref(['Name', 'Description', 'Level', 'Status', 'Date', 'Tools'])
const showModal = ref(false)
const sort = ref('All')
const currentModal = ref('add')
const modalRef = ref(null)
const currentEditId = ref(null)
const isExport = ref(false)

const handleAddTodo = (title, description, levelValue, date) => {
  mockData.value.push({
    id: Math.random(),
    name: title,
    description: description,
    level: levelValue,
    completed: false,
    date: new Intl.DateTimeFormat('vi-VN').format(new Date(date))
  })
  modalRef.value.handleResetForm()
  showModal.value = false
}

const handleEditTodo = (title, description, levelValue, date) => {
  const findTodo = mockData.value.find(todo => todo.id === currentEditId.value)
  if (!findTodo) return
  findTodo.name = title
  findTodo.description = description
  findTodo.level = levelValue
  findTodo.date = new Intl.DateTimeFormat('vi-VN').format(new Date(date))
  modalRef.value.handleResetForm()
  showModal.value = false
}

const handleSubmitForm = (title, description, levelValue, date) => {
  switch (currentModal.value) {
    case 'add':
      handleAddTodo(title, description, levelValue, date)
      break
    case 'edit':
      handleEditTodo(title, description, levelValue, date)
      break
    default:
      break
  }
}

const handleDeleteTodo = (id) => {
  mockData.value = mockData.value.filter(item => item.id !== id)
}

const handleUpdateStatus = (id, value) => {
  mockData.value.find(item => item.id === id).completed = value
}

watch(() => mockData.value, (newVal) => {
  localStorage.setItem('todoData', JSON.stringify(newVal))
}, { deep: true })

const sortedData = computed(() => {
  switch (sort.value) {
    case 'Completed':
      return mockData.value.filter(item => item.completed)
    case 'Not completed':
      return mockData.value.filter(item => !item.completed)
    default:
      return mockData.value
  }
})

const filterOptions = ref([
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Not completed', label: 'Not completed' }
])

const showModalAdd = () => {
  currentModal.value = 'add'
  showModal.value = true
}

const showModalEdit = (id) => {
  console.log(id)
  currentEditId.value = id
  currentModal.value = 'edit'
  showModal.value = true
  const findTodo = mockData.value.find(todo => todo.id === id)
  if (!findTodo) return
  modalRef.value.editForm(findTodo.name, findTodo.description, findTodo.level, findTodo.date)
}

</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full py-10">

      <div class="pb-2 *:px-10">
        <BtnCustom title="Add" @click="showModalAdd" />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex py-3 items-center text-lg text-white gap-4">
          <div class="text-xl">Sort by:</div>
          <RadioCustom
            v-for="(option, index) in filterOptions"
            :key="index"
            name="sort"
            :value="option.value"
            :title="option.label"
            v-model="sort"
          />
        </div>
        <BtnCustom @click="isExport = true" :title="'Export'" />
      </div>

      <ModalAdd
        ref="modalRef"
        :modalType="currentModal"
        :showModal="showModal"
        @closeModal="showModal = false"
        @handleSubmitForm="handleSubmitForm"
      />

      <TableCustom
        :headers="headers"
        :mockData="sortedData"
        @deleteTodo="handleDeleteTodo"
        @updateStatus="handleUpdateStatus"
        @showModalEdit="showModalEdit"
        :export="isExport"
        @updateExport="isExport = $event"
      />

    </div>
  </div>
</template>

<style scoped>

</style>
