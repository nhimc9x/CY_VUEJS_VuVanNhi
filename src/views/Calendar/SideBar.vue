<script setup>
import { ref, watch } from 'vue'
import { useDark } from '@vueuse/core'
const isDark = useDark()

const data = ref(null)

const props = defineProps({
  showSidebar: {
    type: Boolean,
    required: true
  }
})


const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'custom',
      fillMode: 'light',
    },
    dates: new Date()
  }
])

watch(data, (newValue) => {
  console.log(new Date(2024, 10, 6))
})

</script>

<template>
  <nav
    :class="showSidebar ? 'w-[300px]' : 'w-0'"
    class="duration-500 ease-in-out overflow-hidden pt-4 flex flex-col items-center"
  >
    <div
      :class="showSidebar ? 'translate-x-0' : 'translate-x-[-100%]'"
      class="w-max duration-500 ease-in-out"
    >
      <VDatePicker
        v-model="data"
        title-position="left"
        transparent
        borderless
        color="custom"
        :isDark="isDark"
        :attributes="attrs"
      />
    </div>
  </nav>
</template>

<style scoped>

</style>
