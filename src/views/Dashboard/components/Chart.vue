<script setup>
import BarChart from '@/views/Dashboard/components/ChartType/BarChart.vue'
import LineChart from '@/views/Dashboard/components/ChartType/LineChart.vue'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  ArcElement,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Colors
} from 'chart.js'
import { computed, ref } from 'vue'
import PieChart from '@/views/Dashboard/components/ChartType/PieChart.vue'

ChartJS.register(
  CategoryScale,
  Colors,
  BarElement,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const data = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  data: [40, 20, 12, 39, 10, 40],
  name: 'Thu nhập tổng'
})

const props = defineProps({
  chartType: {
    type: String,
    default: 'Column'
  }
})

const Component = computed(() => {
  switch (props.chartType) {
    case 'Line':
      return LineChart
    case 'Circle':
      return PieChart
    default:
      return BarChart
  }
})

</script>

<template>
  <div class="w-[78%] flex p-6">
    <div class="w-full h-full bg-third rounded-lg px-10 grid place-content-center">
      <component :is="Component" :data="data" />
    </div>
  </div>
</template>

<style scoped>

</style>
