<script setup>
import { Pie } from 'vue-chartjs'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const chartData = ref({
  labels: props.data.labels,
  datasets: [
    {
      data: props.data.data,
      label: props.data.name,
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Biểu đồ tròn',
      color: '#ffffff',
      font: {
        size: 24
      }
    }
  }
})
</script>

<template>
  <Pie
    class="p-10"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<style scoped>

</style>
