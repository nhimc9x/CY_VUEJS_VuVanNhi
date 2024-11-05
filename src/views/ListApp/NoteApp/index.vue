<script setup>
import NoteCard from '@/views/ListApp/NoteApp/NoteCard.vue'
import { ref, watch } from 'vue'
const editMode = ref(false)

const noteData = ref(JSON.parse(localStorage.getItem('noteData')) || [])
const noteType = ref(['Low', 'Medium', 'High'])
const currentType = ref('Low')
const inputNewContent = ref('')

const handleAddNote = () => {
  if (inputNewContent.value === '') {
    return
  }
  noteData.value.push({
    id: Math.random(),
    type: currentType.value,
    content: inputNewContent.value
  })

  inputNewContent.value = ''
  currentType.value = noteType.value[0]
}

const handleDeleteNote = (id) => {
  noteData.value = noteData.value.filter(item => item.id !== id)
}

const handleEditNote = (id, type, content) => {
  if (!content) {
    return
  }
  const note = noteData.value.find(item => item.id === id)
  note.type = type
  note.content = content
}

watch(() => noteData.value, (newVal) => {
  console.log(1)
  localStorage.setItem('noteData', JSON.stringify(newVal))
}, { deep: true })

</script>

<template>
  <div class="bg-primary min-h-screen pt-10">
    <div class="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">Note App</div>
      <div class="max-w-[920px] mx-auto text-lg">
        <button popovertarget="note-app-modal" class="bg-highlight px-4 py-1 rounded-md font-medium text-accent mb-4">
          Add new note
        </button>
      </div>
      <div class="grid grid-cols-3 mx-auto max-w-[900px] w-[92%] gap-6">
        <NoteCard
          v-for="item in noteData"
          :key="item.id"
          :dataItem="item"
          :editMode="editMode"
          @handleDelete="handleDeleteNote"
          @handleEdit="handleEditNote"
          :noteType="noteType" />
      </div>
    </div>
  </div>

  <teleport to="body">
    <div id="note-app-modal" popover class="bg-white/40 backdrop-blur-2xl rounded-md min-w-[360px] px-4 py-6 relative">
      <div class="text-secondary uppercase text-center text-xl font-semibold mb-4">Add new note</div>
      <form @submit.prevent="handleAddNote">
        <div class="text-accent">Type</div>
        <select v-model="currentType" class="mt-2 bg-gray-300/60 px-4 py-2 w-full rounded-md text-gray-600 font-medium">
          <option v-for="item in noteType" :key="item" :value="item"
                  class="px-4 py-2 rounded-md text-gray-600 font-medium">{{ item }}
          </option>
        </select>
        <div class="mt-4 text-accent">Content</div>
        <textarea v-model.trim="inputNewContent"
                  class="w-full min-h-32 mt-2 px-4 py-2 rounded-md bg-gray-300/60 text-gray-600"></textarea>
        <div class="mt-4 flex justify-end gap-2">
          <button type="button" class="bg-red-500 px-4 py-2 rounded-md text-white font-medium"
                  popovertarget="note-app-modal">Cancel
          </button>
          <button type="submit" class="bg-highlight px-4 py-2 rounded-md text-accent font-medium">Save</button>
        </div>
      </form>
    </div>
  </teleport>

</template>

<style scoped>

</style>
