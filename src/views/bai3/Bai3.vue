<script setup>
import { ref } from 'vue'

const textSize = ref(16)

</script>

<template>
  <div class="">
    <div class="form">
      <input v-model="textSize" type="number" placeholder="Enter font-size">
    </div>
    <div class="title" :style="{fontSize: textSize + 'px'}">VueJs - Vũ Văn Nhị</div>
  </div>
</template>

<style scoped>
.title {
  color: deeppink;
  text-align: center;
  margin: 40px auto 0;
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
