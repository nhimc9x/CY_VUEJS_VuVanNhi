import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todosStore', () => {
  const todos = ref([
    {
      key: 1,
      customData: {
        title: 'Lunch with mom.',
        class: 'bg-red-600 text-white'
      },
      dates: new Date(2024, 10, 1)
    },
    {
      key: 2,
      customData: {
        title: 'Take Noah to basketball practice',
        class: 'bg-blue-500 text-white'
      },
      dates: new Date(2024, 10, 2)
    },
    {
      key: 3,
      customData: {
        title: 'Noah\'s basketball game.',
        class: 'bg-blue-500 text-white'
      },
      dates: new Date(2024, 10, 5)
    },
    {
      key: 41,
      customData: {
        title: 'Take car to the shop đ',
        class: 'bg-indigo-500 text-white'
      },
      dates: new Date(2024, 10, 5)
    },
    {
      key: 423,
      customData: {
        title: 'Take car to the shop đ',
        class: 'bg-indigo-500 text-white'
      },
      dates: new Date(2024, 10, 5)
    },
    {
      key: 42,
      customData: {
        title: 'Take car to the shop đ',
        class: 'bg-indigo-500 text-white'
      },
      dates: new Date(2024, 10, 5)
    },
    {
      key: 411,
      customData: {
        title: 'Take car to the shop',
        class: 'bg-indigo-500 text-white'
      },
      dates: new Date(2024, 10, 5)
    },
    {
      key: 224,
      customData: {
        title: 'Take car to the shop',
        class: 'bg-indigo-500 text-white'
      },
      dates: new Date(2024, 10, 5)
    },
    {
      key: 4122,
      customData: {
        title: 'Meeting with new client.',
        class: 'bg-teal-500 text-white'
      },
      dates: new Date(2024, 10, 7)
    },
    {
      key: 5,
      customData: {
        title: 'Mia\'s gymnastics practice.',
        class: 'bg-pink-500 text-white'
      },
      dates: new Date(2024, 10, 11)
    },
    {
      key: 7,
      customData: {
        title: 'Mia\'s gymnastics recital.',
        class: 'bg-pink-500 text-white'
      },
      dates: new Date(2024, 10, 22)
    },
    {
      key: 8,
      customData: {
        title: 'Visit great grandma.',
        class: 'bg-red-600 text-white'
      },
      dates: new Date(2024, 10, 25)
    }
  ])

  const chooseDate = ref(new Date(2024, 10, 6))

  return {
    todos,
    chooseDate
  }
})
