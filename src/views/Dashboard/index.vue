<script setup>
import Header from '@/views/Dashboard/components/Header.vue'
import SideBar from '@/views/Dashboard/components/SideBar.vue'
import Display from '@/views/Dashboard/components/Chart.vue'
import { ref } from 'vue'

const chartType = ref('')

const changeChartType = (item) => {
  chartType.value = item
}

</script>

<template>
  <div class="w-full min-h-screen bg-primary">
    <div class="max-w-[1280px] mx-auto w-full">
      <Header />
      <div class="flex w-full h-[680px] justify-between *:bg-secondary *:rounded-xl">
        <SideBar
          @changeChartType="changeChartType"
        />
        <Display
          :chartType="chartType"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
