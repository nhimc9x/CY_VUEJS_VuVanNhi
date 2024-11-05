<script setup>
import { computed, defineProps, ref, watch } from 'vue'
import BtnCustom from '@/views/BaiTap/components/BtnCustom.vue'
import CheckBoxCustom from '@/views/BaiTap/components/CheckBoxCustom.vue'
import SelectCustom from '@/views/BaiTap/components/SelectCustom.vue'

const props = defineProps({
  headers: {
    type: Array,
    default: () => []
  },
  mockData: {
    type: Array
  },
  export: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['deleteTodo', 'updateStatus', 'showModalEdit', 'updateExport'])

const sortTodoByDate = computed(() => {
  return props.mockData.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/')
    const [dayB, monthB, yearB] = b.date.split('/')
    const dateA = new Date(`20${yearA}-${monthA}-${dayA}`)
    const dateB = new Date(`20${yearB}-${monthB}-${dayB}`)
    return dateA - dateB
  })
})

const arrCheckbox = ref([])

const colorLevel = (level) => {
  switch (level) {
    case 'High':
      return 'bg-red-500/40'
    case 'Medium':
      return 'bg-orange-500/40'
    case 'Low':
      return 'bg-green-500/40'
    default:
      return 'bg-gray-300'
  }
}

const handleCheck = (id) => {
  arrCheckbox.value.includes(id) ? arrCheckbox.value = arrCheckbox.value.filter(item => item !== id) : arrCheckbox.value.push(id)
}

const handleCheckAll = () => {
  arrCheckbox.value.length === props.mockData.length ? arrCheckbox.value = [] : arrCheckbox.value = props.mockData.map(item => item.id)
}

const handleEditStatus = (id, value) => {
  emit('updateStatus', id, value === 'Completed')
}

const handleExport = () => {
  alert('Export todo in txt')
  emit('updateExport', false)
  const todos = props.mockData.filter(todo => arrCheckbox.value.includes(todo.id))
  if (todos.length === 0) return
  const textContent = todos.map(todo => `${todo.name}: ${todo.description}`).join('\n')
  const blob = new Blob([textContent], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'todos.txt'
  link.click()
}

watch(() => props.export, (value) => {
  if (value) {
    handleExport()
  }
})

watch(() => props.mockData, () => {
  arrCheckbox.value = []
})

</script>

<template>
  <table id="my-table">
    <thead>
    <tr>
      <th>
        <CheckBoxCustom id="all" @changeValue="handleCheckAll"
                        :checked="arrCheckbox.length === props.mockData.length" />
      </th>
      <th v-for="item in headers" :key="item">{{ item }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in sortTodoByDate" :key="item.id">
      <td>
        <CheckBoxCustom :checked="arrCheckbox.includes(item.id)" :id="item.id" @changeValue="handleCheck" />
      </td>
      <td>{{ item.name }}</td>
      <td>{{ item.description }}</td>
      <td>
        <div :class="colorLevel(item.level)" class="p py-1 px-2 p rounded capitalize">
          {{ item.level }}
        </div>
      </td>
      <td>
        <SelectCustom :value="item.completed ? 'Completed' : 'Not completed'" :options="['Completed', 'Not completed']"
                      @modelValue="handleEditStatus(item.id, $event)" />
      </td>
      <td>{{ item.date }}</td>
      <td class="flex gap-x-2 ga">
        <BtnCustom color="warning" title="Edit" @click="emit('showModalEdit', item.id)" />
        <BtnCustom color="danger" title="Delete" @click="emit('deleteTodo', item.id)" />
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>
#my-table {
  @apply w-full bg-[#262d47] text-gray-200 rounded text-left rtl:text-right;

  > thead {
    @apply text-highlight text-lg uppercase tracking-widest;

    > tr {
      > th {
        @apply p-4;
      }
    }
  }

  > tbody {
    > tr {
      @apply even:bg-secondary bg-primary/60;

      > td {
        @apply px-4 py-3 border-b border-gray-700;
      }
    }
  }
}
</style>
