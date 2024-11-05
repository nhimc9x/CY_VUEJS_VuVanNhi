<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  id: {
    type: [String, Number],
    required: true
  }
})
</script>

<template>
  <label class="size-5 block rounded bg-transparent border-2 border-white has-[:checked]:bg-accent cursor-pointer">
    <input
      hidden
      :id="id"
      type="checkbox"
      @input="$emit('changeValue', id)"
      :checked="checked"
    >
  </label>
</template>
<style scoped>
</style>
