<script setup>
import { Bar } from 'vue-chartjs'
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
      backgroundColor: ['#258885'],
      borderColor: ['#ffffff'],
      borderWidth: 2,
      borderRadius: 12
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#eee',
        font: {
          size: 18
        }
      }
    },
    y: {
      ticks: {
        color: '#eee',
        font: {
          size: 16
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#ffffff',
        font: {
          size: 18
        }
      }
    },
    title: {
      display: true,
      text: 'Biểu đồ cột',
      align: 'start',
      color: '#ffffff',
      font: {
        size: 24
      }
    }
  }
})
</script>

<template>
  <Bar
    :options="chartOptions"
    :data="chartData"
  />
</template>

<style scoped>

</style>
