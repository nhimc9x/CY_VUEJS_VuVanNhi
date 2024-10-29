<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const showInput = ref(false)
const showInputEdit = ref(false)
const todoList = reactive(JSON.parse(localStorage.getItem('todoList')) || [])
const newTodo = ref('')
const currentDate = ref(new Date())
const optionFilter = reactive([
  {
    id: 1,
    name: 'All',
    quantity: todoList.length
  },
  {
    id: 2,
    name: 'Completed',
    quantity: todoList?.filter(todo => todo.complete).length
  },
  {
    id: 3,
    name: 'Incomplete',
    quantity: todoList?.filter(todo => !todo.complete).length
  }
])
const currentFilter = ref(optionFilter[0].id)

const changeFilter = (id) => {
  currentFilter.value = id
}

const filterTodoList = computed(() => {
  switch (currentFilter.value) {
    case optionFilter[0].id:
      return todoList
    case optionFilter[1].id:
      return todoList?.filter(todo => todo.complete)
    case optionFilter[2].id:
      return todoList?.filter(todo => !todo.complete)
    default:
      return todoList
  }
})

const addNewTodo = () => {
  if (newTodo.value === '') return
  todoList?.push({
    id: uuidv4(),
    name: newTodo.value,
    complete: false
  })
  newTodo.value = ''
}

const removeAllCompleted = () => {
  // todoList = todoList.filter(todo => !todo.complete);
  todoList?.splice(0, todoList.length, ...todoList?.filter(todo => !todo.complete))
}

watch(todoList, () => {
  optionFilter[0].quantity = todoList.length
  optionFilter[1].quantity = todoList?.filter(todo => todo.complete).length
  optionFilter[2].quantity = todoList?.filter(todo => !todo.complete).length
  localStorage.setItem('todoList', JSON.stringify(todoList))
}, { deep: true })

const formatDate = computed(() =>
  new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full'
  }).format(currentDate.value)
)

const editTodoValue = ref('')

let originalTodoName = ''

const handleEditTodo = (todoName) => {
  if (showInputEdit.value) {
    showInputEdit.value = false
    originalTodoName = ''
    return
  }
  showInputEdit.value = true
  editTodoValue.value = todoName
  originalTodoName = todoName
}

const handleUpdateTodo = () => {
  if (editTodoValue.value === '') return
  todoList.find(todo => todo.name === originalTodoName).name = editTodoValue.value
  showInputEdit.value = false
  originalTodoName = ''
}

</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 py-10">
    <div class="bg-white max-w-[400px] mx-auto rounded-xl shadow-2xl pt-6 pb-1 px-1">
      <div
        class="grid grid-cols-3 items-center border-b-2 border-gray-200 text-gray-400 *:text-center *:pb-2 *:cursor-pointer">
        <div class="">Message</div>
        <div class="text-black font-medium border-b-[1.6px] border-black">Today's Task</div>
        <div class="">Last Activity</div>
      </div>
      <div
        class="w-full bg-gray-100 rounded-b-lg px-7 pb-7 min-h-[400px] transition-all duration-200 ease-in-out overflow-hidden">

        <div class="flex items-center justify-between py-7">
          <div>
            <div class="text-lg font-semibold">Today's Task</div>
            <div class="text-xs text-gray-400">{{ formatDate }}</div>
          </div>
          <div
            @click="showInput = !showInput"
            class="flex text-sm hover:bg-blue-200 duration-200 items-center gap-2 text-blue-600 bg-blue-100 py-1 px-3 rounded-md cursor-pointer">
            <div class="text-lg">+</div>
            <div>New Task</div>
          </div>
        </div>

        <form @submit.prevent="addNewTodo" v-if="showInput" class="pb-7 flex gap-2">
          <input v-model.trim="newTodo" class="w-full bg-white rounded-md px-3 py-2 text-sm" type="text"
                 placeholder="Enter name task">
          <button class="text-sm bg-blue-500 text-white px-3 py-1 rounded-md">Add</button>
        </form>

        <form @submit.prevent="handleUpdateTodo(editTodoValue)" v-if="showInputEdit" class="pb-7 flex gap-2">
          <input v-model.trim="editTodoValue" class="w-full bg-white rounded-md px-3 py-2 text-sm" type="text"
                 placeholder="Edit name task">
          <button class="text-sm bg-yellow-400 text-white px-3 py-1 rounded-md">Edit</button>
        </form>

        <div class="flex items-center justify-between text-gray-400 mb-4">
          <div
            v-for="(option, index) in optionFilter"
            :key="index"
            :class="{'text-blue-700 font-medium ': currentFilter === option.id}"
            @click="changeFilter(option.id)"
            class="text-xs flex items-center gap-1 cursor-pointer">
            <div>{{ option.name }}</div>
            <div
              :class="currentFilter === option.id ? 'bg-blue-700' : 'bg-gray-300'"
              class="scale-75 text-[10px] px-2 py-0.5 font-roboto font-light text-white rounded-full"
            >{{ option.quantity }}
            </div>
          </div>
        </div>

        <div v-if="currentFilter === 2" @click="removeAllCompleted">
          <div
            class="text-center hover:bg-red-200 cursor-pointer text-red-500 text-sm py-2 px-4 rounded w-max mx-auto duration-300">
            Delete all completed
          </div>
        </div>

        <ul class="mt-4 space-y-3">
          <li v-for="todo in filterTodoList"
              :class="originalTodoName === todo.name ? 'bg-yellow-100' : 'bg-white '"
              :key="todo.id"
              class="rounded-lg relative group cursor-pointer"
          >
            <div @click="handleEditTodo(todo.name)"
                 :class="originalTodoName === todo.name ? '-left-5' : '-left-16'"
                 class="absolute size-8 p-1.5 bg-yellow-200 rounded-full top-5 group-hover:-left-5 duration-300 ease-in-out">
              <img class="img-cover" src="@/assets/icons/edit.svg" alt="">
            </div>
            <div class="flex items-center justify-between px-5 py-3">
              <div>
                <div :class="{'line-through': todo.complete}">{{ todo.name }}</div>
                <div class="text-sm text-gray-500">{{ todo.name }}</div>
              </div>
              <label
                class="has-[:checked]:bg-blue-600 bg-white border border-gray-300 size-5 rounded-full p-1 cursor-pointer">
                <input type="checkbox" class="hidden" v-model="todo.complete" />
                <img src="@/assets/icons/check-svgrepo-com.svg" alt="" />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
