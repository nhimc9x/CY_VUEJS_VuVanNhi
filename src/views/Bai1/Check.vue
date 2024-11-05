<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  dataItem: {
    type: Array,
    required: true
  }
})

const listIsCheck = computed(() => props.dataItem.filter(item => item.isCheck))
const listNotCheck = computed(() => props.dataItem.filter(item => !item.isCheck))

</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <div class="space-y-4">
      <div class="text-2xl">Đã xác nhận</div>
      <ul>
        <li v-for="item in listIsCheck" :key="item.id" class="flex gap-6 items-center">
          <div class="text-xl font-medium">{{ item.name }}</div>
          <div class="text-xl tracking-wider">$ {{ item.price }}</div>
        </li>
      </ul>
    </div>
    <div class="space-y-4">
      <div class="text-2xl">Chưa xác nhận</div>
      <ul>
        <li v-for="item in listNotCheck" :key="item.id" class="flex gap-6 items-center">
          <div class="text-xl font-medium">{{ item.name }}</div>
          <div class="text-xl tracking-wider">$ {{ item.price }}</div>
        </li>
      </ul>
    </div>
  </div>

</template>
<style scoped>

</style>
