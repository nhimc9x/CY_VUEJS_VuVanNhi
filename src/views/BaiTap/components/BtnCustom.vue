<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  title: {
    type: String,
    default: 'Button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const handleColor = computed(() => {
  switch (props.color) {
    case 'warning':
      return 'bg-orange-500'
    case 'danger':
      return 'bg-red-500'
    default:
      return 'bg-blue-500'
  }
})
</script>

<template>
  <button
    :type="type"
    :class="handleColor"
    class="px-4 py-2 rounded-md text-white font-medium"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot>{{ title }}</slot>
  </button>
</template>

<style scoped>

</style>
