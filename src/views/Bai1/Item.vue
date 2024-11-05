<script setup>
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  dataItem: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['handleCheck'])

onMounted(() => {
  console.log("I am created")
})

</script>

<template>
  <div class="text-3xl uppercase">this is item</div>
  <ul class="m-4 space-y-2">
    <li v-for="item in dataItem" :key="item.id" class="flex gap-6 items-center">
      <div class="text-xl font-medium">{{ item.name }}</div>
      <div class="text-xl tracking-wider">$ {{ item.price }}</div>
      <button
        @click="emit('handleCheck', item)"
        :disabled="item.isCheck" :class="item.isCheck ? 'bg-gray-400 text-gray-300' : 'bg-gray-300'"
        class="text-xl  px-4 py-2">Xac nhận</button>
    </li>
  </ul>
</template>

<style scoped>

</style>
