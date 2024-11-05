<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <select
    :value="value"
    @change="$emit('modelValue', $event.target.value)"
    class="bg-transparent px-2 border rounded py-1 block outline-none">
    <option
      class="bg-gray-300 text-accent"
      v-for="(item, index) in options"
      :key="index" :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>

<style scoped>

</style>
