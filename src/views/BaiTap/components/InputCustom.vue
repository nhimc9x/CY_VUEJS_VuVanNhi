<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  placeholder: {
    type: String
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const ipValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  ipValue.value = newVal
})

</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    v-model="ipValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full p-2 border border-white rounded outline-none bg-transparent text-white"
  >
</template>

<style scoped>

</style>
