<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  groupTaps: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String
  }
})

const currentTap = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

watch(() => currentTap.value, (newValue) => {
  emit('update:modelValue', newValue)
})

</script>

<template>
  <div class="ml-auto flex items-center border border-[#747775] dark:border-[#8e918f] text-lg capitalize rounded-full overflow-hidden">
    <button
      v-for="(tap, index) in groupTaps"
      :key="index"
      :class="tap === currentTap ? 'bg-blue-200 dark:bg-[#146fa8]' : 'hover:bg-[#e2e7eb] dark:hover:bg-[#2b2b2c]' "
      @click="currentTap = tap"
      class="px-4 py-1 border-r border-r-[#747775] dark:border-r-[#8e918f] last:border-r-0"
    >
      {{ tap }}
    </button>
  </div>
</template>

<style scoped>

</style>
