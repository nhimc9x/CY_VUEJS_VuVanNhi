<script setup>
import { Line } from 'vue-chartjs'
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
      pointStyle: 'circle',
      pointRadius: 14,
      pointHoverRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.11)',
      borderColor: '#258885',
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#eee",
        font: {
          size: 18,
        }
      }
    },
    y: {
      ticks: {
        color: "#eee",
        font: {
          size: 16,
        }
      }
    }
  },
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Biểu đồ đường',
      color: '#ffffff',
      font: {
        size: 20,
      }
    }
  }
})
</script>

<template>
  <Line
    :data="chartData"
    :options="chartOptions"
  />
</template>

<style scoped>

</style>
