<script setup>
import { computed, defineProps, onMounted, ref } from 'vue'

const props = defineProps({
  dataItem: {
    type: Object,
    required: true
  },
  noteType: {
    type: Array,
    required: true
  },
})
const emit = defineEmits(['handleDelete', 'handleEdit'])
const editingNoteType = ref('Low')
const editingNoteContent = ref('')
const editMode = ref(false)

const formatColor = computed(() => {
  switch (props.dataItem.type) {
    case 'High':
      return 'bg-red-500'
    case 'Medium':
      return 'bg-orange-500'
    case 'Low':
      return 'bg-green-500'
    default:
      return 'bg-gray-300'
  }
})

onMounted(() => {
  editingNoteType.value = props.dataItem.type
  editingNoteContent.value = props.dataItem.content
})

const handleSave = () => {
  if (editingNoteContent.value === '') {
    return
  }
  emit('handleEdit', props.dataItem.id, editingNoteType.value, editingNoteContent.value)
  editMode.value = false
}

</script>

<template>
  <div class="bg-gray-300/10 rounded-md">
    <div class="px-3 py-6">
      <div class="flex items-center justify-between">
        <select v-if="editMode" v-model="editingNoteType"
                class="text-white bg-blue-400 w-max py-1 text-lg px-4 rounded-md">
          <option v-for="item in noteType" :key="item.id" :value="item">{{ item }}</option>
        </select>
        <div v-else :class="formatColor" class="text-white w-max py-1 text-lg px-4 rounded-md">{{ dataItem.type }}</div>

        <div v-if="editMode" class="flex items-center gap-2">
          <div @click="handleSave" class="text-green-500 *:scale-125 p-1 cursor-pointer">
            <v-icon name="fa-save"></v-icon>
          </div>
          <div
            @click="editMode = false"
            class="text-red-500 *:scale-125 p-1 cursor-pointer">
            <v-icon name="md-cancel-round"></v-icon>
          </div>
        </div>
        <div v-else class="flex items-center gap-2">
          <div
            @click="editMode = true"
            class="text-yellow-400 *:scale-125 p-1 cursor-pointer">
            <v-icon name="ri-edit-box-fill"></v-icon>
          </div>
          <div
            @click="emit('handleDelete', dataItem.id)"
            class="text-red-500 *:scale-125 p-1 cursor-pointer">
            <v-icon name="md-delete"></v-icon>
          </div>
        </div>

      </div>

      <textarea
        v-if="editMode"
        v-model.trim="editingNoteContent"
        class="mt-4 p-2 border border-highlight rounded outline-none text-gray-400 min-h-[138px] max-h-[138px] w-full bg-transparent">
      </textarea>
      <div v-else class="mt-4 text-gray-400 min-h-[144px]">
        {{ dataItem.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
