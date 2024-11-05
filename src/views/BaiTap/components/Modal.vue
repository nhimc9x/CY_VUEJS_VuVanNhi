<script setup>
import { onMounted, ref } from 'vue'
import BtnCustom from '@/views/BaiTap/components/BtnCustom.vue'
import InputCustom from '@/views/BaiTap/components/InputCustom.vue'
import SelectCustom from '@/views/BaiTap/components/SelectCustom.vue'
import TextAreaCustom from '@/views/BaiTap/components/TextAreaCustom.vue'
import CalendarCustom from '@/views/BaiTap/components/CalendarCustom.vue'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  modalType: {
    type: String,
    default: 'add'
  }
})

const optionsLevel = ref(['Low','Medium','High'])

const emit = defineEmits(['closeModal', 'handleSubmitForm'])

const date = ref(new Date())
const title = ref('')
const description = ref('')
const levelValue = ref(optionsLevel.value[0])

const editForm = (editTitle, editDescription, editLevelValue, editDate) => {
  const [day, month, year] = editDate.split('/')
  console.log(new Date(`${year}-${month}-${day}`))
  date.value = new Date(`${year}-${month}-${day}`)
  title.value = editTitle
  description.value = editDescription
  levelValue.value = editLevelValue
}

const handleResetForm = () => {
  title.value = ''
  description.value = ''
  levelValue.value = optionsLevel.value[0]
  date.value = new Date()
}

defineExpose({ editForm, handleResetForm })
</script>

<template>
  <teleport to="body">
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="w-full max-w-[600px] bg-white/10 backdrop-blur-2xl rounded-md px-4 py-8 relative">
        <div class="flex items-center justify-between">
          <h2 class="text-xl uppercase text-highlight font-medium">{{ modalType === 'add' ? 'Add Task' : 'Edit Task' }}</h2>
          <div @click="emit('closeModal')" class="text-red-500 absolute *:scale-125 p-2 top-2 right-2">
            <v-icon name="md-cancel-round"></v-icon>
          </div>
        </div>
        <form @submit.prevent="emit('handleSubmitForm', title, description, levelValue, date)"
              class="px-4 mt-6 space-y-4">
          <InputCustom placeholder="Title" :value="title" @modelValue="title = $event" />
          <TextAreaCustom placeholder="Description" :value="description" @modelValue="description = $event" />
          <div class="*:w-full #:bg-white rounded-md text-white">
            <SelectCustom :value="levelValue" :options="optionsLevel" @modelValue="levelValue = $event" />
          </div>
          <CalendarCustom v-model="date" />
          <div class="flex items-center justify-end">
            <BtnCustom type="submit" title="Save" />
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<style scoped>

</style>
