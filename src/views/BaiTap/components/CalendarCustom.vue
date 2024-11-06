<script setup>
import { ref, watch } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const props = defineProps({
  color: {
    type: String,
    default: 'transparent'
  },
  modelValue: {
    type: [String, null, Date],
    default: null
  }
})

const date = ref(props.modelValue);

watch(() => props.modelValue, (newVal) => {
  console.log(newVal)
  date.value = newVal;
});

</script>

<template>
    <DatePicker
      expanded
      :color="color"
      v-model="date"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<style scoped>
.vc-weeks, .vc-day {
  color: aqua !important;
}

</style>
