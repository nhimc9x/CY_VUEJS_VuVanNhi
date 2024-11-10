<script setup>
import { ref } from 'vue'
import 'v-calendar/style.css'
import { useDark } from '@vueuse/core'
import { useTodosStore } from '@/views/Calendar/store/todos'

const isDark = useDark()

const { todos, chooseDate } = useTodosStore()

const attrs = ref([
  {
    key: 'choose',
    highlight: true,
    dates: chooseDate
  },
  ...todos
])

// :initial-page="{ month: 1, year: 2018 }"

</script>

<template>
  <div
    id="board-calendar"
    class="h-full border border-[#f3f4f6] dark:border-[#333537] bg-white dark:bg-[#131314] flex-1 rounded-[2.25rem] m-3 mt-0 overflow-hidden"
  >
    <VCalendar
      transparent
      style="width: 100%; height: 100%;"
      :isDark="isDark"
      :masks="{ weekdays: 'WWW' }"
      :attributes="attrs"
      expanded
      color="custom"
      borderless
    >
      <template #day-content="{ day, attributes }">
        <div
          class="text-center h-full hover:bg-blue-300/20 dark:hover:bg-blue-300/10 cursor-pointer flex flex-col border border-[#f3f4f6] px-1 dark:border-[#333537] rounded-md">
          <span>{{ day.day }}</span>
          <ul id="list-events" class="overflow-x-auto my-1 px-1 flex-1 overflow-auto">
            <li
              v-for="attr in attributes"
              :key="attr.key"
            >
              <div
                v-if="attr?.customData"
                class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                :class="attr.customData.class"
              >
                {{ attr.customData.title }}
              </div>
            </li>
          </ul>
        </div>
      </template>
    </VCalendar>
  </div>
</template>

<style>
#board-calendar .vc-header {
  @apply hidden;
}

#board-calendar .vc-pane-container .vc-pane-layout {
  @apply h-full;
}

#board-calendar .vc-pane-container .vc-pane-layout .vc-weeks {
  @apply h-full grid grid-rows-[10%_18%_18%_18%_18%_18%] p-0 overflow-hidden;
}

#board-calendar .vc-pane-container .vc-pane-layout .vc-weeks .vc-weekdays > div {
  @apply pt-5 pb-6;
}

#board-calendar .vc-pane-container .vc-pane-layout .vc-weeks > div:last-child {
  @apply hidden;
}

#board-calendar .vc-day.is-today {
  @apply border-2 border-[#bfdbfe] dark:border-[#146fa8];
}

#board-calendar .vc-highlights.vc-day-layer {
  @apply bg-blue-300/20 dark:bg-blue-300/10 rounded-md;
}

#board-calendar .vc-highlights.vc-day-layer > div {
  @apply hidden;
}

#list-events::-webkit-scrollbar {
  @apply h-2 w-1.5;
}

#list-events::-webkit-scrollbar-track {
  @apply rounded-2xl bg-gray-500/10;
}

#list-events::-webkit-scrollbar-thumb {
  @apply rounded-2xl bg-blue-300 dark:bg-blue-500;
}

</style>
