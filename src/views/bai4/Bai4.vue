<script setup>
import { ref, watch } from 'vue'

const a = ref(0)
const b = ref(0)

const result = ref('Chưa có kết quả')

watch([() => a.value, () => b.value], () => {
  const tich = a.value * b.value
  const hieu = a.value - b.value
  const thuong = a.value / b.value
  const tong = a.value + b.value
  result.value = `Tích: ${tich}, Hiệu: ${hieu}, Thương: ${thuong}, Tổng: ${tong}`
}, {deep: true})

</script>

<template>
  <div class="">
    <div class="form">
      <input v-model.number="a" type="number" placeholder="Enter number a">
      <input v-model.number="b" type="number" placeholder="Enter number b">
    </div>
    <p class="result">Kết quả: {{ result }}</p>
  </div>
</template>

<style scoped>
.result {
  color: deeppink;
  text-align: center;
  margin: 40px auto 0;
  font-size: 16px;
  transition: all 0.5s ease-in-out;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 200px;
  min-width: 200px;
  margin: 0 auto;

  > input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>
