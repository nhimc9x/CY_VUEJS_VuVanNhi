<script setup>
import { ref, watch } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  name: {
    type: String
  },
  value: {
    type: String
  },
  title: {
    type: String
  },
  modelValue: {
    type: [String, null],
    default: null
  },
  classColor: {
    type: String,
    default: 'accent'
  }
})

const radio = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  radio.value = newVal
})

</script>

<template>
  <label
    :class="twMerge('cursor-pointer has-[:checked]:text-accent flex items-center', `has-[:checked]:text-${classColor}`)"
  >
    <input
      hidden
      type="radio"
      :name="name"
      :value="value"
      v-model="radio"
      @input="$emit('update:modelValue', $event.target.value)"
      class="peer"
    >
    <span
      :class="twMerge(
        'size-4 block rounded-full bg-transparent border-2 border-white cursor-pointer peer-checked:bg-accent',
        `peer-checked:bg-${classColor}`
        )"
    >
    </span>
    <span class="ml-2">{{ title }}</span>
  </label>
</template>

<style scoped>

</style>
