<script setup>
const props = defineProps({
  placeholder: {
    type: String,
  },
  className: {
    type: String,
  },
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
          <textarea
            :value="value"
            :placeholder="placeholder"
            @input="$emit('modelValue', $event.target.value.trim())"
            :class="className"
            value=""
            class="w-full p-2 border border-white rounded bg-transparent outline-none text-white min-h-[138px] max-h-[138px]"
          >
          </textarea>
</template>

<style scoped>

</style>
