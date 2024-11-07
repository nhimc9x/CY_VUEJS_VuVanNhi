<script setup>
import { ChartBarIcon, PresentationChartLineIcon, ChartPieIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'
import BarChart from '@/views/Dashboard/components/ChartType/BarChart.vue'
import { ref } from 'vue'
const chartType = ref([
  {
    name: 'Column',
    icon: ChartBarIcon,
  },
  {
    name: 'Line',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Circle',
    icon: ChartPieIcon,
  },
  {
    name: 'Settings',
    icon: AdjustmentsHorizontalIcon,
  }
])
const currentCategory = ref(chartType.value[0])

const emit = defineEmits(['changeChartType'])

const handleChangeCategory = (item) => {
  currentCategory.value = item
  emit('changeChartType', item.name)
}

</script>

<template>
  <div class="w-[20%]">
    <ul class="flex flex-col gap-y-10 pt-16 pl-6">
      <li
        v-for="item in chartType"
        :key="item.name"
        class="flex items-center gap-4 cursor-pointer text-text-color hover:text-highlight"
        @click="handleChangeCategory(item)"
      >
        <component
          :is="item.icon"
          :class="{'brightness-200 text-highlight' : item.name === currentCategory.name}"
          class="size-8"
        />
        <div
          :class="{'text-highlight brightness-200' : item.name === currentCategory.name}"
          class="text-xl font-semibold tracking-wider"
        >{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
