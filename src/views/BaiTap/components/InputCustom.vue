<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    class="w-full p-2 border border-white rounded outline-none bg-transparent text-white"
    @input="$emit('modelValue', $event.target.value.trim())"
  >
</template>

<style scoped>

</style>
